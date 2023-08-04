/*:
 * @plugindesc [RPG Maker MZ] [Version 1.0] [GTS]
 * 
 * @param apiKey
 * @text API Key
 * @desc The API key to be used for making requests to the server.
 * @type string
 * @default
 *
 * @param gptResponseVariableId
 * @text GPT Response Variable ID
 * @desc The ID of the variable where the GPT response will be stored.
 * @type variable
 * @default 6
 *
 * @author Gamer Tool Studio
 *
 * @help DialogCraftGPT.js
 *
 * This plugin allows you to send a user input to a server using an API endpoint,
 * and display the server's response in a wrapped format in RPG Maker MZ.
 *
 * @command sendRequest
 * @text Send Request
 * @desc Sends the user input to the server and stores the response for the "Display Response" command.
 *
 * @arg userInput
 * @text User Input
 * @desc The text input provided by the player.
 * @type multiline_string
 * @default 
 *
 * @arg maxInputWords
 * @text Max Input Words
 * @desc The maximum number of words allowed in the user input.
 * @type number
 * @default 50
 *
 * @arg historyVariableId
 * @text History Variable ID
 * @desc The ID of the variable used to store the conversation history.
 * @type variable
 * @default 11
 *
 * @command characterContext
 * @text Character Context
 * @desc Stores the user input data and sends it to the server as JSON.
 *
 * @arg name
 * @text Name 
 * @desc Name of the character.
 * @type string
 * @default GPT Wizard
 *
 * @arg age
 * @text Age
 * @desc The age of the character.
 * @type number
 * @default 0
 *
 * @arg traits
 * @text Personality Traits
 * @desc The traits of the character stored as a JSON array.
 * @type string
 * @default ["friendly", "optimistic", "adventurous"]
 *
 * @arg dialogueStyle
 * @text Dialogue Style
 * @desc The dialogue style of the character.
 * @type string
 * @default casual
 *
 * @arg backgroundStory
 * @text Background Story
 * @desc The background story of the character.
 * @type string
 * @default John is a skilled adventurer who has traveled the world in search of hidden treasures. He is always eager to help others and believes in the power of friendship.
 *
 * @arg eventsKnowledge
 * @text Events Knowledge
 * @desc The character's knowledge of events stored as a JSON object.
 * @type string
 * @default {"Event 1": "Crime scene", "Event 2": "Alice affair with Joseph"}
 *
 * @arg interests
 * @text Interests
 * @desc The character's interests stored as a JSON object.
 * @type string
 * @default {"Technology": 7, "Cars": 9}
 *
 * @arg supportiveness
 * @text Supportiveness
 * @desc The supportiveness score of the character (0 to 10).
 * @type number
 * @default 10
 *
 * @arg maxOutputWords
 * @text Max Output Words
 * @desc The maximum number of words allowed in the server response output.
 * @type number
 * @default 100
 *
 * @command displayResponse
 * @text Display Response
 * @desc Displays the stored response in the response window.
 *
 * @arg eventId
 * @text Event ID
 * @desc The ID of the event to continue after displaying the response (default: 0).
 * @type number
 * @default 0
 *
 * @arg eventPageId
 * @text Event Page ID
 * @desc The ID of the event page to continue after displaying the response (default: 0).
 * @type number
 * @default 0
 *
 * @arg actorImage
 * @text Actor Image
 * @desc The default actor image to be displayed in the response window.
 * @type file
 * @dir img/faces
 * @default Actor1
 *
 * @arg actorName
 * @text Actor Name
 * @desc The default actor name to be displayed in the response window.
 * @type string
 * @default GPT Wizard
 *
 * @arg wrapTextLenght
 * @text Wrap text length
 * @desc The maximum word length for wrapping the server response in the response window (default: 40).
 * @type number
 * @default 40
 */

(function() {
 // Retrieve the plugin parameters
  var pluginParams = PluginManager.parameters('GPTPlugin');
  var apiKey = pluginParams['apiKey'];
  var gptResponseVariableId = parseInt(pluginParams['gptResponseVariableId']) || 6;

  function showPrompt() {
    // Define a custom prompt to get user input
    const promptText = "Enter your message:";
    const defaultInput = "Hi!";

    // Show the prompt window to the player
    let userInput = window.prompt(promptText, defaultInput);

    // Normalize line breaks to ensure consistency
    const normalizedInput = userInput ? userInput.replace(/\r\n|\r/g, '\n') : '';

    return normalizedInput;
  }	

  function updateConversationHistory(userInput, response, historyVariableId) {
    const variableValue = $gameVariables.value(historyVariableId);
    const newEntry = `User: ${userInput}\nGPT: ${response}`;
    if (variableValue) {
      $gameVariables.setValue(historyVariableId, variableValue + '\n\n' + newEntry);
    } else {
      $gameVariables.setValue(historyVariableId, newEntry);
    }

    // Log the updated content of the conversation history variable
    const updatedValue = $gameVariables.value(historyVariableId);
    console.log(`Conversation History (Variable ${historyVariableId}):\n${updatedValue}`);
  }

  function wrapText(text, wrapTextLength) {
    const words = text.split(' ');
    let wrappedText = '';
    let currentLine = '';

    for (const word of words) {
      const potentialLine = currentLine + (currentLine ? ' ' : '') + word;
      if (potentialLine.length <= wrapTextLength) {
        currentLine = potentialLine;
      } else {
        wrappedText += (wrappedText ? '\n' : '') + currentLine;
        currentLine = word;
      }
    }

    if (currentLine) {
      wrappedText += (wrappedText ? '\n' : '') + currentLine;
    }

    return wrappedText;
  }

  function showGptResponse(response, eventId, eventPageId, actorImage, actorName) {
    const wrapTextLenght = $gameVariables.value(7) || 40;
    const wrappedResponse = wrapText(response, wrapTextLenght);

    $gameMessage.clear();
    $gameMessage.setFaceImage(actorImage, 5);
    $gameMessage.setSpeakerName(actorName);
    $gameMessage.add(wrappedResponse);

    if (eventId > 0) {
      const event = $gameMap.event(eventId);
      if (event) {
        event.start(eventPageId);
      }
    }
  }

  const pluginName = "GPTPlugin";

  PluginManager.registerCommand(pluginName, 'sendRequest', function (args) {
    const eventId = parseInt(args.eventId, 10) || 0;
    const eventPageId = parseInt(args.eventPageId, 10) || 0;
    let userInput = args.userInput.trim(); // Remove leading/trailing spaces
    const historyVariableId = parseInt(args.historyVariableId, 10) || 1;
    const maxInputWords = parseInt(args.maxInputWords, 10) || 50;
    const maxOutputWords = parseInt(args.maxOutputWords, 10) || 100; // Added the Max Output Words argument

    // Use the custom prompt to get the user input if it's empty or null
    if (!userInput) {
      const promptText = "Enter your message:";
      const defaultInput = "Hi!";
      const promptUserInput = window.prompt(promptText, defaultInput);

      // Normalize line breaks to ensure consistency
      userInput = promptUserInput ? promptUserInput.replace(/\r\n|\r/g, '\n') : 'Hi!';
    }

    // Limit the number of words in userInput
    const words = userInput.split(' ');
    const limitedUserInput = words.slice(0, maxInputWords).join(' ');

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: limitedUserInput,
        history: $gameVariables.value(historyVariableId), // Include the conversation history
      }),
    };

    console.log("Sending request to server...");

    fetch("http://localhost:3000/api/send-message", requestOptions)
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("HTTP request failed");
        }
      })
      .then(function (data) {
        console.log("Received response from server:", data);

        // Store the response data in the specified variable (GPT Response)
        $gameVariables.setValue(gptResponseVariableId, data.response); // Updated to use the plugin parameter

        // Update the conversation history variable
        updateConversationHistory(userInput, data.response, historyVariableId);
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  });
	
  PluginManager.registerCommand(pluginName, "characterContext", function (args) {
    let userInput = args.userInput || '';
    const age = parseInt(args.age, 10) || 0;
    const traits = JSON.parse(args.traits || '[]');
    const dialogueStyle = args.dialogueStyle || 'casual';
    const backgroundStory = args.backgroundStory || '';
    const eventsKnowledge = JSON.parse(args.eventsKnowledge || '{}');
    const interests = JSON.parse(args.interests || '{}');
    const supportiveness = parseInt(args.supportiveness, 10) || 0;
    const maxOutputWords = parseInt(args.maxOutputWords, 10) || 100; // Added the Max Output Words argument

    // Add the apiKey value to the requestOptions headers
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apiKey,
      },
      body: JSON.stringify({
        name: userInput,
        age: age,
        personality: {
          traits: traits,
          dialogueStyle: dialogueStyle,
        },
        "background story": backgroundStory,
        "Events knowledge": eventsKnowledge,
        interests: interests,
        supportiveness: supportiveness,
        "maxOutputWords": maxOutputWords, // Include the Max Output Words in the JSON data
      }),
    };

    console.log("Sending character context to server...");

    fetch("http://localhost:3000/api/character-context", requestOptions)
      .then(function (response) {
        if (response.ok) {
          console.log("Character context sent successfully!");
        } else {
          throw new Error("HTTP request failed");
        }
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  });

  PluginManager.registerCommand(pluginName, "displayResponse", function (args) {
    const eventId = parseInt(args.eventId, 10) || 0;
    const eventPageId = parseInt(args.eventPageId, 10) || 0;
    const actorImage = args.actorImage;
    const actorName = args.actorName;

    const response = $gameVariables.value(6);
    if (typeof response === 'string') {
      showGptResponse(response, eventId, eventPageId, actorImage, actorName);
    }
  });
})();

/*:
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.0] [Gamer Tools Studio]
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
 * @help 
 *  
 ===============================================================================
 * Introduction
 ===============================================================================
 *
 * This plugin enables dynamic AI-powered conversations in RPG Maker MZ game 
 * events by sending user inputs to a server and displaying the server's
 * creative responses wrapped neatly in the game as one of your characaters. 
 * Craft interactive dialogue with artificial intelligence, immersing 
 * players in captivating stories and engaging gameplay.
 *
 * Features include, but are not limited to, the following:
 *
 *  * Enable user text input for interactive character conversations.
 *  * Send user inputs as requests to Chat GPT for dynamic responses.
 *  * Establish character contexts and traits to guide Chat GPT's interactions.
 *  * Receive Chat GPT's responses seamlessly, delivered through in-game    
 *    characters. 
 *  * Display AI-generated responses smoothly within game events.
 *  * Control the length of both input and output messages for optimal
 *    storytelling.
 *
 ===============================================================================
 * Requirements
 ===============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations         
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * the best performance.
 *
 * =============================================================================
 * 1. Setting up Plugin Parameters:
 *============================================================================
 *
 * The plugin has two parameters that you need to configure.
 *
 * --- 
 *    
 * API Key 
 *
 * This is the API key required for making requests to the server. If you don't
 * have one, activate it at https://gamertoolstudio.com. Enter your API key in 
 * the "API Key" parameter.
 *  
 * ---
 * 
 * GPT Response Variable ID
 *
 * This is the ID of the variable where the GPT response will be stored. The 
 * plugin will use this variable to store the response received from the server.
 * You can leave it as the default value (6) or change it to a different 
 * variable ID.
 *
 * =============================================================================
 * 2. Commands List
 *============================================================================
 *  
 * The plugin provides three command sections that you can use in your events.
 *    
 * ---
 * 
 * Character Context 
 *
 * This command allows you to send user input data to the server as JSON, 
 * which helps the AI understand the context and generate more accurate 
 * responses. You can provide information about the character's name, age,
 * personality traits, background story, knowledge of events, interests and
 * supportiveness.
 *    
 * ---
 * 
 * Send Request 
 *
 * This command is used to send the user input to the server and store the AI's 
 * response in the specified variable (GPT Response Variable). You can also 
 * provide the * conversation history, which helps maintain context between 
 * interactions.
 * 
 * ---
 *
 * Display Response 
 *
 * This command displays the stored response in the game's message window. 
 * You can customize the appearance of the response by providing the actor 
 * image, actor name, and wrap text length (maximum word length for wrapping 
 * the response).
 *
 * ===========================================================================
 * 3. Arguments and Configurations
 * ===========================================================================
 *  
 * Here's the list of all the arguments you can config under each command 
 * section to customize chat GPT as character for your own game:
 *
 * ---
 *
 * Send Request
 * 
 * ------------------  -------------------------------------------------------
 * Argument            Descripion
 * -----------------   -------------------------------------------------------
 *                     The text input provided by the player. This is usually 
 * User Input          left empty when using the plugin command in an event,
 *                     as the plugin will prompt the player for input.
 *
 * Max Input Words     The maximum number of words allowed in the user input.
 *
 * History Variable ID The ID of the variable used to store the conversation 
 *                     history.
 *
 * ---
 *
 * Character Context
 * 
 * ------------------  -------------------------------------------------------
 * Argument            Descripion
 * -----------------   -------------------------------------------------------
 * Name                Name of the character(a string).
 *
 * Age                 The age of the character (a number.
 *
 * Personality Traits  The traits of the character stored as a JSON array. 
 *                     Example: ["friendly", "optimistic""adventurous"].
 * Dialogue Style      The dialogue style of the character stored as a JSON 
 *                     array. Ecample "casual", "formal").
 * Background Story    The background story of the character stored as a JSON 
 *                     object.
 *                     The character's knowledge of events stored as a JSON 
 * Events Knowledge    object. Example: {"Event 1": "Crime scene", "Event 2": 
 *                     "Alice affair with Joseph"}.
 * Interests           The character's interests stored as a JSON object. 
 *                     Example: {"Technology": 7, "Cars": 9}.
 * Supportiveness      The supportiveness score of the character to determine 
 *                     how much its output shall help the player (0 to 10).
 * Max Output Words    The maximum number of words allowed in the server 
 *                     response output (a number).
 *
 * ---
 *
 * Display Response
 * 
 * ------------------  -------------------------------------------------------
 * Argument            Descripion
 * -----------------   -------------------------------------------------------
 * Event ID            The ID of the event to continue after displaying the 
 *                     response. Set to 0 if you don't want to continue a 
 *                     specific event.
 * Event Page ID       The ID of the event page to continue after displaying 
 *                     the response. Set to 0 if you don't want to continue on 
 *                     a specific page.
 * Actor Image         The image of the characater played by GPT to be 
 *                     displayed in the response window (database image).
 * Actor Name          The name of the charactaer palyed by GPT to be 
 *                     displayed in the response window (text).
 * Wrap Text Length    The word length for wrapping the server response in the 
 *                     response window
 *
 * ---
 *
 * ===========================================================================
 * 4. Implementation Example
 * ===========================================================================
 *
 * Let's create an example event!
 *
 * With the following implementation, when the player interacts with the event,
 * the plugin will prompt the player for input, send the user input to the 
 * server, receive the AI response, display it in the game's message window, 
 * and reset the conversation history variable for the next interaction.
 *
 * ---
 *
 * Event Page 1
 *
 *     1. Add a new event page and select "Plugin Command".
 *     2. Choose "Character Context" from the dropdown.
 *     3. Fill in the arguments for character context, such as name, age, 
 *        traits, dialogue style, background story, events knowledge, 
 *        interests, supportiveness, and max output words.
 *     4. Add another command and choose "Send Request" from the dropdown.
 *     5. Leave the "User Input" argument empty to let the plugin prompt the 
 *        player for input.
 *     6. Set the "Max Input Words" to limit the number of words the player can 
 *        input.
 *     7. Set the "History Variable ID" to store the conversation history.
 *
 * ---
 *
 * Event Page 2
 * 
 *     1. Add a new event page and set the condition to "Variable x > 1" 
 *        (where "x" is the variable ID you used for the "History Variable ID").
 *     2. Select "Plugin Command."
 *     3. Choose "Display Response" from the dropdown.
 *     4. Fill in the arguments for displaying the response, such as event ID 
 *        (0),event page ID (0), actor image, actor name, and wrap text   
 *        length.
 *     5. Add another command to set "Control Variable x" (where "x" is the 
 *        variable ID you used for the "History Variable ID") to 0.
 *
 * ---
 *
 * [Note:] Make sure to adjust the event's content and flow according to your 
 * game's needs.
 *
 * -----------------------------------------------------------------------------
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
 * @default 17
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
 * @arg wrapTextLength
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

  function showGptResponse(response, eventId, eventPageId, actorImage, actorName, wrapTextLength) {
  const wrappedResponse = wrapText(response, wrapTextLength);

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
    const maxOutputWords = parseInt(args.maxOutputWords, 10) || 100; 

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
        "maxOutputWords": maxOutputWords, 
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
	  const wrapTextLength = parseInt(args.wrapTextLength) || 40; 
	  const response = $gameVariables.value(gptResponseVariableId);
	  if (typeof response === 'string') {
		showGptResponse(response, eventId, eventPageId, actorImage, actorName, wrapTextLength); 
	  }
	});
})();
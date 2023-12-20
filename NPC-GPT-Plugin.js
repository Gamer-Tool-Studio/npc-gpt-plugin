 /*:
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.0] [Gamer Tools Studio]
 * 
 * @param apiKey
 * @text API Key
 * @desc The API key to be used for making requests to the server.
 * @type string
 * @default
 *
 * @param apiKeyVariable
 * @text API Key Variable
 * @desc The ID of the variable that contains the API key.
 * @type variable
 * @default 18
 *
 * @param gptResponseVariableId
 * @text GPT Response Variable ID
 * @desc The ID of the variable where the GPT response will temporarily be stored.
 * @type variable
 * @default 6
 *
 * @param responseStatusVariable
 * @text Response Status Variable
 * @desc The ID of the variable to track the response status.
 * @type variable
 * @default 13
 *
 *
 * @author Gamer Tool Studio
 *
 * @help 
 *  
 ===============================================================================
 * Introduction
 ===============================================================================
 *
 * This plugin enables the deployment of dynamic AI-powered conversations
 * with NPCs in RPG Maker MZ game events by sending user inputs to a server 
 * and displaying the server's creative responses wrapped neatly in the game 
 * as one of your characaters. Craft interactive conversations with artificial 
 * intelligence, immersing players in captivating stories and engaging gameplay.
 *
 * Features include, but are not limited to, the following:
 *
 *  * Enable user text input for interactive character conversations.
 *  * Send user inputs as requests to Chat GPT API for dynamic responses.
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
 * ------ API KEY ------
 *
 * You need to have an account with Gamer Tools Studio and an active API KEY
 * to be able to connect and send requests to NPC-GPT API. You can
 * create an account and activate a FREE TRIAL to get your key at
 * https://gamertoolstudio.com. 
 * 
 * =============================================================================
 * 1. Plugin Parameters
 *==============================================================================
 *
 * The plugin has four parameters that you need to configure.
 *
 * --- 
 *    
 * API Key 
 *
 * This is the API key required for making requests to the server. Log in
 * to your account with Gamer Tools Studio and activate your key at 
 * https://gamertoolstudio.com. Enter your API key in the "API Key"
 * parameter.
 *  
 * ---
 * 
 * Account ID
 * 
 * This is the ID of your account with Gamer Tools Studio. It is used to keep
 * track of your token usage when making requests to the server. Enter your 
 * Account ID in the "AccountId" parameter.
 * 
 * ---
 * 
 * GPT Response Variable ID
 * 
 * This is the ID of the variable where the character response  provided by the 
 * server is termporarily stored. It is used to be displayed in the game as the
 * NPC response and is updated every single request.You can leave it as the
 * default value (6) or change it to a different variable ID.
 * 
 * =============================================================================
 * 2. Commands List
 *==============================================================================
 *  
 * The plugin provides three command sections that you can use in your events.
 *    
 * ---
 * 
 * Character Context 
 *
 * This command allows you to define the NPC and helps the AI understand the 
 * context and generate more accurate responses. Y
 * ou can provide information about the character's name, age,
 * personality traits, background story, knowledge of events, interests and
 * supportiveness.
 *    
 * ---
 * 
 * Send Request 
 *
 * This command is used to send the user input to the server and store the AI's 
 * response in the specified variable (GPT Response Variable). It also 
 * provides the chat history, which helps maintain context between 
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
 * section to customize chat GPT as an NPC for your own game:
 *
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
 * Dialogue Style      The speech style of the character stored as a JSON 
 *                     array. Ecample ["casual", "formal"].
 * Background Story    The background story of the character stored as a JSON 
 *                     object.
 *                     The character's knowledge of events stored as a string.
 * Events Knowledge    Example: "Knows there is a secret map at the entrance
 *                     of the big cave under a yellow flower and  knows the player 
 *                     harduous future". 
 * Interests           The character's interests stored as a JSON object. 
 *                     Example: {"Technology": 7, "Cars": 9}.
 * Supportiveness      The supportiveness score of the character to determine 
 *                     how much its output shall help the player (0 to 10).
 * Max Output Words    The maximum number of words allowed form the server 
 *                     response.
 * Context Variable ID The ID of the variable used to store an NPC "Character Context"
 *                     data. Its default value is set to (12) but please ensure
 *                     each NPC has a different Context Variable ID value.             
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
 *                     history between the player and the NPC. Its default 
 *                     value is set to (11) but please ensure each NPC has a 
 *                     different Context Variable ID value.   
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
 * ============================================================================
 * 4. Implementation Example
 * ============================================================================
 *
 *
 * With the following implementation, when the player interacts with the event,
 * the plugin will create and store a "Character Context" then in another page the
 * "Send Request" command will prompt the player for input and send it to the 
 * server and receive the AI response. Finally, in another Event Page, the 
 * "Display Response" command will display the response in the game's message 
 * window, and reset the conversation status for the next interaction.
 *
 * ---
 *
 * Event Page 1
 *
 *     1. Add a new event page and select "Plugin Command".
 *     2. Choose "Character Context" from the dropdown.
 *     3. Fill in the arguments for character context, such as name, age, 
 *        traits, dialogue style, background story, events knowledge, 
 *        interests, supportiveness, max output words and History Variable
 *        ID.
 *     4. Go to "Control Variables", select a new variablçe (x) and set its
 *        value to "1".
 *
 * ---
 *
 * Event Page 2
 * 
 *     1. Add a new event page and set the condition to "Variable x > 1" 
 *        (where "x" is the variable ID you defined in the first page.
 *     2. Select "Plugin Command." and choose the "Send Request" command from 
 *        the dropdown.
 *     5. Leave the "User Input" argument empty to let the plugin prompt the 
 *        player for input.
 *     6. Set the "Max Input Words" value to limit the number of words the 
 *        player can input.
 *     7. Set the "History Variable ID" value to store the conversation history.
 *     8. Create a "Self-Switch" (A) and turn it ON.
 *
 * ---
 *
 * Event Page 3
 * 
 *     1. Add a new event page and set the condition to "Self-Switch: (A)".
 *     2. Select "Plugin Command."
 *     3. Choose "Display Response" from the dropdown.
 *     4. Fill in the arguments for displaying the response, such as event ID 
 *        (0),event page ID (0), actor image, actor name, and wrap text   
 *        length.
 *     5. Turn the "Self-Switch" (A) OFF to allow the player to keep interacting
 *        with NPC
 *
 * ---
 *
 * [Note:] Make sure to adjust the event's content and flow according to your 
 * game needs.
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
 * @arg contextVariableId
 * @text Context Variable ID
 * @desc The ID of the variable used to store the character context data.
 * @type variable
 * @default 12
 * 
 * @command characterContext
 * @text Character Context
 * @desc Stores NPC personality data and stores it in a variable.
 *
 * @arg name
 * @text Name 
 * @desc Name of the character.
 * @type string
 * @default GPTWizard
 *
 * @arg age
 * @text Age
 * @desc The age of the character.
 * @type number
 * @default 33
 *
 * @arg traits
 * @text Personality Traits
 * @desc The traits of the character stored as a JSON array.
 * @type string
 * @default ["shy",  "mystic", "adventurous"]
 *
 * @arg dialogueStyle
 * @text Dialogue Style
 * @desc The speech style of the character.
 * @type string
 * @default mysterious
 *
 * @arg backgroundStory
 * @text Background Story
 * @desc The background story of the character.
 * @type string
 * @default GPT WIzard is a Mage who lives in Mystery Foster. She was brought up by witches and mages after being found as a baby wondering in the forest. She belongs to this tribe that remains undiscovered by most humans but learned the ways of the past and future and is able to interpret signs and energies.
 *
 * @arg eventsKnowledge
 * @text Events Knowledge
 * @desc The character's knowledge of events stored as a JSON object.
 * @type string
 * @default Knows there is a secret map at the entrance of the big cave under a yellow flower and  knows the player harduous future in the forest with many enemies and challenges
 *
 * @arg interests
 * @text Interests
 * @desc The character's interests stored as a JSON object.
 * @type string
 * @default {"Astrology": 7, "Herbology": 9, "History": 8}
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
 * @default 50
 *
 * @arg contextVariableId
 * @text Context Variable ID
 * @desc The ID of the variable to store the character context data.
 * @type variable
 * @default 12
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
 * @arg actorImageIndex
 * @text Actor Image Index
 * @desc The index of the face to be displayed from the selected actor image file (From 0 to 7).
 * @type number
 * @default 0
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
  var pluginParams = PluginManager.parameters('NPC-GPT-Plugin');
  var apiKey = pluginParams['apiKey'];
  var apiKeyVariableId = parseInt(pluginParams['apiKeyVariable']) || 18;
  var gptResponseVariableId = parseInt(pluginParams['gptResponseVariableId']) || 6;
  var responseStatusVariable = parseInt(pluginParams['responseStatusVariable']) || 13;
	 
  // Define a custom prompt to get user input
   function showPrompt() {
     const promptText = "Enter your message:";
     const defaultInput = "Hi!";
 
     // Show the prompt window to the player
     let userInput = window.prompt(promptText, defaultInput);
 
     // Normalize line breaks to ensure consistency
     const normalizedInput = userInput ? userInput.replace(/\r\n|\r/g, '\n') : '';
     
     console.log("User Input:", normalizedInput);
     return normalizedInput;
   }  

   // Display the text response within the window limits
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

   
   // Show NPC response in-game
   function showGptResponse(response, eventId, eventPageId, actorImageFile, actorImageIndex, actorName, wrapTextLength, historyVariableId) {
	   const responseContent = response.content;
	   const wrappedResponse = wrapText(responseContent, wrapTextLength);

       $gameMessage.clear();

       // Use the provided actorImageFile and actorImageIndex
       const faceIndex = actorImageIndex || 0;
	   console.log("Used Actor Image File: " + actorImageFile);
	   console.log("Used Face Index: " + faceIndex);

       $gameMessage.setFaceImage(actorImageFile, faceIndex);
       $gameMessage.setSpeakerName(actorName);
       $gameMessage.add(wrappedResponse);

       if (eventId > 0) {
         const event = $gameMap.event(eventId);
         if (event) {
           event.start(eventPageId);
         }
       }

       if (response.chatHistory) {
         $gameVariables.setValue(historyVariableId, JSON.stringify(response.chatHistory));
	   }
   }

   const pluginName = "NPC-GPT-Plugin";
 
   PluginManager.registerCommand(pluginName, 'sendRequest', function (args) {
    const historyVariableId = parseInt(args.historyVariableId, 10) || 1;
    const contextVariableId = parseInt(args.contextVariableId, 10) || 12;   
    let userInput = args.userInput.trim();
    const maxInputWords = parseInt(args.maxInputWords, 10) || 50;

    // Check if the variable with ID 18 has any value and use it, otherwise use the apiKey from plugin parameters
    var apiKeyValue = $gameVariables.value(apiKeyVariableId);
    if (!apiKeyValue) {
        apiKeyValue = pluginParams['apiKey'];
    }
  
    // Use the custom prompt to get the user input if it's empty or null
    if (!userInput) {
      userInput = showPrompt(); // Call the showPrompt function to get user input
      
      // Normalize line breaks to ensure consistency
      userInput = userInput ? userInput.replace(/\r\n|\r/g, '\n') : 'Hi!';
    }
  
    // Limit the number of words in userInput
    const words = userInput.split(' ');
    const limitedUserInput = words.slice(0, maxInputWords).join(' ');
  
    let requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKeyValue // Add the API key to the Authorization header
      }
    };
  
    // Check if the History Variable contains data and send request
    if ($gameVariables.value(historyVariableId)) {
		requestOptions.body = JSON.stringify({
			userInput: limitedUserInput,
      		chatHistory: JSON.parse($gameVariables.value(historyVariableId) || '[]'), // Use the existing chat history
      		characterContext: {}, // Use an empty object for Character Context
		});
	} else {
		// If History Variable is empty, use characterContext from contextVariableId and send request
		requestOptions.body = JSON.stringify({
			userInput: limitedUserInput,
      		chatHistory: [], // Use an empty array for no history
      		characterContext: $gameVariables.value(contextVariableId), // Use the contextVariableId content
		});
	}
	   
	   	console.log("contextVariableId content:", 		$gameVariables.value(contextVariableId)); 
	   	console.log("Request data:", requestOptions.body);
	   	console.log("Sending request to the server...");

	   	// Get the response from the Server
	   	fetch("https://npc-gpt-api-04c6279a15ad.herokuapp.com/api/v1/chat/send-message", requestOptions)
  		.then(function (response) {
    		if (response.ok) {
      		return response.json();
    		} else {
      		throw new Error("HTTP request failed");
    		}
  		})
  		.then(function (data) {
    		console.log("Received response from server:", data);
  
    		// Store the assistant response data in the specified variable (GPT Response)
    		$gameVariables.setValue(gptResponseVariableId, 	data.response);
  
    		// Store the chat history into the variable
    		$gameVariables.setValue(historyVariableId, JSON.stringify(data.chatHistory));
  
    		// Log the updated content of the conversation history variable
    		const updatedValue = 		$gameVariables.value(historyVariableId);
    		console.log(`Conversation History (Variable 		${historyVariableId}):\n${updatedValue}`);
    
    		// Set the response status variable to 1
    		$gameVariables.setValue(responseStatusVariable, 1); 
  		})
  		.catch(function (error) {
    		console.error("Error:", error);
  		});
   });
     
  PluginManager.registerCommand(pluginName, "characterContext", function (args) {
    const age = parseInt(args.age, 10) || 0;
    const traits = JSON.parse(args.traits || '[]');
    const dialogueStyle = args.dialogueStyle || '';
    const backgroundStory = args.backgroundStory || '';
    
    // Parse the eventsKnowledge as a string
    const eventsKnowledge = args.eventsKnowledge || '';

    // Add error handling for JSON parsing for interests
    let interests = {};
    try {
        interests = JSON.parse(args.interests || '{}');
    } catch (e) {
        console.error("Error parsing 'interests':", e);
    }

    const supportiveness = parseInt(args.supportiveness, 10) || 0;
    const contextVariableId = parseInt(args.contextVariableId, 10);
    const maxOutputWords = parseInt(args.maxOutputWords, 10) || 50;

    // Create the context object directly from the arguments
    const characterContext = {
        name: args.name,
        age: age,
        personality: {
            traits: traits,
            dialogueStyle: dialogueStyle,
        },
        "background story": backgroundStory,
        "game knowledge": eventsKnowledge, 
        interests: interests,
        supportiveness: supportiveness,
        maxOutputWords: maxOutputWords,
    };

    // Store the context object in the specified variable (contextVariableId)
    $gameVariables.setValue(contextVariableId, characterContext);

    // Log the provided contextVariableId for debugging
    console.log("Provided contextVariableId:", contextVariableId);
    console.log("contextVariableId content:", $gameVariables.value(contextVariableId)); 
  });

  PluginManager.registerCommand(pluginName, "displayResponse", function (args) {
	  const eventId = parseInt(args.eventId, 10) || 0;
  	  const eventPageId = parseInt(args.eventPageId, 10) || 0;
  	  const actorImageFile = args.actorImage;
  	  const actorImageIndex = parseInt(args.actorImageIndex) || 0;
  	  const actorName = args.actorName;
  	  const wrapTextLength = parseInt(args.wrapTextLength) || 40;
  	  const response = $gameVariables.value(gptResponseVariableId);
  	  const historyVariableId = parseInt(args.historyVariableId, 10);

  	  if (response && typeof response === 'object') {
		  showGptResponse(response, eventId, eventPageId, actorImageFile, actorImageIndex, actorName, wrapTextLength, historyVariableId);
	  }
	  // Set the response status variable back to 0
	  $gameVariables.setValue(responseStatusVariable, 0);
  });
})();

# NPC-GPT-Plugin
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

NPC-GPT is a plugin for RPG Maker MZ that enables communication with the GPT-4 model to create dynamic and interactive conversation with NPCs in your game.

## Features

- Allow users to input text to interact with NPCs.
- Send requests with user inputs to GPT-4 model.
- Create character contexts and traits to create AI-powered NPC personalities.
- Display responses the AI NPCs in your game
- Seamlessly display responses into game events.
- Limit the length of input and output messages.

## Installation

1. Download the appropriate JavaScript file for your RPG Maker MZ version from the [Releases](https://github.com/YourUsername/DialogCraftGPT/releases) section.
2. Place the downloaded file in your RPG Maker MZ project's `js/plugins` directory.
3. Open your RPG Maker MZ project and go to "Plugin Manager."
4. Locate the "NPC-GPT-Plugin" and activate it.
5. Enter your API key in the plugin settings to establish a connection with the NPC-GPT API.

## Account Setup

To use the NPC-GPT plugin, you need an account with Gamer Tools Studio:

1. Sign up at [gamertoolstudio.com](https://gamertoolstudio.com).
2. Subscribe to a pricing plan or start a free trial to unlock API keys.
3. Get an API key from the Gamer Tool Studio dashboard to connect to our API.

## Plugin Parameters

- `apiKey`: The API key used for making requests to the server.
- `accountId`: The ID of your account with Gamer Tools Studio. It is used to keep track of your token usage when making requests to the server.
- `gptResponseVariableId`: The ID of the variable where the GPT response will be stored.


## Plugin Commands

### Send Request

Sends a request to the server contaning `userInput`, `chatHistory` and `characterContext` and stores the response for later use.

- `userInput`: The text input provided by the player.
- `maxInputWords`: The maximum number of words allowed in the user input.
- `historyVariableId`: The ID of the variable used to store conversation history.

### Character Context

Defines the NPC personality in a JSON object and keeps the AI in synch with the character

- `name`: Name of the NPC.
- `age`: The age of the NPC.
- `personalityTraits`: The personality traits of the NPC stored in a JSON array.
- `dialogueStyle`: The speech style of the character stored as a JSON array.
- `backgroundStory`: The background story of the character stored as a JSON object.
- `eventsKnowledge`: The character's knowledge of events stored as a string.
- `interests`: The character's interests stored as a JSON object. 
- `supportiveness`: The supportiveness score of the character to determine how much its output shall help the player (0 to 10).
- `maxOutputWords`: The maximum number of words allowed form the server response.                  
- `contextVariableId`: The ID of the variable used to store an NPC "Character Context" data
                   

### Display Response

Displays the stored response in the game window.

- `eventId`: The ID of the event to continue after displaying the response.
- `eventPageId`: The ID of the event page to continue after displaying the response.
- `actorImage`: The image of the characater played by GPT to be  displayed in the response window.     
- `actorName`: The name of the charactaer palyed by GPT to be displayed in the response window (text).                   
- `wrapTextLenght`: The word length for wrapping the server response in the responde window.                 

## Example Implementation

1. Create an event with three pages:
   - Page 1: Use `Character Context` plugin commands to store the NPC personality in a variable.
   - Page 2: Use `sendRquest`command to make post request to the server and get the NPC response.
   - Page 2: Use `Display Response` plugin command to show the NPC response in a showText window.

Event Page 1
 
      1. Add a new event page and select "Plugin Command".
      2. Choose "Character Context" from the dropdown.
      3. Fill in the arguments for character context, such as name, age, 
         traits, dialogue style, background story, events knowledge, 
         interests, supportiveness, max output words and History Variable
         ID.
      4. Go to "Control Variables", select a new variablçe (x) and set its
         value to "1".
 

Event Page 2
  
      1. Add a new event page and set the condition to "Variable x > 1" 
         (where "x" is the variable ID you defined in the first page.
      2. Select "Plugin Command." and choose the "Send Request" command from 
         the dropdown.
      5. Leave the "User Input" argument empty to let the plugin prompt the 
         player for input.
      6. Set the "Max Input Words" value to limit the number of words the 
         player can input.
      7. Set the "History Variable ID" value to store the conversation history.
      8. Create a "Self-Switch" (A) and turn it ON.
 

Event Page 3
  
      1. Add a new event page and set the condition to "Self-Switch: (A)".
      2. Select "Plugin Command."
      3. Choose "Display Response" from the dropdown.
      4. Fill in the arguments for displaying the response, such as event ID 
         (0),event page ID (0), actor image, actor name, and wrap text   
         length.
      5. Turn the "Self-Switch" (A) OFF to allow the player to keep interacting
         with NPC
 
  
[Note:] Make sure to adjust the event's content and flow according to your game needs.

## License

This plugin is released under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

This plugin was developed by [Gamer Tools Studio](https://gamertoolstudio.com).

## Support

For any inquiries or support, please open an [issue](https://github.com/YourUsername/DialogCraftGPT/issues) on GitHub.


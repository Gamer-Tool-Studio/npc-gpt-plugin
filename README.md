# DialogCraftGPT-plugin
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

DialogCraftGPT is a plugin for RPG Maker MZ that enables communication with the GPT model to create dynamic and interactive dialogues in your game.

## Features

- Allow users to input text to interact with characters.
- Send requests with user inputs to Chat GPT.
- Create character contexts and traits to instruct Chat GPT.
- Display responses from Chat GPT as your own characters.
- Seamlessly integrate responses into game events.
- Limit the length of input and output messages.

## Installation

1. Download the appropriate JavaScript file for your RPG Maker MZ version from the [Releases](https://github.com/YourUsername/DialogCraftGPT/releases) section.
2. Place the downloaded file in your RPG Maker MZ project's `js/plugins` directory.
3. Open your RPG Maker MZ project and go to "Plugin Manager."
4. Locate the "DialogCraftGPT" plugin and activate it.
5. Enter your API key in the plugin settings to establish a connection with the GPT API.

## Account Setup

To use the DialogCraftGPT plugin, you need an account on the Gamer Tool Studio website:

1. Sign up at [gamertoolstudio.com](https://gamertoolstudio.com).
2. Subscribe to a pricing plan or start a free trial to unlock API keys.
3. Get an API key from the Gamer Tool Studio dashboard to connect to our API.

## Plugin Parameters

- `apiKey`: The API key used for making requests to the server.
- `gptResponseVariableId`: The ID of the variable where the GPT response will be stored.

## Plugin Commands

### Send Request

Sends user input to the server and stores the response for later use.

- `userInput`: The text input provided by the player.
- `maxInputWords`: The maximum number of words allowed in the user input.
- `historyVariableId`: The ID of the variable used to store conversation history.

### Character Context

Stores user input data and sends it to the server as JSON.

- `name`: Name of the character.
- `age`: The age of the character.
- `traits`: The traits of the character stored as a JSON array.
- ... (Other arguments)

### Display Response

Displays the stored response in the game window.

- `eventId`: The ID of the event to continue after displaying the response.
- `eventPageId`: The ID of the event page to continue after displaying the response.
- ... (Other arguments)

## Example Implementation

1. Create an event with two pages:
   - Page 1: Use "Character Context" and "Send Request" plugin commands.
   - Page 2: Use "Display Response" plugin command with a conditional self-switch.

2. Event Page 1:
   - Character Context:
     - Name: GPT Wizard
     - Age: 30
     - Traits: ["friendly", "optimistic"]
     - ... (Other context settings)
   - Send Request:
     - User Input: [Prompt user for input]
     - Max Input Words: 50
     - History Variable ID: 11

3. Event Page 2 (Conditional on Self Switch A):
   - Display Response:
     - Actor Image: Actor1
     - Actor Name: GPT Wizard
     - Wrap Text Length: 40

## License

This plugin is released under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

This plugin was developed by [Gamer Tools Studio](https://gamertoolstudio.com).

## Support

For any inquiries or support, please open an [issue](https://github.com/YourUsername/DialogCraftGPT/issues) on GitHub.


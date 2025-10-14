# Ineffa - Multifunctional Discord Bot  

[![Ineffa Icon](https://i.postimg.cc/8CDJfCWV/b8c79e2838c9968b8ef285ee06459711-Original.jpg)]
 
Ineffa is a versatile, AI-powered Discord bot based on the character, Ineffa from Genshin Impact; designed to assist with server moderation, provide information, and engage with users through conversation, it is built with Node.js, discord.js, and powered by the Google Gemini API.
 
---  

## Features  
  
* **Conversational AI**: Engage in natural conversation by mentioning (@Ineffa) the bot. It maintains conversation history for context.  
* **Web Search**: Get summarized answers to questions about current events using the `/search` command, powered by Gemini's built-in Google Search.  
* **File Analysis**: Analyze uploaded files (images, documents, etc.) by providing a task with the `/analyse` command.
* **AutoMod Management**:  
    * Dynamically create AutoMod rules for keyword filtering and mention spam with `/automod-create`.  
    * Enable or disable all server AutoMod rules at once with `/automod-toggle`.  
* **Admin Tools**: Secure admin-only commands, such as `/setlimit` to change the conversation history length.  
* **Dynamic Presence**: The bot's status rotates through various activities.

---  
  
## Setup and Installation  
  
### Prerequisites  
* [Node.js](https://nodejs.org/) (v16.9.0 or higher) (v18.17.0 is recommended)
* A Discord Bot Application with a Token  
* API Keys for Google Gemini  
  
### Installation Steps
  
1.  **Clone the repository:**  
    ```bash  
    git clone https://github.com/toastylol/discord-gemineffa-v1.git
    cd discord-gemineffa-v1
    ```
  
2.  **Install dependencies:**  
    ```bash  
    npm install discord.js @google/generative-ai dotenv
    ```  
  
3.  **Configure Environment Variables:**  
    Create a file named `.env` in the project's root directory and add the following variables:  
  
    ```env
    # Your Discord Bot's Token  
    TOKEN=YOUR_DISCORD_BOT_TOKEN  
  
    # Your Discord Application's Client ID  
    CLIENT_ID=YOUR_DISCORD_CLIENT_ID  
  
    # Your Google Gemini API Key  
    API_KEY=YOUR_GEMINI_API_KEY  
  
    # The Discord User ID of the bot's administrator  
    ADMIN_USER_ID=YOUR_DISCORD_USER_ID  
      
    # (Optional) Add any other API keys here (You'll have to make the functions yourself!)
    STABILITY_API_KEY=YOUR_STABILITY_AI_KEY
    ```  
  
4.  **Register Slash Commands:**
    Run the deployment script once to register all slash commands with Discord.  
    ```bash
    node deploy-commands.js  
    ```  
  
5.  **Run the Bot:**  
    ```bash  
    node gemineffa.js  
    ```  
---  
  
## Usage  
  
### Conversational Chat  
-   Mention the bot `@Ineffa` at the beginning of your message to start a conversation.
-   You can also reply to any of the bot's messages to talk to it.
  
### Slash Commands  
-   `/analyse [file] [task]`: Analyzes an uploaded file.  
-   `/automod-create [type] [options]`: Creates a new AutoMod rule.  
-   `/automod-toggle [status]`: Enables or disables all AutoMod rules.  
-   `/search [query]`: Searches the web for information.  
-   `/setlimit [limit]`: (Admin only) Sets the message history limit for conversations.  

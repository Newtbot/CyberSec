require("dotenv").config();

// init discord.js
const {
	Client,
	GatewayIntentBits,
	Partials,
	Collection,
} = require("discord.js");
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
	allowedMentions: { parse: [] },
});

// init discord client
client.commands = new Collection();

// bot ready
client.on("ready", () => {
	console.log("Bot is ready!");
});

//import command handler
const { commandshandler } = require("./command_handler/commandhandler");
commandshandler(client);




client.login(process.env.DISCORD_TOKEN);

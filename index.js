// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new  Collection();

// reading json file
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

// bot login
client.login(config.token);

// bot ready
client.on('ready', () => {
    console.log('Bot is ready!');
}
)

client.login(config.token);






// init discord.js
const { Client, GatewayIntentBits, Collection } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  allowedMentions: { parse: [] },
});

// reading json file
const fs = require("fs");
const config = JSON.parse(fs.readFileSync("./config.json", "utf8"));

// bot login
client.login(config.token);

// bot ready
client.on("ready", () => {
  console.log("Bot is ready!");
});
// test module
const test = require("./test/test.js");
test(client);

// test slash command module
const testslash = require("./test/testslash.js");
testslash(client);


client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) return;
  
    if (interaction.commandName === "greet") {
      const name = interaction.options.getString("name");
      await interaction.reply(`Hello ${name}!`);
    }
  });
  
  




  
  

client.login(config.token);

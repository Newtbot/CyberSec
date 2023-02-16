const { SlashCommandBuilder } = require("discord.js");

module.exports = function (client) {
  // creating slash command
  const greetingCommand = new SlashCommandBuilder()
    .setName("greet")
    .setDescription("Sends a greeting message")
    .addStringOption((option) =>
      option
        .setName("name")
        .setDescription("The name of the person to greet")
        .setRequired(true)
    );

  // waiting for the client to be ready before registering the command
  client.on('ready', () => {
    client.application.commands.create(greetingCommand.toJSON());  
});
};

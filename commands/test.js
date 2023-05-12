const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
    // Slash command data
    data: new SlashCommandBuilder()
      .setName('test')
      .setDescription('tester'),
    // Slash command execute by user 
    async execute(interaction) {

      //reply with playerNames in a new line for all player
      await interaction.reply(`**test!**`);
    }
  };
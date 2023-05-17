const { SlashCommandBuilder } = require('@discordjs/builders');
//embeds for messages 
const { EmbedBuilder } = require('discord.js');
//load axios
const axios = require('axios');

module.exports = {
  // Slash command data
  data: new SlashCommandBuilder()
    .setName('getfiledetails')
    .setDescription('get file details based on hash from virustotal') 
    .addStringOption(option => option.setName('hash').setDescription('hash of the file')),
    async execute(interaction) {
        const hash = interaction.options.getString('hash');
    // api request with axios
    const options = {
        method: 'GET',
        url: 'https://www.virustotal.com/api/v3/files/' + hash ,
        headers: {
          headers: {accept: 'application/json'},
          'x-apikey': process.env.VIRUS_TOTAL_API_KEY
        }
      };
    
      axios
      .request(options)
      .then(function (response) {

        console.log(response.data);
    }
    )
    .catch(function (error) {
      console.error(error);
    }
    );
  },
};
const { SlashCommandBuilder } = require('@discordjs/builders');
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
          accept: 'application/json',
          'x-apikey': process.env.VIRUS_TOTAL_API_KEY
        }
      };
    
      axios
      .request(options)
      .then(function (response) {
        //console.log(response.data);
        const name = String(response.data.data.attributes.meaningful_name);
        const date = String(response.data.data.attributes.creation_date);
        console.log(name);
        console.log(date);
        console.log(response.data.data.attributes.last_analysis_date);
        console.log(response.data.data.attributes.md5);
        console.log(response.data.data.attributes.sha256);
        console.log(response.data.data.attributes.reputation);
      })
      .catch(function (error) {
        console.error(error);
      });
            


    }
};
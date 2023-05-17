const { SlashCommandBuilder } = require("@discordjs/builders");
const axios = require("axios");

module.exports = {
	// Slash command data
	data: new SlashCommandBuilder()
		.setName("scanurl")
		.setDescription("scan url with virustotal")
		.addStringOption((option) =>
			option.setName("url").setDescription("url to scan")
		),
	// Slash command execute by user
	async execute(interaction) {
		const url = interaction.options.getString("url");
		const options = {
			method: "POST",
			url: "https://www.virustotal.com/api/v3/urls" + url,
			headers: {
				accept: "application/json",
				"x-apikey": process.env.VIRUS_TOTAL_API_KEY,
			},
		};

		axios
			.request(options)
			.then(function (response) {
				console.log(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	},
};

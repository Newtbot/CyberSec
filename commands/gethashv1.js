const { SlashCommandBuilder } = require("@discordjs/builders");
//load axios
const axios = require("axios");

module.exports = {
	// Slash command data
	data: new SlashCommandBuilder()
		.setName("getfiledetailstest")
		.setDescription("get file details based on hash from URL Haus")
		.addStringOption((option) =>
			option.setName("hash").setDescription("hash of the file")
		),
	async execute(interaction) {
		const hash = interaction.options.getString("hash");
		// api request with axios
		const options = {
			method: "POST",
			url: "https://urlhaus-api.abuse.ch/v1/payload/",
			headers: {
				accept: "application/json",
				"Content-Type": "application/json",
			},
		};

		axios
			.request({
				...options,
				data: {
					hash: hash,
				},
			})
			.then(function (response) {
				console.log(response.data);
			});
	},
};

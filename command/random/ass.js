module.exports = {
	name: "ass",
	alias: ["ass"],
	category: "random",
	isSpam: true,
	async run({ msg, conn }) {
		await msg.reply(response.wait);
		const buttons = [{ buttonId: "#ass", buttonText: { displayText: "Get Again" }, type: 1 }];
		const buttonMessage = {
			image: { conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/ass?APIKEY=MahliKey },
			caption: "Ass🫵",
			buttons: buttons,
			headerType: 4,
		};

		await conn.sendMessage(msg.from, buttonMessage);
	},
};

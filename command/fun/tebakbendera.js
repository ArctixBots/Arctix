const { cekStatus, addSesi } = require("../../lib/optiongame");

module.exports = {
	name: "guessflag",
	alias: ["gamebendera"],
	category: "fun",
	desc: "Play games, guess the country flag",
	isSpam: true,
	isGroup: true,
	isLimitGame: false,
	async run({ msg, conn }, { q, map }) {
		if (cekStatus(msg.from, map, "tebakbendera")) throw "There are unanswered questions still...";
		let waktugame = 60;
		let tebakbendera = await rzky.game.tebakbendera();
		if (tebakbendera) {
			const { key } = await msg.reply(
				`*Guess The Country*\n\nFlag: ${tebakbendera.bendera}\nHint: ${tebakbendera.pertanyaan}\n\nAnswered Immediately, Time only 1 minute!\n\n*Happy Answering!*`
			);
			addSesi(msg.from, key.id, tebakbendera.jawaban, waktugame, map, "tebakbendera");
			conn.game[key.id] = { status: false };
		} else msg.reply("Error");
	},
};

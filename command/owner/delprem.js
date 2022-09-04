const fs = require("fs");
module.exports = {
	name: "delpremium",
	alias: ["delprem", "delvip"],
	category: "private",
	use: "@tag / number",
	query: "Example :\n*#delprem* @tag\n*#delprem* number",
	isSpam: true,
	isOwner: true,
	async run({ msg, conn }, { q, map, args, arg }) {
		if (args.length < 1) return reply(`Example :\n*#delprem* @tag\n*#delprem* number`);
		if (msg.mentions.length !== 0) {
			for (let i = 0; i < msg.mentions.length; i++) {
				premium.splice(prem.getPremiumPosition(msg.mentions[i], premium), 1);
				fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
			}
			msg.reply("Done ✅");
		} else {
			premium.splice(prem.getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
			fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
			msg.reply("Done ✅");
		}
	},
};

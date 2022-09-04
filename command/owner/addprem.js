module.exports = {
	name: "addpremium",
	alias: ["addprem", "addvip"],
	category: "private",
	desc: "Add user into the premium database",
	isSpam: true,
	isOwner: true,
	query: "Example :\n*#addprem* @tag person\n*#addprem* number\n\nExample : #addprem @tag 30d",
	use: "@tag 30d",
	async run({ msg, conn }, { q, map, args }) {
		if (args.length < 2)
			return msg.reply(
				`Example :\n*#addprem* @tag someone\n*#addprem* number days\n\nExample : #addprem @tag 30d`
			);
		if (msg.mentions.length !== 0) {
			for (let i = 0; i < msg.mentions.length; i++) {
				prem.addPremiumUser(msg.mentions[0], args[1], premium);
			}
			msg.reply("Done ✅");
		} else {
			prem.addPremiumUser(args[1] + "@s.whatsapp.net", args[1], premium);
			msg.reply("Done ✅");
		}
	},
};

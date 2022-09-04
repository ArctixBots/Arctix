module.exports = {
	name: "checkpremium",
	alias: ["checkprem", "checkvip"],
	category: "premium",
	isSpam: true,
	isPremium: true,
	async run({ msg, conn }) {
		let cekvip = require("parse-ms")((await prem.getPremiumExpired(msg.sender, premium)) - Date.now());
		let premiumnya = `*Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} Second(s)`;
		msg.reply(premiumnya);
	},
};

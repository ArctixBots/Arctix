module.exports = {
	name: "owner",
	alias: ["host"],
	category: "info",
	isSpam: true,
	async run({ msg, conn }, { q, map, args }) {
		var msga = await conn.sendContact(msg.from, config.owner, msg);
		await conn.sendMessage(msg.from, { text: `Well... He is my owner... Really: Royce Bob 🦀`}, {});
	},
};

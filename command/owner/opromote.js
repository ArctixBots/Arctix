module.exports = {
	name: "+",
	alias: ["admin"],
	category: "group",
	desc: "Promote owner to be admin group",
	use: "<OwnerTag>",
	isGroup: true,
	isBotAdmin: true,
	isOwner: true,
	isAdmin: false,
	async run({ msg, conn }) {
		const mm = msg.quoted ? [msg.quoted.sender] : msg.mentions;
		for (let i of mm) await conn.groupParticipantsUpdate(msg.from, [i], "promote");
		await msg.reply("You Are Now An Admin ;)");
	},
};

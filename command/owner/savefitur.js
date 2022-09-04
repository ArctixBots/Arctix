module.exports = {
	name: "save",
	alias: ["sf"],
	category: "private",
	desc: " Saves a file to db",
	isOwner: true,
	isSpam: true,
	query: "Give path file,\n example: .sf ./command/other/fitur.js",
	use: "<name file>",
	isQuoted: true,
	async run({ msg, conn }, { q, map, args }) {
		await require("fs").writeFileSync(q, msg.quoted.text);
		await msg.reply(`Saved successfully, and is restarting`);
		process.send("reset");
	},
};

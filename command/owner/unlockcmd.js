module.exports = {
	name: "unlockcmd",
	alias: ["ulockcmd"],
	category: "private",
	isOwner: true,
	desc: "unlocking command ",
	use: `<name command>`,
	query: `Give name of Command`,
	async run({ msg, conn }, { q, map, args, arg }) {
		var data = [...map.command.keys()];
		[...map.command.values()]
			.map((x) => x.alias)
			.join(" ")
			.replace(/ +/gi, ",")
			.split(",")
			.map((a) => data.push(a));
		if (!data.includes(q)) throw "Command was not off before";
		if (!map.lockcmd.has(q)) throw "Command already locked";
		map.lockcmd.delete(q);
		await msg.reply(`Succes UnLocking The Command "${q}"`);
	},
};

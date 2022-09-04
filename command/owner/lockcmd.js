module.exports = {
	name: "lockcmd",
	category: "private",
	isOwner: true,
	desc: "deactivate command ",
	use: `<command name | reason>`,
	query: `Deactivates certain commands, example: #lockcmd help | off`,
	async run({ msg, conn }, { q, map, args, arg }) {
		if (!args[2]) throw "Wrong Format, example: #lockcmd play | Has bugs";
		var data = [...map.command.keys()];
		[...map.command.values()]
			.map((x) => x.alias)
			.join(" ")
			.replace(/ +/gi, ",")
			.split(",")
			.map((a) => data.push(a));
		if (!data.includes(q.split("|")[0].trim())) throw "Command was not locked before";
		if (map.lockcmd.has(q.split("|")[0].trim())) throw "Command already locked";
		map.lockcmd.set(q.split("|")[0].trim(), q.split("|")[1].trim());
		await msg.reply(`Success Lock Command "${q.split("|")[0].trim()}" reason "${q.split("|")[1].trim()}"`);
	},
};

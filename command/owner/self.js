module.exports = {
	name: "self",
	alias: ["public"],
	category: "private",
	desc: "Switch between self and public",
	isSpam: true,
	isOwner: true,
	async run({ msg, conn }, { q, map }) {
		var command = msg.body.split(/ +/)[0].slice(1);
		switch (command) {
			case "public":
				if (!map.isSelf) throw "Already in public";
				map.isSelf = false;
				await msg.reply("Success change to public");
				break;
			case "self":
				if (map.isSelf) throw "Already in self";
				map.isSelf = true;
				config.owner.push(conn.decodeJid(conn.user.id));
				await msg.reply("Success change to self mode");
		}
	},
};

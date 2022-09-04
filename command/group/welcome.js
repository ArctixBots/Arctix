const getPosition = (name, _dir) => {
	let position = null;
	Object.keys(_dir).forEach((i) => {
		if (_dir[i].id === name) {
			position = i;
		}
	});
	if (position !== null) {
		return position;
	}
};

module.exports = {
	name: "welcome",
	desc: "activate the new member welcome feature",
	use: "<1 / 0>",
	category: "group",
	query: "enter options\n1 = active\n0 = inactive",
	isAdmin: true,
	isSpam: true,
	async run({ msg, conn }, { args, prefix }) {
		let data = JSON.parse(require("fs").readFileSync("./database/welcome.json"));
		let data2 = db.cekDatabase("welcome", "id", msg.from);
		if (args[0] == 1) {
			if (data2) throw "been active before";
			db.modified("welcome", { id: msg.from, teks: "Welcome to @subject Have Fun With Us 😊 @user\nWelcome Message By Arctix-AI 🦀", lastUpdate: false });
			await msg.reply(
				`Welcome turned on successfully\n Type\n1. *${prefix}setwelcome text*\n-desc: if you want to change the text on welcome\n2. *${prefix}setleft text*\n-desc: if you want to change the text on left`
			);
		} else if (args[0] == 0) {
			if (!data2) throw "not active before";
			data.splice(getPosition(msg.from, data), 1);
			require("fs").writeFileSync("./database/welcome.json", JSON.stringify(data, null, 2));
			await msg.reply("successfully inactivated welcome message in this group");
		}
	},
};

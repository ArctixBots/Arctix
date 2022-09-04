module.exports = {
	name: "scriptbot",
	alias: ["script", "sc", "scbot"],
	category: "info",
	isSpam: true,
	async run({ msg, conn }, { q, map, args }) {
		await conn.sendMessage(
			msg.from,
			{
				image: { url: config.thumb },
				footer: config.namebot,
				// Don't change the link you dirty dick, copy and paste here and there, change the source, assol
				caption: ` Bot name; *Arctix-AI*\n Bot Script: *Https://GitHub.com/GasComIT/Arctix*\n  
Author: *GasCom IT ©2022 Inc*\n Website: *Https://gascom-it.com/arctix*`,
				
			},
			{ quoted: msg }
		);
	},
};

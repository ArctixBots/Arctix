module.exports = {
  name: "close",
  use: "close",
  category: "group",
  desc: "Changes the setting so that only admins can message.",
  isGroup: true,
  isBotAdmin: true,
  isAdmin: true,
   async run({ msg, conn }, { q }) {
		await conn.groupSettingUpdate(msg.from, 'announcement')
},
}

module.exports = {
  name: "open",
  use: "open",
  category: "group",
  desc: "Changes the group setting so that all members can message.",
  isGroup: true,
  isBotAdmin: true,
  isAdmin: true,
   async run({ msg, conn }, { q }) {
		await conn.groupSettingUpdate(msg.from, 'not_announcement')
},
}

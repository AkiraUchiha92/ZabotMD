let handler = async (m, { conn, text, participants }) => {
    let users = participants.map(u => u.id)
    conn.reply(m.chat, '*「 TAG ALL 」*\n'+ 'Message:'+ ` *${text}*`+ '\n\n ' + users.map(v => '@' + v.replace(/@.+/, '')).join`\n🏅 `, m, {
      contextInfo: { mentionedJid: users }
    })
  }
  handler.command = ['tagall']
  handler.help = ['tagall']
  handler.tags = ['group']

  handler.admin = true
  handler.group = true
  
  export default handler

/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

   🛠️ 𝘿𝘼𝙑𝙄𝘿 𝙏𝙀𝘾𝙃 𝙄𝙉𝘾 - 𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇 𝘾𝙊𝘿𝙀 🛠️
   
   📌 NOTE:
   If you use or copy any part of this code,
   you MUST give proper credit!

   📞 Contact: +241 05730123
   🌐 GitHub: https://github.com/DavidTechInc

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/

const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({

    pattern: "menu",

    react: "💫",

    desc: "Get bot command list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let TerraMenu = `╭━〔 *𝐓𝐄𝐑𝐑𝐀 𝐗𝐌𝐃 𝐗𝟏* 〕━┈⊷
┃╭──────────────────
‎┃│🍹 *_𝐔𝐬𝐞𝐫 :_* ${pushname}
‎┃│🦄 *_𝐌𝐨𝐝𝐞 :_* ${config.MODE}
‎┃│🦋 *_𝐏𝐫𝐞𝐟𝐢𝐱 :_* ${config.PREFIX}
┃│💫 *_𝐂𝐫𝐞𝐚𝐭𝐨𝐫 :_* \`𝐂𝐫𝐚𝐳𝐲-𝐃𝐞𝐯\`
‎┃│⭐️ *_𝐕𝐞𝐫𝐬𝐢𝐨𝐧 :_* \`1.0.0\`
┃│🤖 *_𝐁𝐨𝐭-𝐍𝐚𝐦𝐞 :_* ${config.BOT_NAME}
┃│〽️ *_𝐀𝐥𝐰𝐚𝐲𝐬 𝐎𝐧𝐥𝐢𝐧𝐞 :_* 𝐀𝐜𝐭𝐢𝐯𝐞
‎┃╰──────────────────
╰━━━━━━━━━━━━━━━━━━━

     *\`ᴅᴏᴡɴʟᴏᴀᴅ-ᴍᴇɴᴜ\`*
> ╭────────────────❍
> ├➩ *.ғʙ*
> ├➩ *.ɪɴꜱᴛᴀ*
> ├➩ *.ᴠɪᴅᴇᴏ*
> ├➩ *.ɢᴅʀɪᴠᴇ*
> ├➩ *.ᴛᴡɪᴛᴛᴇʀ*
> ├➩ *.ᴛᴛ*
> ├➩ *.ᴍᴇᴅɪᴀғɪʀᴇ*
> ├➩ *.ᴘʟᴀʏ*
> ├➩ *.sᴏɴɢ*
> ├➩ *.ᴠɪᴅᴇᴏ*
> ├➩ *.sᴘᴏᴛɪꜰʏ*
> ├➩ *.ᴠɪᴅᴇᴏ4*
> ├➩ *.ɪᴍɢ*
> ├➩ *.Lʏʀɪᴄs*
> ├➩ *.ᴀᴘᴋ*
> ├➩ *.ʙᴀɪsᴄᴏᴘᴇ*
> ├➩ *.ɢɪɴɪsɪsɪʟᴀ*
> ┕────────────────❍
> *2025 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ ᴅᴇᴠ*

       *\`sᴇᴀʀᴄʜ-ᴍᴇɴᴜ\`*
> ╭────────────────❍
> ├➩ *.ʏᴛꜱ*
> ├➩ *.ʏᴛᴀ*
> ├➩ *.ᴍᴏᴠɪᴇɪɴғᴏ*
> ├➩ *.ᴍᴏᴠɪᴇ*
> ├➩ *.Gᴏᴏɢʟᴇ*
> ├➩ *.ᴡᴇᴀᴛʜᴇʀ*
> ├➩ *.sᴛɪᴄᴋsᴇᴀʀᴄʜ*
> ┕────────────────❍
> *2025 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ ᴅᴇᴠ*

        *\`ɢᴀᴍᴇ-ᴍᴇɴᴜ\`*
> ╭────────────────❍
> ├➩ *.ɴᴜᴍʙᴇʀɢᴀᴍᴇ*
> ├➩ *.ʀᴏʟʟ*
> ├➩ *.ᴄᴏɪɴꜰʟɪᴘ*
> ├➩ *.pick*
> ├➩ *.ᴋᴏɴᴀᴍɪ*
> ┕────────────────❍
> *2025 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ ᴅᴇᴠ*

         *\`ɴsғᴡ-ᴍᴇɴᴜ\`*
> ╭────────────────❍
> ├➩ *.ɴsғᴡᴍᴇɴᴜ*
> ├➩ *.ᴛᴇʀʀᴀɴᴜᴅᴇ*
> ┕────────────────❍
> *2025 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʜ ᴅᴇᴠ*

         *\`ᴀɪ-ɢᴘᴛ-ᴍᴇɴᴜ\`*
> ╭────────────────❍
> ├➩ *.ɢᴘᴛ*
> ├➩ *.ᴀɪ*
> ├➩ *.ᴀɴᴀʟʏsᴇ*
> ├➩ *.ʟʟᴀᴍᴀ3*
> ┕────────────────❍
> *2025 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ ᴅᴇᴠ*

        *\`ᴏᴡɴᴇʀ-ᴍᴇɴᴜ\`*
> ╭────────────────❍
> ├➩ *.ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
> ├➩ *.sᴇᴛᴛɪɴɢs*
> ├➩ *.ᴏᴡɴᴇʀ*
> ├➩ *.ʀᴇᴘᴏ*
> ├➩ *.ꜱʏꜱᴛᴇᴍ*
> ├➩ *.ꜱᴛᴀᴛᴜꜱ*
> ├➩ *.Aʙᴏᴜᴛ*
> ├➩ *.ʙʟᴏᴄᴋ*
> ├➩ *.ᴇᴠᴀʟ*
> ├➩ *.ᴜɴʙʟᴏᴄᴋ*
> ├➩ *.sʜᴜᴛᴅᴏᴡɴ*
> ├➩ *.ᴄʟᴇᴀʀᴄʜᴀᴛs*
> ├➩ *.sᴇᴛᴘᴘ*
> ├➩ *.ʙʀᴏᴀᴅᴄᴀsᴛ*
> ├➩ *.ᴊɪᴅ*
> ├➩ *.ɢᴊɪᴅ*
> ├➩ *.ᴘᴀɪʀ*
> ├➩ *.sᴀᴠᴇ*
> ├➩ *.ᴄᴀʟᴄ*
> ├➩ *.ʀᴇꜱᴛᴀʀᴛ*
> ├➩ *.sᴇᴛsᴜᴅᴏ*
> ┕────────────────❍
> *2025 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ ᴅᴇᴠ*

        *\`ɢʀᴏᴜᴘ-ᴍᴇɴᴜ\`*
> ╭────────────────❍
> ├➩ *.ʀᴇᴍᴏᴠᴇ*
> ├➩ *.ᴅᴇʟ*
> ├➩ *.ᴀᴅᴅ*
> ├➩ *.ᴋɪᴄᴋ*
> ├➩ *.ᴋɪᴄᴋᴀʟʟ*
> ├➩ *.sᴇᴛɢᴏᴏᴅʙʏᴇ*
> ├➩ *.sᴇᴛᴡᴇʟᴄᴏᴍᴇ*
> ├➩ *.ᴘʀᴏᴍᴏᴛᴇ*
> ├➩ *.ᴅᴇᴍᴏᴛᴇ*
> ├➩ *.ᴛᴀɢᴀʟʟ*
> ├➩ *.ɢᴇᴛᴘɪᴄ*
> ├➩ *.ɪɴᴠɪᴛᴇ*
> ├➩ *.ʀᴇᴠᴏᴋᴇ*
> ├➩ *.ᴘᴏʟʟ*
> ├➩ *.ʀᴀɴᴅᴏᴍsʜɪᴘ*
> ├➩ *.ɴᴇᴡɢᴄ*
> ├➩ *.ᴊᴏɪɴʀᴇǫᴜᴇsᴛs*
> ├➩ *.ᴀʟʟʀᴇǫ*
> ├➩ *.ᴍᴜᴛᴇ*
> ├➩ *.ᴜɴᴍᴜᴛᴇ*
> ├➩ *.ʟᴏᴄᴋɢᴄ*
> ├➩ *.ᴜɴʟᴏᴄᴋɢᴄ*
> ├➩ *.ʟᴇᴀᴠᴇ*
> ├➩ *.ɢɴᴀᴍᴇ*
> ├➩ *.ɢᴅᴇsᴄ*
> ├➩ *.ᴊᴏɪɴ*
> ├➩ *.ʜɪᴅᴇᴛᴀɢ*
> ├➩ *.ɢɪɴғᴏ*
> ├➩ *.ᴇᴘʜᴇᴍᴇʀᴀʟ ᴏɴ*
> ├➩ *.ᴇᴘʜᴇᴍᴇʀᴀʟ ᴏғғ*
> ├➩ *.ᴇᴘʜᴇᴍᴇʀᴀʟ 7ᴅ 24ʜ 90ᴅ*
> ├➩ *.sᴇɴᴅᴅᴍ*
> ┕────────────────❍
> *2025 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ ᴅᴇᴠ*

         *\`ɪɴғᴏ-ᴍᴇɴᴜ\`*
> ╭────────────────❍
> ├➩ *.ᴀʙᴏᴜᴛ*
> ├➩ *.Dᴇᴠ*
> ├➩ *.ᴀʟɪᴠᴇ*
> ├➩ *.ʀᴇǫᴜᴇsᴛ*
> ├➩ *.ʙᴏᴛɪɴꜰᴏ*
> ├➩ *.ꜱᴛᴀᴛᴜꜱ*
> ├➩ *.ᴘɪɴɢ*
> ├➩ *.ᴘɪɴɢ2*
> ├➩ *.ꜱʏꜱᴛᴇᴍ*
> ┕────────────────❍
> *2025 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ ᴅᴇᴠ*

       *\`ʀᴇʟɪɢɪᴏɴ-ᴍᴇɴᴜ\`*
> ╭────────────────❍
> ├➩ *.ʙɪʙʟᴇ*
> ├➩ *.ʙɪʙʟᴇʟɪsᴛ*
> ┕────────────────❍
> *2025 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ ᴅᴇᴠ*

         *\`ʙᴏᴛ-ᴍᴇɴᴜ\`*
> ╭────────────────❍
> ├➩ *.ᴠᴇʀsɪᴏɴ*
> ├➩ *.ʀᴇᴘᴏ*
> ├➩ *.ᴍᴇɴᴜ*
> ├➩ *.ᴄʜᴇᴄᴋᴜᴘᴅᴀᴛᴇ*
> ├➩ *.ᴜᴘᴅᴀᴛᴇ*
> ├➩ *.ᴍᴏᴅᴇ*
> ├➩ *.ᴀᴜᴛᴏᴛʏᴘɪɴɢ*
> ├➩ *.ᴀʟᴡᴀʏsᴏɴʟɪɴᴇ*
> ├➩ *.ᴀᴜᴛᴏʀᴇᴄᴏʀᴅɪɴɢ*
> ├➩ *.ᴀᴜᴛᴏʀᴇᴀᴅsᴛᴀᴛᴜs*
> ├➩ *.ᴀɴᴛɪʙᴀᴅ*
> ├➩ *.ᴀᴜᴛᴏsᴛɪᴄᴋᴇʀ*
> ├➩ *.ᴀᴜᴛᴏʀᴇᴘʟʏ*
> ├➩ *.ᴀᴜᴛᴏʀᴇᴀᴄᴛ*
> ├➩ *.ᴀɴᴛɪʟɪɴᴋ*
> ┕────────────────❍
> *2025 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ ᴅᴇᴠ*

        *\`ᴄᴏɴᴠᴇʀᴛ-ᴍᴇɴᴜ\`*
> ╭────────────────❍
> ├➩ *.sᴛɪᴄᴋᴇʀ*
> ├➩ *.ᴛᴀᴋᴇ*
> ├➩ *.ᴛʀᴛ*
> ├➩ *.ᴛᴛs*
> ├➩ *.ꜰᴀɴᴄʏ*
> ├➩ *.ᴜʀʟ*
> ├➩ *.sᴇɴᴅɪᴍᴀɢᴇ*
> ├➩ *.Aɢᴇ*
> ├➩ *.Cᴏɴᴠᴇʀᴛ*
> ├➩ *.ᴛɪɴʏ*
> ├➩ *.ᴛɢs*
> ┕────────────────❍
> *2025 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ ᴅᴇᴠ*

         *\`ᴏᴛʜᴇʀ-ᴍᴇɴᴜ\`*
> ╭────────────────❍
> ├➩ *.ᴛʀᴛ*
> ├➩ *.ᴊᴏᴋᴇ*
> ├➩ *.ꜰᴀᴄᴛ*
> ├➩ *.ɢɪᴛʜᴜʙ*
> ├➩ *.ɢᴘᴀꜱꜱ*
> ├➩ *.ʜᴀᴄᴋ*
> ├➩ *.ǫᴜᴏᴛᴇ*
> ├➩ *.ǫʀ*
> ├➩ *.vv*
> ├➩ *.sᴘᴀᴍ*
> ├➩ *.ᴠᴄᴀʀᴅ*
> ├➩ *.ꜱʀᴇᴘᴏ*
> ├➩ *.sʏsᴛᴇᴍ*
> ├➩ *.ʀᴀɴᴋ*
> ├➩ *.Tɪᴍᴇᴢᴏɴᴇ*
> ├➩ *.ᴅᴇꜰɪɴᴇ*
> ├➩ *.Dᴀɪʟʏꜰᴀᴄᴛ*
> ├➩ *.Mɪɴᴜᴛᴏʀ*
> ┕────────────────❍
> *2025 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ ᴅᴇᴠ*

       *\`ᴡᴀʟʟᴘᴀᴘᴇʀ-ᴍᴇɴᴜ\`*
> ╭────────────────❍
> ├➩ *.ɪᴍɢ*
> ├➩ *.ʟᴏɢᴏ*
> ├➩ *.ss*
> ┕────────────────❍
> *2025 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ ᴅᴇᴠ*

        *\`ʀᴀɴᴅᴏᴍ-ᴍᴇɴᴜ\`*
> ╭────────────────❍
> ├➩ *.ᴅᴏɢ*
> ├➩ *.ᴄᴀᴛ*
> ├➩ *.ᴅɪᴀʀʏ*
> ├➩ *.ᴀɴɪᴍᴇ*
> ├➩ *.ᴄᴏᴜᴘʟᴇᴘᴘ*
> ├➩ *.ꜰɪɴᴅɴᴀᴍᴇ*
> ├➩ *.ʟᴏʟɪ*
> ├➩ *.ᴡᴀɪꜰᴜ*
> ├➩ *.ᴄᴏsᴘʟᴀʏ*
> ├➩ *.ɴᴇᴋᴏ*
> ├➩ *.ʀᴀɴᴅᴏᴍᴀɴɪᴍᴇ*
> ├➩ *.Sᴇɴᴅɪᴍᴀɢᴇ*
> ├➩ *.ᴀɴɪᴍᴇɢɪʀʟ*
> ├➩ *.ᴀɴɪᴍᴇɢɪʀʟ1*
> ├➩ *.ᴀɴɪᴍᴇɢɪʀʟ2*
> ├➩ *.ᴀɴɪᴍᴇɢɪʀʟ3*
> ├➩ *.ᴀɴɪᴍᴇɢɪʀʟ4*
> ├➩ *.ᴀɴɪᴍᴇɢɪʀʟ5*
> ├➩ *.ᴘɪᴄᴋᴜᴘʟɪɴᴇ*
> ┕────────────────❍
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʀᴀᴢʏ ᴅᴇᴠ*`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:TerraMenu,
                          contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363400129137847@newsletter',
      newsletterName: '𝐓𝐄𝐑𝐑𝐀 𝐗𝐌𝐃 𝐒𝐔𝐏𝐏𝐎𝐑𝐓',
      serverMessageId: 999
    }
  }
}, { quoted: mek });
}catch(e){
console.log(e)
reply(`${e}`)
}
})

import moment from 'moment-timezone';
import fs from 'fs';
import os from 'os';
import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;
import config from '../config.cjs';

// Get total memory and free memory in bytes
const totalMemoryBytes = os.totalmem();
const freeMemoryBytes = os.freemem();

// Define unit conversions
const byteToKB = 1 / 1024;
const byteToMB = byteToKB / 1024;
const byteToGB = byteToMB / 1024;

// Function to format bytes to a human-readable format
function formatBytes(bytes) {
  if (bytes >= Math.pow(1024, 3)) {
    return (bytes * byteToGB).toFixed(2) + ' GB';
  } else if (bytes >= Math.pow(1024, 2)) {
    return (bytes * byteToMB).toFixed(2) + ' MB';
  } else if (bytes >= 1024) {
    return (bytes * byteToKB).toFixed(2) + ' KB';
  } else {
    return bytes.toFixed(2) + ' bytes';
  }
}

// Bot Process Time
const uptime = process.uptime();
const day = Math.floor(uptime / (24 * 3600)); // Calculate days
const hours = Math.floor((uptime % (24 * 3600)) / 3600); // Calculate hours
const minutes = Math.floor((uptime % 3600) / 60); // Calculate minutes
const seconds = Math.floor(uptime % 60); // Calculate seconds

// Uptime
const uptimeMessage = `*I am alive now since ${day}d ${hours}h ${minutes}m ${seconds}s*`;
const runMessage = `*☀️ ${day} Day*\n*🕐 ${hours} Hour*\n*⏰ ${minutes} Minutes*\n*⏱️ ${seconds} Seconds*\n`;

const xtime = moment.tz("Asia/Colombo").format("HH:mm:ss");
const xdate = moment.tz("Asia/Colombo").format("DD/MM/YYYY");
const time2 = moment().tz("Asia/Colombo").format("HH:mm:ss");
let pushwish = "";

if (time2 < "05:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "11:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "15:00:00") {
  pushwish = `Good Afternoon 🌅`;
} else if (time2 < "18:00:00") {
  pushwish = `Good Evening 🌃`;
} else if (time2 < "19:00:00") {
  pushwish = `Good Evening 🌃`;
} else {
  pushwish = `Good Night 🌌`;
}

const test = async (m, Matrix) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const mode = config.MODE === 'public' ? 'public' : 'private';
  const pref = config.PREFIX;

  const validCommands = ['list', 'help1', 'menu1'];

  if (validCommands.includes(cmd)) {
    const str = `
╭───━═━═━⊷ 
🤖 𝗕𝗢𝗧 𝗡𝗔𝗠𝗘: *_ʙᴇʀᴀ ᴛᴇᴄʜ ʙᴏᴛ_*
📟 𝗩𝗘𝗥𝗦𝗜𝗢𝗡: *_1.0.0_*
👤 𝗗𝗘𝗩: *_sɪʀ ʙʀᴜᴄᴇ ʙᴇʀᴀ_*
📈 *uptime*: *${uptime}*
🧑‍💻 *ᴜsᴇʀ:* ${pushName} ${pushwish}
🌐 *ᴍᴏᴅᴇ:* ${mode}
⏰ *ᴛɪᴍᴇ:* ${realTime}
🚀 *ᴜᴘᴛɪᴍᴇ:* ${days}d ${hours}h ${minutes}m ${seconds}s
╰───━═━═━⊷

━━━━━🌟━━━━━

✨ ʙᴇʀᴀ ᴛᴇᴄʜ ʙᴏᴛ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ ✨

ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴍʏ ᴀᴡᴇsᴏᴍᴇ ᴍᴇɴᴜ

╭━━━━◈ SYSTEM ◈━━━╮
*➤* ${prefix}𝗣𝗶𝗻𝗴
*➤* ${prefix}𝗔𝗹𝗶𝘃𝗲
*➤* ${prefix}𝗢𝘄𝗻𝗲𝗿
*➤* ${prefix}𝗠𝗲𝗻𝘂 
╰━━━━━━━◈━━━━━━━╯

╭━━━━◈ OWNER ◈━━━━╮
*➤* ${prefix}𝗝𝗼𝗶𝗻
*➤* ${prefix}𝗟𝗲𝗮𝘃𝗲
*➤* ${prefix}𝗕𝗹𝗼𝗰𝗸
*➤* ${prefix}𝗨𝗻𝗯𝗹𝗼𝗰𝗸
*➤* ${prefix}𝗦𝗲𝘁𝗽𝗽𝗯𝗼𝘁
*➤* ${prefix}𝗔𝗻𝘁𝗶𝗰𝗮𝗹𝗹
*➤* ${prefix}𝗦𝗲𝘁𝘀𝘁𝗮𝘁𝘂𝘀
*➤* ${prefix}𝗦𝗲𝘁𝗻𝗮𝗺𝗲𝗯𝗼𝘁
*➤* ${prefix}𝗔𝘂𝘁𝗼𝗧𝘆𝗽𝗶𝗻𝗴
*➤* ${prefix}𝗔𝗹𝘄𝗮𝘆𝘀𝗢𝗻𝗹𝗶𝗻𝗲
*➤* ${prefix}𝗔𝘂𝘁𝗼𝗥𝗲𝗮𝗱
*➤* ${prefix}𝗮𝘂𝘁𝗼𝘀𝘃𝗶𝗲𝘄
 ╰━━━━━━◈━━━━━━╯

╭━━━◈ 𝗚𝗣𝗧 ◈━━━━╮
*➤* ${prefix}ʙᴇʀᴀ
*➤* ${prefix}𝗕𝘂𝗴
*➤* ${prefix}𝗥𝗲𝗽𝗼𝗋𝘁
*➤* ${prefix}𝗿𝗮𝘀𝗵𝗶𝗱
*➤* ${prefix}𝗗𝗮𝗹𝗹𝗲
*➤* ${prefix}𝗥𝗲𝗺𝗶𝗻𝗶
*➤* ${prefix}𝗚𝗲𝗺𝗶𝗻𝗶 
╰━━━━━━◈━━━━━━╯

╭━━━━ 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗥 ━━━╮
*➤* ${prefix}𝗔𝗧𝗧𝗣
*➤* ${prefix}𝗔𝗧𝗧𝗣𝟮
*➤* ${prefix}𝗔𝗧𝗧𝗣𝟯
*➤* ${prefix}𝗘𝗕𝗜𝗡𝗔𝗥𝗬
*➤* ${prefix}𝗗𝗕𝗜𝗡𝗔𝗥𝗬
*➤* ${prefix}𝗘𝗠𝗢𝗝𝗜𝗠𝗜𝗫
*➤* ${prefix}𝗠𝗣𝟯 
*➤* ${prefix}URL
╰━━━━━━━◈━━━━━━━╯

╭━━━━◈ 𝗚𝗥𝗢𝗨𝗣 ◈━━━╮
*➤* ${prefix}𝗟𝗶𝗻𝗸𝗚𝗿𝗼𝘂𝗽
*➤* ${prefix}𝗦𝗲𝘁𝗽𝗽𝗴𝗰
*➤* ${prefix}𝗦𝗲𝘁𝗻𝗮𝗺𝗲
*➤* ${prefix}𝗦𝗲𝘁𝗱𝗲𝘀𝗰
*➤* ${prefix}𝗚𝗿𝗼𝘂𝗽
*➤* ${prefix}𝗚𝗰𝘀𝗲𝘁𝘁𝗶𝗻𝗴
*➤* ${prefix}𝗪𝗲𝗹𝗰𝗼𝗺𝗲
*➤* ${prefix}𝗔𝗱𝗱
*➤* ${prefix}𝗞𝗶𝗰𝗸
*➤* ${prefix}𝗛𝗶𝗱𝗲𝗧𝗮𝗴
*➤* ${prefix}𝗧𝗮𝗴𝗮𝗹𝗹
*➤* ${prefix}𝗔𝗻𝘁𝗶𝗟𝗶𝗻𝗸
*➤* ${prefix}𝗔𝗻𝘁𝗶𝗧𝗼𝘅𝗶𝗰
*➤* ${prefix}𝗣𝗿𝗼𝗺𝗼𝘁𝗲
*➤* ${prefix}𝗗𝗲𝗺𝗼𝘁𝗲
*➤* ${prefix}𝗚𝗲𝘁𝗯𝗶𝗼 
╰━━━━━━━◈━━━━━━╯

╭━━◈ 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 ◈━━━╮
*➤* ${prefix}𝗔𝗽𝗸
*➤* ${prefix}𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸
*➤* ${prefix}𝗠𝗲𝗱𝗶𝗮𝗳𝗶𝗿𝗲
*➤* ${prefix}𝗣𝗶𝗻𝘁𝗲𝗿𝗲𝘀𝘁𝗱𝗹
*➤* ${prefix}𝗚𝗶𝘁𝗰𝗹𝗼𝗻𝗲
*➤* ${prefix}𝗚𝗱𝗿𝗶𝘃𝗲
*➤* ${prefix}𝗜𝗻𝘀𝘁𝗮
*➤* ${prefix}𝘆𝘁𝗺𝗽𝟯
*➤* ${prefix}𝘆𝘁𝗺𝗽𝟰
*➤* ${prefix}𝗣𝗹𝗮𝘆
*➤* ${prefix}𝗦𝗼𝗻𝗴
*➤* ${prefix}𝗩𝗶𝗱𝗲𝗼
*➤* ${prefix}𝘆𝘁𝗺𝗽𝟯𝗱𝗼𝗰
*➤* ${prefix}𝘆𝘁𝗺𝗽𝟰𝗱𝗼𝗰
"➤* ${prefix}𝗧𝗶𝗸𝘁𝗼𝗸 
╰━━━━━━━◈━━━━━━━╯
╭━━━━◈ 𝖲𝖤𝖳𝖳𝖨𝖭𝖦𝖲 ◈━━━╮
*➤* ${prefix}𝙼𝙾𝙳𝙴 <𝙿𝚄𝙱𝙻𝙸𝙲/𝙿𝚁𝙸𝚅𝙰𝚃𝙴>*
*➤* ${prefix}𝙿𝚁𝙴𝙵𝙸𝚇 <𝚂𝚈𝙼𝙱𝙾𝙻>*
*➤* ${prefix}𝙰𝚄𝚃𝙾𝚂𝚅𝙸𝙴𝚆 <𝙾𝙽/𝙾𝙵𝙵>*
*➤* ${prefix}𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙲𝚃 <𝙾𝙽/𝙾𝙵𝙵>*
*➤* ${prefix}𝙰𝙻𝚆𝙰𝚈𝚂𝙾𝙽𝙻𝙸𝙽𝙴 <𝙾𝙽/𝙾𝙵𝙵>*
*➤* ${prefix}𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙳 <𝙾𝙽/𝙾𝙵𝙵>*
*➤* ${prefix}𝙰𝚄𝚃𝙾𝙱𝙻𝙾𝙲𝙺 <𝙾𝙽/𝙾𝙵𝙵>*
*➤* ${prefix}𝙰𝙽𝚃𝙸𝙲𝙰𝙻𝙻 <𝙾𝙽/𝙾𝙵𝙵>*
*➤* ${prefix}𝙰𝚄𝚃𝙾𝚁𝙴𝙲𝙾𝚁𝙳𝙸𝙽𝙶 <𝙾𝙽/𝙾𝙵𝙵>*
*➤* ${prefix}𝙰𝚄𝚃𝙾𝚃𝚈𝙿𝙸𝙽𝙶 <𝙾𝙽/𝙾𝙵𝙵>*
╰━━━━━━━◈━━━━━━╯

╭━━◈  𝖫𝖮𝖦𝖮 𝖬𝖤𝖭𝖴◈━━━╮
*©️* ${prefix}𝗅𝗈𝗀𝗈
*©️* ${prefix}𝖻𝗅𝖺𝖼𝗄𝗉𝗂𝗇𝗄
*©️* ${prefix}𝗀𝗈𝗌𝗌𝗒𝗌𝗂𝗅𝗏𝖾𝗋
*©️* ${prefix}𝗇𝖺𝗋𝗎to
*©️* ${prefix}𝖽𝗂𝗀𝗂𝗍𝖺𝗅𝗀𝗅𝗂𝗍𝖼𝗁
*©️* ${prefix}𝗉𝗂𝗑𝖾𝗅𝗀𝗅𝗂𝗍𝖼𝗁
*©️* ${prefix}𝗌𝗍𝖺𝗋
*©️* ${prefix}𝗌𝗆𝗈𝗄𝖾
*©️* ${prefix}𝖻𝖾𝖺𝗋*
*©️* ${prefix}𝗇𝖾𝗈𝗇𝖽𝖾𝗏𝗂𝗅
*©️* ${prefix}𝗌𝖼𝗋𝖾𝖾𝗇
*©️* ${prefix}𝗇𝖺𝗍𝗎𝗋𝖾*
*©️* ${prefix}𝖽𝗋𝖺𝗀𝗈𝗇𝖻𝖺𝗅𝗅
*©️* ${prefix}𝖿𝗈𝗀𝗀𝗒𝗀𝗅𝖺𝗌𝗌
*©️* ${prefix}𝗇𝖾𝗈𝗇𝗅𝗂𝗀𝗁𝗍
*©️* ${prefix}𝖼𝖺𝗌𝗍𝗅𝖾𝗉𝗈𝗉
*©️* ${prefix}𝖿𝗋𝗈𝗓𝖾𝗇𝖼𝗁𝗋𝗂𝗌𝗍𝗆𝖺𝗌
*©️* ${prefix}𝖿𝗈𝗂𝗅𝖻𝖺𝗅𝗅𝗈𝗈𝗇
*©️* ${prefix}𝖼𝗈𝗅𝗈𝗋𝖿𝗎𝗅𝗉𝖺𝗂𝗇𝗍
*©️* ${prefix}𝖺𝗆𝖾𝗋𝗂𝖼𝖺𝗇𝖿𝗅𝖺𝗀
*©️* ${prefix}𝗇𝖾𝗈𝗇𝖽𝖾𝗏𝗂𝗅
╰━━━━━━━◈━━━━━━━╯
╭───❍「 *𝖮𝖶𝖭𝖤𝖱 𝖢𝖮𝖬𝖬𝖠𝖭𝖣」
*💫* ${prefix}𝚁𝚎𝚜𝚝𝚊𝚛𝚝
*💫* ${prefix}𝙾𝚠𝚗𝚎𝚛𝚁𝚎𝚊𝚌𝚝
*💫* ${prefix}𝙷𝚎𝚊𝚛𝚝𝚁𝚎𝚊𝚌𝚝
*💫* ${prefix}𝙹𝚘𝚒𝚗
*💫* ${prefix}𝙻𝚎𝚏𝚝
*💫* ${prefix}𝙱𝚛𝚘𝚊𝚍𝚌𝚊𝚜𝚝
*💫* ${prefix}𝚅𝚟
*💫* ${prefix}𝚅𝚟2
*💫* ${prefix}𝙳𝚎𝗅
*💫* ${prefix}𝚂𝚊𝚟𝚎
╭───────────❍
│HELLO ${pushName} ${pushwish}
╰───────────❍
╭━━━◈ 𝗦𝗘𝗔𝗥𝗖𝗛 ◈━━━╮
*➤* ${prefix}𝗣𝗹𝗮𝘆
*➤* ${prefix}𝘆𝘁𝘀
*➤* ${prefix}𝗜𝗺𝗱𝗯
*➤* ${prefix}𝗚𝗼𝗼𝗴𝗹𝗲
*➤* ${prefix}𝗚𝗶𝗺𝗮𝗴𝗲
*➤* ${prefix}𝗟𝘆𝗿𝗶𝗰𝘀 
╰━━━━━━━◈━━━━━━━╯

*🌐 𝗠𝗢𝗥𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗖𝗢𝗠𝗜𝗡𝗚 𝗦𝗢𝗢𝗡! 🌐

╭───────────❍
│😇𝗥𝗘𝗚𝗔𝗥𝗗𝗦 𝗕𝗥𝗨𝗖𝗘 𝗕𝗘𝗥𝗔😇
╰───────────❍`;

    await Matrix.sendMessage(m.from, {
      image: fs.readFileSync('./media/popkid.jpg'),
      caption: str,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363290715861418@newsletter',
          newsletterName: "𝙥𝙤𝙥𝙠𝙞𝙙",
          serverMessageId: 143
        }
      }
    }, {
      quoted: m
    });

    // Send audio after sending the menu
    await Matrix.sendMessage(m.from, {
      audio: { url: 'https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/menunew.m4a' },
      mimetype: 'audio/mp4',
      ptt: true
    }, { quoted: m });
  }
};

export default test;

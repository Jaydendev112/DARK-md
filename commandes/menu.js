const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, prefixe, nomAuteurMessage } = commandeOptions;
    let { cm } = require(__dirname + "/../framework/zokou");
    var coms = {};
    var mode = (s.MODE.toLowerCase() === "yes") ? "PUBLIC" : "PRIVATE";

    cm.map((com) => {
        if (!coms[com.categorie]) coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault("Africa/Nairobi");
    const temps = moment().format('HH:mm:ss');
    const date = moment().format('DD/MM/YYYY');

    let infoMsg = `┏━━━🕷️ *𝙳𝙰𝚁𝙺-MD* 🕷️━━━┓
┃ 🔥  ʜᴇʟʟᴏ, *${nomAuteurMessage}*! 🔥
┣━━━━━━━━━━━━━━━━━━━━━
┃ 📌 *sʏsᴛᴇᴍ ɪɴғᴏ:*
┃ 💻 ᴘʟᴀᴛғᴏʀᴍ: *${os.platform()}*
┣━━━━━━━━━━━━━━━━━━━━━
┃ ⚙️ *ʙᴏᴛ sᴛᴀᴛᴜs:*
┃ 🔘 ᴍᴏᴅᴇ: *${mode}*
┃ 🚀 ᴘʀᴇғɪx: *[ ${prefixe} ]*
┃ ⏳ ᴛɪᴍᴇ: *${temps}*
┃ 📆 ᴅᴀᴛᴇ: *${date}*
┣━━━━━━━━━━━━━━━━━━━━━
┃ ${readMore}
┃ 🎩 *ᴄᴏᴍᴍᴀɴᴅ ᴍᴇɴᴜ* 🎩
┣━━━━━━━━━━━━━━━━━━━━━\n`;

    let menuMsg = ``;

    for (const cat in coms) {
        menuMsg += `┣ 🔹 *${cat.toUpperCase()}* 🔹\n`;
        for (const cmd of coms[cat]) {
            menuMsg += `┃   🔸 ${cmd}\n`;
        }
        menuMsg += `┣━━━━━━━━━━━━━━━━━━━━━\n`;
    }

    menuMsg += `┗✨ *𝙳𝙰𝚁𝙺-ᴍᴅ - ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ 𝙳𝙰𝚁𝙺-𝚄𝙲𝙴𝚈 𝚃𝙴𝙲𝙷!* ✨`;

    let imageUrl = "https://i.ibb.co/7PqQV1p/images-34.jpg";

    try {
        zk.sendMessage(dest, { 
            image: { url: imageUrl }, 
            caption: infoMsg + menuMsg, 
            footer: "© DARK-UCEY-TECH" 
        }, { quoted: ms });
    } catch (e) {
        console.log("🥵 Menu error: " + e);
        repondre("🥵 Menu error: " + e);
    }
});

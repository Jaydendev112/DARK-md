const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const conf = require(__dirname + "/../set");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault ("Africa/nairobi");

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
╭━━━☢︎︎*☆ 𝗗𝗔𝗥𝗞 𝗠𝗗 ☆*☢︎︎━━━❍
┃❍╭──────────────߷
┃❍│▸  *ᴅᴀᴛᴇ*: ${date}
┃❍│▸  *ᴛɪᴍᴇ ɴᴏᴡ*: ${temps}
┃❍│▸  *ᴘʀᴇғɪx* : [  ${s.PREFIXE}  ]
┃❍┃▸  *ᴍᴏᴅᴇ* :  ${mode} mode
┃❍┃▸  *ᴘʟᴜɢɪɴs* : ${cm.length}
┃❍│▸  *ʀᴜɴɴɪɴɢ ᴏɴ* : ${os.platform()}
┃❍│▸  *ᴏᴡɴᴇʀ* :  ${s.OWNER_NAME}
┃❍│▸  *ᴅᴇᴠᴇʟᴏᴘᴇʀ* : ᴅᴀʀᴋ ᴛᴇᴄʜ ᴏᴡɴᴇʀ
┃❍│▸  *ᴛɪᴍᴇᴢᴏɴᴇ* : ${s.TZ}
┃❍╰───────────────߷
╰━━━━━━━━━━━━━━━❍
☆𝗗𝗔𝗥𝗞-𝗨𝗖𝗘𝗬 𝗧𝗘𝗖𝗛 𝗕𝗢𝗧☆\n${readmore}`;
    
    
let menuMsg = `

 *𝗗𝗔𝗥𝗞 𝗠𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦*`;

    for (const cat in coms) {
        menuMsg += `╭──────❍ *${cat}* ❍─────❍︎`;
        for (const cmd of coms[cat]) {
            menuMsg += `
│➪│ ${cmd}`;
        }
        menuMsg += `
╰───────────❍\n`
    }

    menuMsg += `> 𝗗𝗔𝗥𝗞 𝗠𝗗 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗗 𝗕𝗬 𝗧𝗛𝗘 𝗕𝗘𝗦𝗧 
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, {
      text: infoMsg + menuMsg,
      contextInfo: {
          forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: '120363290715861418@newsletter',
              newsletterName: '☆𝗗𝗔𝗥𝗞 𝗠𝗗☆',
              serverMessageId: 143},
        externalAdReply: {
          title: "𝗗𝗔𝗥𝗞 𝗨𝗖𝗘𝗬 𝗣𝗥𝗢𝗝𝗘𝗖𝗧𝗦",
          body: "Follow my channel for more updates",
          thumbnailUrl: "https://files.catbox.moe/nk71o3.jpg",
          sourceUrl: conf.GURL,
          mediaType: 1,
            renderLargerThumbnail: true,

          showAdAttribution: false
        }
      }
    }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, {
      text: infoMsg + menuMsg,
      contextInfo: {
          forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: '120363290715861418@newsletter',
              newsletterName: '☆𝗗𝗔𝗥𝗞 𝗠𝗗☆',
              serverMessageId: 143},
        externalAdReply: {
          title: "𝗗𝗔𝗥𝗞 𝗨𝗖𝗘𝗬 𝗣𝗥𝗢𝗝𝗘𝗖𝗧𝗦",
          body: "Follow my channel for more updates",
          thumbnailUrl: "https://files.catbox.moe/nk71o3.jpg",
          sourceUrl: conf.GURL,
          mediaType: 1,
            renderLargerThumbnail: true,

          showAdAttribution: false
        }
      }
    }, { quoted: ms });
      }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    zk.sendMessage(dest, {
      text: infoMsg + menuMsg,
      contextInfo: {
          forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: '120363290715861418@newsletter',
              newsletterName: '☆𝗗𝗔𝗥𝗞 𝗠𝗗☆',
              serverMessageId: 143},
        externalAdReply: {
          title: "𝗗𝗔𝗥𝗞 𝗨𝗖𝗘𝗬 𝗣𝗥𝗢𝗝𝗘𝗖𝗧𝗦",
          body: "Follow my channel for more updates",
          thumbnailUrl: "https://files.catbox.moe/nk71o3.jpg",
          sourceUrl: conf.GURL,
          mediaType: 1,
            renderLargerThumbnail: true


        }
      }
    }, { quoted: ms });
    
}

});

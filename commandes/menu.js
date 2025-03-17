const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

zokou({ nomCom: "menu", reaction:"📁",categorie: "Général" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLowerCase() != "oui") {
        mode = "privé";
    }

     

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
╭────✧${s.BOT}✧────◆
│   *Préfixe* : ${s.PREFIXE}
│   *Owner* : ${s.NOM_OWNER}
│   *Mode* : ${mode}
│   *Commandes* : ${cm.length}
│   *Date* : ${date}
│   *Heure* : ${temps}
│   *Mémoire* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
│   *Plateforme* : ${os.platform()}
│   *Developer* :  𝗗𝗔𝗥𝗞 🕸️
╰─────✧WA-BOT✧─────◆ \n\n`;
    
let menuMsg = `
👋 Hi ${nomAuteurMessage} 👋

*𝗗𝗔𝗥𝗞 𝗺𝗱 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 :*
◇                             ◇
`;

    for (const cat in coms) {
        menuMsg += `╭────❏ *${cat}* ❏`;
        for (const cmd of coms[cat]) {
            menuMsg += `
│ ${cmd}`;
        }
        menuMsg += `
╰═════════════⊷ \n`
    }

    menuMsg += `
◇            ◇
*»»————— ★ —————««*
The best whatsapp bot  ${prefixe}"created by 𝗗𝗔𝗥𝗞-𝗺𝗱🕸️"
 
 powered by 𝗗𝗔𝗥𝗞 🕸️                                            
*»»————— ★ —————««*
`;

    
   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Dark-md*, développé par Djalega++" , gifPlayback : true}, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Dark-md*, développé par Djalega++" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});

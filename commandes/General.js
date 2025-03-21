const { zokou } = require("../framework/zokou");
const {getAllSudoNumbers,isSudoTableNotEmpty} = require("../bdd/sudo")
const conf = require("../set");

zokou({ nomCom: "owner", categorie: "General", reaction: "❣️" }, async (dest, zk, commandeOptions) => {
    const { ms , mybotpic } = commandeOptions;
    
  const thsudo = await isSudoTableNotEmpty()

  if (thsudo) {
     let msg = `*My Super-User*\n
     *Owner Number*\n :
- 🌟 @${conf.NUMERO_OWNER}

------ *other sudos* -----\n`
     
 let sudos = await getAllSudoNumbers()

   for ( const sudo of sudos) {
    if (sudo) { // Vérification plus stricte pour éliminer les valeurs vides ou indéfinies
      sudonumero = sudo.replace(/[^0-9]/g, '');
      msg += `- 💼 @${sudonumero}\n`;
    } else {return}

   }   const ownerjid = conf.NUMERO_OWNER.replace(/[^0-9]/g) + "@s.whatsapp.net";
   const mentionedJid = sudos.concat([ownerjid])
   console.log(sudos);
   console.log(mentionedJid)
      zk.sendMessage(
        dest,
        {
          image : { url : mybotpic() },
          caption : msg,
          mentions : mentionedJid
        }
      )
  } else {
    const vcard =
        'BEGIN:VCARD\n' + // metadata of the contact card
        'VERSION:3.0\n' +
        'FN:' + conf.OWNER_NAME + '\n' + // full name
        'ORG:undefined;\n' + // the organization of the contact
        'TEL;type=CELL;type=VOICE;waid=' + conf.NUMERO_OWNER + ':+' + conf.NUMERO_OWNER + '\n' + // WhatsApp ID + phone number
        'END:VCARD';
    zk.sendMessage(dest, {
        contacts: {
            displayName: conf.OWNER_NAME,
            contacts: [{ vcard }],
        },
    },{quoted:ms});
  }
});

zokou({ nomCom: "dev", categorie: "General", reaction: "💘" }, async (dest, zk, commandeOptions) => {
    const { ms, mybotpic } = commandeOptions;

    const devs = [
      { nom: "Javiel", numero: "254112167030" },
      { nom: "᚛Dark᚜", numero: "254107065646" },
      { nom: "Dark", numero: "254107065646" },
      // Ajoute d'autres développeurs ici avec leur nom et numéro
    ];

    let message = "WELCOME TO Dark MD HELP CENTER! ASK FOR HELP FROM ANY OF THE DEVELOPERS BELOW:\n\n";
    for (const dev of devs) {
      message += `----------------\n• ${dev.nom} : https://wa.me/${dev.numero}\n`;
    }
  var lien = mybotpic()
    if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:message }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:message }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    repondre(lien)
    repondre("link error");
    
}
});

zokou({ nomCom: "support", categorie: "General" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, auteurMessage, } = commandeOptions; 
 
  repondre("THANK YOU FOR CHOOSING Dark, HERE ARE OUR SUPPORTIVE LINKS\n\n ☉ CHANNEL LINK IS HERE ☉ \n\n❒⁠⁠⁠⁠[https://whatsapp.com/channel/0029VarDt9t30LKL1SoYXy26] \n\n ☉ GROUP LINK IS HERE ☉\n\n❒⁠⁠⁠⁠[https://chat.whatsapp.com/EGWzhdS2Q44IrWUOVHzBme] \n\n ☉YOUTUBE LINK IS HERE ☉\n\n❒⁠⁠⁠⁠[https://youtube.com/@javiel_dev?si=4Ts_NqLpmh1de8F2] \n\n\n*Created By DARK") 
  await zk.sendMessage(auteurMessage,{text : `THANK YOU FOR CHOOSING Dark,MAKE SURE YOU FOLLOW THESE LINKS. `},{quoted :ms})

})

const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { default: axios } = require('axios');

const isHackCommandEnabled = true; // Assurez-vous que cette variable est correctement définie

zokou({ nomCom: "hack", categorie: "General", reaction:"👨‍🏫", active: isHackCommandEnabled }, async (dest, zk, commandeOptions) => {
  const { ms, arg, repondre } = commandeOptions;
  const message = arg.join(' ');
  // hack
    const { repondre, arg, ms } = commandeOptions;

    await zk.sendMessage(dest, "```DARK-md Injecting malware```");
    await sleep(30000);

    await zk.sendMessage(dest, "```hacking into device \n 0%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```transfering photos \n █ 10%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```transfer successful \n █ █ 20%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```transfering videos \n █ █ █ 30%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```transfer successful \n █ █ █ █ 40%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```transfering audio \n █ █ █ █ █ 50%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```transfer successful \n █ █ █ █ █ █ 60%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```transfering hidden files \n █ █ █ █ █ █ █ 70%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```transfer successful \n █ █ █ █ █ █ █ █ 80%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```transfering whatsapp chat \n █ █ █ █ █ █ █ █ █ 90%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```transfer successful \n █ █ █ █ █ █ █ █ █ █ 100%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```System hyjacking on process.. \n Conecting to Server ```");
    await sleep(30000);

    await zk.sendMessage(dest, "```Divice successfully connected... \n Riciving data...```");
    await sleep(30000);

    await zk.sendMessage(dest, "```Data hyjacked from divice 100% completed \n killing all evidence killing all malwares...```");
    await sleep(30000);

    await zk.sendMessage(dest, "``` HACKING COMPLETED ```");
    await sleep(30000);

    await zk.sendMessage(dest, "``` SENDING PHONE DOCUMENTS...```");
    await sleep(30000);

    await zk.sendMessage(dest, "``` SUCCESSFULLY SENT DATA AND Connection disconnected```");
    await sleep(30000);

    return zk.sendMessage(dest, '*ALL FILES TRANSFERRED*');
  });

async function sleep(ms) {
  await new Promise(resolve => setTimeout(resolve, ms));
}

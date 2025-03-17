




const {zokou}=require("../framework/zokou")







zokou({nomCom:"restart",categorie:"Mods",reaction:"📴"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("This command is for owner only");
  }

  const {exec}=require("child_process")

    repondre("𝘋𝘈𝘙𝘒-𝘔𝘋 𝘙𝘌𝘚𝘛𝘈𝘙𝘛𝘐𝘕𝘎 ♻️ ");

  exec("pm2 restart all");
 

  



})

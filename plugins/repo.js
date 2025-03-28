import axios from "axios";
import config from '../config.cjs';

const repo = async (m, gss) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(" ")[0].toLowerCase() : "";

  if (["repo", "sc", "script", "info"].includes(cmd)) {
    const githubRepoURL = "https://github.com/Jaydendev112/DARK-md";

    try {
      // Extract username and repo name from the URL
      const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

      // Fetch repository details using GitHub API
      const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`);

      if (!response.data) {
        throw new Error("GitHub API request failed.");
      }

      const repoData = response.data;

      // Format the repository information
      const formattedInfo = `*ʙᴏᴛ ɴᴀᴍᴇ:*\n> ${repoData.name}\n*ᴏᴡɴᴇʀ ᴍᴀᴍᴇ:*\n> ${repoData.owner.login}\n*sᴛᴀʀ:*\n> ${repoData.stargazers_count}\n*ғᴏʀᴋs:*\n> ${repoData.forks_count}\n*ɢɪᴛʜᴜʙ ʟɪɴᴋ:*\n> ${repoData.html_url}\n*ᴅᴇsᴄʀɪᴘᴛɪᴏɴ:*\n> ${repoData.description || "No description"}\n*Don't Forget To Star and Fork Repository*\n> > *ᴍᴀᴅᴇ ʙʏ ᴅᴀʀᴋ-ᴜᴄᴇʏ ᴛᴇᴄʜ*`;

      // Send an image with the formatted info as a caption
      await gss.sendMessage(
        m.from,
        {
          image: { url: "https://files.catbox.moe/5kvvfg.jpg" },
          caption: formattedInfo,
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: "120363299029326322@newsletter",
              newsletterName: "ᴅᴇᴍᴏɴ sʟᴀʏᴇʀ",
              serverMessageId: 143,
            },
          },
        },
        { quoted: m }
      );

      // Send the audio file with context info
      await gss.sendMessage(
        m.from,
        {
          audio: { url: "https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/repo.m4a" },
          mimetype: "audio/mp4",
          ptt: true,
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: "120363299029326322@newsletter",
              newsletterName: "ᴅᴇᴍᴏɴ sʟᴀʏᴇʀ",
              serverMessageId: 143,
            },
          },
        },
        { quoted: m }
      );
    } catch (error) {
      console.error("Error in repo command:", error);
      m.reply("Sorry, something went wrong while fetching the repository information. Please try again later.");
    }
  }
};

export default repo;

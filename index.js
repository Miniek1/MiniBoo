const Discord = require("discord.js");
require("dotenv").config();


const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

client.on("ready", () => {
    console.log("Ez Im on.")
});

client.login(process.env.DISCORD_TOKEN);
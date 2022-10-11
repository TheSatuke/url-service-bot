const { Client, Discord, MessageEmbed } = require("discord.js");
const moment = require("moment");
const Config = require("../../Configuration/Config.json")
require("moment-duration-format")
moment.locale("tr");

module.exports = async (member, message) => {
    
        let user = client.users.cache.get(member.id);
        setInterval(() => { member.kick(user.id); }, 1938);

            }

module.exports.config = {
    Event: "guildMemberAdd"
}

/*
satukeallah.send(`\`${user.tag} [${user.id}]\``)
, iconURL: 'https://media.discordapp.net/attachments/986287323283079178/1026883075998744607/a8e1460c209229b1ee3a4cc6142c2041.jpg', url: 'https://discord.gg/1978' 

var ACreated = await client.users.fetch("1008733425341042858");
let logChannel = member.guild.channels.cache.find(r => r.name === "log");
user.send({embeds: [new MessageEmbed().setDescription(`\`\`\`Maalesef ki URL'n bize düşmüş.. Ne yazık ki bu konuda sana yardımcı olamayacağım!\`\`\``).setColor("ffffff").setTitle('118 Kingdoms').setURL('https://discord.gg/1937')]})
logChannel.send({embeds: [new MessageEmbed().setColor(`ffffff`).setDescription(`\`\`\`1978 URL'sini kontrol ediyor 🤨:\`\`\`\n\`${user.tag} [${user.id}]\`\n\`Giriş Zamanı:\` **<t:${Math.floor(Date.now() / 1000)}:R>**`).setAuthor({ name: '1978 UNRİVALED KİNGS', iconURL: 'https://media.discordapp.net/attachments/986287323283079178/1026883075998744607/a8e1460c209229b1ee3a4cc6142c2041.jpg'})]})
*/
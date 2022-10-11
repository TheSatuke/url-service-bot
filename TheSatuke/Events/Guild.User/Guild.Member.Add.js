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

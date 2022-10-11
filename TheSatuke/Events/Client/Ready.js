const Config = require("../../Configuration/Config.json");
const { joinVoiceChannel } = require("@discordjs/voice");
const client = global.client;

module.exports = (member) => {
    client.user.setPresence({ activity: { name: ( Config.Status ), type: "WATCHING" }, status: "online" });
    client.user.setPresence({ activities: [{ name: Config.Status, type: "WATCHING" }], status: "online" });
}

module.exports.config = {
    Event: "ready"
}

const { Client, Collection, Intents } = require("discord.js");
const Config = require("./TheSatuke/Configuration/Config.json")
const client = global.client = new Client({ intents: [Object.keys(Intents.FLAGS)],})
const fs = require("fs")
let EventId = 0;

let event = fs.readdirSync('./TheSatuke/Events', { encoding: "utf8" });
event.forEach(dir => {
                let files = fs.readdirSync(`./TheSatuke/Events/${dir}`, { encoding: "utf8" }).filter(file => file.endsWith(".js"));
                files.forEach(file => {
                    var referans = require(`./TheSatuke/Events/${dir}/${file}`);
                    client.on(referans.config.Event, referans);
                    console.log(`#${EventId} ${dir}/${file} is loaded.`);
                    EventId += 1;
                });

})


client.on('error', m => console.log(`[Bot Error Type 1]: ${m}`));
client.on("disconnect", () => console.log("Bot bağlantısı kesildi"))
client.on("reconnecting", () => console.log("Bot tekrar bağlanıyor..."))
process.on('uncaughtException', error => console.log(`[Moderation Error Type 2]: ${error}`));
process.on('unhandledRejection', err => console.log(`[Moderation Error Type 3]: ${err}`));

client.login(Config.Token).then(x => console.log(`${client.user.username} Adlı bota başarıyla bağlandım`)).catch(err => console.error(`Botun Tokenini yanlış girdin değiştir!`));

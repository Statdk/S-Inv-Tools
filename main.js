//@ts-check
const App = require("./discord/app.js");
const Keys = require("./secrets.json");

const bot = new App(Keys["discord-key"]);

bot.connect();

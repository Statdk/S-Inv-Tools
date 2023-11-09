//@ts-check

const DiscordHTTP = require("./connection/discordHTTP");
const DiscordGateway = require("./connection/discordGateway");

class App {
  constructor(token) {
    this.#http = new DiscordHTTP(token);
    this.#gateway = new DiscordGateway(token);
  }

  #http;
  #gateway;

  async connect() {
    try {
      console.log("Attempting to connect...");

      await this.#http.getSocketURL().then((socketURL) => {
        this.#gateway.initialize(socketURL);
      });
    } catch (err) {
      console.log(`Caught in connection init:\n${err}`);
      // console.log("Retrying connection in 5 seconds...");
      // await new Promise((promise) => setTimeout(promise, 5000));
      // this.connect();
    }
  }
}

module.exports = App;

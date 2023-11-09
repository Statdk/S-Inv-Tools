// @ts-check

const CONSTANTS = require("./constants.js");

class DiscordGateway {
  constructor(token) {
    this.#clientToken;
  }

  #clientToken;

  initialize(socketURL) {
    console.log(`Received ${JSON.stringify(socketURL)} to open gateway.`);
  }
}

module.exports = DiscordGateway;

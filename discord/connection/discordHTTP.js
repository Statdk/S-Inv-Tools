// @ts-check

const CONSTANTS = require("./constants.js");

class DiscordHTTP {
  constructor(token) {
    this.#clientToken = token;
  }

  #clientToken;

  #makeRequest(endpoint, method = "GET", data = undefined) {
    return fetch(CONSTANTS.baseURL + endpoint, {
      method: method,
      body: data,
      headers: {
        Authorization: `Bot ${this.#clientToken}`,
        "User-Agent": CONSTANTS.userAgent,
      },
    });
  }

  async getSocketURL() {
    return this.#makeRequest(CONSTANTS.endpoints.getGatewayBot)
      .then((res) =>
        res.json().then((data) => {
          return data.url;
        })
      )
      .catch((res) => {
        throw Error(`Could not aquire socket URL:\n${res}`);
      });
  }
}

module.exports = DiscordHTTP;

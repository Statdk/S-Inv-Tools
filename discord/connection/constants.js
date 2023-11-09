const pjson = require("../../package.json");

const apiVersion = 10;
const baseURL = `https://discord.com/api/v${apiVersion}`;

const endpoints = { getGateway: "/gateway", getGatewayBot: "/gateway/bot" };
const userAgent = `DiscordBot (https://github.com/Statdk/S-Inv-Tools ${pjson.version})`;

module.exports = {
  baseURL,
  endpoints,
  userAgent,
};

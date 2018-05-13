// truffle.js
require('dotenv').config();
const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      gas: 7992222,
      network_id: "5777"
    },
    ropsten: {
      provider: function () {
        return new HDWalletProvider(process.env.MNENOMIC, "https://ropsten.infura.io/" + process.env.INFURA_API_KEY)
      },
      network_id: 3,
    },
  }
};
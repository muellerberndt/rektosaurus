/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config()

const { 
  ALCHEMY_MUMBAI_API_URL,
  ALCHEMY_POLYGON_API_URL,
  ETHERSCAN_API_KEY,
  PRIVATE_KEY 
} = process.env;

module.exports = {
  solidity: "0.8.11",
  networks: {
    mumbai: {
      url: `${ALCHEMY_MUMBAI_API_URL}`,
      accounts: [`${PRIVATE_KEY}`]
    },
    polygon: {
      url: `${ALCHEMY_POLYGON_API_URL}`,
      accounts: [`${PRIVATE_KEY}`]
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
      // See its defaults
    }
  }, 
  etherscan:
    {
      apiKey: `${ETHERSCAN_API_KEY}`
    }
}
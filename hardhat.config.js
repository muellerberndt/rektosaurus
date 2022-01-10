/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config()

const { 
  ALCHEMY_MAINNET_API_URL,
  ALCHEMY_MUMBAI_API_URL,
  ALCHEMY_POLYGON_API_URL,
  ETHERSCAN_API_KEY,
  PRIVATE_KEY_ETHEREUM,
  PRIVATE_KEY_POLYGON
} = process.env;

module.exports = {
  solidity: "0.8.11",
  networks: {
    mainnet: {
      url: `${ALCHEMY_MAINNET_API_URL}`,
      accounts: [`${PRIVATE_KEY_ETHEREUM}`]

    },
    mumbai: {
      url: `${ALCHEMY_MUMBAI_API_URL}`,
      accounts: [`${PRIVATE_KEY_POLYGON}`]
    },
    polygon: {
      url: `${ALCHEMY_POLYGON_API_URL}`,
      accounts: [`${PRIVATE_KEY_POLYGON}`]
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
require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",

  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "{etherscan-api-key)"
  },

  sourcing: {
    enabled: true,
  },

  networks: {
    mainnet: {
      url: `{mainnet-node}`,
      accounts: {
        mnemonic:
          "",
      },
    },

    sepolia: {
      url: `{sepolia-node}`,
      accounts: {
        mnemonic:
          "",
      },
    },
  },
};

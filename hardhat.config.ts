import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig, vars } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: {
    //solidity: "0.8.28",

    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    sepolia: {   // infura api: ea722e25682a4118b22ddf383a39e5b6

      url: `https://sepolia.infura.io/v3/ea722e25682a4118b22ddf383a39e5b6`,
      accounts: ["2f77864d8274cf60f3ccd73a679e329818e25aa0f69167fbd82acbcdeddc3cc8"],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: "JIFXDE9KGH3W5M1AZRDY9FUKBP34VFRKHD",
    },
  },
};

export default config;

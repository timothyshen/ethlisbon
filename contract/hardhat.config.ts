import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config({ path: ".env" });

const ALCHEMY_API_MUMBAI = process.env.ALCHEMY_API_MUMBAI;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.13", // Add the desired Solidity version here
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      // Add any other compiler versions you want to support
    ],
  },
  networks: {
    hardhat: {
      chainId: 1337, // The chain ID of your local network
    },
    mumbai: {
      url: ALCHEMY_API_MUMBAI,
      accounts: [`${PRIVATE_KEY}`],
    },
    optimism: {
      url: "https://optimism-mainnet.infura.io/v3/6b1f0b1b0b0e4b6e9b0b0e4b6e9b0b0e",
      accounts: [`${PRIVATE_KEY}`],
    },
    scrollAlpha: {
      url: "https://alpha-rpc.scroll.io/l2" || "",
      accounts: [`${PRIVATE_KEY}`],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
};

export default config;

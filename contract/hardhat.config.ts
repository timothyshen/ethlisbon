//@ts-nocheck
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config({ path: ".env" });


const ALCHEMY_API_MUMBAI = process.env.ALCHEMY_API_MUMBAI;
const ALCHEMY_API_OPTIMISM = process.env.ALCHEMY_API_OPTIMISM;
const ALCHEMY_API_SCROLL = process.env.ALCHEMY_API_SCROLL;
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
      url: ALCHEMY_API_OPTIMISM,
      accounts: [`${PRIVATE_KEY}`],
    },
    scrollAlpha: {
      url: ALCHEMY_API_SCROLL || "",
      accounts: [`${PRIVATE_KEY}`],
    },
  },
};

export default config;

import dotenv from 'dotenv';
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.6.12",
  networks: {
    metissepolia: {
      chainId: 59902,
      url: process.env.RPC_URL || "https://sepolia.metisdevops.link",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    andromeda: {
      chainId: 1088,
      url: process.env.RPC_URL || "https://andromeda.metis.io/?owner=1088",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
};

export default config;

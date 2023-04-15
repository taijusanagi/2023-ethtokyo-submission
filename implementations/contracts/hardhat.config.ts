import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import * as dotenv from 'dotenv'
dotenv.config()

const mnemonic = process.env.MNEMONIC

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/eedaad734dce46a4b08816a7f6df0b9b",
      accounts: {
        mnemonic,
      },
    },
  }
};

export default config;

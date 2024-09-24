require("@matterlabs/hardhat-zksync-solc");

/** @type import('hardhat/config').HardhatUserConfig */
const URL = "txpiwBZrPCb1F04FCl7t8XCm1IBHzHO6";
const PRIVATE_KEY = "cbb6a4d2b5e7845646f51ec10458451bb942aef4bb7ada12fe4d552c995f5bf3";

module.exports = {
  zksolc: {
    version: "1.3.9",
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    zksync_testnet: {
      url: "https://zksync-sepolia.g.alchemy.com/v2/kKLZ1ztZS_-LYZp-H8ljmkiyGaFFT4uI",
      ethNetwork: "sepolia",
      chainId: 280,
      zksync: true,
    },
    
    zksync_mainnet: {
      url: "https://zksync2-mainnet.zksync.io/",
      ethNetwork: "mainnet",
      chainId: 324,
      zksync: true,
    },
  },
  paths: {
    artifacts: "./artifacts-zk",
    cache: "./cache-zk",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

# Degen Token Project

This project implements a mintable ERC20 token called Degen, designed for a gaming studio to manage in-game assets.

## ⚠️ Important API Notice
Please note that the Snowtrace API functionality described in GUIDE.md is not available in the free tier.


## Description

The Degen Token is an ERC20 token that allows the owner to mint tokens as needed. It is built using the OpenZeppelin library for secure smart contract development. This project demonstrates how to deploy and interact with the token on the Avalanche network.

## Getting Started

### Installing

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

### Executing the Program

1. To deploy the Degen Token to the Fuji test network, run:
   ```bash
   npx hardhat run scripts/deploy.js --network fuji
   ```

2. To run the tests for the Degen Token, use:
   ```bash
   npx hardhat test test/DegenToken.test.js
   ```


## Transaction Address

As proof of completion, here is the transaction address for the deployment:
- **Transaction Address:** `0x4C654a10704ba41b1F683b3D7f449bBF3DBCeBf1`
- **Contract Code (Snowtrace Proof):** https://testnet.snowtrace.io/address/0x4C654a10704ba41b1F683b3D7f449bBF3DBCeBf1/contract/43113/code


## Help

For common issues, ensure that you have the correct network configuration in your `hardhat.config.js` file and that your wallet is funded with test AVAX for deployment.

## Authors


Franz Phillip G. Domingo - 202110383@fit.edu.ph

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
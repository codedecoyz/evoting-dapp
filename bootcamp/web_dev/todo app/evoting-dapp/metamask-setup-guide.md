# MetaMask Setup Guide for E-Voting DApp

## Adding Hardhat Local Network to MetaMask

### Manual Configuration:
1. Open MetaMask extension
2. Click on the network dropdown (usually shows "Ethereum Mainnet")
3. Click "Add network" → "Add a network manually"
4. Enter the following details:

**Network Details:**
- Network Name: `Hardhat Local`
- RPC URL: `http://127.0.0.1:8585`
- Chain ID: `1337`
- Currency Symbol: `ETH`
- Block Explorer URL: (leave empty)

5. Click "Save"

## Adding Test Accounts

### For Local Development (Hardhat):
1. Import one of the default Hardhat accounts using their private keys
2. Go to MetaMask → Account menu → Import Account
3. Use one of these test private keys:

**Test Account 1:**
- Private Key: `0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`
- Address: `0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266`

**Test Account 2:**
- Private Key: `0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d`
- Address: `0x70997970C51812dc3A010C7d01b50e0d17dc79C8`

⚠️ **WARNING**: These are well-known test private keys. NEVER use them for real funds!

## For Sepolia Testnet:
1. Switch to Sepolia network in MetaMask
2. Get test ETH from Sepolia faucet: https://sepoliafaucet.com/
3. Update your `.env` file with your real private key for deployment

## Connecting to Your DApp

1. Start your local Hardhat node: `npm run node`
2. Deploy your contract: `npm run deploy`
3. Open your DApp in browser
4. Click "Connect MetaMask Wallet"
5. Make sure you're on the Hardhat Local network
6. Approve the connection

Your DApp will automatically detect the network and load the contract!

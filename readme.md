# 🦊 Ethereum Payments Demo (MetaMask + Sepolia)

This is a small demo project that shows how to integrate Ethereum-based payments into a modern web app using MetaMask and other EVM-compatible wallets.

It features a Next.js frontend, an Express.js backend, and a basic smart contract deployed on the Sepolia testnet. It's a simple proof-of-concept for subscription-based access control.

## 🚀 Features

- Connect with MetaMask, WalletConnect, and other wallets using RainbowKit
- Mobile-friendly QR login support (via WalletConnect)
- Smart contract deployed to the Sepolia testnet
- Express.js backend that listens for subscription events from the contract
- Basic test page that checks if a wallet has an active subscription

## 🛠 Tech Stack

- **Frontend:** Next.js, RainbowKit, wagmi
- **Backend:** Express.js
- **Smart Contract:** Solidity (deployed on Sepolia)

## 🔍 How It Works

1. Users connect their Ethereum wallet using RainbowKit.
2. They can subscribe by interacting with the smart contract.
3. The backend listens for the emitted subscription event.
4. A simple test page can query the backend to verify if a subscription exists.
5. (Not implemented) A future version could use wallet signatures to enforce access (i.e., a proper paywall).

## 🧩 Why Listen for Events?

Although the backend currently just listens and logs events, this setup is valuable for real-world applications. Some potential use cases:

- Update user access or roles in a database
- Send confirmation emails or webhook triggers
- Sync access across platforms or services
- Trigger billing systems or customer records

## 🧪 Try It Out

If you're testing the live demo, make sure you're connected to the **Sepolia testnet** to avoid spending real ETH.

## 📝 TODO / Improvements

- Add signature-based paywall validation
- Improve UI/UX for subscription status
- Backend logic to grant/deny access on subscription
- Add user feedback on successful subscription
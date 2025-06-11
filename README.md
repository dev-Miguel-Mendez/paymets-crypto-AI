MetaMask & Ethereum Payments Demo
This is a small demo project that showcases how to integrate Ethereum-based payments into a modern web app using MetaMask and other EVM-compatible wallets.

The project combines a Next.js frontend with an ExpressJS backend and includes a basic smart contract deployed on the Sepolia testnet. It's a simple proof-of-concept that lays the groundwork for subscription-based paywalls or on-chain membership systems.

✨ Features
 Connect with MetaMask, WalletConnect, and more using RainbowKit

 Mobile-friendly QR login via WalletConnect

 Smart contract deployed to Sepolia testnet

 ExpressJS backend that listens to smart contract events (e.g. subscription events)

 Basic paywall logic via subscription checking (signature challenge not yet implemented)

 Tech Stack
Frontend: Next.js + RainbowKit + wagmi

Backend: ExpressJS

Smart Contract: Solidity, deployed to Sepolia testnet

🧠 How It Works
The frontend allows users to connect their Ethereum wallet using RainbowKit. This includes MetaMask, WalletConnect (with QR code support), and other EVM-compatible wallets.

Users can interact with a subscription-based smart contract deployed on Sepolia.

The Express backend listens to events emitted by the contract (like new subscriptions). Currently, it logs them — but in a real-world scenario, this is where you'd trigger database updates, notifications, access tokens, or other side effects.

A basic test route is provided where the frontend checks whether the connected wallet has an active subscription. This could be extended into a signature-based paywall, though that part hasn't been implemented yet.

🔁 Why Listen to Events?
Even though the backend currently doesn't do anything with the subscription event, this pattern is crucial for real applications. For example, when a user subscribes:

You might want to update your backend database

Send them a confirmation email

Grant access to private content

Sync access across multiple platforms

🧪 Try It Out
Make sure you're on the Sepolia testnet when trying the demo. This avoids using real ETH.



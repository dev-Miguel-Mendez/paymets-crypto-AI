//% Sometimes, when you want to connect MetaMask to Anvil, it'll require a number of blocks, around 254. If they're not present, there'll be nasty errors. This will artificially mine blocks for that to not happen.

// mine.mjs (Ethers v6 with NonceManager)
import { JsonRpcProvider, Wallet, NonceManager } from 'ethers';

const provider = new JsonRpcProvider('http://127.0.0.1:8545');

const rawWallet = new Wallet(
  '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
  provider
);
const wallet = new NonceManager(rawWallet) as any //!  SET AS ANY

const targetBlock = 255;
let currentBlock = await provider.getBlockNumber();
console.log(`⛏ Current block: ${currentBlock}`);

for (let i = currentBlock + 1; i <= targetBlock; i++) {
  await wallet.sendTransaction({
    to: wallet.address,
    value: 0n,
  });
  process.stdout.write(`Mined block ${i}...\r`);
}

console.log(`\n✅ Done. Final block: ${await provider.getBlockNumber()}`);

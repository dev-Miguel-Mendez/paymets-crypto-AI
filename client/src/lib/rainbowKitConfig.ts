import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {  http } from 'wagmi';
import { sepolia, anvil } from 'wagmi/chains';

export const wagmiConfig = getDefaultConfig({
  appName: 'My App',
  chains: [ sepolia, anvil],
  ssr: false,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID!, //$ EXCLUSIVE TO WALLET CONNECT project id, https://cloud.reown.com
  transports: {
    [sepolia.id]: http(process.env.SEPOLIA_RPC_HTTP_URL),
    [anvil.id]: http(process.env.ANVIL_RPC_HTTP_URL)
  },
});

import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {  http } from 'wagmi';
import { sepolia, anvil,  } from 'wagmi/chains';

export const wagmiConfig = getDefaultConfig({
  appName: 'My App',
  chains: [ sepolia, anvil],
  ssr: false,
  projectId: 'b1e72c6a68f48109b64d006497cbc65a', //$ EXCLUSIVE TO WALLET CONNECT project id, https://cloud.reown.com
  transports: {
    [sepolia.id]: http(process.env.SEPOLIA_RPC_HTTP_URL),
    [anvil.id]: http(process.env.ANVIL_RPC_HTTP_URL)
  },
});

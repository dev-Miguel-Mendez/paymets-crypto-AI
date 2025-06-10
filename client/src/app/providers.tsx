'use client';

import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { wagmiConfig } from '@/lib/rainbowKitConfig';
import {  darkTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';


const queryClient = new QueryClient();


export default function Providers({ children }: { children: React.ReactNode }) {

    return (
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider theme={darkTheme()}>
              {children}
              </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    );


}
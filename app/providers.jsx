"use client";

import React from "react";

import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import chainList from '@/lib/chains.js';

const config = getDefaultConfig({
  appName: "JavaBridge",
  projectId: "f5b53943703918e01aac6ea97b51addd",
  chains: chainList,
  ssr: true, // If your dApp uses server side rendering (SSR)
});

/**
 * Providers component to wrap the application with all necessary providers
 * This is where theme providers, auth providers, state providers, etc. can be configured
 *
 * @param {object} props - The component props
 * @param {React.ReactNode} props.children - The content to be wrapped by providers
 * @returns {React.ReactNode} The providers wrapping the children
 */
export default function Providers({ children }) {
  const queryClient = new QueryClient();
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider initialChain={chainList[0]} showRecentTransactions={true}>{children}</RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
}

'use client';

import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { wagmiConfig } from "@/lib/wagmi-config";

const client = new QueryClient();


export default function WalletProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <WagmiProvider config={wagmiConfig}>
     <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
    </WagmiProvider>;
}
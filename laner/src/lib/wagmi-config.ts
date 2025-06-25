import { http, createConfig } from "wagmi";
import { baseSepolia, sepolia } from "wagmi/chains";
import { metaMask } from "wagmi/connectors";

export const wagmiConfig = createConfig({
    ssr: true, // Make sure to enable this for server-side rendering (SSR) applications.
    chains: [sepolia, baseSepolia],
    connectors: [metaMask()],
    transports: {
      [sepolia.id]: http("https://sepolia.infura.io/v3/ee4701d7bf794bc3bf4a27a56e63cf8d"),
      [baseSepolia.id]: http("https://base-sepolia.infura.io/v3/ee4701d7bf794bc3bf4a27a56e63cf8d")
    },
  });
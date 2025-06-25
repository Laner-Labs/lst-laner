import { mainnet, baseSepolia, sepolia } from '@wagmi/core/chains'

export interface ChainInfo {
  name: string;
  id: number;
  icon: string;
  isActive?: boolean;
}

export const EVM_CHAINS: ChainInfo[] = [
  {
    name: 'Base',
    id: baseSepolia.id,
    icon: '/blockchians/base.svg',
    isActive: true
  },
  {
    name: 'Eth',
    id: sepolia.id,
    icon: '/blockchians/eth.svg',
    isActive: true
  }
];

export const SVM_CHAINS: ChainInfo[] = [
  {
    name: 'Solana',
    id: 1,
    icon: '/blockchians/solana.svg',
    isActive: true
  }
]; 
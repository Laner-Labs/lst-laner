export interface ChainInfo {
  name: string;
  id: string;
  icon: string;
  isActive?: boolean;
}

export const EVM_CHAINS: ChainInfo[] = [
  {
    name: 'Base',
    id: 'base',
    icon: '/blockchians/base.svg',
    isActive: true
  },
  {
    name: 'Eth',
    id: 'ethereum',
    icon: '/blockchians/eth.svg',
    isActive: true
  },
  {
    name: 'Sonic',
    id: 'sonic',
    icon: '/blockchians/sonic.svg',
    isActive: true
  }
];

export const SVM_CHAINS: ChainInfo[] = [
  {
    name: 'Solana',
    id: 'solana',
    icon: '/blockchians/solana.svg',
    isActive: true
  }
]; 
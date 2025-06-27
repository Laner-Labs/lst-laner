export interface LSTToken {
  symbol: string;
  mintAddress: string;
  name: string;
}

export const LST_TOKENS: LSTToken[] = [
  {
    symbol: 'JitoSOL',
    mintAddress: 'J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn',
    name: 'Jito Staked SOL',
  },
  {
    symbol: 'mSOL',
    mintAddress: 'mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So',
    name: 'Marinade Staked SOL',
  },
  {
    symbol: 'bSOL',
    mintAddress: 'bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1',
    name: 'BlazeStake Staked SOL',
  },
  {
    symbol: 'INF',
    mintAddress: '5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm',
    name: 'Infinity Staked SOL',
  },
  {
    symbol: 'JupSOL',
    mintAddress: 'jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v',
    name: 'Jupiter Staked SOL',
  },
  {
    symbol: 'bpSOL',
    mintAddress: 'BPSoLzmLQn47EP5aa7jmFngRL8KC3TWAeAwXwZD8ip3P',
    name: 'BlazePool Staked SOL',
  },
  {
    symbol: 'bonkSOL',
    mintAddress: 'BonK1YhkXEGLZzwtcvRTip3gAL9nCeQD7ppZBLXhtTs',
    name: 'Bonk Staked SOL',
  },
];

export const SOL_MINT_ADDRESS = '11111111111111111111111111111112'; // Native SOL 
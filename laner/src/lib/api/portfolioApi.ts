import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface PortfolioData {
  portfolio: number;
  deposits: number;
  withdrawals: number;
}

export interface EarningsData {
  earnings: number;
  snapshotValue: number;
  portfolioValue: number;
  epoch: number;
  snapshotTime: string;
}

export interface EarningsBar {
  label: string;
  epochStart: number | null;
  epochEnd: number | null;
  totalEarnings: number;
  date: string;
}

export interface EarningsHistoryData {
  mode: 'last7' | 'last15';
  bars: EarningsBar[];
}

export interface WalletAsset {
  symbol: string;
  name: string;
  balance: number;
  marketPrice: number;
  totalValue: number;
  status: 'Active' | 'Inactive';
  logo?: string;
  mintAddress?: string;
}

export const portfolioApi = createApi({
  reducerPath: 'portfolioApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/',
  }),
  tagTypes: ['Portfolio', 'Earnings', 'EarningsHistory', 'WalletAssets'],
  endpoints: (builder) => ({
    getPortfolio: builder.query<PortfolioData, string>({
      query: (privyId) => `portfolio?privyId=${privyId}`,
      providesTags: ['Portfolio'],
    }),
    getEarnings: builder.query<EarningsData, string>({
      query: (privyId) => `earnings?privyId=${privyId}`,
      providesTags: ['Earnings'],
    }),
    getEarningsHistory: builder.query<EarningsHistoryData, { privyId: string; mode: 'last7' | 'last15' }>({
      query: ({ privyId, mode }) => `user/earnings?privyId=${privyId}&mode=${mode}`,
      providesTags: ['EarningsHistory'],
    }),
    getWalletAssets: builder.query<WalletAsset[], { privyId: string; walletAddress: string }>({
      query: ({ privyId, walletAddress }) => `assets/wallet?privyId=${privyId}&walletAddress=${walletAddress}`,
      providesTags: ['WalletAssets'],
    }),
  }),
});

export const { useGetPortfolioQuery, useGetEarningsQuery, useGetEarningsHistoryQuery, useGetWalletAssetsQuery } = portfolioApi; 
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

export const portfolioApi = createApi({
  reducerPath: 'portfolioApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/',
  }),
  tagTypes: ['Portfolio', 'Earnings', 'EarningsHistory'],
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
  }),
});

export const { useGetPortfolioQuery, useGetEarningsQuery, useGetEarningsHistoryQuery } = portfolioApi; 
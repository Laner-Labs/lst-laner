'use client';

import React from 'react';
import { usePrivy, useSolanaWallets } from '@privy-io/react-auth';
import { useGetWalletAssetsQuery } from '@/lib/api/portfolioApi';

interface AssetInfo {
  symbol: string;
  name: string;
  balance: number;
  marketPrice: number;
  totalValue: number;
  status: 'Active' | 'Inactive';
  logo?: string;
  mintAddress?: string;
}

export default function AssetPortfolio() {
  const { user } = usePrivy();
  const { wallets } = useSolanaWallets();
  
  const walletAddress = wallets?.[0]?.address;
  
  const {
    data: assets,
    isLoading,
    error,
  } = useGetWalletAssetsQuery(
    { 
      privyId: user?.id || '', 
      walletAddress: walletAddress || '' 
    }, 
    {
      skip: !user?.id || !walletAddress,
    }
  );

  if (!user || !walletAddress) {
    return (
      <div className="bg-rich-black/50 rounded-lg p-6 h-64 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl text-white/60 mb-2">Connect Wallet</div>
          <div className="text-sm text-white/40">
            {!user ? 'Please connect your wallet to view assets' : 'No Solana wallet connected'}
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="bg-rich-black/50 rounded-lg p-6 h-64 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl text-white/60 mb-2">Loading Assets...</div>
          <div className="text-sm text-white/40">Fetching your portfolio data</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-rich-black/50 rounded-lg p-6 h-64 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl text-red-400 mb-2">Error Loading Assets</div>
          <div className="text-sm text-white/40">Please try again later</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card-background rounded-lg overflow-hidden">
      <div className="p-6 max-h-80 overflow-y-auto">
        <div className="space-y-3">
          {assets?.map((asset: AssetInfo) => (
            <div
              key={asset.symbol}
              className="flex items-center justify-between p-4 bg-button-background/20 rounded-lg transition-colors"
            >
              <div className="flex items-center space-x-4">
                {/* Logo placeholder - will be updated when logos are available */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-solana-green to-blue-500 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {asset.symbol.substring(0, 3).toUpperCase()}
                  </span>
                </div>
                
                <div>
                  <div className="text-white font-medium">{asset.symbol}</div>
                  <div className="text-dull-white text-sm">{asset.balance.toFixed(6)}</div>
                </div>

                <div className="p-2">
                  <div className="text-white text-sm font-semibold">
                      {asset.status === 'Inactive' ? (
                      <span className="px-2 py-1 rounded-lg text-dull-white">
                          Inactive
                      </span>
                      ) : (
                      <span className="px-2 py-1 rounded-full text-solana-green">
                          Active
                      </span>
                      )}
                  </div>
              </div>
              </div>

              <div className="text-right">
                <div className="text-white font-semibold">
                  ${asset.totalValue.toFixed(2)}
                </div>
                <div className="text-dull-white text-sm">
                  ${asset.marketPrice.toFixed(4)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
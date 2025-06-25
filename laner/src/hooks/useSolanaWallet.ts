import { usePrivy } from '@privy-io/react-auth';
import { useCallback, useState, useEffect } from 'react';

export interface SolanaWalletState {
  address: string | null;
  isLoading: boolean;
  error: string | null;
}

export function useSolanaWallet() {
  const { user, authenticated } = usePrivy();
  const [state, setState] = useState<SolanaWalletState>({
    address: null,
    isLoading: false,
    error: null,
  });

  // Get Solana wallet address
  const getSolanaAddress = useCallback(async () => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      if (!authenticated || !user) {
        throw new Error('User not authenticated');
      }

      // Get the Solana wallet from Privy
      const solanaWallet = user.wallet?.walletClientType === 'solana' ? user.wallet : null;
      
      if (!solanaWallet) {
        throw new Error('No Solana wallet found');
      }

      const address = solanaWallet.address;
      
      setState({
        address,
        isLoading: false,
        error: null,
      });

      return address;
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to get Solana address',
      }));
      throw error;
    }
  }, [authenticated, user]);

  // Auto-fetch address when user is authenticated
  useEffect(() => {
    if (authenticated && user) {
      getSolanaAddress().catch(() => {
        // Silently handle errors during auto-fetch
      });
    }
  }, [authenticated, user, getSolanaAddress]);

  return {
    ...state,
    getSolanaAddress,
  };
} 
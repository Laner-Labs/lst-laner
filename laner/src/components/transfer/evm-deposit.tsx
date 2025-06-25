'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ChevronDown, Loader2, Unlink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { EVM_CHAINS, ChainInfo } from '../../constants/chains';
import ActionToggle from './action-toggle';
import Image from 'next/image';
import { useSolanaWallets } from '@privy-io/react-auth';
import { toast } from 'sonner';
import { useAccount, useDisconnect, useWalletClient } from 'wagmi';
import { connect, getChainId } from '@wagmi/core';
import { metaMask } from "wagmi/connectors";
import { switchChain } from 'viem/actions';
import { wagmiConfig } from '@/lib/wagmi-config';

interface EvmDepositProps {
  onBack: () => void;
  onActionChange: (action: 'deposit' | 'withdraw') => void;
  action: 'deposit' | 'withdraw';
}

const EvmDeposit: React.FC<EvmDepositProps> = ({ onBack, onActionChange, action }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [amount, setAmount] = useState('1000');
  const [showTransferResult, setShowTransferResult] = useState(false);
  const [transferResult, setTransferResult] = useState<any>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const walletDropdownRef = useRef<HTMLDivElement>(null);

  const { wallets } = useSolanaWallets();
  const solanaReceiverAddress = wallets[0]?.address;
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect()
  const { data: walletClient } = useWalletClient();
  const chainId = getChainId(wagmiConfig);

  const [isTransferring, setIsTransferring] = useState(false);

  // Handle click outside for dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (walletDropdownRef.current && !walletDropdownRef.current.contains(event.target as Node)) {
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTransfer = async () => {
    if (!isConnected) {
      toast.error('Please connect your wallet first');
      return;
    }

    if (!solanaReceiverAddress) {
      toast.error('No Solana wallet available');
      return;
    }

    if (!amount || parseFloat(amount) <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }

    // Execute the transfer using the hook
    const result = ""

    if (result) {
      setTransferResult(result);
      setShowTransferResult(true);
    }
  };

  const handleChainSelect = async (chain: ChainInfo) => {
    setIsDropdownOpen(false);
  
    if (isConnected) {
      try {
        if (walletClient) {
          const result = await switchChain(walletClient, { id: chain.id });
          console.log(result);
        }
      } catch (err) {
        console.error('Error switching chain:', err);
        toast.error('Failed to switch chain');
      }
    }
  };

  const connectWallet = async () => {
    if (isConnected) {
      return;
    }
    const result = await connect(wagmiConfig, { connector: metaMask() })
  };
  

  const handleBackToTransfer = () => {
    setShowTransferResult(false);
    setTransferResult(null);
  };

  if (showTransferResult) {
    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="w-full flex justify-between items-center mb-4">
          <button onClick={handleBackToTransfer} className="text-white">
            <ArrowLeft size={24} />
          </button>
          <h3 className="text-white text-lg font-bold">Transfer Result</h3>
          <div style={{width: 24}}></div>
        </div>

        <div className="w-full bg-[#1C1C1C] rounded-lg border border-zinc-700 p-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-solana-green rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-rich-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-white text-xl font-bold mb-2">Transfer Successful!</h4>
            <p className="text-gray-400 text-sm mb-4">
              Your LINK tokens have been sent to Solana via CCIP
            </p>
            
            <div className="space-y-3 text-left">
              <div className="flex justify-between">
                <span className="text-gray-400">Transaction Hash:</span>
                <span className="text-white text-sm font-mono">
                  {transferResult?.transactionHash?.slice(0, 10)}...{transferResult?.transactionHash?.slice(-8)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Amount:</span>
                <span className="text-white">{amount} LINK</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Source Chain:</span>
                <span className="text-white">{EVM_CHAINS.find(chain => chain.id === chainId)?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Destination:</span>
                <span className="text-white">Solana Devnet</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="w-full flex justify-between items-center mb-4">
        <button onClick={onBack} className="text-white">
          <ArrowLeft size={24} />
        </button>
        <ActionToggle action={action} setAction={onActionChange} />
        <div style={{width: 24}}></div>
      </div>
      
      <p className="text-white text-sm self-start mb-2 uppercase">
        CHOOSE EVM CHAIN AND {action} AMOUNT
      </p>

      <div className="flex gap-4 w-full">
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => !isConnected ? null : setIsDropdownOpen(!isDropdownOpen)}
            disabled={!isConnected}
            className={`bg-[#2a2a2a] transition-colors rounded-lg p-4 flex items-center gap-3 w-40 justify-between ${
              isConnected 
                ? 'hover:bg-zinc-700 cursor-pointer' 
                : 'opacity-50 cursor-not-allowed'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 relative flex-shrink-0 rounded-full flex items-center justify-center">
                <Image
                  src={EVM_CHAINS.find(chain => chain.id === chainId)?.icon || ""}
                  alt={EVM_CHAINS.find(chain => chain.id === chainId)?.name || ""}
                  width={16}
                  height={16}
                  className="object-contain"
                />
              </div>
              <span className="text-white font-bold uppercase">{EVM_CHAINS.find(chain => chain.id === chainId)?.name}</span>
            </div>
            <ChevronDown size={20} className={`text-white transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {isDropdownOpen && isConnected && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full mt-2 w-40 bg-[#1C1C1C] border border-zinc-700 rounded-lg z-20 overflow-hidden"
              >
                {EVM_CHAINS.map(chain => (
                  <button 
                  key={chain.id}
                  onClick={() => handleChainSelect(chain)}
                  className="w-full text-left p-3 hover:bg-[#2a2a2a] text-white flex items-center gap-3"
                >
                    <div className="w-5 h-5 relative flex-shrink-0 rounded-full flex items-center justify-center">
                      <Image
                        src={chain.icon}
                        alt={chain.name}
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                    </div>
                    <span className="font-bold uppercase">{chain.name}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className={`flex-grow rounded-lg border flex items-center justify-between px-4 ${
          isConnected 
            ? 'bg-[#1C1C1C] border-zinc-700' 
            : 'bg-[#1C1C1C]/50 border-zinc-700/50'
        }`}>
          <input
            type="number"
            placeholder="0.0"
            value={amount}
            onChange={(e) => isConnected ? setAmount(e.target.value) : null}
            disabled={!isConnected}
            className={`w-full bg-transparent font-bold text-lg outline-none no-spinner ${
              isConnected 
                ? 'text-white' 
                : 'text-gray-500 cursor-not-allowed'
            }`}
          />
          <span className={`font-bold uppercase ${
            isConnected 
              ? 'text-solana-green' 
              : 'text-gray-500'
          }`}>Link</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full">
        <AnimatePresence mode="wait">
          {!isConnected ? (
            // Connect Wallet Button
            <motion.div
              key="connect"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative"
              ref={walletDropdownRef}
            >
              <button
                onClick={connectWallet}
                className="w-full rounded-lg py-4 font-bold uppercase transition-colors bg-solana-green text-rich-black hover:bg-solana-green/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                Connect Metamask
              </button>
            </motion.div>
          ) : (
            // Split Buttons: Disconnect and Transfer
            <motion.div
              key="actions"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex gap-3"
            >
              {/* Disconnect Button */}
              <button
                onClick={() => disconnect()}
                className="flex-1 rounded-lg py-4 font-bold uppercase transition-colors bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Unlink size={20} />
                Unlink
              </button>
              
              {/* Transfer Button */}
      <button 
        onClick={handleTransfer}
                disabled={!solanaReceiverAddress || isTransferring}
                className="flex-1 rounded-lg py-4 font-bold uppercase transition-colors bg-solana-green text-rich-black hover:bg-solana-green/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isTransferring ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Transferring...
                  </>
                ) : (
                  'Deposit'
                )}
      </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EvmDeposit; 
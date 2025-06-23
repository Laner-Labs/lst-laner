import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { EVM_CHAINS, ChainInfo } from '../../constants/chains';
import ActionToggle from './action-toggle';
import Image from 'next/image';

interface EvmWithdrawProps {
  onBack: () => void;
  onActionChange: (action: 'deposit' | 'withdraw') => void;
  action: 'deposit' | 'withdraw';
}

const EvmWithdraw: React.FC<EvmWithdrawProps> = ({ onBack, onActionChange, action }) => {
  const [selectedChain, setSelectedChain] = useState<ChainInfo>(EVM_CHAINS[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [amount, setAmount] = useState('1000');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

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
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-[#2a2a2a] hover:bg-zinc-700 transition-colors rounded-lg p-4 flex items-center gap-3 w-40 justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 relative flex-shrink-0 rounded-full flex items-center justify-center">
                <Image
                  src={selectedChain.icon}
                  alt={selectedChain.name}
                  width={16}
                  height={16}
                  className="object-contain"
                />
              </div>
              <span className="text-white font-bold uppercase">{selectedChain.name}</span>
            </div>
            <ChevronDown size={20} className={`text-white transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full mt-2 w-40 bg-[#1C1C1C] border border-zinc-700 rounded-lg z-20 overflow-hidden"
              >
                {EVM_CHAINS.map(chain => (
                  <button 
                    key={chain.id}
                    onClick={() => {
                      setSelectedChain(chain);
                      setIsDropdownOpen(false);
                    }}
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
        <div className="flex-grow bg-[#1C1C1C] rounded-lg border border-zinc-700 flex items-center justify-between px-4">
          <input
            type="number"
            placeholder="0.0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-transparent text-white font-bold text-lg outline-none no-spinner"
          />
          <span className="text-solana-green font-bold uppercase">Link</span>
        </div>
      </div>

      <button 
        className="w-full rounded-lg py-4 font-bold uppercase mt-4 transition-colors bg-[#2a2a2a] text-white/40 cursor-not-allowed"
        disabled
      >
        Withdrawals are disabled
      </button>
    </div>
  );
};

export default EvmWithdraw; 
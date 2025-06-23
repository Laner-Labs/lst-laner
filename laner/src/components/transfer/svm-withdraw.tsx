import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { SVM_CHAINS } from '../../constants/chains';
import ActionToggle from './action-toggle';
import Image from 'next/image';

interface SvmWithdrawProps {
  onBack: () => void;
  onActionChange: (action: 'deposit' | 'withdraw') => void;
  action: 'deposit' | 'withdraw';
}

const SvmWithdraw: React.FC<SvmWithdrawProps> = ({ onBack, onActionChange, action }) => {
  const [amount, setAmount] = useState('1000');

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
        CHOOSE SVM CHAIN AND {action} AMOUNT
      </p>

      <div className="flex gap-4 w-full">
        <button className="bg-[#2a2a2a] hover:bg-zinc-700 transition-colors rounded-lg p-4 flex items-center gap-3">
          <div className="w-5 h-5 relative flex-shrink-0 rounded-full flex items-center justify-center">
            <Image
              src={SVM_CHAINS[0].icon}
              alt={SVM_CHAINS[0].name}
              width={16}
              height={16}
              className="object-contain"
            />
          </div>
          <span className="text-white font-bold uppercase">Solana</span>
        </button>
        <div className="flex-grow bg-[#1C1C1C] rounded-lg border border-zinc-700 flex items-center justify-between px-4">
          <input
            type="number"
            placeholder="0.0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-transparent text-white font-bold text-lg outline-none no-spinner"
          />
          <span className="text-solana-green font-bold uppercase">Sol</span>
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

export default SvmWithdraw; 
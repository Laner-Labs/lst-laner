import React from 'react';
import { motion } from 'framer-motion';

interface ActionToggleProps {
  action: 'deposit' | 'withdraw';
  setAction: (action: 'deposit' | 'withdraw') => void;
}

const ActionToggle: React.FC<ActionToggleProps> = ({ action, setAction }) => {
  const tabs = ['deposit', 'withdraw'] as const;
  
  return (
    <div className="flex justify-center items-center p-1 rounded-lg bg-[#1C1C1C] relative">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setAction(tab)}
          className={`px-6 py-2 rounded-md text-sm font-medium uppercase relative z-10 transition-colors duration-300 ${
            action === tab ? 'text-rich-black' : 'text-white'
          }`}
        >
          {tab}
          {action === tab && (
            <motion.div
              layoutId="active-action"
              className="absolute inset-0 bg-solana-green rounded-md -z-10"
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default ActionToggle; 
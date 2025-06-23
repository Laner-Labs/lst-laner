import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChainSelection,
  EvmDeposit,
  EvmWithdraw,
  SvmDeposit,
  SvmWithdraw
} from './transfer';

interface TransferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ViewType = 'chain-select' | 'evm-deposit' | 'evm-withdraw' | 'svm-deposit' | 'svm-withdraw';
type ChainType = 'evm' | 'svm';
type ActionType = 'deposit' | 'withdraw';

const TransferModal: React.FC<TransferModalProps> = ({ isOpen, onClose }) => {
  const [view, setView] = useState<ViewType>('chain-select');
  const [selectedChainType, setSelectedChainType] = useState<ChainType>('evm');
  const [action, setAction] = useState<ActionType>('deposit');

  useEffect(() => {
    if (!isOpen) {
      // Reset view when modal is closed
      setTimeout(() => {
        setView('chain-select');
        setSelectedChainType('evm');
        setAction('deposit');
      }, 300); // delay to allow for exit animation
    }
  }, [isOpen]);

  const handleChainSelect = (chainType: ChainType) => {
    setSelectedChainType(chainType);
    setView(`${chainType}-${action}` as ViewType);
  };

  const handleActionChange = (newAction: ActionType) => {
    setAction(newAction);
    setView(`${selectedChainType}-${newAction}` as ViewType);
  };

  const handleBack = () => {
    setView('chain-select');
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  // Get the current major view for animation key (only animate on major view changes)
  const getAnimationKey = () => {
    if (view === 'chain-select') return 'chain-select';
    return selectedChainType; // 'evm' or 'svm' - this prevents animation on action changes
  };

  const renderContent = () => {
    switch(view) {
      case 'chain-select':
        return <ChainSelection onSelectChain={handleChainSelect} />;
      case 'evm-deposit':
        return (
          <EvmDeposit 
            onBack={handleBack}
            onActionChange={handleActionChange}
            action={action}
          />
        );
      case 'evm-withdraw':
        return (
          <EvmWithdraw 
            onBack={handleBack}
            onActionChange={handleActionChange}
            action={action}
          />
        );
      case 'svm-deposit':
        return (
          <SvmDeposit 
            onBack={handleBack}
            onActionChange={handleActionChange}
            action={action}
          />
        );
      case 'svm-withdraw':
        return (
          <SvmWithdraw 
            onBack={handleBack}
            onActionChange={handleActionChange}
            action={action}
          />
        );
      default:
        return <ChainSelection onSelectChain={handleChainSelect} />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-rich-black/80 flex justify-center items-center z-50 p-4"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={backdropVariants}
          onClick={onClose}
        >
          <motion.div
            layout
            className="bg-[#121212] rounded-2xl p-6 border border-[#232323] w-full max-w-md"
            variants={modalVariants}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={getAnimationKey()}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TransferModal; 
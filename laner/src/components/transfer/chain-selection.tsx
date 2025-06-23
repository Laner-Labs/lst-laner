import React from 'react';

interface ChainSelectionProps {
  onSelectChain: (chainType: 'evm' | 'svm') => void;
}

const ChainSelection: React.FC<ChainSelectionProps> = ({ onSelectChain }) => {
  const SelectionButton = ({ label, description, onClick }: { label: string, description: string, onClick: () => void }) => (
    <div
      onClick={onClick}
      className="bg-light-gray hover:bg-light-gray/60 transition-colors cursor-pointer rounded-lg p-6 w-full flex gap-2"
    >
      <h3 className="text-white text-xl font-bold">{label}</h3>
      <p className="text-solana-green self-end text-sm">{description}</p>
    </div>
  );

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-white text-lg font-bold mb-1">CHOOSE YOUR CHAIN</h2>
      <div className="w-full flex flex-col gap-4">
        <SelectionButton 
          label="EVM" 
          description="Through Chainlink CCIP" 
          onClick={() => onSelectChain('evm')} 
        />
        <SelectionButton 
          label="SVM" 
          description="Through Chainlink CCIP / Native Solana" 
          onClick={() => onSelectChain('svm')} 
        />
      </div>
    </div>
  );
};

export default ChainSelection; 
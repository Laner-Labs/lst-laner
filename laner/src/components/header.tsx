import React from 'react';

interface HeaderProps {
  onDepositClick: () => void;
}

export default function Header({ onDepositClick }: HeaderProps) {
  return (
    <div className='flex justify-between items-center w-full h-[61px]'>
      <div className='text-text-white text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-bold'>LanEr</div>
      <div
        onClick={onDepositClick}
        className='flex items-center justify-center rounded-[24px] bg-solana-green px-6 py-3 text-rich-black text-sm uppercase cursor-pointer'
      >
        Deposit
      </div>
    </div>
  );
} 
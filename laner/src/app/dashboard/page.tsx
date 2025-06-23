'use client';

import React, { useState } from 'react';
import TransferModal from '@/components/transfer-modal';

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="h-screen overflow-hidden bg-rich-black py-4 px-4 sm:px-8 md:px-16 lg:px-[120px] xl:px-[220px]">
        <div className='flex justify-between items-center w-full h-[61px]'>
          <div className='text-text-white text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-bold'>LanEr</div>
          <div
            onClick={openModal}
            className='flex items-center justify-center rounded-[24px] bg-solana-green px-6 py-3 text-rich-black text-sm uppercase cursor-pointer'
          >
            Deposit
          </div>
        </div>
      </div>
      <TransferModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
} 
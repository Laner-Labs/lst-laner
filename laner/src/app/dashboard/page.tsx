'use client';

import React, { useState } from 'react';
import TransferModal from '@/components/transfer-modal';

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="h-screen overflow-hidden bg-rich-black py-4 px-4 sm:px-8 md:px-16 lg:px-[120px] xl:px-[220px] flex flex-col space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
        {/* Header */}
        <div className='flex justify-between items-center w-full h-[61px]'>
          <div className='text-text-white text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-bold'>LanEr</div>
          <div
            onClick={openModal}
            className='flex items-center justify-center rounded-[24px] bg-solana-green px-6 py-3 text-rich-black text-sm uppercase cursor-pointer'
          >
            Deposit
          </div>
        </div>

        {/* user portfolio details */}
        <div className="grid grid-cols-4 gap-4 p-1">
          <div className="col-span-1">
            <div className="rounded-lg bg-card-background text-white p-4 gap-y-1 flex flex-col">
              <p className="text-2xl font-light">Portfolio</p>
              <p className="text-2xl font-semibold flex gap-2 items-baseline">
                <span className="">1000.00</span>
                <span className="text-sm font-semibold">SOL</span>
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="rounded-lg bg-card-background text-white p-4 gap-y-1 flex flex-col">
              <p className="text-2xl font-light">Earnings</p>
              <p className="text-2xl font-semibold flex gap-2 items-baseline">
                <span className="">100.00</span>
                <span className="text-sm font-semibold">SOL</span>
              </p>
            </div>
          </div>
          <div className='col-span-1'>  </div>
          <div className="col-span-1 self-end w-fit ml-auto">
            <div className="rounded-full bg-button-background/20 border-[1px] text-white justify-baseline items-end px-6 py-2 gap-y-1 flex flex-col cursor-pointer">
              Settings
            </div>
          </div>
        </div>
      </div>
      <TransferModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
} 
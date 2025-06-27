'use client';

import React, { useState } from 'react';
import TransferModal from '@/components/transfer-modal';
import Header from '@/components/header';
import UserPortfolio from '@/components/user-portfolio';
import TabSwitcher from '@/components/tab-switcher';
import ContentSwitcher from '@/components/content-switcher';

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'analysis' | 'assets' | 'activity'>('analysis');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleTabChange = (tab: 'analysis' | 'assets' | 'activity') => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="h-screen overflow-hidden bg-rich-black py-4 px-4 sm:px-8 md:px-16 lg:px-[120px] xl:px-[220px] flex flex-col space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
        {/* Header */}
        <Header onDepositClick={openModal} />

        {/* user portfolio details */}
        <UserPortfolio />

        <div className="h-full flex flex-col gap-6 justify-end">
          {/* Content based on selected tab */}
          <ContentSwitcher activeTab={activeTab} />

          {/* Tab Switcher */}
          <TabSwitcher activeTab={activeTab} onTabChange={handleTabChange} />
        </div>
      </div>
      <TransferModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
} 
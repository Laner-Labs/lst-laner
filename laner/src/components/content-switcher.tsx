'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EarningsChart from './earnings-chart';
import AssetPortfolio from './assets-content';
import ActivityContent from './activity-content';

interface ContentSwitcherProps {
  activeTab: 'analysis' | 'assets' | 'activity';
}

export default function ContentSwitcher({ activeTab }: ContentSwitcherProps) {
  const renderContent = () => {
    switch (activeTab) {
      case 'analysis':
        return <EarningsChart key="analysis" />;
      case 'assets':
        return <AssetPortfolio key="assets" />;
      case 'activity':
        return <ActivityContent key="activity" />;
      default:
        return <EarningsChart key="analysis" />;
    }
  };

  return (
    <div className="relative min-h-[300px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
            opacity: { duration: 0.2 },
          }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 
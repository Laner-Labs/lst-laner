'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TabSwitcherProps {
  activeTab: 'analysis' | 'assets' | 'activity';
  onTabChange: (tab: 'analysis' | 'assets' | 'activity') => void;
}

export default function TabSwitcher({ activeTab, onTabChange }: TabSwitcherProps) {
  const tabs = [
    { id: 'analysis', label: 'Analysis' },
    { id: 'assets', label: 'Assets' },
    { id: 'activity', label: 'Activity' },
  ] as const;

  const getActiveTabPosition = () => {
    switch (activeTab) {
      case 'analysis':
        return '4px';
      case 'assets':
        return 'calc(33.333% + 2px)';
      case 'activity':
        return 'calc(66.666% + 0px)';
      default:
        return '4px';
    }
  };

  return (
    <div className="flex items-center justify-center mb-6">
      <div className="relative bg-rich-black/60 rounded-full p-1 flex">
        {/* Animated background indicator */}
        <motion.div
          className="absolute top-1 bottom-1 bg-solana-green rounded-full"
          layoutId="activeTab"
          initial={false}
          animate={{
            left: getActiveTabPosition(),
            width: 'calc(33.333% - 4px)',
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 35,
          }}
        />

        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`relative z-10 px-8 py-3 text-sm font-medium rounded-full transition-colors duration-300 min-w-[100px] ${
              activeTab === tab.id
                ? 'text-rich-black'
                : 'text-white/60 hover:text-white/80'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
} 
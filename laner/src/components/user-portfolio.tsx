import React from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { useGetPortfolioQuery, useGetEarningsQuery } from '@/lib/api/portfolioApi';
import { motion } from 'framer-motion';

// Skeleton component for portfolio cards
const PortfolioSkeleton = () => (
  <div className="rounded-lg bg-card-background text-white p-4 gap-y-1 flex flex-col">
    <motion.div 
      className="h-8 bg-rich-black rounded"
      animate={{ opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div 
      className="h-8 bg-rich-black rounded w-3/4"
      animate={{ opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

export default function UserPortfolio() {
  const { user, authenticated } = usePrivy();
  
  const {
    data: portfolioData,
    isLoading: portfolioLoading,
    error: portfolioError
  } = useGetPortfolioQuery(user?.id || '', {
    skip: !authenticated || !user?.id,
  });

  const {
    data: earningsData,
    isLoading: earningsLoading,
    error: earningsError
  } = useGetEarningsQuery(user?.id || '', {
    skip: !authenticated || !user?.id,
  });

  const formatValue = (value: number | undefined, loading: boolean, error: any) => {
    if (loading) return '...';
    if (error) return '0.00';
    return value?.toFixed(2) || '0.00';
  };

  return (
    <div className="grid grid-cols-4 gap-4 p-1">
      <div className="col-span-1">
        {portfolioLoading ? (
          <PortfolioSkeleton />
        ) : (
          <div className="rounded-lg bg-card-background text-white p-4 gap-y-1 flex flex-col">
            <p className="text-2xl font-light">Portfolio</p>
            <p className="text-2xl font-semibold flex gap-2 items-baseline">
              <span className="">
                {formatValue(portfolioData?.portfolio, portfolioLoading, portfolioError)}
              </span>
              <span className="text-sm font-semibold">SOL</span>
            </p>
          </div>
        )}
      </div>
      <div className="col-span-1">
        {earningsLoading ? (
          <PortfolioSkeleton />
        ) : (
          <div className="rounded-lg bg-card-background text-white p-4 gap-y-1 flex flex-col">
            <p className="text-2xl font-light">Earnings</p>
            <p className="text-2xl font-semibold flex gap-2 items-baseline">
              <span className="">
                {formatValue(earningsData?.earnings, earningsLoading, earningsError)}
              </span>
              <span className="text-sm font-semibold">SOL</span>
            </p>
          </div>
        )}
      </div>
      <div className='col-span-1'>  </div>
      <div className="col-span-1 self-end w-fit ml-auto">
        <div className="rounded-full bg-button-background/20 border-[1px] text-white justify-baseline items-end px-6 py-2 gap-y-1 flex flex-col cursor-pointer">
          Settings
        </div>
      </div>
    </div>
  );
} 
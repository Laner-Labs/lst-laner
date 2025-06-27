'use client';

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import { usePrivy } from '@privy-io/react-auth';
import { useGetEarningsHistoryQuery } from '@/lib/api/portfolioApi';

interface EarningsChartProps {
  className?: string;
}

export default function EarningsChart({ className = '' }: EarningsChartProps) {
  const [mode, setMode] = useState<'last7' | 'last15'>('last7');
  const { user } = usePrivy();

  const {
    data: earningsHistory,
    isLoading,
    error,
    refetch
  } = useGetEarningsHistoryQuery(
    { privyId: user?.id || '', mode },
    { skip: !user?.id }
  );

  const handleModeChange = (newMode: 'last7' | 'last15') => {
    setMode(newMode);
  };

  // Custom bar component to handle empty states
  const CustomBar = (props: any) => {
    const { payload } = props;
    const isEmpty = payload.totalEarnings === 0;
    
    return (
      <g>
        <rect
          {...props}
          fill={isEmpty ? 'rgba(34, 197, 94, 0.1)' : '#22c55e'}
          opacity={isEmpty ? 0.3 : 1}
        />
      </g>
    );
  };

  if (isLoading) {
    return (
      <div className={`${className} flex items-center justify-center h-64`}>
        <div className="text-white/60">Loading earnings data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${className} flex items-center justify-center h-64`}>
        <div className="text-red-400">Failed to load earnings data</div>
      </div>
    );
  }

  if (!earningsHistory || earningsHistory.bars.length === 0) {
    return (
      <div className={`${className} flex items-center justify-center h-64`}>
        <div className="text-white/60">No earnings data available</div>
      </div>
    );
  }

  const maxEarnings = Math.max(...earningsHistory.bars.map(bar => bar.totalEarnings));
  const hasData = earningsHistory.bars.some(bar => bar.totalEarnings > 0);

  // Generate Y-axis ticks (up to 4 ticks)
  const generateYAxisTicks = (max: number) => {
    if (max === 0) return [0];
    
    // Round up to a nice number
    const roundedMax = Math.ceil(max * 4) / 4; // Round to nearest 0.25
    const step = roundedMax / 4;
    
    return [
      (step * 1).toFixed(2),
      (step * 2).toFixed(2),
      (step * 3).toFixed(2),
      roundedMax.toFixed(2)
    ].map(val => parseFloat(val));
  };

  const yAxisTicks = hasData ? generateYAxisTicks(maxEarnings) : [0];

  return (
    <div className={`${className} bg-rich-black/50 rounded-lg px-6`}>
      {/* Header with mode selector */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-white text-lg font-semibold">Earnings Over Time</h3>
        
        <div className="flex items-center gap-2">
          <div className="bg-rich-black/60 rounded-lg p-1 flex">
            <button
              onClick={() => handleModeChange('last7')}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                mode === 'last7'
                  ? 'bg-dull-white/20 text-white'
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              7 Epoch
            </button>
            <button
              onClick={() => handleModeChange('last15')}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                mode === 'last15'
                  ? 'bg-dull-white/20 text-white'
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              15 Epoch
            </button>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-64">
        {!hasData ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-dull-white text-center">
              <div className="text-lg mb-2">No earnings data yet</div>
              <div className="text-sm">Start earning by depositing SOL</div>
            </div>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={earningsHistory.bars}
              margin={{ top: 20, right: 30, left: 25, bottom: 20 }}
              barCategoryGap="20%"
            >
              <XAxis
                dataKey="label"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#9CA3AF' }}
              />
              <YAxis
                domain={[0, Math.max(...yAxisTicks)]}
                ticks={yAxisTicks}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: '#9CA3AF' }}
                tickFormatter={(value) => value.toFixed(value < 1 ? 3 : 1)}
                width={20}
              />
              <Bar
                dataKey="totalEarnings"
                radius={[4, 4, 0, 0]}
                maxBarSize={60}
              >
                {earningsHistory.bars.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.totalEarnings === 0 ? 'rgba(34, 197, 94, 0.1)' : '#14F195'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Legend/Info */}
      <div className="flex items-center justify-between mt-4 text-sm text-white/60">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-solana-green rounded"></div>
            <span>Earnings (SOL)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500/20 rounded"></div>
            <span>No data</span>
          </div>
        </div>
      </div>
    </div>
  );
} 
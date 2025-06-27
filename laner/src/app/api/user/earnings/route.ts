import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export interface EarningsBar {
  label: string;
  epochStart: number | null;
  epochEnd: number | null;
  totalEarnings: number;
  date: string;
}

export interface EarningsResponse {
  mode: 'last7' | 'last15';
  bars: EarningsBar[];
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const privyId = searchParams.get('privyId');
    const mode = searchParams.get('mode') || 'last7';

    if (!privyId) {
      return NextResponse.json(
        { error: 'Privy ID is required' },
        { status: 400 }
      );
    }

    if (mode !== 'last7' && mode !== 'last15') {
      return NextResponse.json(
        { error: 'Mode must be either "last7" or "last15"' },
        { status: 400 }
      );
    }

    // Find user by privy_id
    const user = await prisma.users.findUnique({
      where: {
        privy_id: privyId,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Get all user earnings with epoch snapshots, sorted by epoch
    const userEarnings = await prisma.user_earnings.findMany({
      where: {
        user_id: user.id,
      },
      include: {
        epoch_snapshots: true,
      },
      orderBy: {
        epoch_snapshots: {
          epoch: 'asc',
        },
      },
    });

    let bars: EarningsBar[] = [];

    if (mode === 'last7') {
      // Get last 7 epochs
      const last7 = userEarnings.slice(-7);
      
      // Create exactly 7 bars, filling with actual data or zeros
      for (let i = 0; i < 7; i++) {
        const earning = last7[i];
        if (earning) {
          bars.push({
            label: `E-${earning.epoch_snapshots.epoch}`,
            epochStart: earning.epoch_snapshots.epoch,
            epochEnd: earning.epoch_snapshots.epoch,
            totalEarnings: Number(earning.earned_value),
            date: earning.epoch_snapshots.snapshot_time.toISOString(),
          });
        } else {
          // Create empty bar for missing epochs
          bars.push({
            label: `-`, // Placeholder epoch number
            epochStart: null,
            epochEnd: null,
            totalEarnings: 0,
            date: '',
          });
        }
      }
    } else {
      // Last 15 epochs mode
      const last15 = userEarnings.slice(-15);
      
      // Create exactly 15 bars, filling with actual data or zeros
      for (let i = 0; i < 15; i++) {
        const earning = last15[i];
        if (earning) {
          bars.push({
            label: `E-${earning.epoch_snapshots.epoch}`,
            epochStart: earning.epoch_snapshots.epoch,
            epochEnd: earning.epoch_snapshots.epoch,
            totalEarnings: Number(earning.earned_value),
            date: earning.epoch_snapshots.snapshot_time.toISOString(),
          });
        } else {
          // Create empty bar for missing epochs
          bars.push({
            label: `-`, // Placeholder epoch number
            epochStart: null,
            epochEnd: null,
            totalEarnings: 0,
            date: '',
          });
        }
      }
    }

    const response: EarningsResponse = {
      mode: mode as 'last7' | 'last15',
      bars,
    };

    return NextResponse.json(response, { status: 200 });

  } catch (error) {
    console.error('Error in user earnings API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 
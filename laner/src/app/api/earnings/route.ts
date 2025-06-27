import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const LAMPORTS_PER_SOL = 1_000_000_000;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const privyId = searchParams.get('privyId');

    if (!privyId) {
      return NextResponse.json(
        { error: 'Privy ID is required' },
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

    // Get the latest user snapshot
    const latestSnapshot = await prisma.user_snapshots.findFirst({
      where: {
        user_id: user.id,
      },
      orderBy: {
        epoch_snapshots: {
          epoch: 'desc',
        },
      },
      include: {
        epoch_snapshots: true,
      },
    });

    // If no snapshot exists, return 0 earnings for new users
    if (!latestSnapshot) {
      return NextResponse.json(
        { 
          earnings: 0,
          snapshotValue: 0,
          portfolioValue: 0,
          epoch: null,
          snapshotTime: null,
        },
        { status: 200 }
      );
    }

    // Calculate portfolio value (deposits - withdrawals)
    const totalDeposits = await prisma.deposits.aggregate({
      where: {
        user_id: user.id,
        type: 'SOL',
      },
      _sum: {
        amount: true,
      },
    });

    const totalWithdrawals = await prisma.withdrawals.aggregate({
      where: {
        user_id: user.id,
        type: 'SOL',
      },
      _sum: {
        amount: true,
      },
    });

    // Convert lamports to SOL and calculate portfolio
    const depositsInLamports = totalDeposits._sum.amount || 0;
    const withdrawalsInLamports = totalWithdrawals._sum.amount || 0;
    
    const depositsInSOL = Number(depositsInLamports) / LAMPORTS_PER_SOL;
    const withdrawalsInSOL = Number(withdrawalsInLamports) / LAMPORTS_PER_SOL;
    
    const portfolioValue = depositsInSOL - withdrawalsInSOL;

    // Calculate earnings: sol_value from snapshot - portfolio value
    const snapshotSolValue = Number(latestSnapshot.sol_value);
    const earnings = snapshotSolValue - portfolioValue;

    return NextResponse.json(
      { 
        earnings: Number(earnings.toFixed(2)),
        snapshotValue: Number(snapshotSolValue.toFixed(2)),
        portfolioValue: Number(portfolioValue.toFixed(2)),
        epoch: latestSnapshot.epoch_snapshots.epoch,
        snapshotTime: latestSnapshot.epoch_snapshots.snapshot_time.toISOString(),
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error in earnings API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 
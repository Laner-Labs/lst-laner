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

    // Calculate total deposits for SOL type
    const totalDeposits = await prisma.deposits.aggregate({
      where: {
        user_id: user.id,
        type: 'SOL',
      },
      _sum: {
        amount: true,
      },
    });

    // Calculate total withdrawals for SOL type
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

    return NextResponse.json(
      { 
        portfolio: Number(portfolioValue.toFixed(2)),
        deposits: Number(depositsInSOL.toFixed(2)),
        withdrawals: Number(withdrawalsInSOL.toFixed(2)),
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error in portfolio API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 
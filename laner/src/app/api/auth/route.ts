import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const { privyId } = await request.json();

    if (!privyId) {
      return NextResponse.json(
        { error: 'Privy ID is required' },
        { status: 400 }
      );
    }

    // Check if user already exists with this privy_id
    const existingUser = await prisma.users.findUnique({
      where: {
        privy_id: privyId,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { 
          message: 'User already exists',
          user: existingUser,
          isNewUser: false
        },
        { status: 200 }
      );
    }

    // Create new user if privy_id doesn't exist
    const newUser = await prisma.users.create({
      data: {
        privy_id: privyId,
      },
    });

    return NextResponse.json(
      { 
        message: 'User created successfully',
        user: newUser,
        isNewUser: true
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error in auth API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
} 
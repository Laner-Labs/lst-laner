import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { LST_TOKENS, SOL_MINT_ADDRESS } from '@/constants/lst-tokens';

const SOLANA_RPC_URL = process.env.SOLANA_RPC_URL || "";

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

    // Get wallet address from request or use a demo address for now
    // In production, you would get this from Privy's user object
    const walletAddress = searchParams.get('walletAddress');
    
    if (!walletAddress) {
      return NextResponse.json(
        { error: 'Wallet address is required as query parameter' },
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

    const connection = new Connection(SOLANA_RPC_URL);
    const publicKey = new PublicKey(walletAddress);

    // Get SOL balance
    const solBalance = await connection.getBalance(publicKey);
    const solBalanceInSOL = solBalance / LAMPORTS_PER_SOL;

    // Get token accounts for LST tokens
    const tokenAccounts = await connection.getParsedTokenAccountsByOwner(publicKey, {
      programId: new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'),
    });

    // Build assets array starting with SOL
    const assets = [];

    // Add SOL
    const solPrice = await getSOLPrice();
    assets.push({
      symbol: 'SOL',
      name: 'Solana',
      balance: solBalanceInSOL,
      marketPrice: solPrice,
      totalValue: solBalanceInSOL * solPrice,
      status: 'Inactive' as const, 
      mintAddress: SOL_MINT_ADDRESS,
    });

    // Process LST tokens
    for (const lstToken of LST_TOKENS) {
      const tokenAccount = tokenAccounts.value.find(
        (account) => account.account.data.parsed.info.mint === lstToken.mintAddress
      );

      if (tokenAccount) {
        const balance = tokenAccount.account.data.parsed.info.tokenAmount.uiAmount || 0;
        
        if (balance > 0) {
          const lstPrice = await getLSTPrice(lstToken.symbol);
          
          assets.push({
            symbol: lstToken.symbol,
            name: lstToken.name,
            balance: balance,
            marketPrice: lstPrice,
            totalValue: balance * lstPrice,
            status: 'Active' as const,
            mintAddress: lstToken.mintAddress,
          });
        }
      }
    }

    return NextResponse.json(assets, { status: 200 });

  } catch (error) {
    console.error('Error in wallet assets API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// Helper function to get SOL price
async function getSOLPrice(): Promise<number> {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd');
    const data = await response.json();
    return data.solana?.usd || 0;
  } catch (error) {
    console.error('Error fetching SOL price:', error);
    return 0;
  }
}

// Helper function to get LST token prices using Sanctum API
async function getLSTPrice(symbol: string): Promise<number> {
  try {
    // Find the LST token by symbol to get its mint address
    const lstToken = LST_TOKENS.find(token => token.symbol === symbol);
    if (!lstToken) {
      console.error(`LST token not found for symbol: ${symbol}`);
      return 0;
    }

    // Get all LST mint addresses for batch request
    const lstMints = LST_TOKENS.map(token => token.mintAddress).join('&lst=');
    
    // Fetch SOL values from Sanctum API
    const response = await fetch(
      `https://extra-api.sanctum.so/v1/sol-value/current?lst=${lstMints}`,
      {
        method: 'GET',
        headers: {
          'accept': 'application/json'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Sanctum API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Get SOL value for this specific LST (in lamports scale)
    const solValueScaled = data.solValues[lstToken.mintAddress];
    
    if (!solValueScaled) {
      console.error(`No SOL value found for ${symbol} (${lstToken.mintAddress})`);
      return 0;
    }

    // Convert from scaled value to actual SOL value per LST token
    // The API returns values scaled by 1e9 (lamports scale)
    const solValuePerLST = parseFloat(solValueScaled) / LAMPORTS_PER_SOL;
    
    // Get current SOL price in USD
    const solPrice = await getSOLPrice();
    
    // Calculate USD price: SOL value per LST * SOL price in USD
    return solValuePerLST * solPrice;
    
  } catch (error) {
    console.error(`Error fetching ${symbol} price:`, error);
    return 0;
  }
} 
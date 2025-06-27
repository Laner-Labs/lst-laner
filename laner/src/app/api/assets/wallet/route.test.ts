import { GET } from './route';
import { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

// Mock the dependencies
jest.mock('@/lib/prisma', () => ({
  prisma: {
    users: {
      findUnique: jest.fn(),
    },
    $disconnect: jest.fn(),
  },
}));

jest.mock('@solana/web3.js', () => ({
  Connection: jest.fn().mockImplementation(() => ({
    getBalance: jest.fn().mockResolvedValue(1000000000), // 1 SOL in lamports
    getParsedTokenAccountsByOwner: jest.fn().mockResolvedValue({
      value: [
        {
          account: {
            data: {
              parsed: {
                info: {
                  mint: 'J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn',
                  tokenAmount: {
                    uiAmount: 123.456789,
                  },
                },
              },
            },
          },
        },
      ],
    }),
  })),
  PublicKey: jest.fn().mockImplementation((key) => ({ toBase58: () => key })),
  LAMPORTS_PER_SOL: 1000000000,
}));

// Mock fetch for price APIs
global.fetch = jest.fn();

describe('/api/assets/wallet', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    
    // Default successful responses for price APIs
    (global.fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        solana: { usd: 100 },
      }),
    });
  });

  afterEach(async () => {
    await prisma.$disconnect();
  });

  describe('GET', () => {
    it('should return 400 if privyId is missing', async () => {
      const request = new NextRequest('http://localhost:3000/api/assets/wallet');
      
      const response = await GET(request);
      const data = await response.json();
      
      expect(response.status).toBe(400);
      expect(data.error).toBe('Privy ID is required');
    });

    it('should return 400 if walletAddress is missing', async () => {
      const request = new NextRequest('http://localhost:3000/api/assets/wallet?privyId=test-privy-id');
      
      const response = await GET(request);
      const data = await response.json();
      
      expect(response.status).toBe(400);
      expect(data.error).toBe('Wallet address is required as query parameter');
    });

    it('should return 404 if user is not found', async () => {
      (prisma.users.findUnique as jest.Mock).mockResolvedValue(null);
      
      const request = new NextRequest(
        'http://localhost:3000/api/assets/wallet?privyId=test-privy-id&walletAddress=9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM'
      );
      
      const response = await GET(request);
      const data = await response.json();
      
      expect(response.status).toBe(404);
      expect(data.error).toBe('User not found');
    });

    it('should return wallet assets successfully', async () => {
      (prisma.users.findUnique as jest.Mock).mockResolvedValue({
        id: 'user-id',
        privy_id: 'test-privy-id',
      });

      const request = new NextRequest(
        'http://localhost:3000/api/assets/wallet?privyId=test-privy-id&walletAddress=9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM'
      );
      
      const response = await GET(request);
      const data = await response.json();
      
      expect(response.status).toBe(200);
      expect(Array.isArray(data)).toBe(true);
      
      // Should include SOL
      const solAsset = data.find((asset: any) => asset.symbol === 'SOL');
      expect(solAsset).toBeDefined();
      expect(solAsset.status).toBe('Inactive');
      expect(solAsset.balance).toBe(1); // 1 SOL
      expect(solAsset.marketPrice).toBe(100);
      expect(solAsset.totalValue).toBe(100);
      
      // Should include JitoSOL
      const jitoSolAsset = data.find((asset: any) => asset.symbol === 'JitoSOL');
      expect(jitoSolAsset).toBeDefined();
      expect(jitoSolAsset.status).toBe('Active');
      expect(jitoSolAsset.balance).toBe(123.456789);
      expect(jitoSolAsset.marketPrice).toBe(102); // 100 * 1.02
      expect(jitoSolAsset.totalValue).toBe(123.456789 * 102);
    });

    it('should handle price API errors gracefully', async () => {
      (prisma.users.findUnique as jest.Mock).mockResolvedValue({
        id: 'user-id',
        privy_id: 'test-privy-id',
      });

      // Mock price API failure
      (global.fetch as jest.Mock).mockRejectedValue(new Error('Price API failed'));

      const request = new NextRequest(
        'http://localhost:3000/api/assets/wallet?privyId=test-privy-id&walletAddress=9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM'
      );
      
      const response = await GET(request);
      const data = await response.json();
      
      expect(response.status).toBe(200);
      
      // Should still return assets but with 0 prices
      const solAsset = data.find((asset: any) => asset.symbol === 'SOL');
      expect(solAsset.marketPrice).toBe(0);
      expect(solAsset.totalValue).toBe(0);
    });

    it('should handle database connection errors', async () => {
      (prisma.users.findUnique as jest.Mock).mockRejectedValue(new Error('Database connection failed'));

      const request = new NextRequest(
        'http://localhost:3000/api/assets/wallet?privyId=test-privy-id&walletAddress=9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM'
      );
      
      const response = await GET(request);
      const data = await response.json();
      
      expect(response.status).toBe(500);
      expect(data.error).toBe('Internal server error');
    });
  });
}); 
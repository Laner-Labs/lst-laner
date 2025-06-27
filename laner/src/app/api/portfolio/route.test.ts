// Mock Prisma
const mockPrisma = {
  users: {
    findUnique: jest.fn(),
  },
  deposits: {
    aggregate: jest.fn(),
  },
  withdrawals: {
    aggregate: jest.fn(),
  },
  $disconnect: jest.fn(),
};

jest.mock('@/lib/prisma', () => ({
  prisma: mockPrisma,
}));

import { NextRequest } from 'next/server';
import { GET } from './route';

describe('Portfolio API Route', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /api/portfolio', () => {
    it('should return 400 when privyId is missing', async () => {
      const request = new NextRequest('http://localhost:3000/api/portfolio');

      const response = await GET(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe('Privy ID is required');
    });

    it('should return 404 when user is not found', async () => {
      mockPrisma.users.findUnique.mockResolvedValue(null);

      const request = new NextRequest('http://localhost:3000/api/portfolio?privyId=invalid-id');

      const response = await GET(request);
      const data = await response.json();

      expect(response.status).toBe(404);
      expect(data.error).toBe('User not found');
      expect(mockPrisma.users.findUnique).toHaveBeenCalledWith({
        where: { privy_id: 'invalid-id' },
      });
    });

    it('should calculate portfolio correctly with deposits and withdrawals', async () => {
      const mockUser = {
        id: 'user-123',
        privy_id: 'privy-456',
        created_at: new Date('2024-01-01'),
      };

      // Mock 10 SOL in deposits (10 * 1_000_000_000 lamports)
      const mockDeposits = {
        _sum: { amount: 10_000_000_000 },
      };

      // Mock 2 SOL in withdrawals (2 * 1_000_000_000 lamports)
      const mockWithdrawals = {
        _sum: { amount: 2_000_000_000 },
      };

      mockPrisma.users.findUnique.mockResolvedValue(mockUser);
      mockPrisma.deposits.aggregate.mockResolvedValue(mockDeposits);
      mockPrisma.withdrawals.aggregate.mockResolvedValue(mockWithdrawals);

      const request = new NextRequest('http://localhost:3000/api/portfolio?privyId=privy-456');

      const response = await GET(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.portfolio).toBe(8.00); // 10 - 2 = 8 SOL
      expect(data.deposits).toBe(10.00);
      expect(data.withdrawals).toBe(2.00);

      expect(mockPrisma.deposits.aggregate).toHaveBeenCalledWith({
        where: { user_id: 'user-123', type: 'SOL' },
        _sum: { amount: true },
      });
      expect(mockPrisma.withdrawals.aggregate).toHaveBeenCalledWith({
        where: { user_id: 'user-123', type: 'SOL' },
        _sum: { amount: true },
      });
    });

    it('should handle zero deposits and withdrawals', async () => {
      const mockUser = {
        id: 'user-123',
        privy_id: 'privy-456',
        created_at: new Date('2024-01-01'),
      };

      mockPrisma.users.findUnique.mockResolvedValue(mockUser);
      mockPrisma.deposits.aggregate.mockResolvedValue({ _sum: { amount: null } });
      mockPrisma.withdrawals.aggregate.mockResolvedValue({ _sum: { amount: null } });

      const request = new NextRequest('http://localhost:3000/api/portfolio?privyId=privy-456');

      const response = await GET(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.portfolio).toBe(0.00);
      expect(data.deposits).toBe(0.00);
      expect(data.withdrawals).toBe(0.00);
    });

    it('should handle fractional SOL amounts correctly', async () => {
      const mockUser = {
        id: 'user-123',
        privy_id: 'privy-456',
        created_at: new Date('2024-01-01'),
      };

      // 1.5 SOL in deposits
      const mockDeposits = {
        _sum: { amount: 1_500_000_000 },
      };

      // 0.3 SOL in withdrawals
      const mockWithdrawals = {
        _sum: { amount: 300_000_000 },
      };

      mockPrisma.users.findUnique.mockResolvedValue(mockUser);
      mockPrisma.deposits.aggregate.mockResolvedValue(mockDeposits);
      mockPrisma.withdrawals.aggregate.mockResolvedValue(mockWithdrawals);

      const request = new NextRequest('http://localhost:3000/api/portfolio?privyId=privy-456');

      const response = await GET(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.portfolio).toBe(1.20); // 1.5 - 0.3 = 1.2 SOL
      expect(data.deposits).toBe(1.50);
      expect(data.withdrawals).toBe(0.30);
    });

    it('should handle database errors gracefully', async () => {
      mockPrisma.users.findUnique.mockRejectedValue(new Error('Database connection failed'));

      const request = new NextRequest('http://localhost:3000/api/portfolio?privyId=privy-456');

      const response = await GET(request);
      const data = await response.json();

      expect(response.status).toBe(500);
      expect(data.error).toBe('Internal server error');
    });

    it('should disconnect from database after successful operation', async () => {
      const mockUser = {
        id: 'user-123',
        privy_id: 'privy-456',
        created_at: new Date('2024-01-01'),
      };

      mockPrisma.users.findUnique.mockResolvedValue(mockUser);
      mockPrisma.deposits.aggregate.mockResolvedValue({ _sum: { amount: 0 } });
      mockPrisma.withdrawals.aggregate.mockResolvedValue({ _sum: { amount: 0 } });

      const request = new NextRequest('http://localhost:3000/api/portfolio?privyId=privy-456');

      await GET(request);

      expect(mockPrisma.$disconnect).toHaveBeenCalled();
    });

    it('should disconnect from database after error', async () => {
      mockPrisma.users.findUnique.mockRejectedValue(new Error('Database error'));

      const request = new NextRequest('http://localhost:3000/api/portfolio?privyId=privy-456');

      await GET(request);

      expect(mockPrisma.$disconnect).toHaveBeenCalled();
    });
  });
}); 
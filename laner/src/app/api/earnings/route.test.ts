// Mock Prisma
const mockPrisma = {
  users: {
    findUnique: jest.fn(),
  },
  user_snapshots: {
    findFirst: jest.fn(),
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

describe('Earnings API Route', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /api/earnings', () => {
    it('should return 400 when privyId is missing', async () => {
      const request = new NextRequest('http://localhost:3000/api/earnings');

      const response = await GET(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe('Privy ID is required');
    });

    it('should return 404 when user is not found', async () => {
      mockPrisma.users.findUnique.mockResolvedValue(null);

      const request = new NextRequest('http://localhost:3000/api/earnings?privyId=invalid-id');

      const response = await GET(request);
      const data = await response.json();

      expect(response.status).toBe(404);
      expect(data.error).toBe('User not found');
      expect(mockPrisma.users.findUnique).toHaveBeenCalledWith({
        where: { privy_id: 'invalid-id' },
      });
    });

    it('should return 0 earnings when no snapshot data is found', async () => {
      const mockUser = {
        id: 'user-123',
        privy_id: 'privy-456',
        created_at: new Date('2024-01-01'),
      };

      mockPrisma.users.findUnique.mockResolvedValue(mockUser);
      mockPrisma.user_snapshots.findFirst.mockResolvedValue(null);

      const request = new NextRequest('http://localhost:3000/api/earnings?privyId=privy-456');

      const response = await GET(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.earnings).toBe(0);
      expect(data.snapshotValue).toBe(0);
      expect(data.portfolioValue).toBe(0);
      expect(data.epoch).toBeNull();
      expect(data.snapshotTime).toBeNull();
    });

    it('should calculate earnings correctly with positive earnings', async () => {
      const mockUser = {
        id: 'user-123',
        privy_id: 'privy-456',
        created_at: new Date('2024-01-01'),
      };

      const mockSnapshot = {
        id: 'snapshot-123',
        user_id: 'user-123',
        epoch_snapshot_id: 'epoch-123',
        current_position: 'mSOL',
        sol_value: 12.50, // User has 12.5 SOL value in snapshot
        epoch_snapshots: {
          id: 'epoch-123',
          epoch: 100,
          snapshot_time: new Date('2024-01-01T10:00:00Z'),
        },
      };

      // Portfolio: 10 SOL deposits - 2 SOL withdrawals = 8 SOL
      const mockDeposits = { _sum: { amount: 10_000_000_000 } };
      const mockWithdrawals = { _sum: { amount: 2_000_000_000 } };

      mockPrisma.users.findUnique.mockResolvedValue(mockUser);
      mockPrisma.user_snapshots.findFirst.mockResolvedValue(mockSnapshot);
      mockPrisma.deposits.aggregate.mockResolvedValue(mockDeposits);
      mockPrisma.withdrawals.aggregate.mockResolvedValue(mockWithdrawals);

      const request = new NextRequest('http://localhost:3000/api/earnings?privyId=privy-456');

      const response = await GET(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.earnings).toBe(4.50); // 12.5 - 8.0 = 4.5 SOL earnings
      expect(data.snapshotValue).toBe(12.50);
      expect(data.portfolioValue).toBe(8.00);
      expect(data.epoch).toBe(100);
      expect(data.snapshotTime).toBe('2024-01-01T10:00:00.000Z');

      expect(mockPrisma.user_snapshots.findFirst).toHaveBeenCalledWith({
        where: { user_id: 'user-123' },
        orderBy: { epoch_snapshots: { epoch: 'desc' } },
        include: { epoch_snapshots: true },
      });
    });

    it('should handle negative earnings (losses)', async () => {
      const mockUser = {
        id: 'user-123',
        privy_id: 'privy-456',
        created_at: new Date('2024-01-01'),
      };

      const mockSnapshot = {
        id: 'snapshot-123',
        user_id: 'user-123',
        epoch_snapshot_id: 'epoch-123',
        current_position: 'bSOL',
        sol_value: 7.50, // User has 7.5 SOL value in snapshot
        epoch_snapshots: {
          id: 'epoch-123',
          epoch: 101,
          snapshot_time: new Date('2024-01-02T10:00:00Z'),
        },
      };

      // Portfolio: 10 SOL deposits - 0 SOL withdrawals = 10 SOL
      const mockDeposits = { _sum: { amount: 10_000_000_000 } };
      const mockWithdrawals = { _sum: { amount: null } };

      mockPrisma.users.findUnique.mockResolvedValue(mockUser);
      mockPrisma.user_snapshots.findFirst.mockResolvedValue(mockSnapshot);
      mockPrisma.deposits.aggregate.mockResolvedValue(mockDeposits);
      mockPrisma.withdrawals.aggregate.mockResolvedValue(mockWithdrawals);

      const request = new NextRequest('http://localhost:3000/api/earnings?privyId=privy-456');

      const response = await GET(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.earnings).toBe(-2.50); // 7.5 - 10.0 = -2.5 SOL (loss)
      expect(data.snapshotValue).toBe(7.50);
      expect(data.portfolioValue).toBe(10.00);
      expect(data.epoch).toBe(101);
    });

    it('should handle zero portfolio with earnings', async () => {
      const mockUser = {
        id: 'user-123',
        privy_id: 'privy-456',
        created_at: new Date('2024-01-01'),
      };

      const mockSnapshot = {
        id: 'snapshot-123',
        user_id: 'user-123',
        epoch_snapshot_id: 'epoch-123',
        current_position: 'JitoSOL',
        sol_value: 5.25,
        epoch_snapshots: {
          id: 'epoch-123',
          epoch: 102,
          snapshot_time: new Date('2024-01-03T10:00:00Z'),
        },
      };

      // No deposits or withdrawals
      const mockDeposits = { _sum: { amount: null } };
      const mockWithdrawals = { _sum: { amount: null } };

      mockPrisma.users.findUnique.mockResolvedValue(mockUser);
      mockPrisma.user_snapshots.findFirst.mockResolvedValue(mockSnapshot);
      mockPrisma.deposits.aggregate.mockResolvedValue(mockDeposits);
      mockPrisma.withdrawals.aggregate.mockResolvedValue(mockWithdrawals);

      const request = new NextRequest('http://localhost:3000/api/earnings?privyId=privy-456');

      const response = await GET(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.earnings).toBe(5.25); // 5.25 - 0 = 5.25 SOL
      expect(data.snapshotValue).toBe(5.25);
      expect(data.portfolioValue).toBe(0.00);
      expect(data.epoch).toBe(102);
    });

    it('should handle fractional calculations correctly', async () => {
      const mockUser = {
        id: 'user-123',
        privy_id: 'privy-456',
        created_at: new Date('2024-01-01'),
      };

      const mockSnapshot = {
        id: 'snapshot-123',
        user_id: 'user-123',
        epoch_snapshot_id: 'epoch-123',
        current_position: 'INF',
        sol_value: 3.333, // 3.333 SOL value
        epoch_snapshots: {
          id: 'epoch-123',
          epoch: 103,
          snapshot_time: new Date('2024-01-04T10:00:00Z'),
        },
      };

      // 1.111 SOL portfolio (1111 million lamports)
      const mockDeposits = { _sum: { amount: 1_111_000_000 } };
      const mockWithdrawals = { _sum: { amount: null } };

      mockPrisma.users.findUnique.mockResolvedValue(mockUser);
      mockPrisma.user_snapshots.findFirst.mockResolvedValue(mockSnapshot);
      mockPrisma.deposits.aggregate.mockResolvedValue(mockDeposits);
      mockPrisma.withdrawals.aggregate.mockResolvedValue(mockWithdrawals);

      const request = new NextRequest('http://localhost:3000/api/earnings?privyId=privy-456');

      const response = await GET(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.earnings).toBe(2.22); // 3.333 - 1.111 = 2.222, rounded to 2.22
      expect(data.snapshotValue).toBe(3.33); // Rounded to 2 decimals
      expect(data.portfolioValue).toBe(1.11); // Rounded to 2 decimals
    });

    it('should handle database errors gracefully', async () => {
      mockPrisma.users.findUnique.mockRejectedValue(new Error('Database connection failed'));

      const request = new NextRequest('http://localhost:3000/api/earnings?privyId=privy-456');

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

      const mockSnapshot = {
        id: 'snapshot-123',
        user_id: 'user-123',
        epoch_snapshot_id: 'epoch-123',
        current_position: 'mSOL',
        sol_value: 10.0,
        epoch_snapshots: {
          id: 'epoch-123',
          epoch: 100,
          snapshot_time: new Date('2024-01-01T10:00:00Z'),
        },
      };

      mockPrisma.users.findUnique.mockResolvedValue(mockUser);
      mockPrisma.user_snapshots.findFirst.mockResolvedValue(mockSnapshot);
      mockPrisma.deposits.aggregate.mockResolvedValue({ _sum: { amount: 0 } });
      mockPrisma.withdrawals.aggregate.mockResolvedValue({ _sum: { amount: 0 } });

      const request = new NextRequest('http://localhost:3000/api/earnings?privyId=privy-456');

      await GET(request);

      expect(mockPrisma.$disconnect).toHaveBeenCalled();
    });

    it('should disconnect from database after error', async () => {
      mockPrisma.users.findUnique.mockRejectedValue(new Error('Database error'));

      const request = new NextRequest('http://localhost:3000/api/earnings?privyId=privy-456');

      await GET(request);

      expect(mockPrisma.$disconnect).toHaveBeenCalled();
    });
  });
}); 
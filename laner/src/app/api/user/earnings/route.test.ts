// Mock Prisma first
jest.mock('@/lib/prisma', () => ({
  prisma: {
    users: {
      findUnique: jest.fn(),
    },
    user_earnings: {
      findMany: jest.fn(),
    },
    $disconnect: jest.fn(),
  },
}));

import { NextRequest } from 'next/server';
import { GET } from './route';
import { prisma } from '@/lib/prisma';

// Type the mock for better TypeScript support
const mockPrisma = prisma as jest.Mocked<typeof prisma>;

describe('User Earnings API Route', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /api/user/earnings', () => {
    it('should return 400 when privyId is missing', async () => {
      const request = new NextRequest('http://localhost:3000/api/user/earnings');

      const response = await GET(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe('Privy ID is required');
    });

    it('should return 400 when mode is invalid', async () => {
      const request = new NextRequest('http://localhost:3000/api/user/earnings?privyId=test&mode=invalid');

      const response = await GET(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe('Mode must be either "last7" or "last15"');
    });

    it('should return 404 when user is not found', async () => {
      mockPrisma.users.findUnique.mockResolvedValue(null);

      const request = new NextRequest('http://localhost:3000/api/user/earnings?privyId=invalid-id');

      const response = await GET(request);
      const data = await response.json();

      expect(response.status).toBe(404);
      expect(data.error).toBe('User not found');
      expect(mockPrisma.users.findUnique).toHaveBeenCalledWith({
        where: { privy_id: 'invalid-id' },
      });
    });

    it('should handle last7 mode with full data', async () => {
      const mockUser = {
        id: 'user-123',
        privy_id: 'privy-456',
        created_at: new Date('2024-01-01'),
      };

      const mockEarnings = Array.from({ length: 10 }, (_, i) => ({
        id: `earning-${i}`,
        user_id: 'user-123',
        epoch_snapshot_id: `epoch-${i}`,
        earned_value: 0.5 + i * 0.1, // Increasing earnings
        calculated_at: new Date(),
        epoch_snapshots: {
          id: `epoch-${i}`,
          epoch: 100 + i,
          snapshot_time: new Date(`2024-03-${10 + i}T10:00:00Z`),
        },
      }));

      mockPrisma.users.findUnique.mockResolvedValue(mockUser);
      mockPrisma.user_earnings.findMany.mockResolvedValue(mockEarnings);

      const request = new NextRequest('http://localhost:3000/api/user/earnings?privyId=privy-456&mode=last7');

      const response = await GET(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.mode).toBe('last7');
      expect(data.bars).toHaveLength(7);
      
      // Should contain the last 7 earnings
      expect(data.bars[0].totalEarnings).toBe(0.8); // earnings[3]
      expect(data.bars[6].totalEarnings).toBe(1.4); // earnings[9]
      
      // Check epoch label format
      expect(data.bars[0].label).toBe('E103'); // Epoch 103
      expect(data.bars[6].label).toBe('E109'); // Epoch 109
      
      expect(mockPrisma.user_earnings.findMany).toHaveBeenCalledWith({
        where: { user_id: 'user-123' },
        include: { epoch_snapshots: true },
        orderBy: { epoch_snapshots: { epoch: 'asc' } },
      });
    });

    it('should handle last7 mode with partial data', async () => {
      const mockUser = {
        id: 'user-123',
        privy_id: 'privy-456',
        created_at: new Date('2024-01-01'),
      };

      const mockEarnings = Array.from({ length: 3 }, (_, i) => ({
        id: `earning-${i}`,
        user_id: 'user-123',
        epoch_snapshot_id: `epoch-${i}`,
        earned_value: 0.5 + i * 0.1,
        calculated_at: new Date(),
        epoch_snapshots: {
          id: `epoch-${i}`,
          epoch: 100 + i,
          snapshot_time: new Date(`2024-03-${10 + i}T10:00:00Z`),
        },
      }));

      mockPrisma.users.findUnique.mockResolvedValue(mockUser);
      mockPrisma.user_earnings.findMany.mockResolvedValue(mockEarnings);

      const request = new NextRequest('http://localhost:3000/api/user/earnings?privyId=privy-456&mode=last7');

      const response = await GET(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.bars).toHaveLength(7);
      
      // First 3 should have data with epoch labels
      expect(data.bars[0].totalEarnings).toBe(0.5);
      expect(data.bars[0].label).toBe('E100');
      expect(data.bars[1].totalEarnings).toBe(0.6);
      expect(data.bars[1].label).toBe('E101');
      expect(data.bars[2].totalEarnings).toBe(0.7);
      expect(data.bars[2].label).toBe('E102');
      
      // Last 4 should be empty with placeholder labels
      expect(data.bars[3].totalEarnings).toBe(0);
      expect(data.bars[3].label).toBe('E4');
      expect(data.bars[4].totalEarnings).toBe(0);
      expect(data.bars[5].totalEarnings).toBe(0);
      expect(data.bars[6].totalEarnings).toBe(0);
    });

    it('should handle last15 mode with data', async () => {
      const mockUser = {
        id: 'user-123',
        privy_id: 'privy-456',
        created_at: new Date('2024-01-01'),
      };

      const mockEarnings = Array.from({ length: 20 }, (_, i) => ({
        id: `earning-${i}`,
        user_id: 'user-123',
        epoch_snapshot_id: `epoch-${i}`,
        earned_value: 0.1 + i * 0.05,
        calculated_at: new Date(),
        epoch_snapshots: {
          id: `epoch-${i}`,
          epoch: 100 + i,
          snapshot_time: new Date(`2024-03-${10 + i}T10:00:00Z`),
        },
      }));

      mockPrisma.users.findUnique.mockResolvedValue(mockUser);
      mockPrisma.user_earnings.findMany.mockResolvedValue(mockEarnings);

      const request = new NextRequest('http://localhost:3000/api/user/earnings?privyId=privy-456&mode=last15');

      const response = await GET(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.mode).toBe('last15');
      expect(data.bars).toHaveLength(15);
      
      // Should contain the last 15 earnings (from index 5 to 19)
      expect(data.bars[0].totalEarnings).toBe(0.35); // earnings[5]
      expect(data.bars[0].label).toBe('E105'); // Epoch 105
      expect(data.bars[14].totalEarnings).toBe(1.05); // earnings[19]
      expect(data.bars[14].label).toBe('E119'); // Epoch 119
    });

    it('should handle last15 mode with no data', async () => {
      const mockUser = {
        id: 'user-123',
        privy_id: 'privy-456',
        created_at: new Date('2024-01-01'),
      };

      mockPrisma.users.findUnique.mockResolvedValue(mockUser);
      mockPrisma.user_earnings.findMany.mockResolvedValue([]);

      const request = new NextRequest('http://localhost:3000/api/user/earnings?privyId=privy-456&mode=last15');

      const response = await GET(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.mode).toBe('last15');
      expect(data.bars).toHaveLength(15);
      
      // All bars should be empty with placeholder epoch labels
      data.bars.forEach((bar: any, index: number) => {
        expect(bar.label).toBe(`E${index + 1}`);
        expect(bar.totalEarnings).toBe(0);
        expect(bar.epochStart).toBeNull();
        expect(bar.epochEnd).toBeNull();
      });
    });

    it('should default to last7 mode when mode is not specified', async () => {
      const mockUser = {
        id: 'user-123',
        privy_id: 'privy-456',
        created_at: new Date('2024-01-01'),
      };

      mockPrisma.users.findUnique.mockResolvedValue(mockUser);
      mockPrisma.user_earnings.findMany.mockResolvedValue([]);

      const request = new NextRequest('http://localhost:3000/api/user/earnings?privyId=privy-456');

      const response = await GET(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.mode).toBe('last7');
    });

    it('should handle database errors gracefully', async () => {
      mockPrisma.users.findUnique.mockRejectedValue(new Error('Database connection failed'));

      const request = new NextRequest('http://localhost:3000/api/user/earnings?privyId=privy-456');

      const response = await GET(request);
      const data = await response.json();

      expect(response.status).toBe(500);
      expect(data.error).toBe('Internal server error');
      expect(mockPrisma.$disconnect).toHaveBeenCalled();
    });

    it('should handle user_earnings.findMany errors gracefully', async () => {
      const mockUser = {
        id: 'user-123',
        privy_id: 'privy-456',
        created_at: new Date('2024-01-01'),
      };

      mockPrisma.users.findUnique.mockResolvedValue(mockUser);
      mockPrisma.user_earnings.findMany.mockRejectedValue(new Error('Query failed'));

      const request = new NextRequest('http://localhost:3000/api/user/earnings?privyId=privy-456');

      const response = await GET(request);
      const data = await response.json();

      expect(response.status).toBe(500);
      expect(data.error).toBe('Internal server error');
    });

    it('should always disconnect from database', async () => {
      const mockUser = {
        id: 'user-123',
        privy_id: 'privy-456',
        created_at: new Date('2024-01-01'),
      };

      mockPrisma.users.findUnique.mockResolvedValue(mockUser);
      mockPrisma.user_earnings.findMany.mockResolvedValue([]);

      const request = new NextRequest('http://localhost:3000/api/user/earnings?privyId=privy-456');

      await GET(request);

      expect(mockPrisma.$disconnect).toHaveBeenCalled();
    });
  });
}); 
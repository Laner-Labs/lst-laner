// Mock Prisma
const mockPrisma = {
  users: {
    findUnique: jest.fn(),
    create: jest.fn(),
  },
  $disconnect: jest.fn(),
};

jest.mock('@prisma/client', () => ({
  PrismaClient: jest.fn(() => mockPrisma),
}));

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { POST } from './route';

describe('Auth API Route', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Reset NextResponse.json mock
    (NextResponse.json as jest.Mock).mockImplementation((data, init = {}) => ({
      status: init.status || 200,
      json: async () => data,
    }));
  });

  describe('POST /api/auth', () => {
    it('should return 400 when privyId is missing', async () => {
      const request = new NextRequest('http://localhost:3000/api/auth', {
        method: 'POST',
        body: JSON.stringify({}),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe('Privy ID is required');
      expect(NextResponse.json).toHaveBeenCalledWith(
        { error: 'Privy ID is required' },
        { status: 400 }
      );
    });

    it('should return 400 when privyId is empty string', async () => {
      const request = new NextRequest('http://localhost:3000/api/auth', {
        method: 'POST',
        body: JSON.stringify({ privyId: '' }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe('Privy ID is required');
    });

    it('should return existing user when privyId already exists', async () => {
      const existingUser = {
        id: 'user-123',
        privy_id: 'privy-456',
        created_at: new Date('2024-01-01'),
      };

      mockPrisma.users.findUnique.mockResolvedValue(existingUser);

      const request = new NextRequest('http://localhost:3000/api/auth', {
        method: 'POST',
        body: JSON.stringify({ privyId: 'privy-456' }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.message).toBe('User already exists');
      expect(data.user).toEqual(existingUser);
      expect(data.isNewUser).toBe(false);
      
      expect(mockPrisma.users.findUnique).toHaveBeenCalledWith({
        where: { privy_id: 'privy-456' },
      });
      expect(mockPrisma.users.create).not.toHaveBeenCalled();
      expect(NextResponse.json).toHaveBeenCalledWith(
        {
          message: 'User already exists',
          user: existingUser,
          isNewUser: false,
        },
        { status: 200 }
      );
    });

    it('should create new user when privyId does not exist', async () => {
      const newUser = {
        id: 'user-789',
        privy_id: 'privy-999',
        created_at: new Date('2024-01-01'),
      };

      mockPrisma.users.findUnique.mockResolvedValue(null);
      mockPrisma.users.create.mockResolvedValue(newUser);

      const request = new NextRequest('http://localhost:3000/api/auth', {
        method: 'POST',
        body: JSON.stringify({ privyId: 'privy-999' }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(201);
      expect(data.message).toBe('User created successfully');
      expect(data.user).toEqual(newUser);
      expect(data.isNewUser).toBe(true);
      
      expect(mockPrisma.users.findUnique).toHaveBeenCalledWith({
        where: { privy_id: 'privy-999' },
      });
      expect(mockPrisma.users.create).toHaveBeenCalledWith({
        data: { privy_id: 'privy-999' },
      });
      expect(NextResponse.json).toHaveBeenCalledWith(
        {
          message: 'User created successfully',
          user: newUser,
          isNewUser: true,
        },
        { status: 201 }
      );
    });

    it('should handle database findUnique errors gracefully', async () => {
      mockPrisma.users.findUnique.mockRejectedValue(new Error('Database connection failed'));

      const request = new NextRequest('http://localhost:3000/api/auth', {
        method: 'POST',
        body: JSON.stringify({ privyId: 'privy-456' }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(500);
      expect(data.error).toBe('Internal server error');
      expect(NextResponse.json).toHaveBeenCalledWith(
        { error: 'Internal server error' },
        { status: 500 }
      );
    });

    it('should handle database create errors gracefully', async () => {
      mockPrisma.users.findUnique.mockResolvedValue(null);
      mockPrisma.users.create.mockRejectedValue(new Error('Unique constraint violation'));

      const request = new NextRequest('http://localhost:3000/api/auth', {
        method: 'POST',
        body: JSON.stringify({ privyId: 'privy-999' }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(500);
      expect(data.error).toBe('Internal server error');
    });

    it('should handle invalid JSON body gracefully', async () => {
      const request = new NextRequest('http://localhost:3000/api/auth', {
        method: 'POST',
        body: 'invalid json',
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(500);
      expect(data.error).toBe('Internal server error');
    });

    it('should disconnect from database after successful operation', async () => {
      const existingUser = {
        id: 'user-123',
        privy_id: 'privy-456',
        created_at: new Date('2024-01-01'),
      };

      mockPrisma.users.findUnique.mockResolvedValue(existingUser);

      const request = new NextRequest('http://localhost:3000/api/auth', {
        method: 'POST',
        body: JSON.stringify({ privyId: 'privy-456' }),
      });

      await POST(request);

      expect(mockPrisma.$disconnect).toHaveBeenCalled();
    });

    it('should disconnect from database after error', async () => {
      mockPrisma.users.findUnique.mockRejectedValue(new Error('Database error'));

      const request = new NextRequest('http://localhost:3000/api/auth', {
        method: 'POST',
        body: JSON.stringify({ privyId: 'privy-456' }),
      });

      await POST(request);

      expect(mockPrisma.$disconnect).toHaveBeenCalled();
    });
  });
});

// Test result type
type TestResult = {
  passed: boolean;
  status?: number;
  data?: any;
  error?: string;
};

// Test cases for the auth API route
export const testCases = [
  {
    name: 'Missing privyId validation',
    description: 'Should return 400 when privyId is missing from request body',
    test: async (): Promise<TestResult> => {
      const request = new NextRequest('http://localhost:3000/api/auth', {
        method: 'POST',
        body: JSON.stringify({}),
      });

      const response = await POST(request);
      const data = await response.json();

      return {
        passed: response.status === 400 && data.error === 'Privy ID is required',
        status: response.status,
        data,
      };
    },
  },
  {
    name: 'Invalid JSON body',
    description: 'Should handle malformed JSON gracefully',
    test: async (): Promise<TestResult> => {
      const request = new NextRequest('http://localhost:3000/api/auth', {
        method: 'POST',
        body: 'invalid json',
      });

      try {
        const response = await POST(request);
        return {
          passed: response.status === 500,
          status: response.status,
          error: 'Expected error handling for invalid JSON',
        };
      } catch (error) {
        return {
          passed: true,
          error: 'Error caught as expected',
        };
      }
    },
  },
];

// Manual test runner
export async function runTests() {
  console.log('Running auth API tests...\n');

  for (const testCase of testCases) {
    console.log(`Test: ${testCase.name}`);
    console.log(`Description: ${testCase.description}`);
    
    try {
      const result = await testCase.test();
      console.log(`Result: ${result.passed ? 'PASSED' : 'FAILED'}`);
      if (result.status) {
        console.log(`Status: ${result.status}`);
      }
      if (result.data) {
        console.log(`Response:`, JSON.stringify(result.data, null, 2));
      }
      if (result.error) {
        console.log(`Error: ${result.error}`);
      }
    } catch (error) {
      console.log(`Result: ERROR`);
      console.log(`Error: ${error}`);
    }
    
    console.log('---\n');
  }
}

// Expected behavior documentation
export const expectedBehavior = {
  'POST /api/auth': {
    description: 'Handles user authentication and database operations',
    requestBody: {
      privyId: 'string (required) - The Privy user ID',
    },
    responses: {
      200: {
        description: 'User already exists in database',
        body: {
          message: 'User already exists',
          user: 'User object from database',
          isNewUser: false,
        },
      },
      201: {
        description: 'New user created successfully',
        body: {
          message: 'User created successfully',
          user: 'Newly created user object',
          isNewUser: true,
        },
      },
      400: {
        description: 'Bad request - missing privyId',
        body: {
          error: 'Privy ID is required',
        },
      },
      500: {
        description: 'Internal server error',
        body: {
          error: 'Internal server error',
        },
      },
    },
  },
};

// Run tests if this file is executed directly
if (require.main === module) {
  runTests().catch(console.error);
} 
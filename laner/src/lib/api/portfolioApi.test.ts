import { configureStore } from '@reduxjs/toolkit';
import { portfolioApi, PortfolioData, EarningsData, EarningsHistoryData } from './portfolioApi';

// Mock fetch globally for tests
global.fetch = jest.fn();

describe('Portfolio API Slice', () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        [portfolioApi.reducerPath]: portfolioApi.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(portfolioApi.middleware),
    });
    jest.clearAllMocks();
  });

  describe('getPortfolio endpoint', () => {
    it('should create correct query for portfolio data', () => {
      const privyId = 'test-privy-id';
      const endpoint = portfolioApi.endpoints.getPortfolio;
      const query = endpoint.query(privyId);
      
      expect(query).toBe('portfolio?privyId=test-privy-id');
    });

    it('should handle successful portfolio response', async () => {
      const mockResponse: PortfolioData = {
        portfolio: 8.50,
        deposits: 10.00,
        withdrawals: 1.50,
      };

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      });

      const action = portfolioApi.endpoints.getPortfolio.initiate('test-privy-id');
      const result = await store.dispatch(action);

      expect(result.data).toEqual(mockResponse);
      expect(global.fetch).toHaveBeenCalledWith(
        '/api/portfolio?privyId=test-privy-id',
        expect.objectContaining({
          method: 'GET',
        })
      );
    });

    it('should handle error response for portfolio', async () => {
      const mockError = { error: 'User not found' };

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 404,
        json: async () => mockError,
      });

      const action = portfolioApi.endpoints.getPortfolio.initiate('invalid-id');
      const result = await store.dispatch(action);

      expect(result.error).toBeDefined();
      expect(result.data).toBeUndefined();
    });
  });

  describe('getEarnings endpoint', () => {
    it('should create correct query for earnings data', () => {
      const privyId = 'test-privy-id';
      const endpoint = portfolioApi.endpoints.getEarnings;
      const query = endpoint.query(privyId);
      
      expect(query).toBe('earnings?privyId=test-privy-id');
    });

    it('should handle successful earnings response', async () => {
      const mockResponse: EarningsData = {
        earnings: 2.50,
        snapshotValue: 10.50,
        portfolioValue: 8.00,
        epoch: 100,
        snapshotTime: '2024-01-01T10:00:00.000Z',
      };

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      });

      const action = portfolioApi.endpoints.getEarnings.initiate('test-privy-id');
      const result = await store.dispatch(action);

      expect(result.data).toEqual(mockResponse);
      expect(global.fetch).toHaveBeenCalledWith(
        '/api/earnings?privyId=test-privy-id',
        expect.objectContaining({
          method: 'GET',
        })
      );
    });

    it('should handle error response for earnings', async () => {
      const mockError = { error: 'No snapshot data found for user' };

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 404,
        json: async () => mockError,
      });

      const action = portfolioApi.endpoints.getEarnings.initiate('no-snapshots-id');
      const result = await store.dispatch(action);

      expect(result.error).toBeDefined();
      expect(result.data).toBeUndefined();
    });
  });

  describe('getEarningsHistory endpoint', () => {
    it('should create correct query for earnings history data', () => {
      const params = { privyId: 'test-privy-id', mode: 'last7' as const };
      const endpoint = portfolioApi.endpoints.getEarningsHistory;
      const query = endpoint.query(params);
      
      expect(query).toBe('user/earnings?privyId=test-privy-id&mode=last7');
    });

    it('should create correct query for last15 mode', () => {
      const params = { privyId: 'test-privy-id', mode: 'last15' as const };
      const endpoint = portfolioApi.endpoints.getEarningsHistory;
      const query = endpoint.query(params);
      
      expect(query).toBe('user/earnings?privyId=test-privy-id&mode=last15');
    });

    it('should handle successful earnings history response', async () => {
      const mockResponse: EarningsHistoryData = {
        mode: 'last7',
        bars: [
          {
            label: 'E100',
            epochStart: 100,
            epochEnd: 100,
            totalEarnings: 1.5,
            date: '2024-03-03T10:00:00.000Z',
          },
          {
            label: 'E101',
            epochStart: 101,
            epochEnd: 101,
            totalEarnings: 2.0,
            date: '2024-03-04T10:00:00.000Z',
          },
        ],
      };

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      });

      const action = portfolioApi.endpoints.getEarningsHistory.initiate({
        privyId: 'test-privy-id',
        mode: 'last7',
      });
      const result = await store.dispatch(action);

      expect(result.data).toEqual(mockResponse);
      expect(global.fetch).toHaveBeenCalledWith(
        '/api/user/earnings?privyId=test-privy-id&mode=last7',
        expect.objectContaining({
          method: 'GET',
        })
      );
    });

    it('should handle error response for earnings history', async () => {
      const mockError = { error: 'User not found' };

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 404,
        json: async () => mockError,
      });

      const action = portfolioApi.endpoints.getEarningsHistory.initiate({
        privyId: 'invalid-id',
        mode: 'last7',
      });
      const result = await store.dispatch(action);

      expect(result.error).toBeDefined();
      expect(result.data).toBeUndefined();
    });
  });

  describe('cache and tags', () => {
    it('should provide correct tags for portfolio endpoint', () => {
      const endpoint = portfolioApi.endpoints.getPortfolio;
      const tags = endpoint.providesTags;
      
      expect(tags).toEqual(['Portfolio']);
    });

    it('should provide correct tags for earnings endpoint', () => {
      const endpoint = portfolioApi.endpoints.getEarnings;
      const tags = endpoint.providesTags;
      
      expect(tags).toEqual(['Earnings']);
    });

    it('should provide correct tags for earnings history endpoint', () => {
      const endpoint = portfolioApi.endpoints.getEarningsHistory;
      const tags = endpoint.providesTags;
      
      expect(tags).toEqual(['EarningsHistory']);
    });

    it('should have correct reducer path', () => {
      expect(portfolioApi.reducerPath).toBe('portfolioApi');
    });

    it('should have correct base URL', () => {
      const query = portfolioApi.endpoints.getPortfolio.query('test');
      expect(query).toBe('portfolio?privyId=test');
    });
  });

  describe('type safety', () => {
    it('should have correct TypeScript types for PortfolioData', () => {
      const portfolioData: PortfolioData = {
        portfolio: 10.5,
        deposits: 15.25,
        withdrawals: 4.75,
      };

      expect(typeof portfolioData.portfolio).toBe('number');
      expect(typeof portfolioData.deposits).toBe('number');
      expect(typeof portfolioData.withdrawals).toBe('number');
    });

    it('should have correct TypeScript types for EarningsData', () => {
      const earningsData: EarningsData = {
        earnings: 5.50,
        snapshotValue: 15.50,
        portfolioValue: 10.00,
        epoch: 100,
        snapshotTime: '2024-01-01T10:00:00.000Z',
      };

      expect(typeof earningsData.earnings).toBe('number');
      expect(typeof earningsData.snapshotValue).toBe('number');
      expect(typeof earningsData.portfolioValue).toBe('number');
      expect(typeof earningsData.epoch).toBe('number');
      expect(typeof earningsData.snapshotTime).toBe('string');
    });
  });
}); 
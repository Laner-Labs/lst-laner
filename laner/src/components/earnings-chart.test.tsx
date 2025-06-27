import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { usePrivy } from '@privy-io/react-auth';
import { portfolioApi } from '@/lib/api/portfolioApi';
import EarningsChart from './earnings-chart';

// Mock Privy
jest.mock('@privy-io/react-auth', () => ({
  usePrivy: jest.fn(),
}));

// Mock recharts to avoid rendering issues in tests
jest.mock('recharts', () => ({
  BarChart: ({ children }: any) => <div data-testid="bar-chart">{children}</div>,
  Bar: ({ children }: any) => <div data-testid="bar">{children}</div>,
  XAxis: () => <div data-testid="x-axis" />,
  YAxis: () => <div data-testid="y-axis" />,
  ResponsiveContainer: ({ children }: any) => <div data-testid="responsive-container">{children}</div>,
  Cell: () => <div data-testid="cell" />,
}));

const mockUsePrivy = usePrivy as jest.MockedFunction<typeof usePrivy>;

// Helper to create a test store
const createTestStore = () => {
  return configureStore({
    reducer: {
      [portfolioApi.reducerPath]: portfolioApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(portfolioApi.middleware),
  });
};

// Helper to render component with providers
const renderWithProviders = (component: React.ReactElement) => {
  const store = createTestStore();
  return render(
    <Provider store={store}>
      {component}
    </Provider>
  );
};

describe('EarningsChart', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    
    // Mock fetch globally
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render loading state when data is loading', () => {
    mockUsePrivy.mockReturnValue({
      user: { id: 'test-privy-id' },
      authenticated: true,
    } as any);

    // Mock loading state
    (global.fetch as jest.Mock).mockImplementation(() => new Promise(() => {})); // Never resolves

    renderWithProviders(<EarningsChart />);

    expect(screen.getByText('Loading earnings data...')).toBeInTheDocument();
  });

  it('should render error state when there is an error', async () => {
    mockUsePrivy.mockReturnValue({
      user: { id: 'test-privy-id' },
      authenticated: true,
    } as any);

    // Mock error response
    (global.fetch as jest.Mock).mockRejectedValue(new Error('API Error'));

    renderWithProviders(<EarningsChart />);

    await waitFor(() => {
      expect(screen.getByText('Failed to load earnings data')).toBeInTheDocument();
    });
  });

  it('should render no data state when user is not authenticated', () => {
    mockUsePrivy.mockReturnValue({
      user: null,
      authenticated: false,
    } as any);

    renderWithProviders(<EarningsChart />);

    // Should not try to fetch data without a user
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('should render chart with data in last7 mode', async () => {
    mockUsePrivy.mockReturnValue({
      user: { id: 'test-privy-id' },
      authenticated: true,
    } as any);

    const mockResponse = {
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

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    renderWithProviders(<EarningsChart />);

    await waitFor(() => {
      expect(screen.getByText('Earnings Over Time')).toBeInTheDocument();
      expect(screen.getByText('7 Epoch')).toBeInTheDocument();
      expect(screen.getByText('15 Epoch')).toBeInTheDocument();
      expect(screen.getByTestId('bar-chart')).toBeInTheDocument();
    });

    // Should show max earnings
    await waitFor(() => {
      expect(screen.getByText('Max: 2.000 SOL')).toBeInTheDocument();
    });
  });

  it('should switch to last15 mode when clicked', async () => {
    mockUsePrivy.mockReturnValue({
      user: { id: 'test-privy-id' },
      authenticated: true,
    } as any);

    const mockResponse = {
      mode: 'last7',
      bars: [],
    };

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    renderWithProviders(<EarningsChart />);

    await waitFor(() => {
      expect(screen.getByText('7 Epoch')).toBeInTheDocument();
    });

    // Click on "15 Epoch" button
    const last15Button = screen.getByText('15 Epoch');
    fireEvent.click(last15Button);

    // Should make a new API call with mode=last15
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        '/api/user/earnings?privyId=test-privy-id&mode=last15',
        expect.any(Object)
      );
    });
  });

  it('should render no earnings data state when bars are empty', async () => {
    mockUsePrivy.mockReturnValue({
      user: { id: 'test-privy-id' },
      authenticated: true,
    } as any);

    const mockResponse = {
      mode: 'last7',
      bars: [],
    };

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    renderWithProviders(<EarningsChart />);

    await waitFor(() => {
      expect(screen.getByText('No earnings data available')).toBeInTheDocument();
    });
  });

  it('should render no earnings data state when all earnings are zero', async () => {
    mockUsePrivy.mockReturnValue({
      user: { id: 'test-privy-id' },
      authenticated: true,
    } as any);

    const mockResponse = {
      mode: 'last7',
      bars: [
        {
          label: '3 Mar',
          epochStart: null,
          epochEnd: null,
          totalEarnings: 0,
          date: '',
        },
        {
          label: '4 Mar',
          epochStart: null,
          epochEnd: null,
          totalEarnings: 0,
          date: '',
        },
      ],
    };

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    renderWithProviders(<EarningsChart />);

    await waitFor(() => {
      expect(screen.getByText('No earnings data yet')).toBeInTheDocument();
      expect(screen.getByText('Start earning by depositing SOL')).toBeInTheDocument();
    });
  });

  it('should render legend with correct colors', async () => {
    mockUsePrivy.mockReturnValue({
      user: { id: 'test-privy-id' },
      authenticated: true,
    } as any);

    const mockResponse = {
      mode: 'last7',
      bars: [
        {
          label: '3 Mar',
          epochStart: 100,
          epochEnd: 100,
          totalEarnings: 1.5,
          date: '2024-03-03T10:00:00.000Z',
        },
      ],
    };

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    renderWithProviders(<EarningsChart />);

    await waitFor(() => {
      expect(screen.getByText('Earnings (SOL)')).toBeInTheDocument();
      expect(screen.getByText('No data')).toBeInTheDocument();
    });
  });

  it('should apply custom className', () => {
    mockUsePrivy.mockReturnValue({
      user: { id: 'test-privy-id' },
      authenticated: true,
    } as any);

    const { container } = renderWithProviders(<EarningsChart className="custom-class" />);

    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('should handle mode button states correctly', async () => {
    mockUsePrivy.mockReturnValue({
      user: { id: 'test-privy-id' },
      authenticated: true,
    } as any);

      (global.fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: async () => ({ mode: 'last7', bars: [] }),
      });

      renderWithProviders(<EarningsChart />);

      await waitFor(() => {
        const last7Button = screen.getByText('7 Epoch');
        const last15Button = screen.getByText('15 Epoch');

        // Last7 should be active by default
        expect(last7Button).toHaveClass('bg-dull-white/20', 'text-white');
        expect(last15Button).toHaveClass('text-white/60');
      });
  });
}); 
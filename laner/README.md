# LanEr - Cross-Chain LINK Token Transfer App

LanEr is a production web application that enables users to transfer LINK tokens from supported EVM chains (Base Sepolia, Ethereum Sepolia, Sonic Blaze) to a Solana wallet using Chainlink CCIP (Cross-Chain Interoperability Protocol).

## 🚀 Features

- **Multi-Chain Support**: Transfer LINK tokens from multiple EVM chains to Solana
- **External Wallet Integration**: Connect to popular wallets like MetaMask, Coinbase Wallet, Trust Wallet
- **Solana Wallet Management**: Integrated Solana wallet via Privy
- **Real-time Transfer Tracking**: Monitor cross-chain transfers with transaction details
- **User-Friendly Interface**: Modern, responsive UI with smooth animations
- **Production Ready**: Built with TypeScript, Next.js, and best practices

## 🏗️ Architecture

### Frontend Stack
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations and transitions
- **Lucide React**: Icon library

### Wallet Integration
- **External EVM Wallets**: MetaMask, Coinbase Wallet, Trust Wallet, WalletConnect
- **Privy**: Solana wallet management and authentication
- **Ethers.js**: EVM blockchain interaction

### Cross-Chain Infrastructure
- **Chainlink CCIP**: Cross-chain messaging and token transfer
- **Solana Devnet**: Destination chain for transfers
- **Multiple EVM Testnets**: Source chains (Base Sepolia, Ethereum Sepolia, Sonic Blaze)

## 📁 Project Structure

```
src/
├── components/
│   ├── dashboard/          # Dashboard components
│   ├── transfer/           # Transfer modal and components
│   ├── wallet-selector.tsx # External wallet selection UI
│   └── ui/                 # Reusable UI components
├── hooks/
│   ├── useEVMWallet.ts     # External EVM wallet management
│   └── useSolanaWallet.ts  # Solana wallet integration
├── lib/
│   └── ccip/              # Chainlink CCIP integration
│       ├── client.ts      # CCIP client utilities
│       └── config.ts      # Chain configurations
├── providers/
│   └── privy-provider.tsx # Privy authentication provider
└── constants/
    └── chains.ts          # Chain information and metadata
```

## 🔧 Setup & Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- MetaMask or other EVM wallet extension
- Solana wallet (Phantom, Solflare, etc.)

### Environment Variables
Create a `.env.local` file in the root directory:

```bash
# Privy Configuration
NEXT_PUBLIC_PRIVY_APP_ID=your_privy_app_id

# RPC URLs (optional - uses public endpoints by default)
NEXT_PUBLIC_ETHEREUM_SEPOLIA_RPC_URL=https://rpc.sepolia.org
NEXT_PUBLIC_BASE_SEPOLIA_RPC_URL=https://sepolia.base.org
NEXT_PUBLIC_SONIC_BLAZE_RPC_URL=https://testnet-rpc.sonicscan.org
```

### Installation
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🎯 Usage

### 1. Connect External EVM Wallet
- Click "Connect Wallet" in the EVM deposit section
- Choose from available wallets (MetaMask, Coinbase Wallet, Trust Wallet)
- Approve the connection in your wallet

### 2. Select Source Chain
- Choose from supported EVM chains:
  - **Base Sepolia**: Layer 2 scaling solution
  - **Ethereum Sepolia**: Ethereum testnet
  - **Sonic Blaze**: High-performance blockchain

### 3. Enter Transfer Details
- Specify the amount of LINK tokens to transfer
- The Solana receiver address is auto-populated from your Privy wallet
- Review the transfer details

### 4. Execute Transfer
- Click "Transfer LINK to Solana"
- Approve the transaction in your wallet
- Monitor the transfer progress
- View transaction details upon completion

## 🔗 Supported Chains

### Source Chains (EVM)
| Chain | Network ID | RPC URL | Explorer |
|-------|------------|---------|----------|
| Base Sepolia | 84532 | https://sepolia.base.org | https://sepolia.basescan.org |
| Ethereum Sepolia | 11155111 | https://rpc.sepolia.org | https://sepolia.etherscan.io |
| Sonic Blaze | 57054 | https://testnet-rpc.sonicscan.org | https://testnet.sonicscan.org |

### Destination Chain (Solana)
| Chain | Network | RPC URL | Explorer |
|-------|---------|---------|----------|
| Solana | Devnet | https://api.devnet.solana.com | https://explorer.solana.com/?cluster=devnet |

## 🔐 Wallet Support

### EVM Wallets (External)
- **MetaMask**: Most popular Ethereum wallet
- **Coinbase Wallet**: Coinbase's official wallet
- **Trust Wallet**: Binance's mobile wallet
- **WalletConnect**: Multi-wallet connection protocol

### Solana Wallets (Privy)
- **Embedded Wallets**: Automatically created via Privy
- **External Wallets**: Connect existing Solana wallets

## 🛠️ Development

### Key Components

#### `useEVMWallet` Hook
Manages external EVM wallet connections:
- Wallet detection and availability checking
- Connection state management
- Network switching
- CCIP token transfers

#### `WalletSelector` Component
Provides wallet selection UI:
- Lists available wallets
- Handles connection/disconnection
- Shows connection status
- Responsive design with animations

#### CCIP Integration
Cross-chain transfer functionality:
- Fee calculation
- Message creation and sending
- Transaction monitoring
- Error handling

### Adding New Chains
1. Update `src/constants/chains.ts` with chain information
2. Add chain configuration in `src/lib/ccip/config.ts`
3. Update wallet detection logic in `useEVMWallet`
4. Test with the new chain

### Adding New Wallets
1. Update wallet detection in `useEVMWallet`
2. Add wallet icon and metadata in `WalletSelector`
3. Test connection flow
4. Update documentation

## 🚨 Important Notes

### Development vs Production
- **Development**: Uses simulated transfers for testing
- **Production**: Replace mock implementations with real CCIP calls
- **Testnets**: All transfers use testnet networks

### Security Considerations
- Never expose private keys in client-side code
- Use environment variables for sensitive configuration
- Validate all user inputs
- Implement proper error handling

### Gas Fees
- Users pay gas fees on the source EVM chain
- CCIP fees are paid in LINK tokens
- Fees vary by chain and network congestion

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Check the documentation
- Review the code comments
- Open an issue on GitHub
- Contact the development team

---

**Note**: This application is for educational and development purposes. Always test thoroughly before using with real assets.

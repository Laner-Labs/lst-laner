# CCIP Transfer Implementation

This document describes the implementation of Chainlink CCIP (Cross-Chain Interoperability Protocol) transfer functionality from EVM chains to Solana.

## Overview

The implementation allows users to transfer LINK tokens from supported EVM chains (Ethereum Sepolia, Base Sepolia) to Solana Devnet using Chainlink's CCIP protocol.

## Architecture

### 1. CCIP Configuration (`/src/lib/ccip/config.ts`)
- Defines supported chain configurations
- Maps chain IDs to CCIP chain selectors
- Provides RPC URLs and contract addresses
- Handles fee token configuration

### 2. CCIP Client (`/src/lib/ccip/client.ts`)
- Core CCIP messaging functionality
- Handles fee calculation
- Manages cross-chain message sending
- Provides Solana-specific extra args encoding

### 3. Transfer Service (`/src/lib/ccip/transfer-service.ts`)
- High-level transfer orchestration
- Converts user-friendly amounts to raw token amounts
- Handles Solana address encoding
- Manages transfer execution flow

### 4. React Hook (`/src/hooks/use-ccip-transfer.ts`)
- React-friendly interface for transfers
- Handles loading states and error management
- Provides toast notifications
- Manages wallet client integration

### 5. UI Component (`/src/components/transfer/evm-deposit.tsx`)
- User interface for transfer initiation
- Chain selection and amount input
- Transfer result display
- Loading states and error handling

## Supported Chains

### Source Chains (EVM)
- **Ethereum Sepolia** (Chain ID: 11155111)
  - Router: `0x0BF3dE8c5D3e8A2B34D2BEeB17ABfCeBaf363A59`
  - LINK Token: `0x779877A7B0D9E8603169DdbD7836e478b4624789`
  - BnM Token: `0xFd57b4ddBf88a4e07fF4e34C487b99af2Fe82a05`

- **Base Sepolia** (Chain ID: 84532)
  - Router: `0xD3b06cEbF099CE7DA4AcCf578aaebFDBd6e88a93`
  - LINK Token: `0xE4aB69C077896252FAFBD49EFD26B5D171A32410`
  - BnM Token: `0x88A2d74F47a237a62e7A51cdDa67270CE381555e`

### Destination Chain
- **Solana Devnet** (Chain Selector: 16423721717087811551)

## Transfer Flow

1. **User Input**: User selects source chain, enters amount, and connects wallet
2. **Validation**: System validates wallet connection, amount, and Solana receiver address
3. **Fee Calculation**: CCIP fee is calculated for the transfer
4. **Token Approval**: LINK token approval is handled automatically by the SDK
5. **Message Creation**: CCIP message is created with proper encoding
6. **Transfer Execution**: Transaction is sent to the source chain router
7. **Confirmation**: User receives transaction hash and transfer details

## Key Features

### Error Handling
- Insufficient balance detection
- Network error handling
- User rejection handling
- Invalid address validation
- Chain support validation

### User Experience
- Loading states during transfer
- Toast notifications for success/error
- Transfer result display with transaction details
- Chain switching support
- Wallet connection management

### Security
- Proper Solana address validation
- Amount validation
- Chain ID validation
- Fee token validation

## Usage Example

```typescript
import { useCCIPTransfer } from '@/hooks/use-ccip-transfer';

function TransferComponent() {
  const { transfer, isTransferring, error } = useCCIPTransfer();

  const handleTransfer = async () => {
    const result = await transfer({
      amount: "1.5", // LINK tokens
      solanaReceiverAddress: "FfjbJmXh7vDXD9Ei1UFyPscs8NePLKshFqS3nt57VTen",
      sourceChainId: 11155111, // Ethereum Sepolia
      feeToken: 'link', // Use LINK for fees
    });

    if (result) {
      console.log('Transfer successful:', result.transactionHash);
    }
  };

  return (
    <button 
      onClick={handleTransfer}
      disabled={isTransferring}
    >
      {isTransferring ? 'Transferring...' : 'Transfer'}
    </button>
  );
}
```

## Environment Variables

The following environment variables can be set to customize RPC endpoints:

- `EVM_RPC_URL`: Custom RPC URL for Ethereum Sepolia
- `BASE_SEPOLIA_RPC_URL`: Custom RPC URL for Base Sepolia

If not set, the system will use public RPC endpoints as fallbacks.

## Dependencies

- `ethers`: Ethereum library for blockchain interaction
- `bs58`: Base58 encoding for Solana addresses
- `wagmi`: React hooks for Ethereum
- `viem`: Ethereum TypeScript interface
- `framer-motion`: Animation library
- `lucide-react`: Icon library
- `sonner`: Toast notifications

## Testing

To test the implementation:

1. Ensure you have LINK tokens on the source chain
2. Connect a MetaMask wallet
3. Connect a Solana wallet (via Privy)
4. Select a supported EVM chain
5. Enter the transfer amount
6. Click "Deposit" to initiate the transfer

The transfer will be processed through Chainlink's CCIP network and tokens will arrive on Solana Devnet. 
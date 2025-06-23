'use client';

import {PrivyProvider} from '@privy-io/react-auth';

export default function PrivyAppProvider({children}: {children: React.ReactNode}) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ''}
      clientId={process.env.PRIVY_APP_SECRET || ''}
      config={{
        loginMethods: ['google'],
        embeddedWallets: {
          solana: {
            createOnLogin: 'all-users'
          }
        }
      }}
    >
      {children}
    </PrivyProvider>
  );
}
'use client'

import Image from "next/image";
import { usePrivy, useLogin } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";

export default function LoginButton() {
  const { ready, authenticated} = usePrivy();
  const router = useRouter();
    
  const { login } = useLogin({
    onComplete: async (user) => {
        console.log('User logged in successfully', user);
        
        try {
          fetch('/api/auth', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              privyId: user.user.id,
            }),
          });
        } catch (error) {
          console.error('Error calling auth API:', error);
        }
        
        router.push('/dashboard');
    },
    onError: (error) => {
        console.error('Login failed', error);
    }
  });
  
  const disableLogin = !ready || (ready && authenticated);

  return (
    <button
      className="w-full flex items-center justify-center gap-x-2 bg-dull-white/[.15] hover:bg-dull-white/25 text-white font-bold py-3 px-4 rounded-lg transition-colors disabled:opacity-60 cursor-pointer"
      onClick={login}
      disabled={disableLogin}
    >
      <Image
        src="/login/Google.svg"
        alt="Google"
        width={24}
        height={24}
      />
      <span className="text-white opacity-80">Sign in with Google</span>
    </button>
  );
} 
import Image from "next/image";
import LoginButton from "@/components/LoginButton";

export default function Home() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: 'url("/login/background.png")',
        height: '100vh'
      }}
    >
      <div className="flex flex-col lg:flex-row h-full">
        {/* Left Half - Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-full">
            <Image
              src="/login/left-image.png"
              alt="LanEr"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        {/* Right Half - Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-8">
          <div className="w-full max-w-sm mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-center lg:text-left">
              LOGIN
            </h1>
            <p className="text-white/80 text-base md:text-lg mb-8 text-center lg:text-left">
              Multiply Your Crypto From SVM OR EVM <br />
              Chians With Automated Solana LST's <br />
              Laner,
            </p>
            <LoginButton />
          </div>
        </div>
      </div>
    </div>
  );
}

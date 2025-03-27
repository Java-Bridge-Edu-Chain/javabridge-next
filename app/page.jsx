"use client";

import { Sparkles } from "lucide-react";
import Bridge from "./components/Bridge";

/**
 * Home page for the JavaBridge interface with Luwak AI chat
 *
 * @returns {React.ReactNode} The home page
 */
export default function Home() {
  // Ref for the messages container
  // const messagesEndRef = useRef < HTMLDivElement > null;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="relative w-full max-w-4xl">
        {/* Hero section with animation */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 p-1.5 px-3 rounded-full bg-java-500 border border-java-700/30 text-java-200 mb-4 shadow-inner">
            <Sparkles className="w-4 h-4" color="white" />
            <span className="text-xs font-medium text-white">
              Bridging assets between chains elegantly
            </span>
          </div>
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-java-400 via-java-600 to-java-800 mb-3">
            <span className="animate-gradient">JavaBridge</span>
          </h1>
          <p className="text-java-600 max-w-xl mx-auto">
            A powerful Ethereum Roll Up for seamless cross-chain asset bridging
          </p>
        </div>

        {/* Chain status indicators */}
        {/* <div className="mb-6 flex justify-center">
          <div className="flex gap-3 p-2 bg-java-900/30 rounded-lg border border-java-800/30">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-java-800/30 to-java-900/30 rounded-md border border-java-700/20">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-xs font-medium text-java-300">Ethereum</span>
              <Gauge className="w-3 h-3 text-java-400/70" />
              <span className="text-xs text-java-400/80">28 Gwei</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-java-800/30 to-java-900/30 rounded-md border border-java-700/20">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-xs font-medium text-java-300">Arbitrum</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-java-800/30 to-java-900/30 rounded-md border border-java-700/20">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-xs font-medium text-java-300">Optimism</span>
            </div>
          </div>
        </div> */}

        {/* Main chat container with coffee-inspired design */}
        <Bridge />
      </div>
    </div>
  );
}

/* Additional animation styles */
const styles = `
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 6s ease infinite;
}
`;

// Inject the styles
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

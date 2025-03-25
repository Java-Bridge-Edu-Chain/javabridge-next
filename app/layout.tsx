"use client";

import "./globals.css";
import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
import { Coffee } from "lucide-react";

/**
 * Root layout for the page
 *
 * @param {object} props - The props for the root layout
 * @param {React.ReactNode} props.children - The children for the root layout
 * @returns {React.ReactNode} The root layout
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body 
        className="bg-primary text-amber-50 flex flex-col min-h-screen antialiased"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 2.828 17.272 15.556l-1.414-1.414L28 2.142 17.414 13.556l-1.414-1.414L28 0h4zM2.828 17.142l1.414 1.414 16.97-16.97L22.626 0h-2.83L2.828 16.97V17.143zM54.627 60l.83-.828-1.415-1.415L51.8 60h2.827zM5.373 60l-.83-.828L5.96 57.757 8.2 60H5.374zM48.97 60l3.657-3.657-1.414-1.414L46.143 60h2.828zM11.03 60L7.372 56.343 8.787 54.93 13.857 60H11.03zm32.284 0L49.8 53.515l-1.415-1.414-7.9 7.9h2.83zM16.686 60L10.2 53.515l1.415-1.414 7.9 7.9h-2.83zm20.97 0l9.315-9.314-1.414-1.414L34.828 60h2.83zM22.344 60l-9.314-9.314 1.414-1.414L25.172 60h-2.83zM32 60l12.142-12.142-1.414-1.414L30 57.172 17.272 44.444l-1.414 1.414L28 57.858 17.414 46.444l-1.414 1.414L28 60h4zM2.828 42.858l1.414-1.414 16.97 16.97L22.626 60h-2.83L2.828 43.03v-.17z' fill='rgba(255,215,128,0.03)' fill-rule='evenodd'/%3E%3C/svg%3E\")"
        }}
      >
        {/* Header with warm wood-like texture and gradient */}
        <header className="sticky top-0 z-40 w-full border-b border-amber-800/40 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 backdrop-blur supports-[backdrop-filter]:bg-amber-900/80 shadow-md">
          <div className="container flex h-20 items-center justify-between py-4">
            <div className="flex items-center gap-3 transition-all duration-300 hover:scale-105">
              <div className="p-2 bg-amber-700 rounded-full shadow-lg flex items-center justify-center">
                <Coffee className="h-8 w-8 text-amber-100" />
              </div>
              <span className="font-bold text-2xl tracking-tight bg-gradient-to-r from-amber-200 to-amber-100 text-transparent bg-clip-text">
                JavaBridge
              </span>
            </div>
            <div className="hidden md:flex space-x-1">
              <Button variant="ghost" className="text-amber-100 hover:text-amber-50 hover:bg-amber-800/60">
                Features
              </Button>
              <Button variant="ghost" className="text-amber-100 hover:text-amber-50 hover:bg-amber-800/60">
                Docs
              </Button>
              <Button variant="ghost" className="text-amber-100 hover:text-amber-50 hover:bg-amber-800/60">
                Pricing
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content with rich gradient background */}
        <main className="flex-grow flex items-center justify-center p-4 bg-gradient-to-b from-amber-950 via-amber-900 to-amber-950">
          <div className="container py-10 relative">
            {/* Decorative coffee bean patterns */}
            <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
              <div className="absolute top-10 left-10 w-40 h-40 bg-amber-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-60 h-60 bg-amber-400 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              {children}
            </div>
          </div>
        </main>

        {/* Footer with warm wooden texture */}
        <footer className="border-t border-amber-800/40 bg-gradient-to-r from-amber-900 via-amber-950 to-amber-900">
          <div className="container flex flex-col items-center gap-6 py-8 md:flex-row md:justify-between">
            <div className="flex items-center gap-3 transition-all duration-300 hover:scale-105">
              <Coffee className="h-6 w-6 text-amber-400" />
              <span className="font-medium text-lg tracking-tight text-amber-100">
                JavaBridge
              </span>
            </div>
            
            <div className="flex gap-6 text-sm text-amber-400">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-amber-200 transition-colors flex items-center gap-1"
              >
                <span>GitHub</span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-amber-200 transition-colors flex items-center gap-1"
              >
                <span>Documentation</span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-amber-200 transition-colors flex items-center gap-1"
              >
                <span>Community</span>
              </a>
            </div>
            
            <div className="text-xs text-amber-400/80">
              <p>
                Bridging your data with elegance
              </p>
              <p className="mt-1">© {new Date().getFullYear()} JavaBridge, Inc.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

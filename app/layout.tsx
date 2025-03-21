"use client";

import "./globals.css";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
      <body className="bg-background text-foreground flex flex-col min-h-screen antialiased">
        {/* Header with glassmorphism effect */}
        <header className="sticky top-0 z-40 w-full border-b border-input bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <img
                src="/globe.svg"
                alt="Logo"
                className="h-8 w-8"
              />
              <span className="font-bold text-2xl tracking-tight">AgentKit</span>
            </div>
            {/* Theme toggle button removed */}
          </div>
        </header>

        {/* Main Content with gradient background */}
        <main className="flex-grow flex items-center justify-center p-4 bg-gradient-to-b from-background to-muted/20">
          <div className="container py-10">
            {children}
          </div>
        </main>

        {/* Footer with brand elements */}
        <footer className="border-t border-input bg-muted/40">
          <div className="container flex flex-col items-center gap-4 py-6 md:flex-row md:justify-between">
            <div className="flex items-center gap-2">
              <img
                src="https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg"
                alt="Coinbase"
                className="h-6"
              />
            </div>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <a
                href="https://github.com/coinbase/agentkit"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://docs.cdp.coinbase.com/agentkit/docs/welcome"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-foreground transition-colors"
              >
                Documentation
              </a>
              <a
                href="https://discord.gg/CDP"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-foreground transition-colors"
              >
                Discord
              </a>
            </div>
            <div className="text-xs text-muted-foreground">
              <p>
                Powered by{" "}
                <a
                  href="https://docs.cdp.coinbase.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:underline"
                >
                  CDP
                </a>
              </p>
              <p className="mt-1">© {new Date().getFullYear()} Coinbase, Inc.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import { useAgent } from "../hooks/useAgent";
import ReactMarkdown from "react-markdown";
import { Coffee, Send, Sparkles, Bean, BookCopy, Droplets, Gauge } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

/**
 * Home page for the JavaBridge interface with Digital Luwak chat
 *
 * @returns {React.ReactNode} The home page
 */
export default function Home() {
  const [input, setInput] = useState("");
  const { messages, sendMessage, isThinking } = useAgent();

  // Ref for the messages container
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the bottom
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      const viewport = messagesEndRef.current.closest('[data-radix-scroll-area-viewport]');
      if (viewport) {
        viewport.scrollTop = viewport.scrollHeight;
      } else {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Auto-scroll whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const onSendMessage = async () => {
    if (!input.trim() || isThinking) return;
    const message = input;
    setInput("");
    await sendMessage(message);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="relative w-full max-w-4xl">
        {/* Hero section with animation */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 p-1.5 px-3 rounded-full bg-amber-900/40 border border-amber-700/30 text-amber-200 mb-4 shadow-inner animate-pulse">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-medium">Bridging assets between chains elegantly</span>
          </div>
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-amber-300 mb-3">
            <span className="animate-gradient">JavaBridge</span>
          </h1>
          <p className="text-amber-300/80 max-w-xl mx-auto">
            A powerful Ethereum Roll Up for seamless cross-chain asset bridging 
          </p>
        </div>

        {/* Chain status indicators */}
        <div className="mb-6 flex justify-center">
          <div className="flex gap-3 p-2 bg-amber-900/30 rounded-lg border border-amber-800/30">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-amber-800/30 to-amber-900/30 rounded-md border border-amber-700/20">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-xs font-medium text-amber-300">Ethereum</span>
              <Gauge className="w-3 h-3 text-amber-400/70" />
              <span className="text-xs text-amber-400/80">28 Gwei</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-amber-800/30 to-amber-900/30 rounded-md border border-amber-700/20">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-xs font-medium text-amber-300">Arbitrum</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-amber-800/30 to-amber-900/30 rounded-md border border-amber-700/20">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-xs font-medium text-amber-300">Optimism</span>
            </div>
          </div>
        </div>

        {/* Main chat container with coffee-inspired design */}
        <Card className="border-amber-700/30 bg-gradient-to-b from-amber-900/90 to-amber-950/90 backdrop-blur-md overflow-hidden shadow-[0_0_15px_rgba(200,140,50,0.15)]">
          {/* Chat header */}
          <div className="px-6 py-4 border-b border-amber-800/30 flex items-center justify-between bg-gradient-to-r from-amber-800/40 via-amber-900/40 to-amber-800/40">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 shadow-inner p-2 border border-amber-500/30">
                <Coffee className="w-5 h-5 text-amber-100" />
              </div>
              <div>
                <h2 className="font-semibold text-amber-100">Digital Luwak</h2>
                <p className="text-xs text-amber-400/70">Brewing blockchain solutions</p>
              </div>
            </div>
            
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-400/80 animate-pulse"></div>
              <span className="text-xs text-amber-400/80">Online</span>
            </div>
          </div>
          
          {/* Chat messages with stylish scrollable area */}
          <div className="relative">
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <div className="absolute -right-20 top-10 w-40 h-40 rounded-full bg-amber-500/20 blur-3xl"></div>
              <div className="absolute -left-20 bottom-10 w-40 h-40 rounded-full bg-amber-500/20 blur-3xl"></div>
            </div>
            
            <ScrollArea className="h-[50vh] p-4">
              <div className="space-y-4 px-2">
                {messages.length === 0 ? (
                  <div className="py-12 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-amber-800/20 flex items-center justify-center mb-4 animate-pulse">
                      <Bean className="w-8 h-8 text-amber-300/60" />
                    </div>
                    <p className="text-amber-400/70 max-w-xs mx-auto">
                      Start chatting with Digital Luwak, your expert assistant for JavaBridge operations
                    </p>
                    <div className="grid grid-cols-2 gap-2 mt-6">
                      <Button 
                        variant="outline" 
                        className="border-amber-700/30 bg-amber-900/30 hover:bg-amber-800/40 text-amber-300 gap-2 text-xs py-2 h-auto"
                        onClick={() => {
                          setInput("How to bridge assets?");
                          sendMessage("How to bridge assets?");
                        }}
                      >
                        <BookCopy className="w-3 h-3" />
                        How to bridge assets?
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-amber-700/30 bg-amber-900/30 hover:bg-amber-800/40 text-amber-300 gap-2 text-xs py-2 h-auto"
                        onClick={() => {
                          setInput("What is Digital Luwak?");
                          sendMessage("What is Digital Luwak?");
                        }}
                      >
                        <Droplets className="w-3 h-3" />
                        What is Digital Luwak?
                      </Button>
                    </div>
                  </div>
                ) : (
                  messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`
                        flex
                        ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}
                        items-end gap-3 max-w-[85%]
                      `}>
                        {/* Avatar */}
                        <Avatar className={`
                          w-8 h-8 border-2
                          ${msg.sender === "user" 
                            ? "bg-amber-600 border-amber-500"
                            : "bg-amber-800 border-amber-700"}
                        `}>
                          {msg.sender === "user" 
                            ? <span className="text-xs text-amber-100">You</span>
                            : <Coffee className="w-4 h-4 text-amber-200" />
                          }
                        </Avatar>
                        
                        {/* Message bubble */}
                        <div className={`
                          p-4 rounded-xl shadow
                          ${msg.sender === "user"
                            ? "bg-gradient-to-br from-amber-600 to-amber-700 text-amber-50 rounded-br-sm"
                            : "bg-gradient-to-br from-amber-900/70 to-amber-950/70 border border-amber-800/40 text-amber-200 rounded-bl-sm"}
                        `}>
                          <ReactMarkdown
                            components={{
                              a: props => (
                                <a
                                  {...props}
                                  className="text-amber-300 underline hover:text-amber-200 transition-colors"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                />
                              ),
                              code: props => (
                                <code
                                  {...props}
                                  className="bg-amber-950/50 p-1 rounded text-amber-300 text-sm"
                                />
                              ),
                              ul: props => (
                                <ul
                                  {...props}
                                  className="list-disc pl-5 my-2 space-y-1"
                                />
                              ),
                            }}
                          >
                            {msg.text}
                          </ReactMarkdown>
                        </div>
                      </div>
                    </div>
                  ))
                )}

                {/* Thinking Indicator */}
                {isThinking && (
                  <div className="flex justify-start">
                    <div className="flex items-end gap-3">
                      <Avatar className="w-8 h-8 bg-amber-800 border-2 border-amber-700">
                        <Coffee className="w-4 h-4 text-amber-200" />
                      </Avatar>
                      <div className="p-3 rounded-xl bg-gradient-to-br from-amber-900/70 to-amber-950/70 border border-amber-800/40 rounded-bl-sm">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-amber-500/80 animate-pulse"></div>
                          <div className="w-2 h-2 rounded-full bg-amber-500/80 animate-pulse delay-75"></div>
                          <div className="w-2 h-2 rounded-full bg-amber-500/80 animate-pulse delay-150"></div>
                          <span className="ml-2 text-xs text-amber-400/80">Brewing response...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Invisible div to track the bottom */}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
          </div>
          
          {/* Input Box with sophisticated styling */}
          <div className="p-4 border-t border-amber-800/30 bg-gradient-to-r from-amber-900/50 via-amber-800/20 to-amber-900/50">
            <div className="flex items-center gap-2">
              <Input
                type="text"
                className="flex-grow py-5 px-4 bg-amber-900/30 border-amber-700/30 text-amber-100 placeholder-amber-500/50 focus:ring-amber-500/40 focus-visible:ring-offset-amber-900"
                placeholder="Ask Digital Luwak about JavaBridge..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && onSendMessage()}
                disabled={isThinking}
              />
              <Button
                onClick={onSendMessage}
                className={`rounded-full h-12 w-12 p-0 flex items-center justify-center transition-all ${
                  isThinking
                    ? "bg-amber-800/50 cursor-not-allowed"
                    : "bg-gradient-to-br from-amber-500 to-amber-700 hover:from-amber-400 hover:to-amber-600 shadow-lg hover:shadow-amber-700/20"
                }`}
                disabled={isThinking}
              >
                <Send className="h-5 w-5 text-amber-50" />
              </Button>
            </div>
            
            <div className="flex justify-center mt-3">
              <div className="text-xs text-amber-500/60 px-3 py-1 rounded-full border border-amber-700/20 bg-amber-900/20">
                Powered by JavaBridge • Ethereum Roll Up • Cross-Chain Bridge
              </div>
            </div>
          </div>
        </Card>

        {/* Feature highlights */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gradient-to-br from-amber-900/40 to-amber-950/40 rounded-lg border border-amber-800/30 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-full bg-amber-800/40 flex items-center justify-center mb-3">
              <Coffee className="w-5 h-5 text-amber-300" />
            </div>
            <h3 className="text-amber-200 font-medium mb-1">Cross-Chain Bridging</h3>
            <p className="text-amber-400/70 text-sm">Seamlessly transfer assets between Ethereum and other chains with our secure bridge.</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-amber-900/40 to-amber-950/40 rounded-lg border border-amber-800/30 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-full bg-amber-800/40 flex items-center justify-center mb-3">
              <Bean className="w-5 h-5 text-amber-300" />
            </div>
            <h3 className="text-amber-200 font-medium mb-1">Layer 2 Rollup</h3>
            <p className="text-amber-400/70 text-sm">Enjoy the security of Ethereum with faster and cheaper transactions on our L2 solution.</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-amber-900/40 to-amber-950/40 rounded-lg border border-amber-800/30 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-full bg-amber-800/40 flex items-center justify-center mb-3">
              <Droplets className="w-5 h-5 text-amber-300" />
            </div>
            <h3 className="text-amber-200 font-medium mb-1">Digital Luwak Assistant</h3>
            <p className="text-amber-400/70 text-sm">Get expert guidance on all bridge operations from our AI-powered coffee connoisseur.</p>
          </div>
        </div>
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
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

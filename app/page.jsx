"use client";

import { useState, useEffect, useRef } from "react";
import { useAgent } from "../hooks/useAgent";
import {
  Coffee,
  Sparkles,
  Stars,
  Layers,
  Zap,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import TypingIndicator from "./components/typing-indicator";
import ChatInput from "./components/chat-input";
import ChatGuide from "./components/chat-guide";
import ChatMessage from "./components/chat-message";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [input, setInput] = useState("");
  const { messages, sendMessage, isThinking } = useAgent();
  const messagesEndRef = useRef(null);
  const [showParticles, setShowParticles] = useState(false);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      const viewport = messagesEndRef.current.closest(
        "[data-radix-scroll-area-viewport]"
      );
      if (viewport) {
        viewport.scrollTop = viewport.scrollHeight;
      } else {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Show particles after initial render for better performance
    setShowParticles(true);
  }, []);

  const onSendMessage = async () => {
    if (!input.trim() || isThinking) return;
    const message = input;
    setInput("");
    await sendMessage(message);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-80px)] bg-gradient-to-b p-4">
      <div className="relative w-full max-w-5xl">

        {/* Enhanced Hero section with animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center relative"
        >
          <div className="relative inline-flex items-center gap-3 p-2 px-6 rounded-full bg-gradient-to-r from-java-500 to-java-600 border border-java-700/30 text-java-50 mb-6 shadow-lg shadow-java-500/20 transform hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 animate-pulse" color="white" />
            <span className="text-sm font-medium text-white">
            Your On-Chain AI for EduChain & Beyond ☕
            </span>
            <Stars className="w-4 h-4 text-java-100 animate-spin-slow" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-java-400 via-java-600 to-java-800 mb-4 drop-shadow-sm">
            <span className="animate-gradient relative text-java-500">
              Luwak AI
              <div className="absolute -top-1 -right-4 w-6 h-6 text-java-400">
                <Zap className="w-6 h-6 animate-pulse" />
              </div>
            </span>
          </h1>
          
          <p className="text-java-700 max-w-xl mx-auto text-lg mb-6 leading-relaxed">
          <strong>Luwak AI</strong> is your <strong>intelligent crypto assistant—purpose-built for EduChain</strong>. Ask anything. Learn fast. Bridge smarter.
          </p>
          
          {/* <div className="hidden md:flex justify-center gap-5 mb-4">
            {['Security', 'Speed', 'Reliability', 'Innovation'].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-java-200"
              >
                <div className="w-2 h-2 rounded-full bg-java-500"></div>
                <span className="text-sm font-medium text-java-700">{item}</span>
              </motion.div>
            ))}
          </div> */}
        </motion.div>

        {/* Enhanced Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="relative bg-gradient-to-br from-white backdrop-blur-md overflow-hidden shadow-2xl py-0 border-java-200 rounded-xl">
            {/* Decorative card elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -right-20 top-20 w-60 h-60 rounded-full bg-java-500/5 blur-3xl"></div>
              <div className="absolute -left-10 bottom-20 w-40 h-40 rounded-full bg-java-500/5 blur-3xl"></div>
              <div className="absolute right-1/4 bottom-10 w-20 h-20 rounded-full bg-java-400/5 blur-2xl"></div>
            </div>

            {/* Enhanced header */}
            <div className="px-6 py-4 border-b border-java-800/20 flex items-center justify-between bg-gradient-to-r from-java-800 via-java-700 to-java-800 relative overflow-hidden">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-java-500 to-java-700 shadow-lg shadow-java-700/30 p-2.5 border border-java-400/50 hover:scale-105 transition-transform duration-300">
                  <Coffee className="w-6 h-6 text-java-50 drop-shadow-md" />
                </div>
                <div>
                  <h2 className="font-bold text-xl text-white tracking-tight">Luwak AI</h2>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <p className="text-sm text-java-200/80">Empowering Web3 with clarity, speed, and on-chain precision.</p>
                  </div>
                </div>
              </div>

              {/* Decorative lines in header */}
              <div className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-java-500/50 to-transparent"></div>
            </div>

            {/* Chat messages with improved styling */}
            <div className="relative">
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute -right-20 top-10 w-60 h-60 rounded-full bg-java-500/30 blur-3xl"></div>
                <div className="absolute -left-20 bottom-10 w-60 h-60 rounded-full bg-java-500/20 blur-3xl"></div>
              </div>

              <ScrollArea className="h-[60vh] px-6 pb-4 pt-2">
                <AnimatePresence>
                  <div className="space-y-6 py-4">
                    {messages.length === 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <ChatGuide setInput={setInput} sendMessage={sendMessage}/>
                      </motion.div>
                    )}
                    
                    {messages.length > 0 && (
                      messages.map((msg, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <ChatMessage text={msg.text} sender={msg.sender} />
                        </motion.div>
                      ))
                    )}

                    {/* Thinking Indicator */}
                    {isThinking && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <TypingIndicator />
                      </motion.div>
                    )}

                    {/* Invisible div to track the bottom */}
                    <div ref={messagesEndRef} />
                  </div>
                </AnimatePresence>
              </ScrollArea>
            </div>

            {/* Input Box with enhanced styling */}
            <div className="relative">
              <div className="absolute -top-10 left-0 right-0 h-20 bg-gradient-to-t from-[#E5F1F1] to-transparent pointer-events-none"></div>
              <ChatInput
                input={input}
                setInput={setInput}
                onSendMessage={onSendMessage}
                isThinking={isThinking}
              />
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import { useAgent } from "../hooks/useAgent";
import {
  Coffee,
  Sparkles,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import TypingIndicator from "./components/typing-indicator";
import ChatInput from "./components/chat-input";
import ChatGuide from "./components/chat-guide";
import ChatMessage from "./components/chat-message";

export default function Home() {
  const [input, setInput] = useState("");
  const { messages, sendMessage, isThinking } = useAgent();
  const messagesEndRef = useRef(null);

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


        <Card className="border-amber-700/30 backdrop-blur-md overflow-hidden shadow-lg py-0">
          <div className="px-6 py-4 border-b border-amber-800/30 flex items-center justify-between bg-gradient-to-r from-amber-800/40 via-amber-900/40 to-amber-800/40">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 shadow-inner p-2 border border-amber-500/30">
                <Coffee className="w-5 h-5 text-amber-100" />
              </div>
              <div>
                <h2 className="font-semibold text-java-700">Luwak AI</h2>
                <p className="text-xs text-amber-800/70">
                  Brewing blockchain solutions
                </p>
              </div>
            </div>

          </div>

          {/* Chat messages with stylish scrollable area */}
          <div className="relative">
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <div className="absolute -right-20 top-10 w-40 h-40 rounded-full bg-amber-500/20 blur-3xl"></div>
              <div className="absolute -left-20 bottom-10 w-40 h-40 rounded-full bg-amber-500/20 blur-3xl"></div>
            </div>

            <ScrollArea className="h-[50vh] px-4">
              <div className="space-y-4 py-2">
                {messages.length === 0 && (
                  <ChatGuide setInput={setInput} sendMessage={sendMessage}/>
                )}
                {messages.length > 0 && (
                  messages.map((msg, index) => (<ChatMessage key={index} text={msg.text} sender={msg.sender} />))
                )}

                {/* Thinking Indicator */}
                {isThinking && (
                  <TypingIndicator />
                )}

                {/* Invisible div to track the bottom */}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
          </div>

          {/* Input Box with sophisticated styling */}
          <ChatInput
            input={input}
            setInput={setInput}
            onSendMessage={onSendMessage}
            isThinking={isThinking}
           />

        </Card>
      </div>
    </div>
  );
}

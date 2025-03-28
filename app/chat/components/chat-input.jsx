"use client";

import React, { useState } from "react";
import { Send, Sparkles } from "lucide-react";

const ChatInput = ({ input, setInput, onSendMessage, isThinking }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage();
  };

  return (
    <div className="border-t border-java-800/20 bg-gradient-to-b from-java-50/50 to-java-100/30 p-4 backdrop-blur-sm relative">
      <form onSubmit={handleSubmit} className="relative">
        {/* Decorative element */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8">
          <Sparkles className="w-4 h-4 text-java-400" />
        </div>
        
        <div className="flex gap-2">
          <div className="relative flex-grow">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me about JavaBridge..."
              disabled={isThinking}
              className="w-full pl-10 pr-4 py-3 rounded-full bg-white/60 border border-java-200 shadow-inner shadow-java-100 text-java-900 placeholder:text-java-400 focus:outline-none focus:ring-2 focus:ring-java-500 focus:border-java-400 transition-all duration-200 backdrop-blur-sm"
            />
            {/* Subtle gradient background underneath */}
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-java-200/20 via-java-300/20 to-java-200/20 blur-sm"></div>
          </div>
          
          <button
            type="submit"
            disabled={isThinking || !input.trim()}
            className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
              isThinking || !input.trim()
                ? "bg-java-300/50 text-java-500/50 cursor-not-allowed"
                : "bg-gradient-to-br from-java-500 to-java-600 text-white shadow-lg shadow-java-500/30 hover:shadow-xl hover:shadow-java-500/40 hover:-translate-y-0.5"
            }`}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;

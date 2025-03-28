"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Paperclip, Smile } from "lucide-react";
import { motion } from "framer-motion";

export default function ChatInput({
  input,
  setInput,
  onSendMessage,
  isThinking,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [input]);

  return (
    <div className="border-t border-amber-200/30 bg-gradient-to-r from-[#D9BEA7] to-[#CAAF9B] p-4">
      <form onSubmit={handleSubmit} className="relative">
        <div
          className={`relative rounded-xl transition-all duration-300 ${
            isFocused
              ? "bg-white shadow-lg ring-2 ring-[#C77D31]/50"
              : "bg-[#E8D8CC]/80 shadow"
          }`}
        >
          <div className="flex items-end">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Ask about JavaBridge or blockchain concepts..."
              className="flex-1 p-3 pl-4 pr-12 bg-transparent text-[#8B5E3C] placeholder-[#8B5E3C]/60 focus:outline-none resize-none max-h-32 min-h-[52px]"
              rows={1}
            />

            <div className="flex items-center pr-3 pb-3">
              {/* <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                className="text-[#8B5E3C]/70 hover:text-[#8B5E3C] p-1 rounded-full mr-1"
              >
                <Paperclip className="h-5 w-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                className="text-[#8B5E3C]/70 hover:text-[#8B5E3C] p-1 rounded-full mr-2"
              >
                <Smile className="h-5 w-5" />
              </motion.button> */}

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="submit"
                disabled={!input.trim() || !isThinking}
                className={`bg-gradient-to-r ${
                  input.trim()
                    ? "from-[#F08A24] to-[#E67E22] hover:from-[#E67E22] hover:to-[#D35400]"
                    : "from-[#F08A24]/50 to-[#E67E22]/50"
                } text-white rounded-full p-2 shadow-md transition-all duration-200`}
              >
                <Send className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </form>

      <div className="mt-3 text-center">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="text-[#8B5E3C]/70 text-xs bg-[#E8D8CC]/50 hover:bg-[#E8D8CC] px-4 py-1.5 rounded-full transition-colors"
        >
          Powered by Luwak AI • Brewing Since 2025
        </motion.button>
      </div>
    </div>
  );
}

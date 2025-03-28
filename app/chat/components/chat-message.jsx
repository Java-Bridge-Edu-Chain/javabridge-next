"use client";

import { Coffee, User } from "lucide-react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

export default function ChatMessage({ text, sender, msg }) {
  const isAI = sender !== "user";
  console.log(text)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex gap-3 ${isAI ? "" : "justify-end"}`}
    >
      {isAI && (
        <div className="bg-gradient-to-br from-[#C77D31] to-[#B06D21] rounded-full p-2 h-10 w-10 flex items-center justify-center shrink-0 mt-1 shadow-md">
          <Coffee className="h-5 w-5 text-white" />
        </div>
      )}

      <div
        className={`p-4 rounded-2xl max-w-[80%] shadow-md ${
          isAI
            ? "bg-gradient-to-r from-[#9A7259] to-[#8B6548] text-amber-100 rounded-tl-sm"
            : "bg-gradient-to-r from-[#F08A24] to-[#E67E22] text-white rounded-tr-sm"
        }`}
      >
        {!isAI ? (
            <p className="leading-relaxed">{text}</p>
        ): (
            <ReactMarkdown
            components={{
              a: (props) => (
                <a
                  {...props}
                  className="text-amber-200 underline hover:text-amber-200/60 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              ),
              code: (props) => (
                <code
                  {...props}
                  className="bg-amber-950/50 p-1 rounded text-amber-200 text-sm"
                />
              ),
              ul: (props) => (
                <ul
                  {...props}
                  className="list-disc pl-5 my-2 space-y-1"
                />
              ),
            }}
          >
            {text}
          </ReactMarkdown>
        )}
      </div>

      {!isAI && (
        <div className="bg-gradient-to-br from-[#F08A24] to-[#E67E22] rounded-full p-2 h-10 w-10 flex items-center justify-center shrink-0 mt-1 shadow-md">
          <User className="h-5 w-5 text-white" />
        </div>
      )}
    </motion.div>
  );
}

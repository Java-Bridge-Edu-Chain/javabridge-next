"use client";

import { Sparkles, User } from "lucide-react";
import ReactMarkdown from "react-markdown";

const ChatMessage = ({ text, sender }) => {
  const isUser = sender === "user";

  return (
    <div className={`flex items-start gap-4 ${isUser ? "flex-row-reverse" : ""}`}>
      {/* Avatar with animated effects */}
      <div className={`relative flex-shrink-0 ${isUser ? "bg-gradient-to-br from-java-500 to-java-700" : "bg-gradient-to-br from-amber-500 to-amber-700"} w-10 h-10 rounded-full shadow-md overflow-hidden flex items-center justify-center border-2 ${isUser ? "border-java-400" : "border-amber-400"}`}>
        {isUser ? (
          <User className="w-5 h-5 text-white" />
        ) : (
          <>
            <Sparkles className="w-5 h-5 text-white" />
            {/* Animated glow effect */}
            <div className="absolute inset-0 bg-amber-400/20 rounded-full animate-pulse-gentle"></div>
          </>
        )}
      </div>

      {/* Message bubble with sophisticated styling */}
      <div
        className={`relative group max-w-[80%] ${
          isUser ? "bg-gradient-to-r from-java-100 to-java-200" : "bg-gradient-to-r from-amber-50 to-amber-100"
        } rounded-2xl p-4 shadow-sm ${
          isUser ? "rounded-tr-sm" : "rounded-tl-sm"
        }`}
      >
        <div className="relative">
          {/* Inner glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-white/40 opacity-0 transition-opacity duration-300"></div>
          
          {/* Text content with proper styling */}
          {isUser &&(
            <div className={`relative text-java-900`}>
              <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">{text}</p>
            </div>
          )}
          {!isUser &&(
              <div className={`relative text-amber-900`}>
                <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap"><ReactMarkdown
            components={{
              a: (props) => (
                <a
                  {...props}
                  className="text-java-900 underline hover:text-java-800 transition-colors"
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
          </ReactMarkdown></p>
              </div>
          )}
        </div>
        
        {/* Bottom subtle gradient line */}
        <div className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${isUser ? "bg-gradient-to-r from-transparent via-java-400/30 to-transparent" : "bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"}`}></div>
      </div>
    </div>
  );
};

export default ChatMessage;

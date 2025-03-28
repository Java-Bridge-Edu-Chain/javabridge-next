"use client";

import { User, Bot } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ChatMessage({ text, sender }) {
  const isUser = sender === "user";

  return (
    <div className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="flex-shrink-0 p-1 bg-gradient-to-br from-java-600 to-java-700 rounded-xl h-fit shadow-md shadow-java-600/10">
          <Bot className="w-5 h-5 text-white" />
        </div>
      )}
      
      <div className={`max-w-[85%] ${isUser ? 'bg-java-600 text-white' : 'bg-white border border-java-200'} p-3 rounded-xl shadow-sm`}>
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <div className="rounded-md overflow-hidden my-2 border border-java-800/10 bg-java-900/5">
                  <div className="bg-java-800/10 text-java-700 text-xs px-3 py-1 flex items-center justify-between">
                    <span>{match[1]}</span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(children);
                      }}
                      className="text-java-600 hover:text-java-800 transition-colors"
                    >
                      Copy
                    </button>
                  </div>
                  <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                </div>
              ) : (
                <code
                  className={`${className} px-1 py-0.5 bg-java-100 text-java-800 rounded text-sm`}
                  {...props}
                >
                  {children}
                </code>
              );
            },
          }}
        >
          {text}
        </ReactMarkdown>
      </div>
      
      {isUser && (
        <div className="flex-shrink-0 p-1 bg-gradient-to-br from-java-600 to-java-700 rounded-xl h-fit">
          <User className="w-5 h-5 text-white" />
        </div>
      )}
    </div>
  );
}

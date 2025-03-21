"use client";

import { useState, useEffect, useRef } from "react";
import { useAgent } from "./hooks/useAgent";
import ReactMarkdown from "react-markdown";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SendIcon, BotIcon, UserIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Home page for the AgentKit Quickstart
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
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
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
    <div className="mx-auto max-w-3xl h-[700px] flex flex-col">
      <Card className="flex flex-col h-full shadow-xl bg-background/60 backdrop-blur-sm border-muted/40">
        <CardHeader className="p-4 pb-0">
          <CardTitle className="text-center text-xl font-semibold flex items-center justify-center gap-2">
            <BotIcon className="h-5 w-5 text-primary" />
            <span>AgentKit Chat</span>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex-grow overflow-hidden p-4 pt-6">
          <ScrollArea className="h-full pr-4">
            {messages.length === 0 ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="flex justify-center">
                    <Avatar className="h-16 w-16 border-4 border-muted-foreground/10">
                      <AvatarImage src="/globe.svg" />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-xl text-foreground">Welcome to AgentKit</h3>
                    <p className="text-muted-foreground text-sm max-w-sm">Start chatting with the AI assistant powered by AgentKit and CDP. Ask anything!</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4 pt-1 pb-6">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex items-start gap-3 relative",
                      msg.sender === "user" ? "flex-row-reverse" : ""
                    )}
                  >
                    <Avatar className={cn(
                      "h-8 w-8",
                      msg.sender === "user" ? "bg-primary" : "bg-muted"
                    )}>
                      {msg.sender === "user" ? (
                        <UserIcon className="h-5 w-5 text-primary-foreground" />
                      ) : (
                        <BotIcon className="h-5 w-5 text-foreground" />
                      )}
                    </Avatar>
                    <div
                      className={cn(
                        "rounded-xl p-3 max-w-[85%]",
                        msg.sender === "user" 
                          ? "bg-primary text-primary-foreground rounded-tr-none"
                          : "bg-muted text-foreground rounded-tl-none"
                      )}
                    >
                      <ReactMarkdown
                        components={{
                          a: props => (
                            <a
                              {...props}
                              className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
                              target="_blank"
                              rel="noopener noreferrer"
                            />
                          ),
                          code: ({ node, inline, className, children, ...props }) => {
                            if (inline) {
                              return (
                                <code
                                  className="px-1 py-0.5 rounded bg-muted-foreground/10 text-foreground"
                                  {...props}
                                >
                                  {children}
                                </code>
                              );
                            }
                            return (
                              <pre className="p-2 my-2 overflow-x-auto rounded bg-muted-foreground/10 text-foreground">
                                <code className="text-sm" {...props}>
                                  {children}
                                </code>
                              </pre>
                            );
                          },
                        }}
                      >
                        {msg.text}
                      </ReactMarkdown>
                    </div>
                  </div>
                ))}

                {/* Thinking Indicator */}
                {isThinking && (
                  <div className="flex items-start gap-3">
                    <Avatar className="h-8 w-8 bg-muted">
                      <BotIcon className="h-5 w-5 text-foreground" />
                    </Avatar>
                    <div className="rounded-xl p-3 bg-muted text-foreground rounded-tl-none flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="text-sm">Thinking...</span>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            )}
          </ScrollArea>
        </CardContent>

        <CardFooter className="p-4 border-t border-input">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              onSendMessage();
            }}
            className="flex w-full items-center gap-2"
          >
            <Input
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isThinking}
              className="flex-1 bg-background"
            />
            <Button
              type="submit"
              disabled={isThinking || !input.trim()}
              size="icon"
              className="rounded-full"
            >
              <SendIcon className="h-5 w-5" />
              <span className="sr-only">Send message</span>
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}

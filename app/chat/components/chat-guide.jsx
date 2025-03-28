import {
  Bot,
  Sparkles,
  ArrowRight,
  MessageSquareMore,
  Database,
  Code,
} from "lucide-react";

const ChatGuide = ({ setInput, sendMessage }) => {
  const suggestions = [
    {
      title: "What is JavaBridge?",
      description: "Learn about the core features of JavaBridge",
      icon: <Database className="w-5 h-5 text-java-600" />,
    },
    {
      title: "How secure is JavaBridge?",
      description: "Understand our security architecture",
      icon: <Code className="w-5 h-5 text-java-600" />,
    },
    {
      title: "Bridge assets example",
      description: "See how to bridge assets between chains",
      icon: <MessageSquareMore className="w-5 h-5 text-java-600" />,
    },
  ];

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    sendMessage(suggestion);
  };

  return (
    <div className="space-y-6">
      {/* Welcome message with decorative elements */}
      <div className="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 rounded-2xl p-6 shadow-lg relative overflow-hidden">
        {/* Decorative bubbles */}
        <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-java-400/10 blur-lg"></div>
        <div className="absolute -left-4 -bottom-4 w-20 h-20 rounded-full bg-amber-400/10 blur-lg"></div>
        
        <div className="flex items-start gap-4 relative z-10">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg shadow-amber-500/30 p-2 border-2 border-amber-400/50">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-java-800 flex items-center gap-2">
              Welcome to JavaBridge <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" />
            </h3>
            <p className="text-java-700 leading-relaxed">
              I'm your virtual assistant for all things related to JavaBridge. 
              Ask me anything about bridging assets across chains, security features, or 
              how to integrate with your project.
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced suggestion buttons */}
      <div className="grid md:grid-cols-3 gap-4">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => handleSuggestionClick(suggestion.title)}
            className="group relative flex flex-col h-full bg-white border border-java-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:border-java-300 overflow-hidden"
          >
            {/* Suggestion content */}
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-java-100 group-hover:bg-java-200 transition-colors duration-300">
                {suggestion.icon}
              </div>
              <h4 className="font-semibold text-java-800 text-lg">{suggestion.title}</h4>
            </div>
            
            <p className="text-sm text-java-600 mb-4">{suggestion.description}</p>
            
            {/* Bottom action indicator */}
            <div className="mt-auto flex items-center gap-1 text-java-500 group-hover:text-java-700 transition-colors">
              <span className="text-xs font-medium">Try this</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
            </div>
            
            {/* Decorative corner */}
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-java-100/40 to-transparent rounded-tl-3xl"></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatGuide;

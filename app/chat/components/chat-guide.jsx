import {
  Sparkles,
  ArrowRight,
  MessageSquareMore,
  Database,
  Code,
  Coffee
} from "lucide-react";

const ChatGuide = ({ setInput, sendMessage }) => {
  const suggestions = [
    {
      title: "What is Espresso?",
      description: "Learn about the core features of Espresso",
      icon: <Database className="w-5 h-5 text-java-600" />,
    },
    {
      title: "How to run espresso node?",
      description: "Get started with running an espresso node",
      icon: <Code className="w-5 h-5 text-java-600" />,
    },
    {
      title: "What is Hotshot?",
      description: "Discover the features of HotShot",
      icon: <MessageSquareMore className="w-5 h-5 text-java-600" />,
    },
  ];

  const handleSuggestionClick = async (suggestion) => {
    setInput(suggestion);
    await sendMessage(suggestion);
    setInput("");
  };

  return (
    <div className="space-y-6">
      {/* Welcome message with decorative elements */}
      <div className="bg-gradient-to-br from-white to-java-50 border border-java-200 rounded-2xl p-6 shadow-lg relative overflow-hidden">
        
        <div className="flex items-start gap-4 relative z-10">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-java-500 to-java-600 shadow-lg shadow-java-500/30 p-2 border-2 border-java-400/50">
            <Coffee className="w-6 h-6 text-white" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-java-800 flex items-center gap-2">
            Meet Luwak AI: The Ultimate Espresso-Powered Bridge Assistant  <Sparkles className="w-5 h-5 text-java-500 animate-pulse" />
            </h3>
            <p className="text-java-700 leading-relaxed">
            Luwak AI is your 24/7 on-chain expert, built to make bridging on Java Bridge seamless, secure, and lightning-fast. Whether you're a developer, trader, or blockchain enthusiast, Luwak AI puts the power of Espresso at your fingertips.
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
              <h4 className="font-semibold text-java-800 text-left text-lg">{suggestion.title}</h4>
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

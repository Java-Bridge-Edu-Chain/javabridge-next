import {
  Bean,
  BookCopy,
  Droplets,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const chatGuide = ({
    setInput,
    sendMessage
}) => {
  return (
    <div className="py-12 flex flex-col items-center justify-center text-center">
      <div className="w-16 h-16 rounded-full bg-amber-800/20 flex items-center justify-center mb-4 animate-pulse">
        <Bean className="w-8 h-8 text-java-500" />
      </div>
      <p className="text-java-600 max-w-xs mx-auto">
        Start chatting with Luwak AI, your expert assistant for JavaBridge
        operations
      </p>
      <div className="grid grid-cols-2 gap-2 mt-6">
        <Button
          variant="outline"
          className="border-amber-700/30 gap-2 text-xs py-2 h-auto"
          onClick={() => {
            setInput("How to bridge assets?");
            sendMessage("How to bridge assets?");
          }}
        >
          <BookCopy className="w-3 h-3" />
          How to bridge assets?
        </Button>
        <Button
          variant="outline"
          className="border-amber-700/30 gap-2 text-xs py-2 h-auto"
          onClick={() => {
            setInput("What is Luwak AI?");
            sendMessage("What is Luwak AI?");
          }}
        >
          <Droplets className="w-3 h-3" />
          What is Luwak AI?
        </Button>
      </div>
    </div>
  );
};

export default chatGuide;

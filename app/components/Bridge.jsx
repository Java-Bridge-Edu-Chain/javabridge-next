"use client";

import { useState, useEffect } from "react";
import { ChevronDown, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { useAccount, useBalance } from "wagmi";
import chainList from "@/lib/chains";
import SelectChain from "@/components/SelectChain";

export function CryptoTransfer() {
  const [amount, setAmount] = useState("2.8922");
  const [recipientAddress, setRecipientAddress] = useState();
  // Add state for from and to chains
  const [fromChain, setFromChain] = useState(chainList[0]?.name);
  const [toChain, setToChain] = useState(chainList[1]?.name);

  // Modified handlers to update state
  const onFromChange = (value) => {
    setFromChain(value);
    console.log("Selected from chain:", value);
  };

  const onToChange = (value) => {
    setToChain(value);
    console.log("Selected to chain:", value);
  };

  // Add switch function
  const handleSwitchChains = () => {
    const tempFrom = fromChain;
    setFromChain(toChain);
    setToChain(tempFrom);
  };

  // Get the connected account
  const { address, isConnected } = useAccount();

  // Get the balance for the connected account
  const { data: balanceData } = useBalance({
    address,
    watch: true,
  });

  const onClickSelf = () => {
    setRecipientAddress(address);
  };

  // Log the balance when it changes
  useEffect(() => {
    if (isConnected && balanceData) {
      console.log("Current account balance:", balanceData);
      console.log(
        "Formatted balance:",
        balanceData.formatted,
        balanceData.symbol
      );
      console.log(`current address: ${address}`);
      setRecipientAddress(address); // Set recipient address to the connected account address
    } else {
      console.log("Wallet not connected or balance not available");
    }
  }, [isConnected, balanceData]);

  return (
    <div className="flex justify-center p-4">
      <Card className="w-full max-w-md rounded-3xl shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-end justify-between gap-2 mb-4">
            <div>
              <SelectChain
                id="from"
                defaultValue={fromChain}
                options={chainList}
                onValueChange={onFromChange}
                excludeValue={toChain} // Pass to chain as excluded value
                label="From"
              />
            </div>
            <div id="switch">
              <Button
                variant="secondary"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800"
                onClick={handleSwitchChains}
              >
                <RotateCw className="h-4 w-4" />
              </Button>
            </div>
            <div>
              <SelectChain
                id="to"
                defaultValue={toChain}
                options={chainList}
                onValueChange={onToChange}
                excludeValue={fromChain} // Pass from chain as excluded value
                label="To"
              />
            </div>
          </div>

          {/* Token section */}
          <div className="mb-4">
            <Label htmlFor="token" className="text-sm mb-1">
              Token
            </Label>
            <Select defaultValue="eth">
              <SelectTrigger id="token" className="w-full bg-gray-100">
                <div className="flex items-center">
                  <span className="text-white text-xs">
                    <img
                      src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                      alt="Sepolia"
                      className="w-4 h-4 rounded-full mr-2"
                    />
                  </span>
                  <SelectValue placeholder="eth" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="eth">ETH</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Amount section */}
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <Label htmlFor="amount" className="text-sm">
                Amount
              </Label>
              <span className="text-sm text-muted-foreground">
                My balance: 2.9422
              </span>
            </div>
            <div className="flex gap-2">
              <Input
                type="text"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="rounded-md"
              />
              <Button
                variant="secondary"
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                Max
              </Button>
            </div>
          </div>

          {/* Recipient address section */}
          <div className="mb-6">
            <div className="flex justify-between mb-1">
              <Label htmlFor="recipient" className="text-sm">
                Recipient address
              </Label>
              <span className="text-sm text-muted-foreground">
                Remote balance: 0.0000
              </span>
            </div>
            <div className="flex gap-2">
              <Input
                type="text"
                id="recipient"
                value={recipientAddress}
                onChange={(e) => setRecipientAddress(e.target.value)}
                className="rounded-md text-xs"
              />
              <Button
                variant="secondary"
                className="bg-blue-500 hover:bg-blue-600 text-white"
                onClick={onClickSelf}
              >
                Self
              </Button>
            </div>
          </div>

          {/* Continue button */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="w-full bg-[#ff6347] hover:bg-[#ff5335] text-black font-medium py-6 rounded-xl h-12">
                  Continue
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Proceed with transfer</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardContent>
      </Card>
    </div>
  );
}

const Bridge = () => {
  return (
    <>
      <CryptoTransfer />
    </>
  );
  // return (<><Card className="border-java-700/30 bg-java-500 backdrop-blur-md overflow-hidden shadow-[0_0_15px_rgba(200,140,50,0.15)]">

  // </Card></>);
};

export default Bridge;

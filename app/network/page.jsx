"use client";
import { Button } from "@/components/ui/button";
import chainList from "@/lib/chains";

console.log(chainList);
const handleAddNetworkk = async (chain) => {
  try {
    if (
      !chain ||
      !chain.id ||
      !chain.rpcUrls?.default?.https ||
      !chain.name ||
      !chain.nativeCurrency
    ) {
      throw new Error("Invalid chain data provided.");
    }

    const chainIdHex = `0x${Number(chain.id).toString(16)}`; // Convert chain.id to hexadecimal
    console.log(chainIdHex);

    let o = {
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: chainIdHex,
          rpcUrls: [chain.rpcUrls.default.https[0]],
          chainName: chain.name,
          nativeCurrency: {
            name: chain.nativeCurrency.name,
            symbol: chain.nativeCurrency.symbol,
            decimals: Number(chain.nativeCurrency.decimals),
          },
        },
        null,
      ],
    };

    // if (chain?.blockExplorers?.default !== undefined) {
    //   o.params[0].blockExplorerUrls = [
    //     chain.blockExplorers?.default?.url ?? "",
    //   ];
    // }

    await window.ethereum?.request(o).then((res) => {
      console.log(res);
    });
  } catch (error) {
    console.error("Failed to add network:", error);
  }
};

export default function Chain() {
  return (
    <div className="flex flex-col items-center w-full h-full min-h-screen">
      <div className="relative w-full max-w-4xl">
        {/* Hero section with animation */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-java-400 via-java-600 to-java-800 mb-3">
            <span className="animate-gradient">Add Network to Wallet</span>
          </h1>
          <p className="text-java-600 max-w-xl mx-auto">
            List of supported chains. Click on the button to add the network to
            your wallet.
          </p>
        </div>

        {/* Grid section with 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {chainList.map((chain, index) => (
            <div
              className="p-4 border bg-white rounded-3xl shadow-md"
              key={`chain-${index}`}
            >
              <h2 className="text-xl font-bold text-java-500 text-center">
                {chain.name}
              </h2>
              <div className="flex flex-col justify-evenly text-black">
                <div className="flex flex-col justify-between">
                  <div className="my-2">
                    <h6 className="font-semibold text-java-400 text-center">
                      ChainID
                    </h6>
                    <p className="text-center text-gray-800">{chain.id}</p>
                  </div>
                  <div className="my-2">
                    <h6 className="font-semibold text-java-400 text-center">
                      RPC
                    </h6>
                    <p className="text-sm text-center text-gray-800">
                      {chain.rpcUrls?.default?.https}
                    </p>
                  </div>
                </div>

                <Button
                  className="mt-4"
                  onClick={() => {
                    handleAddNetworkk(chain);
                  }}
                >
                  Add Network
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

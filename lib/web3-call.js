import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";
import chainList from "./chains";
 
const connect = async (rpc) => {
  return await createPublicClient({
    chain: sepolia,
    transport: http(rpc),
  });
}

const getRpcFromId = (id) => {
    id = typeof id !== 'string' ? id?.toString() : id;
    const chain = chainList.find((chain) => chain.id?.toString() === id);
    if (chain) {
        return chain.rpcUrls.default.https[0];
    }
    return null; // or some default value
};
 
export async function fetchBalance(address, rpcId = '0', toEther = true) {
    const rpc = getRpcFromId(rpcId);
    console.log(`rpcid > `, rpcId);
    console.log(`rpc > `, rpc);
    const client = await connect(rpc);
    const balance = await client.getBalance({ address })
    if(toEther) {
        // Convert Wei to Ether using BigInt arithmetic
        return Number(balance) / 1e18;
        // Alternative: For more precise values with large numbers
        // return (balance * 100n / 10n**18n) / 100; // 2 decimal points precision
    }
    return balance;
}

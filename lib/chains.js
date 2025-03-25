import { sepolia, arbitrumSepolia } from "wagmi/chains";

const rollups = {
    ...arbitrumSepolia, id: 666, name: "Rollup Arbitrum Sepolia", network: "rollup-arb-sepolia",
    rpcUrls: {
        default: { http: ["http://192.46.230.7:8547"] },
    },
    iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/11841.png"
}
const chainList = [
    { ...sepolia, iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png" },
    rollups
];

console.log(rollups);

export default chainList;
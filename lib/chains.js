import { rpc } from "viem/utils";
import { sepolia, arbitrumSepolia } from "wagmi/chains";

const gayoRoll = {
    id: 666,
    name: 'Gayo Roll',
    network: 'gayo-roll',
    iconUrl: 'https://i.imgur.com/rytbFam.png',
    iconBackground: '#fff',
    nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: { https: ['https://rpc-gayo-roll.javabridge.fun'] },
    },
    blockExplorers: {
    },
    contracts: {

    },
}

const baliBeans = {
    id: 1312,
    name: 'Bali Beans',
    network: 'bali-beans',
    iconUrl: 'https://i.imgur.com/1lEDhCV.png',
    iconBackground: '#fff',
    nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: { https: ['https://rpc-bali-beans.javabridge.fun'] },
    },
    blockExplorers: {
    },
    contracts: {

    },
}

const chainList = [
    { ...sepolia, iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png", rpcUrls: { default: { https: ['https://sepolia.drpc.org'] } } },
    {...gayoRoll},
    {...baliBeans}
];


// console.log(rollups);

export default chainList;
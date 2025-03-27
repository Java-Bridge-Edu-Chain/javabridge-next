const depositAbi = [
    {
        "inputs": [],
        "name": "depositEth",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    }
];

const arbToGayo = {
    name: "Arbitrum to Gayo",
    fromId: 421614,
    toId: 666,
    address: "0x010Dfb5B53D3ca470017c3b12d1E0d1d35d42679",
    abi: depositAbi,
};

const contracts = [
    arbToGayo,
];

export const getBridgeContract = (from = "", to = "") => {
    if (!from || !to) {
        throw new Error("Invalid chain IDs provided");
    }

    from = typeof from != "string" ? from?.toString() : from;
    to = typeof to != "string" ? to?.toString() : to;

    const contract = contracts.find(
        (c) => {
            if (c.fromId?.toString() === from && c.toId?.toString() === to) return c;
        }
    );
    if (!contract) {
        throw new Error("Bridge contract not found");
    }
    return contract;
};


export default contracts;
# Javabridge NextJS

## Overview
Javabridge is a Next.js application designed to bridge Ethereum (ETH) to rollup chains. It currently supports the following chains:

- **Arbitrum Sepolia**
- **Gayo Roll**
- **Bali Beans**

Additionally, the application features an AI Agent capable of providing detailed explanations about Espresso.

---

## Features

### 1. Bridge Functionality
The bridge allows users to transfer ETH between the supported chains. Each chain has its own unique properties:

- **Arbitrum Sepolia**
  - RPC URL: `https://arbitrum-sepolia-rpc.publicnode.com`
  - Icon: ![Arbitrum Sepolia](https://s2.coinmarketcap.com/static/img/coins/64x64/11841.png)

- **Gayo Roll**
  - RPC URL: `https://rpc-gayo-roll.javabridge.fun`
  - Icon: ![Gayo Roll](/img/coffee-1.png)

- **Bali Beans**
  - RPC URL: `https://rpc-bali-beans.javabridge.fun`
  - Icon: ![Bali Beans](/img/coffee-2.png)

### 2. AI Agent
The AI Agent is your ultimate guide, blending cutting-edge technology with a touch of personality. Here's what it offers:

- **Espresso Expertise**: Dive deep into the world of espresso and its groundbreaking technology, powered by Retrieval-Augmented Generation (RAG).
- **Real-Time Crypto Insights**: Stay ahead of the curve with live cryptocurrency prices fetched directly from Pyth.
- **Persona-Powered Interaction**: Engage with a character-driven AI that makes every conversation unique and memorable.

### Adding Knowledge to the AI Agent

To enhance the AI Agent's knowledge base, follow these steps:

1. **Espresso Knowledge with RAG**:
   - Use a Retrieval-Augmented Generation (RAG) pipeline to fetch and generate responses.
   - Store espresso-related documents in a vector database (e.g., Pinecone, Weaviate).
   - Implement a retriever to query the database and pass relevant context to the language model.

2. **Crypto Price Fetching with Pyth**:
   - Integrate the Pyth Network API to fetch real-time cryptocurrency prices.
   - Ensure secure API calls and handle rate limits effectively.
   - Parse and display the fetched data in a user-friendly format.

3. **Persona Character**:
   - Define a unique persona for the AI Agent by setting a tone and style in its responses.
   - Use a configuration file or prompt engineering to maintain consistency in the persona's behavior.

By combining these elements, the AI Agent becomes a powerful and engaging tool for users.

---

## Getting Started

### Prerequisites
- Node.js and npm installed.
- A wallet supporting Ethereum and rollup chains.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/javabridge-nextjs.git
   ```
2. Navigate to the project directory:
   ```bash
   cd javabridge-nextjs
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application
Start the development server:
```bash
npm run dev
```

Access the application at `http://localhost:3000`.

---

## Usage

### Bridging ETH
1. Select the source and destination chains.
2. Enter the amount of ETH to bridge.
3. Confirm the transaction in your wallet.

### Interacting with the AI Agent
- Use the chat interface to ask questions about Espresso or the bridging process.

---


## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
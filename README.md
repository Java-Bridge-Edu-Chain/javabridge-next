# Java Bridge: Next-Gen Cross-Chain Platform

## Overview
Java Bridge is a cutting-edge Next.js application that enables seamless bridging of Ethereum (ETH) across various rollup chains. Powered by Luwak AI, our platform combines advanced blockchain technology with an intuitive user experience.

## Supported Chains

| Chain | RPC URL | Icon |
|-------|---------|------|
| **Arbitrum Sepolia** | `https://arbitrum-sepolia-rpc.publicnode.com` | ![Arbitrum Sepolia](https://s2.coinmarketcap.com/static/img/coins/64x64/11841.png) |
| **Gayo Roll** | `https://rpc-gayo-roll.javabridge.fun` | <img src="public/img/coffee-1.png" height="64" /> |
| **Bali Beans** | `https://rpc-bali-beans.javabridge.fun` | <img src="public/img/coffee-2.png" height="64" /> |

---

## Luwak AI: Your Cyberpunk Raccoon Assistant

Luwak AI is our integrated AI assistant that enhances your bridging experience with a unique cyberpunk raccoon persona. Powered by OpenAI's o1-mini model, this next-gen AI combines deep blockchain knowledge with engaging interactions.

![Luwak AI](/public/img/luwak-banner.png)

### Key Capabilities

#### 🔍 Espresso Technology Expert
Luwak AI leverages Retrieval-Augmented Generation (RAG) to provide in-depth knowledge about Espresso's Zero-Knowledge and Optimistic Rollup technologies:
- Comprehensive understanding of Espresso architecture and protocols
- Technical guidance on node operation and network integration
- Support for developers building on Espresso

#### 💹 Real-Time Market Intelligence
Stay informed with live cryptocurrency prices through the Pyth Price Feeds API:
- Up-to-the-minute price data for informed decision-making
- Market trends and cross-chain opportunities
- Price comparison across supported rollup chains

#### 🌉 Streamlined Bridge Execution
Luwak AI simplifies the bridging process:
- Direct user interaction without unnecessary intermediary steps
- Step-by-step guidance through the bridging process
- Transaction confirmations and status updates

#### 🦝 Cyberpunk Raccoon Persona
Interact with a character that makes blockchain fun:
- Unique personality powered by OpenAI's Model Context Protocol
- Engaging conversational style with cyberpunk flair
- Technical expertise delivered with attitude

### Technology Stack

Luwak AI's architecture combines several advanced technologies:

1. **RAG for Knowledge Processing**:
   - Local storage of comprehensive Espresso documentation
   - Vector-based search for rapid information retrieval
   - Context-aware response generation

2. **Pyth Network Integration**:
   - Real-time price feeds from decentralized oracles
   - Secure API implementation
   - Cross-chain price data visualization

3. **OpenAI 4o-mini Model**:
   - High-performance language processing
   - Custom prompt engineering for persona development
   - Efficient context management for detailed responses

---

## Getting Started

### Prerequisites
- Node.js (v18+) and npm installed
- MetaMask or compatible Web3 wallet
- Test ETH on supported networks

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/javabridge-nextjs.git
   ```

2. Navigate to the project directory:
   ```bash
   cd javabridge-nextjs
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   ```bash
   cp env-example .env.local
   # Edit .env.local with your API keys and configuration
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Access the application at `http://localhost:3000`

---

## Usage Guide

### Bridging Assets
1. Connect your wallet using the "Connect" button
2. Select source and destination chains from the dropdown menus
3. Enter the amount of ETH to bridge
4. Click "Bridge" and confirm the transaction in your wallet
5. Monitor transaction status in real-time

### Interacting with Luwak AI
- Click the menu "Chat" in the navbar
- Ask questions about Espresso technology, bridges, or current prices
- Receive guidance throughout your bridging process
- Experience the unique cyberpunk raccoon persona

---

## For Developers

### How to Give Knowledge to Luwak AI Agent

Luwak AI uses a Retrieval-Augmented Generation (RAG) system to access and process information. You can easily expand its knowledge base by following these steps:

1. **Prepare Documentation Files**:
   - Convert your documentation to PDF format
   - Place the PDF files in the `embedding_docs/input/` directory

2. **Process the Files**:
   - Run the application locally:
     ```bash
     yarn dev
     ```
   - Or in production:
     ```bash
     yarn build && yarn start
     ```

3. **Generate Embeddings**:
   - Access the embedding creation endpoint:
     ```
     http://localhost:3000/api/embedding/create
     ```
   - The system will automatically:
     - Convert PDFs to text files (stored in `embedding_docs/output/`)
     - Create vector embeddings from the text
     - Store these embeddings in the database for AI retrieval

4. **Verification**:
   - Check the terminal output for processing status
   - Test the AI with questions related to your new content
   - The knowledge is now available for Luwak AI to use in responses

> **Note**: The embedding process may take several minutes depending on the size and number of documents being processed.

### Custom Configurations
- Modify chain configurations in `/lib/chains.js`
- Adjust Luwak AI's persona settings in `/app/api/agent/characters.js`
- Extend supported tokens in `/lib/contracts.js`

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgements
- [Espresso Systems](https://www.espressosys.com/) for their innovative rollup technology
- [Pyth Network](https://pyth.network/) for real-time price oracle data
- OpenAI for their advanced language models
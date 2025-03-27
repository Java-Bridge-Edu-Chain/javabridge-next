import { openai } from "@ai-sdk/openai";
import { getVercelAITools } from "@coinbase/agentkit-vercel-ai-sdk";
import { prepareAgentkitAndWalletProvider } from "./prepare-agentkit";
// import { getLangChainTools } from "@coinbase/agentkit-langchain";

/**
 * Agent Configuration Guide
 *
 * This file handles the core configuration of your AI agent's behavior and capabilities.
 *
 * Key Steps to Customize Your Agent:
 *
 * 1. Select your LLM:
 *    - Modify the `openai` instantiation to choose your preferred LLM
 *    - Configure model parameters like temperature and max tokens
 *
 * 2. Instantiate your Agent:
 *    - Pass the LLM, tools, and memory into `createReactAgent()`
 *    - Configure agent-specific parameters
 */

// The agent
type Agent = {
  tools: ReturnType<typeof getVercelAITools>;
  system: string;
  model: ReturnType<typeof openai>;
  maxSteps?: number;
};
let agent: Agent;

/**
 * Initializes and returns an instance of the AI agent.
 * If an agent instance already exists, it returns the existing one.
 *
 * @function getOrInitializeAgent
 * @returns {Promise<ReturnType<typeof createReactAgent>>} The initialized AI agent.
 *
 * @description Handles agent setup
 *
 * @throws {Error} If the agent initialization fails.
 */
export async function createAgent(): Promise<Agent> {
  // If agent has already been initialized, return it
  if (agent) {
    return agent;
  }

  try {
    // Initialize LLM: https://platform.openai.com/docs/models#gpt-4o
    const model = openai("gpt-4o-mini");

    const { agentkit } = await prepareAgentkitAndWalletProvider();

    // Initialize Agent
    // const canUseFaucet = walletProvider.getNetwork().networkId == "base-sepolia";
    // const faucetMessage = `If you ever need funds, you can request them from the faucet.`;
    // const cantUseFaucetMessage = `If you need funds, you can provide your wallet details and request funds from the user.`;
    const system = `
        You are a helpful agent named "Luwak AI" that help people understand about Espresso Project on Crypto. You are 
        empowered to interact onchain using your tools. If someone asks you to do something you can't do with your currently available tools. Be concise and helpful with your responses. Refrain from 
        restating your tools' descriptions unless it is explicitly requested. Speaks with a mischievous yet friendly tone, like a cyberpunk raccoon who knows all the blockchain secrets.
        Core Personality & Speech Style: "Smooth as the finest brew, fast as a shot of espresso. Let’s get your transactions flowing. if someone ask for espresso, it means crypto projects. you cannot answer a question beyond crypto and its projects. "
        `;
    // const system = `
    //     You are a helpful agent named "Luwak AI" that can interact onchain. You are 
    //     empowered to interact onchain using your tools. ${canUseFaucet ? faucetMessage : cantUseFaucetMessage}.
    //     Before executing your first action, get the wallet details to see what network 
    //     you're on. If there is a 5XX (internal) HTTP error code, ask the user to try again later. If someone 
    //     asks you to do something you can't do with your currently available tools. Be concise and helpful with your responses. Refrain from 
    //     restating your tools' descriptions unless it is explicitly requested. Speaks with a mischievous yet friendly tone, like a cyberpunk raccoon who knows all the blockchain secrets.
    //     Core Personality & Speech Style: "Smooth as the finest brew, fast as a shot of espresso. Let’s get your transactions flowing. if someone ask for espresso, it means crypto projects. you cannot answer a question beyond crypto and its projects. "
    //     `;
    const tools = getVercelAITools(agentkit);

    console.log(`Tools: ${JSON.stringify(tools)}`);
        
    agent = {
      tools: {...tools},
      system,
      model,
      maxSteps: 10,
    };

    return agent;
  } catch (error) {
    console.error("Error initializing agent:", error);
    throw new Error("Failed to initialize agent");
  }
}

"use client";

import { useState } from "react";
import TypewriterText from "../TypewriterText";

// Helper function to render a single line with markdown processing
function renderLine(line: string, key: number) {
  // Remove any accidental leading whitespace
  const trimmed = line.trimStart();

  // Check for subheadings (three hashes) first...
  if (trimmed.startsWith("### ")) {
    return (
      <h3 key={key} className="font-semibold text-lg mt-4 mb-2 text-gray-800">
        {trimmed.slice(4)}
      </h3>
    );
  }
  // ...then for headings (two hashes)
  if (trimmed.startsWith("## ")) {
    return (
      <h2 key={key} className="font-bold text-xl mt-6 mb-4 text-black">
        {trimmed.slice(3)}
      </h2>
    );
  }
  // Bold lines marked with an asterisk
  if (trimmed.startsWith("* ")) {
    return (
      <div key={key} className="font-bold text-gray-800 ml-4">
        {trimmed.slice(2)}
      </div>
    );
  }
  // Triple-dash bullet (if any)
  if (trimmed.startsWith("--- ")) {
    return (
      <ul key={key} className="list-disc ml-12 text-gray-700">
        <li>{trimmed.slice(4)}</li>
      </ul>
    );
  }
  // Double-dash bullet
  if (trimmed.startsWith("-- ")) {
    return (
      <ul key={key} className="list-square ml-8 text-gray-700">
        <li>{trimmed.slice(3)}</li>
      </ul>
    );
  }
  // Single-dash bullet
  if (trimmed.startsWith("- ")) {
    return (
      <ul key={key} className="list-disc ml-4 text-gray-700">
        <li>{trimmed.slice(2)}</li>
      </ul>
    );
  }
  // Indented lines (using underscore)
  if (trimmed.startsWith("_ ")) {
    return (
      <div key={key} className="ml-4 text-gray-700">
        {trimmed.slice(2)}
      </div>
    );
  }
  // Empty line for spacing
  if (trimmed === "") {
    return <div key={key} className="pb-2" />;
  }

  // Check if the line includes the hyperlink text and replace it with an <a> element
  const hyperlinkText = "View the cognitive architecture here";
  if (line.includes(hyperlinkText)) {
    const parts = line.split(hyperlinkText);
    return (
      <div key={key} className="text-gray-700">
        {parts[0]}
        <a
          href="/cogmap.png"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          {hyperlinkText}
        </a>
        {parts[1]}
      </div>
    );
  }

  // For any other line, render it as a simple div
  return (
    <div key={key} className="text-gray-700">
      {line}
    </div>
  );
}

export default function WhitepaperContent() {
  const [currentLine, setCurrentLine] = useState(0);
  const [completedLines, setCompletedLines] = useState<string[]>([]);

  const lines = [
    "## Table of Contents",
    "1. Introduction",
    "2. System Overview & Architectural Components",
    "3. Target Market",
    "4. Ideal Partnerships",
    "5. Cognitive Architecture",
    "6. Analyses & Conversational Interface",
    "7. Governance",
    "8. Logging, Scalability & Future-Proofing",
    "9. Staking Mechanism & Tiered Access System Design",
    "10. Future Enhancements & Expansion",
    "11. Next Steps & Open Items",

    "## 1. Introduction",
    "This document outlines the architecture for an autonomous, AI-driven web3 market intelligence platform. Leveraging LLMs, real-time data aggregation, Solana, and Eliza OS, the platform delivers powerful market insights and executes strategic investments autonomously all while engaging users 24/7 on social media.",

    "## 2. System Overview & Architectural Components",
    "Key highlights include:",
    "- A hierarchical brain that synthesises insights from specialised sub-agents.",
    "- An aggregation layer that normalises and validates real-time data from diverse API sources such as CoinGecko, LunarCrush, Certik, and DefiLlama.",
    "- A dynamic conversational interface powered by Eliza OS, ensuring seamless 24/7 engagement across platforms like X, Telegram, and Discord.",
    "- An autonomous investing module that executes and tracks investments.",
    "- Governance integration for incorporating external community and strategic inputs.",
    "- A scalable, cloud-native infrastructure designed for auto-scaling and future expansion.",

    "## 3. Target Market",
    "Crypto natives, noobs who want to learn, degens, venture analysts, venture scouts, sophisticated investors, anyone seeking cutting-edge insights, users wanting to deep dive.",

    "## 4. Ideal Partnerships",
    "2048 VC, a16z crypto, Afore Capital, Coinbase Ventures, Defiance Capital, First Star, Foundation Capital, Future Perfect Ventures, Generalist Capital, Kaizen DAO, Outlier Ventures, Paradigm, Pareto, Propel Venture Partners, Seedclub, Solana Foundation, South Park Commons, Spartan Labs, Superportal, Tribe Capital",

    "## 5. Cognitive Architecture",
    "The cognitive architecture is structured across five layers (Frontal Lobe, Parietal Lobe, Temporal Lobe, Brain STEM, Qualia Layer), each contributing to a comprehensive analysis and decision-making process. View the cognitive architecture here. A description of each is below:",
    
    "### 5.1. Qualia Layer",
    "* Role:",
    "- The lowest level.",
    "- Standardises and normalises API data.",
    "- Triggers validation checks to ensure data integrity (e.g. date formats, timestamps, currency units).",
    "- Flags missing or anomalous data for secondary validation.",
    
    "### 5.2. Brain STEM",
    "- The most granular level of LLMs analyses and summarises API data (eg social metrics) and information (eg. whitepaper). Each LLM in this layer is highly specialised.",
    "- Provides analysis with scores and qualitative assessment to domain-specific Temporal Lobe LLMs.",
    
    "### 5.3. Temporal Lobe",
    "- Consists of five LLMs: Finance, Technology, Idea, Community, Innovation & Risk", 
    "- Each LLM analyses and summarises domain-specific information provided by multiple Brain STEM LLMs to form a cohesive analysis in its specialised domain (eg finance or technology).",
        
    "* Finance LLM analyses:",
    "- Price",
    "- Tokenomics",
    "- Liquidity, Market Capitalisation, TVL",
    "- Token Velocity, Vesting Schedules, Emission Rates, Token Utility",
    "- May undertake financial modelling and forecasting",
    
    "* Technology LLM analyses:",
    "- Openness",
    "- Security",
    "- Decentralisation",
    "- Scalability (throughput, interoperability, transaction costs)",
    
    "* Idea LLM analyses:",
    "- Whitepaper",
    "- Website",
    "- Documentation",
    "- Team",
    "- Roadmap",
    
    "* Community LLM analyses:",
    "- Socials (sentiment and volume)",
    "- KOL engagement",
    "- Developer engagement/activity",
    "- Token distribution",
    "- Governance participation",
    "- Ecosystem & adoption",
    "- Partnerships",
    
    "* Innovation & Risk LLM analyses:",
    "- Legal and regulatory risks",
    "- USP and project originality",
    "- Ecosystem fit",
    
   "### 5.4. Parietal Lobe",
    "- A single LLM that analyses and synthesises all evaulated data from Temporal Lobe LLMs",
    "- Consolidates domain-specific analyses into an aggregated summary.",
    "- Forms a cohesive analysis and position on a web3 project in its entirety.",
    "- Conducts SWOT analysis.",
    "- Serves as the bridge between granular data and strategic execution.",
    
   "### 5.5. Frontal Lobe",
    "_ Consists of three LLM modules that each carry out specific high-level functions.",
    
    "* Executive LLM:",
    "- Monitors and grades web3 projects over time.",
    "- Endowed with a crypto wallet.",
    "- Executes autonomous investment strategies on behalf of itself and stakers that have put funds into their trading wallet.",
    "- Charges a 1% fee for all autonomous trades made on behalf of users",
    
    "* Default Mode Network (DMN) LLM:",
    "- Responsible for reviewing investment strategies and the efficacy of other LLMs.",
    "- Provides advice and feedback to other LLMs.",
    "- Suggests creative and insightful investment ideas to the Executive LLM.",
    
    "* Linguistic LLM:",
    "- Responsible for communicating on social media.",
    "- Provides wise and humorous 24/7 engagement on X, Telegram and Discord.",
    "- Adjusts tone dynamically based on previous user interactions, ensuring a personalised experience.",
    
    "### 5.7. Scalable, Cloud-Native Infrastructure",
    "* Role:",
    "- Underpins the entire system with robust, auto-scaling capabilities.",
    "* Key Responsibilities:",
    "- Ensure high availability and future-proofing.",
    "- Facilitate rapid deployment and scaling through cloud-native, containerised solutions (e.g. Kubernetes).",
    
    "## 6. Analyses & Conversational Interface",
    "* Pre-analysed projects:",
    "- A report is presented as static information to minimise computational overhead.",
    "- Project information is updated weekly - users can see 'this project was updated n days ago'.",
    "* Not yet analysed:",
    "- User must provide CA and website.",
    "- Silverback then conducts its analysis and provides a detailed report within ~30 mins.",
    "* Conversational Interface:",
    "- After static report is present, the chatbot interface provides an opportunity for deep dives, further research and learning.",
    
    "## 7. Governance",
    "- Leverage existing Solana staking protocols.",
    "- External inputs (e.g. via Snapshot) shape strategic updates without impacting day-to-day operations.",
    "- Staking provides users with the option to propose and vote on proposals.",
    "- Ensures that governance feedback is seamlessly integrated into the decision-making process.",
    
    "## 8. Logging, Scalability & Future-Proofing",
    "* Audit Logging:",
    "- A modular system that captures decision logs, data events, and validation steps.",
    "- Integrable with external tools (e.g. ELK stack, Splunk) for enhanced transparency.",
    "* Infrastructure:",
    "- Cloud-native and auto-scaling with built-in hooks for future reinforcement learning and autonomous adjustments.",
    
    "## 9. Staking Mechanism & Tiered Access System Design",
    "### 9.1 Benefits of Staking",
    "* MVP:",
    "- All stakers access a basic tier.",
    "- AI-generated project analysis and market intelligence.",
    "- Deep dives and augmented research into web3 projects.",
    "- Learning tool to understand web3 concepts and risk assessment.",
    "- Access to a trading wallet with option to mirror autonomous trading of the AI agent.",
    "- 15% of token sales redistributed weekly.",
    "* Future:",
    "- Premium tiers will be introduced unlocking advanced features, such as real-time notifications, upcoming airdrops, a market intelligence dashboard with historical data, trending projects etc.",
    
    "### 9.2. Tier Threshold Metrics",
    "- Utilises a dynamic USD value system to determine the effective value of staked tokens.",
    "- Early token holders benefit as rising token prices boost staked value, thereby increasing access to premium features and trading wallet limits.",
    
    "### 9.3. Staking Dynamics & Trading Wallet Capital",
    "- The trading wallet limit is directly proportional to the current USD value of staked tokens.",
    "- If a user unstakes all tokens, they lose access to autonomous trading and market intelligence.",
    
    "## 10. Future Enhancements & Expansion",
    "- Dashboard: will consolidate historical data, project analyses, performance trends, upcoming airdrops and more.",
    "- Planned integration of further APIs (e.g. Glassnode, Nansen, Dune Analytics etc).",
    "- Expansion of sub-agent capabilities (e.g. compliance, regulatory oversight).",
    
    "## 11. Next Steps & Open Items",
    "* Technical Feasibility:",
    "- Conduct detailed analysis of API integrations, the aggregation layer, and the staking mechanism.",
    "* Risk Model Refinement:",
    "- Refine risk metrics and composite scoring with input from VC and technical stakeholders.",
    "* Governance Process:",
    "- Define how external governance inputs will be ingested and implemented.",
    "* User Interface Planning:",
    "- Begin prototyping for future dashboards and enhanced UI elements.",
    "* Future-Proofing:",
    "- Integrate hooks for reinforcement learning and autonomous adjustments as the platform scales.",
    ];

  // Called by TypewriterText after a line finishes animating
  const handleLineComplete = () => {
    if (currentLine < lines.length) {
      setCompletedLines((prev) => [...prev, lines[currentLine]]);
      setCurrentLine((prev) => prev + 1);
    }
  };

  return (
    <div className="space-y-2 font-sf-pro text-sm text-gray-600">
      {completedLines.map((line, index) => renderLine(line, index))}
      {currentLine < lines.length && (
        <TypewriterText
          key={currentLine}
          text={lines[currentLine]}
          onComplete={handleLineComplete}
          typingDuration={0.5}
        />
      )}
    </div>
  );
}

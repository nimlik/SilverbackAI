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
      <h3
        key={key}
        className="font-semibold text-lg mt-4 mb-2 text-gray-800"
      >
        {trimmed.slice(4)}
      </h3>
    );
  }
  // ...then for headings (two hashes)
  if (trimmed.startsWith("## ")) {
    return (
      <h2
        key={key}
        className="font-bold text-xl mt-6 mb-4 text-black"
      >
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
  // For any other line, render it as a simple div
  return (
    <div key={key} className="text-gray-700">
      {line}
    </div>
  );
}

export default function LitepaperContent() {
  const [currentLine, setCurrentLine] = useState(0);
  const [completedLines, setCompletedLines] = useState<string[]>([]);

  const lines = [
    "## Table of Contents",
    "1. Introduction",
    "2. System Overview & Architectural Components",
    "3. Cognitive Architecture",
    "4. Social Media & Conversational Interface",
    "5. Autonomous Investing & Governance",
    "6. Logging, Scalability & Future-Proofing",
    "7. Staking Mechanism & Tiered Access System Design",
    "8. Future Enhancements & Expansion",
    "9. Next Steps & Open Items",
    "",
    "## 1. Introduction",
    "This document outlines the architecture for an autonomous, AI-driven investment intelligence platform. Leveraging LLMs, real-time data aggregation, Solana, and Eliza OS, the platform delivers powerful market insights and executes strategic investments - all while engaging users 24/7.",
    "",
    "## 2. System Overview & Architectural Components",
    "Silverback is a next-generation investment intelligence ecosystem that marries advanced natural language processing with robust data normalisation and a scalable, cloud-native infrastructure for Web3 projects.",
    "",
    "Key highlights include:",
    "- A hierarchical brain that synthesises insights from specialised sub-agents.",
    "- An aggregation layer that normalises and validates real-time data from diverse API sources such as CoinGecko, LunarCrush, Certik, and DefiLlama.",
    "- A dynamic conversational interface powered by Eliza OS, ensuring seamless 24/7 engagement across platforms like X, Telegram, and Discord.",
    "- An autonomous investing module that executes and tracks high-risk, experimental investments.",
    "- Governance integration for incorporating external community and strategic inputs.",
    "- A scalable, cloud-native infrastructure designed for auto-scaling and future expansion.",
    "",
    "## 3. Cognitive Architecture",
    "The cognitive architecture is structured across multiple layers, each contributing to a comprehensive analysis and decision-making process. View the cognitive hierarchy here. A description of each is below:",
    "",
    "### 3.1. Frontal Lobe",
    "_ Consists of three modules that each carry out specific high-level functions:",
    "",
    "* Modules:",
    "- Linguistic LLM: responsible for communicating on social media.",
    "- Default Mode Network LLM: responsible for reviewing investment strategies and the efficacy of other LLMs.",
    "- Executive LLM: responsible for monitoring and ranking projects over time, and executing investment strategies.",
    "",
    "### 3.2. Parietal Lobe",
    "* Role:",
    "- Integrates and synthesises data received from the Temporal LLMs.",
    "- Forms a cohesive, intermediate investment position for each project.",
    "* Key Responsibilities:",
    "- Consolidate domain-specific analyses into an aggregated view.",
    "- Serve as the bridge between granular data and strategic execution.",
    "",
    "### 3.3. Temporal Lobe",
    "* Role:",
    "- Analyse and summarise domain-specific data for each project.",
    "",
    "* Sub-Agents and what they analyse:",
    "_ Financial LLM:",
    "-- Price",
    "-- Tokenomics",
    "-- Liquidity, Market Capitalisation, TVL",
    "-- Token Velocity, Vesting Schedules, Emission Rates, Token Utility",
    "",
    "_ Technology LLM:",
    "-- Openness",
    "-- Security",
    "-- Decentralisation",
    "-- Scalability (throughput, interoperability, transaction costs)",
    "",
    "_ Idea LLM:",
    "-- Litepaper",
    "-- Website",
    "-- Documentation",
    "-- Team & Roadmap",
    "-- Partnerships/Ecosystem Fit",
    "-- Innovation & Disruption",
    "",
    "_ Community LLM:",
    "-- Social (sentiment and volume)",
    "-- Developer Engagement/Activity",
    "-- Token Distribution & Governance Participation",
    "-- Ecosystem & Adoption",
    "",
    "_ Innovation, Risk & Disruption LLM:",
    "-- Legal/Regulatory",
    "-- ...",
    "",
    "### 3.4. Primary Lobe",
    "* Role:",
    "- Execute topic-specific data extraction and fine-grained analysis for each domain identified by the Temporal LLMs.",
    "* Key Responsibilities:",
    "- Deploy multiple sub-agents to dissect and evaluate specific metrics (e.g. analysing security, decentralisation, tokenomics details, etc.).",
    "- Provide granular scores and qualitative assessments based on detailed data.",
    "",
    "### 3.5. Qualia Layer",
    "* Role:",
    "- Standardises and normalises API data.",
    "- Triggers validation checks to ensure data integrity.",
    "* Key Responsibilities:",
    "- Ensure consistent data formats (e.g. timestamps, currency units).",
    "- Flag missing or anomalous data for secondary validation.",
    "",
    "## 3.6. Voice LLM",
    "* Role:",
    "- Provides wise, humorous, and 24/7 engagement across social platforms.",
    "* Key Responsibilities:",
    "- Facilitate conversational interactions on X, Telegram, Discord, and Silverback.",
    "- Adjust tone dynamically based on user profiles and previous engagement, ensuring a personalised experience.",
    "",
    "## 3.7. Governance Integration",
    "* Role:",
    "- Incorporates external governance inputs (e.g. via Snapshot) to influence strategic decisions.",
    "* Key Responsibilities:",
    "- Adjust investment strategies based on community and stakeholder votes.",
    "- Ensure that governance feedback is seamlessly integrated into the decision-making process.",
    "",
    "## 3.8. Scalable, Cloud-Native Infrastructure",
    "* Role:",
    "- Underpins the entire system with robust, auto-scaling capabilities.",
    "* Key Responsibilities:",
    "- Ensure high availability and future-proofing.",
    "- Facilitate rapid deployment and scaling through cloud-native, containerised solutions (e.g. Kubernetes).",
    "",
    "### 4. Social Media & Conversational Interface",
    "* Conversational Agent:",
    "- Operates 24/7 on X, Telegram, Discord, and Silverback.",
    "- Adapts its tone dynamically based on user profiles (managed by Eliza OS).",
    "* Context Persistence:",
    "- Maintains conversation continuity across sessions for a personalised user experience.",
    "",
    "### 5. Autonomous Investing & Governance",
    "* Investing Module:",
    "- Executes autonomous, high-risk investment strategies, initially targeting emerging AI crypto agents.",
    "- Distinctly tracks experimental versus traditional investments.",
    "* Governance:",
    "- External inputs (e.g. via Snapshot) shape strategic updates without impacting day-to-day operations.",
    "",
    "### 6. Logging, Scalability & Future-Proofing",
    "* Audit Logging:",
    "- A modular system that captures decision logs, data events, and validation steps.",
    "- Integrable with external tools (e.g. ELK stack, Splunk) for enhanced transparency.",
    "* Infrastructure:",
    "- Cloud-native and auto-scaling with built-in hooks for future reinforcement learning and autonomous adjustments.",
    "",
    "### 7. Staking Mechanism & Tiered Access System Design",
    "## 7.1. Tier Threshold Metrics",
    "* Approach:",
    "- Utilises a dynamic USD value system to determine the effective value of staked tokens.",
    "- Early token holders benefit as rising token prices boost staked value, thereby increasing trading wallet limits.",
    "",
    "## 7.2. Tier Benefits & Roadmap",
    "* MVP:",
    "- All stakers access a basic tier offering AI-generated project analysis, fee discounts on chatbot interactions, and autonomous trading based on their trading wallet limit.",
    "* Future:",
    "- A detailed roadmap will introduce advanced tiers (unlocking features such as advanced analytics, real-time notifications, and airdrops) based on user adoption and feature readiness.",
    "",
    "## 7.3. Staking Dynamics & Trading Wallet Capital",
    "* Mechanism:",
    "- The trading wallet limit is directly proportional to the current USD value of the staked tokens.",
    "- If a user unstakes all tokens, they lose access to autonomous trading.",
    "",
    "## 7.4. Reflection Reward Mechanism",
    "* Reward:",
    "- A fixed 15% of token sales is redistributed weekly to all stakers based on staking proportions.",
    "- This rate is adjustable via governance votes.",
    "",
    "## 7.5. Governance & Technical Considerations",
    "* Governance:",
    "- Voting power and premium access are proportional to the staked amount.",
    "* Implementation:",
    "- Leverages existing Solana staking protocols.",
    "- Advanced UI features (e.g. dashboards) will be developed in later phases.",
    "",
    "### 8. Future Enhancements & Expansion",
    "* Dashboard Development:",
    "- A future dashboard will consolidate historical data, project analyses, and performance trends.",
    "* Additional Integrations:",
    "- Planned integration of further APIs (e.g. Glassnode, Nansen, Dune Analytics).",
    "- Expansion of sub-agent capabilities (e.g. compliance, regulatory oversight).",
    "* Advanced Governance Tools:",
    "- Exploration of deeper integration with governance platforms (e.g. Snapshot).",
    "",
    "### 9. Next Steps & Open Items",
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

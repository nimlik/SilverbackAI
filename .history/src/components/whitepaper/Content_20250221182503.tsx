"use client";

import { useState } from "react";
import TypewriterText from "../TypewriterText";

function renderLine(line: string, key: number) {
  // Trim only leading whitespace while preserving original content
  const trimmed = line.replace(/^\s+/, '');
  
  // Unified heading detection using regex
  const headingMatch = trimmed.match(/^(#{2,3})\s*(.*)/);
  if (headingMatch) {
    const [_, hashes, content] = headingMatch;
    return hashes === '###' ? (
      <h3 key={key} className="font-semibold text-lg mt-4 mb-2 text-gray-800">
        {content}
      </h3>
    ) : (
      <h2 key={key} className="font-bold text-xl mt-6 mb-4 text-black">
        {content}
      </h2>
    );
  }

  // Preserve existing formatting rules
  if (trimmed.startsWith("* ")) {
    return (
      <div key={key} className="font-bold text-gray-800 ml-4">
        {trimmed.slice(2)}
      </div>
    );
  }
  if (trimmed.startsWith("--- ")) {
    return (
      <ul key={key} className="list-disc ml-12 text-gray-700">
        <li>{trimmed.slice(4)}</li>
      </ul>
    );
  }
  if (trimmed.startsWith("-- ")) {
    return (
      <ul key={key} className="list-square ml-8 text-gray-700">
        <li>{trimmed.slice(3)}</li>
      </ul>
    );
  }
  if (trimmed.startsWith("- ")) {
    return (
      <ul key={key} className="list-disc ml-4 text-gray-700">
        <li>{trimmed.slice(2)}</li>
      </ul>
    );
  }
  if (trimmed.startsWith("_ ")) {
    return (
      <div key={key} className="ml-4 text-gray-700">
        {trimmed.slice(2)}
      </div>
    );
  }
  if (trimmed === "") {
    return <div key={key} className="h-4" />; // Fixed empty line height
  }
  return (
    <div key={key} className="text-gray-700">
      {line}
    </div>
  );
}

export default function LitepaperContent() {
  const [currentLine, setCurrentLine] = useState(0);
  const [completedLines, setCompletedLines] = useState<string[]>([]);

  // Keep your original lines array exactly as-is
  const lines = [
    "## Table of Contents",
    "1. Introduction",
    "2. System Overview & Architectural Components",
    "3. Cognitive Architecture",
    "4. Analyses & Conversational Interface",
    "5. Governance",
    "6. Logging, Scalability & Future-Proofing",
    "7. Staking Mechanism & Tiered Access System Design",
    "8. Future Enhancements & Expansion",
    "9. Next Steps & Open Items",
    "",
    "## 1. Introduction",
    "This document outlines the architecture for an autonomous, AI-driven web3 market intelligence platform. Leveraging LLMs, real-time data aggregation, Solana, and Eliza OS, the platform delivers powerful market insights and executes strategic investments autonomously all while engaging users 24/7 on social media.",
    "",
    "## 2. System Overview & Architectural Components",
    "Key highlights include:",
    "- A hierarchical brain that synthesises insights from specialised sub-agents.",
    "- An aggregation layer that normalises and validates real-time data from diverse API sources such as CoinGecko, LunarCrush, Certik, and DefiLlama.",
    "- A dynamic conversational interface powered by Eliza OS, ensuring seamless 24/7 engagement across platforms like X, Telegram, and Discord.",
    "- An autonomous investing module that executes and tracks investments.",
    "- Governance integration for incorporating external community and strategic inputs.",
    "- A scalable, cloud-native infrastructure designed for auto-scaling and future expansion.",
    "",
    "## 3. Cognitive Architecture",
    "The cognitive architecture is structured across five layers (Frontal Lobe, Parietal  Lobe, Temporal Lobe, Brain STEM, Qualia Layer), each contributing to a comprehensive analysis and decision-making process. View the cognitive hierarchy here. A description of each is below:",
    "",
    "### 3.1. Qualia Layer",
    "* Role:",
    "- The lowest level.",
    "- Standardises and normalises API data.",
    "- Triggers validation checks to ensure data integrity (e.g. date formats, timestamps, currency units).",
    "- Flags missing or anomalous data for secondary validation.",
    "",
    "### 3.2. Brain STEM",
    "- The most granular level of LLMs analyses and summarises API data (eg social metrics) and information (eg. Litepaper). Each LLM in this layer is highly specialised.",
    "- Provides analysis with scores and qualitative assessment to domain-specific Temporal Lobe LLMs.",
    "",

  const handleLineComplete = () => {
    if (currentLine < lines.length) {
      setCompletedLines(prev => [...prev, lines[currentLine]]);
      setCurrentLine(prev => prev + 1);
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
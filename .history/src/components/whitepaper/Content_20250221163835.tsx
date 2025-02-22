"use client";

import { useState, useEffect } from "react";
import TypewriterText from "../TypewriterText";

// Helper function to render a single line with markdown processing
function renderLine(line: string, key: number) {
  console.log("Rendering line:", line); // Debugging output

  const trimmed = line.trimStart();

  if (trimmed.startsWith("### ")) {
    return (
      <h3 key={key} className="font-semibold text-lg mt-4 mb-2 text-gray-800">
        {trimmed.slice(4)}
      </h3>
    );
  }
  if (trimmed.startsWith("## ")) {
    return (
      <h2 key={key} className="font-bold text-xl mt-6 mb-4 text-black">
        {trimmed.slice(3)}
      </h2>
    );
  }
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
    return <div key={key} className="pb-2" />;
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
    "Further details on cognitive processing and agent interactions will be outlined here.",
  ];

  // Ensure the line is fully written before adding to completedLines
  const handleLineComplete = () => {
    if (currentLine < lines.length) {
      setCompletedLines((prev) => [...prev, lines[currentLine].trim()]);
      setCurrentLine((prev) => prev + 1);
    }
  };

  useEffect(() => {
    console.log("Completed lines updated:", completedLines);
  }, [completedLines]);

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

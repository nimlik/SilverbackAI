"use client";

import { useState, useEffect } from "react";
import TypewriterText from "../TypewriterText";

// Define a type for each line item.
interface LineItem {
  text: string;
  isHeading: boolean;
}

// Pre-process the content into an array of LineItems.
const lines: LineItem[] = [
  { text: "## Table of Contents", isHeading: true },
  { text: "1. Introduction", isHeading: false },
  { text: "2. System Overview & Architectural Components", isHeading: false },
  { text: "3. Cognitive Architecture", isHeading: false },
  { text: "4. Analyses & Conversational Interface", isHeading: false },
  { text: "5. Governance", isHeading: false },
  { text: "6. Logging, Scalability & Future-Proofing", isHeading: false },
  { text: "7. Staking Mechanism & Tiered Access System Design", isHeading: false },
  { text: "8. Future Enhancements & Expansion", isHeading: false },
  { text: "9. Next Steps & Open Items", isHeading: false },
  { text: "", isHeading: false },
  { text: "## 1. Introduction", isHeading: true },
  {
    text: "This document outlines the architecture for an autonomous, AI-driven web3 market intelligence platform. Leveraging LLMs, real-time data aggregation, Solana, and Eliza OS, the platform delivers powerful market insights and executes strategic investments autonomously all while engaging users 24/7 on social media.",
    isHeading: false,
  },
  { text: "", isHeading: false },
  { text: "## 2. System Overview & Architectural Components", isHeading: true },
  { text: "Key highlights include:", isHeading: false },
  {
    text: "- A hierarchical brain that synthesises insights from specialised sub-agents.",
    isHeading: false,
  },
  {
    text: "- An aggregation layer that normalises and validates real-time data from diverse API sources such as CoinGecko, LunarCrush, Certik, and DefiLlama.",
    isHeading: false,
  },
  {
    text: "- A dynamic conversational interface powered by Eliza OS, ensuring seamless 24/7 engagement across platforms like X, Telegram, and Discord.",
    isHeading: false,
  },
  { text: "- An autonomous investing module that executes and tracks investments.", isHeading: false },
  { text: "- Governance integration for incorporating external community and strategic inputs.", isHeading: false },
  {
    text: "- A scalable, cloud-native infrastructure designed for auto-scaling and future expansion.",
    isHeading: false,
  },
  { text: "", isHeading: false },
  { text: "## 3. Cognitive Architecture", isHeading: true },
  {
    text: "The cognitive architecture is structured across five layers (Frontal Lobe, Parietal Lobe, Temporal Lobe, Brain STEM, Qualia Layer), each contributing to a comprehensive analysis and decision-making process. View the cognitive hierarchy here. A description of each is below:",
    isHeading: false,
  },
  { text: "", isHeading: false },
  { text: "### 3.1. Qualia Layer", isHeading: true },
  { text: "* Role:", isHeading: false },
  { text: "- The lowest level.", isHeading: false },
  { text: "- Standardises and normalises API data.", isHeading: false },
  {
    text: "- Triggers validation checks to ensure data integrity (e.g. date formats, timestamps, currency units).",
    isHeading: false,
  },
  { text: "- Flags missing or anomalous data for secondary validation.", isHeading: false },
  { text: "", isHeading: false },
  { text: "### 3.2. Brain STEM", isHeading: true },
  {
    text: "- The most granular level of LLMs analyses and summarises API data (eg social metrics) and information (eg. Litepaper). Each LLM in this layer is highly specialised.",
    isHeading: false,
  },
  {
    text: "- Provides analysis with scores and qualitative assessment to domain-specific Temporal Lobe LLMs.",
    isHeading: false,
  },
  { text: "", isHeading: false },
];

function renderLineItem(line: string, key: number) {
  const trimmedLine = line.trimStart();

  if (trimmedLine.startsWith("### ")) {
    return (
      <h3 key={key} className="font-semibold text-lg mt-4 mb-2 text-gray-800">
        {trimmedLine.substring(4)}
      </h3>
    );
  }
  if (trimmedLine.startsWith("## ")) {
    return (
      <h2 key={key} className="font-bold text-xl mt-6 mb-4 text-black">
        {trimmedLine.substring(3)}
      </h2>
    );
  }
  if (trimmedLine.startsWith("* ")) {
    return (
      <div key={key} className="font-bold text-gray-800 ml-4">
        {trimmedLine.substring(2)}
      </div>
    );
  }
  if (trimmedLine.startsWith("--- ")) {
    return (
      <ul key={key} className="list-disc ml-12 text-gray-700">
        <li>{trimmedLine.substring(4)}</li>
      </ul>
    );
  }
  if (trimmedLine.startsWith("-- ")) {
    return (
      <ul key={key} className="list-square ml-8 text-gray-700">
        <li>{trimmedLine.substring(3)}</li>
      </ul>
    );
  }
  if (trimmedLine.startsWith("- ")) {
    return (
      <ul key={key} className="list-disc ml-4 text-gray-700">
        <li>{trimmedLine.substring(2)}</li>
      </ul>
    );
  }
  if (trimmedLine.startsWith("_ ")) {
    return (
      <div key={key} className="ml-4 text-gray-700">
        {trimmedLine.substring(2)}
      </div>
    );
  }
  if (trimmedLine === "") {
    return <div key={key} className="h-4" />;
  }
  return (
    <div key={key} className="text-gray-700">
      {line}
    </div>
  );
}

export default function LitepaperContent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completedItems, setCompletedItems] = useState<LineItem[]>([]);

  // Process all consecutive headings starting at currentIndex.
  const processHeadings = () => {
    let newIndex = currentIndex;
    const newItems: LineItem[] = [];

    while (newIndex < lines.length && lines[newIndex].isHeading) {
      newItems.push(lines[newIndex]);
      newIndex++;
    }

    if (newItems.length > 0) {
      setCompletedItems((prev) => [...prev, ...newItems]);
      setCurrentIndex(newIndex);
    }
  };

  // Process headings on component mount and whenever currentIndex changes.
  useEffect(() => {
    processHeadings();
  }, [currentIndex]);

  // When a non-heading line animation is complete, add it and update the index.
  const handleLineComplete = () => {
    if (currentIndex < lines.length) {
      // If the next line is a heading, process all headings.
      if (lines[currentIndex].isHeading) {
        processHeadings();
      } else {
        setCompletedItems((prev) => [...prev, lines[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }
    }
  };

  return (
    <div className="space-y-2 font-sf-pro text-sm text-gray-600">
      {completedItems.map((item, index) => renderLineItem(item.text, index))}
      {currentIndex < lines.length && !lines[currentIndex].isHeading && (
        <TypewriterText
          key={currentIndex}
          text={lines[currentIndex].text}
          onComplete={handleLineComplete}
          typingDuration={0.5}
        />
      )}
    </div>
  );
}

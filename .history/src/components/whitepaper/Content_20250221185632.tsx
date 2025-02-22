"use client";

import { useState, useEffect } from "react";
import TypewriterText from "../TypewriterText";

// Define our line types explicitly.
type LineType = "heading" | "subheading" | "paragraph";

interface LineItem {
  type: LineType;
  text: string;
}

// Explicitly mark each line with its type.
const lines: LineItem[] = [
  { type: "heading", text: "Table of Contents" },
  { type: "paragraph", text: "1. Introduction" },
  { type: "paragraph", text: "2. System Overview & Architectural Components" },
  { type: "paragraph", text: "3. Cognitive Architecture" },
  { type: "paragraph", text: "4. Analyses & Conversational Interface" },
  { type: "paragraph", text: "5. Governance" },
  { type: "paragraph", text: "6. Logging, Scalability & Future-Proofing" },
  { type: "paragraph", text: "7. Staking Mechanism & Tiered Access System Design" },
  { type: "paragraph", text: "8. Future Enhancements & Expansion" },
  { type: "paragraph", text: "9. Next Steps & Open Items" },
  { type: "paragraph", text: "" },
  { type: "heading", text: "1. Introduction" },
  {
    type: "paragraph",
    text: "This document outlines the architecture for an autonomous, AI-driven web3 market intelligence platform. Leveraging LLMs, real-time data aggregation, Solana, and Eliza OS, the platform delivers powerful market insights and executes strategic investments autonomously all while engaging users 24/7 on social media.",
  },
  { type: "paragraph", text: "" },
  { type: "heading", text: "2. System Overview & Architectural Components" },
  { type: "paragraph", text: "Key highlights include:" },
  { type: "paragraph", text: "- A hierarchical brain that synthesises insights from specialised sub-agents." },
  { type: "paragraph", text: "- An aggregation layer that normalises and validates real-time data from diverse API sources such as CoinGecko, LunarCrush, Certik, and DefiLlama." },
  { type: "paragraph", text: "- A dynamic conversational interface powered by Eliza OS, ensuring seamless 24/7 engagement across platforms like X, Telegram, and Discord." },
  { type: "paragraph", text: "- An autonomous investing module that executes and tracks investments." },
  { type: "paragraph", text: "- Governance integration for incorporating external community and strategic inputs." },
  { type: "paragraph", text: "- A scalable, cloud-native infrastructure designed for auto-scaling and future expansion." },
  { type: "paragraph", text: "" },
  { type: "heading", text: "3. Cognitive Architecture" },
  {
    type: "paragraph",
    text: "The cognitive architecture is structured across five layers (Frontal Lobe, Parietal Lobe, Temporal Lobe, Brain STEM, Qualia Layer), each contributing to a comprehensive analysis and decision-making process. View the cognitive hierarchy here. A description of each is below:",
  },
  { type: "paragraph", text: "" },
  { type: "subheading", text: "3.1. Qualia Layer" },
  { type: "paragraph", text: "* Role:" },
  { type: "paragraph", text: "- The lowest level." },
  { type: "paragraph", text: "- Standardises and normalises API data." },
  { type: "paragraph", text: "- Triggers validation checks to ensure data integrity (e.g. date formats, timestamps, currency units)." },
  { type: "paragraph", text: "- Flags missing or anomalous data for secondary validation." },
  { type: "paragraph", text: "" },
  { type: "subheading", text: "3.2. Brain STEM" },
  { type: "paragraph", text: "- The most granular level of LLMs analyses and summarises API data (eg social metrics) and information (eg. Litepaper). Each LLM in this layer is highly specialised." },
  { type: "paragraph", text: "- Provides analysis with scores and qualitative assessment to domain-specific Temporal Lobe LLMs." },
  { type: "paragraph", text: "" },
];

function renderLineItem(item: LineItem, key: number) {
  // Render based on the explicit type.
  if (item.type === "heading") {
    return (
      <h2 key={key} className="font-bold text-xl mt-6 mb-4 text-black">
        {item.text}
      </h2>
    );
  }
  if (item.type === "subheading") {
    return (
      <h3 key={key} className="font-semibold text-lg mt-4 mb-2 text-gray-800">
        {item.text}
      </h3>
    );
  }
  // Paragraphs or other text are rendered normally.
  return (
    <div key={key} className="text-gray-700">
      {item.text}
    </div>
  );
}

export default function LitepaperContent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completedItems, setCompletedItems] = useState<LineItem[]>([]);

  // Immediately render non-paragraph items (headings/subheadings).
  useEffect(() => {
    while (currentIndex < lines.length && lines[currentIndex].type !== "paragraph") {
      setCompletedItems(prev => [...prev, lines[currentIndex]]);
      setCurrentIndex(index => index + 1);
    }
  }, [currentIndex]);

  const handleLineComplete = () => {
    if (currentIndex < lines.length) {
      setCompletedItems(prev => [...prev, lines[currentIndex]]);
      setCurrentIndex(index => index + 1);
    }
  };

  return (
    <div className="space-y-2 font-sf-pro text-sm text-gray-600">
      {completedItems.map((item, index) => renderLineItem(item, index))}
      {currentIndex < lines.length && lines[currentIndex].type === "paragraph" && (
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

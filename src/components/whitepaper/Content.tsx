"use client";

import { useState } from "react";
import TypewriterText from "../TypewriterText";

export default function WhitepaperContent() {
  const [currentLine, setCurrentLine] = useState(0);
  const [completedLines, setCompletedLines] = useState<string[]>([]);

  const lines = [
    "## AI: Multi-Agent Intelligence",
    "- A hierarchy of ai agents that collaborate to achieve sophisticated market intelligence.",
    "- Agents access external services via APIs for real-time data and specialized tasks.",
    "- Agents deployed on social platforms: X, Telegram, and Discord for 24/7 engagement.",
    "- Autonomous investing: The agent will be endowed with its own wallet and funds to invest in projects with alpha.",
    "",
    "## Built on Solana & Eliza OS",
    "- Solana: High-performance blockchain; Eliza OS: Autonomous operating system",
    "- Scalable, secure, and efficient.",
    "",
    "## Use Cases",
    "Portfolio management, risk assessment, market analysis.",
    "",
    "## Ideal for",
    "Crypto natives, noobs, degens, venture analysts, venture scouts, sophisticated investors, anyone seeking cutting-edge insights, users wanting to deep dive.",
    "",
    "## Ideal Partnerships",
    "2048 VC, a16z crypto, Afore Capital, Coinbase Ventures, Defiance Capital, First Star, Foundation Capital, Future Perfect Ventures, Generalist Capital, Kaizen DAO, Outlier Ventures, Paradigm, Pareto, Propel Venture Partners, Seedclub, Solana Foundation, South Park Commons, Spartan Labs, Superportal, Tribe Capital",
    "",
    "## Key Features",
    "- Comprehensive project analysis: team, whitepaper, technical details, originality, token distribution, community engagement, sentiment, TVL, price analysis etc.",
    "- 24/7 social media engagement.",
    "- Real-time market sentiment.",
    "- AI-driven due diligence.",
    "",
    "## Benefits",
    "- Smarter investment decisions.",
    "- Faster insights.",
    "- Real-time data.",
    "- Transparent analysis.",
    "- Educational resources.",
    "",
    "## Potential API Integrations",
    "Certik, CoinGecko, DefiLlama, Dignow Analytics, Dune Analytics, Glassnode, Kaiko, LunarCrush, Nansen, Santiment, Token Terminal",
    "",
    "## Conclusion",
    "- Redefining crypto due diligence.",
    "- Innovative technology.",
    "- Community trust.",
    "- Educational clarity.",
    "- Empowering smarter, faster investment decisions.",
  ];

  const handleLineComplete = () => {
    if (currentLine < lines.length) {
      setCompletedLines((prev) => [...prev, lines[currentLine]]);
      setCurrentLine((prev) => prev + 1);
    }
  };

  return (
    <div className="space-y-2 font-sf-pro-display text-sm text-gray-600">
      {completedLines.map((line, index) => {
        const isHeading = line.startsWith("## ");
        return (
          <div key={index} className={isHeading ? "font-bold" : ""}>
            {line.replace("## ", "")}
          </div>
        );
      })}
      {currentLine < lines.length && (
        <TypewriterText
          text={lines[currentLine].replace("## ", "")} // Remove "## " from display
          onComplete={handleLineComplete}
          typingDuration={0.5}
        />
      )}
    </div>
  );
}

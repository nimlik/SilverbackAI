"use client";

import { useState } from "react";
import TypewriterText from "./TypewriterText";

export default function WhitepaperContent() {
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const content: string[] = [
    "Where the sky is just the beginning.",
    "That's our motto and it's something we truly believe in whenever we develop a product.",
    "The world of AI and blockchain has already advanced so far, yet there are still so many possibilities left to be explored. In a way, they're a great reflection of our motto and why we have decided to focus on them.",
    "Nowadays, AI agents have truly unlocked the potential of what is possible on-chain and off-chain. Not only can they ingest context and interact with real people, but they can also perform autonomous actions as needed. The possibilities are truly endless.",
    "By leveraging Solana's high throughput, low fees, and especially its robust ecosystem, we can decentralize products and agents to foster a stronger sense of trust and security—while maintaining affordability and scale for real-world adoption.",
    "At Sora Labs, we're all about empowering developers. Our products are built around a frictionless developer experience in mind, so we together can drive breakthroughs in AI and crypto.",
    "We want you to control how high you go, and explore what has yet to be explored.",
    "Remember, the sky is only the beginning.",
  ];

  const handleParagraphComplete = () => {
    if (currentParagraph < content.length - 1) {
      setCurrentParagraph((prev) => prev + 1);
    }
  };

  return (
    <div className="space-y-4 max-w-3xl">
      {content.map((paragraph, index) => (
        <div key={index} className="text-gray-700">
          {index === currentParagraph && (
            <TypewriterText
              text={paragraph}
              onComplete={handleParagraphComplete}
              typingDuration={0.5}
            />
          )}
          {index < currentParagraph && <p>{paragraph}</p>}
        </div>
      ))}
    </div>
  );
}

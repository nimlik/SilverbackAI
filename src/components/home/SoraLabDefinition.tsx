"use client";

import { useState } from "react";
import TypewriterText from "../TypewriterText";

export default function SoraLabsDefinition() {
  const [currentLine, setCurrentLine] = useState(0);
  const lines = [
    "silverback ai",
    "[sɪl.vɚˌbæk ˌeɪˈaɪ] · proper noun",
    "1. web3 'artificial market intelligence'",
    "2. eliza os + solana + social media",
    "3. autonomous crypto due diligence",
    "4. autonomous bots on x, telegram and discord",
    "5. ai wallet custody with autonomous investing",
    "6. autonomous trading + augmented research for stakers",
    "7. wise and humorous on social media",
    "8. get your alpha from the alpha.",
  ];

  const handleLineComplete = () => {
    if (currentLine < lines.length - 1) {
      setCurrentLine((prev) => prev + 1);
    }
  };

  return (
    <div className="space-y-2">
      {lines.map((line, index) => (
        <div
          key={line}
          className={`${
            index === 0 || index === 1
              ? "text-2xl font-medium"
              : index === 2
              ? "text-sm text-gray-700"
              : "text-sm text-gray-600"
          }`}
        >
          {index === currentLine && (
            <TypewriterText
              text={line}
              onComplete={handleLineComplete}
              typingDuration={0.5}
            />
          )}
          {index < currentLine && line}
        </div>
      ))}
    </div>
  );
}
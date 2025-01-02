"use client";

import { useState } from "react";
import TypewriterText from "./TypewriterText";

export default function WhitepaperContent() {
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const content: string[] = [];

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

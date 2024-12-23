"use client";

import { useState } from "react";
import TypewriterText from "./TypewriterText";

export default function SoraLabsDefinition() {
  const [currentLine, setCurrentLine] = useState(0);
  const lines = [
    "ソラ ラボズ",
    "sora labs",
    "[sôr-ah labz] · proper noun",
    "1. where the sky is just the beginning.",
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
          {index === 2 && currentLine > 2 && (
            <div className="w-full border-t border-gray-400 my-4" />
          )}
        </div>
      ))}
    </div>
  );
}

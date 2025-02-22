"use client";

import { useState } from "react";
import TypewriterText from "../TypewriterText";

// Helper function to render a single line with markdown processing
function renderLine(line: string, key: number) {
  const trimmed = line.trimStart();

  // Enhanced heading detection with regex
  const headingMatch = trimmed.match(/^(#{2,3})\s+(.*)/);
  if (headingMatch) {
    const [_, hashes, content] = headingMatch;
    if (hashes === "###") {
      return (
        <h3 key={key} className="font-semibold text-lg mt-4 mb-2 text-gray-800">
          {content}
        </h3>
      );
    }
    if (hashes === "##") {
      return (
        <h2 key={key} className="font-bold text-xl mt-6 mb-4 text-black">
          {content}
        </h2>
      );
    }
  }

  // Keep existing bullet/list formatting unchanged
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

  // Your existing lines array (keep unchanged)
  const lines = [
    "## Table of Contents",
    // ... rest of your content
    "## 9. Next Steps & Open Items",
    "* Future-Proofing:",
    "- Integrate hooks for reinforcement learning and autonomous adjustments as the platform scales.",
  ];

  // Preserve original line formatting
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
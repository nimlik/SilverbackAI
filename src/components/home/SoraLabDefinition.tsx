"use client";

import { useState } from "react";
import TypewriterText from "../TypewriterText";
import { AnimatePresence, motion } from "framer-motion";

export default function SoraLabsDefinition() {
  const [currentLine, setCurrentLine] = useState(0);
  const lines = [
    "ソラ ラボズ",
    "sora labs",
    "[sôr-ah labz] · proper noun",
    "1. where the sky is just the beginning.",
    "2. 89nnWMkWeF9LSJvAWcN2JFQfeWdDk6diKEckeToEU1hE",
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
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                exit={{ opacity: 0, scaleX: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full border-t border-gray-400 my-4 origin-left"
              />
            </AnimatePresence>
          )}
        </div>
      ))}
    </div>
  );
}

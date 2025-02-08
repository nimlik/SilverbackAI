"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import TypewriterText from "../TypewriterText";
import CursorBlinker from "../CursorBlinker";

export default function SoraDefinition({
  isDeleting,
  onComplete,
}: {
  isDeleting: boolean;
  onComplete: () => void;
}) {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const lines = [
    "silverback",
    "[sɪl.vɚˌbæk] · noun",
    "1. a mature male mountain gorilla, distinguished by an area of white or silvery hair across the back and acting as the dominant member of its social group",
  ];

  useEffect(() => {
    if (isDeleting) {
      setDisplayedLines(lines);
      setCurrentLine(lines.length - 1);
      setIsComplete(false);
    }
  }, [isDeleting, lines]);

  useEffect(() => {
    if (isComplete && displayedLines.length === 0) {
      onComplete();
    }
  }, [isComplete, displayedLines, onComplete]);

  const handleLineComplete = () => {
    if (isDeleting) {
      setDisplayedLines((prev) => prev.filter((_, i) => i !== currentLine));
      if (currentLine > 0) {
        setCurrentLine((prev) => prev - 1);
      } else {
        setIsComplete(true);
      }
    } else {
      setDisplayedLines((prev) => [...prev, lines[currentLine]]);
      if (currentLine < lines.length - 1) {
        setCurrentLine((prev) => prev + 1);
      } else {
        setIsComplete(true);
      }
    }
  };

  return (
    <div className="space-y-2">
      {lines.map((line, index) => {
        const isPlainText =
          displayedLines.includes(line) &&
          (!isDeleting || index !== currentLine);

        const isTypingOrDeleting = index === currentLine && !isComplete;

        return (
          <div
            key={line}
            className={
              index === 0 || index === 1
                ? "text-2xl font-medium"
                : index === 2
                ? "text-sm text-gray-700"
                : "text-sm text-gray-600"
            }
          >
            {isTypingOrDeleting && (
              <TypewriterText
                text={line}
                isDeleting={isDeleting}
                onComplete={handleLineComplete}
                typingDuration={0.75}
              />
            )}

            {isPlainText && (
              <span>
                {line}
                {index === lines.length - 1 && isComplete && !isDeleting && (
                  <CursorBlinker />
                )}
              </span>
            )}

            {index === 2 && (
              <AnimatePresence>
                {displayedLines.includes(lines[2]) && currentLine !== 2 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    exit={{ opacity: 0, scaleX: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full border-t border-gray-400 my-4 origin-left"
                  />
                )}
              </AnimatePresence>
            )}
          </div>
        );
      })}
    </div>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo, useRef } from "react"; // CHANGED: Added useRef
import TypewriterText from "../TypewriterText";
import CursorBlinker from "../CursorBlinker";

function BackgroundLoader({ onLoaded }: { onLoaded: () => void }) {
  useEffect(() => {
    const img = new Image();
    img.src = "/bg.webp";
    img.onload = onLoaded;
    img.onerror = onLoaded;
  }, [onLoaded]);

  return null;
}

export default function SoraDefinition({
  isDeleting,
  onComplete,
}: {
  isDeleting: boolean;
  onComplete: () => void;
}) {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const startedAnimation = useRef(false); // NEW: Added this line

  const lines = useMemo(
    () => [
      "silverback",
      "[sɪl.vɚˌbæk] · noun",
      "1. a mature male mountain gorilla, distinguished by an area of white or silvery hair across the back and acting as the dominant member of its social group",
    ],
    []
  );

  // NEW: Added this whole section
  useEffect(() => {
    if (backgroundLoaded && !startedAnimation.current) {
      setCurrentLine(0);
      setDisplayedLines([]);
      setIsComplete(false);
      startedAnimation.current = true;
    }
  }, [backgroundLoaded]);

  useEffect(() => {
    if (isDeleting && backgroundLoaded) {
      setDisplayedLines(lines);
      setCurrentLine(lines.length - 1);
      setIsComplete(false);
    }
  }, [isDeleting, lines, backgroundLoaded]);

  useEffect(() => {
    if (isComplete && displayedLines.length === 0) {
      onComplete();
    }
  }, [isComplete, displayedLines, onComplete]);

  const handleLineComplete = () => {
    if (isDeleting) {
      setTimeout(() => {
        setDisplayedLines((prev) => prev.filter((_, i) => i !== currentLine));
        currentLine > 0 ? setCurrentLine((prev) => prev - 1) : setIsComplete(true);
      }, 100);
    } else {
      setDisplayedLines((prev) => [...prev, lines[currentLine]]);
      currentLine < lines.length - 1 ? setCurrentLine((prev) => prev + 1) : setIsComplete(true);
    }
  };

  return (
    <div className="space-y-2">
      <BackgroundLoader onLoaded={() => setBackgroundLoaded(true)} />
      
      {/* NEW: Add this hidden image container */}
      <div 
        style={{ 
          backgroundImage: `url(/bg.webp)`,
          position: 'absolute',
          width: '1px',
          height: '1px',
          overflow: 'hidden'
        }}
      />

      {backgroundLoaded && lines.map((line, index) => {
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
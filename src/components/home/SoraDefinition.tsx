"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import TypewriterText from "../TypewriterText";
import CursorBlinker from "../CursorBlinker";

// This component preloads your background image.
// It calls onLoaded() when the image successfully loads or errors.
function BackgroundLoader({ onLoaded }: { onLoaded: () => void }) {
  useEffect(() => {
    const img = new Image();
    img.src = "/path/to/your/background.jpg"; // Make sure this path is correct!
    img.onload = onLoaded;
    img.onerror = onLoaded; // Proceed even if there's an error
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

  const lines = useMemo(
    () => [
      "silverback",
      "[sɪl.vɚˌbæk] · noun",
      "1. a mature male mountain gorilla, distinguished by an area of white or silvery hair across the back and acting as the dominant member of its social group",
    ],
    []
  );

  // Reset typewriter state if we are deleting text.
  useEffect(() => {
    if (isDeleting) {
      setDisplayedLines(lines);
      setCurrentLine(lines.length - 1);
      setIsComplete(false);
    }
  }, [isDeleting, lines]);

  // Once deletion is complete, call onComplete.
  useEffect(() => {
    if (isComplete && displayedLines.length === 0) {
      onComplete();
    }
  }, [isComplete, displayedLines, onComplete]);

  const handleLineComplete = () => {
    if (isDeleting) {
      // Delay the state update to let the deletion animation finish smoothly.
      setTimeout(() => {
        setDisplayedLines((prev) => prev.filter((_, i) => i !== currentLine));
        if (currentLine > 0) {
          setCurrentLine((prev) => prev - 1);
        } else {
          setIsComplete(true);
        }
      }, 100); // Adjust this delay (in ms) to suit your animation timing.
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
      {/* Preload the background image */}
      <BackgroundLoader onLoaded={() => setBackgroundLoaded(true)} />

      {/* Display a loading message until the background is loaded */}
      {!backgroundLoaded}

      {/* Only render the typewriter text once the background has loaded */}
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

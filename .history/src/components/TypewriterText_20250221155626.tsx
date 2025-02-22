import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import CursorBlinker from "./CursorBlinker";

export default function TypewriterText({
  text,
  startDelay = 0,
  isDeleting = false,
  onComplete,
  typingDuration = 0.7,
}: {
  text: string;
  startDelay?: number;
  isDeleting?: boolean;
  onComplete?: () => void;
  typingDuration?: number;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const isMounted = useRef(true);
  const displayText = useTransform(rounded, (latest) =>
    isDeleting ? text.slice(0, text.length - latest) : text.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, text.length, {
      onComplete: () => {
        if (isMounted.current && onComplete) {
          onComplete();
        }
    },
  });

    return controls.stop;
  }, [text, startDelay, isDeleting, onComplete, typingDuration, count]);

  return (
    <span>
      <motion.span>{displayText}</motion.span>
      <CursorBlinker />
    </span>
  );
}

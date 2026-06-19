import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PHRASES = [
  "Reroute me around traffic",
  "Reply to Mom — I'm 10 minutes away",
  "Move my 3pm back 15 minutes",
  "Find parking near my next stop",
  "Play my driving playlist",
  "Add milk to the grocery list",
];

export function CommandTyper({ className = "" }: { className?: string }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"type" | "hold" | "erase">("type");

  useEffect(() => {
    const full = PHRASES[idx];
    let t: ReturnType<typeof setTimeout>;
    if (phase === "type") {
      if (text.length < full.length) t = setTimeout(() => setText(full.slice(0, text.length + 1)), 38);
      else t = setTimeout(() => setPhase("hold"), 1400);
    } else if (phase === "hold") {
      t = setTimeout(() => setPhase("erase"), 1200);
    } else {
      if (text.length > 0) t = setTimeout(() => setText(text.slice(0, -1)), 18);
      else {
        setIdx((i) => (i + 1) % PHRASES.length);
        setPhase("type");
      }
    }
    return () => clearTimeout(t);
  }, [text, phase, idx]);

  return (
    <div className={`inline-flex items-center gap-3 rounded-full bg-white/85 px-5 py-3 shadow-[var(--shadow-soft)] backdrop-blur ${className}`}>
      <span className="relative flex h-2.5 w-2.5">
        <motion.span
          className="absolute inset-0 rounded-full bg-[#15B5C4]"
          animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />
        <span className="relative h-2.5 w-2.5 rounded-full bg-[#15B5C4]" />
      </span>
      <span className="font-mono text-sm md:text-base text-navy-ink">
        "{text}<span className="ml-0.5 inline-block w-[2px] animate-pulse bg-[#15B5C4]">&nbsp;</span>"
      </span>
    </div>
  );
}

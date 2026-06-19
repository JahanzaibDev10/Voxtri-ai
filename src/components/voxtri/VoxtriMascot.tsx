import { motion, useReducedMotion } from "framer-motion";

interface Props { size?: number; listening?: boolean; className?: string }

export function VoxtriMascot({ size = 220, listening = true, className }: Props) {
  const reduce = useReducedMotion();
  const id = "vx" + Math.random().toString(36).slice(2, 7);

  return (
    <motion.div
      className={className}
      style={{ width: size, height: size }}
      animate={reduce ? undefined : { y: [0, -10, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 200 200" width="100%" height="100%" aria-label="Voxtri mascot, friendly cyan face">
        <defs>
          <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5AD2E2" />
            <stop offset="55%" stopColor="#15B5C4" />
            <stop offset="100%" stopColor="#0C8FA3" />
          </linearGradient>
          <radialGradient id={`${id}-shine`} cx="0.3" cy="0.25" r="0.6">
            <stop offset="0%" stopColor="white" stopOpacity="0.55" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* listening pulse rings */}
        {listening && !reduce && [0, 0.7, 1.4].map((d) => (
          <motion.circle
            key={d}
            cx="100" cy="100" r="78"
            fill="none" stroke="#5AD2E2" strokeWidth="2"
            initial={{ opacity: 0.55, scale: 1 }}
            animate={{ opacity: 0, scale: 1.55 }}
            transition={{ duration: 2.2, repeat: Infinity, delay: d, ease: "easeOut" }}
            style={{ transformOrigin: "100px 100px" }}
          />
        ))}

        {/* face */}
        <motion.g
          animate={reduce ? undefined : { scale: [1, 1.03, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "100px 100px" }}
        >
          <rect x="22" y="22" width="156" height="156" rx="56" fill={`url(#${id}-g)`} />
          <rect x="22" y="22" width="156" height="156" rx="56" fill={`url(#${id}-shine)`} />

          {/* eyes with blink */}
          <motion.g
            animate={reduce ? undefined : { scaleY: [1, 1, 0.08, 1, 1] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.85, 0.9, 0.95, 1] }}
            style={{ transformOrigin: "100px 100px" }}
          >
            <rect x="62" y="78" width="22" height="44" rx="11" fill="white" />
            <rect x="116" y="78" width="22" height="44" rx="11" fill="white" />
          </motion.g>
        </motion.g>
      </svg>
    </motion.div>
  );
}

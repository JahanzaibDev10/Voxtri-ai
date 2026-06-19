import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Carousel({ items, render }: { items: any[]; render: (item: any, i: number) => ReactNode }) {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(0);
  const go = (d: number) => { setDir(d); setIdx((i) => (i + d + items.length) % items.length); };

  return (
    <div className="relative">
      <div className="relative h-full overflow-hidden rounded-3xl">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={idx}
            custom={dir}
            initial={{ opacity: 0, x: dir > 0 ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir > 0 ? -60 : 60 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) go(1);
              else if (info.offset.x > 80) go(-1);
            }}
          >
            {render(items[idx], idx)}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex gap-1.5">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 brand-gradient" : "w-3 bg-navy-ink/15"}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={() => go(-1)} aria-label="Previous" className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--border)] bg-white text-navy-ink transition hover:bg-mist">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={() => go(1)} aria-label="Next" className="grid h-11 w-11 place-items-center rounded-full brand-gradient text-white shadow-[var(--shadow-soft)]">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

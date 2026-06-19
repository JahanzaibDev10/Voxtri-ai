import { motion } from "framer-motion";

interface Props {
  variant?: "listen" | "route" | "reply" | "schedule";
  className?: string;
}

export function AppMockup({ variant = "listen", className = "" }: Props) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative mx-auto w-[260px] sm:w-[300px] aspect-[9/19] rounded-[44px] bg-navy-ink p-3 shadow-[0_40px_90px_-30px_rgba(12,143,163,0.55)]">
        <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
        <div className="relative h-full w-full overflow-hidden rounded-[34px] brand-gradient-soft">
          <div className="flex h-full flex-col p-5 pt-9">
            <div className="flex items-center justify-between text-[10px] font-semibold text-navy-ink/60">
              <span>9:41</span>
              <span>● ● ●</span>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <div className="h-7 w-7 rounded-xl brand-gradient" />
              <span className="text-sm font-bold text-navy-ink">Voxtri</span>
            </div>

            {variant === "listen" && <ListenCard />}
            {variant === "route" && <RouteCard />}
            {variant === "reply" && <ReplyCard />}
            {variant === "schedule" && <ScheduleCard />}
          </div>
        </div>
      </div>
    </div>
  );
}

function ListenCard() {
  return (
    <div className="mt-6 flex flex-1 flex-col items-center justify-center gap-5">
      <div className="text-center text-[11px] uppercase tracking-widest text-[#0C8FA3]/80">Listening</div>
      <div className="flex h-24 items-end gap-1.5">
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.span
            key={i}
            className="w-1.5 rounded-full brand-gradient"
            animate={{ height: ["20%", "100%", "30%", "70%", "25%"] }}
            transition={{ duration: 1.2 + (i % 3) * 0.2, repeat: Infinity, delay: i * 0.05 }}
            style={{ height: "30%" }}
          />
        ))}
      </div>
      <div className="rounded-2xl bg-white/80 px-3 py-2 text-center text-[11px] font-medium text-navy-ink">
        "Reroute me around traffic"
      </div>
    </div>
  );
}

function RouteCard() {
  return (
    <div className="mt-5 flex-1">
      <div className="text-[10px] font-bold uppercase tracking-wider text-[#0C8FA3]">Re-routing</div>
      <div className="mt-2 text-lg font-extrabold text-navy-ink leading-tight">Faster route found · save 12 min</div>
      <div className="mt-4 h-32 overflow-hidden rounded-2xl bg-white/80 p-3">
        <svg viewBox="0 0 200 120" className="h-full w-full">
          <path d="M10 100 Q60 20 110 70 T190 30" stroke="#15B5C4" strokeWidth="4" fill="none" strokeLinecap="round" strokeDasharray="6 6">
            <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="1.2s" repeatCount="indefinite" />
          </path>
          <circle cx="10" cy="100" r="5" fill="#0C8FA3" />
          <circle cx="190" cy="30" r="5" fill="#5AD2E2" />
        </svg>
      </div>
      <div className="mt-3 flex gap-2">
        <button className="flex-1 rounded-full bg-navy-ink py-2 text-[11px] font-semibold text-white">Accept</button>
        <button className="flex-1 rounded-full bg-white/80 py-2 text-[11px] font-semibold text-navy-ink">Keep</button>
      </div>
    </div>
  );
}

function ReplyCard() {
  return (
    <div className="mt-5 flex-1">
      <div className="text-[10px] font-bold uppercase tracking-wider text-[#0C8FA3]">Message · Mom</div>
      <div className="mt-2 rounded-2xl bg-white/80 p-3 text-[12px] text-navy-ink">
        "Are you on the way?"
      </div>
      <div className="mt-3 text-[10px] font-bold uppercase tracking-wider text-[#0C8FA3]">Sending reply</div>
      <div className="mt-2 rounded-2xl brand-gradient p-3 text-[12px] font-medium text-white">
        "Hey Mom — I'm 10 minutes away. See you soon!"
      </div>
      <div className="mt-3 flex items-center gap-2 text-[10px] text-navy-ink/60">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Hands-free · eyes on the road
      </div>
    </div>
  );
}

function ScheduleCard() {
  return (
    <div className="mt-5 flex-1">
      <div className="text-[10px] font-bold uppercase tracking-wider text-[#0C8FA3]">Calendar</div>
      <div className="mt-2 text-base font-extrabold text-navy-ink">Move 3pm → 3:15pm</div>
      <div className="mt-3 space-y-2">
        {["2:00 Coffee w/ Ana", "3:15 Client sync ✦", "4:30 School pickup"].map((t, i) => (
          <div key={i} className={`rounded-xl px-3 py-2 text-[11px] ${i === 1 ? "brand-gradient text-white font-semibold" : "bg-white/80 text-navy-ink"}`}>{t}</div>
        ))}
      </div>
      <div className="mt-3 text-[10px] text-navy-ink/60">Conflicts checked · attendees notified</div>
    </div>
  );
}

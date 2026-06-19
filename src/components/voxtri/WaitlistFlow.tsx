import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { CTAButton } from "./CTAButton";

const DRIVE_TYPES = ["Commuter", "Rideshare / Delivery", "Road-tripper", "Busy parent or pro"];
const PHONES = ["iOS", "Android"];

export function WaitlistFlow({ compact = false }: { compact?: boolean }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [drive, setDrive] = useState(DRIVE_TYPES[0]);
  const [phone, setPhone] = useState(PHONES[0]);
  const [submitted, setSubmitted] = useState(false);
  const [position, setPosition] = useState(0);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setPosition(1247 + Math.floor(Math.random() * 800));
    setSubmitted(true);
  };

  return (
    <div className={`relative w-full ${compact ? "" : "max-w-xl mx-auto"}`}>
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            onSubmit={submit}
            className="rounded-3xl bg-white p-6 sm:p-8 shadow-[var(--shadow-soft)] ring-1 ring-[color:var(--border)]"
          >
            <div className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0C8FA3]">
              <Sparkles className="h-3.5 w-3.5" /> Early Access
            </div>
            <h3 className="font-display text-2xl font-extrabold text-navy-ink">Join the waitlist</h3>
            <p className="mt-1 text-sm text-body-muted">Be first when Voxtri ships. No spam, just one friendly invite.</p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Field label="Your name">
                <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Alex Carter" className={inputCls} />
              </Field>
              <Field label="Email">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@email.com" className={inputCls} />
              </Field>
            </div>

            <Field label="How do you drive?" className="mt-4">
              <div className="flex flex-wrap gap-2">
                {DRIVE_TYPES.map((t) => (
                  <Chip key={t} active={drive === t} onClick={() => setDrive(t)}>{t}</Chip>
                ))}
              </div>
            </Field>

            <Field label="Phone" className="mt-4">
              <div className="flex gap-2">
                {PHONES.map((p) => (
                  <Chip key={p} active={phone === p} onClick={() => setPhone(p)}>{p}</Chip>
                ))}
              </div>
            </Field>

            <div className="mt-6">
              <CTAButton type="submit" size="lg" className="w-full sm:w-auto">Get my early invite</CTAButton>
            </div>
            <p className="mt-3 text-[11px] text-body-muted">We'll only email about Voxtri. Unsubscribe anytime.</p>
          </motion.form>
        ) : (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="rounded-3xl brand-gradient p-8 text-white shadow-[var(--shadow-glow)]"
          >
            <CheckCircle2 className="h-10 w-10" />
            <h3 className="mt-3 font-display text-3xl font-extrabold">You're on the list, {name.split(" ")[0]} 🎉</h3>
            <p className="mt-2 text-white/90">
              You're <span className="font-bold">#{position.toLocaleString()}</span> in line for early access on {phone}.
            </p>
            <p className="mt-1 text-white/85">We'll email <span className="font-semibold">{email}</span> the moment Voxtri's ready. Drive safe out there.</p>
            <button onClick={() => { setSubmitted(false); setName(""); setEmail(""); }} className="mt-5 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur hover:bg-white/25">
              Add another driver
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputCls = "w-full rounded-2xl border border-[color:var(--border)] bg-mist/40 px-4 py-3 text-sm text-navy-ink outline-none transition focus:border-[#15B5C4] focus:bg-white focus:ring-4 focus:ring-[#5AD2E2]/20";

function Field({ label, children, className = "" }: any) {
  return (
    <label className={`block ${className}`}>
      <div className="mb-1.5 text-xs font-semibold text-navy-ink/70">{label}</div>
      {children}
    </label>
  );
}

function Chip({ active, children, onClick }: any) {
  return (
    <button type="button" onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-medium transition ${active ? "brand-gradient text-white shadow-[var(--shadow-soft)]" : "bg-mist text-navy-ink hover:bg-mint"}`}>
      {children}
    </button>
  );
}

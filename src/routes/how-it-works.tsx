import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, Mic, Brain, Zap } from "lucide-react";
import { PageShell } from "@/components/voxtri/PageShell";
import { SectionReveal, Stagger, itemVariant } from "@/components/voxtri/SectionReveal";
import { Blobs } from "@/components/voxtri/Blobs";
import { CommandTyper } from "@/components/voxtri/CommandTyper";
import { AppMockup } from "@/components/voxtri/AppMockup";
import { Carousel } from "@/components/voxtri/Carousel";
import { CTAButton } from "@/components/voxtri/CTAButton";
import { VoxtriMascot } from "@/components/voxtri/VoxtriMascot";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How Voxtri Works — Context-aware, hands-free AI for drivers" },
      { name: "description", content: "Voxtri listens, understands your context across all your apps, and acts hands-free. Here's exactly how it works behind the scenes." },
      { property: "og:title", content: "How Voxtri Works" },
      { property: "og:description", content: "Just talk. Voxtri understands and acts — without you ever looking down." },
      { property: "og:url", content: "https://voxtri.ai/how-it-works" },
    ],
    links: [{ rel: "canonical", href: "https://voxtri.ai/how-it-works" }],
  }),
  component: HowItWorks,
});

const SAMPLES = [
  "Reroute me around traffic",
  "Reply to Mom — I'm 10 minutes away",
  "Move my 3pm back 15 minutes",
  "Find parking near my next stop",
  "Add 'pick up dry cleaning' to my list",
  "Call Dad on speaker",
  "Play something calm for the kids",
  "What's the next turn?",
];

function HowItWorks() {
  return (
    <PageShell>
      <section className="relative pb-16 md:pb-24">
        <Blobs variant="a" />
        <div className="container-90 grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <SectionReveal>
            <div className="text-xs font-bold uppercase tracking-widest text-[#0C8FA3]">How it works</div>
            <h1 className="mt-3 font-display text-5xl md:text-7xl font-extrabold leading-[1.02]">Just talk. Voxtri <span className="text-brand-gradient">does the rest.</span></h1>
            <p className="mt-5 max-w-xl text-lg text-body-muted">A friendly voice you can trust, built on a real-time context engine that knows what you're doing across all your apps — and acts the moment you ask.</p>
            <div className="mt-6"><CommandTyper /></div>
          </SectionReveal>
          <SectionReveal y={40}>
            <div className="relative flex items-center justify-center"><VoxtriMascot size={300} /></div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 brand-gradient-soft relative">
        <Blobs variant="b" />
        <div className="container-90">
          <SectionReveal className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-extrabold">The context engine, in plain English.</h2>
            <p className="mt-4 text-body-muted">Voxtri stitches together what's happening across your maps, messages, calendar, music, and more — so a single sentence is enough.</p>
          </SectionReveal>
          <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { icon: <Mic />, t: "Listens, naturally", d: "Always ready, never intrusive. No rigid commands — talk like you would to a passenger." },
              { icon: <Brain />, t: "Understands context", d: "Reads the situation across your apps: who texted, where you're headed, what's on your calendar." },
              { icon: <Zap />, t: "Acts in real time", d: "Reroutes, replies, reschedules, calls — confirms with you in a calm voice, then does it." },
            ].map((s, i) => (
              <motion.div key={i} variants={itemVariant} className="rounded-3xl bg-white p-7 ring-1 ring-[color:var(--border)] shadow-[var(--shadow-soft)]">
                <div className="inline-grid h-12 w-12 place-items-center rounded-2xl brand-gradient text-white">{s.icon}</div>
                <h3 className="mt-4 font-display text-xl font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-body-muted">{s.d}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-90 grid items-center gap-12 lg:grid-cols-2">
          <SectionReveal>
            <div className="text-xs font-bold uppercase tracking-widest text-[#0C8FA3]">App walkthrough</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold">A friendly screen, when you need a glance.</h2>
            <p className="mt-4 text-body-muted">Voxtri is voice-first, but when you do glance over, the screen is calm: big type, soft colors, and clear confirmations. No menus to hunt through.</p>
            <ul className="mt-5 space-y-2 text-sm text-body-muted">
              {["Listening waveform shows Voxtri's hearing you","Route card surfaces faster paths","Reply card confirms before sending","Calendar card moves meetings in seconds"].map((t) => (
                <li key={t} className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#15B5C4]" />{t}</li>
              ))}
            </ul>
            <div className="mt-7"><CTAButton to="/features">See all features</CTAButton></div>
          </SectionReveal>
          <SectionReveal y={40}>
            <div className="flex justify-center gap-6">
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity }}><AppMockup variant="schedule" /></motion.div>
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="hidden sm:block mt-8"><AppMockup variant="route" /></motion.div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 brand-gradient-soft">
        <div className="container-90">
          <SectionReveal>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold">Sample voice commands.</h2>
            <p className="mt-3 max-w-2xl text-body-muted">Drivers don't memorize syntax. Voxtri understands plain language — here are real ones we've heard.</p>
          </SectionReveal>
          <div className="mt-10">
            <Carousel
              items={SAMPLES.map((s, i) => ({ s, i }))}
              render={({ s, i }) => (
                <div className="grid gap-6 rounded-[2rem] bg-white p-8 ring-1 ring-[color:var(--border)] shadow-[var(--shadow-soft)] md:grid-cols-[1.4fr_1fr] md:p-12">
                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest text-[#0C8FA3]">Command #{i + 1}</div>
                    <p className="mt-3 font-display text-3xl md:text-5xl font-extrabold leading-tight text-navy-ink">"{s}"</p>
                    <p className="mt-4 text-body-muted">Voxtri parses the intent, checks your calendar, contacts and current route, confirms with you in a calm voice, then handles it — eyes-up the whole time.</p>
                  </div>
                  <div className="flex items-center justify-center"><AppMockup variant={(["listen","route","reply","schedule"] as const)[i % 4]} /></div>
                </div>
              )}
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}

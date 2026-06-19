import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, Headphones, Navigation, CalendarClock, MessageSquare, Shield, Clock, Smartphone } from "lucide-react";
import { PageShell } from "@/components/voxtri/PageShell";
import { SectionReveal, Stagger, itemVariant } from "@/components/voxtri/SectionReveal";
import { Blobs } from "@/components/voxtri/Blobs";
import { Carousel } from "@/components/voxtri/Carousel";
import { CTAButton } from "@/components/voxtri/CTAButton";
import { AppMockup } from "@/components/voxtri/AppMockup";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Voxtri AI hands-free copilot" },
      { name: "description", content: "Context-aware across all your apps, fully hands-free, real-time routing, calendar & messages, safer driving. Explore every Voxtri feature." },
      { property: "og:title", content: "Voxtri Features" },
      { property: "og:description", content: "Eight pillars that make every drive safer, calmer, and more useful." },
      { property: "og:url", content: "https://voxtri.ai/features" },
    ],
    links: [{ rel: "canonical", href: "https://voxtri.ai/features" }],
  }),
  component: Features,
});

const PILLARS = [
  { icon: <Sparkles />, t: "Context-Aware", d: "Voxtri reads across your maps, messages, calendar, music and more — so one sentence is enough." },
  { icon: <Headphones />, t: "Fully Hands-Free", d: "Designed for eyes-up driving. No tapping, no menus — just a calm conversation." },
  { icon: <Clock />, t: "Real-Time", d: "Live routing, live messages, live calendar. Voxtri doesn't make you wait." },
  { icon: <Navigation />, t: "Smart Routing", d: "Reroutes around traffic, weather and your day's plans without skipping a beat." },
  { icon: <CalendarClock />, t: "Calendar & Scheduling", d: "Move meetings, add events, check conflicts — by voice, in seconds." },
  { icon: <MessageSquare />, t: "Messages & Calls", d: "Reply, call, ping family — without ever taking your hands off the wheel." },
  { icon: <Shield />, t: "Safer, Calmer Driving", d: "Built around the science of attention. Quiet mode in heavy moments." },
  { icon: <Smartphone />, t: "Works With Your Phone", d: "No new hardware, no installs in your car. Just open the app and drive." },
];

function Features() {
  return (
    <PageShell>
      <section className="relative pb-16 md:pb-24">
        <Blobs variant="a" />
        <div className="container-90">
          <SectionReveal className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#0C8FA3]">Features</div>
            <h1 className="mt-3 font-display text-5xl md:text-7xl font-extrabold leading-[1.02]">Built around the moments you actually face <span className="text-brand-gradient">behind the wheel.</span></h1>
            <p className="mt-5 text-lg text-body-muted">Eight pillars, designed together — so Voxtri feels less like an app and more like a friendly co-pilot in the passenger seat.</p>
          </SectionReveal>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-90">
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p) => (
              <motion.div key={p.t} variants={itemVariant} className="group rounded-3xl bg-white p-6 ring-1 ring-[color:var(--border)] shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]">
                <div className="inline-grid h-12 w-12 place-items-center rounded-2xl brand-gradient text-white shadow-[var(--shadow-soft)] transition group-hover:scale-110">{p.icon}</div>
                <h3 className="mt-4 font-display text-lg font-bold">{p.t}</h3>
                <p className="mt-2 text-sm text-body-muted">{p.d}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-16 md:py-24 brand-gradient-soft">
        <div className="container-90">
          <SectionReveal className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-extrabold">A closer look.</h2>
            <p className="mt-3 text-body-muted">Swipe through how each pillar shows up in the app.</p>
          </SectionReveal>
          <div className="mt-10">
            <Carousel
              items={PILLARS.slice(0, 4).map((p, i) => ({ ...p, i }))}
              render={(p) => (
                <div className="grid items-center gap-8 rounded-[2rem] bg-white p-8 ring-1 ring-[color:var(--border)] shadow-[var(--shadow-soft)] md:grid-cols-2 md:p-12">
                  <div>
                    <div className="inline-grid h-12 w-12 place-items-center rounded-2xl brand-gradient text-white">{p.icon}</div>
                    <h3 className="mt-5 font-display text-3xl md:text-4xl font-extrabold">{p.t}</h3>
                    <p className="mt-4 text-body-muted">{p.d}</p>
                    <div className="mt-6"><CTAButton to="/waitlist">Get early access</CTAButton></div>
                  </div>
                  <div className="flex justify-center"><AppMockup variant={(["listen","route","reply","schedule"] as const)[p.i % 4]} /></div>
                </div>
              )}
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}

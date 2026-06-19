import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Shield, Sparkles, MessageSquare, Navigation, CalendarClock, MapPin, Phone, Headphones } from "lucide-react";

import { PageShell } from "@/components/voxtri/PageShell";
import { VoxtriMascot } from "@/components/voxtri/VoxtriMascot";
import { CTAButton } from "@/components/voxtri/CTAButton";
import { CommandTyper } from "@/components/voxtri/CommandTyper";
import { AppMockup } from "@/components/voxtri/AppMockup";
import { Blobs } from "@/components/voxtri/Blobs";
import { SectionReveal, Stagger, itemVariant } from "@/components/voxtri/SectionReveal";
import { Carousel } from "@/components/voxtri/Carousel";
import { CountUp } from "@/components/voxtri/CountUp";
import { WaitlistFlow } from "@/components/voxtri/WaitlistFlow";

import driverImg from "@/assets/hero-driver.jpg";
import roadImg from "@/assets/road.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Voxtri AI — Your phone becomes co-pilot" },
      { name: "description", content: "Voxtri is the friendly, hands-free AI copilot for drivers. It understands your context across all your apps and acts — so your eyes stay on the road." },
      { property: "og:title", content: "Voxtri AI — Your phone becomes co-pilot" },
      { property: "og:description", content: "Hands-free AI copilot for drivers. Join the waitlist for early access." },
      { property: "og:url", content: "https://voxtri.ai/" },
    ],
    links: [{ rel: "canonical", href: "https://voxtri.ai/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell>
      <Hero />
      <Problem />
      <HowItWorks />
      <FeaturePillars />
      <SeeItInAction />
      <UseCases />
      <Stats />
      <Safety />
      <FounderTeaser />
      <PressStrip />
      <WaitlistBand />
    </PageShell>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-12 md:pb-16">
      <Blobs variant="a" />
      <div className="container-90 grid items-start gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-2">
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-[#0C8FA3] shadow-[var(--shadow-soft)] ring-1 ring-[color:var(--border)]">
            <Sparkles className="h-3.5 w-3.5" /> Coming soon to iOS & Android
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-5 font-display text-[2.6rem] sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] text-navy-ink"
          >
            Your phone becomes <span className="text-brand-gradient">co-pilot</span> with Voxtri.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-5 max-w-xl text-lg text-body-muted"
          >
            A friendly, voice-first AI that understands your context across all your apps and acts — hands-free. So you can keep your eyes on the road and your hands on the wheel.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-8 flex flex-wrap items-center gap-3">
            <CTAButton to="/waitlist" size="lg">Join the waitlist</CTAButton>
            <CTAButton to="/how-it-works" variant="ghost" size="lg" showArrow={false}>See how it works</CTAButton>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }} className="mt-8">
            <CommandTyper />
          </motion.div>

          <div className="mt-8 flex items-center gap-5 text-xs text-body-muted">
            <Trust icon={<Shield className="h-4 w-4" />} text="Eyes-on-road safety" />
            <Trust icon={<Headphones className="h-4 w-4" />} text="100% hands-free" />
            <Trust icon={<Sparkles className="h-4 w-4" />} text="Knows your context" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:mt-16 lg:justify-start"
        >
          <VoxtriMascot size={300} />
        </motion.div>

      </div>
    </section>
  );
}

function Trust({ icon, text }: any) {
  return <span className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1.5 ring-1 ring-[color:var(--border)]">{icon}{text}</span>;
}

function Problem() {
  return (
    <section className="relative py-14 md:py-20">
      <div className="container-90 grid gap-12 lg:grid-cols-2">
        <SectionReveal>
          <div className="text-xs font-bold uppercase tracking-widest text-[#0C8FA3]">The problem</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold leading-tight">Phones and driving don't mix.<br/>Until they do.</h2>
          <p className="mt-5 text-lg text-body-muted">Every time you tap, type, or hunt for the right app behind the wheel, the road disappears. We juggle messages, maps, calendars, music — all on a screen meant for two hands and no movement. There's a better way.</p>
        </SectionReveal>
        <Stagger className="grid gap-4 sm:grid-cols-2">
          {[
            { stat: "9", suffix: " sec", text: "Average eyes-off-road for a single text. That's a football field at highway speed." },
            { stat: "23x", text: "The crash risk increase from texting while driving. We can do better." },
            { stat: "5+", text: "Apps an average driver fumbles with per trip — maps, music, messages, calendar, calls." },
            { stat: "0", text: "Touches Voxtri needs from you. Just talk. It listens, understands, and acts." },
          ].map((c, i) => (
            <motion.div key={i} variants={itemVariant} className="rounded-3xl bg-white p-6 ring-1 ring-[color:var(--border)] shadow-[var(--shadow-soft)]">
              <div className="font-display text-4xl font-extrabold text-brand-gradient">{c.stat}{c.suffix || ""}</div>
              <p className="mt-2 text-sm text-body-muted">{c.text}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", t: "Just talk", d: "No wake-word gymnastics, no buttons. Speak naturally — Voxtri's already listening, friendly and ready.", icon: <MessageSquare className="h-6 w-6" /> },
    { n: "02", t: "It understands your context", d: "Across maps, messages, calendar, music and more — Voxtri stitches your apps into one calm conversation.", icon: <Sparkles className="h-6 w-6" /> },
    { n: "03", t: "It acts, hands-free", d: "Reroutes, replies, reschedules, plays, books, finds — without you ever looking down.", icon: <Headphones className="h-6 w-6" /> },
  ];
  return (
    <section className="relative py-14 md:py-20 brand-gradient-soft">
      <Blobs variant="b" />
      <div className="container-90">
        <SectionReveal className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-widest text-[#0C8FA3]">How it works</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold leading-tight">Three steps. Zero taps.</h2>
        </SectionReveal>
        <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <motion.div key={s.n} variants={itemVariant} className="group relative overflow-hidden rounded-3xl bg-white p-7 ring-1 ring-[color:var(--border)] shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#5AD2E2]/15 blur-2xl transition group-hover:bg-[#5AD2E2]/30" />
              <div className="inline-grid h-12 w-12 place-items-center rounded-2xl brand-gradient text-white shadow-[var(--shadow-soft)]">{s.icon}</div>
              <div className="mt-5 font-mono text-xs text-[#0C8FA3]">{s.n}</div>
              <h3 className="mt-1 font-display text-2xl font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-body-muted">{s.d}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

const PILLARS = [
  { icon: <Sparkles />, title: "Context-Aware", body: "Knows what you're doing across all your apps and stitches it into one conversation." },
  { icon: <Headphones />, title: "Fully Hands-Free", body: "Eyes on the road. Voxtri listens, understands, and acts — no tapping required." },
  { icon: <Navigation />, title: "Smart Routing", body: "Real-time reroutes around traffic, weather, and your day's plans." },
  { icon: <CalendarClock />, title: "Calendar & Scheduling", body: "Move meetings, add events, check conflicts — all by voice, in seconds." },
  { icon: <MessageSquare />, title: "Messages & Calls", body: "Send a reply, take a call, ping your family — without lifting a finger." },
  { icon: <Shield />, title: "Safer, Calmer Driving", body: "Designed for focus. No fiddling, no fumbling — just one helpful voice." },
];

function FeaturePillars() {
  return (
    <section className="relative py-14 md:py-20">
      <div className="container-90">
        <SectionReveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#0C8FA3]">What Voxtri does</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold">Everything you need, none of the friction.</h2>
          </div>
          <p className="max-w-md text-body-muted">A small set of pillars covering the moments you actually face behind the wheel — built for safety first, magic second.</p>
        </SectionReveal>

        <div className="mt-10 hidden md:block">
          <Stagger className="grid gap-5 md:grid-cols-3">
            {PILLARS.map((p) => (
              <motion.div key={p.title} variants={itemVariant} className="group rounded-3xl bg-white p-7 ring-1 ring-[color:var(--border)] shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]">
                <div className="inline-grid h-12 w-12 place-items-center rounded-2xl brand-gradient-soft text-[#0C8FA3]">{p.icon}</div>
                <h3 className="mt-4 font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-body-muted">{p.body}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>

        <div className="mt-8 md:hidden">
          <Carousel
            items={PILLARS}
            render={(p) => (
              <div className="mx-1 rounded-3xl bg-white p-7 ring-1 ring-[color:var(--border)] shadow-[var(--shadow-soft)]">
                <div className="inline-grid h-12 w-12 place-items-center rounded-2xl brand-gradient-soft text-[#0C8FA3]">{p.icon}</div>
                <h3 className="mt-4 font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-body-muted">{p.body}</p>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
}

function SeeItInAction() {
  return (
    <section className="relative py-14 md:py-20">
      <Blobs variant="c" />
      <div className="container-90 grid items-center gap-14 lg:grid-cols-2">
        <SectionReveal>
          <div className="text-xs font-bold uppercase tracking-widest text-[#0C8FA3]">See it in action</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold">One voice. All your apps. No taps.</h2>
          <p className="mt-5 text-lg text-body-muted">Tell Voxtri what you need in plain language — it pulls context from messages, calendar, maps and more, then handles it for you in real time.</p>
          <div className="mt-6 space-y-3">
            <CommandTyper />
            <p className="text-sm text-body-muted">A few of the things drivers actually ask Voxtri every day.</p>
          </div>
          <div className="mt-7"><CTAButton to="/features" variant="ghost">Explore features</CTAButton></div>
        </SectionReveal>
        <SectionReveal y={40}>
          <div className="relative flex justify-center gap-6">
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity }}>
              <AppMockup variant="route" />
            </motion.div>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="hidden sm:block mt-12">
              <AppMockup variant="reply" />
            </motion.div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

const USE_CASES = [
  { tag: "Commuters", t: "Your daily drive, lighter.", d: "Voxtri reroutes around traffic, queues your playlist, and previews your day — before you hit the on-ramp.", sample: "Reroute me around the bridge and start my morning playlist." },
  { tag: "Rideshare & Delivery", t: "More trips, fewer taps.", d: "Switch apps, confirm pickups, message riders, log expenses — all by voice, eyes-up.", sample: "Mark this delivery complete and send the customer a thanks." },
  { tag: "Road-trippers", t: "Adventures, no second-guessing.", d: "Find scenic stops, charge your EV, book a room, share your ETA with friends — without breaking flow.", sample: "Find a coffee shop with good reviews on the way to Tahoe." },
  { tag: "Busy parents & pros", t: "A calmer car. A calmer you.", d: "Move meetings, reply to your kid's school, add to the grocery list, check tomorrow — between green lights.", sample: "Move my 3pm back fifteen and tell the team I'm running long." },
];

function UseCases() {
  return (
    <section className="relative py-14 md:py-20 brand-gradient-soft">
      <div className="container-90">
        <SectionReveal>
          <div className="text-xs font-bold uppercase tracking-widest text-[#0C8FA3]">Built for every driver</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold">A copilot that adapts to your drive.</h2>
        </SectionReveal>

        <div className="mt-10">
          <Carousel
            items={USE_CASES}
            render={(u) => (
              <div className="grid items-center gap-8 rounded-[2rem] bg-white p-6 sm:p-8 ring-1 ring-[color:var(--border)] shadow-[var(--shadow-soft)] md:grid-cols-[minmax(0,1fr)_280px]">
                <div>
                  <div className="inline-flex items-center rounded-full brand-gradient px-3 py-1 text-xs font-semibold text-white">{u.tag}</div>
                  <h3 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold leading-tight">{u.t}</h3>
                  <p className="mt-3 text-body-muted">{u.d}</p>
                  <div className="mt-5 rounded-2xl bg-mist p-4 font-mono text-sm text-navy-ink">
                    <div className="mb-1 text-[10px] uppercase tracking-widest text-[#0C8FA3]">You say</div>
                    "{u.sample}"
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <AppMockup className="[&>div]:!w-[230px]" variant={["listen", "route", "reply", "schedule"][USE_CASES.indexOf(u)] as any} />
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { n: 12000, suffix: "+", l: "Drivers on the waitlist" },
    { n: 100, suffix: "%", l: "Hands-free, by design" },
    { n: 30, suffix: "+", l: "Apps Voxtri can act across" },
    { n: 9, suffix: " sec", l: "Saved per typed reply" },
  ];
  return (
    <section className="py-12 md:py-16">
      <div className="container-90 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <SectionReveal key={i} delay={i * 0.05}>
            <div className="rounded-3xl bg-white p-7 ring-1 ring-[color:var(--border)] shadow-[var(--shadow-soft)]">
              <div className="font-display text-5xl font-extrabold text-brand-gradient"><CountUp to={s.n} suffix={s.suffix} /></div>
              <div className="mt-1 text-sm text-body-muted">{s.l}</div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}

function Safety() {
  return (
    <section className="relative py-14 md:py-20">
      <div className="container-90 overflow-hidden rounded-[2.5rem] bg-navy-ink text-white">
        <div className="relative grid gap-10 p-8 md:p-14 lg:grid-cols-[1.1fr_1fr]">
          <div className="absolute inset-0 opacity-70">
            <img src={roadImg} width={1600} height={900} loading="lazy" alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-ink via-navy-ink/95 to-navy-ink/60" />
          </div>
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-[#5AD2E2]"><Shield className="h-3.5 w-3.5" /> Safety-first by design</div>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white md:text-5xl">Eyes on the road. Hands on the wheel.</h2>
            <p className="mt-4 max-w-xl text-white/90">Voxtri was built so you never have to look down again. Every interaction is voice-only, with clear confirmations and a calm tone — because driving deserves your full attention.</p>
            <ul className="mt-6 space-y-2 text-sm text-white/85">
              {["Voice-only interactions, by design", "Always-on safe phrasing and confirmations", "Quiet mode in heavy traffic and bad weather", "Privacy-first: only what's needed, never sold"].map((x) => (
                <li key={x} className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#5AD2E2]" />{x}</li>
              ))}
            </ul>
          </div>
          <div className="relative flex items-center justify-center"><VoxtriMascot size={260} /></div>
        </div>
      </div>
    </section>
  );
}

function FounderTeaser() {
  return (
    <section className="py-14 md:py-20 brand-gradient-soft">
      <div className="container-90 grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
        <SectionReveal>
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] ring-1 ring-[color:var(--border)] shadow-[var(--shadow-glow)]">
            <img src={driverImg} width={1600} height={1100} loading="lazy" alt="Happy driver, hands on the wheel" className="h-full w-full object-cover" />
          </div>
        </SectionReveal>
        <SectionReveal>
          <div className="text-xs font-bold uppercase tracking-widest text-[#0C8FA3]">Our mission</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold">Building a calmer, safer way to drive.</h2>
          <p className="mt-4 text-lg text-body-muted">Voxtri exists to make every drive safer and smarter — a friendly, hands-free copilot that understands your context across all your apps and acts, so you never have to look down.</p>
          <blockquote className="mt-6 rounded-3xl bg-white p-6 text-navy-ink ring-1 ring-[color:var(--border)] shadow-[var(--shadow-soft)]">
            <p className="text-lg leading-relaxed">"I believe in startups that make an impact — ones that consider not just the business, but the real needs of the people they serve. And I believe in the power of teamwork."</p>
            <footer className="mt-4 text-sm font-semibold text-[#0C8FA3]">— Syuzanna Sarkisyan, Co-founder & CEO</footer>
          </blockquote>
          <div className="mt-6"><CTAButton to="/about" variant="ghost">Meet the founder</CTAButton></div>
        </SectionReveal>
      </div>
    </section>
  );
}

function PressStrip() {
  const logos = ["emlyon business school", "Female Founders Meetup", "Ü Hub · 2nd place", "Warsaw Tech", "AI Voice Forum"];
  return (
    <section className="py-8 md:py-10">
      <div className="container-90 rounded-3xl bg-white p-6 ring-1 ring-[color:var(--border)]">
        <div className="text-center text-xs font-bold uppercase tracking-widest text-body-muted">Recognized & supported by</div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-semibold text-navy-ink/70">
          {logos.map((l) => <span key={l}>{l}</span>)}
        </div>
      </div>
    </section>
  );
}

function WaitlistBand() {
  return (
    <section className="py-12 md:py-16">
      <div className="container-90 grid items-center gap-10 rounded-[2.5rem] bg-white p-8 md:p-14 ring-1 ring-[color:var(--border)] shadow-[var(--shadow-soft)] lg:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full brand-gradient-soft px-3 py-1.5 text-xs font-semibold text-[#0C8FA3]"><Phone className="h-3.5 w-3.5" /> iOS & Android · Coming soon</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-extrabold leading-tight">Be one of the first to ride with Voxtri.</h2>
          <p className="mt-4 text-lg text-body-muted">Tell us a little about how you drive — we'll send your early-access invite the moment Voxtri's ready for your phone.</p>
          <ul className="mt-5 space-y-1.5 text-sm text-body-muted">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#15B5C4]" /> Priority access for early supporters</li>
            <li className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-[#15B5C4]" /> A friendly heads-up when we launch in your region</li>
          </ul>
        </div>
        <WaitlistFlow />
      </div>
    </section>
  );
}

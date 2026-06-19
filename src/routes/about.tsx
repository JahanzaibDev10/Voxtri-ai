import { createFileRoute } from "@tanstack/react-router";
import { Heart, Users, Compass } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { PageShell } from "@/components/voxtri/PageShell";
import { SectionReveal, Stagger, itemVariant } from "@/components/voxtri/SectionReveal";
import { Blobs } from "@/components/voxtri/Blobs";
import { CTAButton } from "@/components/voxtri/CTAButton";
import { VoxtriMascot } from "@/components/voxtri/VoxtriMascot";
import { motion } from "framer-motion";
import founderImg from "@/assets/founder-clear.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Voxtri — A calmer, safer way to drive" },
      { name: "description", content: "Voxtri is on a mission to make every drive safer and smarter. Meet the founder, Syuzanna Sarkisyan, and the values behind the company." },
      { property: "og:title", content: "About Voxtri" },
      { property: "og:description", content: "Building a calmer, safer way to drive." },
      { property: "og:url", content: "https://voxtri.ai/about" },
    ],
    links: [{ rel: "canonical", href: "https://voxtri.ai/about" }],
  }),
  component: About,
});

function About() {
  return (
    <PageShell>
      <section className="relative pb-12 md:pb-16">
        <Blobs variant="a" />
        <div className="container-90 grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <SectionReveal>
            <div className="text-xs font-bold uppercase tracking-widest text-[#0C8FA3]">About Voxtri</div>
            <h1 className="mt-3 font-display text-5xl md:text-7xl font-extrabold leading-[1.02]">Building a calmer, safer way to <span className="text-brand-gradient">drive.</span></h1>
            <p className="mt-5 max-w-2xl text-lg text-body-muted">Voxtri exists to make every drive safer and smarter — a friendly, hands-free copilot that understands your context across all your apps and acts so you never have to look down. Eyes on the road. Hands on the wheel.</p>
          </SectionReveal>
          <SectionReveal><div className="flex justify-center"><VoxtriMascot size={300} /></div></SectionReveal>
        </div>
      </section>

      <section className="py-14 md:py-20 brand-gradient-soft">
        <div className="container-90 grid items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
          <SectionReveal>
            <div className="relative mx-auto max-w-sm">
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity }} className="overflow-hidden rounded-[2rem] ring-1 ring-[color:var(--border)] shadow-[var(--shadow-glow)]">
                <img src={founderImg} width={1144} height={1376} loading="lazy" decoding="async" alt="Syuzanna Sarkisyan, Co-founder & CEO of Voxtri" className="h-full w-full object-cover object-center" />
              </motion.div>
              <div className="absolute -bottom-5 -right-4 rounded-2xl bg-white p-3 shadow-[var(--shadow-soft)] ring-1 ring-[color:var(--border)]">
                <VoxtriMascot size={64} />
              </div>
            </div>
          </SectionReveal>
          <SectionReveal>
            <div className="text-xs font-bold uppercase tracking-widest text-[#0C8FA3]">Founder</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold leading-tight">Syuzanna Sarkisyan<br/><span className="text-body-muted text-2xl font-semibold">Co-founder & CEO · Warsaw, Poland</span></h2>
            <p className="mt-5 text-body-muted">Syuzanna brings 7 years of expertise in innovation and investment — a path from corporate incubator assistant to startup founder — and an emlyon business school education. She's a serial founder, a champion of women entrepreneurs in tech, and a believer in teamwork.</p>
            <p className="mt-3 text-body-muted">Recognized at the Female Founders Meetup by Ü Hub (2nd place), she builds startups that make a real impact, weighing customers' needs as much as business needs.</p>
            <blockquote className="mt-6 rounded-3xl bg-white p-6 text-navy-ink ring-1 ring-[color:var(--border)] shadow-[var(--shadow-soft)]">
              <p className="text-lg leading-relaxed">"I believe in startups that make an impact — ones that consider not just the business, but the real needs of the people they serve. And I believe in the power of teamwork."</p>
            </blockquote>
            <div className="mt-6">
              <a href="https://www.linkedin.com/in/syuzanna-sarkisyan-13a687165/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-navy-ink ring-1 ring-[color:var(--border)] hover:bg-mist">
                <FaLinkedinIn className="h-4 w-4 text-[#0C8FA3]" /> Connect on LinkedIn
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-90">
          <SectionReveal className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#0C8FA3]">What we value</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold">Three principles that guide every decision.</h2>
          </SectionReveal>
          <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { icon: <Heart />, t: "Impact", d: "We build things that matter — safer roads, calmer lives, more time with the people you love." },
              { icon: <Compass />, t: "Customer-first", d: "Real driver needs steer every design choice. We weigh humans as heavily as business." },
              { icon: <Users />, t: "Teamwork", d: "Great products come from great teams. We're better together — inside Voxtri and with our community." },
            ].map((v) => (
              <motion.div key={v.t} variants={itemVariant} className="rounded-3xl bg-white p-7 ring-1 ring-[color:var(--border)] shadow-[var(--shadow-soft)]">
                <div className="inline-grid h-12 w-12 place-items-center rounded-2xl brand-gradient text-white">{v.icon}</div>
                <h3 className="mt-4 font-display text-2xl font-bold">{v.t}</h3>
                <p className="mt-2 text-sm text-body-muted">{v.d}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="pb-14 md:pb-16">
        <div className="container-90 rounded-[2.5rem] brand-gradient p-10 md:p-14 text-white text-center shadow-[var(--shadow-glow)]">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold">Drive with us from day one.</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/90">Join the waitlist for early access — we'll send your invite as soon as Voxtri's ready for your phone.</p>
          <div className="mt-7 flex justify-center"><CTAButton to="/waitlist" variant="white" size="lg">Join the waitlist</CTAButton></div>
        </div>
      </section>
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, CheckCircle2, Building2, Sparkles } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { PageShell } from "@/components/voxtri/PageShell";
import { SectionReveal } from "@/components/voxtri/SectionReveal";
import { Blobs } from "@/components/voxtri/Blobs";
import { CTAButton } from "@/components/voxtri/CTAButton";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Voxtri — Connect, partner, invest" },
      { name: "description", content: "Get in touch with the Voxtri team. Drivers, partners, and investors — we'd love to hear from you." },
      { property: "og:title", content: "Contact Voxtri" },
      { property: "og:description", content: "Connect with the team behind Voxtri." },
      { property: "og:url", content: "https://voxtri.ai/contact" },
    ],
    links: [{ rel: "canonical", href: "https://voxtri.ai/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageShell>
      <section className="relative pb-10 md:pb-12">
        <Blobs variant="a" />
        <div className="container-90 max-w-4xl">
          <SectionReveal>
            <div className="text-xs font-bold uppercase tracking-widest text-[#0C8FA3]">Contact</div>
            <h1 className="mt-3 font-display text-5xl md:text-7xl font-extrabold leading-[1.02]">Say hello to <span className="text-brand-gradient">the team.</span></h1>
            <p className="mt-5 text-lg text-body-muted">Drivers, partners, journalists, investors — whoever you are, we'd love to meet you. Send a note and a real person will reply.</p>
          </SectionReveal>
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="container-90 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <ContactForm />
          <SidePanel />
        </div>
      </section>

      <section className="pb-14 md:pb-16">
        <div className="container-90">
          <PartnerInquiry />
        </div>
      </section>
    </PageShell>
  );
}

function ContactForm() {
  const [data, setData] = useState({ name: "", email: "", subject: "General", message: "" });
  const [done, setDone] = useState(false);
  const update = (k: string, v: string) => setData((d) => ({ ...d, [k]: v }));

  return (
    <AnimatePresence mode="wait">
      {!done ? (
        <motion.form key="f" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          onSubmit={(e) => { e.preventDefault(); setDone(true); }}
          className="rounded-3xl bg-white p-7 sm:p-9 ring-1 ring-[color:var(--border)] shadow-[var(--shadow-soft)]">
          <h2 className="font-display text-2xl font-extrabold">Send us a note</h2>
          <p className="mt-1 text-sm text-body-muted">We typically reply within one business day.</p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Field label="Name"><input required value={data.name} onChange={(e) => update("name", e.target.value)} className={cls} /></Field>
            <Field label="Email"><input required type="email" value={data.email} onChange={(e) => update("email", e.target.value)} className={cls} /></Field>
          </div>
          <Field label="What's this about?" className="mt-3">
            <div className="flex flex-wrap gap-2">
              {["General", "Press", "Support", "Other"].map((s) => (
                <button type="button" key={s} onClick={() => update("subject", s)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${data.subject === s ? "brand-gradient text-white shadow-[var(--shadow-soft)]" : "bg-mist text-navy-ink hover:bg-mint"}`}>
                  {s}
                </button>
              ))}
            </div>
          </Field>
          <Field label="Message" className="mt-3">
            <textarea required rows={5} value={data.message} onChange={(e) => update("message", e.target.value)} className={cls + " resize-none"} placeholder="Tell us a little about what's on your mind…" />
          </Field>
          <div className="mt-6"><CTAButton type="submit" size="lg">Send message</CTAButton></div>
        </motion.form>
      ) : (
        <motion.div key="d" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="rounded-3xl brand-gradient p-9 text-white shadow-[var(--shadow-glow)]">
          <CheckCircle2 className="h-10 w-10" />
          <h2 className="mt-3 font-display text-3xl font-extrabold">Thanks, {data.name.split(" ")[0] || "friend"}!</h2>
          <p className="mt-2 text-white/90">Your message is on its way to the Voxtri team. We'll reply to <span className="font-semibold">{data.email}</span> within one business day.</p>
          <button onClick={() => { setData({ name: "", email: "", subject: "General", message: "" }); setDone(false); }} className="mt-5 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold hover:bg-white/25">Send another</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SidePanel() {
  return (
    <SectionReveal>
      <div className="space-y-4">
        <InfoCard icon={<Mail />} title="Email" body="hello@voxtri.ai" href="mailto:hello@voxtri.ai" />
        <InfoCard icon={<FaLinkedinIn />} title="Founder" body="Syuzanna Sarkisyan" href="https://www.linkedin.com/in/syuzanna-sarkisyan-13a687165/" cta="Connect on LinkedIn" />
        <InfoCard icon={<Building2 />} title="Company" body="Voxtri AI Voice Assistant" href="https://www.linkedin.com/company/voxtrivoiceassistant/" cta="Follow the company" />
        <InfoCard icon={<MapPin />} title="Based in" body="Dover, Delaware · Warsaw, Poland" />
      </div>
    </SectionReveal>
  );
}

function InfoCard({ icon, title, body, href, cta }: any) {
  return (
    <div className="rounded-3xl bg-white p-5 ring-1 ring-[color:var(--border)] shadow-[var(--shadow-soft)]">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl brand-gradient-soft text-[#0C8FA3]">{icon}</div>
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-[#0C8FA3]">{title}</div>
          <div className="font-semibold text-navy-ink">{body}</div>
        </div>
      </div>
      {href && (
        <a href={href} target="_blank" rel="noreferrer" className="mt-3 inline-flex text-sm font-semibold text-[#0C8FA3] hover:underline">
          {cta || "Open →"}
        </a>
      )}
    </div>
  );
}

function PartnerInquiry() {
  const [d, setD] = useState({ name: "", org: "", email: "", type: "Partner", note: "" });
  const [done, setDone] = useState(false);
  const set = (k: string, v: string) => setD((s) => ({ ...s, [k]: v }));
  return (
    <div className="overflow-hidden rounded-[2.5rem] bg-navy-ink p-8 md:p-14 text-white">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-[#5AD2E2]"><Sparkles className="h-3.5 w-3.5" /> Partners & Investors</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-extrabold leading-tight">Let's build the future of driving — together.</h2>
          <p className="mt-4 text-white/80">Whether you're a fleet, an automaker, a navigation partner, or an investor — we'd love a short intro call. Drop us a line.</p>
        </div>
        <AnimatePresence mode="wait">
          {!done ? (
            <motion.form key="pf" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              onSubmit={(e) => { e.preventDefault(); setDone(true); }}
              className="rounded-3xl bg-white p-6 text-navy-ink shadow-[var(--shadow-glow)]">
              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Your name"><input required value={d.name} onChange={(e) => set("name", e.target.value)} className={cls} /></Field>
                <Field label="Organization"><input required value={d.org} onChange={(e) => set("org", e.target.value)} className={cls} /></Field>
              </div>
              <Field label="Work email" className="mt-3"><input required type="email" value={d.email} onChange={(e) => set("email", e.target.value)} className={cls} /></Field>
              <Field label="You are a…" className="mt-3">
                <div className="flex flex-wrap gap-2">
                  {["Partner", "Investor", "Fleet", "Press"].map((t) => (
                    <button type="button" key={t} onClick={() => set("type", t)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition ${d.type === t ? "brand-gradient text-white shadow-[var(--shadow-soft)]" : "bg-mist text-navy-ink"}`}>{t}</button>
                  ))}
                </div>
              </Field>
              <Field label="A short note" className="mt-3">
                <textarea rows={3} value={d.note} onChange={(e) => set("note", e.target.value)} className={cls + " resize-none"} />
              </Field>
              <div className="mt-5"><CTAButton type="submit" size="md">Send inquiry</CTAButton></div>
            </motion.form>
          ) : (
            <motion.div key="pd" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="rounded-3xl brand-gradient p-7 text-white shadow-[var(--shadow-glow)]">
              <CheckCircle2 className="h-10 w-10" />
              <h3 className="mt-3 font-display text-2xl font-extrabold">Got it, {d.name.split(" ")[0]} — thank you.</h3>
              <p className="mt-2 text-white/90">We'll reply to {d.email} within one business day to set up a quick intro call.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

const cls = "w-full rounded-2xl border border-[color:var(--border)] bg-mist/40 px-4 py-3 text-sm text-navy-ink outline-none transition focus:border-[#15B5C4] focus:bg-white focus:ring-4 focus:ring-[#5AD2E2]/20";

function Field({ label, children, className = "" }: any) {
  return (
    <label className={`block ${className}`}>
      <div className="mb-1.5 text-xs font-semibold text-navy-ink/70">{label}</div>
      {children}
    </label>
  );
}

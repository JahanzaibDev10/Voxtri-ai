import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { Logo } from "./Logo";
import { CTAButton } from "./CTAButton";

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="relative brand-gradient-soft pt-12 pb-10 md:pt-16">
      <div className="container-90">
        <div className="rounded-[2.5rem] brand-gradient p-8 md:p-14 text-white shadow-[var(--shadow-glow)]">
          <div className="grid items-center gap-8 md:grid-cols-[1.4fr_auto]">
            <div>
              <h3 className="font-display text-3xl md:text-5xl font-extrabold leading-tight">Ready to drive with Voxtri?</h3>
              <p className="mt-3 max-w-xl text-white/90">Join the waitlist for early access. Eyes on the road, hands on the wheel — Voxtri takes care of the rest.</p>
            </div>
            <CTAButton to="/waitlist" variant="white" size="lg">Get early access</CTAButton>
          </div>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-body-muted">A friendly, hands-free AI copilot that understands your context across all your apps — so every drive is safer and smarter.</p>
            <div className="mt-4 flex gap-2">
              <a href="https://www.linkedin.com/company/voxtrivoiceassistant/" target="_blank" rel="noreferrer" aria-label="Voxtri LinkedIn" className="grid h-10 w-10 place-items-center rounded-full bg-white text-navy-ink ring-1 ring-[color:var(--border)] hover:bg-mist">
                <FaLinkedinIn className="h-4 w-4" />
              </a>
              <a href="mailto:hello@voxtri.ai" aria-label="Email Voxtri" className="grid h-10 w-10 place-items-center rounded-full bg-white text-navy-ink ring-1 ring-[color:var(--border)] hover:bg-mist">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <FooterCol title="Product" links={[
            { to: "/how-it-works", label: "How it works" },
            { to: "/features", label: "Features" },
            { to: "/use-cases", label: "Use cases" },
            { to: "/waitlist", label: "Waitlist" },
          ]} />
          <FooterCol title="Company" links={[
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
            { href: "https://www.linkedin.com/in/syuzanna-sarkisyan-13a687165/", label: "Founder LinkedIn" },
            { href: "https://www.linkedin.com/company/voxtrivoiceassistant/", label: "Company LinkedIn" },
          ]} />

          <div>
            <div className="text-sm font-bold text-navy-ink">Stay in the loop</div>
            <p className="mt-2 text-sm text-body-muted">A friendly note when Voxtri ships, plus the occasional safe-driving story.</p>
            {!done ? (
              <form onSubmit={(e) => { e.preventDefault(); if (email.trim()) setDone(true); }} className="mt-3 flex overflow-hidden rounded-full bg-white ring-1 ring-[color:var(--border)] focus-within:ring-[#15B5C4]">
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="you@email.com" className="flex-1 bg-transparent px-4 py-3 text-sm outline-none" />
                <button className="brand-gradient px-4 text-white" aria-label="Subscribe"><ArrowRight className="h-4 w-4" /></button>
              </form>
            ) : (
              <div className="mt-3 flex items-center gap-2 rounded-full bg-mint px-4 py-3 text-sm font-semibold text-[#0C8FA3]">
                <CheckCircle2 className="h-4 w-4" /> Thanks — see you soon!
              </div>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[color:var(--border)] pt-6 text-xs text-body-muted md:flex-row">
          <div>© {new Date().getFullYear()} Voxtri AI Voice Assistant · Dover, Delaware</div>
          <div>
            This website is powered by{" "}
            <a href="https://theinnovations.tech/" target="_blank" rel="noreferrer" className="font-semibold text-[#0C8FA3] hover:underline">
              The Innovations
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to?: string; href?: string; label: string }[] }) {
  return (
    <div>
      <div className="text-sm font-bold text-navy-ink">{title}</div>
      <ul className="mt-3 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            {l.to ? (
              <Link to={l.to} className="text-body-muted hover:text-[#0C8FA3]">{l.label}</Link>
            ) : (
              <a href={l.href} target="_blank" rel="noreferrer" className="text-body-muted hover:text-[#0C8FA3]">{l.label}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { CTAButton } from "./CTAButton";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/features", label: "Features" },
  { to: "/use-cases", label: "Use cases" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => { setOpen(false); }, [loc.pathname]);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`container-90 flex items-center justify-between rounded-full px-4 sm:px-6 py-2.5 transition-all duration-300 ${scrolled ? "glass shadow-[0_10px_40px_-20px_rgba(12,143,163,0.35)] ring-1 ring-white/60" : ""}`}>
        <Link to="/" aria-label="Voxtri home"><Logo /></Link>

        <nav className="hidden lg:flex items-center gap-1">
          {LINKS.map((l) => (
            <Link key={l.to} to={l.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-navy-ink/80 transition hover:bg-mist hover:text-navy-ink"
              activeProps={{ className: "rounded-full px-4 py-2 text-sm font-semibold text-[#0C8FA3] bg-mist" }}
              activeOptions={{ exact: l.to === "/" }}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CTAButton to="/waitlist" size="md">Join the waitlist</CTAButton>
        </div>

        <button className="lg:hidden grid h-10 w-10 place-items-center rounded-full bg-white shadow ring-1 ring-[color:var(--border)]" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="container-90 mt-3 rounded-3xl bg-white p-5 shadow-[var(--shadow-soft)] ring-1 ring-[color:var(--border)] lg:hidden">
          <nav className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <Link key={l.to} to={l.to} className="rounded-2xl px-4 py-3 text-base font-medium text-navy-ink hover:bg-mist"
                activeProps={{ className: "rounded-2xl px-4 py-3 text-base font-semibold text-[#0C8FA3] bg-mist" }} activeOptions={{ exact: l.to === "/" }}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3"><CTAButton to="/waitlist" size="lg" className="w-full justify-center">Join the waitlist</CTAButton></div>
        </div>
      )}
    </header>
  );
}

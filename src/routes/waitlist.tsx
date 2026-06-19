import { createFileRoute } from "@tanstack/react-router";
import { Apple, Smartphone, Shield, Sparkles, Heart } from "lucide-react";
import { PageShell } from "@/components/voxtri/PageShell";
import { SectionReveal } from "@/components/voxtri/SectionReveal";
import { Blobs } from "@/components/voxtri/Blobs";
import { WaitlistFlow } from "@/components/voxtri/WaitlistFlow";
import { VoxtriMascot } from "@/components/voxtri/VoxtriMascot";

export const Route = createFileRoute("/waitlist")({
  head: () => ({
    meta: [
      { title: "Join the Voxtri Waitlist — Early Access on iOS & Android" },
      { name: "description", content: "Be one of the first drivers to try Voxtri — the friendly, hands-free AI copilot. Coming soon to iOS and Android." },
      { property: "og:title", content: "Join the Voxtri Waitlist" },
      { property: "og:description", content: "Early access for drivers — coming soon to iOS & Android." },
      { property: "og:url", content: "https://voxtri.ai/waitlist" },
    ],
    links: [{ rel: "canonical", href: "https://voxtri.ai/waitlist" }],
  }),
  component: Waitlist,
});

function Waitlist() {
  return (
    <PageShell>
      <section className="relative pb-20 md:pb-28">
        <Blobs variant="a" />
        <div className="container-90 grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-[#0C8FA3] shadow-[var(--shadow-soft)] ring-1 ring-[color:var(--border)]">
              <Sparkles className="h-3.5 w-3.5" /> Early Access · iOS & Android
            </div>
            <h1 className="mt-4 font-display text-5xl md:text-7xl font-extrabold leading-[1.02]">Be one of the first to <span className="text-brand-gradient">ride with Voxtri.</span></h1>
            <p className="mt-5 max-w-xl text-lg text-body-muted">Tell us a little about how you drive — we'll send your early invite as soon as Voxtri's ready for your phone. No spam, no nonsense, just a friendly heads-up.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Badge icon={<Apple className="h-4 w-4" />} text="iOS · Coming soon" />
              <Badge icon={<Smartphone className="h-4 w-4" />} text="Android · Coming soon" />
            </div>

            <ul className="mt-7 grid gap-3 text-sm text-body-muted sm:grid-cols-2">
              <li className="flex items-start gap-2"><Shield className="mt-0.5 h-4 w-4 text-[#15B5C4]" /> Priority access for early supporters</li>
              <li className="flex items-start gap-2"><Heart className="mt-0.5 h-4 w-4 text-[#15B5C4]" /> A real human reads every reply</li>
              <li className="flex items-start gap-2"><Sparkles className="mt-0.5 h-4 w-4 text-[#15B5C4]" /> A friendly heads-up when we launch in your region</li>
              <li className="flex items-start gap-2"><Smartphone className="mt-0.5 h-4 w-4 text-[#15B5C4]" /> Works on the phone you already own</li>
            </ul>

            <div className="mt-10 hidden md:flex items-center gap-4">
              <VoxtriMascot size={120} />
              <p className="max-w-sm text-sm text-body-muted">"We're so excited to meet you. Drive safe — see you very soon." — the Voxtri team</p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <WaitlistFlow />
          </SectionReveal>
        </div>
      </section>
    </PageShell>
  );
}

function Badge({ icon, text }: any) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-navy-ink px-3.5 py-2 text-xs font-semibold text-white">{icon}{text}</span>
  );
}

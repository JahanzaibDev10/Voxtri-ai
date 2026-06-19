import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/voxtri/PageShell";
import { SectionReveal } from "@/components/voxtri/SectionReveal";
import { Blobs } from "@/components/voxtri/Blobs";
import { Carousel } from "@/components/voxtri/Carousel";
import { AppMockup } from "@/components/voxtri/AppMockup";
import { CTAButton } from "@/components/voxtri/CTAButton";

export const Route = createFileRoute("/use-cases")({
  head: () => ({
    meta: [
      { title: "Use Cases — Voxtri for every kind of driver" },
      { name: "description", content: "Daily commuters, rideshare and delivery, road-trippers, busy parents and pros — Voxtri adapts to how you drive." },
      { property: "og:title", content: "Voxtri Use Cases" },
      { property: "og:description", content: "A copilot that fits your life behind the wheel." },
      { property: "og:url", content: "https://voxtri.ai/use-cases" },
    ],
    links: [{ rel: "canonical", href: "https://voxtri.ai/use-cases" }],
  }),
  component: UseCases,
});

const CASES = [
  { tag: "Daily Commuters", t: "Your morning, on autopilot.", d: "Voxtri previews your day, reroutes around the bridge, queues your podcast, and pings your team if you're running late — before you even merge onto the highway.", points: ["Live re-routing around traffic and weather", "Auto-queues your morning audio", "Gentle calendar previews at safe moments"], cmd: "Reroute me around the bridge and start my morning playlist.", mock: "route" },
  { tag: "Rideshare & Delivery", t: "More trips. Fewer taps. Safer shifts.", d: "Confirm pickups, message customers, switch between apps, log expenses, and find the fastest route between stops — all by voice, eyes-up.", points: ["One voice across rideshare, delivery & maps", "Customer messages drafted and confirmed", "Auto-log mileage and tip totals"], cmd: "Mark this delivery complete and message the customer thanks.", mock: "reply" },
  { tag: "Road-Trippers", t: "Adventures without the second-guessing.", d: "Find scenic stops, the best coffee in town, EV charging, and a hotel for tonight — all while keeping the road in view and your hands on the wheel.", points: ["Curated stops along your route", "EV charging & restroom timing", "Share live ETA with travel buddies"], cmd: "Find a coffee shop with good reviews on the way to Tahoe.", mock: "route" },
  { tag: "Busy Parents & Pros", t: "A calmer car. A calmer you.", d: "Move that 3pm, reply to your kid's school, add milk to the list, check tomorrow's schedule — between green lights, without losing focus.", points: ["Smart calendar shuffles", "Family-aware replies", "Quick lists & reminders"], cmd: "Move my 3pm back fifteen and tell the team I'm running long.", mock: "schedule" },
];

function UseCases() {
  return (
    <PageShell>
      <section className="relative pb-16 md:pb-24">
        <Blobs variant="a" />
        <div className="container-90">
          <SectionReveal className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-widest text-[#0C8FA3]">Use cases</div>
            <h1 className="mt-3 font-display text-5xl md:text-7xl font-extrabold leading-[1.02]">A copilot that <span className="text-brand-gradient">adapts to your drive.</span></h1>
            <p className="mt-5 text-lg text-body-muted">Whatever the trip looks like, Voxtri makes it safer, calmer, and a little more delightful.</p>
          </SectionReveal>
        </div>
      </section>

      <section className="pb-16 md:pb-24 brand-gradient-soft">
        <div className="container-90">
          <Carousel
            items={CASES}
            render={(c: typeof CASES[number]) => (
              <div className="grid gap-10 rounded-[2rem] bg-white p-8 ring-1 ring-[color:var(--border)] shadow-[var(--shadow-soft)] md:grid-cols-[1.2fr_1fr] md:p-14">
                <div>
                  <div className="inline-flex items-center rounded-full brand-gradient px-3 py-1 text-xs font-semibold text-white">{c.tag}</div>
                  <h2 className="mt-4 font-display text-4xl md:text-5xl font-extrabold leading-tight">{c.t}</h2>
                  <p className="mt-4 text-body-muted">{c.d}</p>
                  <ul className="mt-5 space-y-2 text-sm text-body-muted">
                    {c.points.map((p) => <li key={p} className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#15B5C4]" />{p}</li>)}
                  </ul>
                  <div className="mt-6 rounded-2xl bg-mist p-4 font-mono text-sm text-navy-ink">
                    <div className="mb-1 text-[10px] uppercase tracking-widest text-[#0C8FA3]">You say</div>"{c.cmd}"
                  </div>
                  <div className="mt-6"><CTAButton to="/waitlist">Join the waitlist</CTAButton></div>
                </div>
                <div className="flex items-center justify-center"><AppMockup variant={c.mock as any} /></div>
              </div>
            )}
          />
        </div>
      </section>
    </PageShell>
  );
}

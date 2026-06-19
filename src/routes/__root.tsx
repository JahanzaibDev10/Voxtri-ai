import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";
import { SmoothScroll } from "../components/voxtri/SmoothScroll";

const SITE_URL = "https://voxtri.ai";
const SITE_TITLE = "Voxtri AI - Your Hands-Free Driving Copilot";
const SITE_DESCRIPTION = "Voxtri is a friendly, voice-first AI copilot for drivers. Get context-aware help across your apps while keeping your eyes on the road.";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center brand-gradient-soft px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-extrabold text-brand-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-navy-ink">Page not found</h2>
        <p className="mt-2 text-sm text-body-muted">Let's get you back on the road.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-full brand-gradient px-6 py-3 text-sm font-semibold text-white">Go home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-navy-ink">This page didn't load</h1>
        <p className="mt-2 text-sm text-body-muted">Try refreshing or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full brand-gradient px-5 py-2.5 text-sm font-semibold text-white">Try again</button>
          <a href="/" className="rounded-full border border-[color:var(--border)] bg-white px-5 py-2.5 text-sm font-semibold text-navy-ink">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "author", content: "Voxtri AI" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#15B5C4" },
      { property: "og:site_name", content: "Voxtri AI" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { property: "og:image:alt", content: "Voxtri hands-free AI driving copilot" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
    ],
    links: [
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800;900&family=Nunito:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Voxtri AI",
    url: SITE_URL,
    email: "hello@voxtri.ai",
    sameAs: [
      "https://www.linkedin.com/company/voxtrivoiceassistant/",
      "https://www.linkedin.com/in/syuzanna-sarkisyan-13a687165/",
    ],
  };

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScroll />
      <Outlet />
    </QueryClientProvider>
  );
}

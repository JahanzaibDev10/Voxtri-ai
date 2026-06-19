import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background">
      <Nav />
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="pt-24 md:pt-26"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}

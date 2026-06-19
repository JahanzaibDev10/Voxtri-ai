import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface Props {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "white";
  size?: "md" | "lg";
  onClick?: () => void;
  type?: "button" | "submit";
  showArrow?: boolean;
  className?: string;
}

export function CTAButton({
  to, href, children, variant = "primary", size = "md", onClick, type = "button", showArrow = true, className = ""
}: Props) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 will-change-transform";
  const sizes = size === "lg" ? "px-7 py-4 text-base" : "px-5 py-3 text-sm";
  const variants = {
    primary: "brand-gradient text-white shadow-[var(--shadow-glow)] hover:shadow-[0_28px_70px_-20px_rgba(21,181,196,0.65)] hover:-translate-y-0.5",
    ghost: "bg-white/70 text-navy-ink border border-[color:var(--border)] hover:bg-white",
    white: "bg-white text-navy-ink hover:bg-mist",
  };
  const inner = (
    <motion.span whileTap={{ scale: 0.97 }} className={`${base} ${sizes} ${variants[variant]} ${className}`}>
      {children}
      {showArrow && <ArrowRight className="h-4 w-4" />}
    </motion.span>
  );
  if (to) return <Link to={to}>{inner}</Link>;
  if (href) return <a href={href} target="_blank" rel="noreferrer">{inner}</a>;
  return <button type={type} onClick={onClick}>{inner}</button>;
}

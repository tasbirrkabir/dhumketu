"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { DhumketuMark } from "@/components/graphics/dhumketu-mark";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#mission", label: "Mission", index: "01" },
  { href: "#work", label: "Work", index: "02" },
  { href: "#capabilities", label: "Capabilities", index: "03" },
  { href: "#programs", label: "Programs", index: "04" },
  { href: "#media", label: "Media", index: "05" },
  { href: "#engage", label: "Engage", index: "06" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active nav item: the last nav target whose top is above the
  // viewport midline (monotonic with scroll, matches page order).
  useEffect(() => {
    const onScroll = () => {
      const midline = window.innerHeight * 0.5;
      let current = "";
      for (const item of navItems) {
        const el = document.querySelector<HTMLElement>(item.href);
        if (el && el.getBoundingClientRect().top <= midline) {
          current = item.href;
        }
      }
      setActiveSection(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on Escape; lock scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-line bg-bg-0/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <a
        href="#main"
        className="dx-skip-link bg-signal px-4 py-2 dx-label text-bg-0"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 md:h-[72px] md:px-10">
        <Link
          href="#top"
          className="group flex items-center"
          aria-label="DhumketuX — back to top"
        >
          <DhumketuMark className="text-ink" />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={activeSection === item.href ? "true" : undefined}
              className={cn(
                "group relative px-4 py-2 dx-label transition-colors",
                activeSection === item.href
                  ? "text-ink"
                  : "text-ink-2 hover:text-ink"
              )}
            >
              <span className="mr-1.5 text-[0.5625rem] text-signal/80">
                {item.index}
              </span>
              {item.label}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute inset-x-4 -bottom-px h-px bg-signal transition-transform duration-300",
                  activeSection === item.href
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                )}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#engage"
            className="group hidden items-center gap-2 border border-line-strong bg-bg-1/60 px-5 py-2.5 dx-label text-ink transition-colors hover:border-signal hover:text-signal sm:inline-flex"
          >
            Collaborate
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center border border-line-strong text-ink transition-colors hover:border-signal lg:hidden"
            aria-label="Open navigation menu"
            aria-expanded={open}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-[60] flex flex-col bg-bg-0 dx-grid-bg lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex h-16 items-center justify-between border-b border-line px-5">
              <DhumketuMark className="text-ink" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center border border-line-strong text-ink"
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-8">
              <ul className="space-y-0">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={reduce ? false : { opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                    className="border-b border-line"
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group flex min-h-[72px] items-center justify-between py-4"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="dx-label text-signal">{item.index}</span>
                        <span className="dx-display text-3xl font-semibold text-ink group-hover:text-signal">
                          {item.label}
                        </span>
                      </span>
                      <ArrowUpRight
                        className="h-5 w-5 text-ink-2 transition-colors group-hover:text-signal"
                        aria-hidden="true"
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="border-t border-line px-5 py-6">
              <a
                href="#engage"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 bg-signal px-6 py-4 dx-label font-medium text-bg-0"
              >
                Collaborate with DhumketuX
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <p className="dx-label mt-4 text-center text-ink-2">
                Bangladesh · Aerospace R&D
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

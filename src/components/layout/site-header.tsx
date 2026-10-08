"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Technology", href: "#technology" },
  { label: "Vision", href: "#vision" },
  { label: "People", href: "#people" },
  { label: "Programs", href: "#programs" },
] as const;

export function SiteHeader() {
  const [pastHero, setPastHero] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      const heroBottom = window.innerHeight * 0.82;
      setPastHero(window.scrollY > heroBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const dark = pastHero; // paper bar, ink text
  const linkTone = dark ? "text-ink" : "text-chalk";

  return (
    <>
      <header
        aria-label="Site"
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,color,border-color,backdrop-filter] duration-500 ${
          dark
            ? "border-b border-line bg-paper/90 text-ink backdrop-blur-xl"
            : "border-b border-transparent bg-transparent text-chalk"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-[1180px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a
            href="#top"
            className={`text-[1.0625rem] font-semibold tracking-[-0.02em] ${linkTone}`}
          >
            DhumketuX
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`qa-link text-sm font-medium text-[0.9375rem] ${
                  dark ? "text-ink-2 hover:text-ink" : "text-chalk-2 hover:text-chalk"
                } transition-colors`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="mailto:xdhumketu@gmail.com?subject=Collaboration"
              className={`qa-link inline-flex items-center gap-1 text-[0.9375rem] font-medium ${linkTone}`}
            >
              Collaborate
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Open menu"
            className={`-mr-2 inline-flex h-11 w-11 items-center justify-center md:hidden ${linkTone}`}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-[60] flex flex-col bg-night text-chalk"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex h-16 items-center justify-between px-5 sm:px-8">
              <span className="text-[1.0625rem] font-semibold tracking-[-0.02em]">
                DhumketuX
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-chalk"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center px-6 sm:px-8">
              <ul className="space-y-2">
                {LINKS.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={reduced ? false : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-[2.25rem] font-semibold tracking-[-0.03em] text-chalk"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-12 border-t border-night-line pt-8"
              >
                <a
                  href="mailto:xdhumketu@gmail.com?subject=Collaboration"
                  className="inline-flex items-center gap-2 text-lg font-medium text-chalk"
                >
                  Collaborate
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <p className="mt-3 text-sm text-chalk-2">xdhumketu@gmail.com</p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Menu, X, ArrowUpRight, ArrowRight } from "lucide-react";
import { projects } from "@/content/projects";
import { programs } from "@/content/team";

const EASE = [0.16, 1, 0.3, 1] as const;

const slug = (s: string) => `/work/${s}`;
const bySlug = (list: string[]) =>
  list
    .map((s) => projects.find((p) => p.slug === s))
    .filter((p): p is (typeof projects)[number] => Boolean(p));

/**
 * Primary navigation: mirrors the real dhumketux.com menu tree
 * (Aerospace / Programs / About-Company / Media) reorganized into
 * two patterns: a full-width mega panel (Aerospace) and compact
 * dropdown panels (Programs, Company, Media).
 */
const AEROSPACE_COLUMNS: { title: string; slugs: string[] }[] = [
  {
    title: "Launch Vehicles",
    slugs: ["bidrohi-sr", "ekushey-21", "nazrul-01", "putimach-01", "space-billboard", "revolation-v1", "human-spaceflight"],
  },
  {
    title: "Propulsion & Systems",
    slugs: ["agni-bina", "boson", "ibn-khaldun", "red-chili", "proloy", "satellite-systems"],
  },
  {
    title: "Aviation",
    slugs: ["uav-fleet", "bluebird-skyblade"],
  },
];

const PROGRAM_LINKS = [
  { label: "Design, Build, Fly (DBF Program)", href: "/programs#dbf" },
  { label: "Student Rocket Program", href: "/programs#student" },
  { label: "Student Satellite Program", href: "/programs#student" },
  { label: "Internship & Virtual Lab", href: "/programs#student" },
  { label: "Community Platforms", href: "/programs#community" },
];

const COMPANY_LINKS = [
  { label: "Vision", href: "/vision" },
  { label: "Team & Leadership", href: "/company#team" },
  { label: "History", href: "/company#history" },
  { label: "Collaborations", href: "/company#collaborations" },
  { label: "Policy & Core Values", href: "/company#values" },
  { label: "Social Responsibilities", href: "/company#responsibility" },
  { label: "Careers & Investments", href: "/contact" },
];

const MEDIA_LINKS = [
  { label: "Media News", href: "/media#news" },
  { label: "Space Articles", href: "/media#articles" },
  { label: "Our Social Media", href: "/media#social" },
];

type MenuKey = "aerospace" | "programs" | "company" | "media" | null;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<MenuKey>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openWith = (key: Exclude<MenuKey, null>) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenu(key);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMenu(null), 120);
  };

  const closeAll = () => setMenu(null);

  const dark = scrolled; // transparent over hero at top → glass void after scroll
  const linkTone = dark ? "text-chalk" : "text-chalk";
  const active = (prefixes: string[]) => prefixes.some((p) => pathname === p || pathname.startsWith(p + "/") || pathname.startsWith(p + "#"));

  const items: {
    key: MenuKey;
    label: string;
    href?: string;
    activePrefixes?: string[];
  }[] = [
    { key: null, label: "Home", href: "/" },
    { key: "aerospace", label: "Aerospace", activePrefixes: ["/work"] },
    { key: null, label: "Technology", href: "/technology" },
    { key: "programs", label: "Programs", activePrefixes: ["/programs"] },
    { key: "company", label: "Company", activePrefixes: ["/company", "/vision"] },
    { key: "media", label: "Media", activePrefixes: ["/media"] },
  ];

  return (
    <>
      <header
        aria-label="Site"
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,color,border-color,box-shadow,backdrop-filter] duration-500 ${
          dark
            ? "border-b border-edge bg-void/85 text-chalk shadow-[0_24px_60px_-40px_rgba(0,0,0,0.9)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent text-chalk"
        }`}
      >
        {dark && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent"
          />
        )}
        <div className="mx-auto flex h-16 w-full max-w-[1180px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            aria-label="DhumketuX home"
            className={`group flex shrink-0 items-center gap-2.5 ${linkTone}`}
          >
            <span className="relative block h-9 w-9 shrink-0 overflow-hidden rounded-xl ring-1 ring-white/15 transition-all duration-300 group-hover:ring-white/40 group-hover:shadow-[0_0_24px_-6px_rgba(255,106,61,0.45)]">
              <Image
                src="/media/dhumketux-logo.png"
                alt=""
                fill
                priority
                sizes="36px"
                className="object-cover"
              />
            </span>
            <span className="font-display text-[1.0625rem] font-semibold tracking-[-0.015em]">
              DhumketuX
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex xl:gap-7">
            {items.map((item) =>
              item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`qa-link text-[0.9375rem] font-medium transition-colors ${
                    item.activePrefixes && active(item.activePrefixes)
                      ? "text-chalk"
                      : "text-chalk-2 hover:text-chalk"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.key as string}
                  type="button"
                  aria-expanded={menu === item.key}
                  aria-haspopup="true"
                  onClick={() => (menu === item.key ? setMenu(null) : openWith(item.key as Exclude<MenuKey, null>))}
                  onMouseEnter={() => openWith(item.key as Exclude<MenuKey, null>)}
                  className={`qa-link inline-flex items-center gap-1 text-[0.9375rem] font-medium transition-colors ${
                    (item.activePrefixes && active(item.activePrefixes)) || menu === item.key
                      ? "text-chalk"
                      : "text-chalk-2 hover:text-chalk"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-300 ${menu === item.key ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
              ),
            )}
            <Link
              href="/contact#form"
              className="group btn-chalk shrink-0 gap-1.5 whitespace-nowrap px-4.5 py-2 text-[0.9375rem] font-semibold"
            >
              Start a conversation
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Open menu"
            className={`-mr-2 inline-flex h-11 w-11 items-center justify-center lg:hidden ${linkTone}`}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop dropdown panels */}
        <AnimatePresence>
          {menu && (
            <motion.div
              key={menu}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: EASE }}
              onMouseEnter={() => openWith(menu)}
              onMouseLeave={scheduleClose}
              className={`absolute inset-x-0 top-full hidden border-b shadow-[0_48px_90px_-24px_rgba(0,0,0,0.75)] backdrop-blur-2xl lg:block ${
                "border-edge bg-void/95"
              }`}
            >
              <div className="mx-auto w-full max-w-[1180px] px-5 py-10 sm:px-8 lg:px-12">
                {menu === "aerospace" && (
                  <div className="grid grid-cols-4 gap-10">
                    {AEROSPACE_COLUMNS.map((col) => (
                      <div key={col.title}>
                        <p className="text-xs font-medium uppercase tracking-[0.08em] text-chalk-3">{col.title}</p>
                        <ul className="mt-4 space-y-2.5">
                          {bySlug(col.slugs).map((p) => (
                            <li key={p.slug}>
                              <Link
                                href={slug(p.slug)}
                                onClick={closeAll}
                                className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium text-chalk"
                              >
                                {p.name}
                                <ArrowRight
                                  className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-60"
                                  aria-hidden="true"
                                />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="border-l border-edge pl-10">
                      <p className="text-xs font-medium uppercase tracking-[0.08em] text-chalk-3">Explore</p>
                      <ul className="mt-4 space-y-2.5">
                        <li>
                          <Link href="/work" onClick={closeAll} className="qa-link text-[0.9375rem] font-medium text-chalk">
                            All projects
                          </Link>
                        </li>
                        <li>
                          <Link href="/technology" onClick={closeAll} className="qa-link text-[0.9375rem] font-medium text-chalk">
                            Technological capabilities
                          </Link>
                        </li>
                      </ul>
                      <p className="mt-8 max-w-[24ch] text-sm leading-relaxed text-chalk-2">
                        {projects.length} systems, from the first engine tested in Bangladesh to future launch vehicles.
                      </p>
                    </div>
                  </div>
                )}

                {menu !== "aerospace" && (
                  <div className="grid grid-cols-[1fr_1.2fr] gap-16">
                    <ul className="space-y-3">
                      {(menu === "programs" ? PROGRAM_LINKS : menu === "company" ? COMPANY_LINKS : MEDIA_LINKS).map((l) => (
                        <li key={l.label}>
                          <Link
                            href={l.href}
                            onClick={closeAll}
                            className="qa-link text-lg font-medium text-chalk"
                          >
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="self-end border-l border-edge pl-10">
                      {menu === "programs" && (
                        <p className="max-w-[36ch] text-sm leading-relaxed text-chalk-2">
                          {programs.dbf.partners.join(" · ")}: a real aerospace pipeline for university teams, from proposal to national fly-off.
                        </p>
                      )}
                      {menu === "company" && (
                        <p className="max-w-[36ch] text-sm leading-relaxed text-chalk-2">
                          {projects.length} systems, 50+ people, one national mission: aerospace from Bangladesh, on the public record.
                        </p>
                      )}
                      {menu === "media" && (
                        <p className="max-w-[36ch] text-sm leading-relaxed text-chalk-2">
                          National television, press and the DhumketuX archive: every milestone documented at the source.
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-night text-chalk"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <div className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-edge bg-night px-5 sm:px-8">
              <span className="flex items-center gap-2.5">
                <span className="relative block h-9 w-9 shrink-0 overflow-hidden rounded-xl ring-1 ring-white/15">
                  <Image
                    src="/media/dhumketux-logo.png"
                    alt=""
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                </span>
                <span className="font-display text-[1.0625rem] font-semibold tracking-[-0.015em]">DhumketuX</span>
              </span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-chalk"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile" className="px-6 pb-16 pt-8 sm:px-8">
              {/* Aerospace accordion */}
              <MobileGroup
                label="Aerospace"
                open={mobileGroup === "aerospace"}
                onToggle={() => setMobileGroup(mobileGroup === "aerospace" ? null : "aerospace")}
              >
                {AEROSPACE_COLUMNS.map((col) => (
                  <div key={col.title} className="mt-5 first:mt-0">
                    <p className="text-xs font-medium uppercase tracking-[0.08em] text-chalk-2/80">{col.title}</p>
                    <ul className="mt-2.5 space-y-2">
                      {bySlug(col.slugs).map((p) => (
                        <li key={p.slug}>
                          <Link href={slug(p.slug)} onClick={() => setMobileOpen(false)} className="text-[0.9375rem] text-chalk-2">
                            {p.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Link href="/work" onClick={() => setMobileOpen(false)} className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-chalk">
                  All projects <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </MobileGroup>

              <MobileLink href="/technology" label="Technology" onNavigate={() => setMobileOpen(false)} />

              <MobileGroup
                label="Programs"
                open={mobileGroup === "programs"}
                onToggle={() => setMobileGroup(mobileGroup === "programs" ? null : "programs")}
              >
                <ul className="space-y-2.5">
                  {PROGRAM_LINKS.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} onClick={() => setMobileOpen(false)} className="text-[0.9375rem] text-chalk-2">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </MobileGroup>

              <MobileGroup
                label="Company"
                open={mobileGroup === "company"}
                onToggle={() => setMobileGroup(mobileGroup === "company" ? null : "company")}
              >
                <ul className="space-y-2.5">
                  {COMPANY_LINKS.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} onClick={() => setMobileOpen(false)} className="text-[0.9375rem] text-chalk-2">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </MobileGroup>

              <MobileGroup
                label="Media"
                open={mobileGroup === "media"}
                onToggle={() => setMobileGroup(mobileGroup === "media" ? null : "media")}
              >
                <ul className="space-y-2.5">
                  {MEDIA_LINKS.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} onClick={() => setMobileOpen(false)} className="text-[0.9375rem] text-chalk-2">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </MobileGroup>

              <div className="mt-12 border-t border-edge pt-8">
                <Link
                  href="/contact#form"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 text-lg font-medium text-chalk"
                >
                  Start a conversation <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <p className="mt-3 text-sm text-chalk-2">xdhumketu@gmail.com</p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileLink({
  href,
  label,
  onNavigate,
}: {
  href: string;
  label: string;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="block border-b border-edge py-4 text-[1.75rem] font-semibold tracking-[-0.03em] text-chalk"
    >
      {label}
    </Link>
  );
}

function MobileGroup({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-edge">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-4 text-left text-[1.75rem] font-semibold tracking-[-0.03em] text-chalk"
      >
        {label}
        <ChevronDown className={`h-5 w-5 text-chalk-2 transition-transform duration-300 ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

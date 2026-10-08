"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { EASE } from "./reveal";

/**
 * StatusDot — small status indicator: live (go), active (hold/amber), planned (future).
 */
export function StatusDot({ tone }: { tone: "live" | "active" | "planned" }) {
  const color =
    tone === "live" ? "bg-go" : tone === "active" ? "bg-hold" : "bg-future";
  return (
    <span
      className={`inline-block h-1.5 w-1.5 rounded-full ${color} ${tone === "live" ? "pulse-ember" : ""}`}
      aria-hidden="true"
    />
  );
}

/**
 * Counter — animated numeral. Parses "50+", "250+", "2018" and counts
 * the numeric part up on first view; suffix/prefix preserved.
 */
export function Counter({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const match = value.match(/^(\D*?)(\d[\d,]*)(.*)$/);
  const [, prefix = "", num, suffix = ""] = match ?? ["", "", "", value];
  const target = Number(num.replace(/,/g, ""));
  const [display, setDisplay] = useState(reduced || !num ? target : 0);

  useEffect(() => {
    if (!inView || reduced || !num) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: EASE,
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduced, target, num]);

  return (
    <span ref={ref} className={`qa-data ${className}`}>
      {prefix}
      {num ? display.toLocaleString("en-US").replace(/,/g, num.includes(",") ? "," : "") : ""}
      {suffix}
    </span>
  );
}

/**
 * Marquee — infinite horizontal ticker of sourced milestones.
 * Pauses on hover; static under reduced motion (CSS guard).
 */
export function Marquee({ items }: { items: { year: string; title: string }[] }) {
  const row = (ariaHidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden || undefined}>
      {items.map((m, i) => (
        <span key={`${m.title}-${i}`} className="flex items-center whitespace-nowrap">
          <span className="qa-data text-xs uppercase tracking-[0.14em] text-amber">{m.year}</span>
          <span className="mx-4 text-chalk-3" aria-hidden="true">/</span>
          <span className="text-sm font-medium text-chalk-2">{m.title}</span>
          <span className="mx-8 inline-block h-1 w-1 rounded-full bg-ember/70" aria-hidden="true" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee relative overflow-hidden border-y border-edge bg-night py-4">
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
      {/* Edge fades */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-void to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-void to-transparent" />
    </div>
  );
}

/**
 * ArrowLink — editorial link with the signature hover arrow.
 */
export function ArrowLink({
  href,
  children,
  tone = "chalk",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "chalk" | "ember";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-[0.9375rem] font-medium ${
        tone === "ember" ? "text-amber" : "text-chalk"
      } ${className}`}
    >
      {children}
      <ArrowUpRight
        className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </Link>
  );
}

/**
 * CtaBand — closing conversion panel: image or glow backdrop under glass,
 * oversized title with serif accent, primary gradient + secondary ghost buttons.
 */
export function CtaBand({
  image,
  imageAlt = "",
  kicker,
  title,
  accent,
  copy,
  primary,
  secondary,
  caption,
}: {
  image?: string;
  imageAlt?: string;
  kicker: string;
  title: string;
  accent?: string;
  copy: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
  caption?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <section aria-label="Call to action" className="px-5 pb-20 pt-10 sm:px-8 lg:px-12 lg:pb-28">
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: EASE }}
        className="relative mx-auto w-full max-w-[1180px] overflow-hidden rounded-3xl border border-edge"
      >
        {image ? (
          <>
            <Image src={image} alt={imageAlt} fill sizes="(max-width: 1180px) 100vw, 1180px" className="object-cover" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-void/60 via-void/45 to-void/85" />
          </>
        ) : (
          <>
            <div aria-hidden="true" className="absolute inset-0 bg-night-2" />
            <div aria-hidden="true" className="starfield absolute inset-0 opacity-70" />
          </>
        )}
        <div aria-hidden="true" className="glow-ember left-[10%] top-[-30%] h-[300px] w-[480px]" />

        <div className="relative z-10 flex flex-col items-start gap-8 px-6 py-14 sm:px-12 sm:py-20">
          <p className="flex items-center gap-3 text-sm font-medium text-amber">
            <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-[#ff5a2c] to-[#ffb25b]" />
            <span className="qa-data uppercase tracking-[0.18em]">{kicker}</span>
          </p>
          <h2 className="qa-display max-w-[16ch] text-[clamp(2.2rem,5.4vw,4.25rem)] text-chalk">
            {title}
            {accent ? <span className="qa-serif font-normal text-ember-gradient"> {accent}</span> : null}
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-chalk-2">{copy}</p>
          <div className="mt-2 flex flex-wrap items-center gap-4">
            <Link
              href={primary.href}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff5a2c] to-[#ffb25b] px-7 py-3 text-[0.9375rem] font-semibold text-[#1a0c05] shadow-[0_0_32px_rgba(255,90,44,0.4)] transition-[box-shadow,filter] duration-300 hover:shadow-[0_0_44px_rgba(255,90,44,0.6)] hover:brightness-110"
            >
              {primary.label}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            {secondary && (
              <Link
                href={secondary.href}
                className="inline-flex items-center gap-2 rounded-full border border-edge-strong px-7 py-3 text-[0.9375rem] font-medium text-chalk transition-colors hover:border-chalk-2"
              >
                {secondary.label}
              </Link>
            )}
          </div>
          {caption && <p className="text-[11px] text-chalk-3">{caption}</p>}
        </div>
      </motion.div>
    </section>
  );
}

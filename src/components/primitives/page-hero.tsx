"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "./reveal";

/**
 * CinematicHero — full-bleed image hero for interior pages.
 * Parallax image under gradient scrims, mono kicker with ember dash,
 * oversized display title with optional serif-accent line, lede,
 * optional glass chips, honest image caption, scroll cue.
 */
export function CinematicHero({
  image,
  alt,
  kicker,
  title,
  accent,
  lede,
  chips,
  caption,
  children,
  tall = false,
}: {
  image: string;
  alt: string;
  kicker: string;
  title: string;
  /** Optional italic serif line shown under the title */
  accent?: string;
  lede?: string;
  /** Small glass fact chips under the lede */
  chips?: { label: string; value: string }[];
  caption?: string;
  children?: ReactNode;
  tall?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.02, 1.1]);

  return (
    <section
      ref={ref}
      aria-label={typeof title === "string" ? title : "Page"}
      className={`relative flex flex-col overflow-hidden bg-void text-chalk ${tall ? "min-h-[92svh]" : "min-h-[78svh]"}`}
    >
      {/* Parallax image */}
      <motion.div
        style={reduced ? undefined : { y, scale }}
        className="absolute inset-0"
        aria-hidden="true"
      >
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      </motion.div>

      {/* Scrims — legibility from any viewport */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-void/80 via-void/35 to-void" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-void/70 via-transparent to-void/30" />

      {/* Content */}
      <div
        className={`relative z-10 mx-auto flex w-full max-w-[1180px] flex-1 flex-col justify-end px-5 pb-14 pt-36 sm:px-8 sm:pb-20 lg:px-12 ${
          tall ? "min-h-[92svh]" : "min-h-[78svh]"
        }`}
      >
        <Reveal>
          <p className="flex items-center gap-3 text-sm font-medium text-amber">
            <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-[#ff5a2c] to-[#ffb25b]" />
            <span className="qa-data uppercase tracking-[0.18em]">{kicker}</span>
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="qa-display mt-5 max-w-[14ch] text-[clamp(2.7rem,6.8vw,5.75rem)] text-chalk">
            {title}
            {accent ? (
              <>
                {" "}
                <span className="qa-serif font-normal text-ember-gradient">{accent}</span>
              </>
            ) : null}
          </h1>
        </Reveal>
        {lede && (
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-chalk-2">{lede}</p>
          </Reveal>
        )}
        {chips && chips.length > 0 && (
          <Reveal delay={0.24}>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {chips.map((c) => (
                <li
                  key={c.label}
                  className="glass rounded-full px-4 py-2 text-xs text-chalk-2"
                >
                  <span className="qa-data text-chalk">{c.value}</span>
                  <span className="mx-2 text-chalk-3" aria-hidden="true">·</span>
                  {c.label}
                </li>
              ))}
            </ul>
          </Reveal>
        )}
        {children}
      </div>

      {/* Caption + scroll cue */}
      {caption && (
        <p className="pointer-events-none absolute bottom-4 right-5 z-10 max-w-[46ch] text-right text-[11px] leading-relaxed text-chalk-3 sm:right-8 lg:right-12">
          {caption}
        </p>
      )}
      <motion.div
        aria-hidden="true"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 sm:block"
      >
        <motion.div
          animate={reduced ? undefined : { y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-chalk-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}

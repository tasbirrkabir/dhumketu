"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * HERO: full-viewport cinematic opening.
 * Concept night-launch image with parallax under layered scrims,
 * oversized display headline with serif + ember accents, glass stat
 * chips, gradient CTA, honest concept-art caption and scroll cue.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.02, 1.12]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      aria-label="Introduction"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-void text-chalk"
    >
      {/* Parallax image */}
      <motion.div style={reduced ? undefined : { y, scale }} className="absolute inset-0" aria-hidden="true">
        <Image
          src="/media/concept-night-launch.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Scrims */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-void/75 via-void/30 to-void" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-void/65 via-transparent to-transparent" />
      <div aria-hidden="true" className="glow-ember bottom-[-10%] left-[8%] h-[420px] w-[620px]" />
      <div aria-hidden="true" className="glow-brand right-[-6%] top-[6%] h-[380px] w-[560px] opacity-80" />

      {/* Content */}
      <motion.div
        style={reduced ? undefined : { opacity: fade }}
        className="relative z-10 mx-auto flex w-full max-w-[1180px] flex-1 flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-12"
      >
        <motion.h1
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.22, ease: EASE }}
          className="qa-display mt-6 max-w-[13ch] text-[clamp(2.9rem,8.4vw,7.25rem)]"
        >
          Building{" "}
          <span className="qa-serif font-normal">aerospace</span>{" "}
          from Bangladesh.
        </motion.h1>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.42, ease: EASE }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-chalk-2 sm:text-xl"
        >
          Rockets. Propulsion. Autonomous systems. Space technologies.
        </motion.p>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full bg-chalk px-7 py-3 text-[0.9375rem] font-semibold text-[#0b0b0d] transition-colors duration-300 hover:bg-[#e7e4dc]"
          >
            Explore our work
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/vision"
            className="inline-flex items-center gap-2 rounded-full border border-edge-strong px-7 py-3 text-[0.9375rem] font-medium text-chalk transition-colors hover:border-chalk-2"
          >
            Our vision
          </Link>
        </motion.div>

        <motion.ul
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.75, ease: EASE }}
          className="mt-10 flex flex-wrap gap-2.5"
        >
          {[
            { v: "50+", l: "engineers & researchers" },
            { v: "3", l: "successful static-fire tests" },
            { v: "250+", l: "journal publications" },
          ].map((s) => (
            <li key={s.l} className="glass rounded-full px-4 py-2 text-xs text-chalk-2">
              <span className="qa-data text-chalk">{s.v}</span>
              <span className="mx-2 text-chalk-3" aria-hidden="true">·</span>
              {s.l}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Bottom bar: scroll cue + honest caption */}
      <motion.div
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative z-10 mx-auto flex w-full max-w-[1180px] items-center justify-between px-5 pb-6 sm:px-8 lg:px-12"
      >
        <motion.div
          animate={reduced ? undefined : { y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="flex items-center gap-2 text-chalk-2"
        >
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
          <span className="qa-data text-xs uppercase tracking-[0.16em]">Scroll</span>
        </motion.div>
        <p className="max-w-[52ch] text-right text-[11px] leading-relaxed text-chalk-3">
          Concept visualization of a Bidrohi-class lift-off, illustrative art, not an
          actual DhumketuX launch photograph.
        </p>
      </motion.div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { org } from "@/content/org";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * HERO: full-viewport cinematic opening.
 * Concept night-launch image with a Ken-Burns settle + parallax under
 * layered scrims, oversized display headline with serif accent, a
 * hairline-divided stat console (mission-control telemetry strip),
 * honest concept-art caption and scroll cue.
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
      {/* Parallax image + cinematic settle */}
      <motion.div style={reduced ? undefined : { y, scale }} className="absolute inset-0" aria-hidden="true">
        <div className="anim-kenburns absolute inset-0">
          <Image
            src="/media/concept-night-launch.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Scrims */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-void/78 via-void/32 to-void" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-void/68 via-transparent to-transparent" />
      <div aria-hidden="true" className="spot" />
      <div aria-hidden="true" className="glow-ember bottom-[-10%] left-[8%] h-[420px] w-[620px]" />
      <div aria-hidden="true" className="glow-brand right-[-6%] top-[6%] h-[380px] w-[560px] opacity-80" />

      {/* Content */}
      <motion.div
        style={reduced ? undefined : { opacity: fade }}
        className="relative z-10 mx-auto flex w-full max-w-[1180px] flex-1 flex-col justify-end px-5 pb-14 pt-32 sm:px-8 sm:pb-16 lg:px-12"
      >
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: EASE }}
          className="eyebrow"
        >
          {org.legalName}
        </motion.p>

        <motion.h1
          initial={reduced ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.24, ease: EASE }}
          className="qa-display mt-7 max-w-[12ch] text-[clamp(3rem,8.8vw,7.75rem)]"
        >
          Building{" "}
          <span className="qa-serif font-normal">aerospace</span>{" "}
          from Bangladesh.
        </motion.h1>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.44, ease: EASE }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-chalk-2 sm:text-xl"
        >
          Rockets. Propulsion. Autonomous systems. Space technologies.
          <span className="mt-2 block text-base text-chalk-2/85 sm:text-lg">
            The first commercial civilian space company in Bangladesh.
          </span>
        </motion.p>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.56, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/work"
            className="btn-chalk px-7 py-3.5 text-base font-semibold"
          >
            Explore our work
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/vision"
            className="btn-ghost px-7 py-3.5 text-base font-medium"
          >
            Our vision
          </Link>
        </motion.div>

        {/* Stat console: one hairline-divided telemetry strip */}
        <motion.dl
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.78, ease: EASE }}
          className="glass-strong stat-console mt-12 w-full max-w-3xl overflow-hidden rounded-2xl"
        >
          {[
            { v: "50+", l: "engineers & researchers" },
            { v: "3", l: "successful static-fire tests" },
            { v: "250+", l: "journal publications" },
          ].map((s) => (
            <div key={s.l} className="px-6 py-5">
              <dd className="qa-stat text-[1.75rem] sm:text-[2rem]">{s.v}</dd>
              <dt className="mt-1.5 text-[0.8125rem] leading-snug text-chalk-2">{s.l}</dt>
            </div>
          ))}
        </motion.dl>
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

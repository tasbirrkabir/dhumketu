"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * HERO — a quiet, cinematic opening.
 * One statement with a serif-italic accent word, one sub-line, two links,
 * then a full-bleed real engine static-fire photograph over an ember glow.
 */
export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section aria-label="Introduction" className="night relative overflow-hidden bg-night text-chalk">
      <div className="glow-ember left-[-8%] top-[8%] h-[480px] w-[640px]" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[92svh] w-full max-w-[1180px] flex-col justify-end px-5 pb-10 pt-32 sm:px-8 sm:pb-14 lg:px-12">
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="text-sm font-medium text-chalk-2"
        >
          Dhumketu Exploration Technologies Limited
        </motion.p>

        <motion.h1
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.22, ease: EASE }}
          className="qa-display mt-6 max-w-[13ch] text-[clamp(2.9rem,8.4vw,7.25rem)] text-chalk"
        >
          Building{" "}
          <span className="qa-serif font-normal text-chalk-2">aerospace</span> from
          Bangladesh.
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
          className="mt-10 flex flex-wrap items-center gap-x-9 gap-y-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium text-chalk"
          >
            Explore our work
            <ArrowDown
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
              aria-hidden="true"
            />
          </a>
          <Link
            href="/vision"
            className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium text-chalk-2 transition-colors hover:text-chalk"
          >
            Our vision
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </div>

      <motion.figure
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
        className="relative"
      >
        <motion.div
          initial={reduced ? false : { scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: EASE }}
          className="relative h-[52svh] w-full sm:h-[64svh]"
        >
          <Image
            src="/media/engine-static-fire-test.jpg"
            alt="Static fire test of a DhumketuX liquid rocket engine at night, flame extending across the test stand"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <figcaption className="pointer-events-none absolute bottom-4 left-5 text-xs text-chalk-2/90 sm:left-8 lg:left-12">
          Liquid rocket engine static fire test — DhumketuX test stand
        </figcaption>
      </motion.figure>
    </section>
  );
}

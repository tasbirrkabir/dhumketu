"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { org } from "@/content/org";

/**
 * SEC.00 — HERO
 * Cinematic full-bleed atmospheric image with a restrained technical overlay.
 * Message per PRD §6: "BUILDING AEROSPACE FROM BANGLADESH."
 */
export function Hero() {
  const reduce = useReducedMotion();

  const ease = [0.22, 1, 0.36, 1] as const;
  const fadeUp = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease },
        };

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-bg-0"
    >
      {/* Atmospheric concept image (decorative — not DhumketuX hardware) */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/media/hero-launch.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-80"
        />
        {/* readability scrims */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-0/85 via-bg-0/35 to-bg-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-0/80 via-transparent to-bg-0/40" />
      </div>

      {/* corner technical metadata */}
      <div className="pointer-events-none absolute inset-x-0 top-24 z-10 hidden md:block" aria-hidden="true">
        <div className="mx-auto flex max-w-[1600px] justify-between px-10">
          <p className="dx-label text-ink-2/80">{org.positioning}</p>
          <p className="dx-label text-ink-2/80">{org.launchSite.coords}</p>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-end px-5 pb-16 pt-36 md:px-10 md:pb-24">
        <motion.p
          {...fadeUp(0.1)}
          className="dx-label flex items-center gap-3 text-ink-1"
        >
          <span className="inline-block h-1.5 w-1.5 bg-signal" aria-hidden="true" />
          Bangladesh · Aerospace R&D · Est. {org.founded}
        </motion.p>

        <h1 className="dx-display mt-6 max-w-5xl text-[clamp(2.75rem,8.5vw,7.5rem)] font-semibold text-ink">
          {["BUILDING", "AEROSPACE"].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                {...fadeUp(0.25 + i * 0.12)}
              >
                {line}
              </motion.span>
            </span>
          ))}
          <span className="block overflow-hidden">
            <motion.span
              className="block text-signal"
              {...fadeUp(0.49)}
            >
              FROM BANGLADESH.
            </motion.span>
          </span>
        </h1>

        <motion.div
          {...fadeUp(0.65)}
          className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-xl">
            <p className="text-base leading-relaxed text-ink-1 md:text-lg">
              Dhumketu Exploration Technologies Limited builds rockets,
              propulsion, autonomous systems and space technologies — an
              aerospace R&D organization working toward affordable,
              responsible access to space.
            </p>
            <p className="dx-label mt-4 text-ink-2">
              Rockets · Propulsion · Autonomous Systems · Space Technologies
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#work"
              className="group inline-flex items-center justify-center gap-2 bg-signal px-7 py-4 dx-label font-medium text-bg-0 transition-opacity hover:opacity-90"
            >
              Explore Our Work
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="#vision"
              className="inline-flex items-center justify-center gap-2 border border-line-strong px-7 py-4 dx-label text-ink transition-colors hover:border-signal hover:text-signal"
            >
              Our Vision
            </Link>
          </div>
        </motion.div>

        {/* bottom rule with scroll cue */}
        <motion.div
          {...fadeUp(0.85)}
          className="mt-14 flex items-center justify-between border-t border-line pt-5"
        >
          <p className="dx-label text-ink-2">
            {org.legalName}
          </p>
          <Link
            href="#proof"
            className="group flex items-center gap-2 dx-label text-ink-2 transition-colors hover:text-ink"
            aria-label="Scroll to overview"
          >
            Scroll
            <ArrowDown className="h-3.5 w-3.5 animate-bounce motion-reduce:animate-none" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

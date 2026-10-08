"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { firsts } from "@/content/org";

/**
 * SEC.11 — FINAL CTA
 * Closing statement (PRD §6 Section 10): "THE NEXT CHAPTER STARTS HERE."
 * Backed by the proof ledger, not decoration.
 */
export function FinalCta() {
  const reduce = useReducedMotion();
  return (
    <section
      id="next"
      aria-label="Closing call to action"
      className="relative overflow-hidden border-t border-line bg-bg-0"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/media/cta-horizon.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-0 via-bg-0/60 to-bg-0" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="dx-label text-ink-1"
        >
          Final Transmission
        </motion.p>

        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="dx-display mt-6 max-w-5xl text-[clamp(2.5rem,7vw,6.5rem)] font-semibold text-ink"
        >
          THE NEXT CHAPTER
          <br />
          STARTS <span className="text-signal">HERE.</span>
        </motion.h2>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center"
        >
          <Link
            href="#engage"
            className="group inline-flex w-fit items-center gap-2 bg-signal px-8 py-4 dx-label font-medium text-bg-0 transition-opacity hover:opacity-90"
          >
            Build with DhumketuX
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
          <Link
            href="#milestones"
            className="inline-flex w-fit items-center gap-2 border border-line-strong px-8 py-4 dx-label text-ink transition-colors hover:border-signal hover:text-signal"
          >
            See the milestones
          </Link>
        </motion.div>

        {/* Proof echo */}
        <motion.ul
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 grid gap-px border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4"
          aria-label="Key achievements recap"
        >
          {firsts.map((f) => (
            <li key={f.title} className="pr-6">
              <p className="text-sm font-medium leading-snug text-ink">
                {f.title}
              </p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

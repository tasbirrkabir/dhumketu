"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { visionPillars } from "@/content/vision";
import { EASE } from "@/components/primitives/reveal";

/**
 * VISION: full-bleed orbital-dawn band with parallax, giant statement,
 * the three pillars as glass chips and the honest future-work disclaimer.
 */
export function Vision() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      aria-label="Vision"
      className="relative flex min-h-[88svh] flex-col overflow-hidden bg-void text-chalk"
    >
      <motion.div style={reduced ? undefined : { y, scale: 1.12 }} className="absolute inset-0" aria-hidden="true">
        <Image
          src="/media/concept-orbit-dawn.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-void/70 via-void/40 to-void" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-void/60 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1180px] flex-1 flex-col justify-end px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.08, ease: EASE }}
          className="qa-display mt-6 max-w-[16ch] text-[clamp(2.4rem,6.4vw,5.5rem)]"
        >
          A spacefaring{" "}
          <span className="qa-serif font-normal text-ember-gradient">Bangladesh</span>,
          reached responsibly.
        </motion.h2>

        <motion.ul
          initial={reduced ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {visionPillars.map((p) => (
            <li
              key={p.id}
              className="glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-chalk"
            >
              {p.title}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
        >
          <Link
            href="/vision"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff5a2c] via-[#ff7a3a] to-[#ffb25b] px-6 py-3 text-[0.9375rem] font-semibold text-[#1a0c05] shadow-[0_0_28px_rgba(255,106,61,0.35)] transition-[box-shadow,filter] duration-300 hover:shadow-[0_0_40px_rgba(255,106,61,0.55)] hover:brightness-110"
          >
            Read the full vision
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
          <p className="max-w-[52ch] text-xs leading-relaxed text-chalk-3">
            Vision statements describe long-term goals, not current capabilities.
            Imagery: concept art.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

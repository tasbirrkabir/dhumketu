"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeader } from "@/components/primitives/section-header";
import { Reveal } from "@/components/primitives/reveal";
import { capabilityStack, stackChain } from "@/content/capabilities";

/**
 * SEC.04 — CAPABILITY SYSTEM
 * The engineering stack as an interactive index: chain overview → expandable
 * capability rows (per PRD §6 Section 04, IA.md). Server-safe data, client state.
 */
export function CapabilitySection() {
  const [openId, setOpenId] = useState<string | null>("flight-systems");
  const reduce = useReducedMotion();

  return (
    <section
      id="capabilities"
      aria-label="Engineering capabilities"
      className="border-t border-line bg-bg-1 dx-grid-bg"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-32">
        <SectionHeader
          index="05"
          eyebrow="Capabilities"
          title={
            <>
              One stack, end to end.
            </>
          }
          description="DhumketuX works at the intersection of air, space and ground systems — full-stack engineering rather than isolated parts, designed to evolve and scale inside Bangladesh."
        />

        {/* Stack chain */}
        <Reveal className="mt-10 md:mt-14">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border border-line bg-bg-0/70 px-5 py-4">
            {stackChain.map((step, i) => (
              <span key={step} className="flex items-center gap-3">
                <span className="dx-label text-ink-1">{step}</span>
                {i < stackChain.length - 1 ? (
                  <span className="h-px w-6 bg-signal/60" aria-hidden="true" />
                ) : null}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Capability accordion index */}
        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ul className="border-t border-line">
              {capabilityStack.map((cap) => {
                const open = openId === cap.id;
                return (
                  <li key={cap.id} className="border-b border-line">
                    <button
                      type="button"
                      onClick={() => setOpenId(open ? null : cap.id)}
                      aria-expanded={open}
                      className="group flex w-full items-center gap-5 py-5 text-left"
                    >
                      <span
                        className={
                          "dx-num shrink-0 text-xs transition-colors " +
                          (open ? "text-signal" : "text-ink-2")
                        }
                      >
                        {cap.index}
                      </span>
                      <span
                        className={
                          "flex-1 font-display text-lg font-medium transition-colors md:text-xl " +
                          (open ? "text-ink" : "text-ink-1 group-hover:text-ink")
                        }
                      >
                        {cap.title}
                      </span>
                      <Plus
                        className={
                          "h-4 w-4 shrink-0 transition-transform duration-300 " +
                          (open ? "rotate-45 text-signal" : "text-ink-2")
                        }
                        aria-hidden="true"
                      />
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: open ? "auto" : 0,
                        opacity: open ? 1 : 0,
                      }}
                      transition={
                        reduce
                          ? { duration: 0 }
                          : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
                      }
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pl-9 pr-2 md:pl-12">
                        <p className="max-w-xl text-sm leading-relaxed text-ink-1">
                          {cap.summary}
                        </p>
                        <ul className="mt-4 space-y-2">
                          {cap.points.map((p) => (
                            <li
                              key={p}
                              className="flex gap-3 text-sm leading-relaxed text-ink-1"
                            >
                              <span
                                className="mt-2 h-1 w-1 shrink-0 bg-signal"
                                aria-hidden="true"
                              />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Side panel — testing culture statement (from capabilities page §9) */}
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="border border-line bg-bg-0 p-6 md:p-8">
                <p className="dx-label text-signal">Operating Principle</p>
                <p className="dx-display mt-4 text-2xl font-semibold leading-tight text-ink md:text-3xl">
                  build → test → document → improve
                </p>
                <p className="mt-5 text-sm leading-relaxed text-ink-1 md:text-base">
                  Testing is central to the engineering culture. Every lab or
                  field test is treated as a structured learning opportunity —
                  with test reports, configuration tracking and traceability
                  behind each iteration.
                </p>
                <div className="mt-6 space-y-3 border-t border-line pt-5">
                  {[
                    "Ground & static tests — thrust runs, fit checks, sensor calibration",
                    "Field trials — incremental levels, go/no-go criteria, structured debriefs",
                    "Documentation & traceability — reports, configuration tracking",
                  ].map((line) => (
                    <p key={line} className="dx-label leading-relaxed text-ink-2">
                      {line}
                    </p>
                  ))}
                </div>
                <p className="mt-6 border-t border-line pt-5 text-xs leading-relaxed text-ink-2">
                  Source: dhumketux.com/technological-capabilities
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

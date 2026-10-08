"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  /** Delay in seconds */
  delay?: number;
  direction?: RevealDirection;
  /** Travel distance in px (when motion is allowed) */
  distance?: number;
  duration?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "span" | "figure" | "header" | "footer";
}

const offsets: Record<RevealDirection, { x?: number; y?: number }> = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: 24 },
  right: { x: -24 },
  none: {},
};

/** Scroll-entrance reveal wrapper (reduced-motion aware). */
export function Reveal({
  children,
  delay = 0,
  direction = "up",
  distance,
  duration = 0.6,
  className,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();

  const Component = motion[as] as typeof motion.div;

  if (reduce) {
    const Plain = as as "div";
    return <Plain className={className}>{children}</Plain>;
  }

  const base = offsets[direction];
  const offset = distance !== undefined
    ? {
        ...(base.x !== undefined ? { x: distance } : {}),
        ...(base.y !== undefined ? { y: distance } : {}),
      }
    : base;

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
    >
      {children}
    </Component>
  );
}

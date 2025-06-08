"use client";

import { cn } from "../../lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React from "react";

interface CardSpotlightProps {
  children: React.ReactNode;
  /** Extra utility classes */
  className?: string;
  /** Radius of the hover mask (px) */
  radius?: number;
  /** Gradient start color (hover) */
  from?: string;
  /** Gradient end color (hover) */
  to?: string;
  /** Click handler – makes the whole card interactive */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

/**
 * Hover-glow card that can now act like a button via the onClick prop.
 */
export function CardSpotlight({
  children,
  className,
  radius = 260,
  from = "#334155",
  to = "#334155",
  onClick,
}: CardSpotlightProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  return (
    <div
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      // onKeyDown={(e) => {
      //   if (onClick && (e.key === "Enter" || e.key === " ")) onClick(e);
      // }}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative rounded-xl border border-neutral-700 bg-neutral-900 p-6 group overflow-hidden",
        onClick && "cursor-pointer hover:shadow-lg transition-shadow",
        className
      )}
    >
      {/* Gradient spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${from}, ${to})`,
          maskImage: useMotionTemplate`
            radial-gradient(${radius}px at ${mouseX}px ${mouseY}px, white, transparent 65%)
          `,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(${radius}px at ${mouseX}px ${mouseY}px, white, transparent 65%)
          `,
        }}
      />
      {children}
    </div>
  );
}

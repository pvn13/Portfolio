"use client";
import { cn } from "../../lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React from "react";

export const HeroHighlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  return (
    <div
      className={cn(
        "relative h-[40rem] flex flex-col items-center justify-center overflow-hidden bg-neutral-950",
        className
      )}
      onMouseMove={handleMouseMove}
    >
      {/* dotted pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(#334,#000_1px)] [background-size:16px_16px]" />
      {/* spotlight effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              180px at ${mouseX}px ${mouseY}px,
              white,
              transparent 70%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              180px at ${mouseX}px ${mouseY}px,
              white,
              transparent 70%
            )
          `,
          background:
            "radial-gradient(circle at center, rgba(99,102,241,0.4), transparent 60%)",
        }}
      />
      <div className="relative z-10 text-center max-w-3xl px-4">{children}</div>
    </div>
  );
};

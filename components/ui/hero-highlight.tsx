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
        "relative h-[40rem] flex flex-col items-center justify-center overflow-hidden",
        className
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="relative z-10 text-center max-w-3xl px-4">{children}</div>
    </div>
  );
};

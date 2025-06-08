"use client";
import { cn } from "../../lib/utils";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
];

export function ResizableNavbar() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ target: ref, offset: ['start start', 'end start']});
  const [shrink, setShrink] = useState(false);

  useMotionValueEvent(scrollY, 'change', (y) => {
    setShrink(y > 80);
  });

  return (
    <motion.nav
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-40 flex justify-center transition-all duration-300",
        shrink ? "h-12 backdrop-blur-lg" : "h-20"
      )}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
    >
      <motion.ul
        className="flex gap-8 items-center px-6 py-3 rounded-full bg-neutral-900/70 text-sm font-medium backdrop-blur-md"
        animate={{ width: shrink ? "50%" : "75%" }}
      >
        {navItems.map((item) => (
          <li key={item.link}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}

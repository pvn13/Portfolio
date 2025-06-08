"use client";

import { cn } from "../../lib/utils";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
];

export function ResizableNavbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: navRef,
    offset: ["start start", "end start"],
  });
  const [shrink, setShrink] = useState(false);

  // Toggle “shrink” class after 80 px scroll
  useMotionValueEvent(scrollY, "change", (y) => setShrink(y > 80));

  return (
    <motion.nav
      ref={navRef}
      className={cn(
        "fixed inset-x-0 top-0 z-40 flex justify-center transition-all duration-300",
        shrink ? "h-12 backdrop-blur-lg" : "h-20"
      )}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
    >
      <motion.ul
        className="flex items-center gap-8 rounded-full bg-neutral-900/60 px-6 py-3 text-sm font-medium shadow-sm backdrop-blur-md"
        animate={{ width: shrink ? "55%" : "75%" }} /* adjusted a bit wider */
      >
        {/* main nav links */}
        {navItems.map(({ name, link }) => (
          <motion.li
            key={link}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="group relative"
          >
            <Link
              style={{
                textDecoration: "none",
              }}
              href={link}
              className="px-1"
            >
              {name}
              {/* underline */}
              <span
                aria-hidden
                className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-indigo-500 transition-all duration-300 group-hover:w-full"
              />
            </Link>
          </motion.li>
        ))}

        {/* résumé download (aligned right with ml-auto) */}
        <motion.li
          className="ml-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
        >
          <a
            style={{
              textDecoration: "none",
            }}
            target="_blank"
            href="https://drive.google.com/file/d/1mryLnS86XCgaidTDY4yd7au8W8ZnEr6Y/view?usp=sharing"
            className="rounded-md border border-indigo-500/60 px-3 py-1.5 text-indigo-300 transition-colors hover:bg-indigo-500/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/60"
          >
            Resume
          </a>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}

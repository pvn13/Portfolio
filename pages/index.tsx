import { motion } from "framer-motion";
import Head from "next/head";
import { HeroHighlight } from "../components/ui/hero-highlight";
import { CardSpotlight } from "../components/ui/card-spotlight";
import { BackgroundBeams } from "../components/ui/background-beams";
import { TypewriterEffect } from "../components/ui/typewriter";

const tagline =
  "Delivering performant, user-first mobile experiences worldwide.";

const parentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1.8,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Home() {
  const words = tagline.split(" ");

  return (
    <>
      <BackgroundBeams />
      {/* <Head>
        <title>Praveen Verma – Portfolio</title>
      </Head> */}

      <div className="relative overflow-hidden">
        <HeroHighlight>
          <h1
            className="
            text-6xl md:text-7xl 
            font-bold 
            mb-4 
            bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 
            bg-clip-text text-transparent
          "
          >
            Praveen Verma
          </h1>

          <p
            className="
            text-1xl md:text-2xl 
            font-mono uppercase tracking-wider 
            text-indigo-200 
            mb-3 
            drop-shadow-md
          "
          >
            React Native Developer
          </p>

          <motion.p
            className="
              mt-6 
              text-lg md:text-xl 
              font-mono font-light 
              text-white/90 
              tracking-wide 
              text-center 
              flex justify-center flex-wrap
              drop-shadow-sm
            "
            variants={parentVariants}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className="mx-1 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </HeroHighlight>
      </div>

      {/* ─── Skills spotlight grid ─────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-4 pb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Highlighted Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <CardSpotlight>
            <h3 className="text-xl font-medium mb-2">React &amp; Next.js</h3>
            <p>
              Building scalable, performant web apps with a focus on UX and DX.
            </p>
          </CardSpotlight>

          <CardSpotlight>
            <h3 className="text-xl font-medium mb-2">TypeScript</h3>
            <p>Strong typing for reliability and maintainability at scale.</p>
          </CardSpotlight>

          <CardSpotlight>
            <h3 className="text-xl font-medium mb-2">Motion &amp; GSAP</h3>
            <p>Crafting fluid micro-interactions that delight users.</p>
          </CardSpotlight>
        </div>
      </section>
    </>
  );
}

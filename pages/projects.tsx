import Head from 'next/head'
import { motion, TargetAndTransition } from "framer-motion";
import { CardSpotlight } from '../components/ui/card-spotlight'
import { BackgroundBeams } from '../components/ui/background-beams';

type Variant = TargetAndTransition;
/**
 * @public
 */
type Variants = {
  [key: string]: Variant;
};

const wordVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};


const projects = [
    {
    title: 'PokerBaazi (Baazi Games)',
    desc: 'Built a dev-mode performance monitor and reduced bundle size by 13 MB through WebP image optimization.',
  },
  {
    title: 'Fantasy Soccer League (VectoScalar)',
    desc: 'Developed Matches and Preview module with custom SVG card components, implemented automated testing, and utilized WebSockets for real-time data updates.',
  },
  {
    title: 'API Monitoring Tool (VectoScalar)',
    desc: 'Led a team to enhance code quality, finalize UI/UX, and developed reusable components with schema-based CRUD functionality.',
  },
  {
    title: 'PokerBoss (Baazi Games)',
    desc: 'Utilized Storybook for component development, implemented reusable Form components, and designed dynamic, theme-adaptive SVGs.',
  },
  {
    title: 'ShopScalar App/Admin (VectoScalar)',
    desc: 'Built robust project infrastructure with Firebase Login, Analytics, and push notifications, and utilized AWS S3 for image storage.',
  },
  {
    title: 'Hikinjo (Beam Melody, UK)',
    desc: 'Increased user engagement by incorporating Dynamic links, implemented Consume and Provide modules, and refined the Date-Time picker.',
  },
];

const parentVariants: Variants = {
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

export default function Projects() {
  return (
    <>
    <BackgroundBeams />
      <Head><title>Projects – Praveen Verma</title></Head>
      <main className="mx-auto max-w-5xl px-4 py-24">
        <h1 className="text-4xl font-bold mb-12 text-center">Projects</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => { 
            const words = p.desc.split(" ");
          return (
            <CardSpotlight key={p.title}>
              <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
              <motion.p
                          className="
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
            </CardSpotlight>
          )})}
        </div>
      </main>
    </>
  )
}

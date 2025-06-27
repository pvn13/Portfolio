import Head from 'next/head'
import { CardSpotlight } from '../components/ui/card-spotlight'

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

export default function Projects() {
  return (
    <>
      <Head><title>Projects – Praveen Verma</title></Head>
      <main className="mx-auto max-w-5xl px-4 py-24">
        <h1 className="text-4xl font-bold mb-12 text-center">Projects</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <CardSpotlight key={p.title}>
              <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
              <p className="text-neutral-300">{p.desc}</p>
            </CardSpotlight>
          ))}
        </div>
      </main>
    </>
  )
}

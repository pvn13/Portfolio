import Head from 'next/head'
import { CardSpotlight } from '../components/ui/card-spotlight'

const projects = [
  {
    title: 'Performance Monitor',
    desc: 'Real‑time dashboard for memory / FPS tracking.',
  },
  {
    title: 'Fantasy Soccer League',
    desc: 'Cross‑platform app with live fixtures.',
  },
  {
    title: 'ShopScalar',
    desc: 'Headless e‑commerce storefront built with Next.js.',
  },
]

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

import Head from 'next/head'
import { HeroHighlight } from '../components/ui/hero-highlight'
import { CardSpotlight } from '../components/ui/card-spotlight'

export default function Home() {
  return (
    <>
      <Head>
        <title>Praveen Verma – Portfolio</title>
      </Head>
      <HeroHighlight>
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Praveen Verma
        </h1>
        <p className="text-xl text-neutral-300">Frontend Engineer</p>
        <div className="mt-8 flex gap-4 justify-center">
          <a href="/Praveen_Verma_Resume.pdf" className="btn-primary">Résumé</a>
          <a href="/projects" className="btn-primary bg-purple-600 hover:bg-purple-700">Projects</a>
        </div>
      </HeroHighlight>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Highlighted Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <CardSpotlight>
            <h3 className="text-xl font-medium mb-2">React & Next.js</h3>
            <p>Experienced in building scalable and performant web applications.</p>
          </CardSpotlight>
          <CardSpotlight>
            <h3 className="text-xl font-medium mb-2">TypeScript</h3>
            <p>Strongly typed codebases for large scale apps and better DX.</p>
          </CardSpotlight>
          <CardSpotlight>
            <h3 className="text-xl font-medium mb-2">GSAP & Motion</h3>
            <p>Fluid animations and micro‑interactions that delight users.</p>
          </CardSpotlight>
        </div>
      </section>
    </>
  )
}

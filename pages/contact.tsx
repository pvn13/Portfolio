import Head from "next/head";
import { CardSpotlight } from "../components/ui/card-spotlight";
import { IconPhone, IconMail, IconBrandLinkedin } from "@tabler/icons-react";
import { BackgroundBeams } from "../components/ui/background-beams";

export default function Contact() {
  return (
    <>
    <BackgroundBeams />
      <Head>
        <title>Contact – Praveen Verma</title>
      </Head>

      <main className="mx-auto max-w-5xl px-4 py-24">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let’s Connect
          </h1>
          <p className="mt-2 text-neutral-400">
            I reply within&nbsp;24 hours 🚀
          </p>
        </header>

        {/* Clickable cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Phone */}
          <CardSpotlight
            from="#06b6d4"
            to="#22d3ee"
            onClick={() => window.open("tel:+917310433221", "_self")}
          >
            <div className="flex flex-col items-center text-center gap-3 py-4">
              <IconPhone size={48} className="text-cyan-300" />
              <h3 className="text-xl font-semibold">Call me</h3>
              <span className="text-lg">+91 73104 33221</span>
            </div>
          </CardSpotlight>

          {/* Email */}
          <CardSpotlight
            from="#ec4899"
            to="#f472b6"
            onClick={() => window.open("mailto:pvnverma13@gmail.com", "_self")}
          >
            <div className="flex flex-col items-center text-center gap-3 py-4">
              <IconMail size={48} className="text-pink-300" />
              <h3 className="text-xl font-semibold">Email</h3>
              <span className="text-lg">pvnverma13@gmail.com</span>
            </div>
          </CardSpotlight>

          {/* LinkedIn */}
          <CardSpotlight
            from="#4f46e5"
            to="#6366f1"
            onClick={() =>
              window.open("https://linkedin.com/in/praveenVerma013", "_blank")
            }
          >
            <div className="flex flex-col items-center text-center gap-3 py-4">
              <IconBrandLinkedin size={48} className="text-indigo-300" />
              <h3 className="text-xl font-semibold">LinkedIn</h3>
              <span className="text-lg">PraveenVerma013</span>
            </div>
          </CardSpotlight>
        </div>
      </main>
    </>
  );
}

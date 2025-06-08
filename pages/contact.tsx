import Head from "next/head";
import { CardSpotlight } from "../components/ui/card-spotlight";
import { IconPhone, IconMail, IconBrandLinkedin } from "@tabler/icons-react";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact – Praveen Verma</title>
      </Head>

      <main className="mx-auto max-w-5xl px-4 py-24">
        <h1 className="text-4xl font-bold mb-12 text-center">Get in touch</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Phone */}
          <CardSpotlight>
            <div className="flex flex-col items-center text-center gap-3">
              <IconPhone size={40} className="text-indigo-400" />
              <h3 className="text-xl font-semibold">Call me</h3>
              <a href="tel:+917310433221" className="text-lg underline">
                +91&nbsp;73104 33221
              </a>
            </div>
          </CardSpotlight>

          {/* Email */}
          <CardSpotlight>
            <div className="flex flex-col items-center text-center gap-3">
              <IconMail size={40} className="text-indigo-400" />
              <h3 className="text-xl font-semibold">Email</h3>
              <a
                href="mailto:pvnverma13@gmail.com"
                className="text-lg underline"
              >
                pvnverma13@gmail.com
              </a>
            </div>
          </CardSpotlight>

          {/* LinkedIn */}
          <CardSpotlight>
            <div className="flex flex-col items-center text-center gap-3">
              <IconBrandLinkedin size={40} className="text-indigo-400" />
              <h3 className="text-xl font-semibold">LinkedIn</h3>
              <a
                href="https://linkedin.com/in/praveenVerma013"
                target="_blank"
                rel="noreferrer"
                className="text-lg underline"
              >
                linkedin.com/in/PraveenVerma013
              </a>
            </div>
          </CardSpotlight>
        </div>
      </main>
    </>
  );
}

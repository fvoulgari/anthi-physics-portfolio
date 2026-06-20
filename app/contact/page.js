import Navbar from "@/components/layout/Navbar";
import { Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main
        className="min-h-screen bg-cover bg-center px-8 py-24 text-black md:ml-52"
        style={{
          backgroundImage: "url('/images/hero/back1.jpeg')",
        }}
      >
        <section className="mx-auto flex min-h-[70vh] max-w-5xl items-center justify-center">
          <div className="w-full max-w-2xl rounded-2xl border border-[#e21d4a]/20 bg-white/75 p-12 text-center backdrop-blur-md">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#e21d4a]">
              Contact
            </p>

            <h1 className="mb-6 text-5xl font-light text-black">
              Say hello
            </h1>

            <p className="mx-auto mb-10 max-w-xl text-lg leading-8 text-neutral-800">
              For research discussions, collaborations, writing, or simply to
              get in touch.
            </p>

            <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-10">
              <a
                href="mailto:anthibee@gmail.com"
                className="flex items-center gap-3 text-[#e21d4a] transition hover:opacity-70"
              >
                <Mail size={22} />
                <span>anthibee@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/anthi-voulgari-revof-1568a6252/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#e21d4a] transition hover:opacity-70"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-sm border border-[#e21d4a] text-sm font-semibold">
                  in
                </span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
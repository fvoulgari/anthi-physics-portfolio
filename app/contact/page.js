import Navbar from "@/components/layout/Navbar";
import PageBackground from "@/components/layout/PageBackground";
import { Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <PageBackground>
        <section className="mx-auto flex min-h-[70vh] max-w-5xl items-center justify-center">
          <div className="w-full max-w-2xl rounded-2xl border border-[#e21d4a]/20 bg-white/75 p-12 text-center backdrop-blur-md dark:bg-black/75">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#e21d4a]">
              Contact
            </p>

            <h1 className="mb-8 text-4xl font-light text-black dark:text-white md:mb-10 md:text-5xl">
              Get In Touch
            </h1>
            

            <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-10">
              <a
                href="mailto:anthi.v.revof@usn.no"
                className="flex items-center gap-3 text-[#e21d4a] transition hover:opacity-70"
              >
                <Mail size={22} />
                <span>anthi.v.revof@usn.no</span>
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
      </PageBackground>
    </>
  );
}
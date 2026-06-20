import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import PageBackground from "@/components/layout/PageBackground";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <PageBackground>
        <section className="mx-auto max-w-5xl rounded-2xl border border-[#e21d4a]/20 bg-white/75 p-12 backdrop-blur-md dark:bg-black/75">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#e21d4a]">
            About
          </p>

          <h1 className="mb-12 text-5xl font-light text-black dark:text-white">
            Anthi
          </h1>

          <div className="grid gap-12 md:grid-cols-3">
            <div className="space-y-5 text-lg leading-8 text-neutral-900 dark:text-neutral-100 md:col-span-2">
              <p>
                I recently completed the High Energy Physics Master’s program
                jointly offered by École Polytechnique in Paris and ETH Zurich.
              </p>

              <p>
                Currently, I am doing my PhD at the University of South-Eastern
                Norway on Quantum Reference Frames.
              </p>

              <p>
                Through this space, I collect thoughts on physics, science,
                philosophy, and the questions that shape how we understand the
                world.
              </p>

              <div className="grid gap-3 pt-6 md:grid-cols-2">
                {[
                  "High Energy Physics",
                  "Quantum Reference Frames",
                  "Scientific writing",
                  "Physics & philosophy",
                ].map((item) => (
                  <p key={item} className="flex items-center gap-3">
                    <span className="text-[#e21d4a]">➤</span>
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative h-72 w-72 overflow-hidden rounded-xl border border-[#e21d4a]/20 bg-white/60 shadow-lg dark:bg-black/50">
                <Image
                  src="/images/hero/anthi.jpg"
                  alt="Anthi Voulgari Revof"
                  fill
                  className="object-cover grayscale transition duration-300 hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </section>
      </PageBackground>
    </>
  );
}
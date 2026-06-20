import Navbar from "@/components/layout/Navbar";
import PageBackground from "@/components/layout/PageBackground";

export default function ResearchPage() {
  return (
    <>
      <Navbar />

      <PageBackground>
        <section className="mx-auto max-w-5xl rounded-2xl border border-[#e21d4a]/20 bg-white/75 p-12 backdrop-blur-md dark:bg-black/75">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#e21d4a]">
            Research
          </p>

          <h1 className="mb-10 text-5xl font-light text-black dark:text-white">
            Quantum Reference Frames
          </h1>

          <div className="space-y-6 text-lg leading-8 text-neutral-900 dark:text-neutral-100">
            <p>
              In physics, we often describe experiments relative to a reference
              frame: a clock, a ruler, a laboratory, or a chosen set of
              coordinates. These reference frames are usually treated as
              external and classical, remaining in the background of the theory.
            </p>

            <p>
              My research explores what happens when we abandon this
              idealization and treat reference frames themselves as physical
              systems subject to quantum theory.
            </p>

            <p>
              A central theme is the relational nature of physical observables.
              Quantities such as position do not exist in isolation; they
              acquire meaning only relative to an observer, an apparatus, or
              another physical system.
            </p>

            <p>
              My current work focuses on understanding this relational viewpoint
              and how it can be formulated mathematically in General Relativity
              and Quantum Field Theory.
            </p>
          </div>

          <div className="mt-12 border-t border-[#e21d4a]/20 pt-8">
            <h2 className="mb-5 text-2xl font-light text-black dark:text-white">
              Research Interests
            </h2>

            <div className="grid gap-3 md:grid-cols-2">
              {[
                "Quantum Reference Frames",
                "Foundations of Quantum Theory",
                "General Relativity",
                "Quantum Field Theory",
                "Relational Observables",
                "Quantum Gravity",
              ].map((item) => (
                <p
                  key={item}
                  className="flex items-center gap-3 text-neutral-900 dark:text-neutral-100"
                >
                  <span className="text-[#e21d4a]">➤</span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>
      </PageBackground>
    </>
  );
}
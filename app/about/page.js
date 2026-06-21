import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import PageBackground from "@/components/layout/PageBackground";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <PageBackground>
        <section className="mx-auto max-w-5xl rounded-2xl border border-[#e21d4a]/20 bg-white/75 p-6 backdrop-blur-md dark:bg-black/75 md:p-12">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#e21d4a]">
            About
          </p>

          <h1 className="mb-8 text-4xl font-light text-black dark:text-white md:mb-12 md:text-5xl">
            Anthi
          </h1>

          <div className="grid gap-8 md:grid-cols-3 md:gap-12">
            <div className="space-y-5 text-base leading-7 text-neutral-900 dark:text-neutral-100 md:col-span-2 md:text-lg md:leading-8">
              <p>
                I recently completed the High Energy Physics Master’s program
                jointly offered by École Polytechnique in Paris and ETH Zurich.
              </p>

              <p>
                Currently, I am doing my PhD at the University of South-Eastern
                Norway on Quantum Reference Frames.
              </p>

              <p>
                Through this space, I collect thoughts on physics, philosophy of
                science, and the questions that shape how we understand the
                world.
              </p>
            </div>

            <div className="order-first flex justify-center md:order-none md:justify-end">
              <div className="relative h-56 w-56 overflow-hidden rounded-xl border border-[#e21d4a]/20 bg-white/60 shadow-lg dark:bg-black/50 md:h-72 md:w-72">
                <Image
                  src="/images/hero/anthi.jpg"
                  alt="Anthi Voulgari Revof"
                  fill
                  sizes="(max-width: 768px) 224px, 288px"
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
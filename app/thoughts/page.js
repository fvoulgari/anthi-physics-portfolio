import Navbar from "@/components/layout/Navbar";
import PageBackground from "@/components/layout/PageBackground";

const thoughts = [
  {
    slug: "why-time-feels-strange",
    title: "Why time feels strange",
    date: "June 2026",
  },
  {
    slug: "entropy-and-everyday-life",
    title: "Entropy and everyday life",
    date: "June 2026",
  },
];

export default function ThoughtsPage() {
  return (
    <>
      <Navbar />

      <PageBackground>
        <section className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#e21d4a]">
            Thoughts
          </p>
          <h1 className="mb-8 text-4xl font-light text-black dark:text-white md:mb-10 md:text-5xl">
            Essays and reflections
          </h1>

          <div className="flex flex-col gap-7">
            {thoughts.map((thought) => (
              <a
                key={thought.slug}
                href={`/thoughts/${thought.slug}`}
                className="rounded-xl border border-[#e21d4a]/20 bg-white/70 px-10 py-8 text-center backdrop-blur-sm transition hover:-translate-y-1 hover:border-[#e21d4a]/50 hover:bg-white dark:bg-black/75 dark:hover:bg-black/90"
              >
                <h2 className="text-2xl font-semibold leading-snug text-black dark:text-white">
                  {thought.title}
                </h2>

                <p className="mt-3 text-lg text-neutral-500 dark:text-neutral-400">
                  {thought.date}
                </p>
              </a>
            ))}
          </div>
        </section>
      </PageBackground>
    </>
  );
}
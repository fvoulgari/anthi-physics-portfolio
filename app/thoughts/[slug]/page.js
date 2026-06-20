import Navbar from "@/components/layout/Navbar";
import PageBackground from "@/components/layout/PageBackground";

export default async function ThoughtArticlePage({ params }) {
  const { slug } = await params;

  return (
    <>
      <Navbar />

      <PageBackground>
        <article className="mx-auto max-w-4xl rounded-2xl border border-[#e21d4a]/20 bg-white/75 p-12 backdrop-blur-md dark:bg-black/75">
          <a
            href="/thoughts"
            className="text-sm uppercase tracking-[0.25em] text-[#e21d4a]"
          >
            ← Thoughts
          </a>

          <p className="mt-12 mb-4 text-sm text-neutral-600 dark:text-neutral-400">
            June 2026
          </p>

          <h1 className="mb-8 text-5xl font-light text-black dark:text-white">
            {slug.replaceAll("-", " ")}
          </h1>

          <div className="space-y-6 text-lg leading-8 text-neutral-900 dark:text-neutral-100">
            <p>
              This is where the article content will be rendered from markdown.
            </p>
          </div>
        </article>
      </PageBackground>
    </>
  );
}
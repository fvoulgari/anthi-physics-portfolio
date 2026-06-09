import Navbar from "@/components/layout/Navbar";
export default async function ThoughtArticlePage({ params }) {
  const { slug } = await params;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f7f4ef] px-8 py-24 md:ml-52">
        <article className="mx-auto max-w-4xl rounded-2xl border border-[#e21d4a]/20 bg-white/75 p-12 backdrop-blur-md">
          <a
            href="/thoughts"
            className="text-sm uppercase tracking-[0.25em] text-[#e21d4a]"
          >
            ← Thoughts
          </a>

          <p className="mt-12 mb-4 text-sm text-neutral-600">June 2026</p>

          <h1 className="mb-8 text-5xl font-light text-black">
            {slug.replaceAll("-", " ")}
          </h1>

          <div className="space-y-6 text-lg leading-8 text-neutral-900">
            <p>
              This is where the article content will be rendered from markdown.
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
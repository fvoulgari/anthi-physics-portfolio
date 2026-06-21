import Navbar from "@/components/layout/Navbar";
import PageBackground from "@/components/layout/PageBackground";
import SketchbookGallery from "@/components/sketchbook/SketchbookGallery";
import BackToTopButton from "@/components/ui/BackToTopButton";

export default function SketchbookPage() {
  return (
    <>
      <Navbar />

      <PageBackground>
        <section className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#e21d4a]">
            Sketchbook
          </p>

          <h1 className="mb-8 text-4xl font-light text-black dark:text-white md:mb-10 md:text-5xl">
            Drawings and visual notes
          </h1>

          <p className="mt-4 mb-12 max-w-2xl text-lg italic leading-8 text-neutral-700 dark:text-neutral-300">
            Science is wonderful, but sometimes the brain needs a coffee break.
            <br />
            Art is mine.
          </p>

          <SketchbookGallery />

          <BackToTopButton />
        </section>
      </PageBackground>
    </>
  );
}
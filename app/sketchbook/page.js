import Navbar from "@/components/layout/Navbar";
import SketchbookGallery from "@/components/sketchbook/SketchbookGallery";

export default function SketchbookPage() {
  return (
    <>
      <Navbar />

      <main
        className="min-h-screen bg-cover bg-center px-8 py-24 text-black md:ml-52"
        style={{
          backgroundImage: "url('/images/hero/back1.jpeg')",
        }}
      >
        <section className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#e21d4a]">
            Sketchbook
          </p>

          <h1 className="mb-12 text-5xl font-light text-black">
            Drawings and visual notes
          </h1>

          <SketchbookGallery />
        </section>
      </main>
    </>
  );
}
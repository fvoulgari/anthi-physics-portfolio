export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/hero/background.png')",
        }}
      />

      <div className="absolute inset-0 bg-white/20" />

      <div className="relative z-10 mx-auto max-w-7xl px-8">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#e21d4a]">
          Physics Communication
        </p>

        <h1 className="max-w-4xl text-6xl font-light leading-tight text-black md:text-8xl">
          Exploring physics,
          <br />
          ideas and curiosity.
        </h1>

        <p className="mt-8 max-w-xl text-lg text-neutral-700">
          Essays, scientific outreach, artwork and reflections
          on how we understand the universe.
        </p>
      </div>
    </section>
  );
}
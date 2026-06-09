export default function Navbar() {
  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-52 flex-col justify-between border-r border-[#e21d4a]/15 bg-white px-8 py-10 backdrop-blur-sm md:flex">
      <a href="/" className="text-xl font-semibold leading-tight text-[#e21d4a]">
        Anthi
        <br />
        Voulgari Revof
      </a>
      <nav className="flex flex-col gap-5 text-sm uppercase tracking-[0.22em] text-[#e21d4a]">
        <a href="/about">About</a>
        <a href="/research">Research</a>
        <a href="/thoughts">Thoughts</a>
        <a href="/sketchbook">Sketchbook</a>
        <a href="/contact">Contact</a>
      </nav>

    </aside>
  );
}
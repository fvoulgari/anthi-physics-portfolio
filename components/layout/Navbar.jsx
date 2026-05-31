export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <div className="font-semibold tracking-wide text-[#e21d4a]">
          Anthi Voulgari Revof
        </div>

        <div className="flex gap-8 text-sm uppercase tracking-wider text-[#e21d4a]">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/articles">Articles</a>
          <a href="/research">Research</a>
          <a href="/sketchbook">Sketchbook</a>
        </div>
      </div>
    </nav>
  );
}
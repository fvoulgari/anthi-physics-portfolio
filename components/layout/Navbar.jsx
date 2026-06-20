import ThemeToggle from "./ThemeToggle";
export default function Navbar() {
  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-52 flex-col justify-between border-r border-[#e21d4a]/15 bg-white dark:bg-black px-8 py-10 backdrop-blur-sm md:flex">
      <a href="/" className="text-xl font-semibold leading-tight text-[#e21d4a] dark:text-white">
        Anthi
        <br />
        Voulgari Revof
      </a>
      <nav className="flex flex-col gap-5 text-sm uppercase tracking-[0.22em]">
        <ThemeToggle />
        <a href="/about" className="text-[#e21d4a] dark:text-white">About</a>
        <a href="/research" className="text-[#e21d4a] dark:text-white">Research</a>
        <a href="/thoughts" className="text-[#e21d4a] dark:text-white">Thoughts</a>
        <a href="/sketchbook" className="text-[#e21d4a] dark:text-white">Sketchbook</a>
        <a href="/contact" className="text-[#e21d4a] dark:text-white">Contact</a>
      </nav>
    </aside>
  );
}
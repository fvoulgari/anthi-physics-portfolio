"use client";

import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path) =>
    `${
      pathname === path ||
      (path === "/thoughts" && pathname.startsWith("/thoughts"))
        ? "font-bold"
        : "font-normal"
    } text-[#e21d4a] dark:text-white`;

  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-52 flex-col justify-between border-r border-[#e21d4a]/15 bg-white dark:bg-black px-8 py-10 backdrop-blur-sm md:flex">
      <a
        href="/"
        className="text-xl font-semibold leading-tight text-[#e21d4a] dark:text-white"
      >
        Anthi
        <br />
        Voulgari Revof
      </a>

      <nav className="flex flex-col gap-5 text-sm uppercase tracking-[0.22em]">
        <a href="/about" className={linkClass("/about")}>
          About
        </a>

        <a href="/research" className={linkClass("/research")}>
          Research
        </a>

        <a href="/thoughts" className={linkClass("/thoughts")}>
          Thoughts
        </a>

        <a href="/sketchbook" className={linkClass("/sketchbook")}>
          Sketchbook
        </a>

        <a href="/contact" className={linkClass("/contact")}>
          Contact
        </a>

        <div className="flex gap-2">
          <ThemeToggle />

          <a
            href="/cv/Anthi_Voulgari_Revof_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center border border-[#e21d4a]/30 text-[#e21d4a] transition hover:bg-[#e21d4a]/10 dark:border-white/30 dark:text-white dark:hover:bg-white/10"
          >
            CV
          </a>
        </div>
      </nav>
    </aside>
  );
}
"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) =>
    pathname === path || (path === "/thoughts" && pathname.startsWith("/thoughts"));

  const linkClass = (path) =>
    `${isActive(path) ? "font-bold" : "font-normal"} text-neutral-700 dark:text-white`;

  const links = [
    { href: "/about", label: "About" },
    { href: "/research", label: "Research" },
    { href: "/thoughts", label: "Thoughts" },
    { href: "/sketchbook", label: "Sketchbook" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-white px-6 py-5 dark:bg-black md:hidden">
        <a href="/" className="text-2xl font-bold text-[#e21d4a] dark:text-white">
          AV
        </a>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <button
            onClick={() => setIsOpen((current) => !current)}
            className="text-3xl leading-none text-neutral-800 dark:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? "×" : "☰"}
          </button>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white px-8 pt-28 dark:bg-black md:hidden">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-8 top-8 text-4xl text-neutral-700 dark:text-white"
            aria-label="Close menu"
          >
            ×
          </button>

          <nav className="flex flex-col items-center gap-8 text-xl">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={isActive(link.href) ? "font-bold text-[#e21d4a]" : linkClass(link.href)}
              >
                {link.label}
              </a>
            ))}

            <a
              href="/Anthi_Voulgari_Revof_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full max-w-xs rounded-md border border-[#e21d4a] px-8 py-4 text-center font-semibold text-[#e21d4a]"
            >
              CV
            </a>
          </nav>
        </div>
      )}

      <aside className="fixed left-0 top-0 z-50 hidden h-screen w-52 flex-col justify-between border-r border-[#e21d4a]/15 bg-white px-8 py-10 backdrop-blur-sm dark:bg-black md:flex">
        <a href="/" className="text-xl font-semibold leading-tight text-[#e21d4a] dark:text-white">
          Anthi
          <br />
          Voulgari Revof
        </a>

        <nav className="flex flex-col gap-5 text-sm uppercase tracking-[0.22em]">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={`${isActive(link.href) ? "font-bold" : "font-normal"} text-[#e21d4a] dark:text-white`}>
              {link.label}
            </a>
          ))}

          <div className="flex gap-2">
            <ThemeToggle />
            <a
              href="/Anthi_Voulgari_Revof_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center border border-[#e21d4a]/30 text-[#e21d4a] transition hover:bg-[#e21d4a]/10 dark:border-white/30 dark:text-white dark:hover:bg-white/10"
            >
              CV
            </a>
          </div>
        </nav>
      </aside>
    </>
  );
}
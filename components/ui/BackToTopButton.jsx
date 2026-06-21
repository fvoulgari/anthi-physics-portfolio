"use client";

export default function BackToTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="mt-12 w-full rounded-xl border border-[#e21d4a]/20 bg-white/75 px-6 py-4 text-[#e21d4a] backdrop-blur-md dark:bg-black/75 dark:text-white md:hidden"
    >
      ↑ Back to top
    </button>
  );
}
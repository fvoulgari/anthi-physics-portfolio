"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const backgroundImage =
    mounted && theme === "dark"
      ? "url('/images/hero/back-dark.jpeg')"
      : "url('/images/hero/back1.jpeg')";

  return (
    <section className="relative flex min-h-screen items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage }}
      />

      <div className="absolute inset-0 bg-white/20 dark:bg-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-8 md:pl-23">
        <h1 className="max-w-4xl text-5xl font-light leading-tight text-black md:text-7xl dark:text-white">
          Notes on Physics
        </h1>

        <p className="mt-4 text-sm uppercase tracking-[0.3em] text-[#e21d4a]">
          Research, thoughts
          <br />
          and occasional artwork
        </p>
      </div>
    </section>
  );
}
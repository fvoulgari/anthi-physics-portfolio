"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function PageBackground({ children }) {
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
    <main
      className="min-h-screen bg-cover bg-center px-8 py-24 text-black md:ml-52 dark:text-white"
      style={{ backgroundImage }}
    >
      {children}
    </main>
  );
}
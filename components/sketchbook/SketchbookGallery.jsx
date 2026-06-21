"use client";

import Image from "next/image";
import { useState } from "react";

const artworks = [
   {
    title: "Digital",
    date: "August 2025",
    image: "/images/sketchbook/artwork-11.jpg",
  },
  {
    title: "Acrylic On Paper",
    date: "May 2023",
    image: "/images/sketchbook/artwork-04.jpg",
  },

  {
    title: "Digital",
    date: "September 2025",
    image: "/images/sketchbook/artwork-08.jpg",
  },
  {
    title: "Ink On Paper",
    date: "December 2022",
    image: "/images/sketchbook/artwork-01.jpg",
  },
  {
    title: "Ink On Paper",
    date: "April 2023",
    image: "/images/sketchbook/artwork-02.jpg",
  },
  {
    title: "Ink On Paper",
    date: "April 2023",
    image: "/images/sketchbook/artwork-05.jpg",
  },
  {
    title: "Digital",
    date: "July 2025",
    image: "/images/sketchbook/artwork-09.jpg",
  },
  {
    title: "Charcoal On Paper",
    date: "January 2023",
    image: "/images/sketchbook/artwork-06.jpg",
  },
  {
    title: "Photography",
    date: "September 2024",
    image: "/images/sketchbook/artwork-07.jpg",
  },
  {
    title: "Digital",
    date: "June 2024",
    image: "/images/sketchbook/artwork-12.jpg",
  },
  {
    title: "Charcoal On Paper",
    date: "March 2023",
    image: "/images/sketchbook/artwork-03.jpg",
  },
  {
    title: "Watercolour On Paper",
    date: "June 2024",
    image: "/images/sketchbook/artwork-10.jpg",
  },
];

export default function SketchbookGallery() {
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  return (
    <>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {artworks.map((artwork) => (
          <button
            key={artwork.image}
            onClick={() => setSelectedArtwork(artwork)}
            className="group overflow-hidden rounded-2xl border border-[#e21d4a]/20 bg-white/75 text-left backdrop-blur-md transition hover:-translate-y-1 hover:border-[#e21d4a]/50 hover:bg-white"
          >
            <div className="relative h-80 w-full bg-white p-4">
              <Image
                src={artwork.image}
                alt={artwork.title}
                fill
                className="object-contain p-4 transition duration-300 group-hover:scale-105"
              />
            </div>

            <div className="border-t border-[#e21d4a]/10 p-6">
              <h2 className="text-2xl font-light text-black">
                {artwork.title}
              </h2>
              <p className="mt-2 text-sm text-neutral-500">{artwork.date}</p>
            </div>
          </button>
        ))}
      </div>

      {selectedArtwork && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6"
          onClick={() => setSelectedArtwork(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl bg-white p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArtwork(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-black"
            >
              ✕
            </button>

            <div className="relative h-[75vh] w-[80vw] max-w-4xl">
              <Image
                src={selectedArtwork.image}
                alt={selectedArtwork.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="px-2 pb-2 pt-4">
              <h2 className="text-2xl font-light text-black">
                {selectedArtwork.title}
              </h2>
              <p className="text-sm text-neutral-500">
                {selectedArtwork.date}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
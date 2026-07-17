"use client";

import { useState, useEffect } from "react";

export default function PortfolioGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (open === null) return;
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i! + 1) % images.length);
      if (e.key === "ArrowLeft")  setOpen((i) => (i! - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, images.length]);

  useEffect(() => {
    document.body.style.overflow = open !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ── Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setOpen(i)}
            className="rounded-xl md:rounded-2xl overflow-hidden border border-white/[0.07] bg-[#0a0a12]
                       cursor-zoom-in group relative"
          >
            <img
              src={img}
              alt={`${title} — image ${i + 1}`}
              loading="lazy"
              className="w-full h-auto object-contain opacity-90
                         group-hover:opacity-100 group-hover:scale-[1.02]
                         transition-all duration-400"
            />
            {/* zoom icon */}
            <div className="absolute inset-0 flex items-center justify-center
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black/60 backdrop-blur-sm rounded-full p-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0ZM11 8v6M8 11h6" />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* ── Lightbox ── */}
      {open !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl
                     flex items-center justify-center"
          onClick={() => setOpen(null)}
        >
          {/* Close */}
          <button
            onClick={() => setOpen(null)}
            className="absolute top-4 right-4 md:top-5 md:right-5 z-10
                       w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-white/20
                       flex items-center justify-center transition-colors duration-200"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + images.length) % images.length); }}
            className="absolute left-3 md:left-4 z-10
                       w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/10 hover:bg-white/20
                       flex items-center justify-center transition-colors duration-200"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[85vh] px-12 md:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[open]}
              alt={`${title} — image ${open + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
            {/* Counter */}
            <p className="text-center text-white/40 text-sm mt-4">
              {open + 1} / {images.length}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % images.length); }}
            className="absolute right-3 md:right-4 z-10
                       w-9 h-9 md:w-11 md:h-11 rounded-full bg-white/10 hover:bg-white/20
                       flex items-center justify-center transition-colors duration-200"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

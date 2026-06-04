"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import VaporizeTextCycle, { Tag } from "@/components/ui/vapour-text-effect";

function useResponsiveFontSize() {
  const [fontSize, setFontSize] = useState(80);
  useEffect(() => {
    const update = () => setFontSize(Math.max(32, Math.min(80, window.innerWidth * 0.065)));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return fontSize;
}

export default function Hero() {
  const fontSize = useResponsiveFontSize();
  return (
    <section className="relative w-full h-screen min-h-[650px] bg-[#07070a] text-white flex flex-col overflow-hidden">

      {/* Dot grid */}
      <div className="hero-dot-grid absolute inset-0 pointer-events-none opacity-70" aria-hidden="true" />

      {/* Ambient glows */}
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(124,106,247,0.09) 0%, transparent 70%)" }} />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(90,120,240,0.08) 0%, transparent 70%)" }} />

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7c6af7]/25 to-transparent" />


      {/* ── Main content ──────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 z-10">

        {/* Vapour text headline */}
        <div className="w-full max-w-5xl mb-6" style={{ height: `${Math.round(fontSize * 1.9)}px` }}>
          <VaporizeTextCycle
            texts={["SOFTWARE ELITES", "WE ENGINEER", "WE BUILD", "WE SCALE"]}
            font={{ fontFamily: "Inter, sans-serif", fontSize: `${fontSize}px`, fontWeight: 800 }}
            color="rgb(255,255,255)"
            spread={4}
            density={6}
            animation={{ vaporizeDuration: 2.5, fadeInDuration: 1, waitDuration: 1 }}
            direction="left-to-right"
            alignment="center"
            tag={Tag.H1}
          />
        </div>

        {/* Tagline */}
        <span className="block text-[clamp(0.75rem,2vw,1.1rem)] font-medium tracking-[0.3em]
                         text-zinc-500 uppercase mb-2">
          Building · Digital · Solutions
        </span>

        {/* Description */}
        <p className="text-zinc-400 text-sm md:text-base max-w-[520px] leading-relaxed font-light mt-4 mb-10">
          We design and build premium web applications, mobile platforms, and cloud
          infrastructure for ambitious businesses worldwide.
        </p>

        {/* CTA buttons */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <Link href="/#contact" className="btn btn-accent btn-lg">
            Start a Project
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link href="#work" className="btn btn-outline btn-lg">
            View Our Work
          </Link>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 opacity-30">
        <span className="text-white text-[9px] uppercase tracking-[0.25em] font-semibold">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
      </div>

    </section>
  );
}

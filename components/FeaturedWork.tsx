"use client";

import React, { useState } from "react";
import Link from "next/link";

const projects = [
  {
    slug:        "financeflow",
    number:      "01",
    brand:       "FinanceFlow",
    tagline:     "Enterprise FinTech Platform",
    description: "Real-time trading dashboard with live market data feeds, compliance reporting, and role-based access — built on React & Node.js.",
    image:       "https://www.charle.co.uk/assets/images/home/grid/grid1.webp",
    stats:       [{ value: "+65%", label: "Efficiency" }, { value: "£2.4m+", label: "Cost Saved" }],
    tags:        ["Custom Software", "FinTech", "React"],
    year:        "2024",
  },
  {
    slug:        "meditrack",
    number:      "02",
    brand:       "MediTrack",
    tagline:     "Healthcare Mobile App",
    description: "Cross-platform patient monitoring app with real-time vitals, appointments, encrypted sync, and HIPAA-compliant backend.",
    image:       "https://www.charle.co.uk/assets/images/home/grid/grid4.webp",
    stats:       [{ value: "50K+", label: "Users" }, { value: "+41%", label: "Engagement" }],
    tags:        ["Mobile App", "React Native", "Healthcare"],
    year:        "2024",
  },
];

export default function FeaturedWork() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="work"
      className="w-full bg-black text-white border-t border-white/[0.06] relative z-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Section header ── */}
        <div className="flex items-end justify-between pt-10 md:pt-14 pb-8
                        border-b border-white/[0.06]">
          <h2
            className="font-bold tracking-tight leading-none text-white"
            style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
          >
            Featured Work.
          </h2>

          <Link
            href="/work"
            className="hidden md:inline-flex items-center gap-2
                       text-sm font-medium text-white/40
                       hover:text-white transition-colors duration-200 group pb-2"
          >
            View all projects
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                 className="group-hover:translate-x-0.5 transition-transform duration-200">
              <path d="M1 6h10M7 2l4 4-4 4"
                    stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* ── Project rows ── */}
        <div className="flex flex-col pb-10 md:pb-14">
          {projects.map((p, i) => (
            <div
              key={p.slug}
              onMouseEnter={() => setHovered(p.slug)}
              onMouseLeave={() => setHovered(null)}
              className={`
                group relative grid grid-cols-1 lg:grid-cols-12
                gap-4 lg:gap-6 items-center
                py-5 md:py-6
                border-b border-white/[0.06]
                transition-all duration-500
                ${hovered && hovered !== p.slug ? "opacity-60" : "opacity-100"}
              `}
            >

              {/* ── Left side ── */}
              <div className="lg:col-span-7 flex items-start gap-4 md:gap-6">

                {/* Index number */}
                <span
                  className="font-bold tracking-tighter leading-none shrink-0 pt-1 select-none
                             text-white/[0.07] group-hover:text-white/[0.12]
                             transition-colors duration-300"
                  style={{ fontSize: "clamp(4rem, 8vw, 7rem)" }}
                >
                  {p.number}
                </span>

                {/* Info block */}
                <div className="flex flex-col gap-4 flex-1 pt-2">

                  {/* Pill tags */}
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(t => (
                      <span
                        key={t}
                        className="text-[10px] uppercase tracking-[0.14em] font-semibold
                                   text-white/35 border border-white/[0.10]
                                   px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Brand title */}
                  <div>
                    <h3
                      className="font-bold tracking-tight text-white leading-tight
                                 group-hover:text-white transition-colors duration-300"
                      style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
                    >
                      {p.brand}
                    </h3>
                    <p className="text-white/40 text-sm md:text-base font-light mt-1">
                      {p.tagline}
                    </p>
                  </div>

                  {/* Description — visible on hover */}
                  <p
                    className={`text-white/35 text-sm leading-relaxed max-w-md
                                transition-all duration-400
                                ${hovered === p.slug
                                  ? "opacity-100 max-h-24"
                                  : "opacity-0 max-h-0 overflow-hidden"
                                }`}
                  >
                    {p.description}
                  </p>

                  {/* Mini stats + year */}
                  <div className="flex items-center gap-8 pt-2">
                    {p.stats.map((s, si) => (
                      <div key={si} className="flex flex-col gap-0.5">
                        <span className="text-xl md:text-2xl font-bold text-white tracking-tight leading-none">
                          {s.value}
                        </span>
                        <span className="text-white/30 text-[11px] font-medium uppercase tracking-wider">
                          {s.label}
                        </span>
                      </div>
                    ))}
                    <span className="ml-auto text-white/20 text-xs font-mono tracking-wider">
                      {p.year}
                    </span>
                  </div>

                </div>
              </div>

              {/* ── Right side — image ── */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden
                                border border-white/[0.07]
                                group-hover:border-white/[0.15]
                                transition-all duration-500">
                  <img
                    src={p.image}
                    alt={p.brand}
                    loading="lazy"
                    className="w-full h-full object-cover
                               grayscale group-hover:grayscale-0
                               scale-[1.04] group-hover:scale-100
                               transition-all duration-700 ease-out"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20
                                  transition-all duration-500" />

                  {/* Arrow chip — top right on hover */}
                  <div
                    className={`absolute top-4 right-4 w-9 h-9 rounded-full
                                bg-white flex items-center justify-center
                                transition-all duration-300
                                ${hovered === p.slug
                                  ? "opacity-100 scale-100"
                                  : "opacity-0 scale-75"
                                }`}
                  >
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M2 11L11 2M11 2H4.5M11 2v6.5"
                            stroke="black" strokeWidth="1.8"
                            strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Floating "GET IN TOUCH" circular badge — first project only */}
                {i === 0 && (
                  <Link
                    href="/#contact"
                    className="floating-cta !fixed !bottom-8 !left-8 !w-[90px] !h-[90px]"
                    aria-label="Get in touch"
                  >
                    <div className="floating-cta__circle !border-white/20" />
                    <div className="floating-cta__text">
                      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <path id="cp" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1-74,0"/>
                        </defs>
                        <text>
                          <textPath href="#cp" startOffset="0%">
                            GET IN TOUCH • GET IN TOUCH •{" "}
                          </textPath>
                        </text>
                      </svg>
                    </div>
                    <div className="floating-cta__arrow">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M3 15L15 3M15 3H7M15 3v8"
                              stroke="#fff" strokeWidth="1.6"
                              strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </Link>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Mobile — view all */}
        <div className="pb-10 flex justify-center md:hidden">
          <Link href="/work" className="btn btn-outline btn-md">
            View all projects
          </Link>
        </div>

      </div>
    </section>
  );
}

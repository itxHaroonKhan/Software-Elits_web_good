"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  {
    id:    "01",
    title: "Custom Software Development",
    desc:  "Bespoke web applications & enterprise platforms built to your exact specification with scalable, maintainable code.",
    image: "https://www.charle.co.uk/assets/images/navigation/nav-services-cta.webp",
    accent: "cyan",
  },
  {
    id:    "02",
    title: "Mobile App Development",
    desc:  "Native & cross-platform iOS and Android applications that deliver seamless user experiences and drive engagement.",
    image: "https://www.charle.co.uk/articles/guide-to-ab-split-testing/images/thumb.jpg",
    accent: "default",
  },
  {
    id:    "03",
    title: "AI & Machine Learning",
    desc:  "Intelligent automation, predictive analytics, and LLM integrations that give your business a competitive edge.",
    image: "https://www.charle.co.uk/assets/images/home/grid/grid8.webp",
    accent: "badge",
  },
  {
    id:    "04",
    title: "Cloud Infrastructure & DevOps",
    desc:  "Scalable cloud architecture, CI/CD pipelines, and containerised infrastructure built for speed and reliability.",
    image: "https://www.charle.co.uk/assets/images/home/grid/grid6.webp",
    accent: "default",
  },
];

export default function Services() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="services"
      className="w-full bg-black text-white border-t border-white/[0.06] relative z-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-36">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between
                        mb-12 md:mb-16 gap-4">
          <h2
            className="font-bold tracking-tight leading-none text-white"
            style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)" }}
          >
            Our Expertise.
          </h2>
          <span className="text-white/30 text-[11px] font-semibold uppercase
                           tracking-[0.22em] md:pb-2">
            Design, Build, Deploy &amp; Scale
          </span>
        </div>

        {/* ── 2×2 Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s) => {
            const isHovered = hoveredId === s.id;

            return (
              <div
                key={s.id}
                onMouseEnter={() => setHoveredId(s.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`
                  group relative overflow-hidden rounded-3xl
                  min-h-[320px] md:min-h-[360px]
                  border transition-all duration-500 cursor-pointer
                  flex flex-col justify-between p-8 md:p-10
                  ${isHovered
                    ? "border-white/[0.18] shadow-[0_0_48px_rgba(255,255,255,0.04)]"
                    : "border-white/[0.06]"
                  }
                `}
              >
                {/* Background image */}
                <div
                  className={`
                    absolute inset-0 bg-cover bg-center
                    transition-all duration-700
                    ${isHovered ? "scale-105 opacity-100" : "scale-100 opacity-60"}
                  `}
                  style={{ backgroundImage: `url(${s.image})` }}
                />

                {/* Gradient overlay */}
                <div
                  className={`
                    absolute inset-0 transition-all duration-500
                    ${isHovered
                      ? "bg-gradient-to-t from-black/90 via-black/60 to-black/40"
                      : "bg-gradient-to-t from-black/95 via-black/75 to-black/55"
                    }
                  `}
                />

                {/* ── Card content ── */}
                <div className="relative z-10 flex flex-col h-full gap-4">

                  {/* Serial number */}
                  <span className="text-white/20 text-xs font-bold uppercase tracking-[0.18em] font-mono">
                    {s.id}
                  </span>

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Text */}
                  <div className="flex flex-col gap-3">
                    <h3
                      className={`
                        font-bold text-white tracking-tight leading-snug
                        transition-colors duration-300
                        text-xl md:text-2xl
                      `}
                    >
                      {s.title}
                    </h3>
                    <p
                      className={`
                        text-sm leading-relaxed font-light max-w-sm
                        transition-all duration-300
                        ${isHovered ? "text-white/60" : "text-white/40"}
                      `}
                    >
                      {s.desc}
                    </p>
                  </div>

                  {/* ── Action area ── */}
                  <div className="flex items-center justify-between mt-4">

                    {/* Arrow button */}
                    {s.accent !== "badge" && (
                      <Link
                        href="/services"
                        className={`
                          inline-flex items-center justify-center
                          w-11 h-11 rounded-full border
                          transition-all duration-300
                          ${s.accent === "cyan"
                            ? isHovered
                              ? "bg-cyan-400 border-cyan-400 text-black shadow-[0_0_20px_rgba(34,211,238,0.5)] translate-x-1 -translate-y-1"
                              : "bg-transparent border-white/20 text-white/60"
                            : isHovered
                              ? "bg-white border-white text-black translate-x-1 -translate-y-1"
                              : "bg-transparent border-white/20 text-white/50"
                          }
                        `}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 12L12 2M12 2H5M12 2v7"
                                stroke="currentColor" strokeWidth="1.8"
                                strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    )}

                    {/* Badge slot for card 03 */}
                    {s.accent === "badge" && (
                      <Link
                        href="/#contact"
                        className="floating-cta-inline relative w-[80px] h-[80px]
                                   flex items-center justify-center cursor-pointer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label="Get in touch"
                      >
                        {/* Spinning text ring */}
                        <svg
                          viewBox="0 0 80 80"
                          className="absolute inset-0 w-full h-full animate-spin"
                          style={{ animationDuration: "10s" }}
                        >
                          <defs>
                            <path id="ring03" d="M40,40 m-30,0 a30,30 0 1,1 60,0 a30,30 0 1,1-60,0"/>
                          </defs>
                          <text className="fill-white/50" style={{ fontSize: "7.5px", letterSpacing: "2.8px", fontFamily: "Inter, sans-serif" }}>
                            <textPath href="#ring03" startOffset="0%">
                              GET IN TOUCH • GET IN TOUCH •
                            </textPath>
                          </text>
                        </svg>
                        {/* Center arrow */}
                        <div className="relative z-10 w-8 h-8 rounded-full border border-white/20
                                        flex items-center justify-center bg-black/40
                                        group-hover:bg-white group-hover:border-white
                                        transition-all duration-300">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2 10L10 2M10 2H4.5M10 2v5.5"
                                  stroke="currentColor" strokeWidth="1.6"
                                  strokeLinecap="round" strokeLinejoin="round"
                                  className="group-hover:text-black transition-colors"/>
                          </svg>
                        </div>
                      </Link>
                    )}

                    {/* Tag chip — right side on hover */}
                    <span
                      className={`
                        text-[10px] uppercase tracking-[0.14em] font-semibold
                        border border-white/[0.10] text-white/30 px-3 py-1.5 rounded-full
                        transition-all duration-300 ml-auto
                        ${isHovered ? "opacity-100" : "opacity-0"}
                      `}
                    >
                      Learn more
                    </span>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  {
    id:    "01",
    title: "Web Design",
    desc:  "Pixel-perfect, conversion-focused interfaces that leave a lasting impression.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=600&h=400&fit=crop",
    accent: "default",
  },
  {
    id:    "02",
    title: "Website Development",
    desc:  "High-performance websites engineered for speed, scale, and reliability.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&h=400&fit=crop",
    accent: "cyan",
  },
  {
    id:    "03",
    title: "Mobile App Development",
    desc:  "Native & cross-platform apps designed for seamless user experiences.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&h=400&fit=crop",
    accent: "default",
  },
  {
    id:    "04",
    title: "E-Commerce Solutions",
    desc:  "End-to-end online stores with secure payments and frictionless checkout.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&h=400&fit=crop",
    accent: "badge",
  },
  {
    id:    "05",
    title: "SEO Optimization",
    desc:  "Data-backed strategies that earn top rankings and sustainable traffic.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&h=400&fit=crop",
    accent: "default",
  },
  {
    id:    "06",
    title: "Social Media Marketing",
    desc:  "Targeted campaigns that build communities and drive conversions.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&h=400&fit=crop",
    accent: "cyan",
  },
  {
    id:    "07",
    title: "UI/UX Design",
    desc:  "Human-centered design that makes every interaction feel effortless.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&h=400&fit=crop",
    accent: "default",
  },
  {
    id:    "08",
    title: "Logo & Branding",
    desc:  "Distinctive brand identities that tell your story at a glance.",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=600&h=400&fit=crop",
    accent: "default",
  },
  {
    id:    "09",
    title: "WordPress Development",
    desc:  "Custom WordPress builds that are as powerful as they are manageable.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=600&h=400&fit=crop",
    accent: "badge",
  },
  {
    id:    "10",
    title: "Website Maintenance",
    desc:  "24/7 monitoring, updates, backups, and security for peace of mind.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&h=400&fit=crop",
    accent: "cyan",
  },
  {
    id:    "11",
    title: "Domain & Hosting",
    desc:  "Fast, secure hosting with reliable domain management and premium support.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&h=400&fit=crop",
    accent: "default",
  },
  {
    id:    "12",
    title: "Video & Animation",
    desc:  "Motion content that tells your brand story with cinematic quality.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=600&h=400&fit=crop",
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
          <div className="flex flex-col gap-3">
            <span className="text-zinc-600 text-[11px] uppercase tracking-[0.25em] font-semibold">
              What We Offer
            </span>
            <h2
              className="font-bold tracking-tight leading-none text-white"
              style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)" }}
            >
              Our{" "}
              <span className="bg-gradient-to-r from-[#7c6af7] to-[#5a78f0] bg-clip-text text-transparent">
                SERVICES
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-4 md:pb-2">
            <span className="text-white/30 text-[11px] font-semibold uppercase tracking-[0.22em]">
              12 Services Available
            </span>
            <Link href="/services"
              className="text-xs font-bold uppercase tracking-[0.14em] text-[#a89df9]
                         border border-[#7c6af7]/30 px-4 py-2 rounded-full
                         hover:bg-[#7c6af7]/10 transition-all duration-200">
              View All Services →
            </Link>
          </div>
        </div>

        {/* ── 3×4 Bento Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => {
            const isHovered = hoveredId === s.id;

            return (
              <div
                key={s.id}
                onMouseEnter={() => setHoveredId(s.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`
                  group relative overflow-hidden rounded-3xl
                  min-h-[240px]
                  border transition-all duration-500 cursor-pointer
                  flex flex-col justify-between p-7
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
                    ${isHovered ? "scale-105 opacity-100" : "scale-100 opacity-50"}
                  `}
                  style={{ backgroundImage: `url(${s.image})` }}
                />

                {/* Gradient overlay */}
                <div
                  className={`
                    absolute inset-0 transition-all duration-500
                    ${isHovered
                      ? "bg-gradient-to-t from-black/90 via-black/60 to-black/40"
                      : "bg-gradient-to-t from-black/95 via-black/80 to-black/60"
                    }
                  `}
                />

                <div className="relative z-10 flex flex-col h-full gap-3">
                  <span className="text-white/20 text-xs font-bold uppercase tracking-[0.18em] font-mono">
                    {s.id}
                  </span>
                  <div className="flex-1" />
                  <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-white tracking-tight leading-snug text-lg md:text-xl">
                      {s.title}
                    </h3>
                    <p
                      className={`
                        text-sm leading-relaxed font-light max-w-xs
                        transition-all duration-300
                        ${isHovered ? "text-white/60" : "text-white/35"}
                      `}
                    >
                      {s.desc}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <Link
                      href="/services"
                      className={`
                        inline-flex items-center justify-center
                        w-9 h-9 rounded-full border
                        transition-all duration-300
                        ${isHovered
                          ? "bg-[#7c6af7] border-[#7c6af7] text-white shadow-[0_0_16px_rgba(124,106,247,0.4)] translate-x-0.5 -translate-y-0.5"
                          : "bg-transparent border-white/20 text-white/50"
                        }
                      `}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                        <path d="M2 12L12 2M12 2H5M12 2v7"
                              stroke="currentColor" strokeWidth="1.8"
                              strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                    <span
                      className={`
                        text-[10px] uppercase tracking-[0.14em] font-semibold
                        border border-white/[0.10] text-white/30 px-3 py-1.5 rounded-full
                        transition-all duration-300
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

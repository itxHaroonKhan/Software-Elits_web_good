"use client";

import { useState } from "react";
import Link from "next/link";

const categories = ["All Projects", "Web Design", "Mobile Apps", "Branding", "Video & Animation"];

const projects = [
  // Web Design
  { id: 1, title: "LuxeStore E-Commerce",       category: "Web Design",         image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&h=400&fit=crop", year: "2024" },
  { id: 2, title: "FinTech Dashboard UI",        category: "Web Design",         image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&h=400&fit=crop", year: "2024" },
  { id: 3, title: "SaaS Landing Page",           category: "Web Design",         image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=600&h=400&fit=crop", year: "2024" },
  { id: 4, title: "Real Estate Portal",          category: "Web Design",         image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&h=400&fit=crop", year: "2023" },
  { id: 5, title: "Education Platform",          category: "Web Design",         image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&h=400&fit=crop", year: "2023" },
  { id: 6, title: "Corporate Agency Site",       category: "Web Design",         image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&h=400&fit=crop", year: "2023" },
  // Mobile Apps
  { id: 7, title: "Healthcare Mobile App",       category: "Mobile Apps",        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&h=400&fit=crop", year: "2024" },
  { id: 8, title: "Restaurant Ordering App",     category: "Mobile Apps",        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&h=400&fit=crop", year: "2024" },
  { id: 9, title: "Fitness Tracker App",         category: "Mobile Apps",        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&h=400&fit=crop", year: "2023" },
  { id: 10, title: "Travel & Booking App",       category: "Mobile Apps",        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=600&h=400&fit=crop", year: "2023" },
  // Branding
  { id: 11, title: "Luxury Brand Identity",      category: "Branding",           image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=600&h=400&fit=crop", year: "2024" },
  { id: 12, title: "Tech Startup Branding",      category: "Branding",           image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=600&h=400&fit=crop", year: "2024" },
  { id: 13, title: "Food & Beverage Identity",   category: "Branding",           image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&h=400&fit=crop", year: "2023" },
  { id: 14, title: "Fashion Brand Package",      category: "Branding",           image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&h=400&fit=crop", year: "2023" },
  // Video & Animation
  { id: 15, title: "Product Animation Reel",     category: "Video & Animation",  image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=600&h=400&fit=crop", year: "2024" },
  { id: 16, title: "Corporate Explainer Video",  category: "Video & Animation",  image: "https://images.unsplash.com/photo-1536240478700-b869ad10e128?q=80&w=600&h=400&fit=crop", year: "2024" },
  { id: 17, title: "Social Media Ad Campaign",   category: "Video & Animation",  image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&h=400&fit=crop", year: "2023" },
  { id: 18, title: "2D Brand Animation",         category: "Video & Animation",  image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=600&h=400&fit=crop", year: "2023" },
];

const counts: Record<string, number> = {
  "Web Design": 18,
  "Mobile Apps": 10,
  "Branding": 8,
  "Video & Animation": 6,
};

export default function PortfolioPage() {
  const [active, setActive] = useState("All Projects");

  const filtered = active === "All Projects"
    ? projects
    : projects.filter(p => p.category === active);

  return (
    <main className="bg-[#05050a] text-white min-h-screen overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden border-b border-white/[0.06]">
        <div className="absolute -top-40 left-1/3 w-[700px] h-[700px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,106,247,0.07) 0%, transparent 65%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-28 sm:pt-32 md:pt-44 pb-14 relative z-10">
          <span className="section-label mb-6">Portfolio</span>
          <h1 style={{ fontSize: "clamp(2.2rem, 6vw, 5.5rem)" }}
            className="font-extrabold tracking-tight leading-[0.92] text-white mb-6 max-w-4xl">
            Our creative{" "}
            <span className="bg-gradient-to-r from-[#7c6af7] to-[#5a78f0] bg-clip-text text-transparent">
              showcase.
            </span>
          </h1>
          <p className="text-zinc-500 text-base md:text-xl max-w-xl leading-relaxed font-light pb-4">
            Browse our work across web design, mobile apps, branding, and video production.
          </p>
        </div>
      </section>

      {/* ── Filter Tabs ── */}
      <div className="sticky top-16 z-30 bg-[#05050a]/95 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex items-center gap-2 overflow-x-auto py-4" style={{ scrollbarWidth: "none" }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase
                            tracking-[0.12em] border whitespace-nowrap shrink-0 transition-all duration-200
                            ${active === cat
                              ? "bg-[#7c6af7] border-[#7c6af7] text-white shadow-[0_0_20px_rgba(124,106,247,0.4)]"
                              : "bg-transparent border-white/[0.10] text-zinc-500 hover:border-white/25 hover:text-white"
                            }`}>
                {cat}
                {cat !== "All Projects" && (
                  <span className={`text-[10px] ${active === cat ? "text-white/70" : "text-zinc-700"}`}>
                    {counts[cat]}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Grid ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(p => (
            <div key={p.id}
              className="group relative rounded-2xl overflow-hidden border border-white/[0.07]
                         hover:border-[#7c6af7]/35 transition-all duration-400 cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0
                             scale-[1.05] group-hover:scale-100 transition-all duration-700 ease-out" />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent
                              opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0
                              opacity-0 group-hover:opacity-100 transition-all duration-400">
                <span className="text-[#a89df9] text-[10px] font-bold uppercase tracking-[0.18em] block mb-1">
                  {p.category}
                </span>
                <h3 className="text-white font-semibold text-base leading-tight">{p.title}</h3>
                <p className="text-zinc-500 text-xs mt-1">{p.year}</p>
              </div>
              {/* Category badge (always visible) */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm
                                 text-zinc-400 text-[10px] font-bold uppercase tracking-[0.12em]">
                  {p.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-white/[0.06] bg-[#07070e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-24 md:py-32 text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Like what you see?
          </h2>
          <p className="text-zinc-500 text-base md:text-lg max-w-md font-light">
            Let&apos;s build something amazing together.
          </p>
          <Link href="/contact" className="btn btn-accent btn-lg">
            Start a Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}

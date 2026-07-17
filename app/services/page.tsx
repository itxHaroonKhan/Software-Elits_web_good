"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Web Design",
    slug: "website-design",
    desc: "Pixel-perfect, conversion-focused interfaces that leave a lasting impression.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=600&h=400&fit=crop",
  },
  {
    number: "02",
    title: "Website Development",
    slug: "custom-software",
    desc: "High-performance websites engineered for speed, scale, and reliability.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&h=400&fit=crop",
  },
  {
    number: "03",
    title: "Mobile App Development",
    slug: "web-mobile",
    desc: "Native & cross-platform apps designed for seamless user experiences.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&h=400&fit=crop",
  },
  {
    number: "04",
    title: "E-Commerce Solutions",
    slug: "ecommerce",
    desc: "End-to-end online stores with secure payments and frictionless checkout.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&h=400&fit=crop",
  },
  {
    number: "05",
    title: "SEO Optimization",
    slug: "seo",
    desc: "Data-backed strategies that earn top rankings and sustainable traffic.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&h=400&fit=crop",
  },
  {
    number: "06",
    title: "Social Media Marketing",
    slug: "social-media",
    desc: "Targeted campaigns that build communities and drive real conversions.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&h=400&fit=crop",
  },
  {
    number: "07",
    title: "UI/UX Design",
    slug: "ui-ux",
    desc: "Human-centered design that makes every interaction feel effortless.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&h=400&fit=crop",
  },
  {
    number: "08",
    title: "Logo & Branding",
    slug: "logo-branding",
    desc: "Distinctive brand identities that tell your story at a glance.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=600&h=400&fit=crop",
  },
  {
    number: "09",
    title: "WordPress Development",
    slug: "wordpress",
    desc: "Custom WordPress builds that are as powerful as they are manageable.",
    image: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?q=80&w=600&h=400&fit=crop",
  },
  {
    number: "10",
    title: "Website Maintenance",
    slug: "website-maintenance",
    desc: "24/7 monitoring, updates, backups, and security for peace of mind.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&h=400&fit=crop",
  },
  {
    number: "11",
    title: "Domain & Hosting",
    slug: "domain-hosting",
    desc: "Fast, secure hosting with reliable domain management and support.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&h=400&fit=crop",
  },
  {
    number: "12",
    title: "Video & Animation",
    slug: "video-animation",
    desc: "Motion content that tells your brand story with cinematic quality.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=600&h=400&fit=crop",
  },
];

const process = [
  { step: "01", title: "Discovery",   desc: "Deep-dive sessions to understand your goals, audience, and technical requirements." },
  { step: "02", title: "Strategy",    desc: "Tech stack selection, project roadmap, and a clear timeline aligned to your budget." },
  { step: "03", title: "Design",      desc: "Wireframes, prototypes, and pixel-perfect UI — approved before development starts." },
  { step: "04", title: "Development", desc: "Clean, tested, documented code shipped in agile sprints with daily updates." },
  { step: "05", title: "Launch",      desc: "Deployment, performance testing, SEO setup, and ongoing support after go-live." },
];

export default function ServicesPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <main className="bg-[#05050a] text-white min-h-screen overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative w-full border-b border-white/[0.06]">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,106,247,0.07) 0%, transparent 65%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-28 sm:pt-32 md:pt-44 pb-14 relative z-10">
          <span className="section-label mb-6">What We Do</span>
          <h1 className="font-black tracking-tight leading-[0.88] text-white mt-4 mb-5"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>
            Our
            <br />
            <span className="text-transparent"
              style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.18)" }}>
              SERVICES
            </span>
          </h1>
          <p className="text-zinc-500 text-sm sm:text-base md:text-xl max-w-xl leading-relaxed font-light pb-6">
            {services.length} services. One team. Everything you need to build, grow, and dominate online.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/packages" className="btn btn-accent btn-md sm:btn-lg">View Packages</Link>
            <Link href="/contact"  className="btn btn-outline btn-md sm:btn-lg">Get a Free Quote</Link>
          </div>
        </div>
      </section>

      {/* ── 12 Services Bento Grid ── */}
      <section className="w-full border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-14">
            <div>
              <span className="section-label mb-3">{services.length} Services Available</span>
              <h2 className="font-bold tracking-tight text-white mt-3"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}>
                Everything under one roof.
              </h2>
            </div>
            <Link href="/contact"
              className="text-xs font-bold uppercase tracking-[0.14em] text-[#a89df9]
                         border border-[#7c6af7]/30 px-4 py-2 rounded-full
                         hover:bg-[#7c6af7]/10 transition-all duration-200 shrink-0 w-fit">
              Start a Project →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => {
              const isHovered = hoveredId === s.number;
              return (
                <div
                  key={s.number}
                  onMouseEnter={() => setHoveredId(s.number)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`
                    group relative overflow-hidden rounded-3xl min-h-[240px]
                    border transition-all duration-500 cursor-pointer
                    flex flex-col justify-between p-7
                    ${isHovered
                      ? "border-white/[0.18] shadow-[0_0_48px_rgba(255,255,255,0.04)]"
                      : "border-white/[0.06]"
                    }
                  `}
                >
                  {/* Background image with scale */}
                  <div
                    className={`
                      absolute inset-0 bg-cover bg-center
                      transition-all duration-700
                      ${isHovered ? "scale-105 opacity-100" : "scale-100 opacity-50"}
                    `}
                    style={{ backgroundImage: `url(${s.image})` }}
                  />

                  {/* Gradient overlay */}
                  <div className={`
                    absolute inset-0 transition-all duration-500
                    ${isHovered
                      ? "bg-gradient-to-t from-black/90 via-black/60 to-black/40"
                      : "bg-gradient-to-t from-black/95 via-black/80 to-black/60"
                    }
                  `} />

                  <div className="relative z-10 flex flex-col h-full gap-3">
                    <span className="text-white/20 text-xs font-bold uppercase tracking-[0.18em] font-mono">
                      {s.number}
                    </span>
                    <div className="flex-1" />
                    <div className="flex flex-col gap-2">
                      <h3 className="font-bold text-white tracking-tight leading-snug text-lg md:text-xl">
                        {s.title}
                      </h3>
                      <p className={`
                        text-sm leading-relaxed font-light max-w-xs transition-all duration-300
                        ${isHovered ? "text-white/60" : "text-white/35"}
                      `}>
                        {s.desc}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <Link
                        href={`/services/${s.slug}`}
                        className={`
                          inline-flex items-center justify-center
                          w-9 h-9 rounded-full border transition-all duration-300
                          ${isHovered
                            ? "bg-[#7c6af7] border-[#7c6af7] text-white shadow-[0_0_16px_rgba(124,106,247,0.4)] translate-x-0.5 -translate-y-0.5"
                            : "bg-transparent border-white/20 text-white/50"
                          }
                        `}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                          <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                      <span className={`
                        text-[10px] uppercase tracking-[0.14em] font-semibold
                        border border-white/[0.10] text-white/30 px-3 py-1.5 rounded-full
                        transition-all duration-300
                        ${isHovered ? "opacity-100" : "opacity-0"}
                      `}>
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

      {/* ── 5-Step Process ── */}
      <section className="w-full bg-[#07070e] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-28">
          <span className="section-label mb-4">How We Work</span>
          <h2 className="font-bold tracking-tight text-white mb-12 md:mb-16 mt-3"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}>
            Our 5-step process.
          </h2>

          {/* Desktop: horizontal strip */}
          <div className="hidden md:grid grid-cols-5 gap-0 rounded-2xl overflow-hidden border border-white/[0.06]">
            {process.map((p, i) => (
              <div key={p.step}
                className={`relative flex flex-col gap-4 p-6 lg:p-7 bg-[#05050a]
                            hover:bg-[#0a0a14] transition-colors duration-200
                            ${i < process.length - 1 ? "border-r border-white/[0.06]" : ""}`}>
                <span className="text-[#7c6af7] font-mono text-xs font-bold tracking-[0.2em]">{p.step}</span>
                <h3 className="text-white font-semibold text-sm lg:text-base">{p.title}</h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-light">{p.desc}</p>
                {i < process.length - 1 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10
                                  w-5 h-5 rounded-full bg-[#07070e] border border-[#7c6af7]/30
                                  flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M2 4h4M4 2l2 2-2 2" stroke="#7c6af7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile: vertical list */}
          <div className="flex flex-col md:hidden gap-0">
            {process.map((p, i) => (
              <div key={p.step} className="flex items-start gap-4 py-6 border-b border-white/[0.06] last:border-b-0">
                <div className="flex flex-col items-center shrink-0">
                  <span className="w-8 h-8 rounded-full bg-[#7c6af7]/15 border border-[#7c6af7]/30
                                   flex items-center justify-center text-[#7c6af7] text-[10px] font-bold">
                    {p.step}
                  </span>
                  {i < process.length - 1 && (
                    <div className="w-px flex-1 min-h-[2rem] bg-white/[0.06] mt-2" />
                  )}
                </div>
                <div className="pb-2 flex-1">
                  <h3 className="text-white font-semibold text-base mb-1">{p.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed font-light">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-28
                        flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Not sure where to start?
            </h2>
            <p className="text-zinc-500 text-sm sm:text-base font-light max-w-md">
              Book a free consultation. We&apos;ll help you figure out exactly what you need.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/contact"  className="btn btn-accent btn-md sm:btn-lg">Book Free Call</Link>
            <Link href="/packages" className="btn btn-outline btn-md sm:btn-lg">View Packages</Link>
          </div>
        </div>
      </section>

    </main>
  );
}

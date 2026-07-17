"use client";

import { useState } from "react";
import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "Whiteboard Animation",
    category: "Video & Animation",
    desc: "A series of 5 whiteboard-style animated explainer videos for an online education platform's core curriculum modules.",
    image: "/portfolio/portfolio_web56.webp",
    tags: ["Animation", "Education", "Video"],
    year: "2023",
    slug: "whiteboard-animation",
  },
  {
    number: "02",
    title: "E-Commerce Platform",
    category: "Web Development",
    desc: "A fully custom e-commerce solution with real-time inventory, multi-currency support, and AI-powered recommendations.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&h=500&fit=crop",
    tags: ["Web Development", "E-Commerce", "AI"],
    year: "2024",
    slug: "luxestore-ecommerce",
  },
  {
    number: "03",
    title: "FinTech Dashboard",
    category: "Mobile App",
    desc: "An intuitive financial analytics dashboard serving 50K+ active users with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&h=500&fit=crop",
    tags: ["Mobile App", "FinTech", "React Native"],
    year: "2024",
    slug: "fintech-dashboard",
  },
  {
    number: "04",
    title: "Luxury Brand Identity",
    category: "Branding",
    desc: "Complete brand overhaul for a premium lifestyle brand including logo, packaging, and digital presence.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&h=500&fit=crop",
    tags: ["Branding", "Logo Design", "Packaging"],
    year: "2024",
    slug: "luxury-brand",
  },
  {
    number: "05",
    title: "Healthcare App",
    category: "Mobile App",
    desc: "Patient-centric healthcare platform connecting doctors and patients with seamless appointment management.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&h=500&fit=crop",
    tags: ["Mobile App", "Healthcare", "HIPAA"],
    year: "2024",
    slug: "healthcare-mobile",
  },
  {
    number: "06",
    title: "SaaS Landing Page",
    category: "Web Design",
    desc: "High-converting landing page for a B2B SaaS startup that increased conversions by 240%.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&h=500&fit=crop",
    tags: ["Web Design", "SaaS", "Conversion"],
    year: "2024",
    slug: "saas-landing",
  },
  {
    number: "07",
    title: "Product Animation Reel",
    category: "Video & Animation",
    desc: "A compelling 90-second explainer video that simplified complex product features into engaging visuals.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&h=500&fit=crop",
    tags: ["Video", "Animation", "Motion"],
    year: "2023",
    slug: "product-animation",
  },
  {
    number: "08",
    title: "Real Estate Portal",
    category: "Web Development",
    desc: "Feature-rich real estate platform with virtual tours, AI property matching, and integrated mortgage tools.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&h=500&fit=crop",
    tags: ["Web Development", "Real Estate", "Maps API"],
    year: "2023",
    slug: "real-estate-portal",
  },
  {
    number: "09",
    title: "Fitness Brand Rebrand",
    category: "Branding",
    desc: "Complete brand transformation for a fitness chain across 45 locations nationwide.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&h=500&fit=crop",
    tags: ["Branding", "Identity", "Print"],
    year: "2023",
    slug: "fitness-tracker",
  },
  {
    number: "10",
    title: "Social Media Campaign",
    category: "Video & Animation",
    desc: "Viral social media campaign that generated 2M+ impressions in the first week of launch.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&h=500&fit=crop",
    tags: ["Video", "Social Media", "Viral"],
    year: "2023",
    slug: "social-media-campaign",
  },
  {
    number: "11",
    title: "Education Platform",
    category: "Web Development",
    desc: "Scalable LMS platform serving 100K+ students with live classes, assessments, and progress tracking.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&h=500&fit=crop",
    tags: ["Web Development", "EdTech", "LMS"],
    year: "2023",
    slug: "education-platform",
  },
  {
    number: "12",
    title: "Restaurant Mobile App",
    category: "Mobile App",
    desc: "A seamless ordering and loyalty app for a restaurant chain with 200+ locations.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&h=500&fit=crop",
    tags: ["Mobile App", "Restaurant", "Loyalty"],
    year: "2022",
    slug: "restaurant-ordering",
  },
  {
    number: "13",
    title: "Corporate Website",
    category: "Web Design",
    desc: "Enterprise-level corporate website with CMS integration and multi-language support.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&h=500&fit=crop",
    tags: ["Web Design", "CMS", "Corporate"],
    year: "2022",
    slug: "corporate-agency",
  },
];

export default function ProjectsPage() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <main className="bg-[#05050a] text-white">

      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden border-b border-white/[0.06]">
        <div className="absolute -top-40 right-1/4 w-[700px] h-[700px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(90,120,240,0.07) 0%, transparent 65%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-28 sm:pt-32 md:pt-44 pb-16 relative z-10">
          <span className="section-label mb-6">Case Studies</span>
          <h1 style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            className="font-black tracking-tight leading-[0.88] text-white mb-6 max-w-4xl">
            OUR
            <br />
            <span className="text-transparent"
              style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.18)" }}>
              PROJECTS
            </span>
          </h1>
          <p className="text-zinc-500 text-base md:text-xl max-w-xl leading-relaxed font-light">
            Real projects. Real results. Explore our portfolio of digital solutions
            that drive business growth.
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-b border-white/[0.06] bg-[#07070e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { value: "95+",   label: "Total Projects"   },
              { value: "300+",  label: "Happy Clients"    },
              { value: "3+",    label: "Years Experience" },
              { value: "100%",  label: "Satisfaction Rate" },
            ].map((s, i) => (
              <div key={i}
                className={`flex flex-col gap-2 py-10 px-8
                            ${i !== 0 ? "border-l border-white/[0.06]" : ""}
                            ${i < 2 ? "border-b border-white/[0.06] md:border-b-0" : ""}`}>
                <span style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
                  className="font-extrabold text-white tracking-tight leading-none">
                  {s.value}
                </span>
                <span className="text-zinc-600 text-xs uppercase tracking-wider font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section header ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-16 pb-4">
        <span className="section-label">Featured Work</span>
        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          className="font-bold tracking-tight text-white mt-3">
          Selected{" "}
          <span className="bg-gradient-to-r from-[#7c6af7] to-[#5a78f0] bg-clip-text text-transparent">
            PROJECTS
          </span>
        </h2>
      </section>

      {/* ── Project list ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {projects.map((p, i) => {
          const isActive = hovered === p.number;
          const isDimmed = hovered !== null && !isActive;
          return (
            <div
              key={p.number}
              onPointerEnter={() => setHovered(p.number)}
              onPointerLeave={() => setHovered(null)}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center py-16 md:py-20 border-b border-white/[0.06] cursor-pointer"
              style={{
                transition: "opacity 500ms ease",
                opacity: isDimmed ? 0.3 : 1,
              }}
            >
              {/* Image */}
              <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className={`relative aspect-[16/10] rounded-2xl overflow-hidden border transition-all duration-500
                                ${isActive ? "border-[#7c6af7]/40 shadow-[0_0_40px_rgba(124,106,247,0.12)]" : "border-white/[0.07]"}`}>
                  <img src={p.image} alt={p.title} loading="lazy"
                    className="w-full h-full object-cover"
                    style={{
                      transition: "transform 700ms ease-out, filter 700ms ease-out",
                      transform: isActive ? "scale(1.07)" : "scale(1)",
                      filter: isActive ? "grayscale(0%)" : "grayscale(100%)",
                    }} />
                  <div className="absolute inset-0"
                    style={{
                      transition: "background 500ms ease",
                      background: isActive ? "rgba(0,0,0,0.08)" : "rgba(0,0,0,0.45)",
                    }} />
                  {/* Arrow reveal */}
                  <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-[#7c6af7] flex items-center justify-center"
                    style={{
                      transition: "opacity 400ms ease, transform 400ms ease",
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "scale(1)" : "scale(0.7)",
                    }}>
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                      <path d="M2 12L12 2M12 2H5M12 2v7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`lg:col-span-7 flex flex-col gap-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-4">
                  <span className={`font-mono text-4xl font-extrabold leading-none select-none transition-colors duration-300
                                   ${isActive ? "text-[#7c6af7]/60" : "text-[#7c6af7]/20"}`}>
                    {p.number}
                  </span>
                  <span className={`text-xs uppercase tracking-[0.16em] font-semibold border px-3 py-1 rounded-full transition-all duration-300
                                   ${isActive ? "text-[#a89df9] border-[#7c6af7]/40" : "text-zinc-600 border-white/[0.08]"}`}>
                    {p.category}
                  </span>
                </div>
                <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
                  className={`font-bold tracking-tight leading-tight transition-colors duration-300
                             ${isActive ? "text-white" : "text-white/80"}`}>
                  {p.title}
                </h2>
                <p className={`text-sm md:text-base leading-relaxed font-light transition-all duration-300
                              ${isActive ? "text-zinc-400" : "text-zinc-600"}`}>
                  {p.desc}
                </p>
                <div className="flex items-center gap-3 flex-wrap">
                  {p.tags.map(t => (
                    <span key={t}
                      className={`text-[10px] uppercase tracking-[0.14em] font-semibold
                                 border px-3 py-1 rounded-full transition-all duration-300
                                 ${isActive ? "text-zinc-400 border-white/[0.14]" : "text-zinc-600 border-white/[0.06]"}`}>
                      {t}
                    </span>
                  ))}
                  <span className="ml-auto text-zinc-700 text-xs font-mono">{p.year}</span>
                </div>
                <div style={{
                    transition: "opacity 400ms ease, transform 400ms ease",
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "translateY(0)" : "translateY(6px)",
                  }}>
                  <Link href="/contact"
                    className="btn btn-outline btn-sm w-fit">
                    View Case Study →
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-white/[0.06] bg-[#07070e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-24 md:py-32">
          <div className="flex flex-col items-center text-center gap-6">
            <span className="section-label">Have A Project?</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
              className="font-bold tracking-tight text-white">
              Let&apos;s Build Your{" "}
              <span className="bg-gradient-to-r from-[#7c6af7] to-[#5a78f0] bg-clip-text text-transparent">
                Next Success Story
              </span>
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn btn-accent btn-lg">Start Your Project →</Link>
              <Link href="/portfolio" className="btn btn-outline btn-lg">View Portfolio</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

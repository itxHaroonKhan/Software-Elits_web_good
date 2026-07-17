"use client";

import { useState } from "react";
import Link from "next/link";

const categories = ["All", "FinTech", "Healthcare", "Commerce", "AI & ML", "DevOps"];

const projects = [
  {
    slug: "financeflow", number: "01", brand: "FinanceFlow",
    tagline: "Enterprise FinTech Platform", category: "FinTech",
    description: "Real-time trading dashboard with live market data feeds, compliance reporting, and role-based access — built on React, Node.js, and AWS.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&h=900&fit=crop",
    stats: [{ value: "+65%", label: "Efficiency" }, { value: "£2.4m+", label: "Cost Saved" }],
    tags: ["Custom Software", "FinTech", "React", "AWS"], year: "2024",
  },
  {
    slug: "meditrack", number: "02", brand: "MediTrack",
    tagline: "Healthcare Mobile App", category: "Healthcare",
    description: "Cross-platform patient monitoring app with real-time vitals, encrypted sync, and a HIPAA-compliant backend.",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&h=900&fit=crop",
    stats: [{ value: "50K+", label: "Active Users" }, { value: "+41%", label: "Engagement" }],
    tags: ["Mobile App", "React Native", "Healthcare"], year: "2024",
  },
  {
    slug: "shopforce", number: "03", brand: "ShopForce",
    tagline: "Headless Commerce Platform", category: "Commerce",
    description: "Next.js storefront with custom GraphQL API — blazing-fast pages and composable checkout for a high-growth retailer.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&h=900&fit=crop",
    stats: [{ value: "+55%", label: "Conversions" }, { value: "3×", label: "Page Speed" }],
    tags: ["Next.js", "Headless", "GraphQL"], year: "2023",
  },
  {
    slug: "datasphere", number: "04", brand: "DataSphere",
    tagline: "AI-Powered Analytics SaaS", category: "AI & ML",
    description: "B2B analytics platform with ML models for churn prediction, revenue forecasting, and automated anomaly detection.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&h=900&fit=crop",
    stats: [{ value: "+72%", label: "Retention" }, { value: "£5M+", label: "ARR Impact" }],
    tags: ["AI / ML", "SaaS", "Python"], year: "2023",
  },
  {
    slug: "cloudbase", number: "05", brand: "CloudBase",
    tagline: "Cloud Infrastructure Overhaul", category: "DevOps",
    description: "Full cloud migration to AWS with zero-downtime CI/CD, auto-scaling, and 60% infra cost reduction.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&h=900&fit=crop",
    stats: [{ value: "99.99%", label: "Uptime" }, { value: "−60%", label: "Infra Cost" }],
    tags: ["AWS", "DevOps", "Terraform"], year: "2023",
  },
  {
    slug: "venuepulse", number: "06", brand: "VenuePulse",
    tagline: "Event & Ticketing Platform", category: "Commerce",
    description: "Full-stack event management with dynamic pricing, seat maps, and Stripe-powered checkout.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&h=900&fit=crop",
    stats: [{ value: "£1.2M+", label: "Tickets Sold" }, { value: "+88%", label: "GMV Growth" }],
    tags: ["Full Stack", "Payments", "React"], year: "2022",
  },
];

export default function WorkPage() {
  const [active, setActive]   = useState("All");
  const [hovered, setHovered] = useState<string | null>(null);
  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <main className="bg-[#05050a] text-white min-h-screen">

      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden border-b border-white/[0.06]">
        <div className="absolute -top-40 right-0 w-[700px] h-[700px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,106,247,0.08) 0%, transparent 65%)" }} />
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-36 md:pt-44 pb-20 md:pb-28 relative z-10">
          <span className="section-label mb-6">Our Portfolio</span>
          <h1 style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
            className="font-extrabold tracking-tight leading-[0.92] text-white mb-8 max-w-4xl">
            Work that<br />
            <span className="bg-gradient-to-r from-[#7c6af7] to-[#5a78f0] bg-clip-text text-transparent">
              speaks for itself.
            </span>
          </h1>
          <p className="text-zinc-500 text-base md:text-lg max-w-lg leading-relaxed font-light">
            250+ projects delivered across fintech, healthcare, commerce, and enterprise.
          </p>
        </div>
      </section>

      {/* ── Filter bar ── */}
      <div className="sticky top-16 z-30 bg-[#05050a]/95 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-2 overflow-x-auto py-4"
            style={{ scrollbarWidth: "none" }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.12em]
                            border whitespace-nowrap shrink-0 transition-all duration-200
                            ${active === cat
                              ? "bg-[#7c6af7] border-[#7c6af7] text-white shadow-[0_0_20px_rgba(124,106,247,0.4)]"
                              : "bg-transparent border-white/[0.10] text-zinc-500 hover:border-white/25 hover:text-white"
                            }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Project rows ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col pb-28 md:pb-36">
          {filtered.map(p => (
            <div key={p.slug}
              onMouseEnter={() => setHovered(p.slug)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12
                          items-center py-14 md:py-16 border-b border-white/[0.06]
                          transition-all duration-500
                          ${hovered && hovered !== p.slug ? "opacity-25" : "opacity-100"}`}>
              <div className="lg:col-span-7 flex items-start gap-8 md:gap-10">
                <span style={{ fontSize: "clamp(3.5rem, 7vw, 6rem)" }}
                  className="font-extrabold tracking-tighter leading-none shrink-0 pt-1 select-none
                             text-white/[0.05] group-hover:text-white/[0.10] transition-colors duration-300">
                  {p.number}
                </span>
                <div className="flex flex-col gap-4 flex-1 pt-1">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(t => (
                      <span key={t} className="text-[10px] uppercase tracking-[0.14em] font-semibold
                                               text-white/30 border border-white/[0.09] px-3 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div>
                    <h2 style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)" }}
                      className="font-bold tracking-tight text-white leading-tight">
                      {p.brand}
                    </h2>
                    <p className="text-white/40 text-sm md:text-base font-light mt-1">{p.tagline}</p>
                  </div>
                  <p className={`text-white/35 text-sm leading-relaxed max-w-md transition-all duration-300
                                ${hovered === p.slug ? "opacity-100 max-h-20" : "opacity-0 max-h-0 overflow-hidden"}`}>
                    {p.description}
                  </p>
                  <div className="flex items-center gap-8 pt-1">
                    {p.stats.map((s, i) => (
                      <div key={i} className="flex flex-col gap-0.5">
                        <span className="text-xl md:text-2xl font-bold text-white tracking-tight leading-none">{s.value}</span>
                        <span className="text-white/25 text-[10px] font-semibold uppercase tracking-wider">{s.label}</span>
                      </div>
                    ))}
                    <span className="ml-auto text-white/20 text-xs font-mono">{p.year}</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <Link href={`/work/${p.slug}`} className="block">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden
                                  border border-white/[0.07] group-hover:border-white/[0.15]
                                  transition-all duration-500">
                    <img src={p.image} alt={p.brand} loading="lazy"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0
                                 scale-[1.04] group-hover:scale-100 transition-all duration-700 ease-out" />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-500" />
                    <div className={`absolute top-4 right-4 w-9 h-9 rounded-full bg-white
                                    flex items-center justify-center transition-all duration-300
                                    ${hovered === p.slug ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path d="M2 11L11 2M11 2H4.5M11 2v6.5" stroke="black" strokeWidth="1.8"
                              strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-white/[0.06] bg-[#07070e]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Ready to be our next success story?
          </h2>
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

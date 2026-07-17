"use client";

import { useState } from "react";
import Link from "next/link";

const categories = ["All", "Web Design", "Mobile Apps", "Branding", "Video & Animation"];

const projects = [
  // Web Design (14)
  { id: 1,  slug: "luxestore-ecommerce",        title: "Galaxy Games and Collectibles", category: "Web Design",        image: "/portfolio/portfolio_web1.webp",  year: "2024" },
  { id: 2,  slug: "fintech-dashboard",           title: "Rev. Leonidas A. Johnson, O.D.", category: "Web Design",        image: "/portfolio/portfolio_web2.webp",  year: "2024" },
  { id: 3,  slug: "saas-landing",                title: "PROMECHSYS",                    category: "Web Design",        image: "/portfolio/portfolio_web3.webp",  year: "2024" },
  { id: 4,  slug: "real-estate-portal",          title: "Unique Physique",               category: "Web Design",        image: "/portfolio/portfolio_web4.webp",  year: "2023" },
  { id: 5,  slug: "education-platform",          title: "Apex Water Jetting",            category: "Web Design",        image: "/portfolio/portfolio_web5.webp",  year: "2023" },
  { id: 6,  slug: "corporate-agency",            title: "All Organic Wellness",          category: "Web Design",        image: "/portfolio/portfolio_web6.webp",  year: "2023" },
  { id: 19, slug: "crypto-trading-platform",     title: "Big Bear Lake Condos",          category: "Web Design",        image: "/portfolio/portfolio_web19.webp", year: "2024" },
  { id: 20, slug: "medical-dashboard",           title: "TFR Beyouty",                   category: "Web Design",        image: "/portfolio/portfolio_web20.webp", year: "2024" },
  { id: 21, slug: "hotel-booking-website",       title: "Tyche & Nemesis",               category: "Web Design",        image: "/portfolio/portfolio_web21.webp", year: "2024" },
  { id: 22, slug: "event-management-portal",     title: "Praesidium International",      category: "Web Design",        image: "/portfolio/portfolio_web22.webp", year: "2023" },
  { id: 23, slug: "legal-services-website",      title: "ThinkSMART",                    category: "Web Design",        image: "/portfolio/portfolio_web23.webp", year: "2023" },
  { id: 24, slug: "architecture-studio-site",    title: "United Realty Estate",          category: "Web Design",        image: "/portfolio/portfolio_web24.webp", year: "2023" },
  { id: 27, slug: "e-wallet-app-web",            title: "Luxury Travel Inc.",            category: "Web Design",        image: "/portfolio/portfolio_web27.webp", year: "2024" },
  { id: 28, slug: "grocery-delivery-web",        title: "Vizions Construction",          category: "Web Design",        image: "/portfolio/portfolio_web28.webp", year: "2024" },
  // Mobile Apps (12)
  { id: 7,  slug: "healthcare-mobile",           title: "Blossom & Co",                  category: "Mobile Apps",       image: "/portfolio/portfolio_web7.webp",  year: "2024" },
  { id: 8,  slug: "restaurant-ordering",         title: "Royal Futbol Academy",          category: "Mobile Apps",       image: "/portfolio/portfolio_web8.webp",  year: "2024" },
  { id: 9,  slug: "fitness-tracker",             title: "Kandu Global Enterprises",      category: "Mobile Apps",       image: "/portfolio/portfolio_web9.webp",  year: "2023" },
  { id: 10, slug: "travel-booking",              title: "Koala Buy",                     category: "Mobile Apps",       image: "/portfolio/portfolio_web10.webp", year: "2023" },
  { id: 29, slug: "social-networking-app",       title: "Hoopla",                        category: "Mobile Apps",       image: "/portfolio/portfolio_web29.webp", year: "2024" },
  { id: 30, slug: "news-media-app",              title: "Alien Nation Corporation",      category: "Mobile Apps",       image: "/portfolio/portfolio_web30.webp", year: "2024" },
  { id: 31, slug: "meditation-app",              title: "MyAudition",                    category: "Mobile Apps",       image: "/portfolio/portfolio_web31.webp", year: "2024" },
  { id: 32, slug: "job-portal-app",              title: "Beautiful Butterflies",         category: "Mobile Apps",       image: "/portfolio/portfolio_web32.webp", year: "2023" },
  { id: 33, slug: "real-estate-mobile-app",      title: "NutriChef Academy",             category: "Mobile Apps",       image: "/portfolio/portfolio_web33.webp", year: "2023" },
  { id: 34, slug: "music-streaming-app",         title: "Heart Mind Charitable Trust",   category: "Mobile Apps",       image: "/portfolio/portfolio_web34.webp", year: "2023" },
  { id: 35, slug: "ride-sharing-app",            title: "Pro Shooter",                   category: "Mobile Apps",       image: "/portfolio/portfolio_web35.webp", year: "2023" },
  { id: 36, slug: "banking-app",                 title: "Local Talents",                 category: "Mobile Apps",       image: "/portfolio/portfolio_web36.webp", year: "2024" },
  // Branding (11)
  { id: 11, slug: "luxury-brand",                title: "Old Tybee",                     category: "Branding",          image: "/portfolio/portfolio_web11.webp", year: "2024" },
  { id: 12, slug: "tech-startup-branding",       title: "Seamly",                        category: "Branding",          image: "/portfolio/portfolio_web12.webp", year: "2024" },
  { id: 13, slug: "food-beverage-identity",      title: "LaHood Music",                  category: "Branding",          image: "/portfolio/portfolio_web13.webp", year: "2023" },
  { id: 14, slug: "fashion-brand-package",       title: "Fire Sail Studios",             category: "Branding",          image: "/portfolio/portfolio_web14.webp", year: "2023" },
  { id: 37, slug: "coffee-brand-identity",       title: "1300 Cameras",                  category: "Branding",          image: "/portfolio/portfolio_web37.webp", year: "2024" },
  { id: 38, slug: "wellness-brand-package",      title: "Promo Novelties",               category: "Branding",          image: "/portfolio/portfolio_web38.webp", year: "2024" },
  { id: 39, slug: "sports-brand-design",         title: "Exclusive Events and Destination", category: "Branding",       image: "/portfolio/portfolio_web39.webp", year: "2023" },
  { id: 40, slug: "pet-care-brand",              title: "Best Golf Posture",             category: "Branding",          image: "/portfolio/portfolio_web40.webp", year: "2023" },
  { id: 41, slug: "bakery-brand-identity",       title: "Lady Geo",                      category: "Branding",          image: "/portfolio/portfolio_web41.webp", year: "2023" },
  { id: 42, slug: "tech-company-rebrand",        title: "T4T Contracting",               category: "Branding",          image: "/portfolio/portfolio_web42.webp", year: "2024" },
  { id: 43, slug: "cosmetics-brand-package",     title: "Asian Wok",                     category: "Branding",          image: "/portfolio/portfolio_web43.webp", year: "2024" },
  // Video & Animation (17)
  { id: 15, slug: "product-animation",           title: "G Cycle Works, LLC",            category: "Video & Animation", image: "/portfolio/portfolio_web15.webp", year: "2024" },
  { id: 16, slug: "corporate-explainer",         title: "Farantino",                     category: "Video & Animation", image: "/portfolio/portfolio_web16.webp", year: "2024" },
  { id: 17, slug: "social-media-campaign",       title: "Aurora Capital Markets",        category: "Video & Animation", image: "/portfolio/portfolio_web17.webp", year: "2023" },
  { id: 18, slug: "2d-brand-animation",          title: "Jeni",                          category: "Video & Animation", image: "/portfolio/portfolio_web18.webp", year: "2023" },
  { id: 45, slug: "brand-documentary-film",      title: "One Stop Classics",             category: "Video & Animation", image: "/portfolio/portfolio_web45.webp", year: "2024" },
  { id: 46, slug: "product-launch-video",        title: "Lucky Dream Girl Design",       category: "Video & Animation", image: "/portfolio/portfolio_web46.webp", year: "2024" },
  { id: 47, slug: "testimonial-ad-series",       title: "Salon Ambassador",              category: "Video & Animation", image: "/portfolio/portfolio_web47.webp", year: "2024" },
  { id: 48, slug: "motion-graphics-package",     title: "Legacy Acquisition Partners",   category: "Video & Animation", image: "/portfolio/portfolio_web48.webp", year: "2023" },
  { id: 49, slug: "trade-show-reel",             title: "CDEEM, Co.",                    category: "Video & Animation", image: "/portfolio/portfolio_web49.webp", year: "2023" },
  { id: 50, slug: "instagram-story-series",      title: "DigiLyn",                       category: "Video & Animation", image: "/portfolio/portfolio_web50.webp", year: "2023" },
  { id: 51, slug: "youtube-channel-intro",       title: "NeuVybe LLC",                   category: "Video & Animation", image: "/portfolio/portfolio_web51.webp", year: "2024" },
  { id: 52, slug: "3d-logo-animation",           title: "House of Topham",               category: "Video & Animation", image: "/portfolio/portfolio_web52.webp", year: "2024" },
  { id: 53, slug: "event-highlight-video",       title: "Sall Restaurant and Lounge",    category: "Video & Animation", image: "/portfolio/portfolio_web53.webp", year: "2023" },
  { id: 54, slug: "recruitment-campaign-video",  title: "Electrical Services Unlimited", category: "Video & Animation", image: "/portfolio/portfolio_web54.webp", year: "2023" },
  { id: 55, slug: "app-demo-video",              title: "Enlighten Your Parenting",      category: "Video & Animation", image: "/portfolio/portfolio_web55.webp", year: "2024" },
  { id: 56, slug: "whiteboard-animation",        title: "123 Job Finders Inc.",          category: "Video & Animation", image: "/portfolio/portfolio_web56.webp", year: "2023" },
  { id: 57, slug: "corporate-interview-series",  title: "CreativePreneur",               category: "Video & Animation", image: "/portfolio/portfolio_web57.webp", year: "2024" },
];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? projects
    : projects.filter(p => p.category === active);

  return (
    <main className="bg-[#050508] text-white min-h-screen overflow-x-hidden">

      {/* ── Hero ── */}
      <section className="relative w-full pt-32 md:pt-44 pb-20 md:pb-28 border-b border-white/[0.05] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-30"
            style={{ background: "radial-gradient(circle at 70% 20%, rgba(124,106,247,0.15) 0%, transparent 60%)" }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-20"
            style={{ background: "radial-gradient(circle, rgba(90,120,240,0.12) 0%, transparent 70%)" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-[#7c6af7]" />
                <span className="text-[#7c6af7] text-[11px] font-bold uppercase tracking-[0.3em]">
                  Our Work
                </span>
              </div>
              <h1 style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
                className="font-black tracking-tight leading-[0.88] text-white">
                OUR
                <br />
                <span className="text-transparent"
                  style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.2)" }}>
                  PORTFOLIO
                </span>
              </h1>
            </div>
            <div className="max-w-xs">
              <p className="text-zinc-500 text-base leading-relaxed font-light">
                {projects.length}+ projects delivered across web, mobile, brand, and motion.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-white font-extrabold text-2xl">54</span>
                  <span className="text-zinc-600 text-[10px] uppercase tracking-wider">Projects</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-white font-extrabold text-2xl">4</span>
                  <span className="text-zinc-600 text-[10px] uppercase tracking-wider">Categories</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-white font-extrabold text-2xl">98%</span>
                  <span className="text-zinc-600 text-[10px] uppercase tracking-wider">Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Filter Bar ── */}
      <div className="sticky top-16 z-30 bg-[#050508]/90 backdrop-blur-2xl border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-1 overflow-x-auto py-4" style={{ scrollbarWidth: "none" }}>
            {categories.map(cat => {
              const count = cat === "All" ? projects.length : projects.filter(p => p.category === cat).length;
              return (
                <button key={cat} onClick={() => setActive(cat)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase
                              tracking-[0.1em] whitespace-nowrap shrink-0 transition-all duration-200
                              ${active === cat
                                ? "text-white"
                                : "text-zinc-600 hover:text-zinc-300"
                              }`}>
                  {active === cat && (
                    <span className="absolute inset-0 rounded-lg bg-white/[0.07] border border-white/[0.10]" />
                  )}
                  <span className="relative">{cat}</span>
                  <span className={`relative text-[10px] font-mono
                    ${active === cat ? "text-[#7c6af7]" : "text-zinc-700"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Grid ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-14 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.05]">
          {filtered.map((p, idx) => (
            <Link key={p.id} href={`/portfolio/${p.slug}`}
              className="group relative bg-[#050508] overflow-hidden transition-all duration-300 hover:bg-[#0c0c14]">

              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={p.image} alt={p.title} loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out
                             group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/30 to-transparent" />

                {/* Index number */}
                <div className="absolute top-4 left-4 w-8 h-8 rounded-lg bg-black/70 backdrop-blur-sm
                                border border-white/10 flex items-center justify-center">
                  <span className="text-zinc-500 text-[10px] font-mono font-bold">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Arrow on hover */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-[#7c6af7]/0 border border-white/0
                                flex items-center justify-center transition-all duration-300
                                group-hover:bg-[#7c6af7]/20 group-hover:border-[#7c6af7]/40">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    className="text-transparent group-hover:text-[#a89df9] transition-colors duration-300 -rotate-45">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Card info */}
              <div className="p-5 border-t border-white/[0.05]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[#7c6af7] text-[9px] font-bold uppercase tracking-[0.2em] block mb-1.5">
                      {p.category}
                    </span>
                    <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-[#a89df9]
                                   transition-colors duration-200">
                      {p.title}
                    </h3>
                  </div>
                  <span className="text-zinc-700 text-[10px] font-mono shrink-0 mt-0.5">{p.year}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Result count */}
        <p className="text-zinc-700 text-xs font-mono text-center mt-8 tracking-wider">
          — {filtered.length} projects —
        </p>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-white/[0.05] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(124,106,247,0.08) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-36 text-center relative z-10">
          <span className="text-[#7c6af7] text-[11px] font-bold uppercase tracking-[0.3em] block mb-6">
            Ready to collaborate?
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            className="font-black tracking-tight leading-tight text-white mb-6">
            Let&apos;s build your{" "}
            <span className="bg-gradient-to-r from-[#7c6af7] to-[#5a78f0] bg-clip-text text-transparent">
              next big thing.
            </span>
          </h2>
          <p className="text-zinc-500 text-base max-w-sm mx-auto font-light mb-10">
            From concept to launch — we turn bold ideas into results-driven digital products.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#7c6af7] text-white
                         font-bold text-sm uppercase tracking-[0.1em] hover:bg-[#6a59e0]
                         transition-colors duration-200 shadow-[0_0_40px_rgba(124,106,247,0.3)]">
              Start a Project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/packages"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/[0.10]
                         text-zinc-400 font-bold text-sm uppercase tracking-[0.1em]
                         hover:border-white/25 hover:text-white transition-all duration-200">
              View Packages
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

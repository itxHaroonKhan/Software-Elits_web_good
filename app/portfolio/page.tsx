"use client";

import { useState } from "react";
import Link from "next/link";

const categories = ["All Projects", "Web Design", "Mobile Apps", "Branding", "Video & Animation"];

const projects = [
  // Web Design (14)
  { id: 1,  slug: "luxestore-ecommerce",        title: "LuxeStore E-Commerce",         category: "Web Design",        image: "/portfolio/portfolio_web1.webp",  year: "2024" },
  { id: 2,  slug: "fintech-dashboard",           title: "FinTech Dashboard UI",          category: "Web Design",        image: "/portfolio/portfolio_web2.webp",  year: "2024" },
  { id: 3,  slug: "saas-landing",                title: "SaaS Landing Page",             category: "Web Design",        image: "/portfolio/portfolio_web3.webp",  year: "2024" },
  { id: 4,  slug: "real-estate-portal",          title: "Real Estate Portal",            category: "Web Design",        image: "/portfolio/portfolio_web4.webp",  year: "2023" },
  { id: 5,  slug: "education-platform",          title: "Education Platform",            category: "Web Design",        image: "/portfolio/portfolio_web5.webp",  year: "2023" },
  { id: 6,  slug: "corporate-agency",            title: "Corporate Agency Site",         category: "Web Design",        image: "/portfolio/portfolio_web6.webp",  year: "2023" },
  { id: 19, slug: "crypto-trading-platform",     title: "Crypto Trading Platform",       category: "Web Design",        image: "/portfolio/portfolio_web19.webp", year: "2024" },
  { id: 20, slug: "medical-dashboard",           title: "Medical Dashboard",             category: "Web Design",        image: "/portfolio/portfolio_web20.webp", year: "2024" },
  { id: 21, slug: "hotel-booking-website",       title: "Hotel Booking Website",         category: "Web Design",        image: "/portfolio/portfolio_web21.webp", year: "2024" },
  { id: 22, slug: "event-management-portal",     title: "Event Management Portal",       category: "Web Design",        image: "/portfolio/portfolio_web22.webp", year: "2023" },
  { id: 23, slug: "legal-services-website",      title: "Legal Services Website",        category: "Web Design",        image: "/portfolio/portfolio_web23.webp", year: "2023" },
  { id: 24, slug: "architecture-studio-site",    title: "Architecture Studio Site",      category: "Web Design",        image: "/portfolio/portfolio_web24.webp", year: "2023" },
  { id: 27, slug: "e-wallet-app-web",            title: "E-Wallet Web App",              category: "Web Design",        image: "/portfolio/portfolio_web27.webp", year: "2024" },
  { id: 28, slug: "grocery-delivery-web",        title: "Grocery Delivery Platform",     category: "Web Design",        image: "/portfolio/portfolio_web28.webp", year: "2024" },
  // Mobile Apps (12)
  { id: 7,  slug: "healthcare-mobile",           title: "Healthcare Mobile App",         category: "Mobile Apps",       image: "/portfolio/portfolio_web7.webp",  year: "2024" },
  { id: 8,  slug: "restaurant-ordering",         title: "Restaurant Ordering App",       category: "Mobile Apps",       image: "/portfolio/portfolio_web8.webp",  year: "2024" },
  { id: 9,  slug: "fitness-tracker",             title: "Fitness Tracker App",           category: "Mobile Apps",       image: "/portfolio/portfolio_web9.webp",  year: "2023" },
  { id: 10, slug: "travel-booking",              title: "Travel & Booking App",          category: "Mobile Apps",       image: "/portfolio/portfolio_web10.webp", year: "2023" },
  { id: 29, slug: "social-networking-app",       title: "Social Networking App",         category: "Mobile Apps",       image: "/portfolio/portfolio_web29.webp", year: "2024" },
  { id: 30, slug: "news-media-app",              title: "News & Media App",              category: "Mobile Apps",       image: "/portfolio/portfolio_web30.webp", year: "2024" },
  { id: 31, slug: "meditation-app",              title: "Meditation & Wellness App",     category: "Mobile Apps",       image: "/portfolio/portfolio_web31.webp", year: "2024" },
  { id: 32, slug: "job-portal-app",              title: "Job Portal App",                category: "Mobile Apps",       image: "/portfolio/portfolio_web32.webp", year: "2023" },
  { id: 33, slug: "real-estate-mobile-app",      title: "Real Estate Mobile App",        category: "Mobile Apps",       image: "/portfolio/portfolio_web33.webp", year: "2023" },
  { id: 34, slug: "music-streaming-app",         title: "Music Streaming App",           category: "Mobile Apps",       image: "/portfolio/portfolio_web34.webp", year: "2023" },
  { id: 35, slug: "ride-sharing-app",            title: "Ride Sharing App",              category: "Mobile Apps",       image: "/portfolio/portfolio_web35.webp", year: "2023" },
  { id: 36, slug: "banking-app",                 title: "Banking & Finance App",         category: "Mobile Apps",       image: "/portfolio/portfolio_web36.webp", year: "2024" },
  // Branding (11)
  { id: 11, slug: "luxury-brand",                title: "Luxury Brand Identity",         category: "Branding",          image: "/portfolio/portfolio_web11.webp", year: "2024" },
  { id: 12, slug: "tech-startup-branding",       title: "Tech Startup Branding",         category: "Branding",          image: "/portfolio/portfolio_web12.webp", year: "2024" },
  { id: 13, slug: "food-beverage-identity",      title: "Food & Beverage Identity",      category: "Branding",          image: "/portfolio/portfolio_web13.webp", year: "2023" },
  { id: 14, slug: "fashion-brand-package",       title: "Fashion Brand Package",         category: "Branding",          image: "/portfolio/portfolio_web14.webp", year: "2023" },
  { id: 37, slug: "coffee-brand-identity",       title: "Coffee Brand Identity",         category: "Branding",          image: "/portfolio/portfolio_web37.webp", year: "2024" },
  { id: 38, slug: "wellness-brand-package",      title: "Wellness Brand Package",        category: "Branding",          image: "/portfolio/portfolio_web38.webp", year: "2024" },
  { id: 39, slug: "sports-brand-design",         title: "Sports Brand Design",           category: "Branding",          image: "/portfolio/portfolio_web39.webp", year: "2023" },
  { id: 40, slug: "pet-care-brand",              title: "Pet Care Brand Identity",       category: "Branding",          image: "/portfolio/portfolio_web40.webp", year: "2023" },
  { id: 41, slug: "bakery-brand-identity",       title: "Bakery Brand Identity",         category: "Branding",          image: "/portfolio/portfolio_web41.webp", year: "2023" },
  { id: 42, slug: "tech-company-rebrand",        title: "Tech Company Rebrand",          category: "Branding",          image: "/portfolio/portfolio_web42.webp", year: "2024" },
  { id: 43, slug: "cosmetics-brand-package",     title: "Cosmetics Brand Package",       category: "Branding",          image: "/portfolio/portfolio_web43.webp", year: "2024" },
  // Video & Animation (17)
  { id: 15, slug: "product-animation",           title: "Product Animation Reel",        category: "Video & Animation", image: "/portfolio/portfolio_web15.webp", year: "2024" },
  { id: 16, slug: "corporate-explainer",         title: "Corporate Explainer Video",     category: "Video & Animation", image: "/portfolio/portfolio_web16.webp", year: "2024" },
  { id: 17, slug: "social-media-campaign",       title: "Social Media Ad Campaign",      category: "Video & Animation", image: "/portfolio/portfolio_web17.webp", year: "2023" },
  { id: 18, slug: "2d-brand-animation",          title: "2D Brand Animation",            category: "Video & Animation", image: "/portfolio/portfolio_web18.webp", year: "2023" },
  { id: 45, slug: "brand-documentary-film",      title: "Brand Documentary Film",        category: "Video & Animation", image: "/portfolio/portfolio_web45.webp", year: "2024" },
  { id: 46, slug: "product-launch-video",        title: "Product Launch Video",          category: "Video & Animation", image: "/portfolio/portfolio_web46.webp", year: "2024" },
  { id: 47, slug: "testimonial-ad-series",       title: "Testimonial Ad Series",         category: "Video & Animation", image: "/portfolio/portfolio_web47.webp", year: "2024" },
  { id: 48, slug: "motion-graphics-package",     title: "Motion Graphics Package",       category: "Video & Animation", image: "/portfolio/portfolio_web48.webp", year: "2023" },
  { id: 49, slug: "trade-show-reel",             title: "Trade Show Highlight Reel",     category: "Video & Animation", image: "/portfolio/portfolio_web49.webp", year: "2023" },
  { id: 50, slug: "instagram-story-series",      title: "Instagram Story Series",        category: "Video & Animation", image: "/portfolio/portfolio_web50.webp", year: "2023" },
  { id: 51, slug: "youtube-channel-intro",       title: "YouTube Channel Intro",         category: "Video & Animation", image: "/portfolio/portfolio_web51.webp", year: "2024" },
  { id: 52, slug: "3d-logo-animation",           title: "3D Logo Animation",             category: "Video & Animation", image: "/portfolio/portfolio_web52.webp", year: "2024" },
  { id: 53, slug: "event-highlight-video",       title: "Event Highlight Video",         category: "Video & Animation", image: "/portfolio/portfolio_web53.webp", year: "2023" },
  { id: 54, slug: "recruitment-campaign-video",  title: "Recruitment Campaign Video",    category: "Video & Animation", image: "/portfolio/portfolio_web54.webp", year: "2023" },
  { id: 55, slug: "app-demo-video",              title: "App Demo & Promo Video",        category: "Video & Animation", image: "/portfolio/portfolio_web55.webp", year: "2024" },
  { id: 56, slug: "whiteboard-animation",        title: "Whiteboard Animation",          category: "Video & Animation", image: "/portfolio/portfolio_web56.webp", year: "2023" },
  { id: 57, slug: "corporate-interview-series",  title: "Corporate Interview Series",    category: "Video & Animation", image: "/portfolio/portfolio_web57.webp", year: "2024" },
];

const counts: Record<string, number> = categories.reduce((acc, cat) => {
  if (cat !== "All Projects") {
    acc[cat] = projects.filter(p => p.category === cat).length;
  }
  return acc;
}, {} as Record<string, number>);

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
            <Link key={p.id} href={`/portfolio/${p.slug}`}
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
            </Link>
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

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home",         href: "/"              },
  { label: "About",        href: "/about"         },
  { label: "Services",     href: "/services"      },
  { label: "Portfolio",    href: "/portfolio"     },
  { label: "Agency",       href: "/agency"        },
];

const serviceLinks = [
  {
    number: "01", label: "Custom Software Development", href: "/services/custom-software",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&h=300&fit=crop",
  },
  {
    number: "02", label: "Web & Mobile App Development", href: "/services/web-mobile",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=400&h=300&fit=crop",
  },
  {
    number: "03", label: "AI & Machine Learning", href: "/services/ai-ml",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=400&h=300&fit=crop",
  },
  {
    number: "04", label: "Cloud Infrastructure & DevOps", href: "/services/cloud-devops",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=400&h=300&fit=crop",
  },
  {
    number: "05", label: "UI/UX Design", href: "/services/ui-ux",
    image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?q=80&w=400&h=300&fit=crop",
  },
  {
    number: "06", label: "Website Design", href: "/services/website-design",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=400&h=300&fit=crop",
  },
  {
    number: "07", label: "E-Commerce Solutions", href: "/services/ecommerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=400&h=300&fit=crop",
  },
  {
    number: "08", label: "WordPress Development", href: "/services/wordpress",
    image: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?q=80&w=400&h=300&fit=crop",
  },
  {
    number: "09", label: "Video & Animation", href: "/services/video-animation",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=400&h=300&fit=crop",
  },
  {
    number: "10", label: "Logo & Branding", href: "/services/logo-branding",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=400&h=300&fit=crop",
  },
  {
    number: "11", label: "Domain & Hosting", href: "/services/domain-hosting",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=400&h=300&fit=crop",
  },
  {
    number: "12", label: "Website Maintenance", href: "/services/website-maintenance",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&h=300&fit=crop",
  },
  {
    number: "13", label: "SEO Optimization", href: "/services/seo",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&h=300&fit=crop",
  },
  {
    number: "14", label: "Social Media Marketing", href: "/services/social-media",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=400&h=300&fit=crop",
  },
];

export default function Header() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState(serviceLinks[0]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* ═══════════════════════════════ NAVBAR ═══════════════════════════ */}
      <header className="fixed inset-x-0 top-0 z-50 h-20">

        {/* Background layer — fades in smoothly across the whole bar */}
        <div className={`
          absolute inset-0 backdrop-blur-2xl
          bg-[linear-gradient(135deg,#0a0a14_0%,#12101f_100%)]
          transition-opacity duration-500 ease-out
          ${scrolled ? "opacity-90" : "opacity-35"}
        `} />

        {/* Faint brand-color wash */}
        <div className={`
          absolute inset-0
          bg-gradient-to-r from-[#7c6af7]/[0.06] via-transparent to-[#5a78f0]/[0.06]
          transition-opacity duration-500 ease-out
          ${scrolled ? "opacity-100" : "opacity-60"}
        `} />

        {/* Shadow layer — fades in with the background */}
        <div className={`
          absolute inset-0 shadow-[0_2px_60px_rgba(0,0,0,0.8)]
          transition-opacity duration-500 ease-out
          ${scrolled ? "opacity-100" : "opacity-0"}
        `} />

        {/* Gradient border bottom */}
        <div className="absolute bottom-0 inset-x-0 h-px">
          <div className={`
            absolute inset-0 bg-white/[0.06]
            transition-opacity duration-500
            ${scrolled ? "opacity-0" : "opacity-100"}
          `} />
          <div className={`
            absolute inset-0 bg-gradient-to-r from-transparent via-[#7c6af7]/40 to-transparent
            transition-opacity duration-500
            ${scrolled ? "opacity-100" : "opacity-0"}
          `} />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-12
                        flex items-center justify-between gap-8">

          {/* ── Logo ─────────────────────────────────────────────────── */}
          <Link href="/" aria-label="Software Elites" className="shrink-0 group">
            <Image
              src="/Logoo.png"
              alt="Software Elites"
              width={180}
              height={48}
              className="h-11 w-auto object-contain
                         transition-transform duration-300 group-hover:scale-[1.03]"
              priority
            />
          </Link>

          {/* ── Desktop nav ──────────────────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ label, href }) =>
              label === "Services" ? (
                <div key={href} className="relative group/services">
                  <Link
                    href={href}
                    className="px-3 py-2 rounded-lg text-[13.5px] font-medium text-white/50
                               hover:text-white hover:bg-white/[0.06]
                               transition-all duration-200
                               relative group flex items-center gap-1"
                  >
                    {label}
                    <svg
                      className="w-3 h-3 transition-transform duration-300 group-hover/services:rotate-180"
                      fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                    </svg>
                    <span className="absolute bottom-1 left-3 right-3 h-px rounded-full
                                     bg-gradient-to-r from-[#7c6af7] to-[#5a78f0]
                                     scale-x-0 group-hover:scale-x-100
                                     transition-transform duration-300 origin-left" />
                  </Link>

                  {/* Full-width dropdown */}
                  <div
                    className="fixed inset-x-0 top-20
                               opacity-0 invisible -translate-y-1
                               group-hover/services:opacity-100 group-hover/services:visible
                               group-hover/services:translate-y-0
                               transition-all duration-250 ease-out"
                  >
                    <div className="w-full bg-[#0c0b16]/98 backdrop-blur-2xl
                                    border-b border-white/[0.08]
                                    shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
                      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex gap-8">

                        {/* Left: image bento cards */}
                        <div className="flex-1">
                          <div className="flex items-center justify-between pb-4">
                            <span className="text-[10px] font-bold uppercase
                                             tracking-[0.2em] text-white/30">
                              Our Services
                            </span>
                            <span className="text-[10px] font-mono text-white/20">
                              {serviceLinks.length} total
                            </span>
                          </div>
                          <div className="grid grid-cols-4 gap-x-6 gap-y-1">
                            {serviceLinks.map((s) => (
                              <Link
                                key={s.href}
                                href={s.href}
                                onMouseEnter={() => setHoveredService(s)}
                                className="group/card flex items-center gap-3 px-2 py-3
                                           border-b border-white/[0.05]
                                           transition-all duration-200"
                              >
                                <span className="text-[10px] font-mono font-bold text-white/25
                                                 group-hover/card:text-[#a89df9]
                                                 transition-colors duration-200">
                                  {s.number}
                                </span>
                                <span className="text-[13px] font-medium leading-snug
                                                 text-white/60 group-hover/card:text-white
                                                 transition-colors duration-200">
                                  {s.label}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Right: featured image + CTA */}
                        <Link
                          href={hoveredService.href}
                          className="group/feat relative w-[260px] shrink-0 rounded-xl overflow-hidden"
                        >
                          <Image
                            key={hoveredService.href}
                            src={hoveredService.image}
                            alt={hoveredService.label}
                            fill
                            sizes="260px"
                            className="object-cover transition-transform duration-500 group-hover/feat:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b16] via-[#0c0b16]/50 to-transparent" />
                          <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#a89df9]">
                              {hoveredService.number} / {String(serviceLinks.length).padStart(2, "0")}
                            </span>
                            <span className="text-sm font-bold text-white leading-snug">
                              {hoveredService.label}
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold
                                             text-white/70 group-hover/feat:text-white
                                             transition-colors duration-200">
                              View service
                              <svg className="w-3 h-3 transition-transform duration-200 group-hover/feat:translate-x-0.5"
                                   fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                              </svg>
                            </span>
                          </div>
                        </Link>

                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={href}
                  href={href}
                  className="px-3 py-2 rounded-lg text-[13.5px] font-medium text-white/50
                             hover:text-white hover:bg-white/[0.06]
                             transition-all duration-200
                             relative group"
                >
                  {label}
                  <span className="absolute bottom-1 left-3 right-3 h-px rounded-full
                                   bg-gradient-to-r from-[#7c6af7] to-[#5a78f0]
                                   scale-x-0 group-hover:scale-x-100
                                   transition-transform duration-300 origin-left" />
                </Link>
              )
            )}
          </nav>

          {/* ── Right: Contact + hamburger ───────────────────────────── */}
          <div className="flex items-center gap-3">

            {/* Contact CTA */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2
                         px-5 py-2.5 rounded-full text-sm font-semibold text-white
                         bg-gradient-to-r from-[#7c6af7] to-[#5a78f0]
                         shadow-[0_0_20px_rgba(124,106,247,0.4)]
                         hover:shadow-[0_0_32px_rgba(124,106,247,0.6)]
                         hover:scale-[1.04] active:scale-[0.97]
                         transition-all duration-200"
            >
              <span>Get in Touch</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="lg:hidden flex flex-col justify-center items-center
                         w-11 h-11 gap-[5px] rounded-lg hover:bg-white/[0.06]
                         transition-colors duration-200"
            >
              <span className={`block w-6 h-[1.5px] bg-white rounded-full
                                transition-all duration-300
                                ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
              <span className={`block h-[1.5px] bg-white rounded-full
                                transition-all duration-300
                                ${mobileOpen ? "opacity-0 w-0" : "w-4"}`} />
              <span className={`block w-6 h-[1.5px] bg-white rounded-full
                                transition-all duration-300
                                ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
            </button>

          </div>
        </div>
      </header>

      {/* ═══════════════════════════ MOBILE MENU ══════════════════════════ */}
      <div className={`
        fixed inset-0 z-40 lg:hidden
        flex flex-col
        bg-[#07070a]
        transition-all duration-400
        ${mobileOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
        }
      `}>

        {/* Top spacer (same height as header) */}
        <div className="h-20 shrink-0 border-b border-white/[0.05]" />

        {/* Links */}
        <nav className="flex flex-col flex-1 px-6 pt-8 pb-10 overflow-y-auto">
          {navLinks.map(({ label, href }, i) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              style={{ transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms" }}
              className={`
                py-4 border-b border-white/[0.05]
                text-2xl font-semibold tracking-tight
                transition-all duration-300
                ${mobileOpen
                  ? "opacity-100 translate-y-0 text-white/80"
                  : "opacity-0 translate-y-3 text-white/0"
                }
                hover:text-white hover:pl-2
              `}
            >
              {label}
            </Link>
          ))}

          {/* Mobile Contact CTA */}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            style={{ transitionDelay: mobileOpen ? `${navLinks.length * 50 + 80}ms` : "0ms" }}
            className={`
              mt-10 flex items-center justify-center gap-2
              py-4 rounded-full text-base font-semibold
              bg-gradient-to-r from-[#7c6af7] to-[#5a78f0] text-white
              shadow-[0_0_28px_rgba(124,106,247,0.4)]
              active:scale-[0.98] transition-all duration-300
              ${mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </Link>

        </nav>

        {/* Bottom strip */}
        <div className="px-6 py-5 border-t border-white/[0.05] flex items-center justify-between">
          <a href="mailto:info@softwareelites.com"
             className="text-zinc-500 text-sm hover:text-white transition-colors duration-200">
            info@softwareelites.com
          </a>
          <span className="text-zinc-700 text-xs">Richmond, VA 23234</span>
        </div>

      </div>
    </>
  );
}

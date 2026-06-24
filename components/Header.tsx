"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home",         href: "/"              },
  { label: "About",        href: "/about"         },
  { label: "Services",     href: "/services"      },
  { label: "Portfolio",    href: "/portfolio"     },
  { label: "Projects",     href: "/projects"      },
  { label: "Packages",     href: "/packages"      },
  { label: "Technologies", href: "/technologies"  },
  { label: "Agency",       href: "/agency"        },
];

export default function Header() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
      <header className={`
        fixed inset-x-0 top-0 z-50 h-20
        transition-all duration-500
        ${scrolled
          ? "bg-[#07070a]/90 backdrop-blur-2xl shadow-[0_2px_60px_rgba(0,0,0,0.8)]"
          : "bg-transparent"
        }
      `}>

        {/* Gradient border bottom */}
        <div className={`
          absolute bottom-0 inset-x-0 h-px
          transition-opacity duration-500
          ${scrolled
            ? "bg-gradient-to-r from-transparent via-[#7c6af7]/40 to-transparent opacity-100"
            : "bg-white/[0.06] opacity-100"
          }
        `} />

        <div className="h-full max-w-7xl mx-auto px-6 lg:px-12
                        flex items-center justify-between gap-8">

          {/* ── Logo ─────────────────────────────────────────────────── */}
          <Link href="/" aria-label="Software Elites" className="shrink-0 group">
            <Image
              src="/Logoo.png"
              alt="Software Elites"
              width={180}
              height={48}
              className="h-11 w-auto object-contain mix-blend-screen
                         transition-transform duration-300 group-hover:scale-[1.03]"
              priority
            />
          </Link>

          {/* ── Desktop nav ──────────────────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ label, href }) => (
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
            ))}
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

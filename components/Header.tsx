"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Our Work",  href: "/work"      },
  { label: "Services",  href: "/services"  },
  { label: "Pricing",   href: "/pricing"   },
  { label: "About Us",  href: "/about"     },
  { label: "Resources", href: "/resources" },
  { label: "Careers",   href: "/careers"   },
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
        fixed inset-x-0 top-0 z-50 h-16
        transition-all duration-500
        ${scrolled
          ? "bg-[#07070a]/95 backdrop-blur-xl border-b border-white/[0.07] shadow-[0_1px_40px_rgba(0,0,0,0.7)]"
          : "bg-transparent border-b border-white/[0.05]"
        }
      `}>

        <div className="h-full max-w-7xl mx-auto px-6 lg:px-10
                        flex items-center justify-between gap-8">

          {/* ── Logo ─────────────────────────────────────────────────── */}
          <Link href="/" aria-label="Software Elites" className="shrink-0">
            <Image
              src="/Logoo.png"
              alt="Software Elites"
              width={150}
              height={40}
              className="h-8 w-auto object-contain mix-blend-screen"
              priority
            />
          </Link>

          {/* ── Desktop nav ──────────────────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-white/45 hover:text-white
                           transition-colors duration-200
                           relative
                           after:absolute after:-bottom-1 after:left-0
                           after:h-[1.5px] after:w-0 after:rounded-full
                           after:bg-gradient-to-r after:from-[#7c6af7] after:to-[#5a78f0]
                           after:transition-[width] after:duration-300
                           hover:after:w-full"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* ── Right: Contact + hamburger ───────────────────────────── */}
          <div className="flex items-center gap-4">

            {/* Contact CTA */}
            <Link href="/contact" className="btn btn-accent btn-sm hidden lg:inline-flex">
              Contact
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="lg:hidden flex flex-col justify-center items-center
                         w-10 h-10 gap-[5px] group"
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
        <div className="h-16 shrink-0 border-b border-white/[0.05]" />

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
              mt-10 flex items-center justify-center
              py-4 rounded-full text-base font-semibold
              bg-gradient-to-r from-[#7c6af7] to-[#5a78f0] text-white
              shadow-[0_0_24px_rgba(124,106,247,0.35)]
              active:scale-[0.98] transition-all duration-300
              ${mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            Contact Us
          </Link>

        </nav>

        {/* Bottom strip */}
        <div className="px-6 py-5 border-t border-white/[0.05] flex items-center justify-between">
          <a href="mailto:hello@softwareelites.co.uk"
             className="text-zinc-500 text-sm hover:text-white transition-colors duration-200">
            hello@softwareelites.co.uk
          </a>
          <span className="text-zinc-700 text-xs">USA</span>
        </div>

      </div>
    </>
  );
}

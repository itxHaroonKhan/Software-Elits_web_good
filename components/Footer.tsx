"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

/* ─────────────────────────────────────────────────────────────── data ── */

const footerCols = [
  {
    title: "Our Work",
    links: [
      { label: "Case Studies",  href: "/work" },
      { label: "FinanceFlow",   href: "/work/financeflow" },
      { label: "MediTrack",     href: "/work/meditrack" },
      { label: "ShopForce",     href: "/work/shopforce" },
      { label: "DataSphere",    href: "/work/datasphere" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Custom Software", href: "/services/custom-software" },
      { label: "Web & Mobile",    href: "/services/web-mobile" },
      { label: "AI & ML",         href: "/services/ai-ml" },
      { label: "Cloud & DevOps",  href: "/services/cloud-devops" },
      { label: "UI/UX Design",    href: "/services/ui-ux" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us",   href: "/about" },
      { label: "Pricing",    href: "/pricing" },
      { label: "Resources",  href: "/resources" },
      { label: "Contact Us", href: "/contact" },
      { label: "Careers",    href: "/careers" },
    ],
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/softwareelites",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10V9h4v1.765C14.396 9.66 15.64 9 17 9a5 5 0 0 1 5 5v7h-4v-7a2 2 0 0 0-2-2zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://twitter.com/softwareelites",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/softwareelites",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/softwareelites",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

const quickLinks = [
  { label: "Privacy Policy",   href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy",    href: "/cookies" },
  { label: "Accessibility",    href: "/accessibility" },
  { label: "Sitemap",          href: "/sitemap" },
];

/* ─────────────────────────────────────────────────────────── component ── */

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <hr className="border-t border-white/[0.07] w-full block relative z-10 m-0" />

      {/* ════════════════════════════════════════════════════════════════
          3. MAIN FOOTER
             — relative block w-full: un-collapsed standard document flow.
             — NO overflow-hidden on the footer wrapper itself.
             — pt-36 md:pt-48 creates the required visual buffer zone so
               footer content starts well below the CTA boundary.
         ════════════════════════════════════════════════════════════════ */}
      <footer className="relative block w-full bg-[#05050a] pt-20 md:pt-28 pb-12">

        {/* Grid texture — overflow-hidden is scoped to this child only,
            so it cannot clip the footer's own top-padding buffer zone. */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(124,106,247,0.5) 1px, transparent 1px)," +
                "linear-gradient(90deg, rgba(124,106,247,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* Ambient violet glow in the footer body */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#7c6af7]/[0.04] rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

          {/* ── Newsletter strip ── */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between
                          gap-5 py-8 mb-10 border-b border-white/[0.06]">
            <div>
              <p className="text-white font-semibold text-sm mb-1">Stay in the loop</p>
              <p className="text-zinc-600 text-xs">Engineering insights delivered weekly.</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input type="email" placeholder="your@email.com"
                className="flex-1 sm:w-56 bg-white/[0.04] border border-white/[0.09] rounded-full
                           px-4 py-2.5 text-xs text-white placeholder:text-zinc-600
                           focus:outline-none focus:border-[#7c6af7]/50" />
              <button className="btn btn-accent shrink-0"
                style={{ padding: "0.55rem 1.1rem", fontSize: "0.7rem" }}>
                Subscribe
              </button>
            </div>
          </div>

          {/* ── Column grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12">

            {/* ── Brand column (lg:col-span-4) ── */}
            <div className="md:col-span-2 lg:col-span-4 flex flex-col gap-7">

              <Link href="/" className="w-fit group">
                <Image
                  src="/Logoo.png"
                  alt="Software Elites"
                  width={160}
                  height={40}
                  className="h-9 w-auto object-contain opacity-100 transition-opacity duration-300 group-hover:opacity-75"
                />
              </Link>

              <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                Premium software development agency building custom web apps,
                mobile applications, and cloud infrastructure for ambitious
                businesses worldwide.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2">
                {["ISO 27001", "GDPR Compliant", "AWS Partner"].map((badge) => (
                  <span
                    key={badge}
                    className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.07]
                               text-zinc-500 text-[10px] font-semibold uppercase tracking-wider"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-2.5">
                {socialLinks.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-lg border border-white/[0.08] bg-white/[0.03]
                               flex items-center justify-center text-zinc-500
                               hover:text-white hover:bg-[#7c6af7]/20 hover:border-[#7c6af7]/40
                               transition-all duration-200"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* ── Navigation columns (lg:col-span-2 each) ── */}
            {footerCols.map((col) => (
              <div key={col.title} className="md:col-span-1 lg:col-span-2 flex flex-col gap-5">
                <p className="text-[#7c6af7] text-[10px] font-bold uppercase tracking-[0.2em]">
                  {col.title}
                </p>
                <ul className="flex flex-col gap-3">
                  {col.links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-zinc-500 hover:text-zinc-100 text-sm
                                   transition-all duration-150 hover:translate-x-0.5 inline-block"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* ── Contact column (lg:col-span-2) ── */}
            <div className="md:col-span-1 lg:col-span-2 flex flex-col gap-5">
              <p className="text-[#7c6af7] text-[10px] font-bold uppercase tracking-[0.2em]">
                Contact
              </p>
              <div className="flex flex-col gap-5">
                <div>
                  <span className="text-zinc-600 text-[10px] uppercase tracking-wider block mb-1.5">
                    Email
                  </span>
                  <a
                    href="mailto:hello@softwareelites.co.uk"
                    className="text-zinc-400 hover:text-[#a89df9] text-sm transition-colors duration-150"
                  >
                    hello@softwareelites.co.uk
                  </a>
                </div>
                <div>
                  <span className="text-zinc-600 text-[10px] uppercase tracking-wider block mb-1.5">
                    Phone
                  </span>
                  <a
                    href="tel:+442030263652"
                    className="text-zinc-400 hover:text-[#a89df9] text-sm transition-colors duration-150"
                  >
                    +44 20 3026 3652
                  </a>
                </div>
                <div>
                  <span className="text-zinc-600 text-[10px] uppercase tracking-wider block mb-1.5">
                    Location
                  </span>
                  <span className="text-zinc-400 text-sm">London, United Kingdom</span>
                </div>
                <div>
                  <span className="text-zinc-600 text-[10px] uppercase tracking-wider block mb-1.5">
                    Hours
                  </span>
                  <div className="text-zinc-500 text-xs space-y-0.5">
                    <p>Mon – Fri: 9:00 – 18:00 GMT</p>
                    <p>Sat – Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Bottom-bar divider ── */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

          {/* ── Bottom bar ── */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-7">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
              <span className="text-zinc-600 text-xs">
                &copy; {new Date().getFullYear()} Software Elites Ltd. All rights reserved.
              </span>
              <span className="hidden md:inline text-zinc-700">·</span>
              <span className="text-zinc-700 text-xs">
                Registered in England &amp; Wales · Co. No. 12345678
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              {quickLinks.map((link, idx) => (
                <React.Fragment key={link.label}>
                  <Link
                    href={link.href}
                    className="text-zinc-600 hover:text-zinc-300 text-xs transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                  {idx < quickLinks.length - 1 && (
                    <span className="text-zinc-800 text-xs hidden md:inline">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ── Scroll-to-top ── */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full
                   bg-gradient-to-br from-[#7c6af7] to-[#5a78f0] text-white
                   flex items-center justify-center
                   shadow-lg shadow-[#7c6af7]/25 hover:shadow-[#7c6af7]/45
                   transition-all duration-300 hover:scale-110"
        style={{
          opacity:       showScrollTop ? 1 : 0,
          pointerEvents: showScrollTop ? "auto" : "none",
          transform:     showScrollTop ? "translateY(0)" : "translateY(14px)",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </>
  );
}

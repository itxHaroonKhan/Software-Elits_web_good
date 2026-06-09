"use client";

import { useState } from "react";
import Link from "next/link";

const tabs = ["Logo Design", "Website", "E-Commerce", "Social Media", "SEO", "Video", "Branding"] as const;
type Tab = typeof tabs[number];

type Plan = {
  name: string;
  price: string | number;
  unit?: string;
  popular?: boolean;
  features: string[];
};

const plans: Record<Tab, Plan[]> = {
  "Logo Design": [
    {
      name: "Basic",
      price: 35,
      features: [
        "3 Custom Concepts",
        "1 Designer",
        "4 Revisions",
        "48–72 hrs TAT",
        "Unique Design Guarantee",
      ],
    },
    {
      name: "Professional",
      price: 125,
      popular: true,
      features: [
        "Unlimited Concepts",
        "4 Designers",
        "Unlimited Revisions",
        "Stationary Design",
        "All File Formats",
        "MS Word Letterhead",
      ],
    },
    {
      name: "Elite",
      price: 175,
      features: [
        "Unlimited Concepts",
        "5 Award-Winning Designers",
        "Unlimited Revisions",
        "Icon Design",
        "Free Email Signature",
        "Ownership Rights",
      ],
    },
  ],
  "Website": [
    {
      name: "Basic",
      price: 299,
      features: [
        "5 Pages",
        "Custom Design",
        "2 Stock Photos",
        "SEO Setup",
        "Contact Form",
        "1 Month Maintenance",
      ],
    },
    {
      name: "Standard",
      price: 499,
      popular: true,
      features: [
        "10 Pages",
        "Custom Design",
        "Advanced SEO",
        "Live Chat",
        "Google Analytics",
        "3 Months Maintenance",
      ],
    },
    {
      name: "Premium",
      price: 899,
      features: [
        "20 Pages",
        "Premium Design",
        "Full SEO",
        "Speed Optimization",
        "All Integrations",
        "6 Months Maintenance",
      ],
    },
  ],
  "E-Commerce": [
    {
      name: "Starter",
      price: 599,
      features: [
        "50 Products",
        "PayPal / Stripe",
        "Inventory Management",
        "Mobile Responsive",
        "SSL Certificate",
      ],
    },
    {
      name: "Business",
      price: 999,
      popular: true,
      features: [
        "200 Products",
        "Multiple Gateways",
        "Coupon System",
        "SEO Optimized",
        "PWA Support",
        "3 Months Support",
      ],
    },
    {
      name: "Enterprise",
      price: 1999,
      features: [
        "Unlimited Products",
        "All Gateways",
        "Multi-Currency",
        "Advanced Analytics",
        "12 Months Support",
      ],
    },
  ],
  "Social Media": [
    {
      name: "Starter",
      price: 199,
      unit: "mo",
      features: [
        "2 Platforms",
        "12 Posts / Month",
        "Basic Graphics",
        "Monthly Report",
      ],
    },
    {
      name: "Growth",
      price: 349,
      unit: "mo",
      popular: true,
      features: [
        "4 Platforms",
        "20 Posts / Month",
        "Custom Graphics",
        "Paid Ad Management",
        "Bi-weekly Reports",
      ],
    },
    {
      name: "Enterprise",
      price: 599,
      unit: "mo",
      features: [
        "All Platforms",
        "30 Posts / Month",
        "Premium Graphics",
        "Paid Ads $500",
        "Weekly Strategy Call",
      ],
    },
  ],
  "SEO": [
    {
      name: "Basic",
      price: 299,
      unit: "mo",
      features: [
        "10 Keywords",
        "On-Page Optimization",
        "Monthly Report",
        "Google Analytics",
      ],
    },
    {
      name: "Advanced",
      price: 499,
      unit: "mo",
      popular: true,
      features: [
        "25 Keywords",
        "On + Off Page",
        "10 Backlinks / mo",
        "Local SEO",
        "Bi-weekly Reports",
      ],
    },
    {
      name: "Enterprise",
      price: 899,
      unit: "mo",
      features: [
        "Unlimited Keywords",
        "30+ Backlinks / mo",
        "Content Marketing",
        "Competitor Analysis",
        "Weekly Reports",
      ],
    },
  ],
  "Video": [
    {
      name: "Basic",
      price: 199,
      features: [
        "30 Sec Video",
        "Script Writing",
        "Voiceover",
        "Background Music",
        "2 Revisions",
      ],
    },
    {
      name: "Standard",
      price: 399,
      popular: true,
      features: [
        "60 Sec Video",
        "Custom Illustrations",
        "Voiceover",
        "Background Music",
        "Unlimited Revisions",
      ],
    },
    {
      name: "Premium",
      price: 699,
      features: [
        "90 Sec Video",
        "3D Elements",
        "Premium Voiceover",
        "All File Formats",
        "Unlimited Revisions",
      ],
    },
  ],
  "Branding": [
    {
      name: "Basic",
      price: 499,
      features: [
        "Logo Design",
        "Business Card",
        "Color Palette",
        "Brand Guidelines",
      ],
    },
    {
      name: "Complete",
      price: 999,
      popular: true,
      features: [
        "Logo + Variations",
        "Full Stationery",
        "Brand Style Guide",
        "Social Media Kit",
        "Email Signature",
      ],
    },
    {
      name: "Premium",
      price: 1999,
      features: [
        "Full Brand Identity",
        "All Print Materials",
        "Digital Assets Pack",
        "Brand Strategy Doc",
        "6 Months Support",
      ],
    },
  ],
};

const CheckIcon = () => (
  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
    <path d="M10 3L5 8.5L2 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function PackagesPage() {
  const [active, setActive] = useState<Tab>("Logo Design");

  return (
    <main className="bg-[#05050a] text-white min-h-screen">

      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden border-b border-white/[0.06]">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(124,106,247,0.08) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-28 sm:pt-32 md:pt-44 pb-16 relative z-10">
          <span className="section-label mb-6">Pricing Plans</span>
          <h1 style={{ fontSize: "clamp(2.2rem, 6vw, 5.5rem)" }}
            className="font-extrabold tracking-tight leading-[0.92] text-white mb-6 max-w-4xl">
            Affordable Plans,{" "}
            <span className="bg-gradient-to-r from-[#7c6af7] to-[#5a78f0] bg-clip-text text-transparent">
              REAL RESULTS
            </span>
          </h1>
          <p className="text-zinc-500 text-base md:text-xl max-w-xl leading-relaxed font-light">
            We value your time and money. Transparent, result-driven plans for every business size.
          </p>
          <p className="text-zinc-700 text-xs mt-4 uppercase tracking-wider font-semibold">
            All plans include free consultation · 100% satisfaction guaranteed · One-time payment
          </p>
        </div>
      </section>

      {/* ── Tab bar ── */}
      <div className="sticky top-16 z-30 bg-[#05050a]/95 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex items-center gap-2 overflow-x-auto py-4" style={{ scrollbarWidth: "none" }}>
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActive(tab)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.12em]
                            border whitespace-nowrap shrink-0 transition-all duration-200
                            ${active === tab
                              ? "bg-[#7c6af7] border-[#7c6af7] text-white shadow-[0_0_20px_rgba(124,106,247,0.4)]"
                              : "bg-transparent border-white/[0.10] text-zinc-500 hover:border-white/25 hover:text-white"
                            }`}>
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Plans grid ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-white/[0.07]">
          {plans[active].map((plan, i) => (
            <div key={plan.name}
              className={`relative flex flex-col p-8 md:p-10
                          ${i < 2 ? "lg:border-r" : ""}
                          border-white/[0.07]
                          ${plan.popular
                            ? "bg-gradient-to-b from-[#7c6af7]/[0.09] via-[#5a78f0]/[0.05] to-transparent"
                            : "bg-transparent"
                          }`}>

              {plan.popular && (
                <div className="absolute top-0 inset-x-0 h-[2px] rounded-t-2xl"
                  style={{ background: "linear-gradient(90deg, #7c6af7, #5a78f0)" }} />
              )}

              <div className="flex items-start justify-between gap-3 mb-6">
                <span className="text-[#a89df9] text-[10px] font-bold uppercase tracking-[0.22em]">
                  {plan.name}
                </span>
                {plan.popular && (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#7c6af7]/20 border border-[#7c6af7]/40
                                   text-[#a89df9] text-[10px] font-bold uppercase tracking-[0.14em]">
                    ★ Most Popular
                  </span>
                )}
              </div>

              <div className="mb-6">
                {typeof plan.price === "number" ? (
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-extrabold text-white tracking-tight leading-none"
                      style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>
                      ${plan.price.toLocaleString()}
                    </span>
                    {plan.unit && (
                      <span className="text-zinc-500 text-sm">/ {plan.unit}</span>
                    )}
                  </div>
                ) : (
                  <span className="font-extrabold text-white tracking-tight leading-none"
                    style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>
                    {plan.price}
                  </span>
                )}
              </div>

              <Link href="/contact"
                className={`btn btn-md w-full justify-center mb-8
                            ${plan.popular ? "btn-accent" : "btn-outline"}`}>
                Get Started →
              </Link>

              <div className="h-px bg-white/[0.06] mb-6" />

              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className={`mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center
                                      ${plan.popular ? "bg-[#7c6af7]/20 text-[#a89df9]" : "bg-white/[0.06] text-zinc-400"}`}>
                      <CheckIcon />
                    </span>
                    <span className={plan.popular ? "text-zinc-300" : "text-zinc-400"}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-white/[0.06] bg-[#07070e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-24 md:py-32
                        flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Not sure which package?
            </h2>
            <p className="text-zinc-500 text-base font-light max-w-md">
              Book a free consultation and we&apos;ll recommend the best option for your goals and budget.
            </p>
          </div>
          <Link href="/contact" className="btn btn-accent btn-lg shrink-0">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}

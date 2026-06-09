"use client";

import { useState } from "react";
import Link from "next/link";

/* ─── data ─────────────────────────────────────────────────────────────── */

const tiers = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Launch fast with a senior engineering partner.",
    monthly: 8000,
    highlight: false,
    features: [
      "1 dedicated senior engineer",
      "Up to 2 concurrent work streams",
      "Weekly progress calls",
      "Slack access (business hours)",
      "Code review & architecture advice",
      "Monthly strategy session",
    ],
    notIncluded: ["UI/UX designer", "24 / 7 Slack", "Infrastructure management", "On-site workshops"],
    cta: "Get Started",
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "A full-stack team for companies moving fast.",
    monthly: 18000,
    highlight: true,
    features: [
      "Tech lead + 2 senior engineers",
      "Dedicated UI/UX designer",
      "Daily standups & async updates",
      "Slack access (24 / 7)",
      "Cloud infrastructure management",
      "Bi-weekly strategy sessions",
      "Priority support & on-call",
    ],
    notIncluded: ["On-site workshops", "Custom SLAs"],
    cta: "Start Growing",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "A deeply embedded team for large organisations.",
    monthly: null,
    highlight: false,
    features: [
      "Dedicated team of 5–15 engineers",
      "Embedded CTO-level leadership",
      "Custom SLA & support agreements",
      "On-site workshops available",
      "Security & compliance audits",
      "Executive reporting",
      "Multi-timezone coverage",
    ],
    notIncluded: [],
    cta: "Let's Talk",
  },
];

const compareRows = [
  { label: "Engineers",           starter: "1 senior",       growth: "Lead + 2 seniors", enterprise: "5–15" },
  { label: "UI/UX Designer",      starter: false,            growth: true,               enterprise: true },
  { label: "Slack Access",        starter: "Business hours", growth: "24 / 7",           enterprise: "24 / 7" },
  { label: "Progress Calls",      starter: "Weekly",         growth: "Daily standups",   enterprise: "Custom" },
  { label: "Strategy Sessions",   starter: "Monthly",        growth: "Bi-weekly",        enterprise: "Custom" },
  { label: "Cloud Infra Mgmt",    starter: false,            growth: true,               enterprise: true },
  { label: "On-site Workshops",   starter: false,            growth: false,              enterprise: true },
  { label: "Custom SLA",          starter: false,            growth: false,              enterprise: true },
  { label: "Security Audits",     starter: false,            growth: false,              enterprise: true },
  { label: "Satisfaction Guarantee", starter: true,          growth: true,               enterprise: true },
  { label: "You Own 100% IP",     starter: true,             growth: true,               enterprise: true },
];

const steps = [
  { n: "01", title: "Discovery Call",    desc: "30-min call to understand your goals, stack, and timeline. No pitch, just listening." },
  { n: "02", title: "Team Matched",      desc: "We assign engineers with direct experience in your domain — FinTech, AI, commerce." },
  { n: "03", title: "Kickoff in 5 Days", desc: "Environments set up, Slack connected, sprint planned. You're shipping code by day 5." },
  { n: "04", title: "Continuous Delivery", desc: "Weekly demos, daily async updates, full code ownership. We disappear into your team." },
];

const faqs = [
  { q: "Do you work on fixed-price projects?", a: "Yes. For well-defined scopes we offer fixed-price engagements. Retainer pricing works better for ongoing product development where requirements evolve." },
  { q: "What's the minimum engagement length?", a: "Our minimum engagement is 3 months. Most clients stay 12–24+ months as we become embedded in their product team." },
  { q: "Can I scale the team up or down?", a: "Absolutely. Add or remove engineers with 30 days' notice — no penalties, no drama." },
  { q: "Do you offer equity-based engagements?", a: "In select cases we consider equity arrangements for promising early-stage companies. Reach out to discuss." },
  { q: "What if I'm not happy with the work?", a: "100% satisfaction guarantee on the first sprint. Not happy in the first two weeks? Full refund." },
  { q: "Who owns the code?", a: "You do — 100%. All IP, code, and assets produced are fully and immediately yours." },
];

const DISCOUNT = 0.15;
function fmt(n: number) { return "£" + n.toLocaleString("en-GB"); }

function Check({ on, value }: { on: boolean | string; value?: string }) {
  if (typeof on === "string") return <span className="text-zinc-300 text-sm">{on}</span>;
  if (on) return (
    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full
                     bg-[#7c6af7]/20 text-[#a89df9]">
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
        <path d="M10 3L5 8.5L2 5.5" stroke="currentColor" strokeWidth="1.8"
              strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );
  return <span className="inline-block w-5 h-px bg-white/[0.12] mx-auto" />;
}

export default function PricingPage() {
  const [annual,  setAnnual]  = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-[#05050a] text-white min-h-screen">

      {/* ══════════════════════════════════════════════════════ HERO ══ */}
      <section className="relative w-full overflow-hidden border-b border-white/[0.06]">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(124,106,247,0.08) 0%, transparent 60%)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-28 sm:pt-32 md:pt-44 pb-20 md:pb-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div className="flex flex-col gap-6">
              <span className="section-label">Pricing</span>
              <h1 style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
                className="font-extrabold tracking-tight leading-[0.92] text-white">
                Invest in{" "}
                <span className="bg-gradient-to-r from-[#7c6af7] to-[#5a78f0] bg-clip-text text-transparent">
                  elite
                </span>
                <br />engineering.
              </h1>
              <p className="text-zinc-500 text-base md:text-lg leading-relaxed font-light max-w-sm">
                No hidden fees. No lock-in. A dedicated team that feels like your own — without the overhead of hiring.
              </p>

              {/* Toggle */}
              <div className="flex items-center gap-4">
                <span className={`text-sm font-medium ${!annual ? "text-white" : "text-zinc-500"}`}>Monthly</span>
                <button onClick={() => setAnnual(!annual)}
                  className={`relative w-12 h-6 rounded-full border transition-all duration-300
                              ${annual ? "bg-[#7c6af7] border-[#7c6af7]" : "bg-white/[0.08] border-white/[0.12]"}`}>
                  <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all duration-300
                                    ${annual ? "left-[26px]" : "left-0.5"}`} />
                </button>
                <span className={`text-sm font-medium ${annual ? "text-white" : "text-zinc-500"}`}>Annual</span>
                {annual && (
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/25
                                   text-emerald-400 text-[11px] font-bold uppercase tracking-wider">
                    Save 15%
                  </span>
                )}
              </div>
            </div>

            {/* Right — trust stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { v: "250+",  l: "Projects delivered" },
                { v: "98%",   l: "Client satisfaction" },
                { v: "5 days", l: "Average time to kickoff" },
                { v: "100%",  l: "Code IP yours" },
              ].map(s => (
                <div key={s.l}
                  className="flex flex-col gap-1.5 p-6 rounded-2xl border border-white/[0.07]
                             bg-white/[0.02] hover:border-[#7c6af7]/25 transition-colors duration-200">
                  <span style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
                    className="font-extrabold tracking-tight text-white leading-none">
                    {s.v}
                  </span>
                  <span className="text-zinc-600 text-xs uppercase tracking-wider font-medium">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════ CARDS ══ */}
      <section className="relative w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-white/[0.07]">
            {tiers.map((t, ti) => {
              const price = t.monthly
                ? annual ? Math.round(t.monthly * (1 - DISCOUNT)) : t.monthly
                : null;

              return (
                <div key={t.id}
                  className={`relative flex flex-col p-8 md:p-10
                              ${ti < tiers.length - 1 ? "lg:border-r" : ""}
                              border-white/[0.07]
                              ${t.highlight
                                ? "bg-gradient-to-b from-[#7c6af7]/[0.09] via-[#5a78f0]/[0.05] to-transparent"
                                : "bg-transparent"
                              }`}>

                  {t.highlight && (
                    <div className="absolute top-0 inset-x-0 h-[2px] rounded-t-2xl"
                      style={{ background: "linear-gradient(90deg, #7c6af7, #5a78f0)" }} />
                  )}

                  {/* Name + badge */}
                  <div className="flex items-start justify-between gap-3 mb-6">
                    <span className="text-[#a89df9] text-[10px] font-bold uppercase tracking-[0.22em]">
                      {t.name}
                    </span>
                    {t.highlight && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#7c6af7]/20 border border-[#7c6af7]/40
                                       text-[#a89df9] text-[10px] font-bold uppercase tracking-[0.14em]">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="mb-2">
                    {price ? (
                      <div className="flex items-baseline gap-2">
                        <span className="font-extrabold text-white tracking-tight leading-none"
                          style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>
                          {fmt(price)}
                        </span>
                        <span className="text-zinc-500 text-sm">/ mo</span>
                      </div>
                    ) : (
                      <span className="font-extrabold text-white tracking-tight leading-none"
                        style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>
                        Custom
                      </span>
                    )}
                    {annual && price && (
                      <p className="text-emerald-400 text-xs font-semibold mt-1">
                        {fmt(price * 12)}/yr · save {fmt(t.monthly! * 12 - price * 12)}
                      </p>
                    )}
                  </div>

                  <p className="text-zinc-500 text-sm leading-relaxed font-light mb-7">{t.tagline}</p>

                  <Link href="/contact"
                    className={`btn btn-md w-full justify-center mb-8
                                ${t.highlight ? "btn-accent" : "btn-outline"}`}>
                    {t.cta} →
                  </Link>

                  {/* Features list */}
                  <div className="h-px bg-white/[0.06] mb-6" />
                  <ul className="flex flex-col gap-3 flex-1">
                    {t.features.map(f => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <span className={`mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center
                                          ${t.highlight ? "bg-[#7c6af7]/20 text-[#a89df9]" : "bg-white/[0.06] text-zinc-400"}`}>
                          <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                            <path d="M10 3L5 8.5L2 5.5" stroke="currentColor" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        <span className={t.highlight ? "text-zinc-300" : "text-zinc-400"}>{f}</span>
                      </li>
                    ))}
                    {t.notIncluded.map(f => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <span className="mt-[7px] shrink-0 w-4 h-[1.5px] bg-white/[0.10] rounded-full" />
                        <span className="text-zinc-700 line-through decoration-white/[0.12]">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ COMPARISON TABLE ══ */}
      <section className="border-t border-white/[0.06] bg-[#07070e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-20">
          <div className="text-center mb-10">
            <span className="section-label mb-3">Compare Plans</span>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
              className="font-bold tracking-tight text-white mt-3">
              Full feature breakdown.
            </h2>
          </div>
          <div className="rounded-2xl border border-white/[0.07] overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-4 bg-white/[0.03] border-b border-white/[0.06]">
              <div className="p-4 col-span-1" />
              {tiers.map(t => (
                <div key={t.id} className={`p-4 text-center ${t.highlight ? "bg-[#7c6af7]/[0.07]" : ""}`}>
                  <p className={`text-xs font-bold uppercase tracking-[0.18em]
                                 ${t.highlight ? "text-[#a89df9]" : "text-zinc-500"}`}>
                    {t.name}
                  </p>
                </div>
              ))}
            </div>
            {/* Rows */}
            {compareRows.map((row, i) => (
              <div key={row.label}
                className={`grid grid-cols-4 border-b border-white/[0.04] last:border-b-0
                            ${i % 2 === 0 ? "bg-transparent" : "bg-white/[0.01]"}`}>
                <div className="p-4 flex items-center">
                  <span className="text-zinc-400 text-xs md:text-sm font-medium">{row.label}</span>
                </div>
                {[row.starter, row.growth, row.enterprise].map((val, ci) => (
                  <div key={ci}
                    className={`p-4 flex items-center justify-center
                                ${ci === 1 ? "bg-[#7c6af7]/[0.04]" : ""}`}>
                    <Check on={val as boolean | string} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════ HOW IT WORKS ══ */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <div>
              <span className="section-label mb-3">Process</span>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
                className="font-bold tracking-tight text-white mt-3">
                From signed to shipping in 5 days.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.06]">
            {steps.map((s) => (
              <div key={s.n} className="bg-[#05050a] p-7 flex flex-col gap-4 hover:bg-[#07070e] transition-colors duration-200">
                <span className="text-[#7c6af7] font-mono text-xs font-bold tracking-[0.2em]">{s.n}</span>
                <h3 className="text-white font-semibold text-base">{s.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ TESTIMONIAL ══ */}
      <section className="border-t border-white/[0.06] bg-[#07070e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 py-20 md:py-24 text-center">
          <svg className="w-8 h-8 text-[#7c6af7] mx-auto mb-6 opacity-60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <blockquote className="text-white text-xl md:text-2xl font-light leading-relaxed italic mb-8 max-w-2xl mx-auto">
            &ldquo;Software Elites became a genuine extension of our engineering team. They shipped our core trading platform in 11 weeks — on time, on budget, zero surprises.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7c6af7] to-[#5a78f0]
                            flex items-center justify-center text-white text-sm font-bold">
              JM
            </div>
            <div className="text-left">
              <p className="text-white text-sm font-semibold">James Mitchell</p>
              <p className="text-zinc-600 text-xs">CTO, FinanceFlow</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════ FAQ ══ */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12 py-20 md:py-24">
          <div className="text-center mb-12">
            <span className="section-label mb-3">FAQ</span>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
              className="font-bold tracking-tight text-white mt-3">
              Questions answered.
            </h2>
          </div>
          <div className="flex flex-col">
            {faqs.map((f, i) => (
              <div key={i} className="border-b border-white/[0.06] last:border-b-0">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left group">
                  <span className={`text-sm md:text-base font-semibold transition-colors duration-200
                                    ${openFaq === i ? "text-[#a89df9]" : "text-white group-hover:text-[#a89df9]"}`}>
                    {f.q}
                  </span>
                  <span className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center
                                    transition-all duration-300
                                    ${openFaq === i
                                      ? "border-[#7c6af7]/50 bg-[#7c6af7]/15 text-[#a89df9] rotate-45"
                                      : "border-white/[0.12] text-zinc-500"
                                    }`}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300
                                 ${openFaq === i ? "max-h-48 pb-5" : "max-h-0"}`}>
                  <p className="text-zinc-500 text-sm leading-relaxed font-light">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ BOTTOM CTA ══ */}
      <section className="border-t border-white/[0.06] bg-[#07070e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-20">
          <div className="rounded-2xl border border-[#7c6af7]/20 bg-gradient-to-br from-[#7c6af7]/[0.07] to-transparent p-10 md:p-14
                          flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex flex-col gap-4">
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
                className="font-bold tracking-tight text-white leading-tight">
                Not sure which plan is right?
              </h2>
              <p className="text-zinc-500 text-base font-light max-w-md">
                Book a free 30-minute call. We&apos;ll assess your needs and recommend the right setup — no pitch, no pressure.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link href="/contact" className="btn btn-accent btn-lg whitespace-nowrap">Book a Free Call</Link>
              <Link href="/contact" className="btn btn-outline btn-lg whitespace-nowrap">Send a Message</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

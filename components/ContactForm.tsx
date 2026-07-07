"use client";

import React, { useState } from "react";

const availableServices = [
  "Web Design",
  "Website Development",
  "Mobile App Development",
  "E-Commerce Solutions",
  "SEO Optimization",
  "Social Media Marketing",
  "UI/UX Design",
  "Logo & Branding",
  "WordPress Development",
  "Video & Animation",
];

const faqs = [
  {
    q: "How long does a website project take?",
    a: "Typically 2–4 weeks depending on complexity. We provide a detailed timeline before starting.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. All plans include a maintenance period. We also offer monthly retainer support packages.",
  },
  {
    q: "What information do I need to provide?",
    a: "Brand assets, content, and goals are helpful. We guide you through everything if you're starting fresh.",
  },
  {
    q: "Can I upgrade my package later?",
    a: "Absolutely. We design with scalability in mind and can upgrade your solution at any time.",
  },
];

interface FormState {
  services: string[];
  name:     string;
  email:    string;
  phone:    string;
  message:  string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    services: [],
    name: "", email: "", phone: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [openFaq,   setOpenFaq]   = useState<number | null>(null);

  const toggleService = (s: string) =>
    setForm(p => ({
      ...p,
      services: p.services.includes(s)
        ? p.services.filter(x => x !== s)
        : [...p.services, s],
    }));

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error ?? "Something went wrong. Please try again.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section id="contact" className="w-full bg-[#05050a] text-white relative z-20 overflow-hidden">
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
             style={{ background: "radial-gradient(ellipse, rgba(124,106,247,0.05) 0%, transparent 65%)" }} />

        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-20 md:pb-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* ── Left — Contact Info Panel ── */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              <div>
                <span className="section-label mb-5">Contact Info</span>
                <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
                  className="font-bold tracking-tight text-white leading-tight mt-5">
                  Let&apos;s Start A{" "}
                  <span className="bg-gradient-to-r from-[#7c6af7] to-[#5a78f0] bg-clip-text text-transparent">
                    CONVERSATION
                  </span>
                </h2>
                <p className="text-zinc-500 text-base leading-relaxed max-w-md mt-4 font-light">
                  Whether you have a question, a project, or just want to say hello —
                  our team is ready.
                </p>
              </div>

              {/* Contact details */}
              <div className="flex flex-col gap-5 pt-6 border-t border-white/[0.06]">
                {[
                  { label: "Phone",    icon: "📞", value: "+1 804-280-4086",                    href: "tel:+18042804086" },
                  { label: "Email",    icon: "✉",  value: "info@softwareelites.com",            href: "mailto:info@softwareelites.com" },
                  { label: "Location", icon: "📍", value: "5142 Glenbeigh Rd, Richmond VA 23234", href: undefined },
                  { label: "Hours",    icon: "🕐", value: "Mon–Fri · 9AM–6PM EST",  href: undefined },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="text-lg leading-none mt-0.5">{item.icon}</span>
                    <div>
                      <span className="text-white/25 text-[10px] uppercase tracking-[0.22em] font-semibold block mb-1">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a href={item.href}
                          className="text-zinc-300 text-sm font-medium hover:text-[#a89df9] transition-colors duration-200">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-zinc-400 text-sm">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}

                <div className="flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-zinc-500 text-xs">We respond within 24 hours</span>
                </div>
              </div>

              {/* Office Map */}
              <div className="rounded-xl overflow-hidden border border-white/[0.07]">
                <iframe
                  src="https://maps.google.com/maps?q=5142+Glenbeigh+Rd+Richmond+VA+23234&output=embed"
                  width="100%"
                  height="200"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Social links */}
              <div className="flex flex-col gap-3 pt-6 border-t border-white/[0.06]">
                <span className="text-zinc-600 text-[10px] uppercase tracking-[0.22em] font-semibold">
                  Follow Us
                </span>
                <div className="flex items-center gap-3">
                  {[
                    { label: "Facebook",  href: "#", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
                    { label: "Twitter",   href: "#", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                    { label: "LinkedIn",  href: "#", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10V9h4v1.765C14.396 9.66 15.64 9 17 9a5 5 0 0 1 5 5v7h-4v-7a2 2 0 0 0-2-2zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
                    { label: "Instagram", href: "#", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="currentColor" strokeWidth="2"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg> },
                    { label: "YouTube",   href: "#", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="var(--bg-base,#05050a)"/></svg> },
                  ].map(({ label, href, icon }) => (
                    <a key={label} href={href} aria-label={label}
                      className="w-9 h-9 rounded-lg border border-white/[0.08] bg-white/[0.03]
                                 flex items-center justify-center text-zinc-500
                                 hover:text-white hover:bg-[#7c6af7]/20 hover:border-[#7c6af7]/40
                                 transition-all duration-200">
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right — Form ── */}
            <div className="lg:col-span-7 bg-white/[0.02] border border-white/[0.07] rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-white font-bold text-lg">Send A Message</span>
                <span className="ml-auto flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-zinc-500 text-xs">Online Now</span>
                </span>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-20 gap-6">
                  <div className="w-16 h-16 rounded-full border border-[#7c6af7]/40
                                  bg-[#7c6af7]/10 flex items-center justify-center text-[#7c6af7]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5"
                            strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">Message Sent!</h3>
                  <p className="text-zinc-500 text-sm max-w-sm font-light leading-relaxed">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button onClick={() => setSubmitted(false)}
                          className="text-xs uppercase tracking-widest font-bold
                                     text-[#a89df9] hover:text-white transition-colors mt-2">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">

                  {/* Select Service */}
                  <div>
                    <p className="text-white text-sm font-semibold tracking-wide mb-3">
                      Select Service
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {availableServices.map(s => {
                        const active = form.services.includes(s);
                        return (
                          <button key={s} type="button" onClick={() => toggleService(s)}
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold border tracking-wide
                                        transition-all duration-200 active:scale-95
                                        ${active
                                          ? "bg-[#7c6af7]/15 border-[#7c6af7]/60 text-[#a89df9] shadow-[0_0_12px_rgba(124,106,247,0.2)]"
                                          : "bg-white/[0.04] border-white/[0.09] text-white/50 hover:border-white/20 hover:text-white/80"
                                        }`}>
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Text inputs */}
                  <div className="flex flex-col gap-4 pt-4 border-t border-white/[0.06]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input required type="text" name="name" value={form.name}
                        onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                        placeholder="Full Name *"
                        className="bg-transparent border-b border-white/[0.12] py-3 text-sm text-white
                                   placeholder:text-white/25 focus:border-[#7c6af7]/60 focus:outline-none
                                   transition-colors duration-200" />
                      <input required type="email" name="email" value={form.email}
                        onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                        placeholder="Email Address *"
                        className="bg-transparent border-b border-white/[0.12] py-3 text-sm text-white
                                   placeholder:text-white/25 focus:border-[#7c6af7]/60 focus:outline-none
                                   transition-colors duration-200" />
                    </div>

                    <input type="tel" name="phone" value={form.phone}
                      onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                      placeholder="Phone Number"
                      className="bg-transparent border-b border-white/[0.12] py-3 text-sm text-white
                                 placeholder:text-white/25 focus:border-[#7c6af7]/60 focus:outline-none
                                 transition-colors duration-200 w-full" />

                    <textarea required name="message" rows={4} value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      placeholder="Message / Project Details *"
                      className="bg-transparent border border-white/[0.09] rounded-xl
                                 px-4 py-3.5 text-sm text-white placeholder:text-white/25
                                 focus:border-[#7c6af7]/50 focus:outline-none
                                 transition-colors duration-200 resize-none w-full" />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm text-center">{error}</p>
                  )}

                  <button type="submit" disabled={loading}
                    className="btn btn-accent btn-lg w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message →
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M1 7h12M8 2.5L13 7l-5 4.5" stroke="currentColor" strokeWidth="1.8"
                                strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-white/[0.06] bg-[#07070e]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-24">
          <div className="text-center mb-12">
            <span className="section-label mb-3">Common Questions</span>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
              className="font-bold tracking-tight text-white mt-3">
              Quick{" "}
              <span className="bg-gradient-to-r from-[#7c6af7] to-[#5a78f0] bg-clip-text text-transparent">
                ANSWERS
              </span>
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
                                 ${openFaq === i ? "max-h-40 pb-5" : "max-h-0"}`}>
                  <p className="text-zinc-500 text-sm leading-relaxed font-light">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom Strip ── */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
          <div className="rounded-2xl border border-[#7c6af7]/20 bg-gradient-to-br from-[#7c6af7]/[0.07] to-transparent
                          p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-zinc-500 text-sm uppercase tracking-wider font-semibold mb-3">Ready to start?</p>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
                className="font-bold tracking-tight text-white">
                Let&apos;s Build Something{" "}
                <span className="bg-gradient-to-r from-[#7c6af7] to-[#5a78f0] bg-clip-text text-transparent">
                  AMAZING
                </span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a href="tel:+18042804086"
                className="btn btn-accent btn-lg">
                +1 804-280-4086
              </a>
              <a href="/packages" className="btn btn-outline btn-lg">View Packages</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

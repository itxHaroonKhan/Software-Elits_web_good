"use client";

import React, { useState } from "react";

const availableServices = [
  "Custom Software Development",
  "Mobile App (iOS / Android)",
  "Web Application",
  "Cloud Infrastructure & DevOps",
  "UI/UX Design",
];

const budgetRanges = [
  "Under £10,000",
  "£10,000 – £50,000",
  "£50,000 – £100,000",
  "£100,000+",
];

interface FormState {
  services: string[];
  budget:   string;
  name:     string;
  email:    string;
  website:  string;
  message:  string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    services: [], budget: "",
    name: "", email: "", website: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  const toggleService = (s: string) =>
    setForm(p => ({
      ...p,
      services: p.services.includes(s)
        ? p.services.filter(x => x !== s)
        : [...p.services, s],
    }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  return (
    <section id="contact" className="w-full bg-[#05050a] text-white relative z-20 overflow-hidden">
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2
                      w-[700px] h-[300px] pointer-events-none"
           style={{ background: "radial-gradient(ellipse, rgba(124,106,247,0.05) 0%, transparent 65%)" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-32 md:pb-44 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* ── Left ── */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div>
              <span className="section-label mb-5">Ready to Build?</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
                className="font-bold tracking-tight text-white leading-tight mt-5">
                Let&apos;s build something{" "}
                <em className="font-serif italic font-bold bg-gradient-to-r from-[#7c6af7] to-[#5a78f0]
                               bg-clip-text text-transparent">
                  extraordinary.
                </em>
              </h2>
              <p className="text-zinc-500 text-base leading-relaxed max-w-md mt-5 font-light">
                Whether you want to launch a brand-new platform or scale your existing software
                product, our team of elite engineers is ready to accelerate your growth.
              </p>
            </div>

            <div className="flex flex-col gap-7 pt-8 border-t border-white/[0.06]">
              <div className="flex flex-col gap-1.5">
                <span className="text-white/25 text-[10px] uppercase tracking-[0.22em] font-semibold">
                  General Enquiries
                </span>
                <a href="mailto:hello@softwareelites.co.uk"
                   className="text-white text-lg font-medium hover:text-[#a89df9] transition-colors duration-200">
                  hello@softwareelites.co.uk
                </a>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-white/25 text-[10px] uppercase tracking-[0.22em] font-semibold">
                  Call the Team
                </span>
                <a href="tel:+442071263652"
                   className="text-white text-lg font-medium hover:text-[#a89df9] transition-colors duration-200">
                  +44 (0) 20 7126 3652
                </a>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-white/25 text-[10px] uppercase tracking-[0.22em] font-semibold">
                  HQ London
                </span>
                <span className="text-zinc-500 text-base font-light">London, United Kingdom</span>
              </div>
            </div>
          </div>

          {/* ── Right ── */}
          <div className="lg:col-span-7 bg-white/[0.02] border border-white/[0.07]
                          rounded-2xl p-6 md:p-8">

            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-20 gap-6">
                <div className="w-16 h-16 rounded-full border border-[#7c6af7]/40
                                bg-[#7c6af7]/10 flex items-center justify-center text-[#7c6af7]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5"
                          strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Enquiry Submitted!</h3>
                <p className="text-zinc-500 text-sm max-w-sm font-light leading-relaxed">
                  Thank you. A senior engineer from Software Elites will reach out within 24 hours.
                </p>
                <button onClick={() => setSubmitted(false)}
                        className="text-xs uppercase tracking-widest font-bold
                                   text-[#a89df9] hover:text-white transition-colors mt-2">
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">

                {/* Services */}
                <div>
                  <p className="text-white text-sm font-semibold tracking-wide mb-3">
                    1. What are you looking to build?
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {availableServices.map(s => {
                      const active = form.services.includes(s);
                      return (
                        <button key={s} type="button" onClick={() => toggleService(s)}
                          className={`px-4 py-2 rounded-full text-xs font-semibold border tracking-wide
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

                {/* Budget */}
                <div>
                  <p className="text-white text-sm font-semibold tracking-wide mb-3">
                    2. What is your estimated project budget?
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {budgetRanges.map(r => {
                      const active = form.budget === r;
                      return (
                        <button key={r} type="button"
                          onClick={() => setForm(p => ({ ...p, budget: r }))}
                          className={`px-4 py-3.5 rounded-xl text-sm font-medium text-left
                                      border transition-all duration-200 active:scale-[0.98]
                                      ${active
                                        ? "bg-[#7c6af7]/10 border-[#7c6af7]/50 text-[#a89df9]"
                                        : "bg-white/[0.03] border-white/[0.08] text-white/45 hover:border-white/18 hover:text-white/70"
                                      }`}>
                          {r}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Text inputs */}
                <div className="flex flex-col gap-5 pt-6 border-t border-white/[0.06]">
                  <p className="text-white text-sm font-semibold tracking-wide">
                    3. Tell us about your project
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: "name",  placeholder: "Your Name *",     type: "text",  required: true },
                      { name: "email", placeholder: "Email Address *", type: "email", required: true },
                    ].map(f => (
                      <input key={f.name} required={f.required} type={f.type} name={f.name}
                        value={form[f.name as keyof FormState] as string}
                        onChange={e => setForm(p => ({ ...p, [f.name]: e.target.value }))}
                        placeholder={f.placeholder}
                        className="bg-transparent border-b border-white/[0.12] py-3 text-sm text-white
                                   placeholder:text-white/25 focus:border-[#7c6af7]/60 focus:outline-none
                                   transition-colors duration-200" />
                    ))}
                  </div>

                  <input type="url" name="website" value={form.website}
                    onChange={e => setForm(p => ({ ...p, website: e.target.value }))}
                    placeholder="Current Website URL (optional)"
                    className="bg-transparent border-b border-white/[0.12] py-3 text-sm text-white
                               placeholder:text-white/25 focus:border-[#7c6af7]/60 focus:outline-none
                               transition-colors duration-200 w-full" />

                  <textarea required name="message" rows={4} value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    placeholder="Briefly describe your project or challenge *"
                    className="bg-transparent border border-white/[0.09] rounded-xl
                               px-4 py-3.5 text-sm text-white placeholder:text-white/25
                               focus:border-[#7c6af7]/50 focus:outline-none
                               transition-colors duration-200 resize-none w-full" />
                </div>

                {/* Submit */}
                <button type="submit" disabled={loading}
                  className="btn btn-accent btn-lg w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Submit Project Enquiry
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                        className="group-hover:translate-x-1 transition-transform duration-200">
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
  );
}

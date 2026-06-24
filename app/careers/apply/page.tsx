"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function ApplyForm() {
  const searchParams = useSearchParams();
  const roleParam = searchParams.get("role") ?? "";

  const [form, setForm] = useState({
    name: "", email: "", phone: "", role: roleParam,
    linkedin: "", portfolio: "", experience: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    if (roleParam) setForm(f => ({ ...f, role: roleParam }));
  }, [roleParam]);

  const set = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm(f => ({ ...f, [field]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again or email careers@softwareelites.com directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center text-center gap-6 py-20">
        <div className="w-16 h-16 rounded-full bg-[#7c6af7]/15 border border-[#7c6af7]/30 flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7c6af7" strokeWidth="2">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-white">Application Received</h2>
        <p className="text-zinc-400 max-w-md text-base leading-relaxed">
          Thank you for applying. We review every application carefully and will be in touch within 5 business days if we see a fit.
        </p>
        <Link href="/careers" className="btn btn-outline btn-md mt-4">
          ← Back to Careers
        </Link>
      </div>
    );
  }

  const inputClass = `w-full bg-white/[0.04] border border-white/[0.10] rounded-xl px-4 py-3 text-white
                      placeholder:text-zinc-600 text-sm focus:outline-none focus:border-[#7c6af7]/60
                      hover:border-white/20 transition-colors duration-200`;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">Full Name *</label>
          <input required value={form.name} onChange={set("name")}
            placeholder="Jane Smith" className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">Email Address *</label>
          <input required type="email" value={form.email} onChange={set("email")}
            placeholder="jane@example.com" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">Phone Number</label>
          <input type="tel" value={form.phone} onChange={set("phone")}
            placeholder="+1 804-000-0000" className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">Role Applying For *</label>
          <select required value={form.role} onChange={set("role")} className={inputClass}>
            <option value="" disabled>Select a role</option>
            <option>Senior Full-Stack Engineer</option>
            <option>Senior React Native Engineer</option>
            <option>ML Engineer</option>
            <option>DevOps / Platform Engineer</option>
            <option>Product Designer</option>
            <option>Speculative Application</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">LinkedIn Profile</label>
          <input type="url" value={form.linkedin} onChange={set("linkedin")}
            placeholder="https://linkedin.com/in/yourname" className={inputClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">Portfolio / GitHub URL</label>
          <input type="url" value={form.portfolio} onChange={set("portfolio")}
            placeholder="https://github.com/yourname" className={inputClass} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">Years of Experience *</label>
        <select required value={form.experience} onChange={set("experience")} className={inputClass}>
          <option value="" disabled>Select experience level</option>
          <option>0–2 years</option>
          <option>3–5 years</option>
          <option>6–9 years</option>
          <option>10+ years</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">
          Cover Letter / Why Software Elites? *
        </label>
        <textarea required value={form.message} onChange={set("message")} rows={6}
          placeholder="Tell us about yourself, your relevant experience, and why you want to join Software Elites."
          className={`${inputClass} resize-none`} />
      </div>

      {error && (
        <p className="text-red-400 text-sm border border-red-500/20 bg-red-500/5 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
        <button type="submit" disabled={status === "loading"}
          className="btn btn-accent btn-lg disabled:opacity-50 disabled:cursor-not-allowed">
          {status === "loading" ? "Submitting…" : "Submit Application"}
          {status !== "loading" && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
        <p className="text-zinc-600 text-xs">
          Or email us directly at{" "}
          <a href="mailto:careers@softwareelites.com" className="text-zinc-400 hover:text-white transition-colors">
            careers@softwareelites.com
          </a>
        </p>
      </div>
    </form>
  );
}

export default function ApplyPage() {
  return (
    <main className="bg-[#05050a] text-white min-h-screen">
      <div className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,106,247,0.07) 0%, transparent 65%)" }} />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12 pt-28 sm:pt-32 md:pt-40 pb-16 relative z-10">
          <Link href="/careers"
            className="inline-flex items-center gap-2 text-zinc-600 hover:text-white text-sm transition-colors mb-10">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Careers
          </Link>
          <span className="section-label mb-6">Apply Now</span>
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
            className="font-extrabold tracking-tight leading-[0.95] text-white mb-4">
            Join Software Elites.
          </h1>
          <p className="text-zinc-500 text-base md:text-lg leading-relaxed font-light mb-12">
            Fill in the form below and we&apos;ll review your application. We read every submission.
          </p>
          <Suspense fallback={null}>
            <ApplyForm />
          </Suspense>
        </div>
      </div>
    </main>
  );
}

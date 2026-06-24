import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Software Elites",
  description: "Get in touch with Software Elites. Tell us about your project and we'll get back to you within 24 hours.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#05050a] text-white min-h-screen">

      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden border-b border-white/[0.06]">
        <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,106,247,0.07) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-44 pb-14 md:pb-18 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <div className="flex flex-col gap-6">
              <span className="section-label">Get In Touch</span>
              <h1 style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
                className="font-extrabold tracking-tight leading-[0.92] text-white">
                CONTACT{" "}
                <span className="bg-gradient-to-r from-[#7c6af7] to-[#5a78f0] bg-clip-text text-transparent">
                  US
                </span>
              </h1>
              <p className="text-zinc-500 text-base md:text-xl max-w-lg leading-relaxed font-light">
                We&apos;d love to hear about your project. Drop us a message
                and we&apos;ll get back to you within 24 hours.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="tel:+18042804086" className="btn btn-accent btn-lg">
                  Call Now
                </a>
                <a href="mailto:info@softwareelites.com" className="btn btn-outline btn-lg">
                  Email Us
                </a>
              </div>
            </div>
            <div className="hidden lg:flex flex-col gap-3 items-end">
              <div className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] w-64">
                <p className="text-[#a89df9] text-xs font-bold uppercase tracking-[0.18em] mb-3">
                  Our Hours
                </p>
                <p className="text-white font-semibold text-sm mb-1">Mon – Fri</p>
                <p className="text-zinc-400 text-sm">9:00 AM – 6:00 PM EST</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-zinc-500 text-xs">Currently Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Form + Info + FAQ ── */}
      <ContactForm />
    </main>
  );
}

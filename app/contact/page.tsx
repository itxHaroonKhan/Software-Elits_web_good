import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="bg-[#05050a] text-white min-h-screen">

      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden border-b border-white/[0.06]">
        <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,106,247,0.07) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-44 pb-16 md:pb-20 relative z-10">
          <div className="block space-y-6 max-w-3xl">
            <span className="section-label">Get In Touch</span>
            <h1 style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
              className="font-extrabold tracking-tight leading-[0.92] text-white">
              Let&apos;s build{" "}
              <span className="bg-gradient-to-r from-[#7c6af7] to-[#5a78f0] bg-clip-text text-transparent">
                something great.
              </span>
            </h1>
            <p className="text-zinc-500 text-base md:text-xl max-w-lg leading-relaxed font-light pb-4">
              Tell us about your project and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact Form ── */}
      <ContactForm />

    </main>
  );
}

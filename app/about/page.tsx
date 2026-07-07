import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Software Elites",
  description: "Learn about Software Elites — our story, our team, and our mission to build exceptional digital products for ambitious businesses worldwide.",
};

const whyChooseUs = [
  {
    icon: "◈",
    title: "Expert Team",
    desc: "Seasoned professionals in design, development, SEO, and digital marketing.",
  },
  {
    icon: "◉",
    title: "Custom Solutions",
    desc: "No templates. Everything built from scratch to match your unique brand.",
  },
  {
    icon: "◆",
    title: "Proven Results",
    desc: "95% client satisfaction rate with measurable, data-backed ROI.",
  },
  {
    icon: "◇",
    title: "Transparent Pricing",
    desc: "Premium quality without the premium price tag — clear, honest plans.",
  },
];

const team = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    bio: "3+ years shaping digital brands across the USA.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop",
  },
  {
    name: "Emily Johnson",
    role: "Lead Designer",
    bio: "Award-winning UI/UX & brand identity designer.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400&fit=crop",
  },
  {
    name: "David Lee",
    role: "Head of Development",
    bio: "Full-stack engineer building scalable web apps.",
    img: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=400&h=400&fit=crop",
  },
  {
    name: "Sarah Chen",
    role: "Marketing Head",
    bio: "Expert in SEO, PPC, and social media growth.",
    img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&h=400&fit=crop",
  },
];

const clientLogos = [
  { name: "TechStart",    abbr: "TS" },
  { name: "NexaCore",     abbr: "NC" },
  { name: "BrightPath",   abbr: "BP" },
  { name: "UrbanEdge",    abbr: "UE" },
  { name: "PeakBrands",   abbr: "PB" },
  { name: "CloudNine",    abbr: "CN" },
];

export default function AboutPage() {
  return (
    <main className="bg-[#05050a] text-white min-h-screen">

      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden border-b border-white/[0.06]">
        <div className="absolute -top-40 left-1/3 w-[700px] h-[700px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,106,247,0.07) 0%, transparent 65%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-28 sm:pt-32 md:pt-44 pb-20 md:pb-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <div className="flex flex-col gap-6">
              <span className="section-label">Who We Are</span>
              <h1 style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
                className="font-black tracking-tight leading-[0.88] text-white">
                ABOUT
                <br />
                <span className="text-transparent"
                  style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.18)" }}>
                  US
                </span>
              </h1>
              <p className="text-zinc-500 text-base md:text-xl max-w-xl leading-relaxed font-light">
                A US-based creative software house delivering web design, development
                &amp; digital solutions for over 3 years — blending bold creativity
                with cutting-edge technology.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/contact" className="btn btn-accent btn-lg">Work With Us →</Link>
                <Link href="/portfolio" className="btn btn-outline btn-lg">Our Work</Link>
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <div className="p-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] w-fit">
                <span style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
                  className="font-extrabold tracking-tight text-white leading-none block">
                  3+
                </span>
                <span className="text-zinc-600 text-xs uppercase tracking-wider font-medium mt-1 block">
                  Years Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="relative w-full overflow-hidden block border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div className="flex flex-col gap-5">
              <span className="section-label">Our Story</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
                className="font-bold tracking-tight text-white leading-tight">
                We Are A Creative{" "}
                <span className="bg-gradient-to-r from-[#7c6af7] to-[#5a78f0] bg-clip-text text-transparent">
                  DIGITAL AGENCY
                </span>
              </h2>
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-light">
                SOFTWARE ELITES is a full-service digital creative agency founded with a singular
                mission: to help businesses succeed online. With over 3 years of experience and a
                passionate team, we have helped hundreds of businesses across the USA transform their
                digital presence.
              </p>
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-light">
                Every customer who hands over their project to us, chooses us again for their next one —
                because we don&apos;t just build websites, we build lasting digital partnerships.
              </p>
              <Link href="/contact" className="btn btn-outline btn-md w-fit mt-2">
                Work With Us →
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <div className="p-8 rounded-2xl border border-[#7c6af7]/20 bg-[#7c6af7]/[0.04]">
                <span className="text-[#a89df9] text-xs font-bold uppercase tracking-[0.2em]">
                  Founded In USA
                </span>
                <p style={{ fontSize: "clamp(3rem, 5vw, 4rem)" }}
                  className="font-extrabold text-white tracking-tight leading-none mt-2 mb-3">
                  2023
                </p>
                <p className="text-zinc-500 text-sm">Richmond, Virginia</p>
              </div>
              <p className="text-zinc-600 text-sm italic leading-relaxed pl-4 border-l-2 border-[#7c6af7]/30">
                &ldquo;We don&apos;t just build websites. We build digital empires for our clients.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Banner ── */}
      <section className="bg-gradient-to-r from-[#7c6af7] to-[#5a78f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden">
            {[
              { value: "500+",  label: "Projects Completed" },
              { value: "120+",  label: "Happy Clients"       },
              { value: "3+",    label: "Years Experience"    },
              { value: "50+",   label: "Team Members"        },
            ].map((s, i) => (
              <div key={i} className="bg-[#7c6af7]/0 flex flex-col gap-1 p-6 md:p-8 text-center">
                <span style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
                  className="font-extrabold text-white tracking-tight leading-none">
                  {s.value}
                </span>
                <span className="text-white/70 text-[10px] uppercase tracking-wider font-semibold">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission Statement ── */}
      <section className="border-b border-white/[0.06] bg-[#07070e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-24 md:py-32 text-center">
          <p style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}
            className="font-bold text-white leading-tight max-w-3xl mx-auto">
            We don&apos;t just build websites.
            <br />
            <span className="bg-gradient-to-r from-[#7c6af7] to-[#5a78f0] bg-clip-text text-transparent">
              We build digital empires
            </span>
            <br />
            <span className="text-zinc-500 font-light">for our clients.</span>
          </p>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="relative w-full overflow-hidden block border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-24 md:py-32">
          <span className="section-label mb-4">Our Edge</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            className="font-bold tracking-tight text-white mb-14">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#7c6af7] to-[#5a78f0] bg-clip-text text-transparent">
              US?
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whyChooseUs.map((v, i) => (
              <div key={i}
                className="flex items-start gap-5 p-8 rounded-2xl border border-white/[0.07]
                           bg-[#07070e] hover:border-[#7c6af7]/30 transition-colors duration-300">
                <span className="text-[#7c6af7] text-2xl leading-none mt-0.5 shrink-0">{v.icon}</span>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#7c6af7] text-xs font-bold font-mono">0{i + 1}</span>
                    <h3 className="text-white font-bold text-lg">{v.title}</h3>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed font-light">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="relative w-full overflow-hidden block border-b border-white/[0.06] bg-[#07070e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-24 md:py-32">
          <span className="section-label mb-4">The People</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            className="font-bold tracking-tight text-white mb-14">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-[#7c6af7] to-[#5a78f0] bg-clip-text text-transparent">
              TEAM
            </span>
          </h2>
          <p className="text-zinc-500 text-base mb-10 -mt-8 font-light">
            Passionate experts dedicated to building your digital success.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {team.map(m => (
              <div key={m.name} className="flex flex-col gap-4 group">
                <div className="aspect-square rounded-2xl overflow-hidden border border-white/[0.07]
                                group-hover:border-[#7c6af7]/40 transition-colors duration-300">
                  <img src={m.img} alt={m.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-[1.05] group-hover:scale-100 transition-all duration-700 ease-out" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm md:text-base leading-tight">{m.name}</p>
                  <p className="text-[#a89df9] text-xs mt-0.5 font-medium">{m.role}</p>
                  <p className="text-zinc-600 text-xs mt-1 leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trusted Clients ── */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-20 md:py-24">
          <span className="section-label mb-4">Companies We&apos;ve Worked With</span>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            className="font-bold tracking-tight text-white mb-12">
            Trusted By Industry{" "}
            <span className="bg-gradient-to-r from-[#7c6af7] to-[#5a78f0] bg-clip-text text-transparent">
              LEADERS
            </span>
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {clientLogos.map(c => (
              <div key={c.name}
                className="flex flex-col items-center justify-center gap-2 p-6 rounded-2xl
                           border border-white/[0.07] bg-white/[0.02]
                           hover:border-[#7c6af7]/25 transition-colors duration-300 aspect-square">
                <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7c6af7]/20 to-[#5a78f0]/20
                                 border border-[#7c6af7]/20 flex items-center justify-center
                                 text-[#a89df9] text-xs font-bold tracking-wider">
                  {c.abbr}
                </span>
                <span className="text-white text-[10px] font-semibold uppercase tracking-wider text-center leading-tight">
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-24 md:py-32 text-center flex flex-col items-center gap-6">
          <span className="section-label">Ready To Start?</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            className="font-bold tracking-tight text-white">
            Let&apos;s Build{" "}
            <span className="bg-gradient-to-r from-[#7c6af7] to-[#5a78f0] bg-clip-text text-transparent">
              TOGETHER
            </span>
          </h2>
          <p className="text-zinc-500 text-base font-light max-w-md">
            Ready to transform your digital presence? Our team is here to make it happen —
            on time, every time.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn btn-accent btn-lg">Start a Project →</Link>
            <Link href="/packages" className="btn btn-outline btn-lg">View Packages</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

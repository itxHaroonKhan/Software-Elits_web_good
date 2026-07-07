import Link from "next/link";

const values = [
  {
    number: "01",
    title: "Creativity First",
    desc: "We believe bold ideas come from curious minds. Every project starts with a blank canvas and endless possibilities.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Results Driven",
    desc: "We measure success by the impact we create. Every pixel, every line of code serves a purpose.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="16 7 22 7 22 13" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Transparent Partnership",
    desc: "No hidden agendas. We communicate openly, deliver honestly, and build lasting relationships.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Future Focused",
    desc: "We don&apos;t just build for today — we architect for tomorrow&apos;s digital landscape.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const team = [
  { name: "John Smith",    role: "CEO & Founder",         img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop" },
  { name: "Emily Johnson", role: "Lead Designer",         img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400&fit=crop" },
  { name: "David Lee",     role: "Head of Development",   img: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=400&h=400&fit=crop" },
  { name: "Sarah Chen",    role: "Marketing Head",        img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&h=400&fit=crop" },
];

export default function AgencyPage() {
  return (
    <main className="bg-[#05050a] text-white min-h-screen">

      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden border-b border-white/[0.06]">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(124,106,247,0.07) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-28 sm:pt-32 md:pt-44 pb-20 relative z-10">
          <span className="section-label mb-6">Our Agency</span>
          <h1 style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            className="font-black tracking-tight leading-[0.88] text-white mb-6 max-w-4xl">
            OUR
            <br />
            <span className="text-transparent"
              style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.18)" }}>
              AGENCY
            </span>
          </h1>
          <p className="text-zinc-500 text-base md:text-xl max-w-xl leading-relaxed font-light">
            A creative powerhouse where strategy meets design and technology
            to build digital excellence.
          </p>
        </div>
      </section>

      {/* ── Agency Intro Card ── */}
      <section className="relative w-full overflow-hidden block border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="flex flex-col gap-6">
              <span className="section-label">Who We Are</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
                className="font-bold tracking-tight text-white leading-tight">
                Creatively Bold.{" "}
                <span className="text-zinc-500 font-light">Technically Sound.</span>
              </h2>
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-light">
                We are a full-service digital agency built on the belief that great work comes
                from a blend of curiosity, craft, and collaboration. Every brand has a story —
                we help you tell yours across every touchpoint.
              </p>
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-light">
                From startups to established enterprises, we partner with businesses to create
                digital experiences that drive real impact.
              </p>
              <Link href="/contact" className="btn btn-accent btn-md w-fit">
                Work With Us →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
              {[
                { value: "500+", label: "Projects Delivered" },
                { value: "300+", label: "Happy Clients"       },
                { value: "3+",   label: "Years Experience"    },
                { value: "50+",  label: "Team Members"        },
              ].map((s, i) => (
                <div key={i} className="bg-[#05050a] flex flex-col gap-2 p-8 md:p-10">
                  <span style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                    className="font-extrabold tracking-tight text-white leading-none">
                    {s.value}
                  </span>
                  <span className="text-zinc-600 text-xs uppercase tracking-wider font-medium">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="relative w-full overflow-hidden block border-b border-white/[0.06] bg-[#07070e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-24 md:py-32">
          <span className="section-label mb-4">What Drives Us</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            className="font-bold tracking-tight text-white mb-14">
            Our Core Values.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.number}
                className="flex flex-col gap-5 p-8 md:p-10 rounded-2xl border border-white/[0.07]
                           bg-[#05050a] hover:border-[#7c6af7]/30 transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#7c6af7]/10 border border-[#7c6af7]/20
                                  flex items-center justify-center text-[#7c6af7]
                                  group-hover:bg-[#7c6af7]/20 transition-colors duration-300">
                    {v.icon}
                  </div>
                  <span className="text-[#7c6af7]/50 text-xs font-bold font-mono">{v.number}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{v.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-light"
                  dangerouslySetInnerHTML={{ __html: v.desc }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="relative w-full overflow-hidden block border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-24 md:py-32">
          <span className="section-label mb-4">The People</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            className="font-bold tracking-tight text-white mb-14">
            Meet the team.
          </h2>
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
                  <p className="text-zinc-600 text-xs md:text-sm mt-0.5">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-white/[0.06] bg-[#07070e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-24 md:py-32 text-center flex flex-col items-center gap-6">
          <span className="section-label">Let&apos;s Collaborate</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            className="font-bold tracking-tight text-white">
            Ready To Create{" "}
            <span className="bg-gradient-to-r from-[#7c6af7] to-[#5a78f0] bg-clip-text text-transparent">
              Something Extraordinary?
            </span>
          </h2>
          <Link href="/contact" className="btn btn-accent btn-lg">
            Start Your Project →
          </Link>
        </div>
      </section>
    </main>
  );
}

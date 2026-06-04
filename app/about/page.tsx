import Link from "next/link";

const values = [
  { title: "Engineering First", desc: "We obsess over code quality, architecture, and performance. Shortcuts are not in our vocabulary." },
  { title: "Radical Transparency", desc: "Daily standups, real-time Slack access, and honest progress reports — no surprises, ever." },
  { title: "Client Partnership", desc: "We embed ourselves in your business. Your KPIs are our KPIs from day one." },
  { title: "Continuous Delivery", desc: "We ship to production frequently, gather feedback fast, and iterate relentlessly." },
];

const team = [
  { name: "Alex Turner",  role: "CEO & Co-Founder",      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop" },
  { name: "Priya Sharma", role: "CTO & Co-Founder",      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400&fit=crop" },
  { name: "James Okafor", role: "Head of Engineering",   img: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=400&h=400&fit=crop" },
  { name: "Sophie Chen",  role: "Lead Designer",         img: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=400&h=400&fit=crop" },
  { name: "Marcus Webb",  role: "Head of DevOps",        img: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=400&h=400&fit=crop" },
  { name: "Lena Park",    role: "Sr. Product Manager",   img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=400&h=400&fit=crop" },
];

const milestones = [
  { year: "2018", title: "Founded in London",      desc: "Started as a 3-person consultancy from a co-working space in Shoreditch." },
  { year: "2019", title: "First £1M Revenue",      desc: "Reached our first milestone with 12 clients across FinTech and healthcare." },
  { year: "2021", title: "Team of 25 Engineers",   desc: "Scaled to 25 engineers and launched our dedicated Cloud & DevOps practice." },
  { year: "2022", title: "AI/ML Practice Launched", desc: "Dedicated AI/ML division formed, delivering 8 production ML models in year one." },
  { year: "2023", title: "250 Projects Delivered", desc: "Hit a major milestone with £80M+ in measurable revenue impact for clients." },
  { year: "2024", title: "Award-Winning Agency",   desc: "Named Top Software Development Agency UK by Clutch and TechBehemoths." },
];

export default function AboutPage() {
  return (
    <main className="bg-[#05050a] text-white min-h-screen">

      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden border-b border-white/[0.06]">
        <div className="absolute -top-40 left-1/3 w-[700px] h-[700px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,106,247,0.07) 0%, transparent 65%)" }} />
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-44 pb-20 md:pb-28 relative z-10">
          <div className="block space-y-6 max-w-4xl">
            <span className="section-label">About Us</span>
            <h1 style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
              className="font-extrabold tracking-tight leading-[0.92] text-white">
              We build software that{" "}
              <span className="bg-gradient-to-r from-[#7c6af7] to-[#5a78f0] bg-clip-text text-transparent">
                moves the needle.
              </span>
            </h1>
            <p className="text-zinc-500 text-base md:text-xl max-w-xl leading-relaxed font-light pb-4">
              Software Elites is a London-based development agency founded in 2018. We partner with
              ambitious founders, product teams, and enterprises to design, build, and scale
              the software that defines their businesses.
            </p>
          </div>
        </div>
      </section>

      {/* ── Mission + Stats ── */}
      <section className="relative w-full overflow-hidden block border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div className="flex flex-col gap-6">
              <span className="section-label">Our Mission</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
                className="font-bold tracking-tight text-white leading-tight">
                Elite engineering, delivered with integrity and speed.
              </h2>
              <p className="text-zinc-500 text-base leading-relaxed font-light">
                We believe great software is the single highest-leverage investment a company can make.
                Our mission is to make elite-level software engineering accessible to ambitious teams —
                regardless of their size or stage.
              </p>
              <p className="text-zinc-500 text-base leading-relaxed font-light">
                Every engagement starts with deep discovery. We learn your business, understand your
                constraints, and only then propose a solution. We don&apos;t sell predefined packages —
                we solve real problems.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
              {[
                { value: "250+",  label: "Projects Delivered"   },
                { value: "£80m+", label: "Client Revenue Impact" },
                { value: "98%",   label: "Client Satisfaction"  },
                { value: "6yr",   label: "In Business"          },
              ].map((s, i) => (
                <div key={i} className="bg-[#05050a] flex flex-col gap-2 p-8 md:p-10">
                  <span style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
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

      {/* ── Values ── */}
      <section className="relative w-full overflow-hidden block border-b border-white/[0.06] bg-[#07070e]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <span className="section-label mb-4">Our Values</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            className="font-bold tracking-tight text-white mb-14">
            How we operate.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <div key={i}
                className="flex flex-col gap-4 p-8 rounded-2xl border border-white/[0.07]
                           bg-[#05050a] hover:border-[#7c6af7]/30 transition-colors duration-300">
                <span className="text-[#7c6af7] text-xs font-bold uppercase tracking-[0.2em]">0{i + 1}</span>
                <h3 className="text-xl font-bold text-white">{v.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-light">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="relative w-full overflow-hidden block border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <span className="section-label mb-4">The Team</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            className="font-bold tracking-tight text-white mb-14">
            The people behind the code.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {team.map(m => (
              <div key={m.name} className="flex flex-col gap-3 group">
                <div className="aspect-square rounded-2xl overflow-hidden border border-white/[0.07]
                                group-hover:border-[#7c6af7]/40 transition-colors duration-300">
                  <img src={m.img} alt={m.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-tight">{m.name}</p>
                  <p className="text-zinc-600 text-xs mt-0.5">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="relative w-full overflow-hidden block border-b border-white/[0.06] bg-[#07070e]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <span className="section-label mb-4">Our Journey</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            className="font-bold tracking-tight text-white mb-14">
            Six years of growth.
          </h2>
          <div className="flex flex-col">
            {milestones.map((m, i) => (
              <div key={i}
                className="grid grid-cols-[72px_1fr] md:grid-cols-[100px_1fr] gap-6 md:gap-10
                           py-7 border-b border-white/[0.06] last:border-b-0 group">
                <span className="text-[#7c6af7] text-sm font-bold tabular-nums pt-0.5">{m.year}</span>
                <div>
                  <h3 className="text-white font-semibold text-base md:text-lg mb-1
                                 group-hover:text-[#a89df9] transition-colors duration-200">
                    {m.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32
                        flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Want to work with us?</h2>
            <p className="text-zinc-500 text-base font-light">
              We&apos;re always looking for ambitious projects and great people.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-accent btn-lg">Start a Project</Link>
            <Link href="/careers" className="btn btn-outline btn-lg">View Careers</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";

const techStack = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5",      icon: "🌐", desc: "Semantic, accessible markup for the modern web." },
      { name: "CSS3",       icon: "🎨", desc: "Advanced styling with animations, grid, and custom properties." },
      { name: "JavaScript", icon: "⚡", desc: "The core language powering interactive web experiences." },
      { name: "React",      icon: "⚛️", desc: "Component-based UI library for fast, dynamic interfaces." },
      { name: "Next.js",    icon: "▲",  desc: "Full-stack React framework with SSR, SSG, and API routes." },
      { name: "Tailwind",   icon: "💨", desc: "Utility-first CSS for rapid, consistent design." },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js",    icon: "🟢", desc: "Scalable server-side JavaScript runtime." },
      { name: "Express",    icon: "🚀", desc: "Minimal, fast Node.js web application framework." },
      { name: "Python",     icon: "🐍", desc: "Versatile language for APIs, AI/ML, and data processing." },
      { name: "GraphQL",    icon: "◈",  desc: "Flexible API query language replacing REST endpoints." },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB",      icon: "🍃", desc: "NoSQL document database for flexible, scalable data." },
      { name: "PostgreSQL",   icon: "🐘", desc: "Powerful open-source relational database." },
      { name: "Redis",        icon: "🔴", desc: "In-memory data store for caching and real-time features." },
      { name: "Firebase",     icon: "🔥", desc: "Google's realtime database and auth platform." },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "React Native", icon: "📱", desc: "Cross-platform iOS & Android apps from a single codebase." },
      { name: "Expo",         icon: "🎯", desc: "React Native toolchain for rapid mobile development." },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS",          icon: "☁️", desc: "Industry-leading cloud infrastructure and services." },
      { name: "Docker",       icon: "🐳", desc: "Container platform for consistent, portable deployments." },
      { name: "Kubernetes",   icon: "☸️", desc: "Container orchestration for scalable microservices." },
      { name: "Vercel",       icon: "▲",  desc: "Zero-config deployment platform for frontend & serverless." },
    ],
  },
  {
    category: "Design & CMS",
    items: [
      { name: "Figma",        icon: "🎭", desc: "Collaborative design tool for UI/UX and prototyping." },
      { name: "WordPress",    icon: "📝", desc: "World's most popular CMS for content-driven websites." },
      { name: "Materialize",  icon: "📐", desc: "Material Design CSS framework for polished UIs." },
      { name: "GSAP",         icon: "✨", desc: "Professional-grade animation library for the web." },
    ],
  },
];

const process = [
  { step: "01", title: "Discovery",    desc: "We deep-dive into your business goals, audience, and technical requirements to map out the right solution." },
  { step: "02", title: "Strategy",     desc: "Tech stack selection, architecture planning, and a clear roadmap — aligned to your timeline and budget." },
  { step: "03", title: "Design",       desc: "Wireframes, prototypes, and pixel-perfect UI — approved before a single line of production code is written." },
  { step: "04", title: "Development",  desc: "Agile sprints with daily updates. Clean, tested, documented code shipped at pace." },
  { step: "05", title: "Launch",       desc: "Deployment, performance testing, SEO setup, and ongoing support — we stay with you beyond go-live." },
];

const highlights = [
  { value: "3+",  label: "Years Experience" },
  { value: "500+", label: "Projects Delivered" },
  { value: "50+", label: "Team Members" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function TechnologiesPage() {
  return (
    <main className="bg-[#05050a] text-white min-h-screen">

      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden border-b border-white/[0.06]">
        <div className="absolute -top-40 right-1/3 w-[700px] h-[700px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(90,120,240,0.07) 0%, transparent 65%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-28 sm:pt-32 md:pt-44 pb-20 relative z-10">
          <span className="section-label mb-6">Technologies</span>
          <h1 style={{ fontSize: "clamp(2.2rem, 6vw, 5.5rem)" }}
            className="font-extrabold tracking-tight leading-[0.92] text-white mb-6 max-w-4xl">
            Tools we{" "}
            <span className="bg-gradient-to-r from-[#7c6af7] to-[#5a78f0] bg-clip-text text-transparent">
              master.
            </span>
          </h1>
          <p className="text-zinc-500 text-base md:text-xl max-w-xl leading-relaxed font-light">
            We select the right technology for every project — battle-tested tools chosen for performance,
            scalability, and long-term maintainability.
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
            {highlights.map((h, i) => (
              <div key={i} className="bg-[#05050a] flex flex-col gap-2 p-8 md:p-10">
                <span style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                  className="font-extrabold tracking-tight text-white leading-none">
                  {h.value}
                </span>
                <span className="text-zinc-600 text-xs uppercase tracking-wider font-medium">{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech stack by category ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-20 md:py-28">
        <span className="section-label mb-4">Our Stack</span>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          className="font-bold tracking-tight text-white mb-16">
          Full-stack expertise.
        </h2>

        <div className="flex flex-col gap-14">
          {techStack.map(group => (
            <div key={group.category}>
              <h3 className="text-zinc-500 text-xs uppercase tracking-[0.22em] font-bold mb-5 flex items-center gap-3">
                <span className="block w-8 h-px bg-white/[0.12]" />
                {group.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {group.items.map(tech => (
                  <div key={tech.name}
                    className="flex items-start gap-4 p-5 rounded-2xl border border-white/[0.07]
                               bg-white/[0.02] hover:border-[#7c6af7]/30 hover:bg-[#7c6af7]/[0.04]
                               transition-all duration-300 group">
                    <span className="text-2xl leading-none mt-0.5 shrink-0">{tech.icon}</span>
                    <div>
                      <p className="text-white font-semibold text-sm group-hover:text-[#a89df9] transition-colors duration-200">
                        {tech.name}
                      </p>
                      <p className="text-zinc-600 text-xs leading-relaxed mt-1">{tech.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5-Step Process ── */}
      <section className="relative w-full overflow-hidden block bg-[#07070e] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-24 md:py-32">
          <span className="section-label mb-4">How We Work</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            className="font-bold tracking-tight text-white mb-16">
            Our 5-step process.
          </h2>

          {/* Desktop: horizontal timeline */}
          <div className="hidden md:grid grid-cols-5 gap-0 rounded-2xl overflow-hidden border border-white/[0.06]">
            {process.map((p, i) => (
              <div key={p.step}
                className={`relative flex flex-col gap-4 p-7 bg-[#05050a] hover:bg-[#07070e]
                            transition-colors duration-200
                            ${i < process.length - 1 ? "border-r border-white/[0.06]" : ""}`}>
                <span className="text-[#7c6af7] font-mono text-xs font-bold tracking-[0.2em]">
                  {p.step}
                </span>
                <h3 className="text-white font-semibold text-base">{p.title}</h3>
                <p className="text-zinc-600 text-xs leading-relaxed font-light">{p.desc}</p>
                {i < process.length - 1 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10
                                  w-5 h-5 rounded-full bg-[#05050a] border border-[#7c6af7]/30
                                  flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M2 4h4M4 2l2 2-2 2" stroke="#7c6af7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile: vertical list */}
          <div className="flex flex-col md:hidden">
            {process.map((p, i) => (
              <div key={p.step}
                className="flex items-start gap-6 py-7 border-b border-white/[0.06] last:border-b-0">
                <div className="flex flex-col items-center shrink-0">
                  <span className="w-8 h-8 rounded-full bg-[#7c6af7]/15 border border-[#7c6af7]/30
                                   flex items-center justify-center text-[#7c6af7] text-[10px] font-bold">
                    {p.step}
                  </span>
                  {i < process.length - 1 && (
                    <div className="w-px h-12 bg-white/[0.06] mt-2" />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className="text-white font-semibold text-base mb-2">{p.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed font-light">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-24 md:py-32
                        flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Want to know our full stack?
            </h2>
            <p className="text-zinc-500 text-base font-light max-w-md">
              Every project gets the right tool for the job. Let&apos;s talk about what&apos;s best for yours.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/contact" className="btn btn-accent btn-lg">Start a Project</Link>
            <Link href="/services" className="btn btn-outline btn-lg">Our Services</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";

const perks = [
  { icon: "💰", title: "Competitive Salary",  desc: "Top-quartile pay benchmarked annually against industry data." },
  { icon: "🌍", title: "Fully Remote",         desc: "Work from anywhere. Team members across 12 countries." },
  { icon: "📈", title: "Equity Options",       desc: "All full-time employees are offered meaningful equity participation." },
  { icon: "🏖️", title: "36 Days Holiday",      desc: "Minimum 36 days including bank holidays. Unlimited in practice." },
  { icon: "🎓", title: "Learning Budget",      desc: "£3,000/year for courses, conferences, books, and certifications." },
  { icon: "💻", title: "Top-Spec Kit",         desc: "Latest MacBook Pro + peripherals and home office budget included." },
];

const openRoles = [
  {
    title: "Senior Full-Stack Engineer",
    type: "Full-time · Remote", dept: "Engineering",
    desc: "Build production-grade web apps for our clients end-to-end, from database to UI.",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Senior React Native Engineer",
    type: "Full-time · Remote", dept: "Mobile",
    desc: "Architect and ship cross-platform mobile apps. Lead mobile delivery directly with clients.",
    skills: ["React Native", "Expo", "iOS/Android", "TypeScript"],
  },
  {
    title: "ML Engineer",
    type: "Full-time · Hybrid (London)", dept: "AI & ML",
    desc: "Design and deploy production ML models and LLM-powered features.",
    skills: ["Python", "PyTorch", "FastAPI", "AWS SageMaker"],
  },
  {
    title: "DevOps / Platform Engineer",
    type: "Full-time · Remote", dept: "Cloud",
    desc: "Own cloud infrastructure. Design scalable systems, automate everything, eliminate toil.",
    skills: ["AWS", "Terraform", "Docker", "Kubernetes"],
  },
  {
    title: "Product Designer",
    type: "Full-time · Remote", dept: "Design",
    desc: "Create intuitive interfaces for web and mobile. Discovery through polished final designs.",
    skills: ["Figma", "UX Research", "Design Systems", "Prototyping"],
  },
];

export default function CareersPage() {
  return (
    <main className="bg-[#05050a] text-white min-h-screen">

      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden border-b border-white/[0.06]">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,106,247,0.08) 0%, transparent 65%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-28 sm:pt-32 md:pt-44 pb-20 md:pb-28 relative z-10">
          <div className="block space-y-6 max-w-3xl">
            <span className="section-label">Careers</span>
            <h1 style={{ fontSize: "clamp(2.8rem, 7vw, 6.5rem)" }}
              className="font-extrabold tracking-tight leading-[0.92] text-white">
              Build with the{" "}
              <span className="bg-gradient-to-r from-[#7c6af7] to-[#5a78f0] bg-clip-text text-transparent">
                best.
              </span>
            </h1>
            <p className="text-zinc-500 text-base md:text-xl max-w-xl leading-relaxed font-light pb-4">
              A small team of senior engineers who care deeply about craft and client outcomes.
              No politics. No meetings-heavy sprints. Just interesting problems and great work.
            </p>
          </div>
        </div>
      </section>

      {/* ── Perks ── */}
      <section className="relative w-full overflow-hidden block border-b border-white/[0.06] bg-[#07070e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-20 md:py-28">
          <span className="section-label mb-4">Why Join Us</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            className="font-bold tracking-tight text-white mb-14">
            Life at Software Elites.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {perks.map(p => (
              <div key={p.title}
                className="flex flex-col gap-4 p-7 rounded-2xl border border-white/[0.07]
                           bg-[#05050a] hover:border-[#7c6af7]/30 hover:bg-[#07070e]
                           transition-all duration-300">
                <span className="text-3xl">{p.icon}</span>
                <h3 className="text-white font-bold text-lg">{p.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-light">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Roles ── */}
      <section className="relative w-full overflow-hidden block border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-20 md:py-28">
          <span className="section-label mb-4">Open Positions</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            className="font-bold tracking-tight text-white mb-14">
            {openRoles.length} roles open now.
          </h2>
          <div className="flex flex-col gap-4">
            {openRoles.map(role => (
              <div key={role.title}
                className="group flex flex-col md:flex-row md:items-center justify-between gap-6
                           p-7 rounded-2xl border border-white/[0.07]
                           hover:border-[#7c6af7]/35 hover:bg-[#7c6af7]/[0.03]
                           transition-all duration-300">
                <div className="flex flex-col gap-3 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08]
                                     text-zinc-400 text-[10px] font-bold uppercase tracking-wider">
                      {role.dept}
                    </span>
                    <span className="text-zinc-600 text-xs">{role.type}</span>
                  </div>
                  <h3 className="text-white font-bold text-xl group-hover:text-[#a89df9] transition-colors">{role.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed font-light max-w-lg">{role.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map(s => (
                      <span key={s} className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.07]
                                               text-zinc-500 text-xs font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <Link href="/contact" className="btn btn-outline btn-md shrink-0 whitespace-nowrap">
                  Apply Now →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Speculative ── */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-24 md:py-32
                        flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Don&apos;t see your role?</h2>
            <p className="text-zinc-500 text-base font-light max-w-md">
              We&apos;re always interested in exceptional engineers. Send us your CV and we&apos;ll keep
              you in mind for future openings.
            </p>
          </div>
          <a href="mailto:careers@softwareelites.co.uk" className="btn btn-accent btn-lg shrink-0">
            Send Speculative CV
          </a>
        </div>
      </section>
    </main>
  );
}

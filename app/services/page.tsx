import Link from "next/link";

const services = [
  {
    slug: "custom-software", number: "01",
    title: "Custom Software Development",
    tagline: "Bespoke platforms engineered to your exact specification.",
    desc: "From complex enterprise platforms to greenfield SaaS products, we design and build software that solves real business problems — written for long-term maintainability, performance, and scale.",
    bullets: ["Full-stack web applications", "Enterprise system integrations", "Legacy modernisation", "API design & development", "Technical architecture consulting"],
    image: "https://www.charle.co.uk/assets/images/navigation/nav-services-cta.webp",
  },
  {
    slug: "web-mobile", number: "02",
    title: "Web & Mobile App Development",
    tagline: "Cross-platform applications that users love.",
    desc: "High-performance web and mobile apps with pixel-perfect UX. Whether a customer-facing app or internal tool, we deliver products that drive engagement and retention.",
    bullets: ["React & Next.js web apps", "React Native iOS & Android", "Progressive Web Apps (PWA)", "Performance optimisation", "App Store submission & maintenance"],
    image: "https://www.charle.co.uk/articles/guide-to-ab-split-testing/images/thumb.jpg",
  },
  {
    slug: "ai-ml", number: "03",
    title: "AI & Machine Learning",
    tagline: "Intelligent systems that give your business an edge.",
    desc: "Production-ready AI integrations and custom ML models. From LLM-powered features to predictive analytics engines — real AI without the hype.",
    bullets: ["LLM integration & fine-tuning", "Predictive analytics models", "Computer vision systems", "Recommendation engines", "AI workflow automation"],
    image: "https://www.charle.co.uk/assets/images/home/grid/grid8.webp",
  },
  {
    slug: "cloud-devops", number: "04",
    title: "Cloud Infrastructure & DevOps",
    tagline: "Scalable infrastructure built for reliability and speed.",
    desc: "From initial AWS setup to multi-region Kubernetes clusters — we handle the operational complexity so your team can focus on shipping.",
    bullets: ["AWS, GCP & Azure architecture", "Kubernetes & Docker", "CI/CD pipeline design", "Infrastructure as Code (Terraform)", "Cost optimisation & monitoring"],
    image: "https://www.charle.co.uk/assets/images/home/grid/grid6.webp",
  },
  {
    slug: "ui-ux", number: "05",
    title: "UI/UX Design",
    tagline: "Design that converts, delights, and differentiates.",
    desc: "Our design team works alongside engineers to produce interfaces that are not only beautiful but also intuitive, accessible, and aligned with your brand.",
    bullets: ["Product discovery & research", "Wireframing & prototyping", "Design systems", "Usability testing", "Accessibility (WCAG 2.1)"],
    image: "https://www.charle.co.uk/assets/images/home/grid/grid3.webp",
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "Deep-dive workshops to understand your goals, users, and technical constraints." },
  { step: "02", title: "Architecture", desc: "We design the technical blueprint — stack selection, data models, system design." },
  { step: "03", title: "Build", desc: "Agile sprints with daily updates. You see progress every single day." },
  { step: "04", title: "Ship & Scale", desc: "Production deployment, monitoring, and ongoing support as you grow." },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#05050a] text-white min-h-screen">

      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden border-b border-white/[0.06]">
        <div className="absolute -top-40 left-1/4 w-[700px] h-[700px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,106,247,0.07) 0%, transparent 65%)" }} />
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-44 pb-16 relative z-10">
          <div className="block space-y-6 max-w-4xl">
            <span className="section-label">What We Do</span>
            <h1 style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
              className="font-extrabold tracking-tight leading-[0.93] text-white">
              End-to-end software{" "}
              <span className="bg-gradient-to-r from-[#7c6af7] to-[#5a78f0] bg-clip-text text-transparent">
                expertise.
              </span>
            </h1>
            <p className="text-zinc-500 text-base md:text-xl max-w-xl leading-relaxed font-light pb-12 md:pb-20">
              From a single microservice to a complete platform rebuild — we cover
              every layer of the modern software stack.
            </p>
          </div>
        </div>
      </section>

      {/* ── Service list ── */}
      <section className="relative w-full overflow-hidden block">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {services.map((s, i) => (
            <div key={s.slug}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start
                         py-20 md:py-28 border-b border-white/[0.06]">

              {/* Image */}
              <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.07]
                                hover:border-[#7c6af7]/30 transition-colors duration-500">
                  <img src={s.image} alt={s.title}
                    className="w-full h-full object-cover opacity-75 hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Content */}
              <div className={`lg:col-span-7 flex flex-col gap-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="text-[#7c6af7] font-mono text-sm font-semibold">{s.number}</span>
                <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
                  className="font-bold tracking-tight text-white leading-tight">
                  {s.title}
                </h2>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light italic border-l-2 border-[#7c6af7]/40 pl-4">
                  {s.tagline}
                </p>
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-light">{s.desc}</p>
                <ul className="flex flex-col gap-2.5 mt-2">
                  {s.bullets.map(b => (
                    <li key={b} className="flex items-center gap-3 text-sm text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7c6af7] shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${s.slug}`} className="btn btn-outline btn-md w-fit mt-2">
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="relative w-full overflow-hidden block bg-[#07070e] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
          <span className="section-label mb-4">How We Work</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            className="font-bold tracking-tight text-white mb-16">
            Our process, simplified.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map(p => (
              <div key={p.step}
                className="flex flex-col gap-4 p-8 rounded-2xl border border-white/[0.07]
                           bg-[#05050a] hover:border-[#7c6af7]/35 transition-colors duration-300">
                <span className="text-[#7c6af7] text-xs font-bold uppercase tracking-[0.2em]">Step {p.step}</span>
                <h3 className="text-xl font-bold text-white">{p.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-light">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col md:flex-row
                        items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Not sure where to start?</h2>
            <p className="text-zinc-500 text-base font-light max-w-md">
              Book a free 30-minute discovery call. We&apos;ll help you figure out exactly what you need.
            </p>
          </div>
          <Link href="/contact" className="btn btn-accent btn-lg shrink-0">
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}

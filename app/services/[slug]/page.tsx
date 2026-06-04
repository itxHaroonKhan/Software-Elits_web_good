import Link from "next/link";
import { notFound } from "next/navigation";

const services: Record<string, {
  title: string; tagline: string; desc: string;
  bullets: { heading: string; text: string }[];
  image: string; tags: string[];
}> = {
  "custom-software": {
    title: "Custom Software Development",
    tagline: "Bespoke platforms engineered to your exact specification.",
    desc: "We design and build software from the ground up — web apps, enterprise platforms, internal tools, and API layers. Every project starts with deep discovery: we learn your domain, understand your constraints, and architect a solution that fits your business today and scales with it tomorrow.",
    image: "https://www.charle.co.uk/assets/images/navigation/nav-services-cta.webp",
    tags: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    bullets: [
      { heading: "Full-Stack Web Applications", text: "End-to-end development of complex, high-traffic web applications with modern frontend frameworks and robust backend APIs." },
      { heading: "Enterprise Integrations", text: "Connect your new software to legacy systems, third-party APIs, ERPs, and CRMs — cleanly and reliably." },
      { heading: "Legacy Modernisation", text: "Incrementally migrate ageing systems to modern architectures without the risk of a big-bang rewrite." },
      { heading: "Technical Architecture", text: "We'll design the right system architecture before a line of code is written, saving you from costly rewrites later." },
    ],
  },
  "web-mobile": {
    title: "Web & Mobile App Development",
    tagline: "Cross-platform applications that users love.",
    desc: "From consumer-facing apps to complex B2B tools, we build web and mobile products that are fast, reliable, and intuitive. Our teams work across React, Next.js, and React Native — shipping products that perform well on every device and every connection speed.",
    image: "https://www.charle.co.uk/articles/guide-to-ab-split-testing/images/thumb.jpg",
    tags: ["React", "Next.js", "React Native", "Expo", "TypeScript", "iOS", "Android"],
    bullets: [
      { heading: "React & Next.js Web Apps", text: "Server-rendered, edge-cached, and blazing fast — web apps that score 95+ on Core Web Vitals and convert." },
      { heading: "React Native iOS & Android", text: "One codebase, two native apps. We deliver performance-first mobile experiences with full native module access." },
      { heading: "Progressive Web Apps", text: "Offline-capable, installable web apps that bridge the gap between web and native without the app store overhead." },
      { heading: "Performance Optimisation", text: "Profiling, code splitting, image optimisation, and CDN configuration — squeezing every millisecond of performance." },
    ],
  },
  "ai-ml": {
    title: "AI & Machine Learning",
    tagline: "Intelligent systems that give your business an edge.",
    desc: "We build production-ready AI features and ML models — not demos, not prototypes. From LLM integrations to custom training pipelines, we help companies move from idea to production AI without the hype or the hallucinations.",
    image: "https://www.charle.co.uk/assets/images/home/grid/grid8.webp",
    tags: ["Python", "FastAPI", "PyTorch", "LangChain", "OpenAI", "AWS SageMaker"],
    bullets: [
      { heading: "LLM Integration & Fine-Tuning", text: "Integrate GPT-4, Claude, or open-source LLMs into your product with proper prompt engineering, retrieval augmentation, and guardrails." },
      { heading: "Predictive Analytics Models", text: "Churn prediction, demand forecasting, anomaly detection — ML models trained on your data and deployed to production." },
      { heading: "Computer Vision", text: "Object detection, image classification, and OCR pipelines built for real-world production workloads." },
      { heading: "AI Workflow Automation", text: "Replace manual, repetitive processes with intelligent agents that can read documents, make decisions, and take actions." },
    ],
  },
  "cloud-devops": {
    title: "Cloud Infrastructure & DevOps",
    tagline: "Scalable infrastructure built for reliability and speed.",
    desc: "We design, build, and manage the cloud infrastructure that your software runs on. From initial AWS account setup to complex multi-region Kubernetes clusters, we eliminate ops toil and give your team the confidence to ship fast.",
    image: "https://www.charle.co.uk/assets/images/home/grid/grid6.webp",
    tags: ["AWS", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "Datadog"],
    bullets: [
      { heading: "Cloud Architecture", text: "Right-sized, well-architected AWS environments designed for your specific scale, compliance, and cost requirements." },
      { heading: "CI/CD Pipelines", text: "Automated testing and deployment pipelines that let your team ship to production multiple times per day with full confidence." },
      { heading: "Infrastructure as Code", text: "Terraform and CloudFormation for reproducible, version-controlled infrastructure that can be spun up in minutes." },
      { heading: "Monitoring & Observability", text: "Full-stack observability with Datadog, CloudWatch, and PagerDuty — so you know about problems before your users do." },
    ],
  },
  "ui-ux": {
    title: "UI/UX Design",
    tagline: "Design that converts, delights, and differentiates.",
    desc: "Great software starts with great design. Our designers work closely alongside engineers from day one — not as a separate phase, but as an integrated part of delivery. We produce design systems, prototypes, and finished specs that engineers can build without ambiguity.",
    image: "https://www.charle.co.uk/assets/images/home/grid/grid3.webp",
    tags: ["Figma", "User Research", "Prototyping", "Design Systems", "WCAG 2.1"],
    bullets: [
      { heading: "Product Discovery", text: "User interviews, competitive analysis, and jobs-to-be-done workshops to ensure we're solving the right problem." },
      { heading: "Wireframing & Prototyping", text: "Low-fidelity concepts through to high-fidelity Figma prototypes — all validated with real users before engineering begins." },
      { heading: "Design Systems", text: "Scalable, documented component libraries that keep your product consistent and your team moving fast." },
      { heading: "Accessibility", text: "WCAG 2.1 AA compliance baked in from the start — not bolted on as an afterthought." },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = services[params.slug];
  if (!s) notFound();

  return (
    <main className="bg-black text-white min-h-screen pt-16">

      {/* ── Hero ── */}
      <section className="relative border-b border-white/[0.06] overflow-hidden">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,106,247,0.07) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-16 relative z-10">
          <Link href="/services"
            className="inline-flex items-center gap-2 text-zinc-600 hover:text-white text-sm transition-colors mb-10">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            All Services
          </Link>
          <span className="text-[#7c6af7] text-xs font-bold uppercase tracking-[0.2em] block mb-5">
            Service
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[0.95] text-white mb-5 max-w-3xl">
            {s.title}
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl font-light italic max-w-2xl">{s.tagline}</p>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.07] mb-8">
                <img src={s.image} alt={s.title}
                  className="w-full h-full object-cover opacity-80" />
              </div>
              <div>
                <p className="text-zinc-600 text-xs uppercase tracking-[0.2em] font-bold mb-4">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.07]
                                 text-zinc-400 text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light">{s.desc}</p>
              <div className="flex flex-col gap-6">
                {s.bullets.map((b) => (
                  <div key={b.heading} className="flex gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7c6af7] mt-2.5 shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold text-base mb-1">{b.heading}</h3>
                      <p className="text-zinc-500 text-sm leading-relaxed">{b.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn btn-accent btn-lg w-fit mt-4">
                Discuss Your Project →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related services ── */}
      <section>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="flex items-center justify-between">
            <p className="text-zinc-600 text-sm">Explore our other services</p>
            <Link href="/services" className="text-[#7c6af7] text-sm hover:text-[#a89df9] transition-colors">
              View all →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

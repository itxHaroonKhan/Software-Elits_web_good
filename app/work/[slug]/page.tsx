import Link from "next/link";
import { notFound } from "next/navigation";

const projects: Record<string, {
  brand: string; tagline: string; year: string; category: string;
  description: string; challenge: string; solution: string; outcome: string;
  image: string; images: string[];
  stats: { value: string; label: string }[];
  tags: string[]; stack: string[];
}> = {
  financeflow: {
    brand: "FinanceFlow", tagline: "Enterprise FinTech Platform",
    year: "2024", category: "FinTech",
    description: "Real-time trading dashboard with live market data feeds, compliance reporting, and role-based access control built for a leading UK brokerage.",
    challenge: "The client had a legacy system that couldn't handle real-time data at scale. Compliance teams were spending 40+ hours per week manually generating reports.",
    solution: "We rebuilt the entire platform on a microservices architecture with WebSocket-based live data feeds, automated compliance dashboards, and a React frontend designed for power traders.",
    outcome: "The new platform processes 2M+ data points per second with sub-50ms latency. Manual reporting time dropped to near zero, and the client reported a 65% improvement in overall operational efficiency.",
    image: "https://www.charle.co.uk/assets/images/home/grid/grid1.webp",
    images: [
      "https://www.charle.co.uk/assets/images/home/grid/grid1.webp",
      "https://www.charle.co.uk/assets/images/home/grid/grid3.webp",
      "https://www.charle.co.uk/assets/images/home/grid/grid6.webp",
    ],
    stats: [{ value: "+65%", label: "Efficiency Gain" }, { value: "£2.4m+", label: "Cost Saved" }, { value: "<50ms", label: "Data Latency" }, { value: "2M+", label: "Events/Second" }],
    tags: ["Custom Software", "FinTech", "React", "AWS"],
    stack: ["React", "TypeScript", "Node.js", "WebSockets", "PostgreSQL", "AWS ECS", "Redis"],
  },
  meditrack: {
    brand: "MediTrack", tagline: "Healthcare Mobile App",
    year: "2024", category: "Healthcare",
    description: "Cross-platform patient monitoring app with real-time vitals tracking, appointment scheduling, encrypted data sync, and a HIPAA-compliant backend.",
    challenge: "Healthcare providers were using disconnected paper-based systems and spreadsheets for patient monitoring, leading to delayed interventions and administrative overload.",
    solution: "We built a unified React Native app with real-time vitals dashboards, push-based alerts for anomalies, encrypted cloud sync, and an admin portal for clinical staff.",
    outcome: "Within 6 months of launch, MediTrack reached 50K+ active patients. Clinical response times improved by 38%, and the platform achieved full HIPAA compliance on first audit.",
    image: "https://www.charle.co.uk/assets/images/home/grid/grid4.webp",
    images: [
      "https://www.charle.co.uk/assets/images/home/grid/grid4.webp",
      "https://www.charle.co.uk/assets/images/home/grid/grid8.webp",
      "https://www.charle.co.uk/assets/images/home/grid/grid1.webp",
    ],
    stats: [{ value: "50K+", label: "Active Users" }, { value: "+41%", label: "Engagement" }, { value: "HIPAA", label: "Compliant" }, { value: "−38%", label: "Response Time" }],
    tags: ["Mobile App", "React Native", "Healthcare", "HIPAA"],
    stack: ["React Native", "Expo", "Node.js", "PostgreSQL", "AWS RDS", "Firebase FCM"],
  },
  shopforce: {
    brand: "ShopForce", tagline: "Headless Commerce Platform",
    year: "2023", category: "Commerce",
    description: "Next.js storefront connected to a custom GraphQL API — blazing-fast pages, composable checkout, and a best-in-class Core Web Vitals score for a high-growth UK retailer.",
    challenge: "The client's existing Shopify store was too slow and too rigid to support their rapid growth. Page load times of 6s+ were killing conversion rates.",
    solution: "We designed a fully headless architecture: Next.js on the frontend, a custom GraphQL API layer, and a headless CMS. CDN edge caching brought pages to under 0.8s globally.",
    outcome: "Conversion rate increased by 55%, average order value by 22%, and page load time dropped from 6.2s to 0.8s. The platform now handles 10× peak load without degradation.",
    image: "https://www.charle.co.uk/assets/images/home/grid/grid6.webp",
    images: [
      "https://www.charle.co.uk/assets/images/home/grid/grid6.webp",
      "https://www.charle.co.uk/assets/images/home/grid/grid3.webp",
      "https://www.charle.co.uk/assets/images/home/grid/grid4.webp",
    ],
    stats: [{ value: "+55%", label: "Conversions" }, { value: "3×", label: "Page Speed" }, { value: "0.8s", label: "Load Time" }, { value: "+22%", label: "Avg Order Value" }],
    tags: ["Next.js", "Headless", "GraphQL", "Commerce"],
    stack: ["Next.js", "TypeScript", "GraphQL", "Contentful", "Stripe", "Vercel", "Cloudflare"],
  },
  datasphere: {
    brand: "DataSphere", tagline: "AI-Powered Analytics SaaS",
    year: "2023", category: "AI & ML",
    description: "B2B analytics platform with ML models for churn prediction, revenue forecasting, and automated anomaly detection — serving 300+ enterprise clients.",
    challenge: "The founding team had proven ML models but no engineering capacity to build production infrastructure, a multi-tenant SaaS platform, or a modern data pipeline.",
    solution: "We built the entire platform from scratch: a Python ML inference layer, a multi-tenant Next.js dashboard, real-time data ingestion pipelines, and a self-serve onboarding flow.",
    outcome: "DataSphere reached £5M+ ARR within 12 months of launch. Client retention improved by 72% attributed directly to the churn prediction model. The platform now serves 300+ enterprise clients.",
    image: "https://www.charle.co.uk/assets/images/home/grid/grid3.webp",
    images: [
      "https://www.charle.co.uk/assets/images/home/grid/grid3.webp",
      "https://www.charle.co.uk/assets/images/home/grid/grid1.webp",
      "https://www.charle.co.uk/assets/images/home/grid/grid6.webp",
    ],
    stats: [{ value: "+72%", label: "Client Retention" }, { value: "£5M+", label: "ARR Impact" }, { value: "300+", label: "Enterprise Clients" }, { value: "12mo", label: "To £5M ARR" }],
    tags: ["AI / ML", "SaaS", "Python", "Analytics"],
    stack: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Kafka", "AWS SageMaker", "Redshift"],
  },
  cloudbase: {
    brand: "CloudBase", tagline: "Cloud Infrastructure Overhaul",
    year: "2023", category: "DevOps",
    description: "Full cloud migration from on-premise to AWS, with zero-downtime CI/CD pipelines, Kubernetes orchestration, and a 60% reduction in infrastructure cost.",
    challenge: "A series-B SaaS company was running on ageing bare-metal servers. Deployments took 4 hours, downtime was frequent, and hosting costs were ballooning.",
    solution: "We designed and executed a full AWS migration using ECS/Fargate, Terraform infrastructure-as-code, GitHub Actions CI/CD, and comprehensive monitoring with Datadog.",
    outcome: "Deployment time dropped from 4 hours to 8 minutes. Infrastructure costs reduced by 60%. The team now ships to production 15× per week with full confidence.",
    image: "https://www.charle.co.uk/assets/images/home/grid/grid8.webp",
    images: [
      "https://www.charle.co.uk/assets/images/home/grid/grid8.webp",
      "https://www.charle.co.uk/assets/images/home/grid/grid4.webp",
      "https://www.charle.co.uk/assets/images/home/grid/grid3.webp",
    ],
    stats: [{ value: "99.99%", label: "Uptime" }, { value: "−60%", label: "Infra Cost" }, { value: "8 min", label: "Deploy Time" }, { value: "15×/wk", label: "Deployments" }],
    tags: ["AWS", "DevOps", "Docker", "Terraform"],
    stack: ["AWS ECS", "Terraform", "Docker", "GitHub Actions", "Datadog", "Nginx", "Redis"],
  },
  venuepulse: {
    brand: "VenuePulse", tagline: "Event & Ticketing Platform",
    year: "2022", category: "Commerce",
    description: "Full-stack event management and ticketing platform with dynamic pricing, interactive seat maps, and Stripe-powered checkout for large-scale live events.",
    challenge: "Existing ticketing platforms took 30%+ in fees and offered no custom branding or analytics for event organisers.",
    solution: "We built a white-label ticketing platform with real-time seat maps, dynamic pricing algorithms, QR-code ticket distribution, and an organiser dashboard with live analytics.",
    outcome: "£1.2M+ in tickets sold in the first 6 months. GMV grew 88% year-on-year. The platform was acquired by a major events group 14 months after launch.",
    image: "https://www.charle.co.uk/articles/guide-to-ab-split-testing/images/thumb.jpg",
    images: [
      "https://www.charle.co.uk/articles/guide-to-ab-split-testing/images/thumb.jpg",
      "https://www.charle.co.uk/assets/images/home/grid/grid1.webp",
      "https://www.charle.co.uk/assets/images/home/grid/grid6.webp",
    ],
    stats: [{ value: "£1.2M+", label: "Tickets Sold" }, { value: "+88%", label: "GMV Growth" }, { value: "Acquired", label: "14mo Post-Launch" }, { value: "<3%", label: "Platform Fees" }],
    tags: ["Full Stack", "Payments", "React", "Node.js"],
    stack: ["React", "Node.js", "TypeScript", "Stripe", "PostgreSQL", "Redis", "AWS"],
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects[slug];
  if (!p) notFound();

  return (
    <main className="bg-black text-white min-h-screen pt-16">

      {/* ── Hero ── */}
      <section className="relative border-b border-white/[0.06] overflow-hidden">
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,106,247,0.06) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-16">
          <Link href="/work"
            className="inline-flex items-center gap-2 text-zinc-600 hover:text-white text-sm transition-colors mb-10">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            All Projects
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="text-[#7c6af7] text-xs font-bold uppercase tracking-[0.2em] block mb-4">
                {p.category} · {p.year}
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.95] text-white mb-4">
                {p.brand}
              </h1>
              <p className="text-zinc-400 text-lg md:text-xl font-light">{p.tagline}</p>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              {p.tags.map((t) => (
                <span key={t}
                  className="text-[10px] uppercase tracking-[0.14em] font-semibold
                             text-white/40 border border-white/[0.10] px-3 py-1.5 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Hero image ── */}
      <div className="w-full aspect-[21/8] overflow-hidden">
        <img src={p.image} alt={p.brand}
          className="w-full h-full object-cover opacity-70" />
      </div>

      {/* ── Stats ── */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {p.stats.map((s, i) => (
              <div key={i}
                className={`flex flex-col gap-2 py-10 px-6
                            ${i !== 0 ? "border-l border-white/[0.06]" : ""}
                            ${i < 2 ? "border-b border-white/[0.06] md:border-b-0" : ""}`}>
                <span className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                  {s.value}
                </span>
                <span className="text-zinc-600 text-xs uppercase tracking-wider font-medium">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <p className="text-zinc-600 text-xs uppercase tracking-[0.2em] font-bold mb-6">Project Overview</p>
            <p className="text-zinc-400 text-base leading-relaxed">{p.description}</p>
            <div className="mt-10">
              <p className="text-zinc-600 text-xs uppercase tracking-[0.2em] font-bold mb-4">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.07]
                               text-zinc-400 text-xs font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-12">
            {[
              { label: "The Challenge", text: p.challenge },
              { label: "Our Solution", text: p.solution },
              { label: "The Outcome", text: p.outcome },
            ].map(({ label, text }) => (
              <div key={label}>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">{label}</h2>
                <p className="text-zinc-400 text-base leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="border-t border-white/[0.06] pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {p.images.map((img, i) => (
              <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.07]">
                <img src={img} alt={`${p.brand} project screenshot ${i + 1}`} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nav between projects ── */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex justify-between items-center gap-4">
          <Link href="/work" className="btn btn-outline btn-md">
            ← All Projects
          </Link>
          <Link href="/contact" className="btn btn-accent btn-md">
            Start a Project →
          </Link>
        </div>
      </section>

    </main>
  );
}
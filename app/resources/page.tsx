import Link from "next/link";

const articles = [
  {
    slug: "nextjs-architecture-at-scale", category: "Engineering", featured: true,
    title: "Next.js Architecture at Scale: Lessons from 50 Production Deployments",
    excerpt: "After deploying Next.js apps for 50+ clients across e-commerce, SaaS, and enterprise, here are the patterns that consistently deliver performance at scale.",
    image: "https://www.charle.co.uk/assets/images/home/grid/grid1.webp",
    date: "May 2025", readTime: "8 min read",
  },
  {
    slug: "llm-production-pitfalls", category: "AI & ML", featured: false,
    title: "5 LLM Integration Pitfalls That Will Kill Your Production App",
    excerpt: "Token limits, hallucinations, latency spikes, cost overruns — and prompt injection. How to avoid every one of them.",
    image: "https://www.charle.co.uk/assets/images/home/grid/grid8.webp",
    date: "Apr 2025", readTime: "11 min read",
  },
  {
    slug: "aws-cost-optimisation-guide", category: "Cloud & DevOps", featured: false,
    title: "The Definitive AWS Cost Optimisation Guide for Growing Startups",
    excerpt: "We cut one client's AWS bill by 60% in three weeks. Here's the exact playbook.",
    image: "https://www.charle.co.uk/assets/images/home/grid/grid6.webp",
    date: "Mar 2025", readTime: "14 min read",
  },
  {
    slug: "react-native-vs-flutter-2025", category: "Mobile", featured: false,
    title: "React Native vs Flutter in 2025: An Honest Engineering Comparison",
    excerpt: "We've shipped apps in both. A framework-agnostic comparison of performance, DX, and long-term maintainability.",
    image: "https://www.charle.co.uk/assets/images/home/grid/grid4.webp",
    date: "Feb 2025", readTime: "9 min read",
  },
  {
    slug: "headless-commerce-architecture", category: "Commerce", featured: false,
    title: "Headless Commerce: When It's Worth It (and When It's Not)",
    excerpt: "Headless is not always the answer. We break down the real trade-offs so you can make the right call.",
    image: "https://www.charle.co.uk/articles/guide-to-ab-split-testing/images/thumb.jpg",
    date: "Jan 2025", readTime: "7 min read",
  },
  {
    slug: "hipaa-compliant-architecture", category: "Healthcare", featured: false,
    title: "Building HIPAA-Compliant Cloud Architecture on AWS: A Practical Guide",
    excerpt: "BAAs, encryption at rest, audit logging, VPC isolation — everything you need to pass a real compliance audit.",
    image: "https://www.charle.co.uk/assets/images/home/grid/grid3.webp",
    date: "Dec 2024", readTime: "16 min read",
  },
];

const categories = ["All", "Engineering", "AI & ML", "Cloud & DevOps", "Mobile", "Commerce", "Healthcare"];
const featured = articles.find(a => a.featured)!;
const rest     = articles.filter(a => !a.featured);

export default function ResourcesPage() {
  return (
    <main className="bg-[#05050a] text-white min-h-screen">

      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden border-b border-white/[0.06]">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,106,247,0.07) 0%, transparent 65%)" }} />
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-44 pb-20 md:pb-28 relative z-10">
          <div className="block space-y-6 max-w-3xl">
            <span className="section-label">Knowledge Base</span>
            <h1 style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
              className="font-extrabold tracking-tight leading-[0.92] text-white">
              Resources &{" "}
              <span className="bg-gradient-to-r from-[#7c6af7] to-[#5a78f0] bg-clip-text text-transparent">
                Insights.
              </span>
            </h1>
            <p className="text-zinc-500 text-base md:text-xl max-w-lg leading-relaxed font-light">
              Engineering guides, architecture deep-dives, and practical whitepapers from our team.
            </p>
          </div>
        </div>
      </section>

      {/* ── Category bar ── */}
      <div className="sticky top-16 z-30 bg-[#05050a]/95 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-2 overflow-x-auto py-4" style={{ scrollbarWidth: "none" }}>
            {categories.map((cat, i) => (
              <span key={cat}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.12em]
                            border whitespace-nowrap shrink-0 cursor-default
                            ${i === 0
                              ? "bg-[#7c6af7] border-[#7c6af7] text-white"
                              : "bg-transparent border-white/[0.10] text-zinc-500 hover:border-white/25 hover:text-white transition-all duration-200"
                            }`}>
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">

        {/* ── Featured ── */}
        <Link href={`/resources/${featured.slug}`}
          className="group grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8 rounded-2xl mb-14
                     border border-white/[0.07] hover:border-[#7c6af7]/35
                     bg-white/[0.02] hover:bg-white/[0.03] transition-all duration-300">
          <div className="aspect-[16/9] rounded-xl overflow-hidden">
            <img src={featured.image} alt={featured.title}
              className="w-full h-full object-cover opacity-75 group-hover:opacity-100
                         group-hover:scale-[1.02] transition-all duration-500" />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-[#7c6af7] text-xs font-bold uppercase tracking-[0.2em]">{featured.category}</span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#7c6af7]/15 border border-[#7c6af7]/30
                               text-[#a89df9] text-[10px] font-bold uppercase tracking-wider">
                Featured
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight
                           group-hover:text-[#a89df9] transition-colors duration-200">
              {featured.title}
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed font-light">{featured.excerpt}</p>
            <div className="flex items-center gap-3 text-zinc-600 text-xs pt-2 border-t border-white/[0.06]">
              <span>{featured.date}</span><span>·</span><span>{featured.readTime}</span>
            </div>
          </div>
        </Link>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map(a => (
            <Link key={a.slug} href={`/resources/${a.slug}`}
              className="group flex flex-col rounded-2xl border border-white/[0.07] overflow-hidden
                         hover:border-[#7c6af7]/30 bg-white/[0.02] hover:bg-white/[0.03]
                         transition-all duration-300">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={a.image} alt={a.title}
                  className="w-full h-full object-cover opacity-65 group-hover:opacity-95
                             group-hover:scale-[1.03] transition-all duration-500" />
              </div>
              <div className="flex flex-col gap-3 p-6 flex-1">
                <span className="text-[#7c6af7] text-[10px] font-bold uppercase tracking-[0.2em]">{a.category}</span>
                <h3 className="text-white font-bold text-base leading-snug flex-1
                               group-hover:text-[#a89df9] transition-colors duration-200">
                  {a.title}
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed font-light line-clamp-2">{a.excerpt}</p>
                <div className="flex items-center gap-3 text-zinc-700 text-xs pt-3 border-t border-white/[0.06]">
                  <span>{a.date}</span><span>·</span><span>{a.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Newsletter ── */}
      <section className="border-t border-white/[0.06] bg-[#07070e]">
        <div className="max-w-3xl mx-auto px-6 md:px-12 py-24 md:py-32 text-center flex flex-col items-center gap-6">
          <span className="section-label">Newsletter</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Engineering insights in your inbox.
          </h2>
          <p className="text-zinc-500 text-base font-light max-w-sm">
            One email per week. No fluff — just practical engineering content from the team.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
            <input type="email" placeholder="your@email.com"
              className="flex-1 bg-white/[0.05] border border-white/[0.10] rounded-full
                         px-5 py-3 text-sm text-white placeholder:text-zinc-600
                         focus:outline-none focus:border-[#7c6af7]/50" />
            <button className="btn btn-accent btn-md shrink-0">Subscribe</button>
          </div>
        </div>
      </section>
    </main>
  );
}

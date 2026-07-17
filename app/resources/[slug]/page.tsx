import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const articles: Record<string, {
  title: string; category: string; date: string; readTime: string;
  excerpt: string; image: string; body: string[];
}> = {
  "nextjs-architecture-at-scale": {
    title: "Next.js Architecture at Scale: Lessons from 50 Production Deployments",
    category: "Engineering", date: "May 2025", readTime: "8 min read",
    excerpt: "After deploying Next.js apps for 50+ clients across e-commerce, SaaS, and enterprise, here are the patterns that consistently deliver performance at scale.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&h=675&fit=crop",
    body: [
      "Deploying Next.js at scale is not about following the docs — it is about knowing which defaults to override and which patterns break under production load. After 50+ deployments, we have learned what works.",
      "The single biggest performance lever is proper cache strategy. Next.js gives you ISR, static generation, and server components — but using the wrong one for the wrong page can tank your Core Web Vitals. Static pages should be static, dynamic user-specific pages should be server-rendered, and shared-but-not-realtime pages should use ISR with a short revalidation window.",
      "Route groups and parallel routes let you avoid the layout re-render trap. Teams that don't use these end up with full-page flashes between navigations because their layout re-mounts unnecessarily. Structuring your app directory with route groups from day one saves painful refactors later.",
      "Database query patterns matter as much as rendering strategy. We consistently see N+1 query problems on detail pages. Using React's `cache()` function to deduplicate fetches across server components, combined with Prisma or Drizzle's include patterns, resolves this without a caching layer.",
      "Finally, bundle analysis is not optional. Every project gets `@next/bundle-analyzer` configured before the first PR is merged. Catching a 500kb third-party library import in code review is trivial; finding it in production after performance regressions is expensive.",
    ],
  },
  "llm-production-pitfalls": {
    title: "5 LLM Integration Pitfalls That Will Kill Your Production App",
    category: "AI & ML", date: "Apr 2025", readTime: "11 min read",
    excerpt: "Token limits, hallucinations, latency spikes, cost overruns — and prompt injection. How to avoid every one of them.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&h=675&fit=crop",
    body: [
      "Integrating an LLM into a production app is not hard. Integrating one that stays reliable, affordable, and secure under real traffic is. Here are the five mistakes we see in nearly every first-time LLM integration.",
      "Pitfall 1: No token budget. Every request without a max_tokens cap is a ticking cost bomb. A single runaway prompt can cost more than your entire daily budget. Always set explicit limits and model the worst-case token consumption before you ship.",
      "Pitfall 2: Trusting model output blindly. LLMs hallucinate. If your app takes actions based on model output — writes to a database, sends emails, calls APIs — you need output validation. JSON schema validation with Zod or a structured output library is non-negotiable.",
      "Pitfall 3: No retry strategy with backoff. Provider APIs go down and rate limit unexpectedly. A bare fetch call with no retry logic will surface as user-visible errors under any real load. Implement exponential backoff with jitter from day one.",
      "Pitfall 4: Prompt injection exposure. If you interpolate user input directly into prompts without sanitisation, you have a prompt injection vulnerability. Attackers can override your system prompt, leak context, or manipulate outputs. Separate system and user content and treat user input as untrusted.",
      "Pitfall 5: No cost monitoring. Add cost tracking from the start. Log token usage per request, alert when daily spend exceeds a threshold, and tie usage to specific features so you know which ones are expensive.",
    ],
  },
  "aws-cost-optimisation-guide": {
    title: "The Definitive AWS Cost Optimisation Guide for Growing Startups",
    category: "Cloud & DevOps", date: "Mar 2025", readTime: "14 min read",
    excerpt: "We cut one client's AWS bill by 60% in three weeks. Here's the exact playbook.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&h=675&fit=crop",
    body: [
      "AWS bills grow faster than engineering teams expect. The default settings, the convenience choices made at 2am, and the test resources nobody deleted — they compound. Here is the playbook we use to systematically cut costs without touching production stability.",
      "Step 1: Enable AWS Cost Explorer and set up billing alerts immediately. You cannot optimise what you cannot see. Tag every resource by environment, team, and feature from day one. Untagged resources are the black holes of cloud spending.",
      "Step 2: Right-size your EC2 and RDS instances. The single biggest quick win is almost always an oversized database. Use AWS Compute Optimizer and CloudWatch metrics to identify instances running at under 20% utilisation and downsize them. We typically save 30-40% on compute alone.",
      "Step 3: Move to Graviton. ARM-based Graviton instances offer 20-40% better price-performance than x86 equivalents for most workloads. The migration is usually a single Terraform change.",
      "Step 4: Audit your data transfer costs. S3 to CloudFront is free. EC2 to S3 in the same region is free. Cross-region and internet egress is expensive. Rerouting traffic through CloudFront and keeping data in the same region eliminates most surprise bills.",
      "Step 5: Use Savings Plans for predictable workloads. Committing to Compute Savings Plans for your baseline load saves 30-40% with no operational risk. Leave spot instances for batch workloads and dev environments.",
    ],
  },
  "react-native-vs-flutter-2025": {
    title: "React Native vs Flutter in 2025: An Honest Engineering Comparison",
    category: "Mobile", date: "Feb 2025", readTime: "9 min read",
    excerpt: "We've shipped apps in both. A framework-agnostic comparison of performance, DX, and long-term maintainability.",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=1200&h=675&fit=crop",
    body: [
      "We have shipped production apps in both React Native and Flutter. Here is an honest comparison — not a marketing piece for either framework.",
      "Performance: Flutter wins on raw frame performance due to its custom rendering engine (Impeller). React Native's new architecture (bridgeless, JSI, Fabric) has closed the gap significantly, but for animation-heavy or graphics-intensive apps, Flutter still edges ahead.",
      "Developer experience: React Native wins for JavaScript/TypeScript teams. Reusing your web team's skills, tooling, and libraries is a genuine productivity multiplier. Flutter's Dart is a clean language, but it is another language to hire for, train on, and maintain.",
      "Ecosystem: React Native's npm ecosystem is enormous but inconsistent in quality. Flutter's pub.dev ecosystem is smaller but generally higher quality because Google's curation bar is higher. For most business apps, both have everything you need.",
      "Long-term maintainability: Both are risky bets in different ways. React Native's dependency on Meta's priorities has caused breaking changes before. Flutter depends on Google — who has killed products. Pick based on your team's existing skills and the specific app requirements.",
      "Our recommendation: If your team knows JavaScript, ship React Native. If you're starting fresh with no web overlap, Flutter's consistency across platforms is compelling. Neither is wrong — the wrong choice is picking based on hype.",
    ],
  },
  "headless-commerce-architecture": {
    title: "Headless Commerce: When It's Worth It (and When It's Not)",
    category: "Commerce", date: "Jan 2025", readTime: "7 min read",
    excerpt: "Headless is not always the answer. We break down the real trade-offs so you can make the right call.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&h=675&fit=crop",
    body: [
      "Headless commerce is pitched as the answer to everything. It's not. It's a powerful architectural pattern with real trade-offs that teams consistently underestimate.",
      "When headless makes sense: You need complete control over frontend performance. You are building a branded experience that Shopify's theme engine cannot deliver. You have a complex multi-channel requirement — same product catalog, multiple storefronts. You have the engineering capacity to maintain a custom frontend.",
      "When headless doesn't make sense: Your team is small and moving fast. The incremental performance gain is not worth the engineering cost. You can get 90% of what you need from a well-optimised Shopify theme. You don't have backend engineers to maintain the API layer.",
      "The hidden costs of headless: A headless stack means you own the checkout experience (security implications), the search experience, the cart state management, and the API integration layer. Every feature Shopify provides for free becomes something you build and maintain.",
      "A middle ground worth considering: Shopify's Hydrogen framework gives you most of the performance benefits of headless with much less custom work. For most growing e-commerce brands, it is the right compromise.",
      "Our rule: If the business case for headless is 'performance' and your current store scores above 70 on PageSpeed, optimise your existing stack first. You will get 80% of the benefit with 20% of the cost.",
    ],
  },
  "hipaa-compliant-architecture": {
    title: "Building HIPAA-Compliant Cloud Architecture on AWS: A Practical Guide",
    category: "Healthcare", date: "Dec 2024", readTime: "16 min read",
    excerpt: "BAAs, encryption at rest, audit logging, VPC isolation — everything you need to pass a real compliance audit.",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&h=675&fit=crop",
    body: [
      "HIPAA compliance on AWS is achievable, but it requires intentional architecture decisions from day one. Retrofitting compliance onto an existing system is expensive and error-prone. Here is the practical guide.",
      "Step 1: Sign a BAA with AWS. AWS offers a Business Associate Agreement that covers a specific set of HIPAA-eligible services. Any service storing or processing PHI must be in scope. Services not covered by the BAA cannot touch PHI — even for logging.",
      "Step 2: Encrypt everything. All PHI must be encrypted at rest and in transit. Use AWS KMS with CMKs (Customer Managed Keys) for RDS, S3, and EBS volumes. TLS 1.2+ is required for all API communication. Enable RDS encryption at creation — you cannot enable it later without a full migration.",
      "Step 3: VPC isolation. All PHI workloads must run in private subnets with no direct internet access. Use NAT gateways for outbound traffic and VPC endpoints for AWS service access (S3, DynamoDB, SQS) to avoid traffic traversing the public internet.",
      "Step 4: Audit logging. CloudTrail must be enabled in all regions and logs must be immutable (S3 Object Lock, WORM mode). CloudWatch Logs with a minimum 6-year retention for audit records. Every access to PHI must be logged with who accessed what and when.",
      "Step 5: Access controls. Implement least-privilege IAM policies. Use AWS Cognito with MFA for all user-facing authentication. Implement break-glass access procedures for emergency access to production systems. Review IAM permissions quarterly.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return {};
  return {
    title: `${article.title} | Software Elites`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  return (
    <main className="bg-[#05050a] text-white min-h-screen">

      {/* ── Hero ── */}
      <section className="relative border-b border-white/[0.06] overflow-hidden">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,106,247,0.07) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto px-6 md:px-12 pt-28 md:pt-36 pb-16 relative z-10">
          <Link href="/resources"
            className="inline-flex items-center gap-2 text-zinc-600 hover:text-white text-sm transition-colors mb-10">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            All Resources
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[#7c6af7] text-xs font-bold uppercase tracking-[0.2em]">
              {article.category}
            </span>
            <span className="text-zinc-700">·</span>
            <span className="text-zinc-600 text-xs">{article.date}</span>
            <span className="text-zinc-700">·</span>
            <span className="text-zinc-600 text-xs">{article.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6">
            {article.title}
          </h1>
          <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed max-w-2xl">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* ── Cover image ── */}
      <div className="w-full aspect-[21/8] overflow-hidden border-b border-white/[0.06]">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* ── Body ── */}
      <section className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col gap-7">
        {article.body.map((para, i) => (
          <p key={i} className="text-zinc-400 text-base md:text-lg leading-relaxed font-light">
            {para}
          </p>
        ))}
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-white/[0.06] bg-[#07070e]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
              Ready to work with us?
            </h2>
            <p className="text-zinc-500 text-sm font-light">
              Let&apos;s build something extraordinary together.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/contact" className="btn btn-accent btn-md">Get in Touch</Link>
            <Link href="/resources" className="btn btn-outline btn-md">More Articles</Link>
          </div>
        </div>
      </section>

    </main>
  );
}

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
  "website-design": {
    title: "Website Design",
    tagline: "Pixel-perfect websites that turn visitors into customers.",
    desc: "We craft visually stunning, conversion-focused websites tailored to your brand. Every layout, colour, and interaction is designed with purpose — to reflect your identity, engage your audience, and drive measurable business results.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&h=600&fit=crop",
    tags: ["Figma", "Next.js", "Tailwind CSS", "Responsive Design", "CRO"],
    bullets: [
      { heading: "Custom Visual Design", text: "Bespoke layouts crafted to your brand guidelines — no templates, no shortcuts." },
      { heading: "Conversion Rate Optimisation", text: "Strategic placement of CTAs, trust signals, and user flows designed to maximise leads and sales." },
      { heading: "Responsive & Mobile-First", text: "Every design looks and performs flawlessly across all screen sizes and devices." },
      { heading: "Brand Consistency", text: "We ensure your website perfectly reflects your brand identity, from typography to colour palette." },
    ],
  },
  "ecommerce": {
    title: "E-Commerce Solutions",
    tagline: "Online stores engineered to sell.",
    desc: "From Shopify storefronts to fully custom headless commerce platforms, we build e-commerce solutions that are fast, secure, and built to convert. We handle everything from product catalogue setup to payment integration and post-launch optimisation.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&h=600&fit=crop",
    tags: ["Shopify", "Next.js", "Stripe", "WooCommerce", "GraphQL", "Headless CMS"],
    bullets: [
      { heading: "Shopify & Headless Commerce", text: "Custom Shopify themes and fully headless Next.js storefronts with blazing-fast page loads and superior Core Web Vitals." },
      { heading: "Payment Integration", text: "Stripe, PayPal, and local payment methods integrated securely with full PCI-DSS compliance." },
      { heading: "Inventory & Order Management", text: "Custom admin dashboards and integrations with fulfilment platforms, ERPs, and logistics providers." },
      { heading: "Performance Optimisation", text: "Image optimisation, lazy loading, and CDN configuration to ensure your store loads instantly everywhere." },
    ],
  },
  "wordpress": {
    title: "WordPress Development",
    tagline: "Custom WordPress builds that are powerful and manageable.",
    desc: "We build custom WordPress websites that go far beyond themes — bespoke Gutenberg blocks, custom post types, ACF-powered content models, and performance-optimised architecture. The result is a site your team can manage without touching code.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&h=600&fit=crop",
    tags: ["WordPress", "PHP", "ACF Pro", "Gutenberg", "WooCommerce", "REST API"],
    bullets: [
      { heading: "Custom Theme Development", text: "Built from scratch to your design — no bloated page builders, no plugin dependency nightmares." },
      { heading: "Gutenberg Block Library", text: "Reusable custom blocks that give your content team full flexibility without breaking the design." },
      { heading: "WooCommerce Integration", text: "Full e-commerce functionality with custom product types, shipping zones, and payment gateways." },
      { heading: "Performance & Security", text: "Caching, CDN setup, and security hardening so your WordPress site is fast and bulletproof." },
    ],
  },
  "video-animation": {
    title: "Video & Animation",
    tagline: "Motion content that tells your story with cinematic quality.",
    desc: "From brand explainer videos to social media reels and UI micro-animations, we produce motion content that stops the scroll and drives engagement. Our team combines creative storytelling with technical precision to deliver content that performs.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&h=600&fit=crop",
    tags: ["After Effects", "Premiere Pro", "Lottie", "GSAP", "3D Animation", "Motion Graphics"],
    bullets: [
      { heading: "Brand Explainer Videos", text: "Concise, compelling video content that communicates your value proposition in under 90 seconds." },
      { heading: "Social Media Content", text: "Short-form reels, stories, and animated posts optimised for each platform's format and algorithm." },
      { heading: "UI Micro-Animations", text: "Lottie and GSAP animations integrated directly into your web product for a polished, premium feel." },
      { heading: "Motion Graphics", text: "Animated logos, transitions, and visual effects that elevate your brand across all touchpoints." },
    ],
  },
  "logo-branding": {
    title: "Logo & Branding",
    tagline: "Distinctive brand identities that tell your story at a glance.",
    desc: "A great brand is more than a logo — it is a complete visual language. We develop brand identities that are distinctive, scalable, and consistent across every touchpoint. From the initial concept through to brand guidelines, we deliver everything you need to launch with confidence.",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1200&h=600&fit=crop",
    tags: ["Figma", "Illustrator", "Photoshop", "Brand Strategy", "Typography", "Colour Systems"],
    bullets: [
      { heading: "Logo Design", text: "Primary, secondary, and icon variants of your logo — delivered in all formats for print and digital." },
      { heading: "Brand Identity System", text: "Typography, colour palette, iconography, and imagery direction that creates a cohesive visual language." },
      { heading: "Brand Guidelines", text: "A comprehensive brand manual so every future asset stays on-brand — internally and with any agency." },
      { heading: "Brand Collateral", text: "Business cards, letterheads, presentation decks, and social media templates aligned to your new identity." },
    ],
  },
  "domain-hosting": {
    title: "Domain & Hosting",
    tagline: "Fast, secure hosting with reliable domain management.",
    desc: "We handle domain registration, DNS management, and web hosting so you can focus on your business. Our managed hosting solutions are built on enterprise-grade infrastructure with 99.9% uptime guarantees, daily backups, and proactive security monitoring.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&h=600&fit=crop",
    tags: ["AWS", "Cloudflare", "cPanel", "SSL/TLS", "DNS Management", "CDN"],
    bullets: [
      { heading: "Domain Registration & Management", text: "Register and manage your domain with full DNS control, including subdomains and email routing." },
      { heading: "Managed Cloud Hosting", text: "AWS and Cloudflare-backed hosting with auto-scaling, global CDN, and 99.9% uptime SLA." },
      { heading: "SSL Certificates", text: "Free SSL certificates with auto-renewal for all hosted domains — HTTPS everywhere, always." },
      { heading: "Daily Backups & Monitoring", text: "Automated daily backups with one-click restore and 24/7 uptime monitoring with instant alerts." },
    ],
  },
  "website-maintenance": {
    title: "Website Maintenance",
    tagline: "24/7 monitoring, updates, and security for peace of mind.",
    desc: "Your website needs ongoing attention to stay fast, secure, and up-to-date. Our maintenance plans cover everything from plugin and CMS updates to security patching, performance monitoring, and content changes — so you never have to worry about your website again.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&h=600&fit=crop",
    tags: ["WordPress", "Next.js", "Security Monitoring", "Performance Audits", "Uptime Monitoring"],
    bullets: [
      { heading: "Software & Plugin Updates", text: "Regular CMS, plugin, and dependency updates to keep your site secure and compatible." },
      { heading: "Security Monitoring", text: "24/7 malware scanning, firewall management, and instant alerts for any suspicious activity." },
      { heading: "Performance Optimisation", text: "Monthly performance audits with actionable fixes to maintain fast load times as your content grows." },
      { heading: "Content Updates", text: "Dedicated hours each month for content changes, image updates, and minor layout adjustments." },
    ],
  },
  "seo": {
    title: "SEO Optimization",
    tagline: "Data-backed strategies that earn top rankings and sustainable traffic.",
    desc: "We build SEO strategies that drive real business results — not vanity metrics. From technical audits and on-page optimisation to content strategy and link building, we help you rank for the keywords your customers are actually searching.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&h=600&fit=crop",
    tags: ["Technical SEO", "On-Page SEO", "Link Building", "Content Strategy", "Google Analytics", "Search Console"],
    bullets: [
      { heading: "Technical SEO Audit", text: "Full crawl analysis covering Core Web Vitals, crawlability, indexation, structured data, and site architecture." },
      { heading: "On-Page Optimisation", text: "Keyword research, title tags, meta descriptions, header structure, and internal linking — all optimised for target terms." },
      { heading: "Content Strategy", text: "Topic cluster planning and content calendars that build topical authority and capture long-tail traffic." },
      { heading: "Link Building", text: "White-hat outreach and digital PR to earn high-quality backlinks that move rankings." },
    ],
  },
  "social-media": {
    title: "Social Media Marketing",
    tagline: "Targeted campaigns that build communities and drive real conversions.",
    desc: "We manage social media strategies that go beyond likes and followers — building engaged audiences and attributable revenue. From organic content creation to paid social campaigns across Meta, TikTok, and LinkedIn, we handle the full funnel.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&h=600&fit=crop",
    tags: ["Meta Ads", "TikTok Ads", "LinkedIn Ads", "Content Creation", "Community Management", "Analytics"],
    bullets: [
      { heading: "Organic Content Strategy", text: "Platform-native content calendars with consistent posting schedules, creative direction, and copywriting." },
      { heading: "Paid Social Campaigns", text: "Full-funnel Meta and TikTok ad campaigns with creative testing, audience segmentation, and ROAS tracking." },
      { heading: "Community Management", text: "Daily monitoring and engagement across all platforms to build relationships and protect your brand reputation." },
      { heading: "Analytics & Reporting", text: "Monthly reports covering reach, engagement, conversion, and attributed revenue with clear ROI metrics." },
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

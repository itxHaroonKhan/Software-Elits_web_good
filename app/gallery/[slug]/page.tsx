import Link from "next/link";
import { notFound } from "next/navigation";
import { allGalleryItems } from "@/data/gallery";

const clientWork: Record<string, { name: string; url: string; image?: string }[]> = {
  "branding-identity": [
    { name: "BBC Ice Cream",     url: "https://www.bbcicecream.com/" },
    { name: "Muc-Off",           url: "https://muc-off.com/" },
    { name: "War Paint",         url: "https://warpaintformen.com/" },
    { name: "Sunna Musk",        url: "https://sunnamusk.com/" },
    { name: "Joelandson Fabrics",url: "https://www.joelandsonfabrics.com/" },
    { name: "111Skin",           url: "https://111skin.com/" },
  ],
  "e-commerce": [
    { name: "Candy Kittens",     url: "https://candykittens.co.uk/",       image: "/cart_1.png" },
    { name: "Just Wears",        url: "https://just-wears.com/",           image: "/cart_2.png" },
    { name: "Hippeas",           url: "https://hippeas.com/",              image: "/cart_3.png" },
    { name: "Rude Health",       url: "https://rudehealth.com/",           image: "/cart_4.png" },
    { name: "Islands Chocolate", url: "https://www.islandschocolate.com/", image: "/cart_5.png" },
    { name: "Bio & Me",          url: "https://bioandme.co.uk/",           image: "/car_6.png" },
  ],
  "web-design": [
    { name: "Gray Nicolls",      url: "https://www.gray-nicolls.co.uk/" },
    { name: "Cambridge Satchel", url: "https://us.cambridgesatchel.com/" },
    { name: "Gilbert Rugby",     url: "https://www.gilbertrugby.com/" },
    { name: "Harbour Lifestyle", url: "https://www.harbourlifestyle.co.uk/" },
    { name: "Au Depart",         url: "https://www.audepart.com/" },
    { name: "De Skelly",         url: "https://deskelly.ie/" },
  ],
  "branding": [
    { name: "BBC Ice Cream",     url: "https://www.bbcicecream.com/" },
    { name: "Muc-Off",           url: "https://muc-off.com/" },
    { name: "War Paint",         url: "https://warpaintformen.com/" },
    { name: "Sunna Musk",        url: "https://sunnamusk.com/" },
    { name: "Joelandson Fabrics",url: "https://www.joelandsonfabrics.com/" },
    { name: "111Skin",           url: "https://111skin.com/" },
  ],
  "mobile-app": [
    { name: "Candy Kittens",     url: "https://candykittens.co.uk/" },
    { name: "Hippeas",           url: "https://hippeas.com/" },
    { name: "Muc-Off",           url: "https://muc-off.com/" },
    { name: "Just Wears",        url: "https://just-wears.com/" },
    { name: "War Paint",         url: "https://warpaintformen.com/" },
    { name: "111Skin",           url: "https://111skin.com/" },
  ],
  "seo": [
    { name: "Gray Nicolls",      url: "https://www.gray-nicolls.co.uk/" },
    { name: "Rude Health",       url: "https://rudehealth.com/" },
    { name: "Bio & Me",          url: "https://bioandme.co.uk/" },
    { name: "Hippeas",           url: "https://hippeas.com/" },
    { name: "Harbour Lifestyle", url: "https://www.harbourlifestyle.co.uk/" },
    { name: "De Skelly",         url: "https://deskelly.ie/" },
  ],
  "social-media": [
    { name: "Candy Kittens",     url: "https://candykittens.co.uk/" },
    { name: "BBC Ice Cream",     url: "https://www.bbcicecream.com/" },
    { name: "Sunna Musk",        url: "https://sunnamusk.com/" },
    { name: "War Paint",         url: "https://warpaintformen.com/" },
    { name: "111Skin",           url: "https://111skin.com/" },
    { name: "Hippeas",           url: "https://hippeas.com/" },
  ],
  "ui-ux-design": [
    { name: "Cambridge Satchel", url: "https://us.cambridgesatchel.com/" },
    { name: "Au Depart",         url: "https://www.audepart.com/" },
    { name: "Royal Museums",     url: "https://www.rmg.co.uk/" },
    { name: "Harbour Lifestyle", url: "https://www.harbourlifestyle.co.uk/" },
    { name: "De Skelly",         url: "https://deskelly.ie/" },
    { name: "Joelandson Fabrics",url: "https://www.joelandsonfabrics.com/" },
  ],
  "development": [
    { name: "Royal Museums",     url: "https://www.rmg.co.uk/" },
    { name: "Gilbert Rugby",     url: "https://www.gilbertrugby.com/" },
    { name: "Muc-Off",           url: "https://muc-off.com/" },
    { name: "Gray Nicolls",      url: "https://www.gray-nicolls.co.uk/" },
    { name: "De Skelly",         url: "https://deskelly.ie/" },
    { name: "Joelandson Fabrics",url: "https://www.joelandsonfabrics.com/" },
  ],
  "fintech": [
    { name: "Royal Museums",     url: "https://www.rmg.co.uk/" },
    { name: "Rude Health",       url: "https://rudehealth.com/" },
    { name: "Bio & Me",          url: "https://bioandme.co.uk/" },
    { name: "Islands Chocolate", url: "https://www.islandschocolate.com/" },
    { name: "Harbour Lifestyle", url: "https://www.harbourlifestyle.co.uk/" },
    { name: "Au Depart",         url: "https://www.audepart.com/" },
  ],
  "healthcare": [
    { name: "Bio & Me",          url: "https://bioandme.co.uk/" },
    { name: "Rude Health",       url: "https://rudehealth.com/" },
    { name: "Islands Chocolate", url: "https://www.islandschocolate.com/" },
    { name: "Hippeas",           url: "https://hippeas.com/" },
    { name: "111Skin",           url: "https://111skin.com/" },
    { name: "Sunna Musk",        url: "https://sunnamusk.com/" },
  ],
  "real-estate": [
    { name: "Harbour Lifestyle", url: "https://www.harbourlifestyle.co.uk/" },
    { name: "Royal Museums",     url: "https://www.rmg.co.uk/" },
    { name: "Gray Nicolls",      url: "https://www.gray-nicolls.co.uk/" },
    { name: "Au Depart",         url: "https://www.audepart.com/" },
    { name: "De Skelly",         url: "https://deskelly.ie/" },
    { name: "Cambridge Satchel", url: "https://us.cambridgesatchel.com/" },
  ],
  "education": [
    { name: "Royal Museums",     url: "https://www.rmg.co.uk/" },
    { name: "Bio & Me",          url: "https://bioandme.co.uk/" },
    { name: "Rude Health",       url: "https://rudehealth.com/" },
    { name: "Joelandson Fabrics",url: "https://www.joelandsonfabrics.com/" },
    { name: "De Skelly",         url: "https://deskelly.ie/" },
    { name: "Hippeas",           url: "https://hippeas.com/" },
  ],
  "animation": [
    { name: "BBC Ice Cream",     url: "https://www.bbcicecream.com/" },
    { name: "Candy Kittens",     url: "https://candykittens.co.uk/" },
    { name: "Au Depart",         url: "https://www.audepart.com/" },
    { name: "Sunna Musk",        url: "https://sunnamusk.com/" },
    { name: "War Paint",         url: "https://warpaintformen.com/" },
    { name: "111Skin",           url: "https://111skin.com/" },
  ],
  "wordpress": [
    { name: "Gray Nicolls",      url: "https://www.gray-nicolls.co.uk/" },
    { name: "Gilbert Rugby",     url: "https://www.gilbertrugby.com/" },
    { name: "Royal Museums",     url: "https://www.rmg.co.uk/" },
    { name: "Harbour Lifestyle", url: "https://www.harbourlifestyle.co.uk/" },
    { name: "Joelandson Fabrics",url: "https://www.joelandsonfabrics.com/" },
    { name: "De Skelly",         url: "https://deskelly.ie/" },
  ],
};

const galleryPages: Record<string, {
  title: string;
  tagline: string;
  desc: string;
  image: string;
  tags: string[];
  stats: { value: string; label: string }[];
  bullets: { heading: string; text: string }[];
}> = {
  "branding-identity": {
    title: "Branding & Identity",
    tagline: "A brand that means something — and gets remembered.",
    desc: "From naming and strategy through to full visual identity systems, we help businesses define who they are and express it consistently across every touchpoint. Whether you're launching a new brand or refreshing an existing one, we make it count.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&h=600&fit=crop",
    tags: ["Brand Strategy", "Logo Design", "Design Systems", "Typography", "Figma"],
    stats: [{ value: "200+", label: "Brands Launched" }, { value: "4.9★", label: "Client Rating" }, { value: "100%", label: "On-Brand Delivery" }, { value: "2wk", label: "Identity Sprint" }],
    bullets: [
      { heading: "Brand Strategy", text: "Positioning, messaging frameworks, and audience research to anchor every creative decision in commercial logic." },
      { heading: "Visual Identity", text: "Logo, colour palette, typography, and iconography — delivered as a complete, scalable design system." },
      { heading: "Brand Guidelines", text: "Comprehensive style guides your team and agencies can follow to stay consistent at any scale." },
      { heading: "Rebranding", text: "Sensitive, strategic refreshes that evolve your brand without alienating your existing audience." },
    ],
  },
  "e-commerce": {
    title: "E-Commerce Development",
    tagline: "High-converting online stores built for scale.",
    desc: "We build custom e-commerce platforms and headless storefronts that load fast, convert visitors, and handle peak traffic without a sweat. From Shopify to fully bespoke solutions — we deliver stores that grow with your business.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&h=600&fit=crop",
    tags: ["Shopify", "Next.js", "Stripe", "GraphQL", "Headless CMS"],
    stats: [{ value: "+55%", label: "Avg Conversion Lift" }, { value: "0.8s", label: "Load Time" }, { value: "10×", label: "Peak Traffic Ready" }, { value: "99.9%", label: "Uptime" }],
    bullets: [
      { heading: "Headless Storefronts", text: "Blazing-fast Next.js frontends connected to your commerce engine of choice — Shopify, WooCommerce, or custom." },
      { heading: "Custom Checkout Flows", text: "Reduce drop-off with streamlined, branded checkout experiences and Stripe or payment gateway integrations." },
      { heading: "Inventory & Order Management", text: "Real-time stock sync, order tracking dashboards, and warehouse integrations built for operational scale." },
      { heading: "Analytics & CRO", text: "Data-driven insights and A/B testing setups that continuously improve your store's conversion rate." },
    ],
  },
  "web-design": {
    title: "Web Design",
    tagline: "Websites that make a powerful first impression.",
    desc: "We craft visually stunning, strategically designed websites that tell your brand story and drive action. Every pixel is intentional — our designs are beautiful, accessible, and built to perform in search.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&h=600&fit=crop",
    tags: ["Figma", "Next.js", "Tailwind CSS", "Framer Motion", "GSAP"],
    stats: [{ value: "95+", label: "Core Web Vitals" }, { value: "3×", label: "Engagement Increase" }, { value: "WCAG", label: "AA Compliant" }, { value: "48hr", label: "Design Turnaround" }],
    bullets: [
      { heading: "Brand-Led Design", text: "Every design decision flows from your brand identity — ensuring consistency from homepage to checkout." },
      { heading: "Responsive & Mobile-First", text: "Pixel-perfect layouts across all screen sizes, optimised for mobile performance from the ground up." },
      { heading: "Motion & Interactions", text: "Purposeful animations and micro-interactions that guide users and elevate the overall experience." },
      { heading: "SEO-Optimised Structure", text: "Semantic HTML, fast load times, and structured data — so your beautiful site also ranks." },
    ],
  },
  "branding": {
    title: "Branding & Identity",
    tagline: "A brand that means something — and gets remembered.",
    desc: "From naming and strategy through to full visual identity systems, we help businesses define who they are and express it consistently across every touchpoint. Whether you're launching a new brand or refreshing an existing one, we make it count.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&h=600&fit=crop",
    tags: ["Brand Strategy", "Logo Design", "Design Systems", "Typography", "Figma"],
    stats: [{ value: "200+", label: "Brands Launched" }, { value: "4.9★", label: "Client Rating" }, { value: "100%", label: "On-Brand Delivery" }, { value: "2wk", label: "Identity Sprint" }],
    bullets: [
      { heading: "Brand Strategy", text: "Positioning, messaging frameworks, and audience research to anchor every creative decision in commercial logic." },
      { heading: "Visual Identity", text: "Logo, colour palette, typography, and iconography — delivered as a complete, scalable design system." },
      { heading: "Brand Guidelines", text: "Comprehensive style guides your team and agencies can follow to stay consistent at any scale." },
      { heading: "Rebranding", text: "Sensitive, strategic refreshes that evolve your brand without alienating your existing audience." },
    ],
  },
  "mobile-app": {
    title: "Mobile App Development",
    tagline: "Native-quality apps for iOS & Android.",
    desc: "We build high-performance mobile apps using React Native — one codebase, two native apps. From consumer products to enterprise tools, our mobile team delivers apps that users love and that your ops team can actually manage.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&h=600&fit=crop",
    tags: ["React Native", "Expo", "TypeScript", "iOS", "Android", "Firebase"],
    stats: [{ value: "50K+", label: "App Downloads" }, { value: "4.8★", label: "App Store Rating" }, { value: "1 codebase", label: "iOS + Android" }, { value: "<3s", label: "Cold Start Time" }],
    bullets: [
      { heading: "React Native Development", text: "Cross-platform apps with near-native performance, full access to device APIs, and a single shared codebase." },
      { heading: "App Store Submission", text: "We handle code signing, App Store Connect, and Google Play submission — including ASO to maximise discoverability." },
      { heading: "Push Notifications & Offline", text: "Real-time push alerts, offline-first data sync, and background processing that keeps your app responsive." },
      { heading: "Ongoing Maintenance", text: "OS update compatibility, performance monitoring, and feature iteration post-launch." },
    ],
  },
  "seo": {
    title: "SEO & Organic Growth",
    tagline: "Rankings that compound and traffic that converts.",
    desc: "We combine technical SEO, content strategy, and link building to grow your organic presence systematically. No black-hat shortcuts — just sustainable, measurable growth built on a foundation of great content and clean code.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&h=600&fit=crop",
    tags: ["Technical SEO", "Content Strategy", "Core Web Vitals", "Schema Markup", "Analytics"],
    stats: [{ value: "+320%", label: "Avg Traffic Growth" }, { value: "Top 3", label: "Target Keyword Rankings" }, { value: "6mo", label: "To Meaningful Results" }, { value: "100", label: "PageSpeed Score" }],
    bullets: [
      { heading: "Technical SEO Audit", text: "Crawl analysis, Core Web Vitals, structured data, and site architecture review — fixing what holds your rankings back." },
      { heading: "Content Strategy", text: "Keyword research, topic clusters, and a content calendar that attracts and converts your ideal customers." },
      { heading: "Link Building", text: "High-authority backlinks through editorial outreach, digital PR, and strategic partnerships." },
      { heading: "SEO Reporting", text: "Monthly dashboards showing rank movements, traffic attribution, and ROI tied directly to business outcomes." },
    ],
  },
  "social-media": {
    title: "Social Media Marketing",
    tagline: "Content that builds community and drives pipeline.",
    desc: "We manage social media strategy, content creation, and paid campaigns for ambitious brands. From organic community building to performance-driven paid social, we make your brand impossible to ignore.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&h=600&fit=crop",
    tags: ["Meta Ads", "LinkedIn", "TikTok", "Content Creation", "Analytics"],
    stats: [{ value: "+180%", label: "Avg Follower Growth" }, { value: "4.2×", label: "ROAS on Paid Social" }, { value: "30+", label: "Posts Per Month" }, { value: "24hr", label: "Response SLA" }],
    bullets: [
      { heading: "Social Strategy", text: "Platform selection, audience persona mapping, and a content strategy aligned to your brand and commercial goals." },
      { heading: "Content Production", text: "Scroll-stopping graphics, short-form video, and copy — produced at volume without sacrificing quality." },
      { heading: "Paid Social Campaigns", text: "Meta, LinkedIn, and TikTok ad campaigns with rigorous audience targeting, creative testing, and ROAS reporting." },
      { heading: "Community Management", text: "Daily monitoring, comment responses, and DM handling to build genuine relationships with your audience." },
    ],
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    tagline: "Design that converts, delights, and differentiates.",
    desc: "Great software starts with great design. Our designers work alongside engineers from day one — producing design systems, prototypes, and finished specs that eliminate ambiguity and accelerate delivery.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&h=600&fit=crop",
    tags: ["Figma", "User Research", "Prototyping", "Design Systems", "WCAG 2.1"],
    stats: [{ value: "+40%", label: "Task Completion Rate" }, { value: "95+", label: "Usability Score" }, { value: "WCAG AA", label: "Accessible" }, { value: "2wk", label: "Prototype Sprint" }],
    bullets: [
      { heading: "Product Discovery", text: "User interviews, competitive analysis, and jobs-to-be-done workshops to ensure we're solving the right problem." },
      { heading: "Wireframing & Prototyping", text: "From low-fidelity concepts to high-fidelity Figma prototypes — all validated with real users before build." },
      { heading: "Design Systems", text: "Scalable, documented component libraries that keep your product consistent and your team moving fast." },
      { heading: "Accessibility", text: "WCAG 2.1 AA compliance baked in from the start — not bolted on as an afterthought." },
    ],
  },
  "development": {
    title: "Software Development",
    tagline: "Production-grade code, delivered on time.",
    desc: "From greenfield builds to complex legacy migrations, our engineering teams deliver clean, maintainable code that stands up to real-world load. We don't cut corners — we build software that you'll be proud to own in three years.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&h=600&fit=crop",
    tags: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    stats: [{ value: "99.9%", label: "Uptime SLA" }, { value: "<50ms", label: "API Response" }, { value: "0", label: "Critical Bugs at Launch" }, { value: "15×/wk", label: "Deploy Cadence" }],
    bullets: [
      { heading: "Full-Stack Web Apps", text: "End-to-end development with modern frontend frameworks and robust, tested backend APIs." },
      { heading: "API Development", text: "RESTful and GraphQL APIs designed for performance, security, and developer ergonomics." },
      { heading: "Code Reviews & QA", text: "Structured review processes, automated testing, and QA gates that catch issues before they reach production." },
      { heading: "Technical Debt Reduction", text: "Incremental refactoring strategies that improve your codebase health without derailing active product work." },
    ],
  },
  "fintech": {
    title: "FinTech Solutions",
    tagline: "Financial software built for compliance and scale.",
    desc: "We build trading platforms, payment systems, and financial dashboards for fintech companies and financial institutions. Security, compliance, and real-time performance aren't optional — they're the baseline.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&h=600&fit=crop",
    tags: ["React", "Node.js", "WebSockets", "PostgreSQL", "PCI-DSS", "FCA"],
    stats: [{ value: "2M+", label: "Events/Second" }, { value: "<50ms", label: "Data Latency" }, { value: "PCI-DSS", label: "Compliant" }, { value: "£2.4M+", label: "Cost Saved" }],
    bullets: [
      { heading: "Trading & Analytics Dashboards", text: "Real-time data visualisation for live market feeds, portfolio tracking, and risk analytics." },
      { heading: "Payment Integrations", text: "Stripe, open banking APIs, and custom payment gateway integrations with full reconciliation." },
      { heading: "Compliance & Reporting", text: "Automated regulatory reporting, audit trails, and role-based access controls for FCA and GDPR compliance." },
      { heading: "Fraud Detection", text: "ML-powered anomaly detection and rule engines that flag suspicious transactions in real time." },
    ],
  },
  "healthcare": {
    title: "Healthcare Technology",
    tagline: "Digital health products built for safety and trust.",
    desc: "We develop patient-facing apps, clinical dashboards, and health data platforms with a deep respect for the regulatory environment. HIPAA compliance, data encryption, and clinical workflow design are in our DNA.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&h=600&fit=crop",
    tags: ["React Native", "Node.js", "HL7 FHIR", "HIPAA", "AWS", "Encryption"],
    stats: [{ value: "50K+", label: "Active Patients" }, { value: "HIPAA", label: "Compliant" }, { value: "−38%", label: "Response Time" }, { value: "99.99%", label: "Uptime" }],
    bullets: [
      { heading: "Patient-Facing Apps", text: "Mobile and web apps for appointment booking, prescription management, and remote patient monitoring." },
      { heading: "Clinical Dashboards", text: "Real-time vitals, alerts, and care coordination tools built for clinician workflows." },
      { heading: "EHR Integrations", text: "HL7 FHIR-compliant integrations with Epic, Cerner, and other major EHR systems." },
      { heading: "Data Security", text: "End-to-end encryption, access audit logs, and HIPAA-compliant infrastructure on AWS." },
    ],
  },
  "real-estate": {
    title: "Real Estate Platforms",
    tagline: "Property technology that closes more deals.",
    desc: "We build property search portals, CRM systems, and investment platforms for real estate companies. From interactive map-based search to automated valuation tools, we bring modern software to property.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&h=600&fit=crop",
    tags: ["Next.js", "MapBox", "PostgreSQL", "Node.js", "Stripe", "Zillow API"],
    stats: [{ value: "+62%", label: "Lead Conversion" }, { value: "10K+", label: "Listings Managed" }, { value: "3×", label: "Search Speed" }, { value: "£1M+", label: "Deals Facilitated" }],
    bullets: [
      { heading: "Property Search Portals", text: "Map-based search with advanced filters, saved searches, and instant alerts for new listings." },
      { heading: "Valuation Tools", text: "Automated valuation models using comparable sales data and ML for instant property estimates." },
      { heading: "Agent CRM", text: "Lead management, pipeline tracking, and automated follow-up tools designed for property agents." },
      { heading: "Investment Analytics", text: "ROI calculators, rental yield dashboards, and market trend visualisation for property investors." },
    ],
  },
  "education": {
    title: "EdTech & Education Platforms",
    tagline: "Learning experiences that actually work.",
    desc: "We build LMS platforms, interactive learning tools, and student management systems for education companies and institutions. Engaging UI, progress tracking, and adaptive content delivery — all in one platform.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&h=600&fit=crop",
    tags: ["React", "Node.js", "Video Streaming", "WebRTC", "PostgreSQL", "Stripe"],
    stats: [{ value: "200K+", label: "Learners Served" }, { value: "+45%", label: "Course Completion" }, { value: "4.9★", label: "Learner Rating" }, { value: "SCORM", label: "Compatible" }],
    bullets: [
      { heading: "Learning Management Systems", text: "Custom LMS platforms with course creation, progress tracking, certificates, and cohort management." },
      { heading: "Live & On-Demand Video", text: "WebRTC-powered live sessions and HLS video delivery for on-demand course content at scale." },
      { heading: "Assessments & Quizzes", text: "Adaptive quizzes, timed assessments, and plagiarism detection integrated into the learning flow." },
      { heading: "Monetisation", text: "Subscription plans, one-time purchases, and enterprise licensing — all handled with Stripe." },
    ],
  },
  "animation": {
    title: "Motion & Animation",
    tagline: "Movement that makes your brand unforgettable.",
    desc: "From scroll-triggered website animations to explainer videos and logo reveals, we bring brands to life through purposeful motion. Our animation work is always tied to user experience goals — never decoration for its own sake.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&h=600&fit=crop",
    tags: ["GSAP", "Framer Motion", "After Effects", "Lottie", "Three.js", "WebGL"],
    stats: [{ value: "+73%", label: "Time on Page" }, { value: "60fps", label: "Smooth Animations" }, { value: "Lottie", label: "Lightweight Export" }, { value: "3D", label: "WebGL Ready" }],
    bullets: [
      { heading: "Web Animations", text: "GSAP and Framer Motion micro-interactions, scroll-triggered sequences, and page transitions that delight." },
      { heading: "Lottie & SVG Animation", text: "Lightweight, scalable animations exported from After Effects for seamless web and app integration." },
      { heading: "3D & WebGL", text: "Three.js-powered 3D scenes and interactive product visualisations that run in the browser." },
      { heading: "Explainer Videos", text: "Motion graphic explainers that communicate complex products clearly and keep viewers engaged." },
    ],
  },
  "wordpress": {
    title: "WordPress Development",
    tagline: "Fast, secure WordPress sites your team can manage.",
    desc: "We build bespoke WordPress themes, headless WordPress setups, and high-performance WooCommerce stores. We deliver sites that your marketing team can actually update — without breaking anything.",
    image: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?q=80&w=1200&h=600&fit=crop",
    tags: ["WordPress", "WooCommerce", "ACF", "Gutenberg", "PHP", "Headless WP"],
    stats: [{ value: "90+", label: "PageSpeed Score" }, { value: "2s", label: "Load Time" }, { value: "CMS", label: "Easy to Edit" }, { value: "99.9%", label: "Uptime" }],
    bullets: [
      { heading: "Custom Theme Development", text: "Pixel-perfect WordPress themes built from scratch — no bloated page builders or unnecessary plugins." },
      { heading: "Headless WordPress", text: "WordPress as a CMS with a Next.js frontend — best of both worlds: easy editing and blazing performance." },
      { heading: "WooCommerce Stores", text: "Custom WooCommerce setups with tailored product pages, checkout flows, and payment integrations." },
      { heading: "Performance & Security", text: "Caching, CDN setup, security hardening, and ongoing maintenance to keep your site fast and safe." },
    ],
  },
};

export function generateStaticParams() {
  return allGalleryItems.map((item) => ({ slug: item.slug }));
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = galleryPages[slug];
  const item = allGalleryItems.find((i) => i.slug === slug);
  if (!page || !item) notFound();

  const sites = clientWork[slug] ?? [];

  return (
    <main className="bg-black text-white min-h-screen pt-16">

      {/* Hero */}
      <section className="relative border-b border-white/[0.06] overflow-hidden">
        <div
          className="absolute -top-20 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,106,247,0.07) 0%, transparent 70%)" }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-16 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-600 hover:text-white text-sm transition-colors mb-10"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Home
          </Link>
          <span className="text-[#7c6af7] text-xs font-bold uppercase tracking-[0.2em] block mb-5">
            What We Do
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[0.95] text-white mb-5 max-w-3xl">
            {page.title}
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl font-light italic max-w-2xl">
            {page.tagline}
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <div className="w-full aspect-[21/8] max-md:aspect-[16/7] max-sm:aspect-[2/1] overflow-hidden border-b border-white/[0.06]">
        <img
          src={page.image}
          alt={page.title}
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* Stats */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {page.stats.map((s, i) => (
              <div
                key={i}
                className={`flex flex-col gap-2 py-10 px-6
                  ${i !== 0 ? "border-l border-white/[0.06]" : ""}
                  ${i < 2 ? "border-b border-white/[0.06] md:border-b-0" : ""}`}
              >
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

      {/* Client Work Images Grid */}
      {slug === "e-commerce" && sites.length > 0 && (
        <section className="border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 md:py-20">
            <p className="text-zinc-600 text-xs uppercase tracking-[0.2em] font-bold mb-8">
              Our Work
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {sites.map((site) => (
                <a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/[0.06] hover:border-white/20 transition-all duration-300 block"
                >
                  <img
                    src={site.image ?? `https://image.thum.io/get/width/600/crop/450/noanimate/${site.url}`}
                    alt={site.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-sm font-semibold">{site.name}</p>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 10L10 2M10 2H4.5M10 2v5.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Overview + Bullets */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-14 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            <div>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light mb-10">
                {page.desc}
              </p>
              <div>
                <p className="text-zinc-600 text-xs uppercase tracking-[0.2em] font-bold mb-4">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {page.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.07] text-zinc-400 text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {page.bullets.map((b) => (
                <div key={b.heading} className="flex gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7c6af7] mt-2.5 shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1">{b.heading}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{b.text}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Ready to get started?
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
            Tell us about your project and we&apos;ll come back with a clear plan and a fixed price.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn btn-accent btn-lg">
              Start a Project →
            </Link>
            <Link href="/work" className="btn btn-outline btn-lg">
              See Our Work
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

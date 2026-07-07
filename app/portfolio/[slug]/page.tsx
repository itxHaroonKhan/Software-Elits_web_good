import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import PortfolioGallery from "@/components/PortfolioGallery";

const projects: Record<string, {
  title: string; category: string; year: string;
  description: string; brief: string; approach: string; result: string;
  image: string; images: string[];
  tags: string[]; deliverables: string[];
  client: string; duration: string;
}> = {
  "luxestore-ecommerce": {
    title: "LuxeStore E-Commerce", category: "Web Design", year: "2024",
    client: "LuxeStore Inc.", duration: "8 weeks",
    description: "A premium e-commerce experience for a luxury fashion retailer, designed to convey exclusivity while maximising conversion across desktop and mobile.",
    brief: "The client wanted to move away from a generic Shopify theme that felt 'cheap.' They needed a custom storefront that matched their high-end brand positioning and drove more sales.",
    approach: "We led with editorial-style imagery and generous whitespace to signal luxury. Micro-animations on hover, a frictionless checkout flow, and a curated product discovery experience were central to the design.",
    result: "The redesign led to a 48% increase in average session duration and a 34% uplift in conversion rate within the first 30 days of launch.",
    image: "/portfolio/portfolio_web1.webp",
    images: ["/portfolio/portfolio_web1.webp", "/portfolio/portfolio_web19.webp", "/portfolio/portfolio_web20.webp"],
    tags: ["Web Design", "E-Commerce", "UI/UX", "Conversion"],
    deliverables: ["Custom Storefront Design", "Mobile-First UI", "Product Page Templates", "Checkout Flow", "Brand Guidelines Integration"],
  },
  "fintech-dashboard": {
    title: "FinTech Dashboard UI", category: "Web Design", year: "2024",
    client: "ClearCapital", duration: "10 weeks",
    description: "A data-dense trading dashboard designed for professional traders — balancing complexity with clarity to enable faster decision-making under pressure.",
    brief: "The client's existing dashboard was cluttered and caused user errors. They needed a redesign that presented complex financial data clearly without losing depth.",
    approach: "We applied a dark-first design system with high-contrast data visualisation. Information hierarchy, keyboard shortcuts, and a modular widget layout were core design decisions.",
    result: "User error rates dropped by 29% post-launch. Trader satisfaction scores improved from 5.8 to 8.6 out of 10 in internal surveys.",
    image: "/portfolio/portfolio_web2.webp",
    images: ["/portfolio/portfolio_web2.webp", "/portfolio/portfolio_web21.webp", "/portfolio/portfolio_web22.webp"],
    tags: ["Web Design", "FinTech", "Dashboard", "Data Visualisation"],
    deliverables: ["Dashboard UI Design", "Component Library", "Dark Mode System", "Chart & Graph Templates", "Responsive Layouts"],
  },
  "saas-landing": {
    title: "SaaS Landing Page", category: "Web Design", year: "2024",
    client: "Promptly AI", duration: "4 weeks",
    description: "A high-converting landing page for an AI productivity SaaS — built to communicate complex value quickly and move visitors to trial sign-up.",
    brief: "The startup had strong product-market fit but poor top-of-funnel conversion. The existing landing page was text-heavy and failed to demonstrate the product's value.",
    approach: "We restructured the page around social proof and product demos. Interactive feature previews, animated statistics, and a sticky CTA kept users engaged throughout the scroll.",
    result: "Trial sign-ups increased by 72% within the first month. Bounce rate dropped from 67% to 41%.",
    image: "/portfolio/portfolio_web3.webp",
    images: ["/portfolio/portfolio_web3.webp", "/portfolio/portfolio_web23.webp", "/portfolio/portfolio_web24.webp"],
    tags: ["Web Design", "SaaS", "Landing Page", "Conversion Optimisation"],
    deliverables: ["Landing Page Design", "Hero Section", "Feature Showcase", "Pricing Table", "Mobile Responsive UI"],
  },
  "real-estate-portal": {
    title: "Real Estate Portal", category: "Web Design", year: "2023",
    client: "EliteHomes Realty", duration: "12 weeks",
    description: "A full-featured property search and listing portal for a premium real estate agency, with advanced filters and immersive property presentation.",
    brief: "The agency was losing leads to competitors with better online portals. They needed a platform that presented luxury properties with the prestige they deserved.",
    approach: "We designed an immersive, photography-first layout with intelligent search filters. Virtual tour integration, neighbourhood insight cards, and saved search features created a compelling user journey.",
    result: "Online enquiries increased by 91% in the quarter post-launch. Average time on property listings improved by 2.3 minutes.",
    image: "/portfolio/portfolio_web4.webp",
    images: ["/portfolio/portfolio_web4.webp", "/portfolio/portfolio_web27.webp", "/portfolio/portfolio_web28.webp"],
    tags: ["Web Design", "Real Estate", "Portal", "Search UX"],
    deliverables: ["Property Listing Templates", "Search & Filter UI", "Map Integration Design", "Mobile App Screens", "Agent Dashboard"],
  },
  "education-platform": {
    title: "Education Platform", category: "Web Design", year: "2023",
    client: "LearnPath", duration: "14 weeks",
    description: "A modern e-learning platform designed to increase course completion rates through engaging UI and clear learner progress tracking.",
    brief: "The platform had high enrolment but poor completion. Students were disengaging mid-course due to a confusing interface and lack of motivational feedback.",
    approach: "We redesigned the learner journey with gamification elements, clear progress indicators, and a cohesive visual language that rewarded milestones. Instructor dashboards were simplified for content management.",
    result: "Course completion rate increased from 22% to 61%. Learner satisfaction scores rose to 4.7 out of 5.",
    image: "/portfolio/portfolio_web5.webp",
    images: ["/portfolio/portfolio_web5.webp", "/portfolio/portfolio_web29.webp", "/portfolio/portfolio_web30.webp"],
    tags: ["Web Design", "EdTech", "UX", "Gamification"],
    deliverables: ["Course Player UI", "Learner Dashboard", "Progress Tracking System", "Instructor Portal", "Mobile Design"],
  },
  "corporate-agency": {
    title: "Corporate Agency Site", category: "Web Design", year: "2023",
    client: "Meridian Consulting", duration: "6 weeks",
    description: "A polished corporate website for a management consultancy — projecting authority, expertise, and trust to senior decision-makers.",
    brief: "The firm was pitching Fortune 500 clients but their website looked outdated. They needed a site that matched their level of client.",
    approach: "We took a restrained, editorial approach — strong typography, structured layouts, and case study-led content. The site was designed to communicate credibility at a glance.",
    result: "The site contributed to a measurable increase in inbound RFPs from enterprise clients. The firm reported closing two major retainers directly attributed to their web presence.",
    image: "/portfolio/portfolio_web6.webp",
    images: ["/portfolio/portfolio_web6.webp", "/portfolio/portfolio_web31.webp", "/portfolio/portfolio_web32.webp"],
    tags: ["Web Design", "Corporate", "B2B", "Brand Positioning"],
    deliverables: ["Homepage Design", "Services Pages", "Case Study Layout", "Team Pages", "Brand Refresh"],
  },
  "healthcare-mobile": {
    title: "Healthcare Mobile App", category: "Mobile Apps", year: "2024",
    client: "CareSync Health", duration: "16 weeks",
    description: "A patient-facing mobile app for a telehealth provider — enabling appointment booking, secure messaging, prescription tracking, and health record access.",
    brief: "Patients were frustrated by a fragmented experience across phone calls, emails, and paper forms. The provider needed a unified app that improved patient satisfaction and reduced admin load.",
    approach: "Accessibility and clarity were paramount. We designed a simple, icon-driven interface with large tap targets, clear appointment flows, and secure in-app messaging that worked for all age groups.",
    result: "Patient app adoption reached 78% within 3 months. Admin call volume dropped by 44%. App Store rating hit 4.8 stars.",
    image: "/portfolio/portfolio_web7.webp",
    images: ["/portfolio/portfolio_web7.webp", "/portfolio/portfolio_web33.webp", "/portfolio/portfolio_web34.webp"],
    tags: ["Mobile App", "Healthcare", "iOS", "Android"],
    deliverables: ["iOS & Android UI", "Onboarding Flow", "Appointment System", "Secure Messaging UI", "Accessibility Audit"],
  },
  "restaurant-ordering": {
    title: "Restaurant Ordering App", category: "Mobile Apps", year: "2024",
    client: "Ember Dining Group", duration: "10 weeks",
    description: "A branded mobile ordering app for a multi-location restaurant group — enabling in-venue ordering, loyalty rewards, and scheduled pickup.",
    brief: "Long queues and inconsistent service were hurting the brand. The client wanted a mobile ordering experience that reduced wait times and drove repeat visits.",
    approach: "We designed an app-first ordering experience with immersive food photography, one-tap reorder for regulars, and an integrated loyalty tier system. The UI was warm and appetising to match the brand.",
    result: "Average order value increased by 18%. Repeat purchase rate improved by 36%. In-venue wait times reduced by an average of 7 minutes.",
    image: "/portfolio/portfolio_web8.webp",
    images: ["/portfolio/portfolio_web8.webp", "/portfolio/portfolio_web35.webp", "/portfolio/portfolio_web36.webp"],
    tags: ["Mobile App", "Food & Beverage", "Loyalty", "UX"],
    deliverables: ["iOS & Android UI", "Menu & Ordering Flow", "Loyalty Programme UI", "Pickup Scheduling", "Push Notification Design"],
  },
  "fitness-tracker": {
    title: "Fitness Tracker App", category: "Mobile Apps", year: "2023",
    client: "PeakForm", duration: "12 weeks",
    description: "A fitness and wellness tracking app with personalised workout plans, progress analytics, and a social challenge layer to drive engagement.",
    brief: "The market is saturated with fitness apps. The client needed something that stood out through strong design and a community-first approach that made users stick around.",
    approach: "We built the experience around identity — helping users see themselves as athletes. Progress visualisations, achievement badges, and friend challenges created emotional investment beyond just tracking reps.",
    result: "30-day retention reached 58% — well above the industry average of 25%. The app was featured in the App Store's 'Apps We Love' within its first month.",
    image: "/portfolio/portfolio_web9.webp",
    images: ["/portfolio/portfolio_web9.webp", "/portfolio/portfolio_web37.webp", "/portfolio/portfolio_web38.webp"],
    tags: ["Mobile App", "Fitness", "Gamification", "Social"],
    deliverables: ["iOS & Android UI", "Workout Tracking Screens", "Analytics Dashboard", "Social & Challenge UI", "Design System"],
  },
  "travel-booking": {
    title: "Travel & Booking App", category: "Mobile Apps", year: "2023",
    client: "Horizon Travel", duration: "14 weeks",
    description: "An end-to-end travel planning and booking app — from destination discovery through to flights, hotels, and itinerary management.",
    brief: "Existing travel apps felt transactional. The client wanted something that inspired wanderlust from the first screen while making booking feel effortless.",
    approach: "We led with destination-first discovery using rich imagery and curated collections. The booking flow was compressed to the fewest possible steps, with smart defaults based on user history.",
    result: "Booking completion rate improved by 41%. Average booking value increased by $220. User reviews consistently cited ease of use and beautiful design.",
    image: "/portfolio/portfolio_web10.webp",
    images: ["/portfolio/portfolio_web10.webp", "/portfolio/portfolio_web39.webp", "/portfolio/portfolio_web40.webp"],
    tags: ["Mobile App", "Travel", "Booking UX", "iOS/Android"],
    deliverables: ["iOS & Android UI", "Discovery & Search", "Booking Flow", "Itinerary Planner", "Map Integration"],
  },
  "luxury-brand": {
    title: "Luxury Brand Identity", category: "Branding", year: "2024",
    client: "Maison Velle", duration: "6 weeks",
    description: "A complete brand identity for a new luxury skincare house — from naming strategy through to packaging, typography, and digital presence.",
    brief: "A new entrant in the premium skincare market needed a brand that could compete with established luxury houses from day one, despite having no existing equity.",
    approach: "We crafted an identity rooted in French heritage and minimalist elegance. A bespoke logotype, a refined colour palette of ivory and deep forest, and a type system that echoed couture fashion houses.",
    result: "The brand launched to immediate press coverage. D2C revenue hit $200K in the first 60 days, driven largely by brand-led social sharing.",
    image: "/portfolio/portfolio_web11.webp",
    images: ["/portfolio/portfolio_web11.webp", "/portfolio/portfolio_web41.webp", "/portfolio/portfolio_web42.webp"],
    tags: ["Branding", "Luxury", "Packaging", "Identity"],
    deliverables: ["Logo & Logotype", "Brand Guidelines", "Packaging Design", "Typography System", "Brand Photography Direction"],
  },
  "tech-startup-branding": {
    title: "Tech Startup Branding", category: "Branding", year: "2024",
    client: "Forge AI", duration: "5 weeks",
    description: "Brand identity for a B2B AI infrastructure startup — built to signal technical credibility to enterprise buyers while remaining approachable.",
    brief: "The founders had a powerful product but a generic logo made from a free tool. They were pitching to Fortune 500 CTOs and needed a brand that matched their ambition.",
    approach: "We designed a mark built around the concept of precision and construction — a geometric symbol that referenced both circuitry and architecture. A dark, high-contrast colour system projected confidence.",
    result: "The brand was central to a successful $4.2M seed raise. Multiple investors cited the company's 'mature brand presence' as a factor in their conviction.",
    image: "/portfolio/portfolio_web12.webp",
    images: ["/portfolio/portfolio_web12.webp", "/portfolio/portfolio_web43.webp", "/portfolio/portfolio_web45.webp"],
    tags: ["Branding", "Tech", "Startup", "B2B"],
    deliverables: ["Logo System", "Brand Identity", "Pitch Deck Template", "Icon Library", "Brand Guidelines"],
  },
  "food-beverage-identity": {
    title: "Food & Beverage Identity", category: "Branding", year: "2023",
    client: "Grove Cold Press", duration: "7 weeks",
    description: "Brand identity and packaging for an artisan cold-press juice company — designed to stand out in a crowded refrigerator aisle and win shelf space at premium retailers.",
    brief: "The product was exceptional but the branding looked homemade. Buyers from Whole Foods had passed due to packaging concerns.",
    approach: "We built the identity around the concept of 'living colour' — every SKU had its own bold, fruit-forward palette and hand-drawn illustration. Typography was clean to create contrast.",
    result: "After the rebrand, the product was listed by two major premium retailers within 8 weeks. Sales increased 220% year-on-year in the quarter following the rebrand.",
    image: "/portfolio/portfolio_web13.webp",
    images: ["/portfolio/portfolio_web13.webp", "/portfolio/portfolio_web46.webp", "/portfolio/portfolio_web47.webp"],
    tags: ["Branding", "Packaging", "FMCG", "Retail"],
    deliverables: ["Brand Identity", "Packaging Design (6 SKUs)", "Label Artwork", "Brand Guidelines", "Social Media Templates"],
  },
  "fashion-brand-package": {
    title: "Fashion Brand Package", category: "Branding", year: "2023",
    client: "Studio Noir", duration: "8 weeks",
    description: "Complete brand package for an emerging fashion label — covering identity, lookbook design, hangtag, and packaging for their debut collection launch.",
    brief: "The designer had a strong aesthetic but no coherent brand. With a debut collection launching at a major fashion week, she needed everything designed in under 8 weeks.",
    approach: "We built the brand around contradiction — raw and refined, masculine and feminine. A deconstructed sans-serif wordmark, deep monochromatic palette, and editorial-grade layout system.",
    result: "The brand debuted to strong press coverage. Three major stockists placed orders within a week of the show. The brand has since grown to 12 stockists globally.",
    image: "/portfolio/portfolio_web14.webp",
    images: ["/portfolio/portfolio_web14.webp", "/portfolio/portfolio_web48.webp", "/portfolio/portfolio_web49.webp"],
    tags: ["Branding", "Fashion", "Packaging", "Editorial"],
    deliverables: ["Logo & Wordmark", "Lookbook Design", "Hangtag & Labels", "Shopping Bag Design", "Brand Guidelines"],
  },
  "product-animation": {
    title: "Product Animation Reel", category: "Video & Animation", year: "2024",
    client: "Novos Technology", duration: "4 weeks",
    description: "A 60-second hero product animation for a consumer electronics brand — showcasing the device's premium build quality for launch day advertising.",
    brief: "The client was launching a new smart speaker and needed a product animation that could run as a hero on their homepage, paid social, and at trade events.",
    approach: "We led with material storytelling — foregrounding the aluminium chassis, fabric grille, and precise tolerances. Slow reveals, depth of field, and a restrained sound design created cinematic impact.",
    result: "The hero video became the brand's highest-performing piece of content ever. Product page conversion increased by 27% attributed to the video placement.",
    image: "/portfolio/portfolio_web15.webp",
    images: ["/portfolio/portfolio_web15.webp", "/portfolio/portfolio_web50.webp", "/portfolio/portfolio_web51.webp"],
    tags: ["Video", "3D Animation", "Product", "Advertising"],
    deliverables: ["60s Hero Video", "15s Social Cutdown", "Still Frames", "Loop Version", "Multi-format Exports"],
  },
  "corporate-explainer": {
    title: "Corporate Explainer Video", category: "Video & Animation", year: "2024",
    client: "Veridian Group", duration: "5 weeks",
    description: "A 90-second animated explainer that distils a complex B2B software proposition into a clear, compelling narrative for sales and investor audiences.",
    brief: "Sales reps were struggling to explain the product in meetings. The client needed a video that did the explaining for them — clearly, in under 2 minutes.",
    approach: "We started with script and story before a frame was drawn. A clean motion graphic style with clear metaphors translated the product's technical complexity into visible, tangible value.",
    result: "Sales cycle length reduced by an average of 2 weeks. The video was embedded in investor materials that contributed to a $3M Series A close.",
    image: "/portfolio/portfolio_web16.webp",
    images: ["/portfolio/portfolio_web16.webp", "/portfolio/portfolio_web52.webp", "/portfolio/portfolio_web53.webp"],
    tags: ["Video", "Motion Graphics", "B2B", "Explainer"],
    deliverables: ["90s Explainer Video", "Script & Storyboard", "Voiceover Direction", "Animated Illustrations", "Multi-language Versions"],
  },
  "social-media-campaign": {
    title: "Social Media Ad Campaign", category: "Video & Animation", year: "2023",
    client: "Glow Cosmetics", duration: "3 weeks",
    description: "A suite of 12 short-form video ads designed for TikTok, Instagram Reels, and YouTube Shorts — driving awareness for a new cosmetics product launch.",
    brief: "The brand had a limited paid social budget and needed to extract maximum impact. Each creative had to stop the scroll, communicate the product, and drive clicks.",
    approach: "We shot and edited 12 distinct concepts in 3 weeks using a fast-turn production approach. Hook-first writing, strong colour pops, and product close-ups were central to every cut.",
    result: "Average CPM was 40% below industry benchmark. Total campaign reach exceeded 2.4 million impressions. ROAS of 4.8× across the campaign period.",
    image: "/portfolio/portfolio_web17.webp",
    images: ["/portfolio/portfolio_web17.webp", "/portfolio/portfolio_web54.webp", "/portfolio/portfolio_web55.webp"],
    tags: ["Video", "Social Media", "Advertising", "Short-Form"],
    deliverables: ["12 × Video Ads", "9:16 & 16:9 Formats", "Thumbnail Designs", "Ad Copy Variants", "Campaign Report"],
  },
  "2d-brand-animation": {
    title: "2D Brand Animation", category: "Video & Animation", year: "2023",
    client: "Ember Financial", duration: "6 weeks",
    description: "A suite of 2D animated brand assets — including a logo animation, onboarding sequence, and social motion templates — for a fintech brand refresh.",
    brief: "The client had completed a brand redesign but their digital touchpoints were still static. They needed motion to bring the new identity to life consistently across channels.",
    approach: "We built a motion language around the brand's core values: clarity, warmth, and precision. Easing curves, timing, and colour transitions were all codified into a reusable motion system.",
    result: "Brand consistency scores improved significantly in post-launch research. The animated onboarding sequence increased activation rates by 33% compared to the previous static version.",
    image: "/portfolio/portfolio_web18.webp",
    images: ["/portfolio/portfolio_web18.webp", "/portfolio/portfolio_web56.webp", "/portfolio/portfolio_web57.webp"],
    tags: ["Animation", "Motion Design", "Branding", "2D"],
    deliverables: ["Logo Animation", "Onboarding Sequence", "Social Motion Templates", "Motion Guidelines", "After Effects Files"],
  },
  // ── New Web Design ──────────────────────────────────────────────────────
  "crypto-trading-platform": {
    title: "Crypto Trading Platform", category: "Web Design", year: "2024",
    client: "BlockEdge Capital", duration: "12 weeks",
    description: "A real-time cryptocurrency trading platform with advanced charting, portfolio tracking, and instant order execution for both retail and professional traders.",
    brief: "The client needed a platform that could compete with established exchanges on UX while offering a cleaner, more modern interface to attract younger traders.",
    approach: "We designed around speed and clarity — real-time data feeds, colour-coded market indicators, and a customisable widget layout gave users full control without overwhelming them.",
    result: "Platform onboarding time dropped by 40%. Daily active users grew 3× in the first quarter post-launch.",
    image: "/portfolio/portfolio_web19.webp",
    images: ["/portfolio/portfolio_web19.webp", "/portfolio/portfolio_web20.webp", "/portfolio/portfolio_web21.webp"],
    tags: ["Web Design", "FinTech", "Crypto", "Dashboard"],
    deliverables: ["Trading Dashboard UI", "Chart & Order UI", "Portfolio Tracker", "Mobile Responsive Design", "Design System"],
  },
  "medical-dashboard": {
    title: "Medical Dashboard", category: "Web Design", year: "2024",
    client: "MedCore Systems", duration: "10 weeks",
    description: "A comprehensive hospital management dashboard for doctors and administrators — covering patient records, appointment scheduling, and real-time analytics.",
    brief: "The hospital's legacy system was slow and unintuitive. Staff were losing time navigating a cluttered interface that hadn't been updated in a decade.",
    approach: "We simplified navigation into role-based views. Doctors see patient data; admins see operational metrics. Clean cards, clear hierarchies, and colour-coded alerts improved efficiency.",
    result: "Staff task completion time reduced by 35%. Administration errors dropped significantly after rollout.",
    image: "/portfolio/portfolio_web20.webp",
    images: ["/portfolio/portfolio_web20.webp", "/portfolio/portfolio_web22.webp", "/portfolio/portfolio_web23.webp"],
    tags: ["Web Design", "Healthcare", "Dashboard", "UX"],
    deliverables: ["Admin Dashboard", "Patient Record UI", "Appointment System", "Analytics Views", "Role-based Layouts"],
  },
  "hotel-booking-website": {
    title: "Hotel Booking Website", category: "Web Design", year: "2024",
    client: "Azure Resorts Group", duration: "8 weeks",
    description: "A premium hotel booking experience for a luxury resort chain — designed to drive direct bookings and reduce reliance on third-party platforms.",
    brief: "The client was paying high commissions to OTAs. They needed a direct booking site compelling enough to pull guests away from Booking.com and Expedia.",
    approach: "We led with immersive photography, virtual room tours, and a frictionless 3-step booking flow. Exclusive member rates and loyalty perks were prominently surfaced.",
    result: "Direct bookings increased by 58% in 6 months. OTA commission costs reduced by $180K annually.",
    image: "/portfolio/portfolio_web21.webp",
    images: ["/portfolio/portfolio_web21.webp", "/portfolio/portfolio_web27.webp", "/portfolio/portfolio_web28.webp"],
    tags: ["Web Design", "Hospitality", "E-Commerce", "Booking UX"],
    deliverables: ["Homepage Design", "Room Listing Pages", "Booking Flow", "Loyalty Programme UI", "Mobile Design"],
  },
  "event-management-portal": {
    title: "Event Management Portal", category: "Web Design", year: "2023",
    client: "Evara Events", duration: "9 weeks",
    description: "An end-to-end event management portal for a corporate events agency — covering client briefs, vendor coordination, and live event dashboards.",
    brief: "Managing events across email threads and spreadsheets was causing miscommunication. The agency needed a centralised platform their whole team and clients could use.",
    approach: "We built a project-style portal with event timelines, task assignments, budget tracking, and a client-facing portal for approvals and updates.",
    result: "Internal coordination time reduced by 50%. Client satisfaction scores reached 4.9 out of 5 post-launch.",
    image: "/portfolio/portfolio_web22.webp",
    images: ["/portfolio/portfolio_web22.webp", "/portfolio/portfolio_web29.webp", "/portfolio/portfolio_web30.webp"],
    tags: ["Web Design", "SaaS", "Events", "Project Management"],
    deliverables: ["Portal Dashboard", "Event Timeline UI", "Client-Facing Portal", "Budget Tracker", "Mobile Design"],
  },
  "legal-services-website": {
    title: "Legal Services Website", category: "Web Design", year: "2023",
    client: "Harrington & Cole LLP", duration: "6 weeks",
    description: "A professional website for a top-tier law firm — designed to project authority, highlight expertise, and convert high-value corporate clients.",
    brief: "The firm's existing site was templated and generic. It didn't reflect their standing in the market or communicate the quality of their work.",
    approach: "Strong editorial typography, structured practice area pages, and partner profiles built a sense of gravitas. Case studies and client testimonials provided the proof.",
    result: "Inbound enquiry volume increased by 44%. The firm landed two major retainers attributed directly to the improved web presence.",
    image: "/portfolio/portfolio_web23.webp",
    images: ["/portfolio/portfolio_web23.webp", "/portfolio/portfolio_web31.webp", "/portfolio/portfolio_web32.webp"],
    tags: ["Web Design", "Legal", "B2B", "Corporate"],
    deliverables: ["Homepage & Inner Pages", "Practice Area Templates", "Partner Profiles", "Case Study Layout", "Contact & Enquiry System"],
  },
  "architecture-studio-site": {
    title: "Architecture Studio Site", category: "Web Design", year: "2023",
    client: "Forma Studio", duration: "5 weeks",
    description: "A portfolio website for a high-end architecture and interior design studio — built to showcase projects with cinematic visual impact.",
    brief: "The studio's work was stunning but their website was a generic WordPress theme. They were losing new business to firms with better web presence.",
    approach: "Full-bleed project photography, minimal navigation, and a project-led layout put the work front and centre. Slow-scroll animations added a sense of craftsmanship.",
    result: "Average session duration increased to 4.2 minutes. The site was featured in an industry publication within its first month.",
    image: "/portfolio/portfolio_web24.webp",
    images: ["/portfolio/portfolio_web24.webp", "/portfolio/portfolio_web33.webp", "/portfolio/portfolio_web34.webp"],
    tags: ["Web Design", "Architecture", "Portfolio", "Creative"],
    deliverables: ["Homepage Design", "Project Showcase Pages", "About & Studio Page", "Contact Page", "Animation & Interactions"],
  },
  "e-wallet-app-web": {
    title: "E-Wallet Web App", category: "Web Design", year: "2024",
    client: "PaySwift Inc.", duration: "11 weeks",
    description: "A web-based digital wallet application for seamless money transfers, bill payments, and financial management across devices.",
    brief: "The client needed a web-first wallet experience that matched the fluency of native apps while remaining accessible on any browser without installation.",
    approach: "Progressive Web App architecture, clean transaction flows, and strong security messaging gave users confidence. A dashboard with spending insights added retention value.",
    result: "User sign-up completion rate reached 81%. Monthly active users doubled within 90 days of launch.",
    image: "/portfolio/portfolio_web27.webp",
    images: ["/portfolio/portfolio_web27.webp", "/portfolio/portfolio_web35.webp", "/portfolio/portfolio_web36.webp"],
    tags: ["Web Design", "FinTech", "PWA", "Payments"],
    deliverables: ["Web App UI", "Transaction Flow Design", "Dashboard & Analytics", "Onboarding Flow", "Responsive Design"],
  },
  "grocery-delivery-web": {
    title: "Grocery Delivery Platform", category: "Web Design", year: "2024",
    client: "FreshRun", duration: "10 weeks",
    description: "An online grocery ordering and delivery platform for a regional supermarket chain — designed to drive e-commerce revenue and compete with national players.",
    brief: "The supermarket was losing market share to delivery-first competitors. They needed a platform that could launch quickly and scale with their inventory.",
    approach: "Smart search, personalised product recommendations, and a fast checkout flow reduced cart abandonment. Real-time delivery tracking added customer confidence.",
    result: "Online revenue grew 3× in the first quarter. Cart abandonment rate dropped from 71% to 38%.",
    image: "/portfolio/portfolio_web28.webp",
    images: ["/portfolio/portfolio_web28.webp", "/portfolio/portfolio_web37.webp", "/portfolio/portfolio_web38.webp"],
    tags: ["Web Design", "E-Commerce", "Grocery", "Delivery"],
    deliverables: ["Product Catalogue UI", "Cart & Checkout", "Order Tracking", "Admin Panel Design", "Mobile Responsive"],
  },
  // ── New Mobile Apps ──────────────────────────────────────────────────────
  "social-networking-app": {
    title: "Social Networking App", category: "Mobile Apps", year: "2024",
    client: "Circl", duration: "14 weeks",
    description: "A location-based social networking app connecting people through shared interests and local events — designed to feel warm and community-driven.",
    brief: "The founders wanted to create genuine local connections in a world of global social feeds. The app needed to feel different — intimate and trustworthy.",
    approach: "Interest-based matching, local event discovery, and small group conversations were the core loops. A warm colour palette and hand-illustrated icons reinforced the community feel.",
    result: "Day-7 retention reached 42%. The app was featured in regional press as 'the antidote to social media' within its first month.",
    image: "/portfolio/portfolio_web29.webp",
    images: ["/portfolio/portfolio_web29.webp", "/portfolio/portfolio_web39.webp", "/portfolio/portfolio_web40.webp"],
    tags: ["Mobile App", "Social", "Community", "iOS/Android"],
    deliverables: ["iOS & Android UI", "Onboarding Flow", "Feed & Discovery", "Events Module", "Messaging UI"],
  },
  "news-media-app": {
    title: "News & Media App", category: "Mobile Apps", year: "2024",
    client: "Pulse Media", duration: "8 weeks",
    description: "A personalised news aggregation app with curated categories, offline reading, and audio summaries for busy professionals.",
    brief: "The publisher had strong editorial content but poor digital reach. They needed an app that would bring readers back daily and grow subscription revenue.",
    approach: "Personalisation from day one — users built their topic feed during onboarding. Clean article layouts, audio mode, and a bookmarking system drove repeat sessions.",
    result: "Daily active usage rose to 68% of registered users. Subscription conversion improved by 29%.",
    image: "/portfolio/portfolio_web30.webp",
    images: ["/portfolio/portfolio_web30.webp", "/portfolio/portfolio_web41.webp", "/portfolio/portfolio_web42.webp"],
    tags: ["Mobile App", "Media", "News", "Personalisation"],
    deliverables: ["iOS & Android UI", "Onboarding & Feed Setup", "Article Reader", "Audio Mode", "Subscription Flow"],
  },
  "meditation-app": {
    title: "Meditation & Wellness App", category: "Mobile Apps", year: "2024",
    client: "Stillness Co.", duration: "10 weeks",
    description: "A guided meditation and sleep app with personalised programmes, breathing exercises, and a mood-tracking journal.",
    brief: "The market is dominated by Calm and Headspace. The client needed a premium feel and a differentiated approach — more personal, less corporate.",
    approach: "We designed around softness — muted gradients, gentle animations, and a tone of voice that felt like a trusted friend. Personalised programmes replaced generic playlists.",
    result: "App Store rating of 4.9 stars. 60-day retention reached 51%, significantly above category average.",
    image: "/portfolio/portfolio_web31.webp",
    images: ["/portfolio/portfolio_web31.webp", "/portfolio/portfolio_web43.webp", "/portfolio/portfolio_web45.webp"],
    tags: ["Mobile App", "Wellness", "Meditation", "UI/UX"],
    deliverables: ["iOS & Android UI", "Onboarding Programme", "Session Player", "Mood Journal", "Sleep Sounds UI"],
  },
  "job-portal-app": {
    title: "Job Portal App", category: "Mobile Apps", year: "2023",
    client: "HireLocal", duration: "12 weeks",
    description: "A mobile-first job discovery and application platform focused on local and entry-level opportunities — built to be fast, simple, and accessible.",
    brief: "Job seekers in the client's target market were mobile-only users who found existing platforms overwhelming and desktop-centric.",
    approach: "Swipe-to-apply, one-tap profile setup, and local job mapping reduced the barrier to entry. Clear progress indicators and status tracking kept candidates engaged.",
    result: "Applications per user per session increased 3×. Employer fill rate improved by 44% within two months.",
    image: "/portfolio/portfolio_web32.webp",
    images: ["/portfolio/portfolio_web32.webp", "/portfolio/portfolio_web46.webp", "/portfolio/portfolio_web47.webp"],
    tags: ["Mobile App", "Jobs", "Marketplace", "iOS/Android"],
    deliverables: ["iOS & Android UI", "Job Discovery & Search", "Application Flow", "Profile Builder", "Employer Dashboard"],
  },
  "real-estate-mobile-app": {
    title: "Real Estate Mobile App", category: "Mobile Apps", year: "2023",
    client: "HomeKey", duration: "14 weeks",
    description: "A property search and buying journey app for first-time homebuyers — simplifying a complex process through guided UX and clear information architecture.",
    brief: "First-time buyers felt lost in the property market. The client wanted an app that held their hand through every step from search to offer.",
    approach: "We built a guided journey model — step-by-step milestones, plain-language explanations, and proactive notifications kept buyers informed and confident throughout.",
    result: "Users completed the offer submission flow at a rate 60% higher than the industry average. NPS score of 72.",
    image: "/portfolio/portfolio_web33.webp",
    images: ["/portfolio/portfolio_web33.webp", "/portfolio/portfolio_web48.webp", "/portfolio/portfolio_web49.webp"],
    tags: ["Mobile App", "Real Estate", "Guided UX", "iOS/Android"],
    deliverables: ["iOS & Android UI", "Property Search & Map", "Buyer Journey Flow", "Offer Submission", "Push Notifications"],
  },
  "music-streaming-app": {
    title: "Music Streaming App", category: "Mobile Apps", year: "2023",
    client: "Wavefront", duration: "13 weeks",
    description: "An independent music streaming app supporting emerging artists — designed to feel fresh and creator-forward, distinct from mainstream platforms.",
    brief: "The client wanted to build the artist-first alternative to Spotify — a platform where emerging talent got real visibility and fair revenue sharing.",
    approach: "Artist profiles were given equal prominence to playlist discovery. A dynamic player, lossless audio mode, and direct artist support features differentiated the experience.",
    result: "Artist sign-up rate exceeded projections by 200%. Listener engagement averaged 47 minutes per session.",
    image: "/portfolio/portfolio_web34.webp",
    images: ["/portfolio/portfolio_web34.webp", "/portfolio/portfolio_web50.webp", "/portfolio/portfolio_web51.webp"],
    tags: ["Mobile App", "Music", "Streaming", "iOS/Android"],
    deliverables: ["iOS & Android UI", "Player & Queue UI", "Artist Profiles", "Discovery Feed", "Payment & Tipping Flow"],
  },
  "ride-sharing-app": {
    title: "Ride Sharing App", category: "Mobile Apps", year: "2023",
    client: "Glide Transport", duration: "16 weeks",
    description: "A ride-sharing and carpooling app for urban commuters — combining real-time ride matching, scheduled trips, and corporate travel management.",
    brief: "The client was entering a competitive market and needed an experience that was visibly better than incumbents — faster booking, clearer pricing, and a more reliable driver experience.",
    approach: "A dual-app design (rider and driver) with shared design language. Map-first booking, upfront pricing, and real-time ETAs removed anxiety from the journey.",
    result: "Rider satisfaction score of 4.7. Driver app rated the best in its category on both App Stores within 6 months.",
    image: "/portfolio/portfolio_web35.webp",
    images: ["/portfolio/portfolio_web35.webp", "/portfolio/portfolio_web52.webp", "/portfolio/portfolio_web53.webp"],
    tags: ["Mobile App", "Transport", "Maps", "iOS/Android"],
    deliverables: ["Rider & Driver iOS/Android UI", "Map & Booking Flow", "Pricing Display", "Trip History", "Corporate Portal"],
  },
  "banking-app": {
    title: "Banking & Finance App", category: "Mobile Apps", year: "2024",
    client: "Novus Bank", duration: "18 weeks",
    description: "A full-featured digital banking app for a challenger bank — covering accounts, transfers, savings goals, and investment integration.",
    brief: "The neobank needed an app that could compete with established digital banks while bringing something genuinely new — a more human, goal-oriented financial experience.",
    approach: "We designed around financial wellbeing rather than just transactions. Savings goals, spending insights, and proactive nudges gave users a sense of control and progress.",
    result: "Customer activation rate of 84%. Average savings per user increased by $340 in the first 90 days of use.",
    image: "/portfolio/portfolio_web36.webp",
    images: ["/portfolio/portfolio_web36.webp", "/portfolio/portfolio_web54.webp", "/portfolio/portfolio_web55.webp"],
    tags: ["Mobile App", "Banking", "FinTech", "iOS/Android"],
    deliverables: ["iOS & Android UI", "Onboarding & KYC Flow", "Account Dashboard", "Savings Goals UI", "Investment Module"],
  },
  // ── New Branding ──────────────────────────────────────────────────────
  "coffee-brand-identity": {
    title: "Coffee Brand Identity", category: "Branding", year: "2024",
    client: "Ember Roasters", duration: "6 weeks",
    description: "A full brand identity for an artisan specialty coffee roastery — from logo and packaging to in-store experience and digital presence.",
    brief: "The roastery had exceptional coffee but a forgettable brand. They were losing retail shelf space to competitors with stronger visual identities.",
    approach: "We built the brand around the ritual of coffee — warm earth tones, hand-lettered typography, and origin-story packaging that made each bag feel like a discovery.",
    result: "Listed by three independent retailers within 6 weeks of launch. Instagram following grew 400% in two months driven by packaging shareability.",
    image: "/portfolio/portfolio_web37.webp",
    images: ["/portfolio/portfolio_web37.webp", "/portfolio/portfolio_web38.webp", "/portfolio/portfolio_web39.webp"],
    tags: ["Branding", "Packaging", "Food & Beverage", "Retail"],
    deliverables: ["Logo & Identity", "Packaging (5 origins)", "In-store Signage", "Brand Guidelines", "Social Media Templates"],
  },
  "wellness-brand-package": {
    title: "Wellness Brand Package", category: "Branding", year: "2024",
    client: "Renew Wellness", duration: "7 weeks",
    description: "A complete brand identity for a holistic wellness centre offering yoga, therapy, and nutrition services — designed to attract a premium urban clientele.",
    brief: "The centre had built a loyal local following but their brand looked amateur. They were struggling to attract the affluent demographic they were targeting.",
    approach: "Soft botanical illustrations, a sage and ivory palette, and a refined logotype projected calm authority. The identity worked across print collateral, signage, and digital.",
    result: "New membership enquiries increased by 66% in the quarter following the rebrand. The brand was featured in a regional lifestyle magazine.",
    image: "/portfolio/portfolio_web38.webp",
    images: ["/portfolio/portfolio_web38.webp", "/portfolio/portfolio_web40.webp", "/portfolio/portfolio_web41.webp"],
    tags: ["Branding", "Wellness", "Health", "Lifestyle"],
    deliverables: ["Logo & Visual Identity", "Collateral Design", "Signage System", "Social Media Kit", "Brand Guidelines"],
  },
  "sports-brand-design": {
    title: "Sports Brand Design", category: "Branding", year: "2023",
    client: "Apex Athletics", duration: "8 weeks",
    description: "A bold brand identity for an emerging sports performance brand — covering apparel graphics, identity, and digital brand presence.",
    brief: "The brand was competing with established names in a crowded performance apparel market. They needed an identity that could punch above its weight.",
    approach: "We built an identity around raw energy and precision. A dynamic wordmark, high-contrast colour system, and bold graphic language gave the brand instant shelf presence.",
    result: "The brand identity contributed to a successful crowdfunding campaign that hit 240% of its target. Retail interest from three major sports retailers followed.",
    image: "/portfolio/portfolio_web39.webp",
    images: ["/portfolio/portfolio_web39.webp", "/portfolio/portfolio_web42.webp", "/portfolio/portfolio_web43.webp"],
    tags: ["Branding", "Sports", "Apparel", "Identity"],
    deliverables: ["Logo & Wordmark", "Apparel Graphics", "Brand Guidelines", "Packaging Design", "Digital Brand Kit"],
  },
  "pet-care-brand": {
    title: "Pet Care Brand Identity", category: "Branding", year: "2023",
    client: "Pawsome Co.", duration: "5 weeks",
    description: "A friendly and premium brand identity for a direct-to-consumer pet care brand — covering natural supplements and grooming products.",
    brief: "The founders wanted to position their products as the premium, natural alternative in a market full of generic pet brands. The brand needed to appeal to pet parents who treat their animals like family.",
    approach: "Friendly illustration, playful but refined typography, and a natural colour system communicated both care and quality. Each product line had its own character.",
    result: "The brand launched on Amazon and hit bestseller status in two categories within 3 months. Repeat purchase rate of 68%.",
    image: "/portfolio/portfolio_web40.webp",
    images: ["/portfolio/portfolio_web40.webp", "/portfolio/portfolio_web45.webp", "/portfolio/portfolio_web46.webp"],
    tags: ["Branding", "Pet Care", "Packaging", "DTC"],
    deliverables: ["Logo & Characters", "Product Packaging", "Brand Guidelines", "Amazon Listing Design", "Social Templates"],
  },
  "bakery-brand-identity": {
    title: "Bakery Brand Identity", category: "Branding", year: "2023",
    client: "Flour & Co.", duration: "4 weeks",
    description: "A warm and artisan brand identity for a craft bakery expanding from a single location to a multi-site and wholesale operation.",
    brief: "The bakery's handwritten logo had charm for a single shop but wasn't scalable. They needed a brand that could grow with them without losing its soul.",
    approach: "We retained the handcrafted spirit through bespoke lettering and an earthy, warm palette — but built it into a scalable system suitable for packaging, signage, and uniforms.",
    result: "The rebrand supported successful expansion to three new locations and a wholesale listing with a regional food distributor.",
    image: "/portfolio/portfolio_web41.webp",
    images: ["/portfolio/portfolio_web41.webp", "/portfolio/portfolio_web47.webp", "/portfolio/portfolio_web48.webp"],
    tags: ["Branding", "Food", "Packaging", "Retail"],
    deliverables: ["Logo System", "Packaging Design", "In-store Signage", "Uniform Design", "Brand Guidelines"],
  },
  "tech-company-rebrand": {
    title: "Tech Company Rebrand", category: "Branding", year: "2024",
    client: "Nexus Systems", duration: "10 weeks",
    description: "A strategic rebrand for an established B2B software company pivoting into the enterprise market — repositioning the brand to target Fortune 500 buyers.",
    brief: "The company had outgrown its startup-era identity. They were winning enterprise deals despite their brand, not because of it. That had to change.",
    approach: "We stripped back the identity to fundamentals — a geometric wordmark, a deep navy and silver palette, and a refined typographic system that projected enterprise-grade credibility.",
    result: "The rebrand coincided with the company's largest contract win to date. Three C-suite buyers cited brand perception improvement in post-deal interviews.",
    image: "/portfolio/portfolio_web42.webp",
    images: ["/portfolio/portfolio_web42.webp", "/portfolio/portfolio_web49.webp", "/portfolio/portfolio_web50.webp"],
    tags: ["Branding", "Tech", "Enterprise", "Rebrand"],
    deliverables: ["Logo & Identity System", "Brand Guidelines", "Sales Collateral", "Website Brand Direction", "Presentation Templates"],
  },
  "cosmetics-brand-package": {
    title: "Cosmetics Brand Package", category: "Branding", year: "2024",
    client: "Lumière Beauty", duration: "9 weeks",
    description: "A premium cosmetics brand identity and packaging system for a new makeup line targeting the luxury beauty market.",
    brief: "The founders had formulated exceptional products but needed a brand that could compete visually with established luxury cosmetics houses at point of sale.",
    approach: "A French-inspired identity with a clean gold and black palette, embossed logotype, and editorial-grade photography direction created instant luxury perception.",
    result: "Listed by a major department store chain in its first retail pitch. Press coverage in three beauty publications within the launch month.",
    image: "/portfolio/portfolio_web43.webp",
    images: ["/portfolio/portfolio_web43.webp", "/portfolio/portfolio_web51.webp", "/portfolio/portfolio_web52.webp"],
    tags: ["Branding", "Beauty", "Luxury", "Packaging"],
    deliverables: ["Logo & Identity", "Full Packaging System", "Brand Guidelines", "Photography Direction", "Retail Display Design"],
  },
  // ── New Video & Animation ──────────────────────────────────────────────────────
  "brand-documentary-film": {
    title: "Brand Documentary Film", category: "Video & Animation", year: "2024",
    client: "Atlas Craft Co.", duration: "6 weeks",
    description: "A 4-minute brand documentary telling the origin story of a heritage craft brand — produced for web, social, and investor audiences.",
    brief: "The brand had a powerful founder story that was never told on camera. They needed a film that could work as an investor asset and a brand-building piece simultaneously.",
    approach: "We structured the film around the founder's journey, intercut with the craft process. A documentary approach with cinematic production values gave it authenticity and impact.",
    result: "The film was used in a successful Series A fundraise. It has accumulated over 800K organic views across LinkedIn and YouTube.",
    image: "/portfolio/portfolio_web45.webp",
    images: ["/portfolio/portfolio_web45.webp", "/portfolio/portfolio_web53.webp", "/portfolio/portfolio_web54.webp"],
    tags: ["Video", "Documentary", "Brand Film", "Storytelling"],
    deliverables: ["4-min Brand Film", "60s Social Cut", "Behind-the-Scenes Footage", "Stills from Set", "Multi-platform Exports"],
  },
  "product-launch-video": {
    title: "Product Launch Video", category: "Video & Animation", year: "2024",
    client: "Lumio Tech", duration: "4 weeks",
    description: "A cinematic product launch video for a consumer technology company — used as the hero on their homepage and across paid media channels.",
    brief: "The product had been in development for two years. The launch video needed to do justice to that effort and generate genuine excitement at reveal.",
    approach: "We built the reveal around tension and release — starting abstract, slowly revealing the product through light and form before the full reveal with the product name.",
    result: "The launch video drove 1.2M views in the first 48 hours. The product sold out its initial run within 72 hours of launch.",
    image: "/portfolio/portfolio_web46.webp",
    images: ["/portfolio/portfolio_web46.webp", "/portfolio/portfolio_web55.webp", "/portfolio/portfolio_web56.webp"],
    tags: ["Video", "Product Launch", "Commercial", "Advertising"],
    deliverables: ["90s Hero Video", "30s & 15s Cutdowns", "Social Teasers", "Thumbnail Assets", "Multi-format Exports"],
  },
  "testimonial-ad-series": {
    title: "Testimonial Ad Series", category: "Video & Animation", year: "2024",
    client: "Bright Legal", duration: "3 weeks",
    description: "A series of 8 client testimonial videos for a legal tech company — produced for LinkedIn, YouTube, and sales enablement.",
    brief: "The company had strong customer advocates but no video content. Written testimonials weren't converting prospects in the enterprise sales cycle.",
    approach: "We designed a clean, professional studio format with branded lower-thirds and a warm interview lighting style that communicated trust and human connection.",
    result: "Sales reps reported 35% higher meeting-to-proposal conversion when sharing the videos. One video series generated 3 qualified inbound leads within a week of posting.",
    image: "/portfolio/portfolio_web47.webp",
    images: ["/portfolio/portfolio_web47.webp", "/portfolio/portfolio_web57.webp", "/portfolio/portfolio_web45.webp"],
    tags: ["Video", "Testimonial", "B2B", "Sales Enablement"],
    deliverables: ["8 × Interview Videos", "LinkedIn & YouTube Formats", "Branded Lower-Thirds", "Thumbnail Series", "Raw Footage"],
  },
  "motion-graphics-package": {
    title: "Motion Graphics Package", category: "Video & Animation", year: "2023",
    client: "DataFlow Analytics", duration: "5 weeks",
    description: "A comprehensive motion graphics package for a data analytics company — including data visualisation animations, presentation templates, and social assets.",
    brief: "The company's presentations were built on static slides. They needed motion to make complex data stories compelling for board-level and investor audiences.",
    approach: "We animated their core data narratives with clear, on-brand motion graphics — charts that built themselves, transitions that connected ideas, and a visual language consistent with their brand.",
    result: "Investor presentation close rate improved noticeably. The motion templates were adopted company-wide and reduced presentation creation time by 40%.",
    image: "/portfolio/portfolio_web48.webp",
    images: ["/portfolio/portfolio_web48.webp", "/portfolio/portfolio_web46.webp", "/portfolio/portfolio_web47.webp"],
    tags: ["Motion Graphics", "Data Visualisation", "B2B", "Animation"],
    deliverables: ["Data Viz Animations", "Presentation Motion Templates", "Social Motion Assets", "After Effects Files", "Brand Motion Guidelines"],
  },
  "trade-show-reel": {
    title: "Trade Show Highlight Reel", category: "Video & Animation", year: "2023",
    client: "Vantage Manufacturing", duration: "2 weeks",
    description: "A 2-minute highlight reel for a manufacturing company's annual trade show appearance — designed to run on loop at the exhibition stand.",
    brief: "The company had been using the same trade show video for 4 years. They needed something current that showcased their new capabilities and facility.",
    approach: "Fast-cut production footage, drone shots of the facility, and B-roll of the team in action communicated scale and capability. Minimal text kept it visually led.",
    result: "Stand footfall increased 40% compared to the previous year. Three significant distributor conversations were initiated directly at the stand.",
    image: "/portfolio/portfolio_web49.webp",
    images: ["/portfolio/portfolio_web49.webp", "/portfolio/portfolio_web50.webp", "/portfolio/portfolio_web51.webp"],
    tags: ["Video", "Corporate", "Trade Show", "Manufacturing"],
    deliverables: ["2-min Looping Reel", "60s Online Version", "Still Photography", "Exhibition Graphics Direction", "Multi-format Exports"],
  },
  "instagram-story-series": {
    title: "Instagram Story Series", category: "Video & Animation", year: "2023",
    client: "Vivid Skincare", duration: "3 weeks",
    description: "A 30-piece Instagram Stories and Reels series for a skincare brand's seasonal product campaign — designed to drive product awareness and direct sales.",
    brief: "The brand had strong products but inconsistent social content. They needed a content series that felt cohesive, on-brand, and was designed to convert.",
    approach: "We developed a visual template system with branded animations, product-close-up formats, and before/after frameworks that could be produced at pace without losing quality.",
    result: "Stories swipe-up rate improved by 320%. The campaign generated $84K in direct attributable sales over 3 weeks.",
    image: "/portfolio/portfolio_web50.webp",
    images: ["/portfolio/portfolio_web50.webp", "/portfolio/portfolio_web52.webp", "/portfolio/portfolio_web53.webp"],
    tags: ["Video", "Social Media", "Beauty", "Content"],
    deliverables: ["30 × Story Animations", "15 × Reels", "Template System", "Caption Copy", "Posting Schedule"],
  },
  "youtube-channel-intro": {
    title: "YouTube Channel Intro", category: "Video & Animation", year: "2024",
    client: "The Finance Desk", duration: "2 weeks",
    description: "A branded channel intro animation and end-screen template package for a financial education YouTube channel with 200K+ subscribers.",
    brief: "The channel had grown rapidly but its visual identity hadn't kept pace. The intro was outdated and didn't reflect the quality of the content.",
    approach: "We designed a kinetic typography intro with the channel's signature colour system, a momentum-building music sync, and a clean transition into content.",
    result: "Viewer retention in the first 30 seconds improved by 18%. The new intro was cited as a standout in the channel's audience survey.",
    image: "/portfolio/portfolio_web51.webp",
    images: ["/portfolio/portfolio_web51.webp", "/portfolio/portfolio_web54.webp", "/portfolio/portfolio_web55.webp"],
    tags: ["Animation", "YouTube", "Motion Graphics", "Branding"],
    deliverables: ["15s Channel Intro", "End-screen Template", "Lower-Third Pack", "Thumbnail Template", "After Effects Files"],
  },
  "3d-logo-animation": {
    title: "3D Logo Animation", category: "Video & Animation", year: "2024",
    client: "Sphera Technologies", duration: "3 weeks",
    description: "A premium 3D logo reveal animation for use across digital touchpoints — website hero, presentations, social media, and broadcast.",
    brief: "The company had recently refreshed their logo but needed a motion version that could anchor their digital brand presence with the same premium feel.",
    approach: "We built the logo in 3D and designed a reveal that played on the logo's geometric nature — assembling from light and form into the final lockup with a satisfying resolution.",
    result: "The animation became the brand's most shared piece of content. It was adopted as the opener for all company presentations and broadcast appearances.",
    image: "/portfolio/portfolio_web52.webp",
    images: ["/portfolio/portfolio_web52.webp", "/portfolio/portfolio_web56.webp", "/portfolio/portfolio_web57.webp"],
    tags: ["Animation", "3D", "Logo", "Motion Design"],
    deliverables: ["3D Logo Reveal (multiple timings)", "Loop Version", "Dark & Light Variants", "Alpha Channel Export", "Still Renders"],
  },
  "event-highlight-video": {
    title: "Event Highlight Video", category: "Video & Animation", year: "2023",
    client: "Summit Leadership Forum", duration: "2 weeks",
    description: "A 3-minute highlight film from a 2-day leadership conference — produced for post-event marketing, sponsor reporting, and next-year ticket sales.",
    brief: "The event organisers needed a highlight film they could use immediately after the event to capitalise on momentum and drive early-bird registrations for the following year.",
    approach: "We deployed a 3-camera crew across the event and edited the highlight film within 48 hours of the final session. Energy, insight, and community were the three narrative threads.",
    result: "The video drove a 27% increase in early-bird ticket sales compared to the previous year. Sponsors rated the video the most valuable post-event deliverable.",
    image: "/portfolio/portfolio_web53.webp",
    images: ["/portfolio/portfolio_web53.webp", "/portfolio/portfolio_web45.webp", "/portfolio/portfolio_web46.webp"],
    tags: ["Video", "Events", "Corporate", "Live Production"],
    deliverables: ["3-min Highlight Film", "60s Social Cut", "Speaker Soundbites", "Photo Highlights", "Multi-format Exports"],
  },
  "recruitment-campaign-video": {
    title: "Recruitment Campaign Video", category: "Video & Animation", year: "2023",
    client: "Helix Biotech", duration: "4 weeks",
    description: "An employer branding video series for a biotech company's recruitment campaign — targeting PhD-level scientists and engineers.",
    brief: "The company was competing with pharmaceutical giants for talent. They needed recruitment content that communicated their culture and mission authentically.",
    approach: "Real employees, real stories — no scripts. We captured genuine moments from the lab, the canteen, and the meeting rooms that told the truth of working there.",
    result: "Qualified applications increased by 78% during the campaign period. Cost-per-hire reduced by $4,200 through organic social performance.",
    image: "/portfolio/portfolio_web54.webp",
    images: ["/portfolio/portfolio_web54.webp", "/portfolio/portfolio_web47.webp", "/portfolio/portfolio_web48.webp"],
    tags: ["Video", "Recruitment", "Employer Branding", "Corporate"],
    deliverables: ["3-min Culture Film", "6 × Employee Stories", "LinkedIn Cutdowns", "Careers Page Assets", "Photography"],
  },
  "app-demo-video": {
    title: "App Demo & Promo Video", category: "Video & Animation", year: "2024",
    client: "Taskly App", duration: "3 weeks",
    description: "A 60-second app demo and promotional video for a productivity app's App Store listing, Product Hunt launch, and paid social campaigns.",
    brief: "The app had great reviews but a weak App Store listing. The screenshots weren't communicating the app's value quickly enough to convert visitors.",
    approach: "We designed a screen-recording-plus-live-action hybrid — real device footage combined with motion graphics callouts that highlighted key features at pace.",
    result: "App Store conversion rate improved by 34%. The Product Hunt launch video was cited as a key factor in reaching #1 Product of the Day.",
    image: "/portfolio/portfolio_web55.webp",
    images: ["/portfolio/portfolio_web55.webp", "/portfolio/portfolio_web49.webp", "/portfolio/portfolio_web50.webp"],
    tags: ["Video", "App Demo", "Product Hunt", "Mobile"],
    deliverables: ["60s App Demo Video", "30s Social Cut", "App Store Preview Video", "GIF Assets", "Thumbnail Designs"],
  },
  "whiteboard-animation": {
    title: "Whiteboard Animation", category: "Video & Animation", year: "2023",
    client: "Edify Learning", duration: "3 weeks",
    description: "A series of 5 whiteboard-style animated explainer videos for an online education platform's core curriculum modules.",
    brief: "The platform needed engaging video content to replace long-form lecture recordings that were causing high dropout rates among learners.",
    approach: "We designed a consistent hand-drawn animation style with clear visual metaphors for each concept. Narrator timing was optimised for attention span and knowledge retention.",
    result: "Module completion rates improved from 34% to 71% after the animated content replaced static lectures.",
    image: "/portfolio/portfolio_web56.webp",
    images: ["/portfolio/portfolio_web56.webp", "/portfolio/portfolio_web51.webp", "/portfolio/portfolio_web52.webp"],
    tags: ["Animation", "Education", "Explainer", "Whiteboard"],
    deliverables: ["5 × Whiteboard Videos (3–5 min)", "Script & Storyboards", "Voiceover Production", "Caption Files", "Source Files"],
  },
  "corporate-interview-series": {
    title: "Corporate Interview Series", category: "Video & Animation", year: "2024",
    client: "Meridian Capital", duration: "5 weeks",
    description: "A 10-episode thought leadership interview series featuring the firm's partners and senior advisors — produced for LinkedIn and their investor relations portal.",
    brief: "The firm wanted to build a media presence and position its partners as industry voices. They had tried written content but video was where their audience was spending time.",
    approach: "A clean, premium studio format with consistent lighting, branded graphics, and a relaxed interview style made the episodes feel authoritative yet approachable.",
    result: "LinkedIn page followers grew 180% over the series run. Three partners received speaking invitations attributed to the video series.",
    image: "/portfolio/portfolio_web57.webp",
    images: ["/portfolio/portfolio_web57.webp", "/portfolio/portfolio_web53.webp", "/portfolio/portfolio_web54.webp"],
    tags: ["Video", "Interview", "Thought Leadership", "LinkedIn"],
    deliverables: ["10 × Interview Episodes", "Teaser Clips", "Branded Intro/Outro", "Thumbnail Series", "Transcript Documents"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects[slug];
  if (!p) return { title: "Not Found | Software Elites" };
  return {
    title: `${p.title} | Portfolio | Software Elites`,
    description: p.description,
  };
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

const allSlugs = Object.keys(projects);

function getAdjacentSlugs(currentSlug: string) {
  const idx = allSlugs.indexOf(currentSlug);
  const prev = idx > 0 ? allSlugs[idx - 1] : null;
  const next = idx < allSlugs.length - 1 ? allSlugs[idx + 1] : null;
  return { prev, next };
}

function getRelatedProjects(currentSlug: string, category: string, count: number = 3) {
  return allSlugs
    .filter((s) => s !== currentSlug && projects[s].category === category)
    .slice(0, count)
    .map((s) => ({ slug: s, ...projects[s] }));
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects[slug];
  if (!p) notFound();

  const { prev, next } = getAdjacentSlugs(slug);
  const related = getRelatedProjects(slug, p.category);
  

  return (
    <main className="bg-[#050508] text-white min-h-screen">

      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden bg-[#050508] border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 md:pt-36 pb-16 md:pb-24">
          <Link href="/portfolio"
            className="inline-flex items-center gap-2 text-white/30 hover:text-white text-[11px]
                       font-bold uppercase tracking-[0.25em] transition-all duration-300 group mb-10">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              className="group-hover:-translate-x-1 transition-transform duration-300">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Portfolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-6 h-px bg-[#7c6af7]" />
                <span className="text-[#7c6af7] text-[10px] font-bold uppercase tracking-[0.3em]">
                  {p.category}
                </span>
                <span className="text-zinc-700 text-[10px] font-mono">/</span>
                <span className="text-zinc-600 text-[10px] font-mono">{p.year}</span>
              </div>
              <h1 style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
                className="font-black tracking-tight leading-[0.88] text-white max-w-xl">
                {p.title.split(" ")[0]}
                <br />
                <span className="text-transparent"
                  style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.18)" }}>
                  {p.title.split(" ").slice(1).join(" ") || p.title.split(" ")[0]}
                </span>
              </h1>
              <p className="text-zinc-400 text-base mt-4 font-light max-w-md">{p.description}</p>
              <div className="flex items-center gap-5 mt-6">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#7c6af7]/10 border border-[#7c6af7]/20 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7c6af7" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
                    </svg>
                  </span>
                  <span className="text-zinc-400 text-sm">{p.client}</span>
                </div>
                <span className="w-px h-5 bg-white/10" />
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#7c6af7]/10 border border-[#7c6af7]/20 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7c6af7" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                    </svg>
                  </span>
                  <span className="text-zinc-400 text-sm">{p.duration}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#7c6af7]/5 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl border border-white/[0.08] overflow-hidden bg-[#0a0a12] shadow-xl shadow-[#7c6af7]/5">
                <div className="aspect-[4/3] relative">
                  <img src={p.image} alt={p.title}
                    className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12]/40 via-transparent to-transparent" />
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-[#7c6af7] rounded-full flex items-center justify-center shadow-lg shadow-[#7c6af7]/30">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tags ── */}
      <section className="border-b border-white/[0.04] bg-[#07070d]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t}
              className="text-[10px] uppercase tracking-[0.14em] font-semibold
                         text-[#a89df9] bg-[#7c6af7]/8 border border-[#7c6af7]/15
                         px-3 py-1.5 rounded-full">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ── Content ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-3xl mx-auto space-y-16">
          {[
            { label: "The Brief", text: p.brief, num: "01", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
            { label: "Our Approach", text: p.approach, num: "02", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
            { label: "The Result", text: p.result, num: "03", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
          ].map(({ label, text, num, icon }) => (
            <div key={label} className="relative pl-14 md:pl-16 group">
              <div className="absolute left-0 top-0 w-10 h-10 rounded-xl bg-[#7c6af7]/10 border border-[#7c6af7]/20 flex items-center justify-center group-hover:bg-[#7c6af7]/20 transition-colors duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c6af7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={icon} />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#7c6af7]/40 text-xs font-mono font-bold">{num}</span>
                  <span className="text-white text-sm font-bold uppercase tracking-[0.15em]">{label}</span>
                </div>
                <p className="text-zinc-400 text-[15px] leading-[1.8] font-light">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Gallery ── */}
      {/* ── Gallery ── */}
      <section className="border-t border-white/[0.04] py-16 md:py-24 bg-[#07070d]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-5 h-px bg-[#7c6af7]" />
            <p className="text-[#7c6af7] text-[10px] uppercase tracking-[0.25em] font-bold">Project Gallery</p>
          </div>
          <PortfolioGallery images={p.images} title={p.title} />
        </div>
      </section>

      {/* ── Related ── */}
      {related.length > 0 && (
        <section className="border-t border-white/[0.04] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex items-center gap-3 mb-10">
              <span className="w-5 h-px bg-[#7c6af7]" />
              <p className="text-[#7c6af7] text-[10px] uppercase tracking-[0.25em] font-bold">More {p.category}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.04]">
              {related.map((rp) => (
                <Link key={rp.slug} href={`/portfolio/${rp.slug}`}
                  className="group relative bg-[#050508] overflow-hidden transition-all duration-300 hover:bg-[#0c0c14]">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={rp.image} alt={rp.title} loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent" />
                  </div>
                  <div className="p-5 border-t border-white/[0.04]">
                    <span className="text-[#7c6af7] text-[9px] font-bold uppercase tracking-[0.2em] block mb-1">{rp.category}</span>
                    <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-[#a89df9] transition-colors duration-200">{rp.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Nav ── */}
      <section className="border-t border-white/[0.04] bg-[#07070d]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 gap-px bg-white/[0.04]">
            <Link href={prev ? `/portfolio/${prev}` : "/portfolio"}
              className={`relative group p-8 md:p-10 ${!prev ? "pointer-events-none opacity-40" : "hover:bg-[#0c0c14]"} transition-all duration-300`}>
              <span className="text-zinc-600 text-[10px] uppercase tracking-[0.2em] font-bold mb-2 block">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline mr-2">
                  <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Previous
              </span>
              <span className="text-white text-sm font-semibold group-hover:text-[#a89df9] transition-colors duration-200 block truncate">
                {prev ? projects[prev].title : "No previous project"}
              </span>
            </Link>
            <Link href={next ? `/portfolio/${next}` : "/portfolio"}
              className={`relative group p-8 md:p-10 text-right border-l border-white/[0.04] ${!next ? "pointer-events-none opacity-40" : "hover:bg-[#0c0c14]"} transition-all duration-300`}>
              <span className="text-zinc-600 text-[10px] uppercase tracking-[0.2em] font-bold mb-2 block">
                Next
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline ml-2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="text-white text-sm font-semibold group-hover:text-[#a89df9] transition-colors duration-200 block truncate">
                {next ? projects[next].title : "No next project"}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(124,106,247,0.06) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 text-center relative z-10">
          <span className="text-[#7c6af7] text-[11px] font-bold uppercase tracking-[0.3em] block mb-5">Like what you see?</span>
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 3.2rem)" }}
            className="font-black tracking-tight leading-tight text-white mb-4">
            Let&apos;s create something{" "}
            <span className="bg-gradient-to-r from-[#7c6af7] to-[#5a78f0] bg-clip-text text-transparent">remarkable.</span>
          </h2>
          <p className="text-zinc-500 text-sm max-w-md mx-auto font-light mb-8">Have a project in mind? We&apos;d love to hear about it.</p>
          <Link href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#7c6af7] text-white
                       font-bold text-sm uppercase tracking-[0.1em] hover:bg-[#6a59e0]
                       transition-all duration-200 shadow-[0_0_40px_rgba(124,106,247,0.25)]">
            Start Your Project
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

    </main>
  );
}

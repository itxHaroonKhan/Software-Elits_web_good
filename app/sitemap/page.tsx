import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitemap | Software Elites",
  description: "A complete overview of all pages on the Software Elites website.",
};

const sitemapSections = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Agency", href: "/agency" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "All Services", href: "/services" },
      { label: "Web Design", href: "/services/website-design" },
      { label: "Website Development", href: "/services/custom-software" },
      { label: "Mobile App Development", href: "/services/web-mobile" },
      { label: "E-Commerce Solutions", href: "/services/ecommerce" },
      { label: "UI/UX Design", href: "/services/ui-ux" },
      { label: "Logo & Branding", href: "/services/logo-branding" },
      { label: "WordPress Development", href: "/services/wordpress" },
      { label: "Website Maintenance", href: "/services/website-maintenance" },
      { label: "Domain & Hosting", href: "/services/domain-hosting" },
      { label: "Video & Animation", href: "/services/video-animation" },
      { label: "AI & Machine Learning", href: "/services/ai-ml" },
      { label: "Cloud & DevOps", href: "/services/cloud-devops" },
    ],
  },
  {
    title: "Work & Portfolio",
    links: [
      { label: "Our Work", href: "/work" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Projects", href: "/projects" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Resources & Insights", href: "/resources" },
      { label: "Technologies", href: "/technologies" },
      { label: "Packages & Pricing", href: "/packages" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <main className="bg-[#05050a] text-white min-h-screen">
      <section className="relative border-b border-white/[0.06]">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,106,247,0.07) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto px-6 md:px-12 pt-32 md:pt-44 pb-16 relative z-10">
          <span className="text-[#7c6af7] text-xs font-bold uppercase tracking-[0.2em] block mb-5">
            Navigation
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white mb-5">
            Sitemap
          </h1>
          <p className="text-zinc-500 text-base md:text-lg font-light">
            A complete overview of all pages on our website.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {sitemapSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-white font-bold text-sm uppercase tracking-[0.15em] mb-5
                             pb-3 border-b border-white/[0.06]">
                {section.title}
              </h2>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-zinc-400 hover:text-[#a89df9] text-sm transition-colors duration-150
                                 inline-flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#7c6af7]/50 group-hover:bg-[#7c6af7] transition-colors shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="bg-black text-white min-h-screen pt-16">
      <section className="max-w-3xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <Link href="/"
          className="inline-flex items-center gap-2 text-zinc-600 hover:text-white text-sm transition-colors mb-12">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Home
        </Link>

        <span className="section-label mb-4">Legal</span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-zinc-600 text-sm mb-16">Last updated: 1 June 2025</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-10">
          {[
            {
              title: "1. Who We Are",
              body: "Software Elites Ltd is registered in England & Wales (Company No. 12345678). Our registered office is London, United Kingdom. We are the data controller for personal data collected through this website.",
            },
            {
              title: "2. What Data We Collect",
              body: "We collect data you provide directly (name, email, phone, project details via our contact form) and data collected automatically (IP address, browser type, pages visited, via cookies and analytics tools).",
            },
            {
              title: "3. How We Use Your Data",
              body: "We use your data to respond to enquiries, deliver agreed services, improve our website, send occasional marketing communications (with consent), and comply with legal obligations. We do not sell your data to third parties.",
            },
            {
              title: "4. Legal Basis for Processing",
              body: "We process your data on the basis of: (a) your consent where requested, (b) contract performance where you engage our services, (c) legitimate interests for improving our business, and (d) legal obligation where required by law.",
            },
            {
              title: "5. Cookies",
              body: "We use essential cookies for site functionality and analytics cookies (Google Analytics) to understand how visitors use our site. You can manage cookie preferences at any time via our cookie banner.",
            },
            {
              title: "6. Data Retention",
              body: "We retain contact form data for 3 years from last interaction. Client project data is retained for 7 years for legal compliance. You may request deletion at any time subject to legal retention requirements.",
            },
            {
              title: "7. Your Rights",
              body: "Under GDPR, you have the right to access, rectify, erase, restrict, or port your personal data. You also have the right to object to processing and to withdraw consent. Contact privacy@softwareelites.co.uk to exercise any right.",
            },
            {
              title: "8. Contact",
              body: "For any privacy enquiries, contact our Data Protection Officer at privacy@softwareelites.co.uk or write to: Software Elites Ltd, London, United Kingdom.",
            },
          ].map(({ title, body }) => (
            <div key={title}>
              <h2 className="text-white font-bold text-xl mb-3">{title}</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

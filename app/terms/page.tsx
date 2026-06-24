import Link from "next/link";

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="text-zinc-600 text-sm mb-16">Last updated: 1 June 2025</p>

        <div className="space-y-10">
          {[
            {
              title: "1. Acceptance of Terms",
              body: "By accessing or using the Software Elites website or engaging our services, you agree to be bound by these Terms of Service. If you do not agree, please discontinue use immediately.",
            },
            {
              title: "2. Services",
              body: "Software Elites provides software development, design, and consulting services. The specific scope, deliverables, and timelines for each engagement are defined in a separate Statement of Work (SOW) or Service Agreement.",
            },
            {
              title: "3. Intellectual Property",
              body: "Upon full payment of all fees, the client receives full ownership of all deliverables produced specifically for the engagement. Software Elites retains ownership of pre-existing tools, frameworks, and methodologies used in delivery.",
            },
            {
              title: "4. Payment Terms",
              body: "Payment terms are specified in the relevant SOW. Standard terms are 50% upfront and 50% on delivery. Invoices are due within 30 days. Late payments accrue interest at 8% per annum above the US Federal Reserve base rate.",
            },
            {
              title: "5. Confidentiality",
              body: "Both parties agree to keep confidential all proprietary information shared during the engagement. This obligation survives termination of the agreement for 3 years.",
            },
            {
              title: "6. Limitation of Liability",
              body: "Software Elites' total liability for any claim arising from an engagement shall not exceed the fees paid by the client in the 3 months preceding the claim. We are not liable for indirect, consequential, or punitive damages.",
            },
            {
              title: "7. Termination",
              body: "Either party may terminate a retainer engagement with 30 days written notice. Fixed-price projects may be terminated by the client at any time; payment is due for all work completed to the termination date.",
            },
            {
              title: "8. Governing Law",
              body: "These terms are governed by the laws of the Commonwealth of Virginia, United States. Any disputes shall be subject to the exclusive jurisdiction of the courts of Virginia, USA.",
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

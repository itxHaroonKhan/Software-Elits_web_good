import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibility | Software Elites",
  description: "Software Elites is committed to making our website accessible to everyone. Learn about our accessibility standards and how to get help.",
};

const sections = [
  {
    title: "1. Our Commitment",
    body: "Software Elites is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards.",
  },
  {
    title: "2. Standards We Follow",
    body: "We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to make web content more accessible to people with disabilities including visual, auditory, physical, speech, cognitive, language, learning, and neurological disabilities.",
  },
  {
    title: "3. Measures We Take",
    body: "Our accessibility measures include: using semantic HTML structure, providing text alternatives for non-text content, ensuring sufficient color contrast ratios, making all functionality available from a keyboard, providing visible focus indicators, and testing with screen readers.",
  },
  {
    title: "4. Known Limitations",
    body: "While we strive for full accessibility, some third-party content or older sections of the site may not yet meet all accessibility standards. We are actively working to address any gaps and appreciate your patience.",
  },
  {
    title: "5. Feedback & Contact",
    body: "We welcome your feedback on the accessibility of our website. If you experience any barriers or have suggestions for improvement, please contact us at info@softwareelites.com or call +1 804-280-4086. We aim to respond to accessibility feedback within 2 business days.",
  },
  {
    title: "6. Formal Complaints",
    body: "If you are not satisfied with our response, you may contact the relevant accessibility authority in your jurisdiction. We take all accessibility concerns seriously and will work to resolve any issues promptly.",
  },
];

export default function AccessibilityPage() {
  return (
    <main className="bg-[#05050a] text-white min-h-screen">
      <section className="relative border-b border-white/[0.06]">
        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,106,247,0.07) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto px-6 md:px-12 pt-32 md:pt-44 pb-16 relative z-10">
          <span className="text-[#7c6af7] text-xs font-bold uppercase tracking-[0.2em] block mb-5">
            Legal
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white mb-5">
            Accessibility Statement
          </h1>
          <p className="text-zinc-500 text-base md:text-lg font-light">
            Last updated: June 2025
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col gap-10">
        {sections.map(({ title, body }) => (
          <div key={title}>
            <h2 className="text-white font-bold text-xl mb-3">{title}</h2>
            <p className="text-zinc-500 text-base leading-relaxed font-light">{body}</p>
          </div>
        ))}

        <div className="pt-6 border-t border-white/[0.06] flex flex-wrap gap-4">
          <Link href="/contact" className="btn btn-accent btn-md">Contact Us</Link>
          <Link href="/privacy" className="text-[#7c6af7] text-sm hover:text-[#a89df9] transition-colors self-center">
            Privacy Policy →
          </Link>
        </div>
      </section>
    </main>
  );
}

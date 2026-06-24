import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | Software Elites",
  description: "Learn how Software Elites uses cookies and how you can manage your cookie preferences.",
};

const sections = [
  {
    title: "1. What Are Cookies?",
    body: "Cookies are small text files stored on your device when you visit a website. They help the website remember information about your visit, such as your preferences and settings, to make your next visit easier and the site more useful to you.",
  },
  {
    title: "2. How We Use Cookies",
    body: "Software Elites uses cookies to ensure our website functions correctly, to understand how visitors use our site, and to remember your preferences. We do not use cookies to identify you personally unless you have provided us with personal information.",
  },
  {
    title: "3. Types of Cookies We Use",
    body: "Essential cookies are required for the website to function and cannot be switched off. Analytics cookies (such as Google Analytics) help us understand how visitors interact with our site by collecting anonymous information. Preference cookies allow the site to remember choices you make, such as language or region.",
  },
  {
    title: "4. Third-Party Cookies",
    body: "Some of our pages may include content from third-party services (such as embedded videos or social media widgets) which may set their own cookies. We have no control over these cookies. Please refer to the third-party's privacy and cookie policies for more information.",
  },
  {
    title: "5. Managing Cookies",
    body: "You can control and/or delete cookies at any time. You can delete all cookies already on your device and set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit our site and some services and functionalities may not work.",
  },
  {
    title: "6. Contact Us",
    body: "If you have any questions about our use of cookies, please contact us at info@softwareelites.com or write to us at 5142 Glenbeigh Rd, Richmond, VA 23234, United States.",
  },
];

export default function CookiesPage() {
  return (
    <main className="bg-[#05050a] text-white min-h-screen">
      <section className="relative border-b border-white/[0.06]">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,106,247,0.07) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto px-6 md:px-12 pt-32 md:pt-44 pb-16 relative z-10">
          <span className="text-[#7c6af7] text-xs font-bold uppercase tracking-[0.2em] block mb-5">
            Legal
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white mb-5">
            Cookie Policy
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
          <Link href="/privacy" className="text-[#7c6af7] text-sm hover:text-[#a89df9] transition-colors">
            Privacy Policy →
          </Link>
          <Link href="/terms" className="text-[#7c6af7] text-sm hover:text-[#a89df9] transition-colors">
            Terms of Service →
          </Link>
        </div>
      </section>
    </main>
  );
}

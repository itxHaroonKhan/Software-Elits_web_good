import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#05050a",
};

export const metadata: Metadata = {
  title: "Software Elites | Premium Software Development Agency, London",
  description:
    "Award-winning software development agency building custom web apps, mobile applications, AI solutions, and cloud infrastructure for ambitious businesses worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-screen w-full bg-black text-white antialiased">
        <SmoothScroll />
        <Header />
        {children}
        <Footer />

        {/* Floating CTA */}
        <Link href="/contact" className="floating-cta" aria-label="Get in touch">
          <div className="floating-cta__circle" />
          <div className="floating-cta__text">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path id="circlePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
              </defs>
              <text>
                <textPath href="#circlePath" startOffset="0%">GET IN TOUCH • GET IN TOUCH • </textPath>
              </text>
            </svg>
          </div>
          <div className="floating-cta__arrow">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 16L16 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M7 4H16V13" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </Link>
      </body>
    </html>
  );
}

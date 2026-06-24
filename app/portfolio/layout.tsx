import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Software Elites",
  description: "Explore our portfolio of web design, mobile apps, branding, and digital marketing projects built for clients worldwide.",
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

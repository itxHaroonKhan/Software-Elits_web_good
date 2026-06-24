import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Software Elites",
  description: "12 digital services under one roof — web design, development, mobile apps, e-commerce, SEO, branding, and more.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

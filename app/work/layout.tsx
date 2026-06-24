import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | Software Elites",
  description: "Case studies and project showcases from Software Elites — real results for real clients across FinTech, healthcare, e-commerce, and more.",
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

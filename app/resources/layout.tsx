import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Insights | Software Elites",
  description: "Engineering guides, architecture deep-dives, and practical whitepapers from the Software Elites team.",
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

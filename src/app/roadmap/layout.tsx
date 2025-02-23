import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "silverback ai - roadmap",
  description:
    "read the silverback ai roadmap to learn about our development milestones.",
  openGraph: {
    title: "silverback ai - roadmap",
    description:
      "read the silverback ai roadmap to learn about our development milestones.",
  },
};

export default function RoadmapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="pt-14 pb-14">{children}</div>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "sora labs - roadmap",
  description:
    "read the sora labs roadmap to learn about our development milestones.",
  openGraph: {
    title: "sora labs - roadmap",
    description:
      "read the sora labs roadmap to learn about our development milestones.",
  },
};

export default function RoadmapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="pt-14 pb-14">{children}</div>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "sora labs - docs",
  description:
    "read the sora labs docs to learn about our vision and technology.",
  openGraph: {
    title: "sora labs - docs",
    description:
      "read the sora labs docs to learn about our vision and technology.",
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

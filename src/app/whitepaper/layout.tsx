import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "sora labs - whitepaper",
  description:
    "read the sora labs whitepaper to learn about our vision and technology.",
  openGraph: {
    title: "sora labs - whitepaper",
    description:
      "read the sora labs whitepaper to learn about our vision and technology.",
  },
};

export default function WhitepaperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

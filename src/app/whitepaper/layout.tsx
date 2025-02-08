import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "silverback ai - litepaper",
  description:
    "read the silverback ai litepaper to learn about our vision and technology.",
  openGraph: {
    title: "silverback ai - litepaper",
    description:
      "read the silverback ai litepaper to learn about our vision and technology.",
  },
};

export default function WhitepaperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="pt-14 pb-14">{children}</div>;
}

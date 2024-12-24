import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "sora labs - privacy policy",
  description:
    "read the sora labs privacy policy to learn about how we handle your data.",
  openGraph: {
    title: "sora labs - privacy policy",
    description:
      "read the sora labs privacy policy to learn about how we handle your data.",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

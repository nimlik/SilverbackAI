import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "sora labs - terms of service",
  description:
    "read the sora labs terms of service to learn about our terms and conditions.",
  openGraph: {
    title: "sora labs - terms of service",
    description:
      "read the sora labs terms of service to learn about our terms and conditions.",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="pt-14 pb-14">{children}</div>;
}

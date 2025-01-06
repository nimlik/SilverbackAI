import type { Metadata } from "next";
import Navigation from "@/components/docs/Navigation";

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
  return (
    <div className="flex min-h-full items-start justify-center py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <div className="w-full lg:w-64">
            <div className="sticky top-20 bg-sora-neutral/95 backdrop-blur-md rounded-lg py-3 px-6 lg:py-6">
              <Navigation />
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-sora-neutral/95 backdrop-blur-md rounded-lg p-8">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

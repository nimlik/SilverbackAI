import type { Metadata } from "next";
import "@/globals.css";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { sfProDisplay } from '@/lib/fonts';

export const metadata: Metadata = {
  title: "sora labs",
  description: "where the sky is just the beginning.",
  icons: {
    icon: "/favicon.ico", // Use a single icon first
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sfProDisplay.variable} antialiased home-background`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
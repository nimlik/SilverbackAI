import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sfProDisplay } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "sora labs",
  description: "where the sky is just the beginning.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${sfProDisplay.variable} antialiased h-full home-background`}
      >
        <Navbar />
        <main className="h-full pt-14 pb-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

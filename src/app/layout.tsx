import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sfProDisplay } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <main className="h-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

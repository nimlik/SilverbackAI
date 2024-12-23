import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-sora-neutral/95 backdrop-blur-md z-50 border-b border-sora-secondary/20">
      <nav className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-lg text-gray-700 transition-colors flex items-center"
        >
          <Image src="/logo.png" alt="Sora Labs Logo" width={32} height={32} />
          sora labs
        </Link>

        <div className="flex gap-8 text-sm">
          <Link
            href="/whitepaper"
            className="text-gray-700 hover:text-sora-primary transition-colors"
          >
            whitepaper
          </Link>
          <Link
            href="https://github.com/soralabs"
            target="_blank"
            className="text-gray-700 hover:text-sora-secondary transition-colors"
          >
            github
          </Link>
        </div>
      </nav>
    </header>
  );
}

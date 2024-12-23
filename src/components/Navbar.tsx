import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-sora-neutral/95 backdrop-blur-md z-50 border-b border-sora-secondary/20">
      <nav className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-lg text-gray-700 transition-colors"
        >
          sora labs
        </Link>

        <div className="flex gap-8 text-sm">
          <Link
            href="#"
            className="text-gray-700 hover:text-sora-primary transition-colors"
          >
            whitepaper
          </Link>
          <Link
            href="#"
            className="text-gray-700 hover:text-sora-secondary transition-colors"
          >
            about
          </Link>
        </div>
      </nav>
    </header>
  );
}

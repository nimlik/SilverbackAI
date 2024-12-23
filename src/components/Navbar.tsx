import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-sora-bg/50 backdrop-blur-md z-50 border-b border-sora-secondary/20">
      <nav className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-gray-900">
          Sora Labs
        </Link>

        <div className="flex gap-8">
          <Link
            href="#"
            className="text-gray-700 hover:text-sora-primary transition-colors"
          >
            Products
          </Link>
          <Link
            href="#"
            className="text-gray-700 hover:text-sora-secondary transition-colors"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-gray-700 hover:text-sora-accent transition-colors"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

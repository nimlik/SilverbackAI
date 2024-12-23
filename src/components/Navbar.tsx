import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-foreground/10">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Sora Labs
        </Link>

        <div className="flex gap-8">
          <Link href="#" className="hover:text-foreground/70 transition-colors">
            Products
          </Link>
          <Link href="#" className="hover:text-foreground/70 transition-colors">
            About
          </Link>
          <Link href="#" className="hover:text-foreground/70 transition-colors">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

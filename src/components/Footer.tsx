export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-background/80 backdrop-blur-md border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between text-sm">
        <div>© 2024 Sora Labs. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground/70 transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-foreground/70 transition-colors">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}

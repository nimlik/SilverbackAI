export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-sora-neutral/95 backdrop-blur-md border-t border-sora-secondary/20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between text-sm">
        <div className="text-white bold text-sm">© 2025 silverback ai</div>
        <div className="flex gap-6 text-sm">
          <a
            href="/privacy"
            className="text-white hover:text-sora-primary transition-colors"
          >
            privacy
          </a>
          <a
            href="/terms"
            className="text-white hover:text-sora-secondary transition-colors"
          >
            terms
          </a> 
          { /*<a
            href="https://x.com/labs_sora"
            target="_blank"
            className="text-white hover:text-sora-secondary transition-colors"
          >
            x
          </a> 
          <a
            href="https://discord.gg/soralabs"
            target="_blank"
            className="text-white hover:text-sora-secondary transition-colors"
          >
            discord
          </a> */}
        </div>
      </div>
    </footer>
  );
}

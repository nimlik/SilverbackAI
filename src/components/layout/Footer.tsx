export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full backdrop-blur-md bg-transparent">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between text-sm">
        <div className="text-white bold text-sm">© 2025 silverback ai</div>
        <div className="text-white bold text-sm align-right">contact@silverbackai.io</div> 
          {/*<a
            href="/privacy"
            className="text-white hover:text-sora-primary transition-colors"
          >
            privacy
          </a>*/}
      </div>
    </footer>
  );
}
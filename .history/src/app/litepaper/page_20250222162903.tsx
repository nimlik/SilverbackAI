import LitepaperContent from "@/components/Litepaper/Content";

export default function LitepaperPage() {
  return (
    <div className="flex min-h-full items-center justify-center py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sora-neutral/70 backdrop-blur-md rounded-lg p-8">
          <h1 className="text-xl font-bold mb-8">Litepaper</h1>
          <LitepaperContent />
        </div>
      </div>
    </div>
  );
}

// app/cognitive-hierarchy/page.tsx
import Image from 'next/image';

export default function CognitiveHierarchy() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Cognitive Architecture Hierarchy
      </h1>
      
            {/* Main Image */}
      <div className="mb-8 border rounded-lg shadow-lg overflow-hidden">
        <Image
          src="/cogmap.png" 
          alt="Cognitive Architecture Diagram"
          width={1200}
          height={800}
          className="object-contain"
        />
      </div>

      {/* Optional: Back link
        <div className="mt-8">
        <a 
          href="/litepaper" 
          className="font-bold text-lg text-white hover:underline flex justify-center items-center"        >
          Back to Litepaper
        </a>
      </div> */}
    </div>
  );
}
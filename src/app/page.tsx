import AnimatedDefinition from "@/components/AnimatedDefinition";

export default function Home() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center bg-sora-bg/50 backdrop-blur-md rounded-lg p-4">
          <AnimatedDefinition />
        </div>
      </div>
    </div>
  );
}

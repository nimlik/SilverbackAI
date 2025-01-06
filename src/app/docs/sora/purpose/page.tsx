import {
  Documentation,
  DocumentationSection,
} from "@/components/docs/Documentation";

export default function Purpose() {
  return (
    <div className="flex items-center justify-center min-h-full">
      <Documentation
        title="Purpose"
        description="Sora Labs is a research and development company focused on creating innovative solutions for the future."
      >
        <DocumentationSection title="Test">
          <p>
            Sora Labs is a research and development company focused on creating
            innovative solutions for the future.
          </p>
        </DocumentationSection>
      </Documentation>
    </div>
  );
}

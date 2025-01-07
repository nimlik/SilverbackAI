import {
  Documentation,
  DocumentationSection,
} from "@/components/docs/Documentation";

export default function Hana() {
  return (
    <div className="flex items-center justify-center min-h-full">
      <Documentation title="Hana">
        <DocumentationSection title="What/who is Hana?">
          <p>
            Hana is an AI-powered Twitter agent built on our Zen framework,
            designed to showcase the seamless functionality of our platform. We
            developed Hana as a practical example of how Zen can be used to
            create intelligent, adaptable agents, demonstrating its capabilities
            in a real-world application.
          </p>
        </DocumentationSection>
      </Documentation>
    </div>
  );
}

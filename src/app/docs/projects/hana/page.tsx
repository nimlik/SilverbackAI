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
          <p className="mt-4">
            Hana will also leverage our Toolkit to enhance its capabilities,
            allowing for more sophisticated interactions and demonstrating the
            power of our integrated solutions.
          </p>
        </DocumentationSection>

        <DocumentationSection title="Development Timeline">
          <p>
            While Zen provides a plug-and-play framework for building AI agents,
            Hana&apos;s development timeline extends beyond basic
            implementation. This is because we&apos;re focusing on several
            critical aspects:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <strong>Toolkit Integration:</strong> Developing and implementing
              custom tools that allow Hana to:
              <ul className="list-disc pl-6 mt-1">
                <li>Analyze Twitter trends and conversations</li>
                <li>Analyze market data</li>
                <li>Interact with the Solana blockchain</li>
                <li>And much more!</li>
              </ul>
            </li>
            <li>
              <strong>Safety Measures:</strong> Implementing robust safety
              protocols and content filtering to maintain responsible AI
              interactions.
            </li>
            <li>
              <strong>Platform Integration:</strong> Developing and testing
              Twitter-specific features while ensuring compliance with platform
              policies and rate limits.
            </li>
          </ul>
          <p className="mt-4">
            <a
              href="https://github.com/soralabs/hana"
              className="text-sora-accent hover:text-sora-secondary underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </p>
        </DocumentationSection>
      </Documentation>
    </div>
  );
}

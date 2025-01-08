import {
  Documentation,
  DocumentationSection,
} from "@/components/docs/Documentation";

export default function Docs() {
  return (
    <div className="flex items-center justify-center min-h-full">
      <Documentation title="Overview">
        <p>
          Hi, we&apos;re Sora Labs, an organization focused on AI in the Solana
          ecosystem. We are building products that leverage the power of AI to
          create new experiences and opportunities for developers and users.
        </p>
        <p>
          Our main product is Zen, an open-source AI conversation framework
          built in Go and designed to make powerful and easy to build systems.
          You could also call it an AI agent framework. We also have Hana, an
          agent using our Zen framework that&apos;s currently active on Twitter.
        </p>
        <p>
          We&apos;re also developing a toolkit for building AI related tools in
          Solana, which we are and will be actively working on.
        </p>
        <DocumentationSection title="Open Source">
          <p>
            As discussed in our whitepaper, we truly believe in
            decentralization, so we will be open sourcing all of our projects,
            not just our products.
          </p>
          <p>
            This means that even this website you&apos;re reading is{" "}
            <a
              href="https://github.com/sora-labs/sora-website"
              className="text-sora-accent hover:text-sora-primary/80 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              open sourced
            </a>
            .
          </p>
        </DocumentationSection>
      </Documentation>
    </div>
  );
}

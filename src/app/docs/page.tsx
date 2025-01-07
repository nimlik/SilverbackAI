import { Documentation } from "@/components/docs/Documentation";

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
          We&apos;re also working on a toolkit for building AI agents in Solana,
          which we are and will be actively working on.
        </p>
      </Documentation>
    </div>
  );
}

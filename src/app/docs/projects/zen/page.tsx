import {
  Documentation,
  DocumentationSection,
} from "@/components/docs/Documentation";

export default function Zen() {
  return (
    <div className="flex items-center justify-center min-h-full">
      <Documentation title="Zen">
        <DocumentationSection title="What is Zen?">
          <p>
            Zen is a highly adaptable AI conversation engine built in Go,
            designed to make building agent chat systems easy and flexible.
          </p>
        </DocumentationSection>
        <DocumentationSection title="Features">
          <p>Some of Zen&apos;s features include:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <strong>Mix and Match Components:</strong> Like building with
              LEGO®, you can snap different pieces together. Need to add
              something new? Just plug it in without breaking what you&apos;ve
              already built.
            </li>
            <li>
              <strong>Works with Different AI Models:</strong> It supports
              multiple AI providers, like OpenAI or your own custom models.
            </li>
            <li>
              <strong>Runs Anywhere:</strong> Whether it&apos;s a website, app,
              or other platforms, Zen manages conversations across them all.
            </li>
            <li>
              <strong>Tailored Chat Behaviors:</strong> Want your AI to speak in
              Shakespeare quotes? Or maybe keep things professional? Zen lets
              you shape conversations exactly how you want them.
            </li>
            <li>
              <strong>Remembers Everything Important:</strong> Using smart
              storage systems, Zen keeps track of conversations in a way that
              helps it give better, more contextual responses - just like a good
              friend would.
            </li>
          </ul>
        </DocumentationSection>
      </Documentation>
    </div>
  );
}

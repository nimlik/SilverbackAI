export default function Privacy() {
  const lastUpdated = new Date("2024-12-24").toLocaleDateString();

  return (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sora-neutral/95 backdrop-blur-md rounded-lg p-8">
          <h1 className="text-xl font-bold mb-8">Privacy Policy</h1>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-lg font-semibold mb-3">
                1. Information We Collect
              </h2>
              <p className="text-sm">
                We collect minimal information necessary for the operation of
                our services. This may include:
              </p>
              <ul className="list-disc ml-6 mt-2 text-sm">
                <li>Usage data and analytics</li>
                <li>
                  Technical information such as browser type and device
                  information
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">
                2. How We Use Information
              </h2>
              <p className="text-sm">We use the collected information to:</p>
              <ul className="list-disc ml-6 mt-2 text-sm">
                <li>Improve our services and user experience</li>
                <li>Analyze usage patterns and optimize performance</li>
                <li>Maintain the security of our platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">3. Data Protection</h2>
              <p className="text-sm">
                We implement appropriate technical and organizational measures
                to ensure the security of your data.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">4. Contact</h2>
              <p className="text-sm">
                For privacy-related inquiries, please contact us at
                privacy@soralabs.app
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">5. Updates</h2>
              <p className="text-sm">
                This privacy policy may be updated periodically. Last updated:{" "}
                {lastUpdated}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

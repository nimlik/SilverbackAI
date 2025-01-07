export interface DocumentationProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export interface DocumentationSectionProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export function DocumentationSection({
  title,
  description,
  children,
}: DocumentationSectionProps) {
  return (
    <section className="space-y-4">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        {description && <p className="text-sm text-gray-600">{description}</p>}
      </div>
      <div className="space-y-4 text-sm text-gray-700">{children}</div>
    </section>
  );
}

export function Documentation({
  title,
  description,
  children,
}: DocumentationProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-xl font-bold text-gray-900">{title}</h1>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
      <div className="space-y-8">{children}</div>
    </div>
  );
}

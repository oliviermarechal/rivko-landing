interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)]">{title}</h1>
        <p className="mt-2 text-[var(--text-secondary)]">
          Derniere mise a jour : {lastUpdated}
        </p>
      </div>
      <div className="legal-content">
        {children}
      </div>
    </div>
  );
}

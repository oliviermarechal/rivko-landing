import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* 404 illustration */}
        <div className="relative mb-8">
          <span className="text-[150px] font-bold text-[var(--primary-muted)] leading-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-[var(--primary)] rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-[var(--foreground)] mb-4">
          Page introuvable
        </h1>
        <p className="text-[var(--text-secondary)] mb-8">
          Oups ! Cette page semble avoir ete resiliee... ou n&apos;existe tout simplement pas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-[var(--primary)] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[var(--primary-dark)] transition-colors"
          >
            Retour a l&apos;accueil
          </Link>
          <Link
            href="/guides"
            className="bg-[var(--surface-secondary)] text-[var(--foreground)] px-6 py-3 rounded-xl font-semibold border border-[var(--border)] hover:border-[var(--primary)] transition-colors"
          >
            Voir les guides
          </Link>
        </div>

        {/* Suggestions */}
        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <p className="text-sm text-[var(--text-tertiary)] mb-4">
            Vous cherchez peut-etre :
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link
              href="/guides/resilier-netflix"
              className="text-sm text-[var(--primary)] hover:underline"
            >
              Resilier Netflix
            </Link>
            <span className="text-[var(--border)]">•</span>
            <Link
              href="/guides/resilier-spotify"
              className="text-sm text-[var(--primary)] hover:underline"
            >
              Resilier Spotify
            </Link>
            <span className="text-[var(--border)]">•</span>
            <Link
              href="/blog"
              className="text-sm text-[var(--primary)] hover:underline"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--surface-secondary)] border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[var(--primary)] rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <span className="font-bold text-xl text-[var(--foreground)]">Rivko</span>
            </Link>
            <p className="text-[var(--text-secondary)] text-sm max-w-xs">
              L&apos;application qui vous aide a garder le controle sur vos abonnements.
            </p>
          </div>

          {/* Guides */}
          <div>
            <h3 className="font-semibold text-[var(--foreground)] mb-4">Guides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/guides/resilier-netflix"
                  className="text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
                >
                  Resilier Netflix
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/resilier-spotify"
                  className="text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
                >
                  Resilier Spotify
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/resilier-amazon-prime"
                  className="text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
                >
                  Resilier Amazon Prime
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="text-[var(--primary)] hover:underline transition-colors"
                >
                  Tous les guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="font-semibold text-[var(--foreground)] mb-4">Ressources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/blog"
                  className="text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/comparatifs/application-gestion-abonnements"
                  className="text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
                >
                  Comparatif apps
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-[var(--foreground)] mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/confidentialite"
                  className="text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
                >
                  Confidentialite
                </Link>
              </li>
              <li>
                <Link
                  href="/conditions-utilisation"
                  className="text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
                >
                  CGU
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
                >
                  Mentions legales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[var(--text-tertiary)] text-sm">
            © {currentYear} Rivko. Tous droits reserves.
          </p>
          <div className="flex items-center gap-4">
            {/* App Store badge placeholder */}
            <Link
              href="#"
              className="opacity-70 hover:opacity-100 transition-opacity"
              aria-label="Telecharger sur l'App Store"
            >
              <div className="h-10 px-4 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white text-xs">App Store</span>
              </div>
            </Link>
            {/* Play Store badge placeholder */}
            <Link
              href="#"
              className="opacity-70 hover:opacity-100 transition-opacity"
              aria-label="Telecharger sur Google Play"
            >
              <div className="h-10 px-4 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white text-xs">Google Play</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

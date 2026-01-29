import Link from "next/link";
import { ReportErrorButton } from "./ReportErrorButton";

interface ArticleLayoutProps {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  children: React.ReactNode;
  isGuide?: boolean;
  guideSlug?: string;
}

export function ArticleLayout({
  title,
  description,
  publishedAt,
  updatedAt,
  readingTime,
  children,
  isGuide = false,
  guideSlug,
}: ArticleLayoutProps) {
  const breadcrumbSection = isGuide ? "Guides" : "Blog";
  const breadcrumbHref = isGuide ? "/guides" : "/blog";

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
          <li>
            <Link href="/" className="hover:text-[var(--primary)]">
              Accueil
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href={breadcrumbHref} className="hover:text-[var(--primary)]">
              {breadcrumbSection}
            </Link>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] leading-tight">
          {title}
        </h1>
        <p className="mt-4 text-xl text-[var(--text-secondary)]">{description}</p>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[var(--text-tertiary)]">
          <time dateTime={publishedAt}>
            Publie le {new Date(publishedAt).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          {updatedAt && (
            <span>
              · Mis a jour le {new Date(updatedAt).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          )}
          <span>· {readingTime} de lecture</span>
        </div>
      </header>

      {/* Content */}
      <div className="article-content">{children}</div>

      {/* Guide-specific: Report error button and disclaimer */}
      {isGuide && guideSlug && (
        <>
          <ReportErrorButton
            pageTitle={title}
            pageUrl={`https://rivko.app/guides/${guideSlug}`}
          />
          <div className="mt-6 p-4 bg-[var(--surface-secondary)] rounded-xl border border-[var(--border)]">
            <p className="text-xs text-[var(--text-tertiary)]">
              <strong>Avertissement :</strong> Ce guide est fourni a titre informatif uniquement.
              Les procedures de resiliation peuvent changer a tout moment. Rivko n&apos;est
              pas affilie aux services mentionnes et ne peut garantir l&apos;exactitude des
              informations. Consultez toujours le site officiel du service pour les
              instructions les plus recentes.
            </p>
          </div>
        </>
      )}

      {/* CTA */}
      <div className="mt-16 p-8 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] rounded-2xl text-center">
        <h2 className="text-2xl font-bold text-white">
          Ne laissez plus vos abonnements vous echapper
        </h2>
        <p className="mt-2 text-white/80">
          Telechargez Rivko gratuitement et reprenez le controle.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#telecharger"
            className="inline-flex items-center justify-center gap-2 bg-white text-[var(--primary)] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            Telecharger l&apos;app
          </Link>
        </div>
      </div>

      {/* Related articles placeholder */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
          Articles similaires
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/blog/trop-abonnements"
            className="p-6 bg-[var(--surface)] rounded-xl border border-[var(--border)] hover:border-[var(--primary)] transition-colors"
          >
            <h3 className="font-semibold text-[var(--foreground)]">
              Trop d&apos;abonnements ? Comment reprendre le controle
            </h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Decouvrez comment identifier et gerer efficacement tous vos abonnements.
            </p>
          </Link>
          <Link
            href="/guides/comment-suivre-abonnements"
            className="p-6 bg-[var(--surface)] rounded-xl border border-[var(--border)] hover:border-[var(--primary)] transition-colors"
          >
            <h3 className="font-semibold text-[var(--foreground)]">
              Comment suivre tous ses abonnements facilement
            </h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Guide pratique pour ne plus perdre de vue vos depenses recurrentes.
            </p>
          </Link>
        </div>
      </div>
    </article>
  );
}

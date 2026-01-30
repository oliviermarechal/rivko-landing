import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Conseils pour gerer vos abonnements",
  description:
    "Conseils, astuces et guides pour mieux gerer vos abonnements, eviter les pieges et economiser de l'argent.",
  alternates: {
    canonical: "https://www.rivko.app/blog",
  },
};

const ARTICLES = [
  {
    slug: "oublier-resilier-abonnement",
    title: "J'ai oublie de resilier mon abonnement : que faire ?",
    description:
      "Vous avez oublie de resilier un abonnement et avez ete preleve ? Voici les recours possibles et comment eviter que ca se reproduise.",
    category: "Conseils",
    readingTime: "5 min",
    publishedAt: "2025-01-15",
  },
  {
    slug: "trop-abonnements",
    title: "Trop d'abonnements ? Comment reprendre le controle",
    description:
      "Netflix, Spotify, salle de sport... Les abonnements s'accumulent. Decouvrez comment faire le tri et optimiser vos depenses.",
    category: "Conseils",
    readingTime: "6 min",
    publishedAt: "2025-01-10",
  },
  {
    slug: "periode-essai-oubliee",
    title: "Periode d'essai oubliee : eviter le piege",
    description:
      "Les periodes d'essai gratuites peuvent vite devenir payantes. Apprenez a les suivre pour ne plus vous faire avoir.",
    category: "Conseils",
    readingTime: "4 min",
    publishedAt: "2025-01-08",
  },
  {
    slug: "combien-abonnements-francais",
    title: "Combien d'abonnements ont les Francais en moyenne ?",
    description:
      "Statistiques et analyse des habitudes d'abonnement des Francais. Ou vous situez-vous par rapport a la moyenne ?",
    category: "Etude",
    readingTime: "7 min",
    publishedAt: "2025-01-05",
  },
  {
    slug: "comment-ne-plus-oublier-resilier",
    title: "Comment ne plus oublier de resilier un abonnement ?",
    description:
      "5 methodes efficaces pour ne plus jamais oublier une echeance d'abonnement et eviter les mauvaises surprises.",
    category: "Conseils",
    readingTime: "5 min",
    publishedAt: "2025-01-03",
  },
  {
    slug: "pourquoi-suivre-abonnements",
    title: "Pourquoi suivre ses abonnements est important ?",
    description:
      "Les abonnements representent une part croissante de nos budgets. Voici pourquoi il est crucial de les suivre.",
    category: "Conseils",
    readingTime: "4 min",
    publishedAt: "2025-01-01",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
          Blog Rivko
        </h1>
        <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
          Conseils, astuces et guides pour mieux gerer vos abonnements et reprendre
          le controle de vos depenses.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ARTICLES.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group bg-[var(--surface)] rounded-2xl border border-[var(--border)] overflow-hidden hover:border-[var(--primary)] transition-all hover:shadow-lg"
          >
            {/* Thumbnail placeholder */}
            <div className="aspect-video bg-gradient-to-br from-[var(--primary-muted)] to-[var(--surface)] flex items-center justify-center">
              <svg
                className="w-12 h-12 text-[var(--primary)] opacity-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-[var(--text-tertiary)] mb-3">
                <span className="bg-[var(--primary-muted)] text-[var(--primary)] px-2 py-0.5 rounded text-xs font-medium">
                  {article.category}
                </span>
                <span>·</span>
                <span>{article.readingTime}</span>
              </div>
              <h2 className="text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                {article.title}
              </h2>
              <p className="mt-2 text-[var(--text-secondary)] line-clamp-2">
                {article.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Guides Section */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">
          Guides de resiliation
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: "Netflix", slug: "resilier-netflix" },
            { name: "Spotify", slug: "resilier-spotify" },
            { name: "Amazon Prime", slug: "resilier-amazon-prime" },
            { name: "Disney+", slug: "resilier-disney-plus" },
            { name: "Canal+", slug: "resilier-canal-plus" },
            { name: "Salle de sport", slug: "resilier-salle-sport" },
          ].map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="p-4 bg-[var(--surface)] rounded-xl border border-[var(--border)] text-center hover:border-[var(--primary)] transition-colors"
            >
              <span className="text-sm font-medium text-[var(--foreground)]">
                Resilier {guide.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

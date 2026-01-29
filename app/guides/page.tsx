import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guides de resiliation - Comment resilier vos abonnements",
  description:
    "Guides pratiques pour resilier Netflix, Spotify, Amazon Prime, Disney+, Canal+, salle de sport et tous vos abonnements. Procedures pas a pas.",
  alternates: {
    canonical: "https://rivko.app/guides",
  },
};

const RESILIER_GUIDES = [
  {
    slug: "resilier-netflix",
    name: "Netflix",
    description: "Resilier Netflix sur le site, l'app ou via votre operateur",
    icon: "🎬",
  },
  {
    slug: "resilier-spotify",
    name: "Spotify",
    description: "Annuler Spotify Premium et garder vos playlists",
    icon: "🎵",
  },
  {
    slug: "resilier-amazon-prime",
    name: "Amazon Prime",
    description: "Se desabonner d'Amazon Prime Video et livraison",
    icon: "📦",
  },
  {
    slug: "resilier-disney-plus",
    name: "Disney+",
    description: "Resilier Disney+ avant le renouvellement",
    icon: "✨",
  },
  {
    slug: "resilier-canal-plus",
    name: "Canal+",
    description: "Procedure de resiliation Canal+ et ses offres",
    icon: "📺",
  },
];

const SPORT_GUIDES = [
  {
    slug: "resilier-salle-sport",
    name: "Guide general",
    description: "Loi Chatel, motifs legitimes et comparatif des preavis",
    isHub: true,
  },
  {
    slug: "resilier-basic-fit",
    name: "Basic-Fit",
    description: "Resiliation en ligne sur my.basic-fit.com ou par courrier",
  },
  {
    slug: "resilier-fitness-park",
    name: "Fitness Park",
    description: "Resiliation en club ou par courrier recommande",
  },
  {
    slug: "resilier-keep-cool",
    name: "Keep Cool",
    description: "Resiliation en ligne ou en club, preavis 30 jours",
  },
  {
    slug: "resilier-neoness",
    name: "Neoness",
    description: "Resiliation depuis l'espace client en ligne",
  },
  {
    slug: "resilier-orange-bleue",
    name: "L'Orange Bleue",
    description: "Resiliation par courrier recommande obligatoire",
  },
  {
    slug: "lettre-resiliation-salle-sport",
    name: "Lettres types",
    description: "Modeles gratuits : standard, motif legitime, loi Chatel",
    isLetter: true,
  },
];

const GESTION_GUIDES = [
  {
    slug: "comment-suivre-abonnements",
    name: "Suivre ses abonnements",
    description: "Methodes et outils pour tracker tous vos abonnements",
  },
  {
    slug: "budget-abonnements-mensuel",
    name: "Calculer son budget",
    description: "Comment calculer et optimiser son budget abonnements",
  },
  {
    slug: "reduire-depenses-abonnements",
    name: "Reduire ses depenses",
    description: "7 astuces pour economiser sur vos abonnements",
  },
  {
    slug: "detecter-abonnements-inutiles",
    name: "Detecter les abonnements inutiles",
    description: "Identifier et supprimer les abonnements non utilises",
  },
];

const CATEGORIE_GUIDES = [
  {
    slug: "gerer-abonnements-streaming",
    name: "Streaming video",
    description: "Gerer Netflix, Prime, Disney+ et tous vos services video",
  },
  {
    slug: "abonnements-musique",
    name: "Musique",
    description: "Spotify, Deezer, Apple Music : optimiser vos abonnements",
  },
];

export default function GuidesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
          Guides pratiques
        </h1>
        <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
          Tutoriels pas a pas pour resilier vos abonnements et mieux gerer vos
          depenses recurrentes.
        </p>
      </div>

      {/* Guides de resiliation streaming */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
          Resilier streaming et media
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESILIER_GUIDES.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group p-6 bg-[var(--surface)] rounded-2xl border border-[var(--border)] hover:border-[var(--primary)] transition-all hover:shadow-lg"
            >
              <div className="text-4xl mb-4">{guide.icon}</div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                Resilier {guide.name}
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                {guide.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Guides salles de sport */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">💪</span>
          <h2 className="text-2xl font-bold text-[var(--foreground)]">
            Resilier sa salle de sport
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SPORT_GUIDES.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className={`group p-5 rounded-xl border transition-all hover:shadow-md ${
                guide.isHub
                  ? "bg-[var(--primary-muted)] border-[var(--primary)] col-span-1 md:col-span-2 lg:col-span-1"
                  : guide.isLetter
                  ? "bg-amber-50 border-amber-200 hover:border-amber-400"
                  : "bg-[var(--surface)] border-[var(--border)] hover:border-[var(--primary)]"
              }`}
            >
              <h3 className={`font-semibold transition-colors ${
                guide.isHub
                  ? "text-[var(--primary)]"
                  : guide.isLetter
                  ? "text-amber-700 group-hover:text-amber-800"
                  : "text-[var(--foreground)] group-hover:text-[var(--primary)]"
              }`}>
                {guide.isLetter ? "📝 " : ""}{guide.name}
              </h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                {guide.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Guides de gestion */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
          Gerer ses abonnements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GESTION_GUIDES.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group p-6 bg-[var(--surface)] rounded-2xl border border-[var(--border)] hover:border-[var(--primary)] transition-all"
            >
              <h3 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                {guide.name}
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                {guide.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Guides par categorie */}
      <section>
        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
          Par categorie
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CATEGORIE_GUIDES.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group p-6 bg-[var(--surface)] rounded-2xl border border-[var(--border)] hover:border-[var(--primary)] transition-all"
            >
              <h3 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                {guide.name}
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                {guide.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

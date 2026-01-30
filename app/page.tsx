import Link from "next/link";
import { PricingSection } from "@/components/PricingSection";

const FEATURES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: "Rappels intelligents",
    description: "Recevez des notifications avant chaque echeance. Configurez jusqu'a 3 rappels par abonnement pour ne plus jamais oublier.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Periodes d'essai",
    description: "Suivez vos periodes d'essai et soyez alerte avant qu'elles ne se transforment en abonnements payants.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Statistiques claires",
    description: "Visualisez vos depenses par categorie et suivez l'evolution de votre budget abonnements mois apres mois.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Theme personnalisable",
    description: "Mode sombre, choix de couleurs... Personnalisez l'application selon vos preferences.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Donnees locales",
    description: "Vos donnees restent sur votre appareil. Pas de compte a creer, pas de synchronisation cloud obligatoire.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Simple et rapide",
    description: "Interface epuree, ajout d'abonnement en quelques secondes. L'app qui va a l'essentiel.",
  },
];


export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-muted)] via-transparent to-transparent opacity-50" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--foreground)] tracking-tight">
              Gardez le controle sur{" "}
              <span className="text-[var(--primary)]">vos abonnements</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              Netflix, Spotify, salle de sport... En moyenne, les Francais depensent
              <strong className="text-[var(--foreground)]"> 200€/mois </strong>
              en abonnements. Rivko vous aide a ne plus payer pour ce que vous n&apos;utilisez pas.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#telecharger"
                className="bg-[var(--primary)] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[var(--primary-dark)] transition-colors shadow-lg shadow-[var(--primary)]/25"
              >
                Telecharger gratuitement
              </Link>
              <Link
                href="#fonctionnalites"
                className="bg-[var(--surface)] text-[var(--foreground)] px-8 py-4 rounded-xl font-semibold text-lg border border-[var(--border)] hover:border-[var(--primary)] transition-colors"
              >
                Decouvrir
              </Link>
            </div>
            <p className="mt-4 text-sm text-[var(--text-tertiary)]">
              Disponible sur iOS et Android • Gratuit
            </p>
          </div>

          {/* App screenshot */}
          <div className="mt-16 relative">
            <div className="mx-auto max-w-xs sm:max-w-sm">
              <div className="relative">
                {/* Phone frame effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/20 to-transparent rounded-[2.5rem] blur-2xl" />
                <img
                  src="/home-screen.png"
                  alt="Rivko - Tableau de bord avec vos abonnements"
                  className="relative rounded-[2rem] shadow-2xl border-4 border-gray-800"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
              Combien d&apos;abonnements avez-vous oublie ?
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">
              Periode d&apos;essai non resiliee, abonnement a un service que vous n&apos;utilisez plus,
              renouvellement automatique inattendu... Ces situations vous parlent ?
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-[var(--primary)]">73%</div>
              <p className="mt-2 text-[var(--text-secondary)]">
                des Francais ont deja oublie de resilier un abonnement
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-[var(--primary)]">12</div>
              <p className="mt-2 text-[var(--text-secondary)]">
                abonnements en moyenne par foyer en France
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-[var(--primary)]">45€</div>
              <p className="mt-2 text-[var(--text-secondary)]">
                gaspilles en moyenne par mois en abonnements non utilises
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="fonctionnalites" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
              Tout ce qu&apos;il vous faut pour reprendre le controle
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">
              Une application simple et efficace pour ne plus jamais oublier une echeance.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className="bg-[var(--surface)] p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--primary)] transition-colors"
              >
                <div className="w-12 h-12 bg-[var(--primary-muted)] rounded-xl flex items-center justify-center text-[var(--primary)]">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[var(--foreground)]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[var(--text-secondary)]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Feature Highlight */}
      <section className="py-20 bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
                Visualisez vos depenses en un coup d&apos;oeil
              </h2>
              <p className="mt-4 text-lg text-[var(--text-secondary)]">
                Graphiques clairs, repartition par categorie, evolution mensuelle...
                Comprenez enfin ou passe votre argent chaque mois.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--foreground)]">Repartition par categorie</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--foreground)]">Evolution mois par mois</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--foreground)]">Total mensuel et annuel</span>
                </li>
              </ul>
            </div>
            {/* Screenshot */}
            <div className="relative">
              <div className="mx-auto max-w-xs">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/10 to-transparent rounded-[2.5rem] blur-2xl" />
                <img
                  src="/stats-screen.png"
                  alt="Rivko - Statistiques et graphiques de vos abonnements"
                  className="relative rounded-[2rem] shadow-xl border-4 border-gray-800"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Feature Highlight */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Screenshot - Left on desktop */}
            <div className="relative order-2 lg:order-1">
              <div className="mx-auto max-w-xs">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/10 to-transparent rounded-[2.5rem] blur-2xl" />
                <img
                  src="/settings-screen.png"
                  alt="Rivko - Personnalisation de l'apparence"
                  className="relative rounded-[2rem] shadow-xl border-4 border-gray-800"
                />
              </div>
            </div>
            {/* Text - Right on desktop */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
                Une app a votre image
              </h2>
              <p className="mt-4 text-lg text-[var(--text-secondary)]">
                Personnalisez l&apos;apparence selon vos preferences. Mode sombre pour
                le soir, couleurs au choix, l&apos;app s&apos;adapte a vous.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--foreground)]">Mode clair ou sombre</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--foreground)]">Couleur d&apos;accentuation personnalisable</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--foreground)]">Interface epuree et intuitive</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Premium Feature Highlight */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <span className="inline-block text-sm font-semibold text-[var(--primary)] bg-[var(--primary-muted)] px-3 py-1 rounded-full mb-4">
                Premium
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
                Passez au niveau superieur
              </h2>
              <p className="mt-4 text-lg text-[var(--text-secondary)]">
                Debloquez toutes les fonctionnalites et gerez vos abonnements
                sans aucune limite. Un investissement qui se rentabilise des le premier mois.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--foreground)]">Abonnements illimites</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--foreground)]">Jusqu&apos;a 3 rappels par abonnement</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[var(--foreground)]">Aucune publicite</span>
                </li>
              </ul>
            </div>
            {/* Screenshot */}
            <div className="relative">
              <div className="mx-auto max-w-xs">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/10 to-transparent rounded-[2.5rem] blur-2xl" />
                <img
                  src="/premium-screen.png"
                  alt="Rivko Premium - Fonctionnalites avancees"
                  className="relative rounded-[2rem] shadow-xl border-4 border-gray-800"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guides de resiliation - Internal Links */}
      <section className="py-16 bg-[var(--surface-secondary)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)]">
              Guides de resiliation
            </h2>
            <p className="mt-3 text-[var(--text-secondary)]">
              Procedures pas a pas pour resilier vos abonnements
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Netflix", slug: "resilier-netflix", icon: "🎬" },
              { name: "Spotify", slug: "resilier-spotify", icon: "🎵" },
              { name: "Amazon Prime", slug: "resilier-amazon-prime", icon: "📦" },
              { name: "Disney+", slug: "resilier-disney-plus", icon: "✨" },
              { name: "Canal+", slug: "resilier-canal-plus", icon: "📺" },
              { name: "Salle de sport", slug: "resilier-salle-sport", icon: "💪" },
            ].map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="p-4 bg-white rounded-xl border border-[var(--border)] text-center hover:border-[var(--primary)] hover:shadow-md transition-all group"
              >
                <span className="text-2xl mb-2 block">{guide.icon}</span>
                <span className="text-sm font-medium text-[var(--foreground)] group-hover:text-[var(--primary)]">
                  {guide.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/guides"
              className="text-[var(--primary)] font-medium hover:underline"
            >
              Voir tous les guides →
            </Link>
          </div>
        </div>
      </section>

      {/* Blog / Conseils - Internal Links */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)]">
              Conseils pour mieux gerer vos abonnements
            </h2>
            <p className="mt-3 text-[var(--text-secondary)]">
              Astuces et bonnes pratiques pour reprendre le controle
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "J'ai oublie de resilier mon abonnement : que faire ?",
                description: "Recours possibles et comment eviter que ca se reproduise.",
                slug: "oublier-resilier-abonnement",
                category: "Conseils",
              },
              {
                title: "Trop d'abonnements ? Comment reprendre le controle",
                description: "Faites le tri et optimisez vos depenses recurrentes.",
                slug: "trop-abonnements",
                category: "Conseils",
              },
              {
                title: "Periode d'essai oubliee : eviter le piege",
                description: "Ne vous faites plus avoir par les renouvellements automatiques.",
                slug: "periode-essai-oubliee",
                category: "Conseils",
              },
              {
                title: "Combien d'abonnements ont les Francais ?",
                description: "Statistiques et comparaison avec la moyenne nationale.",
                slug: "combien-abonnements-francais",
                category: "Etude",
              },
              {
                title: "Meilleure app pour gerer ses abonnements",
                description: "Comparatif des applications de suivi d'abonnements.",
                slug: "../comparatifs/application-gestion-abonnements",
                category: "Comparatif",
              },
              {
                title: "Resilier Netflix : guide complet",
                description: "Procedure detaillee selon votre mode de souscription.",
                slug: "../guides/resilier-netflix",
                category: "Guide",
              },
            ].map((article, index) => (
              <Link
                key={index}
                href={article.slug.startsWith("..") ? article.slug.replace("..", "") : `/blog/${article.slug}`}
                className="p-6 bg-white rounded-xl border border-[var(--border)] hover:border-[var(--primary)] hover:shadow-md transition-all group"
              >
                <span className="text-xs font-medium text-[var(--primary)] bg-[var(--primary-muted)] px-2 py-1 rounded">
                  {article.category}
                </span>
                <h3 className="mt-3 font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  {article.description}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-[var(--surface-secondary)] text-[var(--foreground)] px-6 py-3 rounded-lg font-medium hover:bg-[var(--border)] transition-colors"
            >
              Tous les articles
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="telecharger" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Pret a reprendre le controle ?
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Telechargez Rivko gratuitement et commencez a economiser des aujourd&apos;hui.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              {/* App Store */}
              <div className="relative">
                <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded-full z-10">
                  Bientot
                </span>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center gap-3 bg-black/80 text-white px-6 py-3 rounded-xl cursor-not-allowed"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-80">Telecharger sur</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </Link>
              </div>
              {/* Play Store */}
              <div className="relative">
                <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded-full z-10">
                  Bientot
                </span>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center gap-3 bg-black/80 text-white px-6 py-3 rounded-xl cursor-not-allowed"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-80">Disponible sur</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Rivko est-il gratuit ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui, Rivko est gratuit avec jusqu'a 5 abonnements et 1 rappel par abonnement. Une version Premium est disponible pour les utilisateurs qui souhaitent gerer plus d'abonnements et avoir plus de rappels.",
                },
              },
              {
                "@type": "Question",
                name: "Mes donnees sont-elles securisees ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui, vos donnees restent stockees localement sur votre appareil. Nous ne collectons pas vos informations d'abonnements sur nos serveurs.",
                },
              },
              {
                "@type": "Question",
                name: "Comment fonctionnent les rappels ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Vous pouvez configurer jusqu'a 3 rappels par abonnement (1 en version gratuite). Chaque rappel peut etre programme quelques heures, jours ou semaines avant l'echeance.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}

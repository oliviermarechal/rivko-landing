import { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "J'ai oublie de resilier mon abonnement : que faire ?",
  description:
    "Vous avez oublie de resilier un abonnement et avez ete preleve ? Decouvrez vos recours, comment vous faire rembourser et eviter que ca se reproduise.",
  keywords: [
    "oublier resilier abonnement",
    "oublie annuler abonnement",
    "remboursement abonnement oublie",
    "prelevement abonnement non resilie",
    "resilier abonnement trop tard",
  ],
  alternates: {
    canonical: "https://www.rivko.app/blog/oublier-resilier-abonnement",
  },
  openGraph: {
    title: "J'ai oublie de resilier mon abonnement : que faire ?",
    description:
      "Recours possibles, remboursement et solutions pour ne plus oublier.",
    type: "article",
    publishedTime: "2025-01-15",
    authors: ["Rivko"],
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="J'ai oublie de resilier mon abonnement : que faire ?"
      description="Vous avez oublie de resilier un abonnement et avez ete preleve ? Voici vos recours et comment eviter que ca se reproduise."
      publishedAt="2025-01-15"
      readingTime="5 min"
    >
      <p>
        Ca nous est tous arrive : on souscrit a un essai gratuit ou un abonnement
        &quot;temporaire&quot;, et quelques mois plus tard, on se rend compte qu&apos;on
        continue de payer pour un service qu&apos;on n&apos;utilise plus. <strong>En France,
        73% des consommateurs</strong> ont deja oublie de resilier un abonnement a temps.
      </p>

      <p>
        Si vous etes dans cette situation, pas de panique. Voici ce que vous pouvez faire
        pour limiter les degats et surtout, pour que ca n&apos;arrive plus.
      </p>

      <h2>1. Resilier immediatement l&apos;abonnement</h2>

      <p>
        Meme si vous avez ete preleve, la premiere chose a faire est de <strong>resilier
        l&apos;abonnement</strong> pour stopper les prochains prelevements. La plupart des services
        permettent de resilier en ligne :
      </p>

      <ul>
        <li>Connectez-vous a votre compte sur le site/app du service</li>
        <li>Cherchez &quot;Gerer mon abonnement&quot; ou &quot;Parametres du compte&quot;</li>
        <li>Suivez la procedure de resiliation</li>
        <li>Conservez une preuve (capture d&apos;ecran, email de confirmation)</li>
      </ul>

      <div className="highlight-box">
        <p>
          <strong>Conseil :</strong> Pour les abonnements souscrits via l&apos;App Store ou
          Google Play, la resiliation se fait dans les parametres de votre telephone,
          pas dans l&apos;application elle-meme.
        </p>
      </div>

      <h2>2. Demander un remboursement</h2>

      <p>
        Une fois l&apos;abonnement resilie, vous pouvez tenter d&apos;obtenir un remboursement.
        Vos chances dependent de plusieurs facteurs :
      </p>

      <h3>Remboursement aupres du service</h3>

      <p>
        Contactez le service client et expliquez votre situation. Beaucoup d&apos;entreprises
        acceptent de rembourser si :
      </p>

      <ul>
        <li>Vous n&apos;avez pas utilise le service pendant la periode facturee</li>
        <li>La demande est faite rapidement apres le prelevement</li>
        <li>C&apos;est votre premiere demande de ce type</li>
      </ul>

      <p>
        <strong>Netflix, Spotify, Amazon</strong> et la plupart des grands services de
        streaming sont generalement comprehensifs pour une premiere demande.
      </p>

      <h3>Remboursement via Apple/Google</h3>

      <p>
        Si l&apos;abonnement a ete souscrit via l&apos;App Store ou Google Play, vous pouvez
        demander un remboursement directement a Apple ou Google :
      </p>

      <ul>
        <li><strong>Apple :</strong> reportaproblem.apple.com</li>
        <li><strong>Google :</strong> play.google.com/store/account/orderhistory</li>
      </ul>

      <h3>Contestation aupres de votre banque</h3>

      <p>
        En dernier recours, vous pouvez contacter votre banque pour contester le
        prelevement. Attention, cette option peut entrainer la fermeture de votre compte
        chez le prestataire et doit etre utilisee avec precaution.
      </p>

      <h2>3. Verifier les conditions de resiliation</h2>

      <p>
        Certains abonnements ont des conditions specifiques qu&apos;il est important de connaitre :
      </p>

      <ul>
        <li><strong>Delai de preavis :</strong> certains services (salles de sport, telecom)
        exigent un preavis d&apos;1 a 3 mois</li>
        <li><strong>Engagement minimum :</strong> vous pouvez etre engage pour 12 ou 24 mois</li>
        <li><strong>Frais de resiliation :</strong> certains contrats prevoient des frais</li>
      </ul>

      <div className="highlight-box">
        <p>
          <strong>Bon a savoir :</strong> La loi Chatel oblige les operateurs a vous
          informer de la possibilite de resilier entre 3 mois et 1 mois avant la date
          de renouvellement. Si cette obligation n&apos;est pas respectee, vous pouvez
          resilier sans frais.
        </p>
      </div>

      <h2>4. Ne plus jamais oublier : les solutions</h2>

      <p>
        Pour eviter que cette situation se reproduise, plusieurs solutions s&apos;offrent a vous :
      </p>

      <h3>Utiliser une application de suivi</h3>

      <p>
        Des applications comme <strong>Rivko</strong> vous permettent de :
      </p>

      <ul>
        <li>Centraliser tous vos abonnements en un seul endroit</li>
        <li>Recevoir des rappels avant chaque echeance</li>
        <li>Suivre vos periodes d&apos;essai</li>
        <li>Visualiser vos depenses mensuelles</li>
      </ul>

      <h3>Creer des rappels dans votre calendrier</h3>

      <p>
        Si vous preferez une solution manuelle, ajoutez un rappel dans votre calendrier
        quelques jours avant chaque date de renouvellement.
      </p>

      <h3>Utiliser des cartes bancaires virtuelles</h3>

      <p>
        Certaines banques proposent des cartes virtuelles a usage unique. Pratique pour
        les essais gratuits : si vous oubliez de resilier, le prelevement echouera
        automatiquement.
      </p>

      <h2>5. Les erreurs a eviter</h2>

      <ul>
        <li>
          <strong>Ne pas faire opposition a la banque sans reflexion :</strong> cela peut
          vous blacklister chez le prestataire
        </li>
        <li>
          <strong>Attendre trop longtemps :</strong> les demandes de remboursement sont
          plus facilement acceptees si elles sont rapides
        </li>
        <li>
          <strong>Ne pas garder de traces :</strong> conservez toujours les emails et
          captures d&apos;ecran de vos demarches
        </li>
      </ul>

      <h2>Conclusion</h2>

      <p>
        Oublier de resilier un abonnement est frustrant, mais ce n&apos;est pas une fatalite.
        Avec les bons reflexes et les bons outils, vous pouvez non seulement recuperer
        votre argent dans certains cas, mais surtout vous assurer que ca n&apos;arrivera plus.
      </p>

      <p>
        La cle est l&apos;<strong>anticipation</strong> : plutot que de compter sur votre
        memoire, utilisez un outil qui vous rappellera les echeances importantes.
        C&apos;est exactement ce que fait <Link href="/" className="text-[var(--primary)]">Rivko</Link>.
      </p>

      {/* Schema.org FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "J'ai oublie de resilier mon abonnement : que faire ?",
            datePublished: "2025-01-15",
            author: {
              "@type": "Organization",
              name: "Rivko",
            },
            publisher: {
              "@type": "Organization",
              name: "Rivko",
              logo: {
                "@type": "ImageObject",
                url: "https://www.rivko.app/logo-blue.png",
              },
            },
          }),
        }}
      />
    </ArticleLayout>
  );
}

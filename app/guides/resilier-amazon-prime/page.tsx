import { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Comment resilier Amazon Prime : guide complet 2025",
  description:
    "Resilier votre abonnement Amazon Prime facilement. Procedure detaillee, remboursement possible, et ce que vous perdez en resiliant.",
  keywords: [
    "resilier amazon prime",
    "annuler amazon prime",
    "resiliation amazon prime",
    "se desabonner amazon prime",
    "arreter amazon prime",
  ],
  alternates: {
    canonical: "https://rivko.app/guides/resilier-amazon-prime",
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="Comment resilier Amazon Prime : guide complet 2025"
      description="Toutes les methodes pour resilier Amazon Prime et obtenir un remboursement."
      publishedAt="2025-01-20"
      readingTime="5 min"
      isGuide={true}
      guideSlug="resilier-amazon-prime"
    >
      <p>
        Amazon Prime offre de nombreux avantages (livraison gratuite, Prime Video,
        Prime Music...), mais a 69,90€/an, ce n&apos;est pas donne. Voici comment
        resilier si vous n&apos;en avez plus l&apos;utilite.
      </p>

      <h2>Resilier Amazon Prime sur le site web</h2>

      <ol>
        <li>Connectez-vous sur <strong>amazon.fr</strong></li>
        <li>Cliquez sur <strong>&quot;Compte et listes&quot;</strong> puis &quot;Votre compte&quot;</li>
        <li>Selectionnez <strong>&quot;Abonnement Prime&quot;</strong></li>
        <li>Cliquez sur <strong>&quot;Gerer mon abonnement&quot;</strong></li>
        <li>Selectionnez <strong>&quot;Mettre fin a l&apos;abonnement et aux avantages&quot;</strong></li>
        <li>Confirmez la resiliation</li>
      </ol>

      <div className="highlight-box">
        <p>
          <strong>Astuce :</strong> Amazon vous proposera des offres de retention
          (reduction, pause...). Si vous etes decide a partir, ignorez-les et
          continuez la procedure.
        </p>
      </div>

      <h2>Resilier depuis l&apos;application mobile</h2>

      <ol>
        <li>Ouvrez l&apos;application <strong>Amazon</strong></li>
        <li>Appuyez sur le menu (trois barres) puis sur votre nom</li>
        <li>Selectionnez <strong>&quot;Votre compte Prime&quot;</strong></li>
        <li>Appuyez sur <strong>&quot;Gerer l&apos;abonnement&quot;</strong></li>
        <li>Suivez les instructions pour resilier</li>
      </ol>

      <h2>Puis-je me faire rembourser ?</h2>

      <p>
        Bonne nouvelle : Amazon a une politique de remboursement assez genereuse.
      </p>

      <ul>
        <li>
          <strong>Si vous n&apos;avez pas utilise les avantages Prime</strong> depuis
          le renouvellement, vous pouvez obtenir un remboursement integral
        </li>
        <li>
          <strong>Si vous avez utilise Prime</strong>, vous pouvez quand meme
          demander un remboursement au prorata (partiel)
        </li>
        <li>
          <strong>Essai gratuit</strong> : resilier avant la fin = aucun prelevement
        </li>
      </ul>

      <h2>Ce que vous perdez en resiliant</h2>

      <table>
        <thead>
          <tr>
            <th>Avantage</th>
            <th>Impact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Livraison gratuite en 1 jour</td>
            <td>Perdu (livraison payante ou seuil de 25€)</td>
          </tr>
          <tr>
            <td>Prime Video</td>
            <td>Perdu</td>
          </tr>
          <tr>
            <td>Prime Music</td>
            <td>Perdu</td>
          </tr>
          <tr>
            <td>Prime Reading</td>
            <td>Perdu</td>
          </tr>
          <tr>
            <td>Photos illimitees</td>
            <td>Limite a 5 Go</td>
          </tr>
          <tr>
            <td>Offres Prime Day</td>
            <td>Plus d&apos;acces</td>
          </tr>
        </tbody>
      </table>

      <h2>Alternatives a Amazon Prime</h2>

      <ul>
        <li>
          <strong>Fnac+</strong> : 14,99€/an - Livraison gratuite Fnac/Darty
        </li>
        <li>
          <strong>Cdiscount a volonte</strong> : 29€/an - Livraison gratuite Cdiscount
        </li>
        <li>
          Pour le streaming : Netflix, Disney+ ou autres services dedies
        </li>
      </ul>

      <h2>Conseil : evaluez votre usage</h2>

      <p>
        Avant de resilier, verifiez combien de commandes Prime vous avez passees
        cette annee. Si vous commandez moins de 5-6 fois par an, Prime n&apos;est
        probablement pas rentable pour vous.
      </p>

      <p>
        Utilisez <strong>Rivko</strong> pour suivre la date de renouvellement
        et recevoir un rappel avant le prelevement automatique.
      </p>

      {/* Schema.org HowTo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Comment resilier Amazon Prime",
            description: "Guide pour resilier votre abonnement Amazon Prime",
            step: [
              {
                "@type": "HowToStep",
                name: "Connexion",
                text: "Connectez-vous sur amazon.fr",
              },
              {
                "@type": "HowToStep",
                name: "Acces au compte",
                text: "Allez dans Compte et listes > Votre compte > Abonnement Prime",
              },
              {
                "@type": "HowToStep",
                name: "Resiliation",
                text: "Cliquez sur Mettre fin a l'abonnement et confirmez",
              },
            ],
          }),
        }}
      />
    </ArticleLayout>
  );
}

import { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Comment resilier Disney+ : guide complet 2025",
  description:
    "Resilier votre abonnement Disney+ en quelques clics. Procedure selon votre mode de souscription et alternatives.",
  keywords: [
    "resilier disney plus",
    "annuler disney+",
    "resiliation disney plus",
    "se desabonner disney+",
    "arreter disney plus",
  ],
  alternates: {
    canonical: "https://www.rivko.app/guides/resilier-disney-plus",
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="Comment resilier Disney+ : guide complet 2025"
      description="Procedure pas a pas pour resilier Disney+ selon votre mode de souscription."
      publishedAt="2025-01-22"
      readingTime="4 min"
      isGuide={true}
      guideSlug="resilier-disney-plus"
    >
      <p>
        Disney+ propose du contenu Disney, Marvel, Star Wars et National Geographic.
        Mais si vous avez fait le tour du catalogue ou souhaitez reduire vos
        abonnements streaming, voici comment resilier.
      </p>

      <h2>Resilier Disney+ sur le site web</h2>

      <ol>
        <li>Connectez-vous sur <strong>disneyplus.com</strong></li>
        <li>Cliquez sur votre <strong>avatar</strong> en haut a droite</li>
        <li>Selectionnez <strong>&quot;Compte&quot;</strong></li>
        <li>Dans la section Abonnement, cliquez sur <strong>&quot;Disney+&quot;</strong></li>
        <li>Cliquez sur <strong>&quot;Annuler l&apos;abonnement&quot;</strong></li>
        <li>Confirmez l&apos;annulation</li>
      </ol>

      <div className="highlight-box">
        <p>
          <strong>Note :</strong> Vous conservez l&apos;acces jusqu&apos;a la fin de
          votre periode de facturation. Aucun remboursement au prorata.
        </p>
      </div>

      <h2>Resilier via l&apos;App Store (iPhone/iPad)</h2>

      <p>Si vous avez souscrit via Apple :</p>

      <ol>
        <li>Ouvrez <strong>Reglages</strong> sur votre appareil</li>
        <li>Appuyez sur votre nom en haut</li>
        <li>Selectionnez <strong>&quot;Abonnements&quot;</strong></li>
        <li>Trouvez Disney+ et appuyez dessus</li>
        <li>Appuyez sur <strong>&quot;Annuler l&apos;abonnement&quot;</strong></li>
      </ol>

      <h2>Resilier via Google Play (Android)</h2>

      <p>Si vous avez souscrit via le Play Store :</p>

      <ol>
        <li>Ouvrez l&apos;app <strong>Google Play Store</strong></li>
        <li>Appuyez sur votre profil</li>
        <li>Selectionnez <strong>&quot;Paiements et abonnements&quot;</strong></li>
        <li>Puis <strong>&quot;Abonnements&quot;</strong></li>
        <li>Trouvez Disney+ et annulez</li>
      </ol>

      <h2>Resilier Disney+ via Canal+</h2>

      <p>
        Si vous avez Disney+ inclus dans votre abonnement Canal+ :
      </p>

      <ul>
        <li>Vous ne pouvez pas resilier Disney+ separement</li>
        <li>Il faut modifier votre offre Canal+ pour retirer Disney+</li>
        <li>Connectez-vous sur <strong>mycanal.fr</strong> &gt; Mon compte &gt; Mon abonnement</li>
      </ul>

      <h2>Les tarifs Disney+ en 2025</h2>

      <table>
        <thead>
          <tr>
            <th>Offre</th>
            <th>Prix mensuel</th>
            <th>Caracteristiques</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Standard avec pub</td>
            <td>5,99€</td>
            <td>Full HD, 2 ecrans</td>
          </tr>
          <tr>
            <td>Standard</td>
            <td>8,99€</td>
            <td>Full HD, 2 ecrans, sans pub</td>
          </tr>
          <tr>
            <td>Premium</td>
            <td>13,99€</td>
            <td>4K, 4 ecrans, sans pub</td>
          </tr>
        </tbody>
      </table>

      <h2>Alternatives a Disney+</h2>

      <ul>
        <li><strong>Netflix</strong> : Catalogue plus varie</li>
        <li><strong>Amazon Prime Video</strong> : Inclus avec Prime</li>
        <li><strong>Apple TV+</strong> : Moins de contenu mais productions originales de qualite</li>
        <li><strong>Paramount+</strong> : Films Paramount, Star Trek, etc.</li>
      </ul>

      <h2>Conseil : alternez les services</h2>

      <p>
        Plutot que de garder plusieurs abonnements streaming, abonnez-vous a un
        service pendant 2-3 mois, regardez ce qui vous interesse, puis passez a
        un autre.
      </p>

      <p>
        <strong>Rivko</strong> vous aide a suivre vos abonnements et a ne pas
        oublier de resilier avant le renouvellement.
      </p>

      {/* Schema.org HowTo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Comment resilier Disney+",
            description: "Guide pour resilier votre abonnement Disney+",
            step: [
              {
                "@type": "HowToStep",
                name: "Connexion",
                text: "Connectez-vous sur disneyplus.com",
              },
              {
                "@type": "HowToStep",
                name: "Acces au compte",
                text: "Cliquez sur votre avatar puis Compte",
              },
              {
                "@type": "HowToStep",
                name: "Annulation",
                text: "Dans la section Abonnement, cliquez sur Annuler",
              },
            ],
          }),
        }}
      />
    </ArticleLayout>
  );
}

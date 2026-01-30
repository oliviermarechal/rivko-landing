import { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Comment resilier Netflix : guide complet 2025",
  description:
    "Resilier votre abonnement Netflix en 2 minutes. Procedure pas a pas, remboursement possible, et conseils pour ne pas oublier la prochaine fois.",
  keywords: [
    "resilier netflix",
    "annuler netflix",
    "resiliation netflix",
    "se desabonner netflix",
    "arreter abonnement netflix",
    "netflix annulation",
  ],
  alternates: {
    canonical: "https://www.rivko.app/guides/resilier-netflix",
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="Comment resilier Netflix : guide complet 2025"
      description="Procedure pas a pas pour resilier votre abonnement Netflix, que ce soit sur le site, l'app ou via votre operateur."
      publishedAt="2025-01-20"
      updatedAt="2025-01-25"
      readingTime="4 min"
      isGuide={true}
      guideSlug="resilier-netflix"
    >
      <p>
        Vous souhaitez resilier votre abonnement Netflix ? Que ce soit pour faire des
        economies, parce que vous n&apos;utilisez plus le service, ou simplement pour tester
        une autre plateforme, la procedure est simple et rapide. Voici comment faire.
      </p>

      <h2>Resilier Netflix sur le site web</h2>

      <p>
        La methode la plus simple pour resilier Netflix :
      </p>

      <ol>
        <li>Connectez-vous a votre compte sur <strong>netflix.com</strong></li>
        <li>Cliquez sur votre profil en haut a droite</li>
        <li>Selectionnez <strong>&quot;Compte&quot;</strong></li>
        <li>Dans la section &quot;Abonnement et facturation&quot;, cliquez sur <strong>&quot;Annuler l&apos;abonnement&quot;</strong></li>
        <li>Confirmez l&apos;annulation</li>
      </ol>

      <div className="highlight-box">
        <p>
          <strong>Bon a savoir :</strong> Votre acces a Netflix continue jusqu&apos;a la fin
          de votre periode de facturation. Vous ne serez pas rembourse au prorata.
        </p>
      </div>

      <h2>Resilier Netflix sur l&apos;application mobile</h2>

      <p>
        Attention, la procedure depend de comment vous avez souscrit :
      </p>

      <h3>Si vous avez souscrit sur le site Netflix</h3>

      <p>
        Vous devez resilier via le site web (methode ci-dessus). L&apos;option n&apos;apparait
        pas dans l&apos;app mobile.
      </p>

      <h3>Si vous avez souscrit via l&apos;App Store (iPhone/iPad)</h3>

      <ol>
        <li>Ouvrez les <strong>Reglages</strong> de votre iPhone</li>
        <li>Appuyez sur votre nom en haut</li>
        <li>Selectionnez <strong>&quot;Abonnements&quot;</strong></li>
        <li>Trouvez Netflix et appuyez dessus</li>
        <li>Appuyez sur <strong>&quot;Annuler l&apos;abonnement&quot;</strong></li>
      </ol>

      <h3>Si vous avez souscrit via Google Play (Android)</h3>

      <ol>
        <li>Ouvrez l&apos;application <strong>Google Play Store</strong></li>
        <li>Appuyez sur votre profil en haut a droite</li>
        <li>Selectionnez <strong>&quot;Paiements et abonnements&quot;</strong> puis &quot;Abonnements&quot;</li>
        <li>Trouvez Netflix et appuyez dessus</li>
        <li>Appuyez sur <strong>&quot;Annuler l&apos;abonnement&quot;</strong></li>
      </ol>

      <h2>Resilier Netflix via votre operateur</h2>

      <p>
        Si vous avez Netflix inclus dans votre forfait (Free, Orange, Bouygues...),
        vous devez resilier aupres de votre operateur :
      </p>

      <ul>
        <li><strong>Free :</strong> Espace client Free &gt; Gerer mes options</li>
        <li><strong>Orange :</strong> Espace client Orange &gt; Offres et options</li>
        <li><strong>Bouygues :</strong> Espace client &gt; Mes services</li>
        <li><strong>SFR :</strong> Espace client SFR &gt; Options et services</li>
      </ul>

      <h2>Puis-je me faire rembourser ?</h2>

      <p>
        Par defaut, Netflix ne rembourse pas les periodes non utilisees. Cependant :
      </p>

      <ul>
        <li>Si vous avez ete preleve par erreur, contactez le support</li>
        <li>Si vous n&apos;avez jamais utilise le service, une demande de geste commercial peut aboutir</li>
        <li>Pour les abonnements via Apple/Google, vous pouvez demander un remboursement sur leurs plateformes</li>
      </ul>

      <h2>Que se passe-t-il apres la resiliation ?</h2>

      <ul>
        <li>Vous gardez l&apos;acces jusqu&apos;a la fin de la periode payee</li>
        <li>Vos profils et preferences sont conserves pendant 10 mois</li>
        <li>Vous pouvez vous reabonner a tout moment</li>
        <li>Votre historique de visionnage est conserve</li>
      </ul>

      <h2>Alternatives a Netflix</h2>

      <p>
        Si vous quittez Netflix pour tester autre chose, voici les principales alternatives :
      </p>

      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Prix</th>
            <th>Points forts</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Amazon Prime Video</td>
            <td>6,99€/mois</td>
            <td>Inclus avec Prime, bonnes series</td>
          </tr>
          <tr>
            <td>Disney+</td>
            <td>5,99€/mois</td>
            <td>Disney, Marvel, Star Wars</td>
          </tr>
          <tr>
            <td>Apple TV+</td>
            <td>9,99€/mois</td>
            <td>Qualite des productions originales</td>
          </tr>
          <tr>
            <td>Canal+</td>
            <td>Des 19,99€</td>
            <td>Sport, cinema, series</td>
          </tr>
        </tbody>
      </table>

      <h2>Ne plus oublier de resilier</h2>

      <p>
        Pour ne plus vous faire surprendre par un renouvellement automatique, utilisez
        une application comme <strong>Rivko</strong> qui vous enverra un rappel
        quelques jours avant chaque echeance.
      </p>

      <p>
        Vous pourrez ainsi profiter de vos abonnements en toute serenite, sans mauvaise
        surprise sur votre compte bancaire.
      </p>

      {/* Schema.org HowTo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Comment resilier Netflix",
            description: "Guide pour resilier votre abonnement Netflix",
            step: [
              {
                "@type": "HowToStep",
                name: "Connexion",
                text: "Connectez-vous a votre compte sur netflix.com",
              },
              {
                "@type": "HowToStep",
                name: "Acces au compte",
                text: "Cliquez sur votre profil puis selectionnez Compte",
              },
              {
                "@type": "HowToStep",
                name: "Annulation",
                text: "Cliquez sur Annuler l'abonnement et confirmez",
              },
            ],
          }),
        }}
      />
    </ArticleLayout>
  );
}

import { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Comment resilier Spotify Premium : guide complet 2025",
  description:
    "Resilier votre abonnement Spotify Premium facilement. Procedure detaillee, conservation de vos playlists, et alternatives gratuites.",
  keywords: [
    "resilier spotify",
    "annuler spotify premium",
    "resiliation spotify",
    "se desabonner spotify",
    "arreter spotify premium",
  ],
  alternates: {
    canonical: "https://www.rivko.app/guides/resilier-spotify",
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="Comment resilier Spotify Premium : guide complet 2025"
      description="Toutes les methodes pour resilier Spotify Premium selon votre mode de souscription."
      publishedAt="2025-01-18"
      readingTime="4 min"
      isGuide={true}
      guideSlug="resilier-spotify"
    >
      <p>
        Vous souhaitez arreter votre abonnement Spotify Premium ? Que vous passiez a la
        version gratuite ou a un concurrent, voici comment proceder selon votre situation.
      </p>

      <h2>Resilier Spotify sur le site web</h2>

      <p>
        Si vous avez souscrit directement sur Spotify :
      </p>

      <ol>
        <li>Connectez-vous sur <strong>spotify.com</strong></li>
        <li>Cliquez sur votre profil puis <strong>&quot;Compte&quot;</strong></li>
        <li>Faites defiler jusqu&apos;a <strong>&quot;Votre abonnement&quot;</strong></li>
        <li>Cliquez sur <strong>&quot;Modifier ou annuler&quot;</strong></li>
        <li>Selectionnez <strong>&quot;Annuler Premium&quot;</strong></li>
        <li>Suivez les instructions et confirmez</li>
      </ol>

      <div className="highlight-box">
        <p>
          <strong>Important :</strong> La resiliation ne peut pas se faire depuis
          l&apos;application mobile. Vous devez passer par le site web.
        </p>
      </div>

      <h2>Resilier via l&apos;App Store (iPhone)</h2>

      <p>
        Si vous avez souscrit via Apple :
      </p>

      <ol>
        <li>Ouvrez <strong>Reglages</strong> sur votre iPhone</li>
        <li>Appuyez sur votre nom tout en haut</li>
        <li>Selectionnez <strong>&quot;Abonnements&quot;</strong></li>
        <li>Trouvez Spotify dans la liste</li>
        <li>Appuyez sur <strong>&quot;Annuler l&apos;abonnement&quot;</strong></li>
      </ol>

      <h2>Resilier via Google Play (Android)</h2>

      <p>
        Si vous avez souscrit via le Play Store :
      </p>

      <ol>
        <li>Ouvrez l&apos;app <strong>Google Play Store</strong></li>
        <li>Appuyez sur votre profil</li>
        <li>Selectionnez <strong>&quot;Paiements et abonnements&quot;</strong></li>
        <li>Puis <strong>&quot;Abonnements&quot;</strong></li>
        <li>Trouvez Spotify et annulez</li>
      </ol>

      <h2>Que devient mon compte apres resiliation ?</h2>

      <ul>
        <li><strong>Vos playlists sont conservees</strong> - Vous ne perdez rien</li>
        <li>Vous passez automatiquement en version gratuite</li>
        <li>Vous aurez des publicites et ne pourrez plus telecharger</li>
        <li>L&apos;ecoute hors connexion ne sera plus possible</li>
        <li>Le son sera en qualite standard (non HD)</li>
      </ul>

      <h2>Spotify gratuit vs Premium</h2>

      <table>
        <thead>
          <tr>
            <th>Fonctionnalite</th>
            <th>Gratuit</th>
            <th>Premium</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Publicites</td>
            <td>Oui</td>
            <td>Non</td>
          </tr>
          <tr>
            <td>Telecharger musique</td>
            <td>Non</td>
            <td>Oui</td>
          </tr>
          <tr>
            <td>Passer les titres</td>
            <td>Limite</td>
            <td>Illimite</td>
          </tr>
          <tr>
            <td>Qualite audio</td>
            <td>Standard</td>
            <td>Haute qualite</td>
          </tr>
          <tr>
            <td>Ecoute hors ligne</td>
            <td>Non</td>
            <td>Oui</td>
          </tr>
        </tbody>
      </table>

      <h2>Alternatives a Spotify</h2>

      <ul>
        <li><strong>Deezer</strong> - 10,99€/mois, catalogue similaire</li>
        <li><strong>Apple Music</strong> - 10,99€/mois, bien integre sur iPhone</li>
        <li><strong>YouTube Music</strong> - 10,99€/mois, inclus avec YouTube Premium</li>
        <li><strong>Amazon Music</strong> - Inclus avec Amazon Prime</li>
        <li><strong>Tidal</strong> - 10,99€/mois, meilleure qualite audio</li>
      </ul>

      <h2>Conseil : alternez les services</h2>

      <p>
        Plutot que de garder plusieurs abonnements musique, alternez entre les services.
        Profitez des essais gratuits, puis changez tous les quelques mois.
      </p>

      <p>
        Utilisez <strong>Rivko</strong> pour suivre vos periodes d&apos;essai et ne pas
        oublier de resilier avant le renouvellement automatique.
      </p>
    </ArticleLayout>
  );
}

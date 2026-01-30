import { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Resilier Keep Cool : guide complet 2025 | Procedure en ligne et en club",
  description:
    "Comment resilier votre abonnement Keep Cool ? Procedure en ligne sur l'espace membre, preavis de 30 jours. Guide etape par etape et lettre type.",
  keywords: [
    "resilier keep cool",
    "resiliation keep cool",
    "annuler abonnement keep cool",
    "keep cool preavis",
    "keep cool engagement",
    "arreter keep cool",
    "keep cool espace membre",
    "keep cool sans engagement",
  ],
  alternates: {
    canonical: "https://www.rivko.app/guides/resilier-keep-cool",
  },
  openGraph: {
    title: "Resilier Keep Cool : guide complet 2025",
    description: "Procedure de resiliation Keep Cool en ligne ou en club. Preavis de 30 jours et lettre type.",
    type: "article",
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="Comment resilier Keep Cool : guide complet 2025"
      description="Procedure detaillee pour resilier votre abonnement Keep Cool en ligne ou en club."
      publishedAt="2025-01-24"
      updatedAt="2025-01-28"
      readingTime="5 min"
      isGuide={true}
      guideSlug="resilier-keep-cool"
    >
      <p>
        Keep Cool se positionne comme une salle de sport &quot;cool&quot; et accessible,
        avec plus de 250 clubs en France. La resiliation peut se faire en ligne
        ou directement en club. Voici le guide complet.
      </p>

      <div className="highlight-box">
        <p>
          <strong>En resume :</strong> La resiliation Keep Cool se fait via l&apos;espace
          membre sur keepcool.fr ou directement en club. Le preavis est de 30 jours.
          La procedure est relativement simple comparee a d&apos;autres enseignes.
        </p>
      </div>

      <h2>Les formules Keep Cool et leurs engagements</h2>

      <table>
        <thead>
          <tr>
            <th>Formule</th>
            <th>Prix/mois</th>
            <th>Engagement</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cool</td>
            <td>19,99€</td>
            <td>Sans engagement ou 12 mois</td>
          </tr>
          <tr>
            <td>Cool Plus</td>
            <td>29,99€</td>
            <td>Sans engagement ou 12 mois</td>
          </tr>
          <tr>
            <td>Cool Premium</td>
            <td>34,99€</td>
            <td>12 mois</td>
          </tr>
        </tbody>
      </table>

      <p>
        <strong>Note :</strong> Les formules avec engagement offrent souvent des
        frais d&apos;inscription reduits. Les tarifs peuvent varier selon les clubs.
      </p>

      <h2>Resilier Keep Cool en ligne (methode recommandee)</h2>

      <p>
        Keep Cool propose une resiliation en ligne via l&apos;espace membre :
      </p>

      <ol>
        <li>Connectez-vous sur <strong>keepcool.fr</strong></li>
        <li>Accedez a votre <strong>Espace Membre</strong></li>
        <li>Allez dans la section <strong>&quot;Mon abonnement&quot;</strong></li>
        <li>Cliquez sur <strong>&quot;Resilier mon abonnement&quot;</strong></li>
        <li>Suivez les etapes demandees</li>
        <li>Validez et conservez l&apos;email de confirmation</li>
      </ol>

      <div className="highlight-box">
        <p>
          <strong>Conseil :</strong> Faites une capture d&apos;ecran a chaque etape,
          notamment de la page de confirmation. Conservez l&apos;email de validation
          comme preuve.
        </p>
      </div>

      <h2>Resilier Keep Cool en club</h2>

      <p>
        Vous pouvez aussi resilier directement en vous rendant dans votre club :
      </p>

      <ol>
        <li>Presentez-vous a l&apos;accueil de votre club Keep Cool</li>
        <li>Demandez a effectuer une <strong>resiliation</strong></li>
        <li>L&apos;equipe vous fera remplir un formulaire</li>
        <li>Signez et demandez une <strong>copie</strong> de votre demande</li>
        <li>Conservez cette copie comme preuve</li>
      </ol>

      <h2>Resilier Keep Cool par courrier</h2>

      <p>
        Si vous preferez le courrier ou en cas de difficulte avec les autres methodes,
        envoyez une lettre recommandee avec AR a l&apos;adresse de votre club :
      </p>

      <div className="my-6 p-4 bg-[var(--surface-secondary)] rounded-lg border border-[var(--border)]">
        <p className="font-mono text-sm">
          Keep Cool [Nom de votre club]<br />
          [Adresse de votre club]<br />
          [Code postal - Ville]
        </p>
      </div>

      <p>
        L&apos;adresse de votre club figure sur votre contrat et vos factures.
      </p>

      <p>
        <Link href="/guides/lettre-resiliation-salle-sport" className="text-[var(--primary)] font-semibold hover:underline">
          Voir notre modele de lettre de resiliation Keep Cool →
        </Link>
      </p>

      <h2>Delais et preavis Keep Cool</h2>

      <ul>
        <li><strong>Preavis :</strong> 30 jours (1 mois)</li>
        <li><strong>Date d&apos;effet :</strong> 30 jours apres la demande</li>
        <li><strong>Acces :</strong> Vous conservez l&apos;acces pendant le preavis</li>
      </ul>

      <p>
        <strong>Exemple :</strong> Une demande le 10 janvier sera effective le 9 fevrier.
        Vous pouvez utiliser la salle jusqu&apos;a cette date.
      </p>

      <h2>Resilier Keep Cool pendant l&apos;engagement</h2>

      <p>
        Si vous avez souscrit une formule avec engagement de 12 mois :
      </p>

      <h3>Option 1 : Attendre la fin de l&apos;engagement</h3>
      <p>
        Notez la date de fin dans <strong>Rivko</strong> et programmez un rappel
        6 semaines avant pour resilier a temps.
      </p>

      <h3>Option 2 : Motif legitime</h3>
      <p>
        Keep Cool accepte la resiliation anticipee sans frais pour les motifs suivants :
      </p>
      <ul>
        <li><strong>Demenagement</strong> hors zone de couverture Keep Cool</li>
        <li><strong>Incapacite medicale</strong> (certificat du medecin)</li>
        <li><strong>Perte d&apos;emploi</strong> (attestation France Travail)</li>
        <li><strong>Mutation professionnelle</strong></li>
        <li><strong>Grossesse</strong></li>
        <li><strong>Longue maladie</strong></li>
      </ul>

      <p>
        Joignez le justificatif a votre demande de resiliation.
      </p>

      <p>
        <Link href="/guides/resilier-salle-sport#motifs-legitimes" className="text-[var(--primary)] hover:underline">
          Voir tous les motifs legitimes acceptes →
        </Link>
      </p>

      <h2>Suspendre son abonnement Keep Cool</h2>

      <p>
        Keep Cool propose parfois une option de <strong>suspension temporaire</strong>
        (gel) de l&apos;abonnement pour 1 a 3 mois. Cette option peut etre interessante
        si vous partez en vacances longues ou avez une blessure temporaire.
      </p>

      <p>
        Renseignez-vous a l&apos;accueil de votre club pour connaitre les conditions
        et les frais eventuels.
      </p>

      <h2>FAQ Keep Cool</h2>

      <h3>Combien coute la resiliation Keep Cool ?</h3>
      <p>
        La resiliation est gratuite si vous etes hors engagement et respectez le
        preavis de 30 jours. Aucuns frais de dossier ou de resiliation.
      </p>

      <h3>Puis-je resilier Keep Cool par telephone ?</h3>
      <p>
        Non, Keep Cool n&apos;accepte pas la resiliation par telephone. Vous devez
        passer par l&apos;espace membre en ligne, en club, ou par courrier recommande.
      </p>

      <h3>Je n&apos;arrive pas a resilier sur le site Keep Cool, que faire ?</h3>
      <p>
        Si le site pose probleme, rendez-vous directement en club ou envoyez un
        courrier recommande avec AR. Ces deux methodes sont aussi valables que
        la procedure en ligne.
      </p>

      <h3>Keep Cool peut-il refuser ma resiliation ?</h3>
      <p>
        Si vous respectez les conditions (hors engagement + preavis de 30 jours ou
        motif legitime), Keep Cool ne peut pas refuser. En cas de probleme, envoyez
        un courrier recommande et conservez toutes les preuves.
      </p>

      <h2>Conseil : suivez vos abonnements</h2>

      <p>
        Avec <strong>Rivko</strong>, enregistrez votre abonnement Keep Cool et
        sa date de fin d&apos;engagement. Vous recevrez un rappel automatique avant
        le renouvellement pour ne jamais oublier de resilier a temps.
      </p>

      <p>
        <Link href="/guides/resilier-salle-sport" className="text-[var(--primary)] hover:underline">
          ← Retour au guide general des salles de sport
        </Link>
      </p>

      {/* Schema.org FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Combien coute la resiliation Keep Cool ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La resiliation est gratuite si vous etes hors engagement et respectez le preavis de 30 jours. Aucuns frais de dossier ou de resiliation.",
                },
              },
              {
                "@type": "Question",
                name: "Puis-je resilier Keep Cool par telephone ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Non, Keep Cool n'accepte pas la resiliation par telephone. Vous devez passer par l'espace membre en ligne, en club, ou par courrier recommande.",
                },
              },
              {
                "@type": "Question",
                name: "Keep Cool peut-il refuser ma resiliation ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Si vous respectez les conditions (hors engagement + preavis de 30 jours ou motif legitime), Keep Cool ne peut pas refuser.",
                },
              },
            ],
          }),
        }}
      />

      {/* Schema.org HowTo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Comment resilier Keep Cool",
            description: "Guide etape par etape pour resilier votre abonnement Keep Cool en ligne",
            step: [
              {
                "@type": "HowToStep",
                name: "Connexion",
                text: "Connectez-vous sur keepcool.fr dans votre Espace Membre",
              },
              {
                "@type": "HowToStep",
                name: "Acces abonnement",
                text: "Allez dans la section Mon abonnement",
              },
              {
                "@type": "HowToStep",
                name: "Resiliation",
                text: "Cliquez sur Resilier mon abonnement et suivez les etapes",
              },
              {
                "@type": "HowToStep",
                name: "Confirmation",
                text: "Validez et conservez l'email de confirmation comme preuve",
              },
            ],
          }),
        }}
      />
    </ArticleLayout>
  );
}

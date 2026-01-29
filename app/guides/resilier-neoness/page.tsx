import { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Resilier Neoness : guide complet 2025 | Procedure en ligne",
  description:
    "Comment resilier votre abonnement Neoness ? Procedure en ligne sur l'espace client, preavis d'1 mois. Guide etape par etape et conseils.",
  keywords: [
    "resilier neoness",
    "resiliation neoness",
    "annuler abonnement neoness",
    "neoness preavis",
    "neoness engagement",
    "arreter neoness",
    "neoness espace client",
    "neoness sans engagement",
  ],
  alternates: {
    canonical: "https://rivko.app/guides/resilier-neoness",
  },
  openGraph: {
    title: "Resilier Neoness : guide complet 2025",
    description: "Procedure de resiliation Neoness en ligne. Preavis d'1 mois et guide etape par etape.",
    type: "article",
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="Comment resilier Neoness : guide complet 2025"
      description="Procedure detaillee pour resilier votre abonnement Neoness depuis votre espace client."
      publishedAt="2025-01-24"
      updatedAt="2025-01-28"
      readingTime="5 min"
      isGuide={true}
      guideSlug="resilier-neoness"
    >
      <p>
        Neoness fait partie du groupe Moving et propose des salles de sport
        modernes principalement en Ile-de-France. La resiliation se fait
        principalement en ligne via l&apos;espace client. Voici toutes les informations.
      </p>

      <div className="highlight-box">
        <p>
          <strong>En resume :</strong> La resiliation Neoness se fait depuis votre
          espace client en ligne ou par email a votre club. Le preavis est d&apos;1 mois.
        </p>
      </div>

      <h2>Les formules Neoness et leurs engagements</h2>

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
            <td>Neo</td>
            <td>15€</td>
            <td>Sans engagement</td>
          </tr>
          <tr>
            <td>Neo+</td>
            <td>19€</td>
            <td>Sans engagement</td>
          </tr>
          <tr>
            <td>Neo Premium</td>
            <td>25€</td>
            <td>12 mois</td>
          </tr>
        </tbody>
      </table>

      <p>
        <strong>Avantage Neoness :</strong> La plupart des formules sont sans engagement,
        ce qui facilite grandement la resiliation.
      </p>

      <h2>Resilier Neoness en ligne (methode recommandee)</h2>

      <ol>
        <li>Connectez-vous sur le site <strong>neoness.fr</strong></li>
        <li>Accedez a votre <strong>espace client</strong></li>
        <li>Allez dans la section <strong>&quot;Mon abonnement&quot;</strong></li>
        <li>Cliquez sur <strong>&quot;Gerer mon abonnement&quot;</strong></li>
        <li>Selectionnez <strong>&quot;Resilier&quot;</strong></li>
        <li>Suivez les etapes et confirmez</li>
        <li>Conservez la confirmation (email ou capture d&apos;ecran)</li>
      </ol>

      <div className="highlight-box">
        <p>
          <strong>Conseil :</strong> Neoness tente parfois de vous retenir avec des
          offres. Si vous etes decide a partir, ignorez ces propositions et poursuivez
          jusqu&apos;a la confirmation finale.
        </p>
      </div>

      <h2>Resilier Neoness par email</h2>

      <p>
        Vous pouvez aussi envoyer un email de resiliation a votre club. L&apos;adresse
        email de votre club figure sur votre contrat et sur le site Neoness dans
        la fiche du club.
      </p>

      <p>
        Format type de l&apos;adresse : <strong>[nomduclub]@neoness.fr</strong>
      </p>

      <p>
        Incluez dans l&apos;email :
      </p>
      <ul>
        <li>Votre nom complet</li>
        <li>Votre numero d&apos;abonne</li>
        <li>Votre demande explicite de resiliation</li>
        <li>La date souhaitee de fin (en respectant le preavis)</li>
      </ul>

      <h2>Resilier Neoness par courrier</h2>

      <p>
        En cas de difficulte avec les methodes precedentes, envoyez un courrier
        recommande avec AR a l&apos;adresse du siege :
      </p>

      <div className="my-6 p-4 bg-[var(--surface-secondary)] rounded-lg border border-[var(--border)]">
        <p className="font-mono text-sm">
          Neoness - Groupe Moving<br />
          Service Resiliation<br />
          8 rue Euler<br />
          75008 Paris
        </p>
      </div>

      <p>
        <Link href="/guides/lettre-resiliation-salle-sport" className="text-[var(--primary)] font-semibold hover:underline">
          Voir notre modele de lettre de resiliation →
        </Link>
      </p>

      <h2>Delais et preavis Neoness</h2>

      <ul>
        <li><strong>Preavis :</strong> 1 mois (30 jours)</li>
        <li><strong>Date d&apos;effet :</strong> Fin du mois suivant la demande</li>
        <li><strong>Acces :</strong> Vous conservez l&apos;acces pendant le preavis</li>
      </ul>

      <p>
        <strong>Exemple :</strong> Une demande faite le 15 janvier sera effective
        le 28 fevrier. Vous pouvez continuer a utiliser la salle jusqu&apos;a cette date.
      </p>

      <h2>Resilier Neoness pendant l&apos;engagement</h2>

      <p>
        Si vous avez une formule Neo Premium avec engagement de 12 mois :
      </p>

      <h3>Option 1 : Attendre la fin</h3>
      <p>
        Programmez un rappel dans <strong>Rivko</strong> 2 mois avant la date
        de fin d&apos;engagement.
      </p>

      <h3>Option 2 : Motif legitime</h3>
      <p>
        Neoness accepte la resiliation anticipee pour :
      </p>
      <ul>
        <li><strong>Demenagement</strong> loin d&apos;un club Neoness</li>
        <li><strong>Probleme medical</strong> (certificat)</li>
        <li><strong>Perte d&apos;emploi</strong> (attestation France Travail)</li>
        <li><strong>Mutation professionnelle</strong></li>
      </ul>

      <p>
        <Link href="/guides/resilier-salle-sport#motifs-legitimes" className="text-[var(--primary)] hover:underline">
          Voir tous les motifs legitimes →
        </Link>
      </p>

      <h2>FAQ Neoness</h2>

      <h3>Neoness est-il sans engagement ?</h3>
      <p>
        Les formules Neo et Neo+ sont sans engagement. La formule Neo Premium
        a un engagement de 12 mois. Verifiez votre contrat pour connaitre votre situation.
      </p>

      <h3>Combien coute la resiliation Neoness ?</h3>
      <p>
        La resiliation Neoness est gratuite. Aucuns frais de resiliation ne sont
        appliques si vous respectez les conditions (hors engagement + preavis).
      </p>

      <h3>Puis-je suspendre mon abonnement Neoness ?</h3>
      <p>
        Neoness propose parfois une option de suspension temporaire. Contactez
        votre club directement pour connaitre les conditions.
      </p>

      <h3>Mon club Neoness a ferme, que faire ?</h3>
      <p>
        Si votre club ferme, vous pouvez soit transferer votre abonnement vers
        un autre club Neoness, soit resilier sans frais ni preavis. Contactez
        le service client pour la procedure.
      </p>

      <h2>Conseil : suivez votre abonnement</h2>

      <p>
        Avec <strong>Rivko</strong>, enregistrez votre abonnement Neoness et
        recevez un rappel automatique avant chaque echeance. Plus de mauvaises
        surprises sur vos prelevements.
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
                name: "Neoness est-il sans engagement ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Les formules Neo et Neo+ sont sans engagement. La formule Neo Premium a un engagement de 12 mois.",
                },
              },
              {
                "@type": "Question",
                name: "Combien coute la resiliation Neoness ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La resiliation Neoness est gratuite. Aucuns frais de resiliation ne sont appliques si vous respectez les conditions.",
                },
              },
              {
                "@type": "Question",
                name: "Mon club Neoness a ferme, que faire ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Si votre club ferme, vous pouvez soit transferer votre abonnement vers un autre club Neoness, soit resilier sans frais ni preavis.",
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
            name: "Comment resilier Neoness",
            description: "Guide etape par etape pour resilier votre abonnement Neoness en ligne",
            step: [
              {
                "@type": "HowToStep",
                name: "Connexion",
                text: "Connectez-vous sur neoness.fr dans votre espace client",
              },
              {
                "@type": "HowToStep",
                name: "Acces abonnement",
                text: "Allez dans Mon abonnement puis Gerer mon abonnement",
              },
              {
                "@type": "HowToStep",
                name: "Resiliation",
                text: "Selectionnez Resilier et suivez les etapes",
              },
              {
                "@type": "HowToStep",
                name: "Confirmation",
                text: "Confirmez et conservez la preuve de votre demande",
              },
            ],
          }),
        }}
      />
    </ArticleLayout>
  );
}

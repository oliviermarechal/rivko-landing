import { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Resilier Basic-Fit : guide complet 2025 | Procedure en ligne et courrier",
  description:
    "Comment resilier votre abonnement Basic-Fit ? Procedure en ligne sur my.basic-fit.com, preavis d'1 mois, adresse courrier et lettre type. Guide etape par etape.",
  keywords: [
    "resilier basic fit",
    "resiliation basic fit",
    "annuler abonnement basic fit",
    "basic fit resiliation en ligne",
    "preavis basic fit",
    "courrier resiliation basic fit",
    "my basic fit resiliation",
    "basic fit engagement",
    "arreter basic fit",
  ],
  alternates: {
    canonical: "https://www.rivko.app/guides/resilier-basic-fit",
  },
  openGraph: {
    title: "Resilier Basic-Fit : guide complet 2025",
    description: "Procedure de resiliation Basic-Fit en ligne ou par courrier. Preavis, engagement et lettre type.",
    type: "article",
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="Comment resilier Basic-Fit : guide complet 2025"
      description="Procedure detaillee pour resilier votre abonnement Basic-Fit en ligne ou par courrier."
      publishedAt="2025-01-24"
      updatedAt="2025-01-28"
      readingTime="6 min"
      isGuide={true}
      guideSlug="resilier-basic-fit"
    >
      <p>
        Basic-Fit est la plus grande chaine de salles de sport low-cost en Europe,
        avec plus de 700 clubs en France. Si vous souhaitez resilier votre abonnement,
        voici toutes les informations et procedures detaillees.
      </p>

      <div className="highlight-box">
        <p>
          <strong>En resume :</strong> La resiliation Basic-Fit se fait en ligne sur
          my.basic-fit.com ou par courrier recommande. Le preavis est d&apos;1 mois.
          Hors engagement, la resiliation prend effet a la fin du mois suivant.
        </p>
      </div>

      <h2>Les formules Basic-Fit et leurs engagements</h2>

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
            <td>Basic</td>
            <td>19,99€</td>
            <td>Sans engagement ou 12 mois</td>
          </tr>
          <tr>
            <td>Premium</td>
            <td>29,99€</td>
            <td>12 mois minimum</td>
          </tr>
          <tr>
            <td>Premium+</td>
            <td>34,99€</td>
            <td>12 mois minimum</td>
          </tr>
        </tbody>
      </table>

      <p>
        <strong>Important :</strong> Les formules avec engagement de 12 mois proposent
        generalement un tarif reduit. Si vous resiliez avant la fin de l&apos;engagement,
        vous devrez payer les mois restants (sauf motif legitime).
      </p>

      <h2>Resilier Basic-Fit en ligne (methode recommandee)</h2>

      <p>
        La methode la plus simple et la plus rapide pour resilier Basic-Fit :
      </p>

      <ol>
        <li>Connectez-vous sur <strong>my.basic-fit.com</strong> avec vos identifiants</li>
        <li>Cliquez sur votre profil en haut a droite</li>
        <li>Selectionnez <strong>&quot;Mon abonnement&quot;</strong></li>
        <li>Descendez jusqu&apos;a la section <strong>&quot;Resilier mon abonnement&quot;</strong></li>
        <li>Cliquez sur le bouton de resiliation</li>
        <li>Suivez les etapes et confirmez votre choix</li>
        <li>Vous recevrez un email de confirmation</li>
      </ol>

      <div className="highlight-box">
        <p>
          <strong>Conseil :</strong> Faites une capture d&apos;ecran de la confirmation
          et conservez l&apos;email de validation. En cas de litige, ces preuves seront
          essentielles.
        </p>
      </div>

      <h2>Resilier Basic-Fit par courrier</h2>

      <p>
        Si vous preferez le courrier ou si la methode en ligne ne fonctionne pas,
        envoyez une lettre recommandee avec accuse de reception a :
      </p>

      <div className="my-6 p-4 bg-[var(--surface-secondary)] rounded-lg border border-[var(--border)]">
        <p className="font-mono text-sm">
          Basic-Fit France<br />
          Service Resiliation<br />
          4 rue Jules Lefebvre<br />
          75009 Paris
        </p>
      </div>

      <p>
        <Link href="/guides/lettre-resiliation-salle-sport" className="text-[var(--primary)] font-semibold hover:underline">
          Voir notre modele de lettre de resiliation Basic-Fit →
        </Link>
      </p>

      <h2>Delais et preavis Basic-Fit</h2>

      <ul>
        <li><strong>Preavis :</strong> 1 mois calendaire</li>
        <li><strong>Date d&apos;effet :</strong> Fin du mois suivant la demande</li>
        <li><strong>Exemple :</strong> Demande le 15 janvier → Resiliation effective le 28 fevrier</li>
      </ul>

      <p>
        Pendant le preavis, vous conservez l&apos;acces a toutes les salles Basic-Fit
        et continuez a payer normalement.
      </p>

      <h2>Resilier Basic-Fit pendant l&apos;engagement</h2>

      <p>
        Si vous etes encore dans votre periode d&apos;engagement de 12 mois, deux options :
      </p>

      <h3>Option 1 : Attendre la fin de l&apos;engagement</h3>
      <p>
        Notez la date de fin dans <strong>Rivko</strong> et programmez un rappel
        2 mois avant pour ne pas oublier de resilier.
      </p>

      <h3>Option 2 : Invoquer un motif legitime</h3>
      <p>
        Vous pouvez resilier sans frais avec un justificatif :
      </p>
      <ul>
        <li><strong>Demenagement</strong> a plus de 30 km d&apos;un club Basic-Fit</li>
        <li><strong>Incapacite medicale</strong> de pratiquer le sport (certificat medical)</li>
        <li><strong>Perte d&apos;emploi</strong> (attestation Pole Emploi / France Travail)</li>
        <li><strong>Mutation professionnelle</strong></li>
      </ul>

      <p>
        <Link href="/guides/resilier-salle-sport#motifs-legitimes" className="text-[var(--primary)] hover:underline">
          Voir tous les motifs legitimes acceptes →
        </Link>
      </p>

      <h2>Resilier l&apos;application Basic-Fit sur iPhone ou Android</h2>

      <p>
        <strong>Attention :</strong> Supprimer l&apos;application Basic-Fit de votre
        telephone ne resilie PAS votre abonnement. Vous devez suivre la procedure
        officielle (en ligne ou par courrier) decrite ci-dessus.
      </p>

      <p>
        De meme, si vous avez souscrit via l&apos;application, la resiliation doit
        quand meme se faire sur my.basic-fit.com ou par courrier.
      </p>

      <h2>Basic-Fit refuse ma resiliation : que faire ?</h2>

      <ol>
        <li>
          <strong>Verifiez vos conditions</strong> : Etes-vous hors engagement ?
          Avez-vous respecte le preavis d&apos;1 mois ?
        </li>
        <li>
          <strong>Renvoyez une demande</strong> par courrier recommande avec AR,
          en rappelant vos droits.
        </li>
        <li>
          <strong>Bloquez le prelevement SEPA</strong> aupres de votre banque
          (apres avoir officialise votre demande de resiliation).
        </li>
        <li>
          <strong>Saisissez le mediateur</strong> : CMAP (Centre de Mediation et
          d&apos;Arbitrage de Paris) via www.cmap.fr
        </li>
      </ol>

      <h2>FAQ Basic-Fit</h2>

      <h3>Combien coute la resiliation Basic-Fit ?</h3>
      <p>
        La resiliation Basic-Fit est gratuite si vous etes hors engagement et
        respectez le preavis d&apos;1 mois. Aucuns frais de resiliation ne sont factures.
      </p>

      <h3>Puis-je suspendre mon abonnement Basic-Fit au lieu de resilier ?</h3>
      <p>
        Basic-Fit propose parfois une option de &quot;gel&quot; temporaire de l&apos;abonnement
        (1 a 3 mois). Contactez le service client ou verifiez dans votre espace membre.
      </p>

      <h3>Comment savoir quand se termine mon engagement Basic-Fit ?</h3>
      <p>
        Connectez-vous sur my.basic-fit.com &gt; Mon abonnement. La date de fin
        d&apos;engagement y est indiquee. Vous pouvez aussi retrouver cette information
        sur votre contrat initial.
      </p>

      <h3>Basic-Fit continue de prelever apres ma resiliation, que faire ?</h3>
      <p>
        Contactez d&apos;abord le service client avec votre confirmation de resiliation.
        Si le probleme persiste, faites opposition au prelevement SEPA aupres de
        votre banque et demandez le remboursement des sommes indument prelevees.
      </p>

      <h2>Conseil : suivez vos abonnements</h2>

      <p>
        Avec <strong>Rivko</strong>, enregistrez votre abonnement Basic-Fit et
        programmez une alerte avant la fin de l&apos;engagement. Vous ne serez plus
        jamais reconduit tacitement sans le vouloir.
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
                name: "Combien coute la resiliation Basic-Fit ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La resiliation Basic-Fit est gratuite si vous etes hors engagement et respectez le preavis d'1 mois. Aucuns frais de resiliation ne sont factures.",
                },
              },
              {
                "@type": "Question",
                name: "Puis-je suspendre mon abonnement Basic-Fit au lieu de resilier ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Basic-Fit propose parfois une option de gel temporaire de l'abonnement (1 a 3 mois). Contactez le service client ou verifiez dans votre espace membre.",
                },
              },
              {
                "@type": "Question",
                name: "Comment savoir quand se termine mon engagement Basic-Fit ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Connectez-vous sur my.basic-fit.com > Mon abonnement. La date de fin d'engagement y est indiquee.",
                },
              },
              {
                "@type": "Question",
                name: "Basic-Fit continue de prelever apres ma resiliation, que faire ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Contactez d'abord le service client avec votre confirmation de resiliation. Si le probleme persiste, faites opposition au prelevement SEPA aupres de votre banque.",
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
            name: "Comment resilier Basic-Fit",
            description: "Guide etape par etape pour resilier votre abonnement Basic-Fit en ligne",
            step: [
              {
                "@type": "HowToStep",
                name: "Connexion",
                text: "Connectez-vous sur my.basic-fit.com avec vos identifiants",
              },
              {
                "@type": "HowToStep",
                name: "Acces abonnement",
                text: "Cliquez sur votre profil puis selectionnez Mon abonnement",
              },
              {
                "@type": "HowToStep",
                name: "Demande resiliation",
                text: "Descendez jusqu'a Resilier mon abonnement et cliquez",
              },
              {
                "@type": "HowToStep",
                name: "Confirmation",
                text: "Suivez les etapes et confirmez. Conservez l'email de confirmation.",
              },
            ],
          }),
        }}
      />
    </ArticleLayout>
  );
}

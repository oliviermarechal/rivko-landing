import { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Resilier Fitness Park : guide complet 2025 | Procedure et preavis",
  description:
    "Comment resilier votre abonnement Fitness Park ? Procedure en club, par courrier, preavis de 1 a 2 mois selon formule. Guide etape par etape et lettre type.",
  keywords: [
    "resilier fitness park",
    "resiliation fitness park",
    "annuler abonnement fitness park",
    "fitness park preavis",
    "courrier resiliation fitness park",
    "fitness park engagement",
    "arreter fitness park",
    "fitness park sans engagement",
  ],
  alternates: {
    canonical: "https://www.rivko.app/guides/resilier-fitness-park",
  },
  openGraph: {
    title: "Resilier Fitness Park : guide complet 2025",
    description: "Procedure de resiliation Fitness Park en club ou par courrier. Preavis, engagement et lettre type.",
    type: "article",
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="Comment resilier Fitness Park : guide complet 2025"
      description="Procedure detaillee pour resilier votre abonnement Fitness Park en club ou par courrier."
      publishedAt="2025-01-24"
      updatedAt="2025-01-28"
      readingTime="6 min"
      isGuide={true}
      guideSlug="resilier-fitness-park"
    >
      <p>
        Fitness Park est l&apos;une des plus grandes chaines de salles de sport en France,
        avec plus de 250 clubs. La resiliation peut se faire en club ou par courrier.
        Voici toutes les informations pour resilier efficacement.
      </p>

      <div className="highlight-box">
        <p>
          <strong>En resume :</strong> La resiliation Fitness Park se fait en club
          (formulaire a l&apos;accueil) ou par courrier recommande. Le preavis varie
          de 1 a 2 mois selon votre formule.
        </p>
      </div>

      <h2>Les formules Fitness Park et leurs engagements</h2>

      <table>
        <thead>
          <tr>
            <th>Formule</th>
            <th>Prix/mois</th>
            <th>Engagement</th>
            <th>Preavis</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Essentiel</td>
            <td>9,99€</td>
            <td>12 mois</td>
            <td>2 mois</td>
          </tr>
          <tr>
            <td>Liberte</td>
            <td>19,99€</td>
            <td>Sans engagement</td>
            <td>1 mois</td>
          </tr>
          <tr>
            <td>Premium</td>
            <td>29,99€</td>
            <td>12 mois</td>
            <td>2 mois</td>
          </tr>
          <tr>
            <td>Black Card</td>
            <td>39,99€</td>
            <td>12 mois</td>
            <td>2 mois</td>
          </tr>
        </tbody>
      </table>

      <p>
        <strong>Attention :</strong> Les tarifs et conditions peuvent varier selon
        les clubs franchises. Verifiez votre contrat pour les conditions exactes.
      </p>

      <h2>Resilier Fitness Park en club (methode principale)</h2>

      <p>
        Contrairement a d&apos;autres enseignes, Fitness Park privilegie la resiliation en club :
      </p>

      <ol>
        <li>Rendez-vous a l&apos;accueil de votre club Fitness Park</li>
        <li>Demandez un <strong>formulaire de resiliation</strong></li>
        <li>Remplissez le formulaire avec vos informations (nom, numero d&apos;abonne, date)</li>
        <li>Signez et remettez le formulaire a l&apos;accueil</li>
        <li>Demandez une <strong>copie tamponnee</strong> comme preuve</li>
        <li>Conservez cette copie precieusement</li>
      </ol>

      <div className="highlight-box">
        <p>
          <strong>Conseil :</strong> Exigez toujours un recu ou une copie tamponnee
          de votre demande. Sans preuve, le club pourrait pretendre ne jamais avoir
          recu votre demande.
        </p>
      </div>

      <h2>Resilier Fitness Park par courrier</h2>

      <p>
        Si vous ne pouvez pas vous rendre en club ou preferez une trace ecrite
        officielle, envoyez une lettre recommandee avec accuse de reception.
      </p>

      <h3>Adresse de resiliation</h3>

      <p>
        Chaque club Fitness Park etant souvent une franchise independante, vous devez
        envoyer votre courrier a l&apos;adresse de <strong>votre club d&apos;inscription</strong>.
        L&apos;adresse figure sur votre contrat et vos factures.
      </p>

      <div className="my-6 p-4 bg-[var(--surface-secondary)] rounded-lg border border-[var(--border)]">
        <p className="font-mono text-sm">
          Fitness Park [Nom de votre club]<br />
          Service Abonnement<br />
          [Adresse de votre club]<br />
          [Code postal - Ville]
        </p>
      </div>

      <p>
        <Link href="/guides/lettre-resiliation-salle-sport" className="text-[var(--primary)] font-semibold hover:underline">
          Voir notre modele de lettre de resiliation Fitness Park →
        </Link>
      </p>

      <h2>Delais et preavis Fitness Park</h2>

      <ul>
        <li><strong>Formule Liberte (sans engagement) :</strong> Preavis d&apos;1 mois</li>
        <li><strong>Formules avec engagement :</strong> Preavis de 2 mois</li>
        <li><strong>Date d&apos;effet :</strong> Fin de la periode de preavis</li>
      </ul>

      <p>
        <strong>Exemple :</strong> Pour une formule avec 2 mois de preavis, une demande
        faite le 15 janvier sera effective le 15 mars (ou fin mars selon le contrat).
      </p>

      <h2>Resilier Fitness Park pendant l&apos;engagement</h2>

      <p>
        Si vous etes encore engage, vous avez plusieurs options :
      </p>

      <h3>Option 1 : Payer les mois restants</h3>
      <p>
        Vous pouvez resilier en payant les mensualites restantes. Certains clubs
        proposent une reduction de 20-30% sur ce montant.
      </p>

      <h3>Option 2 : Invoquer un motif legitime</h3>
      <p>
        La resiliation sans frais est possible avec justificatif :
      </p>
      <ul>
        <li><strong>Demenagement</strong> a plus de 25-30 km d&apos;un club Fitness Park</li>
        <li><strong>Probleme de sante</strong> (certificat medical d&apos;inaptitude)</li>
        <li><strong>Perte d&apos;emploi</strong> (attestation France Travail)</li>
        <li><strong>Mutation professionnelle</strong></li>
        <li><strong>Grossesse</strong></li>
      </ul>

      <p>
        <Link href="/guides/resilier-salle-sport#motifs-legitimes" className="text-[var(--primary)] hover:underline">
          Voir tous les motifs legitimes acceptes →
        </Link>
      </p>

      <h2>Transfert d&apos;abonnement Fitness Park</h2>

      <p>
        Alternative a la resiliation : certains clubs Fitness Park acceptent le
        <strong> transfert d&apos;abonnement</strong> a une autre personne. Renseignez-vous
        a l&apos;accueil de votre club. Cette option evite les frais de resiliation
        pendant l&apos;engagement.
      </p>

      <h2>Fitness Park refuse ma resiliation : que faire ?</h2>

      <ol>
        <li>
          <strong>Verifiez vos conditions</strong> : Avez-vous respecte le preavis ?
          Etes-vous hors engagement ou avez-vous un motif legitime ?
        </li>
        <li>
          <strong>Envoyez un courrier recommande</strong> avec AR a l&apos;adresse
          du club, rappelant votre demande et les textes de loi (article L136-1
          du Code de la consommation).
        </li>
        <li>
          <strong>Faites opposition SEPA</strong> aupres de votre banque apres
          avoir officialise votre demande.
        </li>
        <li>
          <strong>Signalez le probleme</strong> sur SignalConso (signal.conso.gouv.fr)
          et saisissez le mediateur de la consommation.
        </li>
      </ol>

      <h2>FAQ Fitness Park</h2>

      <h3>Peut-on resilier Fitness Park en ligne ?</h3>
      <p>
        La plupart des clubs Fitness Park ne proposent pas de resiliation en ligne.
        La procedure se fait en club ou par courrier recommande. Verifiez avec
        votre club s&apos;il propose une alternative.
      </p>

      <h3>Quel est le preavis pour resilier Fitness Park sans engagement ?</h3>
      <p>
        La formule Liberte (sans engagement) a un preavis d&apos;1 mois. Les formules
        avec engagement ont generalement un preavis de 2 mois.
      </p>

      <h3>Comment savoir si je suis encore engage chez Fitness Park ?</h3>
      <p>
        Consultez votre contrat d&apos;abonnement ou demandez a l&apos;accueil de votre club.
        La date de fin d&apos;engagement figure sur ces documents.
      </p>

      <h3>Fitness Park me demande de payer apres ma resiliation, est-ce normal ?</h3>
      <p>
        Si vous etes dans la periode de preavis, oui. Au-dela, non. En cas de
        prelevement abusif, contestez aupres du club avec votre preuve de resiliation,
        puis faites opposition SEPA si necessaire.
      </p>

      <h2>Conseil : anticipez votre resiliation</h2>

      <p>
        Avec <strong>Rivko</strong>, enregistrez votre abonnement Fitness Park
        et sa date de fin d&apos;engagement. Programmez un rappel 3 mois avant pour
        avoir le temps de resilier dans les delais (2 mois de preavis + marge).
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
                name: "Peut-on resilier Fitness Park en ligne ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La plupart des clubs Fitness Park ne proposent pas de resiliation en ligne. La procedure se fait en club ou par courrier recommande.",
                },
              },
              {
                "@type": "Question",
                name: "Quel est le preavis pour resilier Fitness Park sans engagement ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La formule Liberte (sans engagement) a un preavis d'1 mois. Les formules avec engagement ont generalement un preavis de 2 mois.",
                },
              },
              {
                "@type": "Question",
                name: "Comment savoir si je suis encore engage chez Fitness Park ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Consultez votre contrat d'abonnement ou demandez a l'accueil de votre club. La date de fin d'engagement figure sur ces documents.",
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
            name: "Comment resilier Fitness Park",
            description: "Guide etape par etape pour resilier votre abonnement Fitness Park en club",
            step: [
              {
                "@type": "HowToStep",
                name: "Se rendre en club",
                text: "Rendez-vous a l'accueil de votre club Fitness Park",
              },
              {
                "@type": "HowToStep",
                name: "Demander le formulaire",
                text: "Demandez un formulaire de resiliation a l'accueil",
              },
              {
                "@type": "HowToStep",
                name: "Remplir et signer",
                text: "Remplissez le formulaire avec vos informations et signez",
              },
              {
                "@type": "HowToStep",
                name: "Obtenir une preuve",
                text: "Demandez une copie tamponnee comme preuve de depot",
              },
            ],
          }),
        }}
      />
    </ArticleLayout>
  );
}

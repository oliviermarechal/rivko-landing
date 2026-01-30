import { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Resilier L'Orange Bleue : guide complet 2025 | Courrier recommande",
  description:
    "Comment resilier votre abonnement L'Orange Bleue ? Procedure par courrier recommande, preavis de 1 a 2 mois selon contrat. Guide et lettre type.",
  keywords: [
    "resilier orange bleue",
    "resiliation orange bleue",
    "annuler abonnement orange bleue",
    "orange bleue preavis",
    "orange bleue engagement",
    "arreter orange bleue",
    "courrier resiliation orange bleue",
    "l'orange bleue resiliation",
  ],
  alternates: {
    canonical: "https://www.rivko.app/guides/resilier-orange-bleue",
  },
  openGraph: {
    title: "Resilier L'Orange Bleue : guide complet 2025",
    description: "Procedure de resiliation L'Orange Bleue par courrier recommande. Preavis, engagement et lettre type.",
    type: "article",
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="Comment resilier L'Orange Bleue : guide complet 2025"
      description="Procedure detaillee pour resilier votre abonnement L'Orange Bleue par courrier recommande."
      publishedAt="2025-01-24"
      updatedAt="2025-01-28"
      readingTime="6 min"
      isGuide={true}
      guideSlug="resilier-orange-bleue"
    >
      <p>
        L&apos;Orange Bleue est une franchise de salles de sport avec plus de 400 clubs
        en France. Chaque club etant independant, la resiliation se fait
        generalement par courrier recommande. Voici le guide complet.
      </p>

      <div className="highlight-box">
        <p>
          <strong>En resume :</strong> La resiliation L&apos;Orange Bleue se fait par
          courrier recommande avec AR envoye a votre club ou par formulaire en club.
          Le preavis varie de 1 a 2 mois selon votre contrat.
        </p>
      </div>

      <h2>Les formules L&apos;Orange Bleue et leurs engagements</h2>

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
            <td>24,90€</td>
            <td>12 mois</td>
            <td>2 mois</td>
          </tr>
          <tr>
            <td>Liberte</td>
            <td>29,90€</td>
            <td>Sans engagement</td>
            <td>1 mois</td>
          </tr>
          <tr>
            <td>Premium</td>
            <td>34,90€</td>
            <td>12 mois</td>
            <td>2 mois</td>
          </tr>
        </tbody>
      </table>

      <p>
        <strong>Attention :</strong> Chaque club L&apos;Orange Bleue etant une franchise
        independante, les tarifs et conditions peuvent varier. Verifiez votre contrat
        pour les conditions exactes.
      </p>

      <h2>Resilier L&apos;Orange Bleue par courrier (methode principale)</h2>

      <p>
        La methode la plus sure pour resilier L&apos;Orange Bleue est le courrier
        recommande avec accuse de reception :
      </p>

      <ol>
        <li>Redigez une lettre de resiliation (modele ci-dessous)</li>
        <li>Envoyez-la en <strong>recommande avec AR</strong> a l&apos;adresse de votre club</li>
        <li>Conservez le recepisse et l&apos;accuse de reception</li>
        <li>La resiliation prend effet a la fin du preavis</li>
      </ol>

      <h3>Adresse de votre club</h3>

      <p>
        Chaque club ayant sa propre adresse, utilisez celle qui figure sur :
      </p>
      <ul>
        <li>Votre contrat d&apos;abonnement</li>
        <li>Vos factures mensuelles</li>
        <li>Le site lorangebleue.fr (fiche du club)</li>
      </ul>

      <div className="my-6 p-4 bg-[var(--surface-secondary)] rounded-lg border border-[var(--border)]">
        <p className="font-mono text-sm">
          L&apos;Orange Bleue [Nom de votre ville]<br />
          [Adresse du club]<br />
          [Code postal - Ville]
        </p>
      </div>

      <p>
        <Link href="/guides/lettre-resiliation-salle-sport" className="text-[var(--primary)] font-semibold hover:underline">
          Voir notre modele de lettre de resiliation L&apos;Orange Bleue →
        </Link>
      </p>

      <h2>Resilier L&apos;Orange Bleue en club</h2>

      <p>
        Certains clubs L&apos;Orange Bleue acceptent la resiliation sur place :
      </p>

      <ol>
        <li>Rendez-vous a l&apos;accueil de votre club</li>
        <li>Demandez un <strong>formulaire de resiliation</strong></li>
        <li>Remplissez-le entierement</li>
        <li>Signez et demandez une <strong>copie tamponnee</strong></li>
        <li>Conservez cette copie precieusement</li>
      </ol>

      <div className="highlight-box">
        <p>
          <strong>Conseil :</strong> Meme si vous faites la demarche en club,
          envoyez aussi un courrier recommande pour avoir une preuve legale
          incontestable avec date certaine.
        </p>
      </div>

      <h2>Delais et preavis L&apos;Orange Bleue</h2>

      <ul>
        <li><strong>Formule Liberte :</strong> Preavis d&apos;1 mois</li>
        <li><strong>Formules avec engagement :</strong> Preavis de 2 mois</li>
        <li><strong>Date d&apos;effet :</strong> Fin de la periode de preavis apres reception</li>
      </ul>

      <p>
        <strong>Exemple :</strong> Pour une formule avec 2 mois de preavis, une lettre
        recue le 15 janvier donnera une resiliation effective le 15 mars.
      </p>

      <h2>Resilier L&apos;Orange Bleue pendant l&apos;engagement</h2>

      <p>
        Si vous etes encore dans votre periode d&apos;engagement :
      </p>

      <h3>Option 1 : Attendre la fin</h3>
      <p>
        Notez la date de fin d&apos;engagement dans <strong>Rivko</strong> et
        programmez un rappel 3 mois avant (pour anticiper le preavis de 2 mois).
      </p>

      <h3>Option 2 : Payer les mois restants</h3>
      <p>
        Vous pouvez demander une resiliation anticipee en payant les mensualites
        restantes. Certains clubs proposent une reduction.
      </p>

      <h3>Option 3 : Motif legitime</h3>
      <p>
        L&apos;Orange Bleue accepte la resiliation sans frais pour :
      </p>
      <ul>
        <li><strong>Demenagement</strong> a plus de 30 km d&apos;un club L&apos;Orange Bleue</li>
        <li><strong>Incapacite medicale</strong> (certificat medical)</li>
        <li><strong>Perte d&apos;emploi</strong> (attestation France Travail)</li>
        <li><strong>Mutation professionnelle</strong></li>
        <li><strong>Grossesse</strong></li>
        <li><strong>Deces</strong> (pour les heritiers)</li>
      </ul>

      <p>
        Joignez le justificatif original a votre courrier de resiliation.
      </p>

      <p>
        <Link href="/guides/resilier-salle-sport#motifs-legitimes" className="text-[var(--primary)] hover:underline">
          Voir tous les motifs legitimes acceptes →
        </Link>
      </p>

      <h2>L&apos;Orange Bleue refuse ma resiliation : que faire ?</h2>

      <ol>
        <li>
          <strong>Verifiez vos preuves</strong> : Avez-vous l&apos;accuse de reception
          de votre courrier recommande ?
        </li>
        <li>
          <strong>Renvoyez une mise en demeure</strong> par recommande, rappelant
          votre premiere demande et fixant un delai de 15 jours.
        </li>
        <li>
          <strong>Faites opposition SEPA</strong> aupres de votre banque si les
          prelevements continuent apres la date effective de resiliation.
        </li>
        <li>
          <strong>Saisissez le mediateur</strong> de la consommation dont depend
          le club (coordonnees sur le contrat ou en club).
        </li>
        <li>
          <strong>Signalez sur SignalConso</strong> si vous estimez etre victime
          d&apos;une pratique abusive.
        </li>
      </ol>

      <h2>FAQ L&apos;Orange Bleue</h2>

      <h3>Peut-on resilier L&apos;Orange Bleue en ligne ?</h3>
      <p>
        Non, L&apos;Orange Bleue ne propose generalement pas de resiliation en ligne.
        Le courrier recommande est la methode privilegiee. Certains clubs acceptent
        une demande sur place.
      </p>

      <h3>Quel est le preavis pour resilier L&apos;Orange Bleue ?</h3>
      <p>
        Le preavis est d&apos;1 mois pour les formules sans engagement et de 2 mois
        pour les formules avec engagement. Verifiez votre contrat pour confirmation.
      </p>

      <h3>Comment connaitre ma date de fin d&apos;engagement L&apos;Orange Bleue ?</h3>
      <p>
        Cette information figure sur votre contrat d&apos;abonnement initial. Vous pouvez
        aussi la demander a l&apos;accueil de votre club.
      </p>

      <h3>L&apos;Orange Bleue continue de me prelever apres resiliation, que faire ?</h3>
      <p>
        Si vous avez la preuve de votre resiliation (accuse de reception) et que
        les prelevements continuent au-dela du preavis, faites opposition aupres
        de votre banque et demandez le remboursement des sommes indument prelevees.
      </p>

      <h2>Conseil : anticipez votre resiliation</h2>

      <p>
        Avec <strong>Rivko</strong>, enregistrez votre abonnement L&apos;Orange Bleue
        et programmez un rappel 3 mois avant la fin d&apos;engagement. Vous aurez ainsi
        le temps d&apos;envoyer votre courrier et de respecter le preavis de 2 mois.
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
                name: "Peut-on resilier L'Orange Bleue en ligne ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Non, L'Orange Bleue ne propose generalement pas de resiliation en ligne. Le courrier recommande est la methode privilegiee.",
                },
              },
              {
                "@type": "Question",
                name: "Quel est le preavis pour resilier L'Orange Bleue ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Le preavis est d'1 mois pour les formules sans engagement et de 2 mois pour les formules avec engagement.",
                },
              },
              {
                "@type": "Question",
                name: "L'Orange Bleue continue de me prelever apres resiliation, que faire ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Si vous avez la preuve de votre resiliation et que les prelevements continuent au-dela du preavis, faites opposition aupres de votre banque.",
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
            name: "Comment resilier L'Orange Bleue",
            description: "Guide etape par etape pour resilier votre abonnement L'Orange Bleue par courrier",
            step: [
              {
                "@type": "HowToStep",
                name: "Rediger la lettre",
                text: "Redigez une lettre de resiliation avec vos informations et numero d'abonne",
              },
              {
                "@type": "HowToStep",
                name: "Envoyer en recommande",
                text: "Envoyez la lettre en recommande avec AR a l'adresse de votre club",
              },
              {
                "@type": "HowToStep",
                name: "Conserver les preuves",
                text: "Gardez le recepisse d'envoi et l'accuse de reception",
              },
              {
                "@type": "HowToStep",
                name: "Attendre le preavis",
                text: "La resiliation prend effet a la fin du preavis (1 ou 2 mois)",
              },
            ],
          }),
        }}
      />
    </ArticleLayout>
  );
}

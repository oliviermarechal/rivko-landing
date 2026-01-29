import { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Resilier sa salle de sport : guide complet 2025 | Toutes les enseignes",
  description:
    "Comment resilier son abonnement en salle de sport ? Basic-Fit, Fitness Park, Keep Cool, Neoness, L'Orange Bleue. Procedures, preavis, motifs legitimes et lettres types.",
  keywords: [
    "resilier salle de sport",
    "resiliation abonnement gym",
    "annuler abonnement fitness",
    "preavis salle de sport",
    "motif legitime resiliation sport",
    "loi chatel salle de sport",
    "resilier basic fit",
    "resilier fitness park",
    "resilier keep cool",
  ],
  alternates: {
    canonical: "https://rivko.app/guides/resilier-salle-sport",
  },
  openGraph: {
    title: "Resilier sa salle de sport : guide complet 2025",
    description: "Procedures de resiliation pour toutes les salles de sport en France. Preavis, motifs legitimes, lettres types.",
    type: "article",
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="Resilier sa salle de sport : guide complet 2025"
      description="Toutes les procedures pour resilier votre abonnement fitness selon votre enseigne."
      publishedAt="2025-01-24"
      updatedAt="2025-01-28"
      readingTime="10 min"
      isGuide={true}
      guideSlug="resilier-salle-sport"
    >
      <p>
        Les abonnements en salle de sport sont reputes difficiles a resilier.
        Entre les periodes d&apos;engagement, les delais de preavis variables et les
        procedures specifiques a chaque enseigne, il est facile de se perdre.
        Ce guide complet vous explique tout ce qu&apos;il faut savoir pour resilier
        efficacement.
      </p>

      <nav className="my-8 p-6 bg-[var(--surface-secondary)] rounded-xl">
        <p className="font-semibold mb-4">Sommaire - Acces rapide par enseigne :</p>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <li>
            <Link href="/guides/resilier-basic-fit" className="text-[var(--primary)] hover:underline font-medium">
              Basic-Fit
            </Link>
          </li>
          <li>
            <Link href="/guides/resilier-fitness-park" className="text-[var(--primary)] hover:underline font-medium">
              Fitness Park
            </Link>
          </li>
          <li>
            <Link href="/guides/resilier-keep-cool" className="text-[var(--primary)] hover:underline font-medium">
              Keep Cool
            </Link>
          </li>
          <li>
            <Link href="/guides/resilier-neoness" className="text-[var(--primary)] hover:underline font-medium">
              Neoness
            </Link>
          </li>
          <li>
            <Link href="/guides/resilier-orange-bleue" className="text-[var(--primary)] hover:underline font-medium">
              L&apos;Orange Bleue
            </Link>
          </li>
          <li>
            <Link href="/guides/lettre-resiliation-salle-sport" className="text-[var(--primary)] hover:underline font-medium">
              Lettres types
            </Link>
          </li>
        </ul>
      </nav>

      <h2>La loi Chatel : votre alliee pour resilier</h2>

      <div className="highlight-box">
        <p>
          <strong>Loi Chatel (article L136-1 du Code de la consommation) :</strong> Votre salle
          de sport doit vous informer de la possibilite de resilier entre 3 mois et 1 mois
          avant la date anniversaire de votre contrat. Si elle ne le fait pas, vous pouvez
          resilier a tout moment sans frais ni preavis.
        </p>
      </div>

      <p>
        En pratique, peu de salles envoient ce rappel. Conservez vos emails et courriers :
        si vous n&apos;avez rien recu, vous pouvez invoquer la loi Chatel pour une resiliation immediate.
      </p>

      <h2>Comparatif des preavis par enseigne</h2>

      <table>
        <thead>
          <tr>
            <th>Salle</th>
            <th>Preavis</th>
            <th>Methode principale</th>
            <th>Prix mensuel moyen</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Link href="/guides/resilier-basic-fit" className="text-[var(--primary)] hover:underline">Basic-Fit</Link></td>
            <td>1 mois</td>
            <td>En ligne</td>
            <td>19,99€ - 29,99€</td>
          </tr>
          <tr>
            <td><Link href="/guides/resilier-fitness-park" className="text-[var(--primary)] hover:underline">Fitness Park</Link></td>
            <td>1 a 2 mois</td>
            <td>En club ou courrier</td>
            <td>9,99€ - 29,99€</td>
          </tr>
          <tr>
            <td><Link href="/guides/resilier-keep-cool" className="text-[var(--primary)] hover:underline">Keep Cool</Link></td>
            <td>1 mois (30 jours)</td>
            <td>En ligne ou en club</td>
            <td>19,99€ - 34,99€</td>
          </tr>
          <tr>
            <td><Link href="/guides/resilier-neoness" className="text-[var(--primary)] hover:underline">Neoness</Link></td>
            <td>1 mois</td>
            <td>En ligne</td>
            <td>15€ - 25€</td>
          </tr>
          <tr>
            <td><Link href="/guides/resilier-orange-bleue" className="text-[var(--primary)] hover:underline">L&apos;Orange Bleue</Link></td>
            <td>1 a 2 mois</td>
            <td>Courrier recommande</td>
            <td>24,90€ - 34,90€</td>
          </tr>
        </tbody>
      </table>

      <h2 id="motifs-legitimes">Motifs legitimes de resiliation sans frais</h2>

      <p>
        Meme pendant une periode d&apos;engagement, vous pouvez resilier sans payer les mois
        restants si vous justifiez d&apos;un motif legitime. Voici les cas acceptes par la
        plupart des enseignes :
      </p>

      <h3>1. Demenagement</h3>
      <p>
        Si vous demenagez a plus de 20-30 km d&apos;une salle de la meme enseigne, vous pouvez
        resilier. Fournissez un justificatif de domicile recent (facture, bail).
      </p>

      <h3>2. Probleme de sante / Incapacite medicale</h3>
      <p>
        Une blessure ou maladie incompatible avec la pratique sportive permet la resiliation.
        Un certificat medical precisant l&apos;impossibilite temporaire ou definitive de pratiquer
        est necessaire.
      </p>

      <h3>3. Perte d&apos;emploi / Chomage</h3>
      <p>
        Un licenciement ou une fin de CDD non renouvelee constitue un motif legitime.
        Fournissez l&apos;attestation Pole Emploi (France Travail) ou la lettre de licenciement.
      </p>

      <h3>4. Mutation professionnelle</h3>
      <p>
        Un changement de lieu de travail imposant un demenagement est accepte.
        L&apos;attestation de l&apos;employeur fait foi.
      </p>

      <h3>5. Grossesse</h3>
      <p>
        La grossesse est reconnue comme motif legitime par la plupart des salles.
        Un certificat de grossesse ou certificat medical suffit.
      </p>

      <h3>6. Longue maladie / Invalidite</h3>
      <p>
        Une ALD (Affection Longue Duree) ou une reconnaissance d&apos;invalidite permet
        une resiliation immediate.
      </p>

      <h3>7. Deces</h3>
      <p>
        En cas de deces de l&apos;abonne, les heritiers peuvent resilier le contrat sur
        presentation de l&apos;acte de deces.
      </p>

      <div className="highlight-box">
        <p>
          <strong>Conseil :</strong> Envoyez toujours votre demande de resiliation avec
          le justificatif en courrier recommande avec accuse de reception. Cela constitue
          une preuve legale en cas de litige.
        </p>
      </div>

      <h2>Lettres de resiliation</h2>

      <p>
        Nous avons prepare plusieurs modeles de lettres adaptes a chaque situation :
      </p>

      <ul>
        <li>Lettre de resiliation standard (fin d&apos;engagement)</li>
        <li>Lettre avec motif legitime (demenagement, sante, chomage...)</li>
        <li>Lettre invoquant la loi Chatel</li>
        <li>Lettre de mise en demeure (si la salle refuse)</li>
      </ul>

      <p>
        <Link href="/guides/lettre-resiliation-salle-sport" className="text-[var(--primary)] font-semibold hover:underline">
          Voir tous les modeles de lettres de resiliation →
        </Link>
      </p>

      <h2>Que faire si la salle refuse la resiliation ?</h2>

      <ol>
        <li>
          <strong>Envoyez une mise en demeure</strong> par courrier recommande, rappelant
          vos droits et fixant un delai de 15 jours pour regulariser.
        </li>
        <li>
          <strong>Bloquez les prelevements</strong> aupres de votre banque (opposition SEPA).
          Attention : cela n&apos;annule pas la dette si la resiliation n&apos;est pas effective.
        </li>
        <li>
          <strong>Saisissez le mediateur</strong> de la consommation dont depend la salle
          (coordonnees obligatoirement affichees en club et sur le site).
        </li>
        <li>
          <strong>Signalez sur SignalConso</strong> (signal.conso.gouv.fr) si vous estimez
          etre victime d&apos;une pratique abusive.
        </li>
      </ol>

      <h2>Conseil : anticipez votre resiliation</h2>

      <p>
        Avec <strong>Rivko</strong>, notez la date de fin de votre engagement et
        programmez un rappel 2 mois avant. Vous aurez ainsi le temps de resilier dans
        les delais sans reconduction automatique.
      </p>

      <p>
        N&apos;oubliez pas : un abonnement de salle de sport non utilise coute en moyenne
        <strong> 240€ a 360€ par an</strong>. Mieux vaut resilier et se reabonner plus tard si besoin.
      </p>

      <h2>FAQ - Questions frequentes</h2>

      <h3>Peut-on resilier une salle de sport avant la fin de l&apos;engagement ?</h3>
      <p>
        Oui, mais uniquement avec un motif legitime (demenagement, maladie, chomage, etc.)
        ou en payant les mensualites restantes. Sans motif, vous devez attendre la fin
        de la periode d&apos;engagement.
      </p>

      <h3>Quel est le preavis pour resilier une salle de sport ?</h3>
      <p>
        Le preavis varie selon les enseignes : generalement 1 mois, parfois 2 mois.
        Consultez votre contrat ou le tableau comparatif ci-dessus.
      </p>

      <h3>La salle peut-elle refuser ma resiliation ?</h3>
      <p>
        Si vous respectez les conditions (fin d&apos;engagement + preavis ou motif legitime),
        la salle ne peut pas refuser. En cas de blocage, envoyez une mise en demeure et
        saisissez le mediateur.
      </p>

      <h3>Comment arreter les prelevements de ma salle de sport ?</h3>
      <p>
        Demandez d&apos;abord la resiliation officielle. Vous pouvez ensuite faire opposition
        au prelevement SEPA aupres de votre banque, mais cela ne vous libere pas du
        contrat si la resiliation n&apos;est pas validee.
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
                name: "Peut-on resilier une salle de sport avant la fin de l'engagement ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui, mais uniquement avec un motif legitime (demenagement, maladie, chomage, etc.) ou en payant les mensualites restantes. Sans motif, vous devez attendre la fin de la periode d'engagement.",
                },
              },
              {
                "@type": "Question",
                name: "Quel est le preavis pour resilier une salle de sport ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Le preavis varie selon les enseignes : generalement 1 mois, parfois 2 mois. Basic-Fit et Keep Cool ont un preavis d'1 mois, Fitness Park et L'Orange Bleue peuvent aller jusqu'a 2 mois.",
                },
              },
              {
                "@type": "Question",
                name: "La salle peut-elle refuser ma resiliation ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Si vous respectez les conditions (fin d'engagement + preavis ou motif legitime), la salle ne peut pas refuser. En cas de blocage, envoyez une mise en demeure et saisissez le mediateur de la consommation.",
                },
              },
              {
                "@type": "Question",
                name: "Comment arreter les prelevements de ma salle de sport ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Demandez d'abord la resiliation officielle. Vous pouvez ensuite faire opposition au prelevement SEPA aupres de votre banque, mais cela ne vous libere pas du contrat si la resiliation n'est pas validee.",
                },
              },
            ],
          }),
        }}
      />

      {/* Schema.org Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Resilier sa salle de sport : guide complet 2025",
            description: "Comment resilier son abonnement en salle de sport. Procedures, preavis, motifs legitimes pour Basic-Fit, Fitness Park, Keep Cool, Neoness, L'Orange Bleue.",
            datePublished: "2025-01-24",
            dateModified: "2025-01-28",
            author: {
              "@type": "Organization",
              name: "Rivko",
            },
          }),
        }}
      />
    </ArticleLayout>
  );
}

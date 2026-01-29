import { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Comment resilier Canal+ : guide complet 2025",
  description:
    "Resilier votre abonnement Canal+ : delais, procedures, lettres types et conseils pour une resiliation sans accroc.",
  keywords: [
    "resilier canal plus",
    "resiliation canal+",
    "annuler canal plus",
    "se desabonner canal+",
    "lettre resiliation canal",
  ],
  alternates: {
    canonical: "https://rivko.app/guides/resilier-canal-plus",
  },
};

export default function ArticlePage() {
  return (
    <ArticleLayout
      title="Comment resilier Canal+ : guide complet 2025"
      description="Toutes les methodes pour resilier Canal+ selon votre situation et votre type d'abonnement."
      publishedAt="2025-01-23"
      readingTime="6 min"
      isGuide={true}
      guideSlug="resilier-canal-plus"
    >
      <p>
        Canal+ est connu pour ses procedures de resiliation parfois complexes.
        Ce guide vous explique toutes les options selon votre situation.
      </p>

      <h2>Les differents cas de resiliation Canal+</h2>

      <h3>1. Abonnement avec engagement</h3>

      <p>
        Si vous etes encore engage (12 ou 24 mois), vous avez deux options :
      </p>

      <ul>
        <li>
          <strong>Attendre la fin de l&apos;engagement</strong> puis resilier
        </li>
        <li>
          <strong>Resilier avec frais</strong> : vous payez les mois restants
          (avec reduction de 25% generalement)
        </li>
      </ul>

      <h3>2. Abonnement sans engagement</h3>

      <p>
        Vous pouvez resilier a tout moment avec un preavis d&apos;un mois.
      </p>

      <h3>3. Motifs legitimes (resiliation immediate)</h3>

      <p>
        Vous pouvez resilier sans frais ni preavis dans ces cas :
      </p>

      <ul>
        <li>Demenagement a l&apos;etranger</li>
        <li>Surendettement</li>
        <li>Licenciement</li>
        <li>Longue maladie</li>
        <li>Deces</li>
      </ul>

      <h2>Resilier Canal+ en ligne (le plus simple)</h2>

      <ol>
        <li>Connectez-vous sur <strong>mycanal.fr</strong></li>
        <li>Allez dans <strong>&quot;Mon compte&quot;</strong></li>
        <li>Selectionnez <strong>&quot;Mon abonnement&quot;</strong></li>
        <li>Cliquez sur <strong>&quot;Gerer mon abonnement&quot;</strong></li>
        <li>Selectionnez <strong>&quot;Resilier mon abonnement&quot;</strong></li>
        <li>Suivez les etapes et confirmez</li>
      </ol>

      <div className="highlight-box">
        <p>
          <strong>Important :</strong> Gardez une trace ecrite (capture d&apos;ecran,
          email de confirmation) de votre demande de resiliation.
        </p>
      </div>

      <h2>Resilier Canal+ par courrier</h2>

      <p>
        Si la methode en ligne ne fonctionne pas, envoyez un courrier recommande
        avec accuse de reception a :
      </p>

      <p>
        <strong>Canal+ Service Resiliation</strong><br />
        TSA 86727<br />
        95905 Cergy-Pontoise Cedex 9
      </p>

      <h3>Modele de lettre de resiliation :</h3>

      <blockquote>
        Objet : Resiliation de mon abonnement Canal+ n°[VOTRE NUMERO]<br /><br />
        Madame, Monsieur,<br /><br />
        Je vous informe par la presente de ma volonte de resilier mon abonnement
        Canal+ reference [NUMERO] souscrit le [DATE].<br /><br />
        Conformement aux conditions generales, je vous demande de proceder a la
        resiliation effective de mon abonnement a l&apos;issue du preavis d&apos;un mois.<br /><br />
        Je vous prie de bien vouloir m&apos;adresser une confirmation ecrite de cette
        resiliation.<br /><br />
        Veuillez agreer, Madame, Monsieur, l&apos;expression de mes salutations distinguees.<br /><br />
        [Signature]
      </blockquote>

      <h2>Resilier par telephone</h2>

      <p>
        Appelez le <strong>0 892 393 093</strong> (service payant) ou le
        <strong> 09 70 82 08 15</strong> depuis l&apos;etranger.
      </p>

      <p>
        Attention : les conseillers sont formes pour vous retenir. Restez ferme
        sur votre decision si vous souhaitez vraiment resilier.
      </p>

      <h2>Tarifs Canal+ en 2025</h2>

      <table>
        <thead>
          <tr>
            <th>Offre</th>
            <th>Prix/mois</th>
            <th>Contenu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Canal+ Essentiel</td>
            <td>19,99€</td>
            <td>Chaines Canal+</td>
          </tr>
          <tr>
            <td>Canal+ Cine Series</td>
            <td>29,99€</td>
            <td>+ Netflix, Paramount+</td>
          </tr>
          <tr>
            <td>Canal+ Sport</td>
            <td>35,99€</td>
            <td>+ beIN SPORTS</td>
          </tr>
          <tr>
            <td>Canal+ Integrale</td>
            <td>49,99€</td>
            <td>Tout inclus</td>
          </tr>
        </tbody>
      </table>

      <h2>Alternatives a Canal+</h2>

      <ul>
        <li><strong>beIN SPORTS Connect</strong> : 15€/mois pour le sport</li>
        <li><strong>Netflix + Disney+</strong> : ~20€/mois pour les series/films</li>
        <li><strong>DAZN</strong> : Pour certains sports specifiques</li>
        <li><strong>RMC Sport</strong> : Pour la Ligue des Champions</li>
      </ul>

      <h2>Conseil</h2>

      <p>
        Utilisez <strong>Rivko</strong> pour noter la date de fin de votre
        engagement et recevoir un rappel avant le renouvellement automatique.
        Ainsi, vous ne serez plus bloque par une periode d&apos;engagement oubliee.
      </p>

      {/* Schema.org HowTo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Comment resilier Canal+",
            description: "Guide pour resilier votre abonnement Canal+",
            step: [
              {
                "@type": "HowToStep",
                name: "Connexion",
                text: "Connectez-vous sur mycanal.fr",
              },
              {
                "@type": "HowToStep",
                name: "Acces compte",
                text: "Allez dans Mon compte > Mon abonnement",
              },
              {
                "@type": "HowToStep",
                name: "Resiliation",
                text: "Cliquez sur Resilier mon abonnement et suivez les etapes",
              },
            ],
          }),
        }}
      />
    </ArticleLayout>
  );
}

import { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Mentions legales",
  description: "Mentions legales du site Rivko et de l'application mobile.",
  alternates: {
    canonical: "https://rivko.app/mentions-legales",
  },
};

export default function LegalMentionsPage() {
  return (
    <LegalLayout title="Mentions legales" lastUpdated="28 janvier 2025">
      <h2>1. Editeur de l&apos;Application et du Site</h2>
      <p>
        L&apos;application mobile Rivko et le site internet rivko.app sont edites par :
      </p>
      <ul>
        <li><strong>Nom</strong> : [Votre nom ou raison sociale]</li>
        <li><strong>Statut</strong> : [Auto-entrepreneur / SARL / SAS...]</li>
        <li><strong>Adresse</strong> : [Votre adresse]</li>
        <li><strong>SIRET</strong> : [Votre numero SIRET]</li>
        <li><strong>Email</strong> : <a href="mailto:contact@rivko.app">contact@rivko.app</a></li>
      </ul>
      <p>
        <em>
          Note : Ces informations doivent etre completees avec vos informations reelles
          avant la mise en ligne.
        </em>
      </p>

      <h2>2. Directeur de la publication</h2>
      <p>
        Le directeur de la publication est [Votre nom], en sa qualite de [fonction].
      </p>

      <h2>3. Hebergement du site</h2>
      <p>Le site rivko.app est heberge par :</p>
      <ul>
        <li><strong>Vercel Inc.</strong></li>
        <li>440 N Barranca Ave #4133</li>
        <li>Covina, CA 91723, USA</li>
        <li>Site : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a></li>
      </ul>

      <h2>4. Hebergement de l&apos;Application</h2>
      <p>L&apos;application Rivko est distribuee via :</p>
      <ul>
        <li>
          <strong>Apple App Store</strong> - Apple Inc., One Apple Park Way, Cupertino,
          California, USA
        </li>
        <li>
          <strong>Google Play Store</strong> - Google LLC, 1600 Amphitheatre Parkway,
          Mountain View, CA 94043, USA
        </li>
      </ul>

      <h2>5. Propriete intellectuelle</h2>
      <p>
        L&apos;ensemble du contenu du site rivko.app et de l&apos;application Rivko
        (textes, images, graphismes, logo, icones, sons, logiciels...) est la propriete
        exclusive de l&apos;editeur, a l&apos;exception des marques, logos ou contenus appartenant
        a d&apos;autres societes partenaires ou auteurs.
      </p>
      <p>
        Toute reproduction, distribution, modification, adaptation, retransmission ou
        publication de ces differents elements est strictement interdite sans l&apos;accord
        expres par ecrit de l&apos;editeur.
      </p>

      <h2>6. Donnees personnelles</h2>
      <p>
        Le traitement des donnees personnelles est decrit dans notre{" "}
        <a href="/confidentialite">Politique de confidentialite</a>.
      </p>
      <p>
        Conformement au RGPD, vous disposez d&apos;un droit d&apos;acces, de rectification,
        de suppression et de portabilite de vos donnees. Pour exercer ces droits,
        contactez-nous a <a href="mailto:contact@rivko.app">contact@rivko.app</a>.
      </p>

      <h2>7. Cookies</h2>
      <p>
        Le site rivko.app utilise des cookies a des fins de mesure d&apos;audience
        et d&apos;amelioration de l&apos;experience utilisateur. Vous pouvez configurer
        votre navigateur pour refuser les cookies.
      </p>

      <h2>8. Limitation de responsabilite</h2>
      <p>
        L&apos;editeur ne saurait etre tenu responsable des dommages directs ou indirects
        causes au materiel de l&apos;utilisateur lors de l&apos;acces au site ou a l&apos;application.
      </p>
      <p>
        L&apos;editeur decline toute responsabilite quant aux eventuelles perturbations,
        interruptions ou dysfonctionnements du site ou de l&apos;application.
      </p>

      <h2>9. Liens hypertextes</h2>
      <p>
        Le site peut contenir des liens hypertextes vers d&apos;autres sites. L&apos;editeur
        n&apos;exerce aucun controle sur ces sites et decline toute responsabilite quant
        a leur contenu.
      </p>

      <h2>10. Droit applicable</h2>
      <p>
        Les presentes mentions legales sont soumises au droit francais. En cas de litige,
        et apres tentative de resolution amiable, competence est donnee aux tribunaux
        francais.
      </p>

      <h2>11. Contact</h2>
      <p>
        Pour toute question ou reclamation, vous pouvez nous contacter :
      </p>
      <ul>
        <li>Par email : <a href="mailto:contact@rivko.app">contact@rivko.app</a></li>
        <li>Via notre <a href="/contact">formulaire de contact</a></li>
      </ul>
    </LegalLayout>
  );
}

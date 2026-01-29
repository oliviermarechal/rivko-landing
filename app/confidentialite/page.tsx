import { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Politique de confidentialite",
  description:
    "Politique de confidentialite d'Rivko. Decouvrez comment nous protegeons vos donnees personnelles.",
  alternates: {
    canonical: "https://rivko.app/confidentialite",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Politique de confidentialite" lastUpdated="28 janvier 2025">
      <h2>1. Introduction</h2>
      <p>
        La presente politique de confidentialite decrit comment Rivko (&quot;nous&quot;, &quot;notre&quot;,
        &quot;l&apos;application&quot;) collecte, utilise et protege vos informations personnelles lorsque
        vous utilisez notre application mobile de gestion d&apos;abonnements.
      </p>
      <p>
        Nous nous engageons a proteger votre vie privee et a traiter vos donnees personnelles
        conformement au Reglement General sur la Protection des Donnees (RGPD) et a la loi
        Informatique et Libertes.
      </p>

      <h2>2. Donnees collectees</h2>

      <h3>2.1 Donnees stockees localement</h3>
      <p>
        Rivko stocke les donnees suivantes <strong>uniquement sur votre appareil</strong> :
      </p>
      <ul>
        <li>Informations sur vos abonnements (nom, montant, date d&apos;echeance, categorie)</li>
        <li>Vos preferences d&apos;application (theme, notifications)</li>
        <li>Historique de vos rappels et notifications</li>
      </ul>
      <p>
        <strong>Ces donnees ne sont jamais transmises a nos serveurs.</strong> Elles restent
        exclusivement sur votre appareil et sont supprimees si vous desinstallez l&apos;application.
      </p>

      <h3>2.2 Donnees collectees par nos partenaires</h3>
      <p>
        Pour le fonctionnement de l&apos;application, nous faisons appel a des services tiers qui
        peuvent collecter certaines donnees :
      </p>
      <ul>
        <li>
          <strong>RevenueCat</strong> (gestion des achats in-app) : identifiant anonyme,
          historique d&apos;achats, pays
        </li>
        <li>
          <strong>Google AdMob</strong> (publicites, version gratuite uniquement) : identifiant
          publicitaire, donnees d&apos;interaction avec les publicites
        </li>
      </ul>

      <h2>3. Utilisation des donnees</h2>
      <p>Les donnees collectees sont utilisees pour :</p>
      <ul>
        <li>Vous envoyer des rappels avant les echeances de vos abonnements</li>
        <li>Afficher des statistiques sur vos depenses</li>
        <li>Gerer vos achats Premium</li>
        <li>Afficher des publicites pertinentes (version gratuite)</li>
      </ul>

      <h2>4. Partage des donnees</h2>
      <p>
        Nous ne vendons jamais vos donnees personnelles. Les donnees de vos abonnements
        restent sur votre appareil et ne sont partagees avec personne.
      </p>
      <p>
        Seules les donnees techniques necessaires au fonctionnement des services tiers
        (RevenueCat, AdMob) sont partagees avec ces partenaires, conformement a leurs
        propres politiques de confidentialite.
      </p>

      <h2>5. Conservation des donnees</h2>
      <ul>
        <li>
          <strong>Donnees locales</strong> : conservees tant que l&apos;application est installee
        </li>
        <li>
          <strong>Donnees RevenueCat</strong> : conservees conformement a leur politique
          (necessaire pour la gestion des abonnements Premium)
        </li>
      </ul>

      <h2>6. Vos droits</h2>
      <p>Conformement au RGPD, vous disposez des droits suivants :</p>
      <ul>
        <li><strong>Droit d&apos;acces</strong> : demander quelles donnees nous detenons sur vous</li>
        <li><strong>Droit de rectification</strong> : corriger vos donnees</li>
        <li><strong>Droit a l&apos;effacement</strong> : supprimer vos donnees</li>
        <li><strong>Droit a la portabilite</strong> : recevoir vos donnees dans un format lisible</li>
        <li><strong>Droit d&apos;opposition</strong> : vous opposer au traitement de vos donnees</li>
      </ul>
      <p>
        Pour les donnees stockees localement, vous pouvez les supprimer a tout moment en
        desinstallant l&apos;application. Pour toute autre demande, contactez-nous a
        <a href="mailto:contact@rivko.app"> contact@rivko.app</a>.
      </p>

      <h2>7. Securite</h2>
      <p>
        Vos donnees d&apos;abonnements etant stockees localement sur votre appareil, elles
        beneficient des mesures de securite de votre systeme d&apos;exploitation (iOS/Android).
      </p>
      <p>
        Nous recommandons d&apos;activer le verrouillage de votre appareil (code PIN, empreinte
        digitale, Face ID) pour proteger l&apos;acces a vos donnees.
      </p>

      <h2>8. Publicites</h2>
      <p>
        La version gratuite d&apos;Rivko affiche des publicites fournies par Google AdMob.
        Vous pouvez :
      </p>
      <ul>
        <li>Passer a la version Premium pour supprimer les publicites</li>
        <li>
          Limiter le suivi publicitaire dans les parametres de votre appareil
          (Parametres &gt; Confidentialite &gt; Publicite)
        </li>
      </ul>

      <h2>9. Mineurs</h2>
      <p>
        Rivko n&apos;est pas destine aux enfants de moins de 16 ans. Nous ne collectons pas
        sciemment de donnees personnelles concernant des mineurs.
      </p>

      <h2>10. Modifications</h2>
      <p>
        Nous pouvons mettre a jour cette politique de confidentialite. En cas de modification
        significative, nous vous en informerons via l&apos;application ou par notification.
      </p>

      <h2>11. Contact</h2>
      <p>
        Pour toute question concernant cette politique de confidentialite ou vos donnees
        personnelles, contactez-nous :
      </p>
      <ul>
        <li>Email : <a href="mailto:contact@rivko.app">contact@rivko.app</a></li>
      </ul>
    </LegalLayout>
  );
}

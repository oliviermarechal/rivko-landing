import { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Conditions generales d'utilisation",
  description:
    "Conditions generales d'utilisation d'Rivko. Regles d'utilisation de l'application.",
  alternates: {
    canonical: "https://rivko.app/conditions-utilisation",
  },
};

export default function TermsOfUsePage() {
  return (
    <LegalLayout title="Conditions generales d'utilisation" lastUpdated="28 janvier 2025">
      <h2>1. Objet</h2>
      <p>
        Les presentes Conditions Generales d&apos;Utilisation (CGU) ont pour objet de definir
        les modalites et conditions d&apos;utilisation de l&apos;application mobile Rivko
        (ci-apres &quot;l&apos;Application&quot;), ainsi que de definir les droits et obligations des
        parties dans ce cadre.
      </p>
      <p>
        L&apos;utilisation de l&apos;Application implique l&apos;acceptation pleine et entiere des
        presentes CGU.
      </p>

      <h2>2. Presentation de l&apos;Application</h2>
      <p>
        Rivko est une application mobile gratuite (avec option Premium payante) permettant
        aux utilisateurs de :
      </p>
      <ul>
        <li>Centraliser et suivre leurs abonnements (streaming, telecom, etc.)</li>
        <li>Recevoir des rappels avant les echeances</li>
        <li>Suivre leurs periodes d&apos;essai</li>
        <li>Visualiser leurs depenses par categorie</li>
      </ul>

      <h2>3. Acces a l&apos;Application</h2>
      <p>
        L&apos;Application est accessible gratuitement sur l&apos;App Store (iOS) et le Google Play
        Store (Android). Le telechargement et l&apos;utilisation de l&apos;Application necessitent :
      </p>
      <ul>
        <li>Un appareil compatible (iOS 14+ ou Android 8+)</li>
        <li>Une connexion internet pour le telechargement initial et les mises a jour</li>
      </ul>
      <p>
        L&apos;Application fonctionne ensuite hors ligne, les donnees etant stockees localement
        sur votre appareil.
      </p>

      <h2>4. Compte utilisateur</h2>
      <p>
        Rivko ne necessite pas de creation de compte. Vos donnees sont stockees
        localement sur votre appareil et ne sont pas synchronisees sur nos serveurs.
      </p>
      <p>
        En cas de changement d&apos;appareil, vos donnees ne seront pas transferees
        automatiquement.
      </p>

      <h2>5. Version gratuite et Premium</h2>

      <h3>5.1 Version gratuite</h3>
      <p>La version gratuite de l&apos;Application permet :</p>
      <ul>
        <li>De gerer jusqu&apos;a 5 abonnements</li>
        <li>De configurer 1 rappel par abonnement</li>
        <li>D&apos;acceder aux fonctionnalites de base</li>
      </ul>
      <p>La version gratuite contient des publicites.</p>

      <h3>5.2 Version Premium</h3>
      <p>La version Premium, accessible via un abonnement payant, offre :</p>
      <ul>
        <li>Un nombre illimite d&apos;abonnements</li>
        <li>Jusqu&apos;a 3 rappels par abonnement</li>
        <li>La suppression des publicites</li>
      </ul>
      <p>
        Les tarifs sont affiches dans l&apos;Application au moment de l&apos;achat. L&apos;abonnement
        Premium est renouvele automatiquement sauf resiliation au moins 24 heures avant
        la fin de la periode en cours.
      </p>

      <h2>6. Obligations de l&apos;utilisateur</h2>
      <p>L&apos;utilisateur s&apos;engage a :</p>
      <ul>
        <li>Utiliser l&apos;Application conformement a sa destination</li>
        <li>Ne pas tenter de contourner les mesures de securite de l&apos;Application</li>
        <li>Ne pas utiliser l&apos;Application a des fins illicites</li>
        <li>Ne pas reproduire, copier ou revendre l&apos;Application</li>
      </ul>

      <h2>7. Propriete intellectuelle</h2>
      <p>
        L&apos;Application, son contenu (textes, images, logos, icones) et son code source sont
        proteges par le droit de la propriete intellectuelle et restent la propriete
        exclusive d&apos;Rivko.
      </p>
      <p>
        Toute reproduction, representation, modification ou exploitation non autorisee
        est interdite.
      </p>

      <h2>8. Limitation de responsabilite</h2>
      <p>
        Rivko est un outil d&apos;aide a la gestion des abonnements. Nous ne pouvons
        garantir :
      </p>
      <ul>
        <li>L&apos;exactitude des montants ou dates saisis par l&apos;utilisateur</li>
        <li>La reception effective des notifications (dependante du systeme d&apos;exploitation)</li>
        <li>La resiliation effective de vos abonnements aupres des fournisseurs tiers</li>
      </ul>
      <p>
        L&apos;utilisateur reste seul responsable de la gestion de ses abonnements aupres
        des fournisseurs de services concernes.
      </p>

      <h2>9. Disponibilite de l&apos;Application</h2>
      <p>
        Nous nous efforcons de maintenir l&apos;Application accessible en permanence. Toutefois,
        nous pouvons suspendre temporairement l&apos;acces pour des raisons de maintenance
        ou de mise a jour.
      </p>

      <h2>10. Modification des CGU</h2>
      <p>
        Nous nous reservons le droit de modifier les presentes CGU a tout moment.
        Les utilisateurs seront informes des modifications significatives via
        l&apos;Application.
      </p>
      <p>
        La poursuite de l&apos;utilisation de l&apos;Application apres modification vaut
        acceptation des nouvelles CGU.
      </p>

      <h2>11. Resiliation</h2>
      <p>
        L&apos;utilisateur peut cesser d&apos;utiliser l&apos;Application a tout moment en la
        desinstallant de son appareil.
      </p>
      <p>
        Pour resilier un abonnement Premium, l&apos;utilisateur doit passer par les parametres
        de son compte App Store ou Google Play.
      </p>

      <h2>12. Droit applicable et juridiction</h2>
      <p>
        Les presentes CGU sont soumises au droit francais. En cas de litige, les parties
        s&apos;efforceront de trouver une solution amiable. A defaut, les tribunaux francais
        seront competents.
      </p>

      <h2>13. Contact</h2>
      <p>
        Pour toute question concernant ces conditions d&apos;utilisation :
      </p>
      <ul>
        <li>Email : <a href="mailto:contact@rivko.app">contact@rivko.app</a></li>
      </ul>
    </LegalLayout>
  );
}

import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez l'equipe Rivko. Une question, une suggestion, un probleme ? Nous sommes la pour vous aider.",
  alternates: {
    canonical: "https://rivko.app/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
          Contactez-nous
        </h1>
        <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
          Une question, une suggestion ou un probleme ? Notre equipe est la pour vous
          aider. Nous repondons generalement sous 24-48h.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">
              Autres moyens de nous contacter
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[var(--primary-muted)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[var(--primary)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-[var(--foreground)]">Email</p>
                  <a
                    href="mailto:contact@rivko.app"
                    className="text-[var(--primary)] hover:underline"
                  >
                    contact@rivko.app
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">
              Questions frequentes
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
                <h3 className="font-medium text-[var(--foreground)]">
                  Comment annuler mon abonnement Premium ?
                </h3>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  Rendez-vous dans les parametres de votre compte App Store ou Google
                  Play pour gerer vos abonnements.
                </p>
              </div>
              <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
                <h3 className="font-medium text-[var(--foreground)]">
                  Mes donnees sont-elles securisees ?
                </h3>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  Oui, vos donnees restent sur votre appareil et ne sont jamais envoyees
                  sur nos serveurs.
                </p>
              </div>
              <div className="p-4 bg-[var(--surface)] rounded-lg border border-[var(--border)]">
                <h3 className="font-medium text-[var(--foreground)]">
                  L&apos;application fonctionne-t-elle hors ligne ?
                </h3>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  Oui, Rivko fonctionne entierement hors ligne apres l&apos;installation
                  initiale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

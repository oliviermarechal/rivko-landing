"use client";

import { useState } from "react";

interface ReportErrorButtonProps {
  pageTitle: string;
  pageUrl: string;
}

export function ReportErrorButton({ pageTitle, pageUrl }: ReportErrorButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: `[Erreur Guide] ${pageTitle}`,
      message: formData.get("message") as string,
      page: pageUrl,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Une erreur est survenue");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-xl text-center">
        <p className="text-green-800 font-medium">
          Merci pour votre signalement ! Nous mettrons a jour le guide si necessaire.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          Une erreur dans ce guide ? Signalez-la nous
        </button>
      ) : (
        <div className="p-6 bg-[var(--surface-secondary)] rounded-xl border border-[var(--border)]">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold text-[var(--foreground)]">
              Signaler une erreur
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[var(--text-secondary)] hover:text-[var(--foreground)]"
              aria-label="Fermer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-[var(--text-secondary)] mb-4">
            La procedure a change ou ne fonctionne plus ? Aidez-nous a maintenir ce guide a jour.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="report-name" className="block text-sm font-medium text-[var(--foreground)] mb-1">
                  Votre nom
                </label>
                <input
                  type="text"
                  id="report-name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent bg-white"
                />
              </div>
              <div>
                <label htmlFor="report-email" className="block text-sm font-medium text-[var(--foreground)] mb-1">
                  Votre email
                </label>
                <input
                  type="email"
                  id="report-email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent bg-white"
                />
              </div>
            </div>
            <div>
              <label htmlFor="report-message" className="block text-sm font-medium text-[var(--foreground)] mb-1">
                Decrivez l&apos;erreur
              </label>
              <textarea
                id="report-message"
                name="message"
                rows={3}
                required
                placeholder="Ex: L'option 'Annuler l'abonnement' se trouve maintenant dans..."
                className="w-full px-4 py-2 border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent bg-white resize-none"
              />
            </div>
            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg font-medium hover:bg-[var(--primary-dark)] transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Envoi..." : "Envoyer le signalement"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

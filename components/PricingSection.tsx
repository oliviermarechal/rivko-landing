"use client";

import Link from "next/link";
import { useState } from "react";

const PRICING_FEATURES = {
  free: {
    name: "Gratuit",
    description: "Pour suivre tous vos abonnements",
    features: [
      "Abonnements illimites",
      "1 rappel par abonnement",
      "Suivi des periodes d'essai",
      "Statistiques completes",
    ],
    cta: "Telecharger",
  },
  premium: {
    name: "Premium",
    description: "Pour economiser encore plus",
    features: [
      "Suggestions d'alternatives moins cheres",
      "3 rappels par abonnement",
      "Sans publicite",
      "Support prioritaire",
    ],
    cta: "Essayer Premium",
    monthlyPrice: "0,99€",
    yearlyPrice: "8,99€",
    yearlyMonthlyEquiv: "0,75€",
    savings: "25%",
  },
};

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="tarifs" className="py-20 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
            Une offre simple et transparente
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Commencez gratuitement, passez Premium si vous avez besoin de plus.
          </p>

          {/* Toggle Mois / An */}
          <div className="mt-8 inline-flex items-center gap-3 bg-[var(--surface-secondary)] p-1 rounded-xl">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                !isYearly
                  ? "bg-white text-[var(--foreground)] shadow-sm"
                  : "text-[var(--text-secondary)] hover:text-[var(--foreground)]"
              }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all flex items-center gap-2 ${
                isYearly
                  ? "bg-white text-[var(--foreground)] shadow-sm"
                  : "text-[var(--text-secondary)] hover:text-[var(--foreground)]"
              }`}
            >
              Annuel
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">
                -{PRICING_FEATURES.premium.savings}
              </span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="relative p-8 rounded-2xl border-2 border-[var(--border)] bg-[var(--background)]">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[var(--foreground)]">
                {PRICING_FEATURES.free.name}
              </h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-[var(--foreground)]">0€</span>
              </div>
              <p className="mt-2 text-[var(--text-secondary)]">
                {PRICING_FEATURES.free.description}
              </p>
            </div>
            <ul className="mt-8 space-y-4">
              {PRICING_FEATURES.free.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[var(--primary)] flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-[var(--foreground)]">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="#telecharger"
                className="block w-full py-3 px-4 rounded-xl font-semibold text-center transition-colors bg-[var(--surface)] text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--primary)]"
              >
                {PRICING_FEATURES.free.cta}
              </Link>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="relative p-8 rounded-2xl border-2 border-[var(--primary)] bg-gradient-to-b from-[var(--primary-muted)] to-[var(--surface)]">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-[var(--foreground)]">
                {PRICING_FEATURES.premium.name}
              </h3>
              <div className="mt-4">
                {isYearly ? (
                  <>
                    <span className="text-4xl font-bold text-[var(--foreground)]">
                      {PRICING_FEATURES.premium.yearlyPrice}
                    </span>
                    <span className="text-[var(--text-secondary)]">/an</span>
                    <p className="mt-1 text-sm text-[var(--text-secondary)]">
                      soit {PRICING_FEATURES.premium.yearlyMonthlyEquiv}/mois
                    </p>
                  </>
                ) : (
                  <>
                    <span className="text-4xl font-bold text-[var(--foreground)]">
                      {PRICING_FEATURES.premium.monthlyPrice}
                    </span>
                    <span className="text-[var(--text-secondary)]">/mois</span>
                  </>
                )}
              </div>
              <p className="mt-2 text-[var(--text-secondary)]">
                {PRICING_FEATURES.premium.description}
              </p>
            </div>
            <ul className="mt-8 space-y-4">
              {PRICING_FEATURES.premium.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[var(--primary)] flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-[var(--foreground)]">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="#telecharger"
                className="block w-full py-3 px-4 rounded-xl font-semibold text-center transition-colors bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]"
              >
                {PRICING_FEATURES.premium.cta}
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

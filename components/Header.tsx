"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--surface)] border-b border-[var(--border)]">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo-blue.png"
              alt="Rivko"
              className="w-8 h-8"
            />
            <span className="font-bold text-xl text-[var(--foreground)]">Rivko</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/#fonctionnalites"
              className="text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
            >
              Fonctionnalites
            </Link>
            <Link
              href="/#tarifs"
              className="text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
            >
              Tarifs
            </Link>
            <Link
              href="/guides"
              className="text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
            >
              Guides
            </Link>
            <Link
              href="/blog"
              className="text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
            >
              Blog
            </Link>
            <Link
              href="#telecharger"
              className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg font-medium hover:bg-[var(--primary-dark)] transition-colors"
            >
              Telecharger
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-[var(--foreground)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--border)]">
            <div className="flex flex-col gap-4">
              <Link
                href="/#fonctionnalites"
                className="text-[var(--text-secondary)] hover:text-[var(--foreground)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Fonctionnalites
              </Link>
              <Link
                href="/#tarifs"
                className="text-[var(--text-secondary)] hover:text-[var(--foreground)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Tarifs
              </Link>
              <Link
                href="/guides"
                className="text-[var(--text-secondary)] hover:text-[var(--foreground)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Guides
              </Link>
              <Link
                href="/blog"
                className="text-[var(--text-secondary)] hover:text-[var(--foreground)]"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="#telecharger"
                className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Telecharger
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

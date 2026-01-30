import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rivko.app"),
  title: {
    default: "Rivko - Gerez vos abonnements, evitez les mauvaises surprises",
    template: "%s | Rivko",
  },
  description:
    "Rivko vous aide a suivre tous vos abonnements, recevoir des rappels avant les echeances et ne plus jamais oublier de resilier. Application gratuite disponible sur iOS et Android.",
  keywords: [
    "gestion abonnements",
    "suivi abonnements",
    "rappel resiliation",
    "tracker abonnements",
    "application abonnements",
    "resilier abonnement",
    "oublier abonnement",
    "depenses abonnements",
    "budget abonnements",
  ],
  authors: [{ name: "Rivko" }],
  creator: "Rivko",
  publisher: "Rivko",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.rivko.app",
    siteName: "Rivko",
    title: "Rivko - Gerez vos abonnements, evitez les mauvaises surprises",
    description:
      "Suivez tous vos abonnements, recevez des rappels avant les echeances et ne plus jamais oublier de resilier.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rivko - Gestionnaire d'abonnements",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rivko - Gerez vos abonnements",
    description: "Suivez vos abonnements et recevez des rappels avant les echeances.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.rivko.app",
  },
  verification: {
    google: "votre-code-verification-google",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

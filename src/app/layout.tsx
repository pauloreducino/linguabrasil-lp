import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Nunito_Sans } from "next/font/google";
import "./globals.css";

/* ── Fonts ── */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
  preload: true,
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
  preload: true,
});

/* ── SEO Metadata ── */
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://linguabrasil.com.br"
  ),
  title: {
    default: "Língua Brasil — Aprenda Português com uma Professora Nativa",
    template: "%s | Língua Brasil",
  },
  description:
    "Aprenda português brasileiro de forma rápida e natural com aulas online personalizadas. Professora nativa com método imersivo. Aula experimental grátis!",
  keywords: [
    "portuguese lessons online",
    "learn portuguese",
    "aula de português",
    "portuguese for foreigners",
    "Brazilian Portuguese",
    "online portuguese teacher",
    "português para estrangeiros",
    "learn Brazilian Portuguese online",
  ],
  authors: [{ name: "Língua Brasil" }],
  creator: "Língua Brasil",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "pt_BR",
    url: "/",
    siteName: "Língua Brasil",
    title: "Língua Brasil — Learn Portuguese with a Native Teacher",
    description:
      "Personalized online Portuguese lessons with a native Brazilian teacher. Natural, immersive method. Free trial class!",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Língua Brasil — Learn Brazilian Portuguese Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Língua Brasil — Learn Portuguese with a Native Teacher",
    description:
      "Personalized online Portuguese lessons. Natural, immersive method. Free trial class!",
    images: ["/og-image.png"],
  },
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "pt-BR": "/",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#1a3c2e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/* ── Root Layout ── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${nunito.variable}`}>
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Língua Brasil",
              description:
                "Online Brazilian Portuguese school for foreigners. Native teacher, immersive method.",
              url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://linguabrasil.com.br",
              logo: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://linguabrasil.com.br"}/og-image.png`,
              sameAs: [
                `https://instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE ?? "linguabrasil"}`,
              ],
              offers: {
                "@type": "Offer",
                name: "Free Trial Class",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

// Kendi site domainin veya Cloudflare linkin
const siteUrl = "https://antalyagunisi.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Antalya Günısı Zirve | Güneş Enerjisi Su Isıtma Sistemleri & Servisi",
  description: "Antalya'da yüksek verimli günısı (güneş enerjisi) montajı, tamiri, vakum tüplü ve krom depo sistemleri. Kesintisiz sıcak su ve 0506 252 16 81 hızlı teknik servis.",
  keywords: ["antalya günısı", "antalya güneş enerjisi", "günısı servisi antalya", "günısı tamiri", "günısı fiyatları antalya", "zirve güneş enerjisi"],
  authors: [{ name: "Antalya Günısı Zirve" }],
  openGraph: {
    title: "Antalya Günısı Zirve | Güneş Enerjisi Sistemleri",
    description: "Antalya genelinde hızlı teknik servis, krom depo, vakum tüp ve kesintisiz sıcak su çözümleri. Hemen arayın: 0506 252 16 81",
    url: siteUrl,
    siteName: "Antalya Günısı Zirve",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Antalya Günısı Zirve Güneş Enerji Sistemleri",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Antalya Günısı Zirve | Güneş Enerjisi Sistemleri",
    description: "Antalya'da kesintisiz sıcak su ve günısı teknik servisi: 0506 252 16 81",
    images: [`${siteUrl}/og-image.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Antalya Günısı Zirve Güneş Enerji Sistemleri",
    "image": `${siteUrl}/og-image.jpg`,
    "telephone": "0506 252 16 81",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Antalya",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.8848,
      "longitude": 30.7056
    },
    "url": "https://share.google/NIX5zaytsdFQggRCg",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "08:00",
      "closes": "20:00"
    }
  };

  return (
    <html lang="tr" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-solar-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Antalya Günısı Zirve | Güneş Enerjisi Su Isıtma Sistemleri & Servisi",
  description: "Antalya'da yüksek verimli günısı (güneş enerjisi) montajı, tamiri, vakum tüplü ve krom depo sistemleri. Kesintisiz sıcak su ve 0506 252 16 81 hızlı teknik servis.",
  keywords: ["antalya günısı", "antalya güneş enerjisi", "günısı servisi antalya", "günısı tamiri", "günısı fiyatları antalya", "zirve güneş enerjisi"],
  openGraph: {
    title: "Antalya Günısı Zirve Güneş Enerji Sistemleri",
    description: "Antalya'nın Zirve Güneş Enerjisi Teknolojileri. Akıllı, Dayanıklı ve Yüksek Tasarruflu Günısı Sistemleri.",
    locale: "tr_TR",
    type: "website",
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
    "image": "https://share.google/NIX5zaytsdFQggRCg",
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

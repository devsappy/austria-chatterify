import type { Metadata, Viewport } from "next";
import { Raleway, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/seo-data";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const KEYWORDS = [
  "Webdesign Österreich", "Webdesign Deutschland", "Webdesign DACH",
  "Webdesign Wien", "Webdesign Graz", "Webdesign Linz", "Webdesign Salzburg",
  "Webdesign Innsbruck", "Webdesign Klagenfurt", "Webdesign München",
  "Webdesign Berlin", "Webdesign Hamburg", "Webdesign Frankfurt",
  "Webdesign Köln", "Webdesign Stuttgart", "Webdesign Düsseldorf",
  "Webdesigner Wien", "Webdesigner München", "Webagentur Wien",
  "Webagentur München", "Webagentur DACH", "Webagentur Österreich",
  "Website erstellen lassen", "Homepage erstellen lassen",
  "Website für Handwerker", "Website für Installateur",
  "Website für Elektriker", "Website für Café", "Website für Restaurant",
  "Homepage Installateur", "Homepage Elektriker", "Homepage Café",
  "Homepage Restaurant", "Webseite Handwerksbetrieb",
  "Webseite Gastronomie", "Webseite Hotel Pension",
  "Lokales SEO Österreich", "Lokales SEO Deutschland",
  "Google Business Einrichtung", "Online-Terminbuchung Handwerk",
  "Reservierung Website Restaurant", "DSGVO Webseite",
  "EU Hosting Website", "Next.js Agentur DACH",
  "Webdesign Bayern", "Webdesign Tirol", "Webdesign Steiermark",
  "Webdesign Oberösterreich", "Webdesign Vorarlberg",
];

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Handwerk · Atelier — Webdesign für lokale Betriebe in Österreich & Deutschland",
    template: "%s · Handwerk · Atelier",
  },
  description:
    "Webdesign & Webentwicklung für Handwerksbetriebe, Cafés, Restaurants und Hotels in Wien, Graz, Salzburg, Linz, Innsbruck, München, Berlin, Hamburg und ganz DACH. Individuell, DSGVO-konform, EU-Hosting, in 7 Tagen online.",
  applicationName: SITE.name,
  keywords: KEYWORDS,
  authors: [{ name: SITE.brand, url: SITE.url }],
  creator: SITE.brand,
  publisher: SITE.brand,
  category: "Webdesign · Webentwicklung · Lokales SEO",
  generator: "Next.js",
  alternates: {
    canonical: "/",
    languages: {
      "de-AT": "/",
      "de-DE": "/",
      "de-CH": "/",
      "de": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "de_AT",
    alternateLocale: ["de_DE", "de_CH"],
    url: SITE.url,
    siteName: SITE.name,
    title:
      "Webdesign für lokale Betriebe in Österreich & Deutschland · Handwerk · Atelier",
    description:
      "Individuelle Websites für Installateure, Elektriker, Dachdecker, Cafés, Restaurants und Hotels im gesamten DACH-Raum. Wien · München · Berlin · Graz · Salzburg · Linz · Hamburg.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Handwerk · Atelier — Webdesign für lokale Betriebe in Österreich & Deutschland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Handwerk · Atelier — Webdesign DACH",
    description:
      "Websites für Handwerker, Cafés und Restaurants in Österreich & Deutschland. Wien · München · Berlin · Graz · Salzburg.",
    images: ["/og.jpg"],
    creator: "@handwerk_atelier",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "google-site-verification-token-goes-here",
    other: {
      "msvalidate.01": ["bing-site-verification-token"],
    },
  },
  other: {
    // Geo meta tags — AT primary, DE secondary. Search engines pick these up for regional relevance.
    "geo.region": "AT-9",
    "geo.placename": "Wien, Österreich",
    "geo.position": `${SITE.addressAT.lat};${SITE.addressAT.lon}`,
    ICBM: `${SITE.addressAT.lat}, ${SITE.addressAT.lon}`,
    "DC.language": "de",
    "DC.coverage": "Österreich, Deutschland, DACH",
    "DC.subject":
      "Webdesign, Webentwicklung, Lokales SEO, Handwerk, Gastronomie",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de-AT"
      className={`${raleway.variable} ${mono.variable}`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}

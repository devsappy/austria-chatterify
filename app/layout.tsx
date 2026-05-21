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
  "Handwerker Auftritt", "handwerker-auftritt.de",
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
      "Handwerker Auftritt — Webdesign für Handwerker & lokale Betriebe",
    template: "%s · Handwerker Auftritt",
  },
  description:
    "Webdesign & Webentwicklung für Handwerksbetriebe, Cafés, Restaurants und Hotels in Deutschland, Österreich und dem DACH-Raum. Individuell, DSGVO-konform, EU-Hosting, in 7 Tagen online.",
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
    locale: "de_DE",
    alternateLocale: ["de_AT", "de_CH"],
    url: SITE.url,
    siteName: SITE.name,
    title:
      "Webdesign für Handwerker & lokale Betriebe · Handwerker Auftritt",
    description:
      "Individuelle Websites für Installateure, Elektriker, Dachdecker, Cafés, Restaurants und Hotels im gesamten DACH-Raum. München · Berlin · Hamburg · Wien · Graz · Salzburg.",
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: "Handwerker Auftritt — Webdesign für Handwerker und lokale Betriebe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Handwerker Auftritt — Webdesign DACH",
    description:
      "Websites für Handwerker, Cafés und Restaurants in Deutschland & Österreich. München · Berlin · Hamburg · Wien · Graz.",
    images: [SITE.ogImage],
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
  other: {
    "geo.region": "DE-BY",
    "geo.placename": "München, Deutschland",
    "geo.position": `${SITE.addressDE.lat};${SITE.addressDE.lon}`,
    ICBM: `${SITE.addressDE.lat}, ${SITE.addressDE.lon}`,
    "DC.language": "de",
    "DC.coverage": "Deutschland, Österreich, DACH",
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
      lang="de-DE"
      className={`${raleway.variable} ${mono.variable}`}
    >
      <body className="font-sans">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}

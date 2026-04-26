import { SITE } from "@/lib/seo-data";

export default function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}#organization`,
        name: SITE.brand,
        url: SITE.url,
        email: SITE.email,
        logo: `${SITE.url}/logo.png`,
        description: SITE.tagline,
        foundingDate: "2014",
        areaServed: [
          { "@type": "Country", name: "Österreich" },
          { "@type": "Country", name: "Deutschland" },
          { "@type": "Country", name: "Schweiz" },
        ],
        knowsLanguage: ["de", "en", "it"],
        sameAs: [
          "https://www.linkedin.com/company/handwerk-atelier",
          "https://www.instagram.com/handwerk.atelier",
          "https://github.com/handwerk-atelier",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}#website`,
        url: SITE.url,
        name: SITE.name,
        inLanguage: "de-AT",
        publisher: { "@id": `${SITE.url}#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE.url}/suche?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE.url}#wien`,
        name: `${SITE.brand} — Wien`,
        url: `${SITE.url}/regionen/wien`,
        image: `${SITE.url}/og.jpg`,
        telephone: SITE.phoneAT,
        email: SITE.email,
        priceRange: "€€€",
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.addressAT.street,
          postalCode: SITE.addressAT.postalCode,
          addressLocality: SITE.addressAT.city,
          addressRegion: SITE.addressAT.region,
          addressCountry: SITE.addressAT.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: SITE.addressAT.lat,
          longitude: SITE.addressAT.lon,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        areaServed: [
          { "@type": "AdministrativeArea", name: "Wien" },
          { "@type": "AdministrativeArea", name: "Niederösterreich" },
          { "@type": "AdministrativeArea", name: "Burgenland" },
          { "@type": "Country", name: "Österreich" },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE.url}#muenchen`,
        name: `${SITE.brand} — München`,
        url: `${SITE.url}/regionen/muenchen`,
        image: `${SITE.url}/og.jpg`,
        telephone: SITE.phoneDE,
        email: SITE.email,
        priceRange: "€€€",
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.addressDE.street,
          postalCode: SITE.addressDE.postalCode,
          addressLocality: SITE.addressDE.city,
          addressRegion: SITE.addressDE.region,
          addressCountry: SITE.addressDE.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: SITE.addressDE.lat,
          longitude: SITE.addressDE.lon,
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Bayern" },
          { "@type": "AdministrativeArea", name: "Baden-Württemberg" },
          { "@type": "Country", name: "Deutschland" },
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE.url}#service-webdesign`,
        name: "Webdesign & Webentwicklung für lokale Betriebe",
        provider: { "@id": `${SITE.url}#organization` },
        serviceType: "Webdesign",
        areaServed: [
          { "@type": "Country", name: "Österreich" },
          { "@type": "Country", name: "Deutschland" },
        ],
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "EUR",
            description: "Individuelles Angebot nach Erstgespräch",
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE.url}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "In welchen Regionen seid ihr aktiv?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Wir arbeiten mit Betrieben in ganz Österreich und Deutschland. Vor-Ort-Termine in Wien, Graz, Salzburg, Linz, Innsbruck, Klagenfurt, München, Berlin, Hamburg, Frankfurt, Köln, Stuttgart und allen größeren Städten im DACH-Raum.",
            },
          },
          {
            "@type": "Question",
            name: "Wie läuft das Hosting ab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Domain und Hosting laufen auf Ihren Namen — bei EU-Anbietern mit Servern in Frankfurt oder Wien. DSGVO-konform, ohne Aufschlag.",
            },
          },
          {
            "@type": "Question",
            name: "Rechnung für Österreich oder Deutschland?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Beides. Rechnungen mit österreichischer UID-Nummer oder nach §13b UStG für Deutschland.",
            },
          },
          {
            "@type": "Question",
            name: "Muss ich selbst Texte und Fotos liefern?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nein. Wir schreiben Texte auf Wunsch mit Ihnen und organisieren einen Fotografen in Ihrer Stadt.",
            },
          },
          {
            "@type": "Question",
            name: "Bin ich nach dem Launch gebunden?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nein. Die Website gehört Ihnen, Sie erhalten alle Zugänge. Betreuung ist optional und jederzeit kündbar.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

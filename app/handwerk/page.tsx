import type { Metadata } from "next";
import Image from "next/image";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Contact from "@/components/Contact";
import { industriesByCategory, SITE } from "@/lib/seo-data";

export const metadata: Metadata = {
  title: "Website für Handwerker – Mehr Anfragen & Termine sichern",
  description:
    "Professionelle Website für Handwerker mit Online-Terminbuchung und direkten Kontaktwegen. Mehr Anfragen, mehr Aufträge – jetzt kostenlose Beratung sichern.",
  keywords: [
    "Website für Handwerker",
    "Handwerker-Website",
    "Online-Terminbuchung",
    "Handwerksbetrieb",
    "Anfrageformular",
    "Leads gewinnen",
    "mobil-optimiert",
  ],
  alternates: { canonical: "/handwerk" },
  openGraph: {
    title: "Website für Handwerker – Mehr Anfragen & Termine sichern",
    description:
      "Professionelle Website für Handwerker mit Online-Terminbuchung und direkten Kontaktwegen. Mehr Anfragen, mehr Aufträge – jetzt kostenlose Beratung sichern.",
    url: `${SITE.url}/handwerk`,
  },
};

const trades = industriesByCategory("handwerk");

const trustPoints = [
  {
    title: "Klare Kontaktwege",
    detail:
      "Damit Kunden anrufen, schreiben oder anfragen können, ohne lange zu suchen.",
  },
  {
    title: "Online-Terminbuchung",
    detail:
      "Direkt auf der Website integriert — für schnellere Conversions und planbare Termine.",
  },
  {
    title: "Anfragen ohne Verzögerung",
    detail:
      "Anfrageformulare senden Leads direkt in Ihr Postfach. Keine Antwort bleibt mehr liegen.",
  },
  {
    title: "Mobil-optimierte Wege",
    detail:
      "Nutzerführung für Kunden, die unterwegs Kontakt aufnehmen — vom Smartphone in zwei Klicks.",
  },
  {
    title: "Klare Struktur",
    detail:
      "Besucher verstehen Ihre Leistungen sofort und werden zur nächsten Handlung geführt.",
  },
];

const workflow = [
  {
    n: "01",
    label: "Discovery",
    title: "Verstehen & Planen",
    detail:
      "Wir starten damit, Ihren Betrieb, Ihre Leistungen und die typischen Kontaktwege Ihrer Kunden zu verstehen. Darauf aufbauend planen wir die Struktur Ihrer Website so, dass Terminbuchung und Anfragen reibungslos und ohne Umwege funktionieren.",
  },
  {
    n: "02",
    label: "Design",
    title: "Design für Vertrauen",
    detail:
      "Ein klares, professionelles Design gibt Ihren Kunden das gute Gefühl, mit einem seriösen Handwerksbetrieb in Kontakt zu treten. Jeder Bereich der Seite ist so aufgebaut, dass Besucher zur nächsten Handlung geführt werden – ob Buchung, Anruf oder Anfrage.",
  },
  {
    n: "03",
    label: "Integration",
    title: "Buchung & Kontakt",
    detail:
      "Ihre Website erhält alle Werkzeuge, die Ihr Betrieb wirklich braucht: Online-Terminbuchung, Anfrageformulare, Klick-zu-Anruf-Buttons und übersichtliche Kontaktbereiche – einwandfrei nutzbar auf Desktop und Smartphone. So fangen Sie kaufbereite Kunden genau dann ein, wenn die Entscheidung fällt.",
  },
  {
    n: "04",
    label: "Launch",
    title: "Launch & Lead-Bereitschaft",
    detail:
      "Vor dem Launch testen wir jede entscheidende Aktion: Formulare, Buttons und Buchungsabläufe müssen sauber funktionieren. Sobald Ihre Website live geht, sind Sie bereit, Anfragen zu empfangen, zu verfolgen und keine Chance mehr ungenutzt zu lassen.",
  },
];

const whyItMatters = [
  "Heiße Leads konvertieren am besten, wenn Kunden sofort handeln können.",
  "Ein verpasster Anruf oder eine späte Antwort schickt Kunden direkt zur Konkurrenz.",
  "Online-Terminbuchung senkt die Hürde und macht es Kunden leichter, sich zu entscheiden.",
  "Direkte Anfragen über Ihre Website schaffen eine zuverlässige, planbare Lead-Pipeline für Ihren Betrieb.",
];

const faqs = [
  {
    q: "Was kostet eine Website für Handwerker?",
    a: "Eine professionelle Website für Handwerksbetriebe mit Online-Terminbuchung, Anfrageformular und mobiloptimierter Nutzerführung startet bei einem fairen Festpreis nach Erstgespräch. Wir kalkulieren individuell nach Umfang Ihrer Leistungen, gewünschten Integrationen (Buchung, WhatsApp, Routing) und lokalem SEO-Bedarf — kein Stundensatz-Risiko, sondern ein klares Angebot vor Projektstart.",
  },
  {
    q: "Wie lange dauert es, eine Handwerker-Website zu erstellen?",
    a: "Vom ersten Gespräch bis zur Live-Website vergehen in der Regel rund sieben Werktage. Tag 1: Erstgespräch und Anforderungen. Tag 2–3: Designentwurf. Tag 4–6: Umsetzung mit Buchungs- und Kontaktintegration. Tag 7: Tests, Launch und Übergabe inklusive kurzer Einschulung.",
  },
  {
    q: "Welche Funktionen braucht eine Handwerker-Website wirklich?",
    a: "Die fünf wichtigsten Bausteine: Online-Terminbuchung direkt auf der Seite, ein vorqualifizierendes Anfrageformular mit Foto-Upload, sichtbare Klick-zu-Anruf-Buttons am Smartphone, klare Leistungs- und Kontaktseiten sowie eine mobiloptimierte Struktur. Damit verwandelt sich Interesse sofort in echte Anfragen, Anrufe oder Termine.",
  },
  {
    q: "Bekomme ich Anfragen direkt per E-Mail oder WhatsApp?",
    a: "Ja. Anfragen aus dem Formular werden automatisch an Ihren bevorzugten Kanal geroutet — E-Mail, WhatsApp oder direkt in Ihr Auftragssystem. Notdienste lassen sich separat behandeln, Standardanfragen warten auf den nächsten Werktag. Sie entscheiden den Filter, wir bauen das Routing.",
  },
  {
    q: "Ist die Website mobiloptimiert und DSGVO-konform?",
    a: "Ja. Jede Website wird mobile-first gebaut, lädt schnell auf 4G/5G und bestand alle Core-Web-Vitals-Prüfungen. Hosting läuft DSGVO-konform in der EU (Frankfurt oder Wien), Formulare und Buchungstools werden mit korrekter Einwilligung und Datenschutzerklärung ausgeliefert.",
  },
  {
    q: "Wird meine Handwerker-Website auch lokal bei Google gefunden?",
    a: "Ja. Wir richten Google Business Profile ein, schreiben Leistungsseiten pro PLZ-Bereich und integrieren strukturierte Daten (LocalBusiness, Service, FAQ). Suchanfragen wie „Installateur in 1070 Wien“ oder „Elektriker Notdienst München“ finden Ihren Betrieb — auch abends und am Wochenende.",
  },
];

const pageUrl = `${SITE.url}/handwerk`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumbs`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Start",
          item: SITE.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Website für Handwerker",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Website für Handwerker – Mehr Anfragen & Termine sichern",
      description:
        "Professionelle Website für Handwerker mit Online-Terminbuchung und direkten Kontaktwegen. Mehr Anfragen, mehr Aufträge – jetzt kostenlose Beratung sichern.",
      inLanguage: "de-DE",
      isPartOf: { "@id": `${SITE.url}#website` },
      breadcrumb: { "@id": `${pageUrl}#breadcrumbs` },
      primaryImageOfPage: { "@id": `${pageUrl}#primaryimage` },
      about: { "@id": `${pageUrl}#service` },
      mainEntity: { "@id": `${pageUrl}#faq` },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: [
          "[data-speakable='hero']",
          "[data-speakable='trust']",
          "[data-speakable='why']",
          "[data-speakable='faq']",
        ],
      },
    },
    {
      "@type": "ImageObject",
      "@id": `${pageUrl}#primaryimage`,
      url: `${SITE.url}/phone.png`,
      contentUrl: `${SITE.url}/phone.png`,
      caption: "Online-Terminbuchung für Handwerksbetriebe",
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Website für Handwerker",
      serviceType: "Webdesign für Handwerksbetriebe",
      provider: { "@id": `${SITE.url}#organization` },
      areaServed: [
        { "@type": "Country", name: "Deutschland" },
        { "@type": "Country", name: "Österreich" },
        { "@type": "Country", name: "Schweiz" },
      ],
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Handwerksbetriebe — Installateure, Elektriker, Dachdecker, Maler, Tischler, Gärtner, KFZ-Werkstätten",
      },
      description:
        "Professionelle Websites für Handwerksbetriebe mit Online-Terminbuchung, vorqualifizierendem Anfrageformular, Klick-zu-Anruf-Funktion und mobiloptimierter Nutzerführung. Heiße Leads werden direkt in Termine und Aufträge umgewandelt.",
      url: pageUrl,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Leistungen Website für Handwerker",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Online-Terminbuchung",
              description:
                "Direkt auf der Website integrierte Buchungslösung für schnellere Conversions.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Vorqualifizierendes Anfrageformular",
              description:
                "Pflichtfelder pro Branche, Foto-Upload vom Smartphone, automatisches Routing per E-Mail oder WhatsApp.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mobile-First Design",
              description:
                "Klick-zu-Anruf-Buttons, optimierte Ladezeiten und Touch-freundliche Nutzerführung.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Lokales SEO & Google Business",
              description:
                "Leistungsseiten pro PLZ-Bereich, Google-Business-Einrichtung, strukturierte Daten und Bewertungen.",
            },
          },
        ],
      },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          description: "Individuelles Angebot nach kostenlosem Erstgespräch.",
        },
      },
    },
    {
      "@type": "HowTo",
      "@id": `${pageUrl}#workflow`,
      name: "So entsteht Ihre Handwerker-Website in 4 Schritten",
      description:
        "Der Entwicklungsprozess Ihrer Website für Handwerker — von der ersten Anforderung bis zur Lead-bereiten Seite.",
      totalTime: "P7D",
      inLanguage: "de-DE",
      step: workflow.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.title,
        text: s.detail,
        url: `${pageUrl}#workflow-step-${s.n}`,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      inLanguage: "de-DE",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    },
  ],
};

export default function HandwerkPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumb
        items={[
          { href: "/", label: "Start" },
          { href: "/handwerk", label: "Handwerk" },
        ]}
      />

      {/* Hero */}
      <section className="border-b hair">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="grid grid-cols-12 gap-0 py-12 sm:py-16 md:py-24 lg:py-28">
            <div className="col-span-12 md:col-span-8" data-speakable="hero">
              <p className="mono-label text-ink-500">— Website für Handwerker</p>
              <h1 className="display-tight font-display mt-6 text-[44px] leading-[0.94] tracking-tightest text-ink-900 sm:text-6xl md:text-[88px] lg:text-[104px]">
                Aus Interesse werden{" "}
                <span className="font-normal text-accent">echte Anfragen</span>.
              </h1>
              <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-ink-700 sm:text-lg">
                Wenn Ihr Kunde bereit ist, einen Termin zu buchen, eine Frage
                zu stellen oder ein Angebot anzufordern, muss das{" "}
                <span className="font-medium text-ink-900">
                  sofort möglich sein
                </span>
                . Wir bauen Websites für Handwerksbetriebe, die heiße Leads
                über Online-Terminbuchung und direkte Kontaktwege einfangen —
                damit Sie keine Aufträge mehr durch Verzögerungen, verpasste
                Anrufe oder veraltete Formulare verlieren.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#kontakt"
                  className="group inline-flex h-12 items-center gap-3 border hair bg-ink-900 px-5 text-[13px] font-medium tracking-tight text-paper transition hover:bg-ink-800"
                >
                  Kostenloses Beratungsgespräch buchen
                  <span className="font-mono text-[11px] text-paper/60 transition group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
                <a
                  href="#vertrauen"
                  className="inline-flex h-12 items-center gap-2 border hair bg-paper px-5 text-[13px] font-medium tracking-tight text-ink-900 transition hover:bg-ink-50"
                >
                  Wie wir Anfragen gewinnen
                </a>
              </div>
            </div>

            <aside className="col-span-12 mt-12 md:col-span-4 md:mt-0 md:pl-8">
              <div className="frame p-5 sm:p-6">
                <div className="relative aspect-[4/5] overflow-hidden border hair bg-ink-50">
                  <Image
                    src="/phone.png"
                    alt="Online-Terminbuchung für Handwerksbetriebe"
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-contain p-1"
                  />
                </div>
                <p className="mono-label mt-6 text-ink-500">
                  — Was Ihre Website leisten muss
                </p>
                <ul className="mt-5 space-y-3 text-[14px] leading-relaxed text-ink-700">
                  <li>· Online-Terminbuchung</li>
                  <li>· Direktes Anfrageformular</li>
                  <li>· Klick-zu-Anruf am Smartphone</li>
                  <li>· Klare Kontaktwege ohne Suche</li>
                </ul>
                <div className="mt-6 border-t hair pt-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                    Das Ergebnis
                  </p>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-700">
                    Mehr Anfragen, schnellere Reaktionen — und echte Termine
                    statt verpasster Anrufe.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="vertrauen" className="border-b hair">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="grid grid-cols-12 gap-0 border-b hair py-12 sm:py-16 md:py-20">
            <div className="col-span-12 md:col-span-7 md:pr-8">
              <p className="mono-label text-ink-500">
                — Mehr als nur professionell
              </p>
              <h2 className="display-tight font-display mt-6 text-4xl leading-[1.02] tracking-tightest text-ink-900 sm:text-5xl md:text-6xl">
                Eine Website, die Kunden{" "}
                <span className="font-normal text-accent">handeln lässt</span>.
              </h2>
            </div>
            <div className="col-span-12 mt-8 md:col-span-4 md:col-start-9 md:mt-0">
              <p className="text-[15px] leading-relaxed text-ink-600">
                Eine Website für Ihren Handwerksbetrieb muss mehr leisten, als
                nur professionell auszusehen. Sie muss Ihre Kunden genau in
                dem Moment erreichen, in dem diese bereit sind zu handeln —
                ob das bedeutet, einen Termin zu buchen, eine Anfrage zu
                senden oder direkt anzurufen.
              </p>
            </div>
          </div>

          <ol
            className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-5"
            data-speakable="trust"
          >
            {trustPoints.map((p, i, arr) => (
              <li
                key={p.title}
                className={[
                  "flex flex-col gap-3 p-6 sm:p-8 md:p-10",
                  i < arr.length - 1 ? "border-b hair lg:border-b-0" : "",
                  i % 2 === 0 && i !== arr.length - 1
                    ? "md:border-r hair"
                    : "",
                  i < arr.length - 1 ? "lg:border-r hair" : "",
                ].join(" ")}
              >
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                  <span>0{i + 1}</span>
                  <span className="text-accent">Trust</span>
                </div>
                <h3 className="font-display text-xl leading-tight tracking-tight text-ink-900 sm:text-2xl">
                  {p.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-ink-600">
                  {p.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Workflow */}
      <section className="relative border-b hair bg-ink-900 text-paper">
        <div className="noise absolute inset-0" />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="grid grid-cols-12 gap-0 border-b border-white/10 py-12 sm:py-16 md:py-20">
            <div className="col-span-12 md:col-span-7 md:pr-8">
              <p className="mono-label text-paper/60">
                — So entsteht Ihre Website
              </p>
              <h2 className="display-tight font-display mt-6 text-4xl leading-[1.02] tracking-tightest sm:text-5xl md:text-6xl">
                So läuft die Entwicklung Ihrer{" "}
                <span className="font-normal text-accent-300">
                  Handwerker-Website
                </span>{" "}
                ab.
              </h2>
            </div>
            <div className="col-span-12 mt-8 md:col-span-4 md:col-start-9 md:mt-0">
              <p className="text-[15px] leading-relaxed text-paper/75">
                Vier klare Schritte — vom ersten Gespräch bis zur
                Lead-bereiten Website. Transparent, planbar, getestet.
              </p>
            </div>
          </div>

          <ol className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((s, i, arr) => (
              <li
                key={s.n}
                id={`workflow-step-${s.n}`}
                className={[
                  "flex flex-col gap-5 p-6 sm:p-8 md:p-10",
                  i < arr.length - 1 ? "border-b border-white/10" : "",
                  i % 2 === 0 && i !== arr.length - 1
                    ? "md:border-r border-white/10"
                    : "",
                  i < arr.length - 1 ? "lg:border-r border-white/10" : "",
                  "lg:border-b-0",
                ].join(" ")}
              >
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-paper/55">
                  <span>{s.n} / 04</span>
                  <span className="text-accent-300">{s.label}</span>
                </div>
                <h3 className="font-display text-[26px] leading-tight tracking-tight sm:text-[28px]">
                  {s.title}
                </h3>
                <p className="mt-auto text-[14.5px] leading-relaxed text-paper/75">
                  {s.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Industry tiles — only trades */}
      <section className="border-b hair">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="grid grid-cols-12 gap-0 border-b hair py-10 sm:py-12 md:py-16">
            <div className="col-span-12 md:col-span-8">
              <p className="mono-label text-ink-500">— Für diese Gewerke</p>
              <h2 className="display-tight font-display mt-6 text-3xl leading-[1.02] tracking-tightest text-ink-900 sm:text-4xl md:text-5xl">
                Sieben Gewerke, ein Bauplan.
              </h2>
            </div>
            <div className="col-span-12 mt-6 md:col-span-4 md:mt-0">
              <p className="text-[14.5px] leading-relaxed text-ink-600">
                Jedes Gewerk hat eigene Anforderungen — E-Check, PV-Förderung,
                Notdienst, Fotodokumentation. Wir kennen die Unterschiede
                und bauen sie ein.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-4">
            {trades.map((ind, i, arr) => (
              <a
                key={ind.slug}
                href={`/branchen/${ind.slug}`}
                className={[
                  "group flex flex-col gap-4 border-b hair p-6 transition-colors hover:bg-ink-900 hover:text-paper md:p-8",
                  (i + 1) % 4 !== 0 ? "lg:border-r hair" : "",
                  (i + 1) % 2 !== 0 ? "md:border-r hair lg:border-r" : "",
                  i >= arr.length - 1 ? "" : "",
                ].join(" ")}
              >
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400 group-hover:text-paper/60">
                  <span>
                    0{i + 1} / 0{arr.length}
                  </span>
                  <span className="opacity-0 transition group-hover:opacity-100">
                    →
                  </span>
                </div>
                <h3 className="font-display text-2xl leading-none tracking-tight md:text-[28px]">
                  {ind.name}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-ink-600 group-hover:text-paper/75">
                  {ind.features.slice(0, 2).join(" · ")}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters + Final CTA */}
      <section className="border-b hair">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="grid grid-cols-12 gap-0 py-12 sm:py-16 md:py-20">
            <div className="col-span-12 md:col-span-5 md:pr-10">
              <p className="mono-label text-ink-500">— Warum es zählt</p>
              <h2 className="display-tight font-display mt-6 text-3xl leading-[1.02] tracking-tightest text-ink-900 sm:text-4xl md:text-5xl">
                Machen Sie es Ihren Kunden{" "}
                <span className="font-normal text-accent">leicht</span>.
              </h2>
              <p className="mt-8 max-w-md text-[15px] leading-relaxed text-ink-600">
                Eine Website für Handwerker leistet mehr, als Ihren Betrieb
                zu präsentieren. Sie fängt Nachfrage ein, ermöglicht
                schnellere Reaktionen und macht aus mehr Besuchern echte
                Termine und Aufträge.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#kontakt"
                  className="group inline-flex h-12 items-center gap-3 border hair bg-ink-900 px-5 text-[13px] font-medium tracking-tight text-paper transition hover:bg-ink-800"
                >
                  Kostenloses Beratungsgespräch buchen
                  <span className="font-mono text-[11px] text-paper/60 transition group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
                <a
                  href="/kontakt"
                  className="inline-flex h-12 items-center gap-2 border hair bg-paper px-5 text-[13px] font-medium tracking-tight text-ink-900 transition hover:bg-ink-50"
                >
                  Website-Plan anfordern
                </a>
              </div>
            </div>

            <ul
              className="col-span-12 mt-10 grid grid-cols-1 gap-0 border-t hair md:col-span-7 md:mt-0 md:border-l md:border-t-0 md:pl-10"
              data-speakable="why"
            >
              {whyItMatters.map((item, i, arr) => (
                <li
                  key={item}
                  className={[
                    "flex items-start gap-5 py-6 md:py-8",
                    i < arr.length - 1 ? "border-b hair" : "",
                  ].join(" ")}
                >
                  <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                    0{i + 1}
                  </span>
                  <p className="text-[16px] leading-relaxed text-ink-800 sm:text-[17px]">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ — visible content matching FAQPage schema */}
      <section id="faq" className="border-b hair">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="grid grid-cols-12 gap-0 border-b hair py-10 sm:py-14 md:py-20">
            <div className="col-span-12 md:col-span-8">
              <p className="mono-label text-ink-500">— Häufige Fragen</p>
              <h2 className="display-tight font-display mt-6 text-3xl leading-[1.02] tracking-tightest text-ink-900 sm:text-4xl md:text-6xl">
                Antworten zur{" "}
                <span className="font-normal text-accent">
                  Handwerker-Website
                </span>
                .
              </h2>
            </div>
            <div className="col-span-12 mt-6 md:col-span-4 md:mt-0">
              <p className="text-[14.5px] leading-relaxed text-ink-600">
                Die Fragen, die Handwerksbetriebe vor dem Projektstart am
                häufigsten stellen — kurz, klar, mit konkreten Werten.
              </p>
            </div>
          </div>

          <div data-speakable="faq">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                className={[
                  "group border-b hair px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-7",
                  i === faqs.length - 1 ? "border-b-0" : "",
                ].join(" ")}
              >
                <summary className="flex cursor-pointer items-start justify-between gap-6 text-left">
                  <h3 className="font-display text-lg leading-snug tracking-tight text-ink-900 sm:text-xl md:text-2xl">
                    {f.q}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="mt-1 font-mono text-[12px] text-ink-500 transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink-700">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <Contact />
    </PageShell>
  );
}

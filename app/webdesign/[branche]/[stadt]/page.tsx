import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import {
  CITIES,
  INDUSTRIES,
  SITE,
  COUNTRY_LABEL,
  allCombos,
  cityBySlug,
  industryBySlug,
} from "@/lib/seo-data";

export function generateStaticParams() {
  return allCombos();
}

export async function generateMetadata(
  { params }: { params: { branche: string; stadt: string } }
): Promise<Metadata> {
  const ind = industryBySlug(params.branche);
  const city = cityBySlug(params.stadt);
  if (!ind || !city) return {};
  const country = COUNTRY_LABEL[city.country];

  const title = `Webdesign ${ind.name} ${city.name} — Website für ${ind.plural} in ${city.name}`;
  const description = `Individuelle Website für Ihren ${ind.name}-Betrieb in ${city.name} (${city.region}, ${country}). Inkl. ${ind.features
    .slice(0, 3)
    .join(", ")}. Lokales SEO, DSGVO, EU-Hosting — in 14 Tagen online.`;

  const canonical = `/webdesign/${ind.slug}/${city.slug}`;

  return {
    title,
    description,
    keywords: [
      `Webdesign ${ind.name} ${city.name}`,
      `Website ${ind.name} ${city.name}`,
      `Homepage ${ind.name} ${city.name}`,
      `Webseite ${ind.name} ${city.name}`,
      `${ind.name} Website ${city.name}`,
      `${ind.name} ${city.name}`,
      `${ind.plural} ${city.name}`,
      ...ind.synonyms.flatMap((s) => [
        `Webdesign ${s} ${city.name}`,
        `Website ${s} ${city.name}`,
        `${s} ${city.name}`,
      ]),
      ...city.keywords.flatMap((k) => [`${ind.name} ${k}`, `Webdesign ${k}`]),
      `Webdesign ${ind.name} ${city.region}`,
      `${ind.name} ${country}`,
    ],
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: `${SITE.url}${canonical}`,
      locale: city.country === "AT" ? "de_AT" : "de_DE",
    },
    other: {
      "geo.region": `${city.country}-${city.region}`,
      "geo.placename": `${city.name}, ${country}`,
      "geo.position": `${city.lat};${city.lon}`,
      ICBM: `${city.lat}, ${city.lon}`,
    },
  };
}

export default function ComboPage({
  params,
}: {
  params: { branche: string; stadt: string };
}) {
  const ind = industryBySlug(params.branche);
  const city = cityBySlug(params.stadt);
  if (!ind || !city) return notFound();
  const country = COUNTRY_LABEL[city.country];
  const phone = city.country === "AT" ? SITE.phoneAT : SITE.phoneDE;

  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        serviceType: `Webdesign für ${ind.plural}`,
        name: `Webdesign ${ind.name} ${city.name}`,
        description: `Webdesign, lokales SEO und Online-Terminbuchung für ${ind.plural} in ${city.name}.`,
        provider: {
          "@type": "Organization",
          name: SITE.brand,
          url: SITE.url,
        },
        areaServed: {
          "@type": "City",
          name: city.name,
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: city.region,
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: city.lat,
            longitude: city.lon,
          },
        },
        url: `${SITE.url}/webdesign/${ind.slug}/${city.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Start", item: SITE.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Branchen",
            item: `${SITE.url}/branchen`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: ind.name,
            item: `${SITE.url}/branchen/${ind.slug}`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: city.name,
            item: `${SITE.url}/webdesign/${ind.slug}/${city.slug}`,
          },
        ],
      },
    ],
  };

  // Related combos — 5 nearby cities in same country for same industry, + this city's other industries
  const nearbyCities = CITIES.filter(
    (c) => c.country === city.country && c.slug !== city.slug
  ).slice(0, 8);
  const otherIndustries = INDUSTRIES.filter((i) => i.slug !== ind.slug).slice(0, 8);

  return (
    <PageShell>
      <Breadcrumb
        items={[
          { href: "/", label: "Start" },
          { href: "/branchen", label: "Branchen" },
          { href: `/branchen/${ind.slug}`, label: ind.name },
          { href: `/webdesign/${ind.slug}/${city.slug}`, label: city.name },
        ]}
      />

      <section className="border-b hair">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid grid-cols-12 gap-0 border-b hair py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
            <div className="col-span-6">
              § {ind.slug.toUpperCase()} × {city.slug.toUpperCase()}
            </div>
            <div className="col-span-6 text-right">
              {city.region} · {country}
            </div>
          </div>

          {/* Hero */}
          <div className="grid grid-cols-12 gap-0 border-b hair py-14 md:py-24">
            <div className="col-span-12 md:col-span-9">
              <p className="mono-label text-ink-500">
                Webdesign · {ind.name} · {city.name}
              </p>
              <h1 className="display-tight mt-6 font-display text-5xl leading-[0.98] tracking-tightest text-ink-900 sm:text-6xl md:text-[96px] lg:text-[120px]">
                Webdesign für
                <br />
                <span className="font-normal text-accent">
                  {ind.plural}
                </span>
                <br />
                in {city.name}.
              </h1>
              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink-600">
                Wir bauen Websites für {ind.plural.toLowerCase()} in {city.name}{" "}
                und Umgebung ({city.keywords.slice(0, 3).join(" · ")}) — mit
                allem, was Ihr Betrieb braucht:{" "}
                {ind.features.slice(0, 3).join(", ").toLowerCase()}. Lokales SEO
                auf {city.name} ausgerichtet, DSGVO-konform, EU-Hosting, in
                14&nbsp;Tagen online.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#kontakt"
                  className="inline-flex h-12 items-center gap-3 border hair bg-ink-900 px-6 font-mono text-[11px] uppercase tracking-[0.16em] text-paper transition hover:bg-accent hover:border-accent"
                >
                  Intro buchen <span>→</span>
                </a>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="inline-flex h-12 items-center gap-3 border hair bg-paper px-6 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-900 transition hover:bg-ink-50"
                >
                  {phone}
                </a>
              </div>
            </div>

            <div className="col-span-12 mt-10 md:col-span-3 md:mt-0 md:border-l hair md:pl-8">
              <p className="mono-label text-ink-500">Kennzahlen</p>
              <dl className="mt-5 space-y-4 text-[13px]">
                {[
                  ["Stadt", city.name],
                  ["Region", city.region],
                  ["Land", country],
                  ["PLZ-Bereich", `${city.postalPrefix}XXX`],
                  ["Koordinaten", `${city.lat.toFixed(2)}° N · ${city.lon.toFixed(2)}° E`],
                  ["Lieferzeit", "14 Tage"],
                  ["Hosting", "EU (Frankfurt · Wien)"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-baseline justify-between gap-4 border-b hair pb-2"
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                      {k}
                    </dt>
                    <dd className="text-ink-800">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Why + features */}
          <div className="grid grid-cols-12 gap-0 border-b hair">
            <div className="col-span-12 border-b hair p-8 md:col-span-7 md:border-b-0 md:border-r md:p-12">
              <h2 className="font-display text-3xl tracking-tight text-ink-900 md:text-4xl">
                Warum {ind.plural} in {city.name} eine eigene Website brauchen
              </h2>
              <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-ink-700">
                <p>
                  Wer heute in {city.name} nach „{ind.name} {city.name}" sucht,
                  bekommt auf Google drei lokale Einträge und dann die
                  Website-Treffer. Ein Google-Business-Profil allein reicht
                  nicht mehr — Google bevorzugt seit 2024 Betriebe, die eine
                  eigene, schnelle Website mit passenden Schema-Markup-Signalen
                  haben.
                </p>
                <p>
                  Als {ind.name} konkurrieren Sie in {city.name} nicht nur mit
                  anderen Betrieben, sondern auch mit Online-Vermittlern wie
                  MyHammer, Helpling oder Check24. Eine direkte Anfrage über
                  Ihre eigene Website spart die 15–25 % Provision, die diese
                  Portale nehmen.
                </p>
                <p>
                  Wir bauen die Seite so, dass sie in {city.name} und im Umland
                  ({city.keywords.join(", ")}) gefunden wird. Ladezeit unter 2
                  Sekunden, DSGVO-konform, ohne externe Tracker. Rechnung mit
                  UID (AT) oder nach §13b UStG (DE).
                </p>
              </div>
            </div>
            <div className="col-span-12 p-8 md:col-span-5 md:p-12">
              <h3 className="font-display text-2xl tracking-tight text-ink-900">
                Was auf Ihrer {ind.name}-Website aus {city.name} nicht fehlen darf
              </h3>
              <ul className="mt-6 space-y-3 border-t hair pt-4 text-[14.5px] text-ink-700">
                {ind.features.map((f, i) => (
                  <li key={f} className="flex items-start gap-3 border-b hair pb-3">
                    <span className="font-mono text-[10px] text-accent">
                      0{i + 1}
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
                <li className="flex items-start gap-3 border-b hair pb-3">
                  <span className="font-mono text-[10px] text-accent">
                    0{ind.features.length + 1}
                  </span>
                  <span>
                    Google-Business-Profil optimiert für „{ind.name} {city.name}"
                  </span>
                </li>
                <li className="flex items-start gap-3 border-b hair pb-3">
                  <span className="font-mono text-[10px] text-accent">
                    0{ind.features.length + 2}
                  </span>
                  <span>
                    Impressum & Datenschutz nach {country === "Österreich" ? "ECG / DSGVO" : "TMG / DSGVO"}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Process mini */}
          <div className="grid grid-cols-12 gap-0 border-b hair">
            <div className="col-span-12 p-8 md:p-12">
              <div className="mb-8 flex items-baseline justify-between">
                <h2 className="font-display text-2xl tracking-tight text-ink-900 md:text-3xl">
                  Ablauf für Ihren {ind.name}-Betrieb in {city.name}
                </h2>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">
                  14 Tage
                </span>
              </div>
              <ol className="grid grid-cols-1 gap-0 border-t hair md:grid-cols-4">
                {[
                  { n: "01", t: "Gespräch", w: "TAG 01", d: `30 min. Telefon oder vor Ort in ${city.name}.` },
                  { n: "02", t: "Entwurf", w: "TAG 02–05", d: "Erster Designentwurf auf Basis Ihrer Marke." },
                  { n: "03", t: "Umsetzung", w: "TAG 06–12", d: "Entwicklung + 2 Korrekturrunden." },
                  { n: "04", t: "Launch", w: "TAG 13–14", d: "Übergabe, Einschulung, Google-Einreichung." },
                ].map((s, i, arr) => (
                  <li
                    key={s.n}
                    className={[
                      "flex flex-col gap-3 border-b hair p-6 md:p-8",
                      i < arr.length - 1 ? "md:border-b-0 md:border-r" : "md:border-b-0",
                    ].join(" ")}
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                      <span>{s.n}</span>
                      <span className="text-accent">{s.w}</span>
                    </div>
                    <h3 className="font-display text-xl tracking-tight text-ink-900">
                      {s.t}
                    </h3>
                    <p className="text-[13.5px] leading-relaxed text-ink-600">
                      {s.d}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Keyword cloud + related */}
          <div className="grid grid-cols-12 gap-0 border-b hair">
            <div className="col-span-12 p-8 md:col-span-7 md:border-r hair md:p-12">
              <h2 className="font-display text-2xl tracking-tight text-ink-900 md:text-3xl">
                Suchbegriffe für „{ind.name} {city.name}"
              </h2>
              <ul className="mt-6 flex flex-wrap gap-2">
                {[
                  `Webdesign ${ind.name} ${city.name}`,
                  `Website ${ind.name} ${city.name}`,
                  `Homepage ${ind.name} ${city.name}`,
                  `${ind.name} Website ${city.name}`,
                  `${ind.name} Webseite ${city.name}`,
                  `${ind.name} ${city.name}`,
                  `${ind.plural} ${city.name}`,
                  `${ind.name} in ${city.name} gesucht`,
                  `${ind.name} ${city.region}`,
                  ...ind.synonyms.map((s) => `${s} ${city.name}`),
                  ...city.keywords.map((k) => `${ind.name} ${k}`),
                  `Webdesigner ${city.name}`,
                  `Webagentur ${city.name}`,
                ].map((k) => (
                  <li
                    key={k}
                    className="border hair bg-paper px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-700"
                  >
                    {k}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 p-8 md:col-span-5 md:p-12">
              <h3 className="font-display text-xl tracking-tight text-ink-900">
                Andere {ind.plural.toLowerCase()} in {country}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {nearbyCities.map((c) => (
                  <a
                    key={c.slug}
                    href={`/webdesign/${ind.slug}/${c.slug}`}
                    className="border hair bg-paper px-3 py-1.5 text-[13px] text-ink-700 transition hover:bg-ink-900 hover:text-paper"
                  >
                    {ind.name} {c.name}
                  </a>
                ))}
              </div>

              <h3 className="mt-10 font-display text-xl tracking-tight text-ink-900">
                Andere Branchen in {city.name}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {otherIndustries.map((i) => (
                  <a
                    key={i.slug}
                    href={`/webdesign/${i.slug}/${city.slug}`}
                    className="border hair bg-paper px-3 py-1.5 text-[13px] text-ink-700 transition hover:bg-ink-900 hover:text-paper"
                  >
                    {i.name} {city.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div id="kontakt" className="relative overflow-hidden bg-ink-900 py-20 text-paper md:py-28">
            <div className="mx-auto max-w-[1000px] px-6 text-center">
              <p className="mono-label text-accent-300">
                Kontakt · {ind.name} · {city.name}
              </p>
              <h2 className="display-tight mt-6 font-display text-4xl leading-[1.02] tracking-tightest sm:text-5xl md:text-6xl">
                Lassen Sie uns über Ihre
                <br />
                <span className="font-normal text-accent-300">
                  {ind.name}-Website in {city.name}
                </span>{" "}
                sprechen.
              </h2>
              <div className="mt-12 flex flex-wrap justify-center gap-3">
                <a
                  href="/#kontakt"
                  className="inline-flex h-12 items-center gap-3 border border-accent bg-accent px-6 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition hover:bg-accent-600"
                >
                  Intro buchen <span>→</span>
                </a>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="inline-flex h-12 items-center gap-3 border border-white/20 bg-transparent px-6 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition hover:bg-white/10"
                >
                  {phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      </section>
    </PageShell>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import {
  CITIES,
  INDUSTRIES,
  SITE,
  COUNTRY_LABEL,
  cityBySlug,
} from "@/lib/seo-data";

export function generateStaticParams() {
  return CITIES.map((c) => ({ stadt: c.slug }));
}

export async function generateMetadata(
  { params }: { params: { stadt: string } }
): Promise<Metadata> {
  const city = cityBySlug(params.stadt);
  if (!city) return {};
  const country = COUNTRY_LABEL[city.country];
  const title = `Webdesign ${city.name} — Websites für lokale Betriebe in ${city.name} & ${city.region}`;
  const description = `Webdesign, Webentwicklung und lokales SEO für Handwerker, Cafés, Restaurants, Hotels und Dienstleister in ${city.name} (${city.region}, ${country}). Individuelle Websites, DSGVO-konform, EU-Hosting, in 14 Tagen online.`;
  const canonical = `/regionen/${city.slug}`;

  return {
    title,
    description,
    keywords: [
      `Webdesign ${city.name}`,
      `Webdesigner ${city.name}`,
      `Webagentur ${city.name}`,
      `Website erstellen ${city.name}`,
      `Homepage erstellen ${city.name}`,
      `Webseite ${city.name}`,
      `Webentwicklung ${city.name}`,
      `Lokales SEO ${city.name}`,
      `Google Ads ${city.name}`,
      ...city.keywords.map((k) => `Webdesign ${k}`),
      `Webdesign ${city.region}`,
      `Webdesign ${country}`,
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

export default function CityPage({ params }: { params: { stadt: string } }) {
  const city = cityBySlug(params.stadt);
  if (!city) return notFound();
  const country = COUNTRY_LABEL[city.country];

  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Webdesign & Webentwicklung",
    provider: { "@type": "Organization", name: SITE.brand, url: SITE.url },
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
    name: `Webdesign ${city.name}`,
    description: `Webdesign, Webentwicklung und lokales SEO für Betriebe in ${city.name}.`,
    url: `${SITE.url}/regionen/${city.slug}`,
  };

  return (
    <PageShell>
      <Breadcrumb
        items={[
          { href: "/", label: "Start" },
          { href: "/regionen", label: "Regionen" },
          { href: `/regionen/${city.slug}`, label: city.name },
        ]}
      />

      <section className="border-b hair">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid grid-cols-12 gap-0 border-b hair py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
            <div className="col-span-6">§ REG — {city.region}</div>
            <div className="col-span-6 text-right">
              N {city.lat.toFixed(2)}° · E {city.lon.toFixed(2)}°
            </div>
          </div>

          <div className="grid grid-cols-12 gap-0 border-b hair py-14 md:py-24">
            <div className="col-span-12 md:col-span-9">
              <p className="mono-label text-ink-500">
                Webdesign · {city.region} · {country}
              </p>
              <h1 className="display-tight mt-6 font-display text-5xl leading-[1.0] tracking-tightest text-ink-900 sm:text-7xl md:text-[120px]">
                Webdesign
                <br />
                <span className="italic font-normal text-accent">{city.name}</span>.
              </h1>
              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink-600">
                Wir bauen Websites für Handwerksbetriebe, Cafés, Restaurants,
                Hotels und Dienstleister in {city.name} und im Umland (
                {city.keywords.slice(0, 3).join(" · ")}). Jede Seite entsteht
                individuell — mit lokalem SEO, Google-Business-Anbindung,
                DSGVO-konformer Umsetzung und EU-Hosting.
              </p>
            </div>
            <div className="col-span-12 mt-10 md:col-span-3 md:mt-0 md:border-l hair md:pl-8">
              <p className="mono-label text-ink-500">Kontakt · {city.name}</p>
              <ul className="mt-5 space-y-3 text-[14.5px] text-ink-700">
                <li>
                  <a
                    href={city.country === "AT" ? `tel:${SITE.phoneAT}` : `tel:${SITE.phoneDE}`}
                    className="hover:text-accent"
                  >
                    {city.country === "AT" ? SITE.phoneAT : SITE.phoneDE}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${SITE.email}`} className="hover:text-accent">
                    {SITE.email}
                  </a>
                </li>
              </ul>
              <a
                href="#kontakt"
                className="mt-8 inline-flex h-11 w-full items-center justify-between border hair bg-ink-900 px-4 font-mono text-[11px] uppercase tracking-[0.16em] text-paper transition hover:bg-accent hover:border-accent"
              >
                Intro buchen <span>→</span>
              </a>
            </div>
          </div>

          {/* Industries in this city */}
          <div className="border-b hair py-14 md:py-20">
            <div className="mb-10 flex items-baseline justify-between">
              <h2 className="font-display text-3xl tracking-tight text-ink-900 md:text-5xl">
                Branchen in {city.name}
              </h2>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">
                {INDUSTRIES.length} Felder
              </span>
            </div>
            <p className="mb-10 max-w-2xl text-ink-600">
              Wir kennen die Pflichten jeder Branche — von Allergenkennzeichnung
              bis E-Check. Hier die Schwerpunkte, die wir in {city.name}
              regelmäßig betreuen:
            </p>
            <div className="grid grid-cols-2 gap-0 border-t hair sm:grid-cols-3 lg:grid-cols-4">
              {INDUSTRIES.map((ind) => (
                <a
                  key={ind.slug}
                  href={`/webdesign/${ind.slug}/${city.slug}`}
                  className="group flex flex-col gap-3 border-b border-r hair p-6 transition-colors hover:bg-ink-900 hover:text-paper"
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400 group-hover:text-paper/60">
                    Webdesign {ind.name}
                  </div>
                  <div className="font-display text-xl leading-tight tracking-tight">
                    {ind.name} in {city.name}
                  </div>
                  <div className="mt-auto font-mono text-[10px] uppercase tracking-[0.16em] text-ink-500 group-hover:text-paper/60">
                    → Details
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Why local */}
          <div className="grid grid-cols-12 gap-0 border-b hair">
            <div className="col-span-12 p-8 md:col-span-7 md:border-r hair md:p-12">
              <h2 className="font-display text-3xl tracking-tight text-ink-900 md:text-4xl">
                Warum lokal in {city.name}?
              </h2>
              <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-ink-700">
                <p>
                  Eine Website in {city.name} muss mehr als gut aussehen — sie
                  muss auf Google Business gefunden werden, wenn jemand in der
                  Nähe nach „{INDUSTRIES[0].name} {city.name}" oder „
                  {INDUSTRIES[9].name} {city.name}" sucht. Wir optimieren
                  Titel, Schema-Markup, Bewertungen und lokale Backlinks so,
                  dass Ihr Betrieb zuerst erscheint.
                </p>
                <p>
                  Die Seite lädt unter 2 Sekunden — auch auf LTE im Umland (
                  {city.keywords.join(", ")}). Sie ist DSGVO-konform aufgebaut,
                  auf EU-Servern gehostet, und kommt ohne Drittanbieter-Tracker
                  aus. Das ist wichtig, weil die Bußgelder für DSGVO-Verstöße in{" "}
                  {country} regelmäßig fünfstellig ausfallen.
                </p>
                <p>
                  Vor-Ort-Termine in {city.name} sind auf Anfrage möglich —
                  sonst arbeiten wir per Video. Rechnung mit UID-Nummer (AT)
                  oder nach §13b UStG (DE), je nach Sitz.
                </p>
              </div>
            </div>
            <div className="col-span-12 p-8 md:col-span-5 md:p-12">
              <h3 className="font-display text-2xl tracking-tight text-ink-900">
                Suchbegriffe, die wir für {city.name} abdecken
              </h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {[
                  `Webdesign ${city.name}`,
                  `Webdesigner ${city.name}`,
                  `Webagentur ${city.name}`,
                  `Website erstellen ${city.name}`,
                  `Homepage erstellen ${city.name}`,
                  `Webseite ${city.name}`,
                  `Webentwicklung ${city.name}`,
                  `Lokales SEO ${city.name}`,
                  `Google Ads ${city.name}`,
                  `Webdesign ${city.region}`,
                  ...city.keywords.map((k) => `Webdesign ${k}`),
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
          </div>

          {/* Other cities */}
          <div id="kontakt" className="py-14">
            <h2 className="font-display text-2xl tracking-tight text-ink-900 md:text-3xl">
              Weitere Regionen in {country}
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {CITIES.filter((c) => c.country === city.country && c.slug !== city.slug)
                .slice(0, 18)
                .map((c) => (
                  <a
                    key={c.slug}
                    href={`/regionen/${c.slug}`}
                    className="border hair bg-paper px-3 py-2 text-sm text-ink-700 transition hover:bg-ink-900 hover:text-paper"
                  >
                    Webdesign {c.name}
                  </a>
                ))}
              <a
                href="/regionen"
                className="border border-accent bg-accent px-3 py-2 text-sm text-paper transition hover:bg-accent-600"
              >
                Alle Regionen →
              </a>
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

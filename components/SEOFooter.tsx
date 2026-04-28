import { CITIES, INDUSTRIES, COUNTRY_LABEL, byCountry } from "@/lib/seo-data";

export default function SEOFooter() {
  const at = byCountry("AT");
  const de = byCountry("DE");
  // Featured hero combos — the long tail entry points
  const featured = [
    { ind: "installateur", city: "wien" },
    { ind: "elektriker", city: "muenchen" },
    { ind: "cafe", city: "salzburg" },
    { ind: "restaurant", city: "berlin" },
    { ind: "dachdecker", city: "graz" },
    { ind: "friseur", city: "innsbruck" },
    { ind: "hotel", city: "hamburg" },
    { ind: "tischler", city: "linz" },
  ];

  return (
    <section id="regionen" className="border-b hair">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* head */}
        <div className="grid grid-cols-12 gap-0 border-b hair py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-500 sm:text-[11px]">
          <div className="col-span-6">§ 09 — Regionen & Branchen</div>
          <div className="col-span-6 text-right">
            {CITIES.length} × {INDUSTRIES.length} ={" "}
            {CITIES.length * INDUSTRIES.length} Seiten
          </div>
        </div>

        <div className="grid grid-cols-12 gap-0 border-b hair py-10 sm:py-14 md:py-20">
          <div className="col-span-12 md:col-span-9">
            <h2 className="display-tight font-display text-4xl leading-[1.02] tracking-tightest text-ink-900 sm:text-5xl md:text-7xl">
              Vor Ort in{" "}
              <span className="font-normal text-accent">
                {CITIES.length} Städten
              </span>
              .
              <br />Für jede Branche eine eigene Seite.
            </h2>
          </div>
          <div className="col-span-12 mt-8 md:col-span-4 md:col-start-9 md:mt-0">
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-600">
              Von Webdesign Wien über Website Elektriker München bis Homepage
              Café Salzburg — wir haben für jede Kombination aus Region und
              Branche eine eigene, speziell optimierte Landingpage.
            </p>
          </div>
        </div>

        {/* Featured combo tiles */}
        <div className="border-b hair py-8 sm:py-10">
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-lg tracking-tight text-ink-900 sm:text-xl">
              Meistgesuchte Kombinationen
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-500 sm:text-[11px]">
              8 Beispiele
            </span>
          </div>
          <div className="grid grid-cols-2 gap-0 border-t hair sm:grid-cols-3 lg:grid-cols-4">
            {featured.map((f, i) => {
              const ind = INDUSTRIES.find((x) => x.slug === f.ind)!;
              const city = CITIES.find((x) => x.slug === f.city)!;
              return (
                <a
                  key={`${f.ind}-${f.city}`}
                  href={`/webdesign/${f.ind}/${f.city}`}
                  className="group flex flex-col gap-3 border-b border-r hair p-4 transition-colors hover:bg-ink-900 hover:text-paper sm:p-6"
                >
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400 group-hover:text-paper/60">
                    <span>0{i + 1}</span>
                    <span className="opacity-0 transition group-hover:opacity-100">→</span>
                  </div>
                  <div className="font-display text-base leading-tight tracking-tight sm:text-xl">
                    Webdesign {ind.name}
                    <br />
                    <span className="text-accent">{city.name}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Austria column */}
        <div className="grid grid-cols-12 gap-0 border-b hair">
          <div className="col-span-12 p-6 sm:p-8 md:col-span-3 md:border-r hair md:p-10">
            <h3 className="font-display text-3xl tracking-tight text-ink-900">
              Österreich
            </h3>
            <p className="mt-4 text-sm text-ink-600">
              {at.length} Städte — von Wien über Graz, Linz und Salzburg bis
              Innsbruck, Klagenfurt und Dornbirn.
            </p>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {at.map((c) => (
                <a
                  key={c.slug}
                  href={`/regionen/${c.slug}`}
                  className="border hair bg-paper px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-700 transition hover:bg-ink-900 hover:text-paper"
                >
                  {c.name}
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-12 border-t hair p-6 sm:p-8 md:col-span-9 md:border-l md:border-t-0 md:p-10">
            <p className="mono-label text-ink-500">
              Alle Branchen × Österreich — interne Links
            </p>
            <div className="mt-6 grid grid-cols-1 gap-0 border-t hair sm:grid-cols-2 md:grid-cols-3">
              {INDUSTRIES.slice(0, 9).map((ind) => (
                <div
                  key={ind.slug}
                  className="border-b border-r hair p-4"
                >
                  <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
                    {ind.name}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {at.slice(0, 6).map((c) => (
                      <a
                        key={c.slug}
                        href={`/webdesign/${ind.slug}/${c.slug}`}
                        className="text-[12px] text-ink-700 underline-offset-2 hover:text-accent hover:underline"
                      >
                        {c.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Germany column */}
        <div className="grid grid-cols-12 gap-0 border-b hair">
          <div className="col-span-12 p-6 sm:p-8 md:col-span-3 md:border-r hair md:p-10">
            <h3 className="font-display text-3xl tracking-tight text-ink-900">
              Deutschland
            </h3>
            <p className="mt-4 text-sm text-ink-600">
              {de.length} Städte — München, Berlin, Hamburg, Frankfurt, Köln,
              Stuttgart, Düsseldorf und weitere.
            </p>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {de.map((c) => (
                <a
                  key={c.slug}
                  href={`/regionen/${c.slug}`}
                  className="border hair bg-paper px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-700 transition hover:bg-ink-900 hover:text-paper"
                >
                  {c.name}
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-12 border-t hair p-6 sm:p-8 md:col-span-9 md:border-l md:border-t-0 md:p-10">
            <p className="mono-label text-ink-500">
              Alle Branchen × Deutschland — interne Links
            </p>
            <div className="mt-6 grid grid-cols-1 gap-0 border-t hair sm:grid-cols-2 md:grid-cols-3">
              {INDUSTRIES.slice(0, 9).map((ind) => (
                <div
                  key={ind.slug}
                  className="border-b border-r hair p-4"
                >
                  <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
                    {ind.name}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {de.slice(0, 6).map((c) => (
                      <a
                        key={c.slug}
                        href={`/webdesign/${ind.slug}/${c.slug}`}
                        className="text-[12px] text-ink-700 underline-offset-2 hover:text-accent hover:underline"
                      >
                        {c.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mass keyword cloud */}
        <div className="py-8 sm:py-12">
          <p className="mono-label text-ink-500">
            Suchbegriffe, die wir im DACH-Raum abdecken
          </p>
          <ul className="mt-6 flex flex-wrap gap-1.5">
            {INDUSTRIES.slice(0, 6).flatMap((ind) =>
              CITIES.slice(0, 10).map((c) => `${ind.name} ${c.name}`)
            ).concat([
              "Webdesign Österreich",
              "Webdesign Deutschland",
              "Webdesign DACH",
              "Webagentur Wien",
              "Webagentur München",
              "Webagentur Berlin",
              "Homepage erstellen lassen Österreich",
              "Homepage erstellen lassen Deutschland",
              "Website für Handwerker",
              "Website für Gastronomie",
              "Lokales SEO Österreich",
              "Lokales SEO Deutschland",
              "DSGVO Webseite",
              "EU Hosting Webseite",
            ]).slice(0, 120).map((k) => (
              <li
                key={k}
                className="border hair bg-paper px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-500"
              >
                {k}
              </li>
            ))}
          </ul>
        </div>

        {/* All industries */}
        <div className="border-t hair py-8 sm:py-10">
          <p className="mono-label text-ink-500">Alle Branchen</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {INDUSTRIES.map((ind) => (
              <a
                key={ind.slug}
                href={`/branchen/${ind.slug}`}
                className="border hair bg-paper px-3 py-1.5 text-[13px] text-ink-800 transition hover:bg-ink-900 hover:text-paper"
              >
                Webdesign {ind.name} ({ind.plural})
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

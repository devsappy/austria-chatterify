import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import {
  INDUSTRIES,
  CITIES,
  SITE,
  industryBySlug,
  byCountry,
  COUNTRY_LABEL,
} from "@/lib/seo-data";

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ branche: i.slug }));
}

export async function generateMetadata(
  { params }: { params: { branche: string } }
): Promise<Metadata> {
  const ind = industryBySlug(params.branche);
  if (!ind) return {};
  const title = `Webdesign für ${ind.plural} — Websites in Österreich & Deutschland`;
  const description = `Webdesign, lokales SEO und Online-Terminbuchung für ${ind.plural} in Wien, Graz, Salzburg, München, Berlin und ganz DACH. Inkl. ${ind.features.slice(0, 3).join(", ")}. Individuell, DSGVO-konform, EU-Hosting.`;

  return {
    title,
    description,
    keywords: [
      ...ind.keywords,
      `Webdesign ${ind.name}`,
      `Website ${ind.name}`,
      `Homepage ${ind.name}`,
      `Webseite ${ind.name}`,
      ...ind.synonyms.flatMap((s) => [`Webdesign ${s}`, `Website ${s}`]),
      `${ind.name} Website Österreich`,
      `${ind.name} Website Deutschland`,
    ],
    alternates: { canonical: `/branchen/${ind.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE.url}/branchen/${ind.slug}`,
    },
  };
}

export default function BranchePage({ params }: { params: { branche: string } }) {
  const ind = industryBySlug(params.branche);
  if (!ind) return notFound();
  const at = byCountry("AT");
  const de = byCountry("DE");

  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `Webdesign für ${ind.plural}`,
    provider: { "@type": "Organization", name: SITE.brand, url: SITE.url },
    areaServed: [
      { "@type": "Country", name: "Österreich" },
      { "@type": "Country", name: "Deutschland" },
    ],
    name: `Webdesign ${ind.name}`,
    description: `Webdesign und lokales SEO für ${ind.plural}.`,
    url: `${SITE.url}/branchen/${ind.slug}`,
  };

  return (
    <PageShell>
      <Breadcrumb
        items={[
          { href: "/", label: "Start" },
          { href: "/branchen", label: "Branchen" },
          { href: `/branchen/${ind.slug}`, label: ind.name },
        ]}
      />

      <section className="border-b hair">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid grid-cols-12 gap-0 border-b hair py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
            <div className="col-span-6">§ BR — {ind.name}</div>
            <div className="col-span-6 text-right">
              {ind.synonyms.length + 1} Synonyme
            </div>
          </div>

          <div className="grid grid-cols-12 gap-0 border-b hair py-14 md:py-24">
            <div className="col-span-12 md:col-span-9">
              <p className="mono-label text-ink-500">Branche · DACH</p>
              <h1 className="display-tight mt-6 font-display text-5xl leading-[1.0] tracking-tightest text-ink-900 sm:text-7xl md:text-[112px]">
                Webdesign
                <br />
                <span className="italic font-normal text-accent">
                  {ind.plural}
                </span>
                .
              </h1>
              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink-600">
                Websites für {ind.plural} mit allem, was der Beruf braucht —
                von {ind.features.slice(0, 2).join(" bis ").toLowerCase()}.
                Bundesweit in Österreich und Deutschland, individuell
                zugeschnitten, DSGVO-konform, in der EU gehostet.
              </p>
            </div>
          </div>

          {/* Features + pain points */}
          <div className="grid grid-cols-12 gap-0 border-b hair">
            <div className="col-span-12 border-b hair p-8 md:col-span-6 md:border-b-0 md:border-r md:p-12">
              <h2 className="font-display text-2xl tracking-tight text-ink-900 md:text-3xl">
                Was eine {ind.name}-Website leisten muss
              </h2>
              <ul className="mt-6 space-y-3 text-[15px] text-ink-700">
                {ind.features.map((f) => (
                  <li key={f} className="flex gap-3 border-b hair pb-3">
                    <span className="mt-2 inline-block h-px w-4 flex-none bg-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 p-8 md:col-span-6 md:p-12">
              <h2 className="font-display text-2xl tracking-tight text-ink-900 md:text-3xl">
                Typische Probleme ohne professionelle Website
              </h2>
              <ul className="mt-6 space-y-3 text-[15px] text-ink-700">
                {ind.painPoints.map((p) => (
                  <li key={p} className="flex gap-3 border-b hair pb-3">
                    <span className="mt-1 font-mono text-[11px] text-accent">
                      —
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cities */}
          <div className="border-b hair py-14 md:py-20">
            <div className="mb-10 flex items-baseline justify-between">
              <h2 className="font-display text-3xl tracking-tight text-ink-900 md:text-5xl">
                {ind.plural} in …
              </h2>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">
                {CITIES.length} Städte
              </span>
            </div>
            <p className="mb-10 max-w-2xl text-ink-600">
              Wählen Sie Ihre Region — jede Seite ist speziell auf{" "}
              {ind.plural.toLowerCase()} in der jeweiligen Stadt zugeschnitten,
              mit lokalen Keywords, Anfahrtswegen und Google-Business-Einbindung.
            </p>

            {[["AT", at], ["DE", de]].map(([cc, list]) => (
              <div key={cc as string} className="mb-12 last:mb-0">
                <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">
                  {COUNTRY_LABEL[cc as "AT" | "DE"]}
                </h3>
                <div className="grid grid-cols-2 gap-0 border-t hair sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {(list as typeof CITIES).map((c) => (
                    <a
                      key={c.slug}
                      href={`/webdesign/${ind.slug}/${c.slug}`}
                      className="group flex flex-col gap-2 border-b border-r hair p-5 transition-colors hover:bg-ink-900 hover:text-paper"
                    >
                      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400 group-hover:text-paper/60">
                        Webdesign {ind.name}
                      </div>
                      <div className="font-display text-xl leading-tight tracking-tight">
                        {c.name}
                      </div>
                      <div className="mt-auto font-mono text-[10px] uppercase tracking-[0.16em] text-ink-500 group-hover:text-paper/60">
                        {c.region}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Keyword cloud */}
          <div className="py-14">
            <h2 className="font-display text-2xl tracking-tight text-ink-900 md:text-3xl">
              Suchbegriffe, die wir abdecken
            </h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {[
                ...ind.keywords,
                ...ind.synonyms.flatMap((s) => [
                  `Webdesign ${s}`,
                  `Website ${s}`,
                  `Homepage ${s}`,
                ]),
                `${ind.name} Website Österreich`,
                `${ind.name} Website Deutschland`,
                `${ind.name} Webseite DACH`,
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      </section>
    </PageShell>
  );
}

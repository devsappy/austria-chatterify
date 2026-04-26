import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import { INDUSTRIES, SITE } from "@/lib/seo-data";

export const metadata: Metadata = {
  title:
    "Branchen — Webdesign für Handwerker, Cafés, Restaurants, Hotels · Österreich & Deutschland",
  description:
    "Spezialisiertes Webdesign für 12 Branchen: Installateur, Elektriker, Dachdecker, Maler, Tischler, Gärtner, Friseur, Kosmetik, Café, Restaurant, Hotel, KFZ-Werkstatt. Vor Ort in Wien, München, Berlin, Graz, Salzburg und ganz DACH.",
  alternates: { canonical: "/branchen" },
  openGraph: {
    title: "Branchen — Webdesign DACH",
    description:
      "Websites für Handwerker, Gastronomie und Dienstleister in Österreich und Deutschland.",
    url: `${SITE.url}/branchen`,
  },
};

export default function BranchenPage() {
  return (
    <PageShell>
      <Breadcrumb
        items={[
          { href: "/", label: "Start" },
          { href: "/branchen", label: "Branchen" },
        ]}
      />

      <section className="border-b hair">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid grid-cols-12 gap-0 border-b hair py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
            <div className="col-span-6">§ BR — Branchen</div>
            <div className="col-span-6 text-right">
              {INDUSTRIES.length} Felder
            </div>
          </div>

          <div className="grid grid-cols-12 gap-0 border-b hair py-14 md:py-24">
            <div className="col-span-12 md:col-span-9">
              <h1 className="display-tight font-display text-5xl leading-[1.0] tracking-tightest text-ink-900 sm:text-7xl md:text-[112px]">
                Websites für{" "}
                <span className="italic font-normal text-accent">
                  jede Branche
                </span>
                .
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-600">
                Jedes Gewerbe hat eigene Pflichten, eigene Kunden, eigene
                Verkaufsargumente. Wir bauen Websites, die diese Besonderheiten
                kennen — von der Allergenkennzeichnung bis zur Einbindung von
                Reservio, OpenTable oder PV-Förderrechnern.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind) => (
              <a
                key={ind.slug}
                href={`/branchen/${ind.slug}`}
                className="group flex flex-col gap-5 border-b border-r hair p-8 transition-colors last:border-r-0 hover:bg-ink-900 hover:text-paper md:p-10"
              >
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400 group-hover:text-paper/60">
                  <span>Branche</span>
                  <span className="opacity-0 transition group-hover:opacity-100">→</span>
                </div>
                <h2 className="font-display text-3xl leading-none tracking-tight">
                  {ind.name}
                </h2>
                <p className="text-[14.5px] leading-relaxed text-ink-600 group-hover:text-paper/80">
                  Webdesign für {ind.plural.toLowerCase()} — inkl.{" "}
                  {ind.features.slice(0, 2).join(" und ").toLowerCase()}.
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5 border-t hair pt-4 group-hover:border-white/20">
                  {ind.synonyms.slice(0, 3).map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-500 group-hover:text-paper/60"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

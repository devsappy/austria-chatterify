import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import { CITIES, COUNTRY_LABEL, SITE, byCountry } from "@/lib/seo-data";

export const metadata: Metadata = {
  title:
    "Regionen — Webdesign in Österreich & Deutschland · Wien · München · Berlin · Graz · Salzburg",
  description:
    "Webdesign & Webentwicklung für lokale Betriebe in 40 Städten im DACH-Raum. Wien, Graz, Linz, Salzburg, Innsbruck, Klagenfurt, München, Berlin, Hamburg, Frankfurt, Köln, Stuttgart und mehr.",
  alternates: { canonical: "/regionen" },
  openGraph: {
    title: "Regionen — Webdesign DACH",
    description:
      "40 Städte in Österreich und Deutschland — Wien, München, Berlin, Graz, Salzburg, Linz, Hamburg, Frankfurt, Köln, Stuttgart.",
    url: `${SITE.url}/regionen`,
  },
};

export default function RegionenPage() {
  const at = byCountry("AT");
  const de = byCountry("DE");

  return (
    <PageShell>
      <Breadcrumb
        items={[
          { href: "/", label: "Start" },
          { href: "/regionen", label: "Regionen" },
        ]}
      />

      <section className="border-b hair">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid grid-cols-12 gap-0 border-b hair py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
            <div className="col-span-6">§ REG — Regionen im DACH-Raum</div>
            <div className="col-span-6 text-right">{CITIES.length} Städte</div>
          </div>

          <div className="grid grid-cols-12 gap-0 border-b hair py-14 md:py-24">
            <div className="col-span-12 md:col-span-9">
              <h1 className="display-tight font-display text-5xl leading-[1.0] tracking-tightest text-ink-900 sm:text-7xl md:text-[112px]">
                Webdesign in{" "}
                <span className="font-normal text-accent">Österreich</span>
                <br />& <span className="font-normal text-accent">Deutschland</span>.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-600">
                Wir bauen Websites für Handwerksbetriebe, Cafés, Restaurants,
                Hotels und Dienstleister in {CITIES.length} Städten im
                DACH-Raum. Wählen Sie Ihre Region — jede Seite zeigt, welche
                Branchen wir vor Ort betreuen, welche Pflichten zu beachten sind
                und wie die Zusammenarbeit abläuft.
              </p>
            </div>
          </div>

          {[["AT", at], ["DE", de]].map(([country, list]) => (
            <div key={country as string} className="border-b hair py-12 last:border-b-0 md:py-16">
              <div className="mb-10 flex items-baseline justify-between">
                <h2 className="font-display text-3xl tracking-tight text-ink-900 md:text-5xl">
                  {COUNTRY_LABEL[country as "AT" | "DE"]}
                </h2>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">
                  {(list as typeof CITIES).length} Städte
                </span>
              </div>
              <div className="grid grid-cols-2 gap-0 border-t hair sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {(list as typeof CITIES).map((c) => (
                  <a
                    key={c.slug}
                    href={`/regionen/${c.slug}`}
                    className="group flex flex-col gap-3 border-b border-r hair p-5 transition-colors hover:bg-ink-900 hover:text-paper"
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400 group-hover:text-paper/60">
                      <span>{c.postalPrefix}XXX</span>
                      <span className="opacity-0 transition group-hover:opacity-100">→</span>
                    </div>
                    <div className="font-display text-2xl leading-none tracking-tight">
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
      </section>
    </PageShell>
  );
}

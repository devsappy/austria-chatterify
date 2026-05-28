import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Contact from "@/components/Contact";
import { SITE } from "@/lib/seo-data";
import { WISSEN_ARTICLES } from "@/lib/wissen-data";

export const metadata: Metadata = {
  title:
    "Wissen — Leitfäden für Handwerker- und Gastronomie-Websites",
  description:
    "Praxis-Guides zu Website-Kosten, Online-Terminbuchung, Google Business Profile, DSGVO und Gastronomie-Webseiten. Ehrliche Vergleiche, konkrete Zahlen, DACH-fokussiert.",
  keywords: [
    "Wissen Webdesign",
    "Handwerker Website Guide",
    "Gastronomie Website Leitfaden",
    "Google Business Profile",
    "DSGVO Website",
    "Online-Terminbuchung Vergleich",
  ],
  alternates: { canonical: "/wissen" },
  openGraph: {
    title:
      "Wissen — Leitfäden für Handwerker- und Gastronomie-Websites",
    description:
      "Praxis-Guides zu Website-Kosten, Buchungstools, Google Business, DSGVO und mehr. Ehrlich, konkret, DACH-fokussiert.",
    url: `${SITE.url}/wissen`,
  },
};

const pageUrl = `${SITE.url}/wissen`;

const collectionLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${pageUrl}#collection`,
  url: pageUrl,
  name: "Wissen — Leitfäden für Handwerker- und Gastronomie-Websites",
  description:
    "Praxis-Guides zu Website-Kosten, Online-Terminbuchung, Google Business Profile, DSGVO und Gastronomie-Webseiten.",
  inLanguage: "de-DE",
  isPartOf: { "@id": `${SITE.url}#website` },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: WISSEN_ARTICLES.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE.url}/wissen/${a.slug}`,
      name: a.title,
    })),
  },
};

export default function WissenPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }}
      />
      <Breadcrumb
        items={[
          { href: "/", label: "Start" },
          { href: "/wissen", label: "Wissen" },
        ]}
      />

      <section className="border-b hair">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="grid grid-cols-12 gap-0 py-12 sm:py-16 md:py-24 lg:py-28">
            <div className="col-span-12 md:col-span-9">
              <p className="mono-label text-ink-500">— Wissen & Leitfäden</p>
              <h1 className="display-tight font-display mt-6 text-[44px] leading-[0.96] tracking-tightest text-ink-900 sm:text-6xl md:text-[88px] lg:text-[104px]">
                Klare Antworten
                <br />
                statt{" "}
                <span className="font-normal text-accent">Marketing-Floskeln</span>
                .
              </h1>
              <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-ink-700 sm:text-lg">
                Praxis-Guides für Inhaber von Handwerksbetrieben und
                Gastronomie in Deutschland und Österreich. Was kostet eine
                Website wirklich? Welches Buchungstool passt? Wie richten Sie
                Google Business in 45 Minuten ein? Hier stehen die Antworten —
                mit Zahlen, Tools und Beispielen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b hair">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
            {WISSEN_ARTICLES.map((a, i, arr) => (
              <a
                key={a.slug}
                href={`/wissen/${a.slug}`}
                className={[
                  "group flex flex-col gap-5 border-b hair p-6 transition-colors hover:bg-ink-900 hover:text-paper sm:p-8 md:p-10",
                  i % 2 === 0 && i !== arr.length - 1
                    ? "md:border-r hair"
                    : "",
                  i === arr.length - 1 && arr.length % 2 !== 0
                    ? "md:col-span-2"
                    : "",
                ].join(" ")}
              >
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400 group-hover:text-paper/60">
                  <span>
                    0{i + 1} / 0{arr.length} · {a.category}
                  </span>
                  <span>{a.readingMinutes} Min</span>
                </div>
                <h2 className="font-display text-[26px] leading-tight tracking-tight md:text-[32px]">
                  {a.title}
                </h2>
                <p className="text-[14.5px] leading-relaxed text-ink-600 group-hover:text-paper/75">
                  {a.metaDescription}
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {a.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="border hair bg-paper px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-700 group-hover:bg-paper/10 group-hover:text-paper/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </PageShell>
  );
}

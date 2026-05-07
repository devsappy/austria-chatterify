import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import PainPoints from "@/components/PainPoints";
import SolutionStack from "@/components/SolutionStack";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import { industriesByCategory, SITE } from "@/lib/seo-data";

export const metadata: Metadata = {
  title:
    "Webdesign für Handwerk — Schluss mit dem Anruf-Chaos · Installateur, Elektriker, Dachdecker, Maler",
  description:
    "Websites für Handwerksbetriebe in Österreich und Deutschland. Schluss mit verlorenen Anrufen am Wochenende: ein klares Anfrage-Formular, Foto-Upload vom Bau, automatisches Routing — und in 7 Tagen online.",
  alternates: { canonical: "/handwerk" },
  openGraph: {
    title: "Webdesign für Handwerk — Schluss mit dem Anruf-Chaos",
    description:
      "Anfragen, die sich von selbst sortieren. Websites für Installateure, Elektriker, Dachdecker, Maler, Tischler, Gärtner und Werkstätten — DACH-weit, in 7 Tagen.",
    url: `${SITE.url}/handwerk`,
  },
};

const trades = industriesByCategory("handwerk");

export default function HandwerkPage() {
  return (
    <PageShell>
      <Breadcrumb
        items={[
          { href: "/", label: "Start" },
          { href: "/handwerk", label: "Handwerk" },
        ]}
      />

      {/* Hero — pain-led claim */}
      <section className="border-b hair">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="grid grid-cols-12 gap-0 border-b hair py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
            <div className="col-span-6">§ HW — Für Handwerksbetriebe</div>
            <div className="col-span-6 text-right">{trades.length} Gewerke · AT/DE</div>
          </div>

          <div className="grid grid-cols-12 gap-0 py-12 sm:py-16 md:py-24 lg:py-28">
            <div className="col-span-12 md:col-span-8">
              <h1 className="display-tight font-display text-[44px] leading-[0.94] tracking-tightest text-ink-900 sm:text-6xl md:text-[88px] lg:text-[104px]">
                Schluss mit dem
                <br />
                <span className="font-normal text-accent">Anruf-Chaos</span>.
              </h1>
              <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-ink-700 sm:text-lg">
                Den ganzen Tag klingelt das Telefon. Wer wollte was, wann, wo —
                und wo war noch das Foto vom Bad? Wir bauen Websites für
                Handwerksbetriebe, auf denen sich Anfragen{" "}
                <span className="font-medium text-ink-900">
                  von selbst sortieren
                </span>
                : strukturiertes Formular, Foto-Upload vom Bau, automatisches
                Routing per E-Mail oder WhatsApp.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#kontakt"
                  className="group inline-flex h-12 items-center gap-3 border hair bg-ink-900 px-5 text-[13px] font-medium tracking-tight text-paper transition hover:bg-ink-800"
                >
                  Kostenloses Erstgespräch
                  <span className="font-mono text-[11px] text-paper/60 transition group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
                <a
                  href="#loesung"
                  className="inline-flex h-12 items-center gap-2 border hair bg-paper px-5 text-[13px] font-medium tracking-tight text-ink-900 transition hover:bg-ink-50"
                >
                  Wie wir das lösen
                </a>
              </div>
            </div>

            <aside className="col-span-12 mt-12 md:col-span-4 md:mt-0 md:pl-8">
              <div className="frame p-5 sm:p-6">
                <p className="mono-label text-ink-500">— Ihr Tag heute</p>
                <ul className="mt-5 space-y-3 text-[14px] leading-relaxed text-ink-700">
                  <li>· 14 verpasste Anrufe</li>
                  <li>· 6 WhatsApp-Sprachnachrichten</li>
                  <li>· 3 Fotos vom Kunden — wo nochmal?</li>
                  <li>· 1 Notiz auf einem Bierdeckel</li>
                </ul>
                <div className="mt-6 border-t hair pt-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                    Ihr Tag morgen
                  </p>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-700">
                    Strukturierte Anfragen im Posteingang. Foto, Adresse,
                    Wunschtermin — alles dabei. Sie rufen nur die zurück,
                    die Sie wirklich annehmen wollen.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <PainPoints
        eyebrow="— Kennen Sie das?"
        title={
          <>
            Vier Dinge, die jeden{" "}
            <span className="font-normal text-accent">Werktag</span> rauben.
          </>
        }
        intro="Wir reden seit zehn Jahren mit Installateuren, Elektrikern und Dachdeckern. Jeder Tag fängt mit denselben Reibungspunkten an. Eine gute Website räumt mindestens drei davon weg — und gibt Ihnen den Abend zurück."
        pains={[
          {
            headline: "Anrufe am Wochenende verloren.",
            detail:
              "Der Notfall am Sonntag landet auf der Mailbox — und beim Mitbewerber, der zuerst zurückruft. Eine 24/7-Anfrageseite mit Notdienst-Routing fängt das ab, ohne dass Sie das Telefon anfassen müssen.",
          },
          {
            headline: "Fotos liegen auf drei Handys.",
            detail:
              "Der Kunde schickt das Foto vom Schaden per WhatsApp, Sie rufen zurück, finden es nicht mehr, fragen nochmal. Mit einem strukturierten Foto-Upload landet alles automatisch beim richtigen Auftrag.",
          },
          {
            headline: "Kostenvoranschläge dauern Tage.",
            detail:
              "Erst hin, vermessen, zurück ins Büro, Word öffnen, abtippen. Vorqualifizierte Anfragen mit Maßen, Fotos und Wunschtermin online — Sie schreiben das Angebot in 15 Minuten, nicht in zwei Tagen.",
          },
          {
            headline: "Google findet Sie nicht.",
            detail:
              "Wer nach 'Installateur in 1070 Wien' sucht, sieht drei Mitbewerber — Sie nicht. Wir richten Google Business ein, schreiben die Leistungsseiten lokal aus und sorgen dafür, dass Ihre PLZ wirklich gefunden wird.",
          },
        ]}
      />

      {/* Solution */}
      <div id="loesung">
        <SolutionStack
          eyebrow="— So lösen wir das"
          title={
            <>
              Eine Website, die Anfragen{" "}
              <span className="font-normal text-accent-300">vorqualifiziert</span>
              .
            </>
          }
          lede="Statt Telefon-Pingpong: ein klares Formular auf der Website, das alles abfragt, was Sie wirklich brauchen — Adresse, PLZ, Foto, Wunschtermin, Dringlichkeit. Landet bei Ihnen schon sortiert."
          solutions={[
            {
              tag: "Formular",
              title: "Smartes Anfrage-Formular",
              detail:
                "Pflichtfelder, die zur Branche passen — Maße, Stockwerk, Materialien — plus Foto-Upload direkt vom Smartphone. Spamschutz inklusive. Sie bekommen Anfragen, die Sie sofort bearbeiten können.",
            },
            {
              tag: "Routing",
              title: "Automatischer Versand",
              detail:
                "Anfragen landen per E-Mail, WhatsApp oder direkt in Ihrem System. Notdienste werden separat geroutet, Standard-Anfragen warten auf den Werktag — Sie entscheiden den Filter.",
            },
            {
              tag: "Sichtbarkeit",
              title: "Lokales Google-SEO",
              detail:
                "Google Business eingerichtet, Leistungsseiten pro PLZ-Bereich, Bewertungen integriert. 'Notdienst Installateur Wien 1070' findet Sie — auch nachts, auch am Sonntag.",
            },
          ]}
        />
      </div>

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
                  i >= arr.length - 1
                    ? ""
                    : "",
                ].join(" ")}
              >
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400 group-hover:text-paper/60">
                  <span>0{i + 1} / 0{arr.length}</span>
                  <span className="opacity-0 transition group-hover:opacity-100">→</span>
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

      {/* Process — same as homepage */}
      <Process />

      {/* Contact */}
      <Contact />
    </PageShell>
  );
}

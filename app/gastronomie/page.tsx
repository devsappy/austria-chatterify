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
    "Webdesign für Gastronomie — Reservierungen & Bestellungen ohne Telefon-Stress · Café, Restaurant, Hotel",
  description:
    "Websites für Cafés, Restaurants, Hotels, Friseure und Kosmetikstudios in Österreich und Deutschland. Online-Reservierung, QR-Speisekarte, Pickup-Bestellung — Ihr Service-Team kümmert sich um Gäste, nicht ums Telefon.",
  alternates: { canonical: "/gastronomie" },
  openGraph: {
    title: "Webdesign für Gastronomie — Reservierungen ohne Telefon-Stress",
    description:
      "Reservierungen, Bestellungen und Termine, die Ihr Service-Team entlasten. Für Cafés, Restaurants, Hotels und Studios in DACH — in 7 Tagen online.",
    url: `${SITE.url}/gastronomie`,
  },
};

const hospitality = industriesByCategory("gastronomie");

export default function GastronomiePage() {
  return (
    <PageShell>
      <Breadcrumb
        items={[
          { href: "/", label: "Start" },
          { href: "/gastronomie", label: "Gastronomie" },
        ]}
      />

      {/* Hero — pain-led claim */}
      <section className="border-b hair">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="grid grid-cols-12 gap-0 border-b hair py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
            <div className="col-span-6">§ GA — Für Gastronomie & Service</div>
            <div className="col-span-6 text-right">{hospitality.length} Konzepte · AT/DE</div>
          </div>

          <div className="grid grid-cols-12 gap-0 py-12 sm:py-16 md:py-24 lg:py-28">
            <div className="col-span-12 md:col-span-8">
              <h1 className="display-tight font-display text-[44px] leading-[0.94] tracking-tightest text-ink-900 sm:text-6xl md:text-[88px] lg:text-[104px]">
                Reservierungen.
                <br />
                Bestellungen.
                <br />
                <span className="font-normal text-accent">Ohne Telefon</span>.
              </h1>
              <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-ink-700 sm:text-lg">
                Tisch reservieren? Bestellung aufgeben? Termin verschieben?
                Geht alles übers Telefon — und der Service tippt mit. Wir
                bauen Websites für Cafés, Restaurants, Hotels und Studios,
                die das{" "}
                <span className="font-medium text-ink-900">
                  Service-Team entlasten
                </span>{" "}
                statt es zu blockieren.
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
                <p className="mono-label text-ink-500">
                  — Service heute, 19:00
                </p>
                <ul className="mt-5 space-y-3 text-[14px] leading-relaxed text-ink-700">
                  <li>· 23 Reservierungs-Anrufe</li>
                  <li>· 7× „Habt ihr glutenfrei?"</li>
                  <li>· 4 No-Shows, 2 Tische blockiert</li>
                  <li>· 1 Mitarbeiter am Telefon statt am Tisch</li>
                </ul>
                <div className="mt-6 border-t hair pt-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                    Service morgen, 19:00
                  </p>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-700">
                    Reservierungen laufen auf der Website. Speisekarte per
                    QR. Bestellungen für Pickup direkt aus dem Browser.
                    Service kümmert sich um Gäste, nicht ums Telefon.
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
            Vier Reibungspunkte zwischen{" "}
            <span className="font-normal text-accent">Gast</span> und Tisch.
          </>
        }
        intro="Wir reden seit zehn Jahren mit Wirten, Café-Betreibern und Hoteliers. Die Pain Points sind dieselben — egal ob 30 oder 130 Plätze. Eine gute Website nimmt Ihrem Service mindestens drei davon ab."
        pains={[
          {
            headline: "Reservierungen nur per Telefon.",
            detail:
              "Stoßzeit. Telefon klingelt. Service-Mitarbeiter blockiert für 2 Minuten — pro Anruf. Eine Online-Reservierung mit Echtzeit-Verfügbarkeit erledigt das in 30 Sekunden, ohne dass jemand abheben muss.",
          },
          {
            headline: "Speisekarte als veraltetes PDF.",
            detail:
              "Die Karte wurde vor zwei Jahren designt, der Allergencode fehlt, das Tagesgericht ist gar nicht drauf. QR-Speisekarte, gepflegt aus einem CMS, mit Allergenen und Tagesangebot — auf jedem Smartphone.",
          },
          {
            headline: "Bestellung am Sonntag? Nein.",
            detail:
              "Pickup-Anfrage per WhatsApp um 11:30 — der Koch sieht's um 12:15 — Gast wartet 20 Minuten. Online-Bestellung mit Slot-Wahl und Bezahlung im Browser, direkt in Ihre Küche.",
          },
          {
            headline: "Direkte Buchung am Hotel? Fehlanzeige.",
            detail:
              "Booking.com kassiert 18 % Provision auf jeden Gast. Mit einer eigenen Buchungsstrecke (HotelFriend, Beds24 oder direkt) holen Sie 30–60 % der Buchungen zurück — und behalten den Gast für Folgejahre.",
          },
        ]}
      />

      {/* Solution */}
      <div id="loesung">
        <SolutionStack
          eyebrow="— So lösen wir das"
          title={
            <>
              Eine Website, die Ihr Service-Team{" "}
              <span className="font-normal text-accent-300">entlastet</span>.
            </>
          }
          lede="Statt Telefon, WhatsApp und Zettelwirtschaft: Reservierungen, Bestellungen und Termine laufen strukturiert über die Website — und enden in Ihrem Kalender, nicht auf einem Block neben der Kasse."
          solutions={[
            {
              tag: "Reservierung",
              title: "Echtzeit-Reservierung",
              detail:
                "Online-Tischreservierung mit Live-Verfügbarkeit, Bestätigung per E-Mail, automatischer Erinnerung 24 h vorher. Integration mit Reservio, OpenTable, Resmio oder Quandoo — oder DSGVO-nativ in der EU.",
            },
            {
              tag: "Speisekarte",
              title: "QR-Karte & Bestellung",
              detail:
                "Speisekarte per QR-Code am Tisch, gepflegt aus einem einfachen CMS — mehrsprachig, mit Allergenen. Optional: Pickup-Bestellung mit Slot-Wahl und Online-Zahlung. Ohne App, ohne Wartezeit.",
            },
            {
              tag: "Direktbuchung",
              title: "Hotel-Direktbuchung",
              detail:
                "Eigene Buchungsstrecke statt 18 % Booking.com-Provision. Anbindung an HotelFriend, Beds24 oder Apaleo — und ein Frühbucher-Anreiz, der Gäste bei Ihnen direkt landen lässt.",
            },
          ]}
        />
      </div>

      {/* Industry tiles — only hospitality */}
      <section className="border-b hair">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="grid grid-cols-12 gap-0 border-b hair py-10 sm:py-12 md:py-16">
            <div className="col-span-12 md:col-span-8">
              <p className="mono-label text-ink-500">— Für diese Konzepte</p>
              <h2 className="display-tight font-display mt-6 text-3xl leading-[1.02] tracking-tightest text-ink-900 sm:text-4xl md:text-5xl">
                Fünf Konzepte, ein Service-Versprechen.
              </h2>
            </div>
            <div className="col-span-12 mt-6 md:col-span-4 md:mt-0">
              <p className="text-[14.5px] leading-relaxed text-ink-600">
                Reservierung, Online-Bestellung, Termin-Buchung — drei
                Werkzeuge, die wir für Ihre Branche genau richtig
                einbauen. Kein Telefon-Stress, keine OTA-Provisionen.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-5">
            {hospitality.map((ind, i, arr) => (
              <a
                key={ind.slug}
                href={`/branchen/${ind.slug}`}
                className={[
                  "group flex flex-col gap-4 border-b hair p-6 transition-colors hover:bg-ink-900 hover:text-paper md:p-8",
                  i < arr.length - 1 ? "md:border-r hair" : "",
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

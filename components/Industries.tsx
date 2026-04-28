import Image from "next/image";

const industries = [
  {
    idx: "I",
    title: "Installateure",
    blurb:
      "Notdienst prominent, klare Leistungsfelder, ein Anfrageformular, das auch am Bau funktioniert.",
    points: ["24/7-Notdienst", "Gebiete nach PLZ", "Foto-Anfrage"],
    image: "/electrician.jpg",
  },
  {
    idx: "II",
    title: "Elektriker",
    blurb:
      "E-Check, PV und Förderungen verständlich erklärt, Referenzen sichtbar, Online-Termine.",
    points: ["E-Check & PV", "Förderungen", "Terminbuchung"],
    image: "/electricians.jpg",
  },
  {
    idx: "III",
    title: "Cafés",
    blurb:
      "Speisekarte mit Allergenen, Öffnungszeiten live, Instagram-Feed und Maps-Integration.",
    points: ["Digitale Karte", "Öffnungszeiten", "Reservierung"],
    image: "/cafe.jpg",
  },
  {
    idx: "IV",
    title: "Restaurants",
    blurb:
      "Tischreservierung, Mehrsprachigkeit (DE/EN/IT), QR-Speisekarte und Events mit Anmeldung.",
    points: ["Reservio / OpenTable", "DE · EN · IT", "QR-Karte"],
    image: "/restraunt.jpg",
  },
  {
    idx: "V",
    title: "Dachdecker · Maler",
    blurb:
      "Projekt-Galerie mit Vorher/Nachher, Einzugsgebiet auf der Karte, Anfrage mit Foto-Upload.",
    points: ["Vorher/Nachher", "Einzugsgebiet", "Foto-Anfrage"],
    image: "/painter.jpg",
  },
  {
    idx: "VI",
    title: "Friseure · Studios",
    blurb:
      "Online-Terminbuchung, Team-Profile, mobile Preislisten — ohne PDF-Downloads.",
    points: ["Online-Termine", "Team-Seiten", "Mobile Karte"],
    image: "/hairdresser.jpg",
  },
];

export default function Industries() {
  return (
    <section id="branchen" className="border-b hair">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid grid-cols-12 gap-0 border-b hair py-10 sm:py-14 md:py-20">
          <div className="col-span-12 md:col-span-7">
            <h2 className="display-tight font-display text-4xl leading-[1.02] tracking-tightest text-ink-900 sm:text-5xl md:text-7xl">
              Für Betriebe,
              <br />
              die <span className="font-normal text-accent">morgens um sechs</span> starten.
            </h2>
          </div>
          <div className="col-span-12 mt-8 md:col-span-4 md:col-start-9 md:mt-0">
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-600">
              Jede Branche hat eigene Pflichten — Allergene, E-Check, Impressum,
              Öffnungszeiten. Wir kennen sie und bauen sie sauber ein, ohne dass
              Sie an Details denken müssen.
            </p>
            <div className="mt-6 flex gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
              <span>6 Branchen</span>
              <span className="text-ink-300">·</span>
              <span>AT / DE</span>
              <span className="text-ink-300">·</span>
              <span>seit 2014</span>
            </div>
          </div>
        </div>

        {/* horizontal rows — one industry per row */}
        <div className="flex flex-col">
          {industries.map((i) => (
            <article
              key={i.idx}
              className="group grid grid-cols-12 items-center gap-x-6 gap-y-4 border-b hair px-2 py-6 transition-colors last:border-b-0 hover:bg-ink-50 sm:px-4 md:gap-x-8 md:py-8"
            >
              <div className="col-span-2 flex items-center sm:col-span-1">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">
                  {i.idx}
                </span>
              </div>

              <div className="col-span-3 sm:col-span-2">
                <div className="relative aspect-[9/16] w-full overflow-hidden border hair bg-ink-100">
                  <Image
                    src={i.image}
                    alt={i.title}
                    fill
                    sizes="(min-width: 768px) 200px, 30vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
              </div>

              <h3 className="col-span-7 font-display text-[20px] leading-tight tracking-tight text-ink-900 sm:col-span-3 sm:text-[24px] md:text-[28px]">
                {i.title}
              </h3>

              <p className="col-span-12 max-w-2xl text-[14.5px] leading-relaxed text-ink-600 sm:col-span-3">
                {i.blurb}
              </p>

              <ul className="col-span-12 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-700 sm:col-span-2 sm:justify-end">
                {i.points.map((p, pi) => (
                  <li key={p} className="flex items-center gap-2">
                    {pi > 0 && <span className="hidden text-ink-300 sm:inline">·</span>}
                    <span className="flex items-center gap-2">
                      <span className="inline-block h-px w-3 bg-accent" />
                      {p}
                    </span>
                  </li>
                ))}
              </ul>

              <span className="col-span-12 hidden text-right font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400 transition group-hover:text-accent sm:col-span-1 sm:block">
                ↗
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

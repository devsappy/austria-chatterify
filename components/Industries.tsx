const industries = [
  {
    idx: "I",
    title: "Installateure",
    blurb:
      "Notdienst prominent, klare Leistungsfelder, ein Anfrageformular, das auch am Bau funktioniert.",
    points: ["24/7-Notdienst", "Gebiete nach PLZ", "Foto-Anfrage"],
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M7 3v6a5 5 0 0 0 5 5v7" />
        <path d="M17 3v6" />
        <path d="M5 3h4M15 3h4" />
      </svg>
    ),
  },
  {
    idx: "II",
    title: "Elektriker",
    blurb:
      "E-Check, PV und Förderungen verständlich erklärt, Referenzen sichtbar, Online-Termine.",
    points: ["E-Check & PV", "Förderungen", "Terminbuchung"],
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
      </svg>
    ),
  },
  {
    idx: "III",
    title: "Cafés",
    blurb:
      "Speisekarte mit Allergenen, Öffnungszeiten live, Instagram-Feed und Maps-Integration.",
    points: ["Digitale Karte", "Öffnungszeiten", "Reservierung"],
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 8h12v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8z" />
        <path d="M16 10h2a2 2 0 0 1 0 4h-2" />
        <path d="M7 3c0 1 1 1 1 2M11 3c0 1 1 1 1 2" />
      </svg>
    ),
  },
  {
    idx: "IV",
    title: "Restaurants",
    blurb:
      "Tischreservierung, Mehrsprachigkeit (DE/EN/IT), QR-Speisekarte und Events mit Anmeldung.",
    points: ["Reservio / OpenTable", "DE · EN · IT", "QR-Karte"],
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M5 3v8a3 3 0 0 0 3 3v7" />
        <path d="M8 3v8M11 3v8" />
        <path d="M17 3c-2 2-2 8 0 10v8" />
      </svg>
    ),
  },
  {
    idx: "V",
    title: "Dachdecker · Maler",
    blurb:
      "Projekt-Galerie mit Vorher/Nachher, Einzugsgebiet auf der Karte, Anfrage mit Foto-Upload.",
    points: ["Vorher/Nachher", "Einzugsgebiet", "Foto-Anfrage"],
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 11 12 4l9 7" />
        <path d="M5 10v9h14v-9" />
      </svg>
    ),
  },
  {
    idx: "VI",
    title: "Friseure · Studios",
    blurb:
      "Online-Terminbuchung, Team-Profile, mobile Preislisten — ohne PDF-Downloads.",
    points: ["Online-Termine", "Team-Seiten", "Mobile Karte"],
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="6" cy="7" r="3" />
        <circle cx="6" cy="17" r="3" />
        <path d="M20 5 8.5 15.5M20 19 8.5 8.5" />
      </svg>
    ),
  },
];

export default function Industries() {
  return (
    <section id="branchen" className="border-b hair">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* section head */}
        <div className="grid grid-cols-12 gap-0 border-b hair py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-500 sm:text-[11px]">
          <div className="col-span-6">§ 02 — Branchen</div>
          <div className="col-span-6 text-right">Sechs Felder</div>
        </div>

        <div className="grid grid-cols-12 gap-0 border-b hair py-10 sm:py-14 md:py-20">
          <div className="col-span-12 md:col-span-7">
            <h2 className="display-tight font-display text-4xl leading-[1.02] tracking-tightest text-ink-900 sm:text-5xl md:text-7xl">
              Für Betriebe,
              <br />
              die <span className="italic font-normal text-accent">morgens um sechs</span> starten.
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

        {/* grid */}
        <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
          {industries.map((i, idx) => {
            const row = Math.floor(idx / 3);
            const col = idx % 3;
            return (
              <article
                key={i.idx}
                className={[
                  "group relative flex flex-col gap-5 p-6 sm:p-8 md:p-10",
                  col < 2 ? "md:border-r hair" : "",
                  row === 0 ? "border-b hair md:border-b" : "",
                  "border-b hair last:border-b-0",
                ].join(" ")}
              >
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                  <span>{i.idx}</span>
                  <span className="opacity-0 transition group-hover:opacity-100">↗</span>
                </div>
                <div className="flex h-10 w-10 items-center justify-center border hair bg-ink-900 text-paper">
                  {i.icon}
                </div>
                <h3 className="font-display text-[28px] leading-none tracking-tight text-ink-900">
                  {i.title}
                </h3>
                <p className="text-[14.5px] leading-relaxed text-ink-600">
                  {i.blurb}
                </p>
                <ul className="mt-auto space-y-1.5 border-t hair pt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-600">
                  {i.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="inline-block h-px w-3 bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

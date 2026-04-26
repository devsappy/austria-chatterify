export default function Hero() {
  return (
    <section className="relative border-b hair">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* meta rail */}
        <div className="flex items-center justify-between gap-3 border-b hair py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-500 sm:text-[11px]">
          <div className="flex min-w-0 items-center gap-3 sm:gap-6">
            <span className="truncate">§ 01 — Einführung</span>
            <span className="hidden text-ink-400 sm:inline">/</span>
            <span className="hidden text-ink-600 sm:inline">MMXXVI</span>
          </div>
          <div className="flex flex-none items-center gap-3 sm:gap-6">
            <span className="hidden text-ink-500 md:inline">Wien · München · Berlin</span>
            <span className="hidden text-ink-400 md:inline">/</span>
            <span>N 48°12' · E 16°22'</span>
          </div>
        </div>

        {/* headline */}
        <div className="grid grid-cols-12 gap-0 border-b hair">
          <div className="col-span-12 py-10 sm:py-14 md:col-span-9 md:py-24 md:pr-8">
            <p className="mono-label text-ink-500">Ein Studio für lokale Marken</p>
            <h1 className="display-tight mt-6 font-display text-[44px] leading-[0.94] tracking-tightest text-ink-900 sm:text-[80px] md:text-[120px] lg:text-[148px]">
              Websites,
              <br />
              die <span className="italic font-normal text-accent">anrufen</span>
              <br />
              lassen.
            </h1>
          </div>
          <div className="col-span-12 flex flex-col justify-between gap-8 border-t hair py-8 md:col-span-3 md:border-l md:border-t-0 md:pl-8 md:py-24">
            <div className="space-y-3">
              <p className="mono-label text-ink-500">Kurzfassung</p>
              <p className="text-[15px] leading-relaxed text-ink-700">
                Ein kleines Atelier aus Wien und München. Wir bauen sorgfältige,
                schnelle Websites für Handwerksbetriebe, Cafés und Restaurants —
                individuell, in der EU gehostet, in 14&nbsp;Tagen online.
              </p>
            </div>
            <div className="space-y-3">
              <p className="mono-label text-ink-500">Nächster Schritt</p>
              <a
                href="#kontakt"
                className="group inline-flex h-11 w-full items-center justify-between border hair bg-ink-900 px-4 text-[13px] font-medium text-paper transition hover:bg-ink-800"
              >
                <span>Kostenloses Intro-Gespräch</span>
                <span className="font-mono text-[11px] text-ink-300 transition group-hover:text-paper">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* meta stats */}
        <div className="grid grid-cols-2 border-b hair md:grid-cols-4">
          {[
            ["I", "14 Tage", "Durchschnittliche Lieferzeit"],
            ["II", "12 Jahre", "Arbeit mit lokalen Betrieben"],
            ["III", "100/100", "Lighthouse-Score im Durchschnitt"],
            ["IV", "EU/DSGVO", "Hosting in Frankfurt & Wien"],
          ].map(([i, k, v], idx, arr) => (
            <div
              key={i}
              className={[
                "flex flex-col justify-between gap-6 p-5 sm:p-6 md:px-8 md:py-10",
                idx === 0 ? "md:pl-0" : "",
                idx % 2 === 0 ? "border-r hair" : "",
                idx === 1 ? "md:border-r hair" : "",
                idx < arr.length - 2 ? "border-b hair md:border-b-0" : "",
              ].join(" ")}
            >
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                <span>{i}</span>
                <span>—</span>
              </div>
              <div>
                <div className="font-display text-3xl tracking-tight text-ink-900 md:text-4xl">
                  {k}
                </div>
                <div className="mt-2 text-[13px] leading-snug text-ink-600">
                  {v}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Marquee />
    </section>
  );
}

function Marquee() {
  const items = [
    "Installateur Wagner — Wien",
    "Café Lindenblatt — Salzburg",
    "Elektro Huber GmbH — Graz",
    "Trattoria Da Luca — München",
    "Dachdeckerei Ostler — Innsbruck",
    "Bäckerei Kern — Berlin",
    "Malermeister Seidl — Linz",
    "Ristorante Aurelio — Hamburg",
    "Friseur Mayer & Söhne — Klagenfurt",
    "Weinbar Sept — Wien",
  ];
  return (
    <div className="relative overflow-hidden border-b hair bg-ink-900 py-4 text-paper">
      <div className="flex w-max marquee gap-10 whitespace-nowrap px-4 font-mono text-[10px] uppercase tracking-[0.18em] sm:gap-14 sm:px-6 sm:text-[11px]">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-4 text-ink-200">
            <span className="h-1 w-1 flex-none rounded-full bg-accent-400" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

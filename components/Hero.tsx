export default function Hero() {
  return (
    <section className="relative border-b hair">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* eyebrow */}
        <div className="grid grid-cols-12 items-center gap-3 border-b hair py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500 sm:text-[11px]">
          <div className="col-span-7 flex min-w-0 items-center gap-3 sm:gap-5">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Nº 01
            </span>
            <span className="text-ink-300">/</span>
            <span className="truncate text-ink-700">Atelier für lokale Marken</span>
          </div>
          <div className="col-span-5 hidden justify-end gap-5 text-ink-500 md:flex">
            <span>MMXXVI</span>
            <span className="text-ink-300">·</span>
            <span>Wien — München — Berlin</span>
          </div>
        </div>

        {/* headline */}
        <div className="grid grid-cols-12 gap-0 border-b hair">
          <div className="relative col-span-12 flex flex-col py-12 sm:py-16 md:col-span-9 md:py-24 md:pr-8 lg:py-28">
            <h1 className="display-tight font-display text-[48px] leading-[0.92] tracking-tightest text-ink-900 sm:text-[88px] md:text-[112px] lg:text-[136px] xl:text-[152px]">
              Websites
              <br />
              die dich zum{" "}
              <span className="italic font-normal">Staunen</span>
              <span
                aria-hidden
                className="ml-2 inline-block h-[0.16em] w-[0.16em] translate-y-[-0.55em] rounded-full bg-accent align-baseline sm:ml-3"
              />
              <br />
              bringen.
            </h1>

            {/* meta strip below headline */}
            <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t hair pt-8 sm:grid-cols-4">
              {[
                ["A", "Standorte", "Wien · München · Berlin"],
                ["B", "Branchen", "Handwerk · Gastronomie"],
                ["C", "Methode", "Sorgfalt · Tempo"],
                ["D", "Antwort", "Innerhalb 24 Std."],
              ].map(([k, label, value]) => (
                <div key={k} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                    <span>{k}</span>
                    <span>—</span>
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
                    {label}
                  </div>
                  <div className="text-[14px] leading-snug text-ink-800">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="col-span-12 flex flex-col justify-between gap-10 border-t hair py-10 md:col-span-3 md:border-l md:border-t-0 md:pl-8 md:py-28 lg:py-32">
            <div className="space-y-4">
              <p className="mono-label text-ink-500">— Kurzfassung</p>
              <p className="text-[15px] leading-relaxed text-ink-700">
                Ein kleines Atelier aus Wien und München. Wir bauen sorgfältige,
                schnelle Websites für Handwerksbetriebe, Cafés und Restaurants —
                individuell, in der EU gehostet, in 14&nbsp;Tagen online.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
                <span>— Nächster Schritt</span>
                <span className="text-ink-400">↘</span>
              </div>
              <a
                href="#kontakt"
                className="group relative block overflow-hidden border hair bg-ink-900 text-paper transition hover:bg-ink-800"
              >
                <span className="flex h-12 items-center justify-between px-4 text-[13px] font-medium">
                  Kostenloses Gespräch buchen
                  <span className="font-mono text-[11px] text-ink-300 transition group-hover:translate-x-0.5 group-hover:text-paper">
                    ↗
                  </span>
                </span>
                <span className="block border-t border-white/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-300">
                  20 Min · unverbindlich
                </span>
              </a>
            </div>
          </aside>
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

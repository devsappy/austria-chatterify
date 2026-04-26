const steps = [
  {
    n: "01",
    when: "TAG 01",
    t: "Gespräch",
    d: "30 Minuten am Telefon oder vor Ort. Wir hören zu und erstellen ein individuelles Angebot.",
  },
  {
    n: "02",
    when: "TAG 02–05",
    t: "Entwurf",
    d: "Ein erster Designentwurf auf Basis Ihres Logos, Ihrer Fotos und Stimme.",
  },
  {
    n: "03",
    when: "TAG 06–12",
    t: "Umsetzung",
    d: "Wir entwickeln, Sie geben Feedback. Zwei Korrekturrunden inklusive.",
  },
  {
    n: "04",
    when: "TAG 13–14",
    t: "Launch",
    d: "Übergabe, kurze Einschulung. Danach betreuen wir — wenn gewünscht.",
  },
];

export default function Process() {
  return (
    <section id="ablauf" className="border-b hair">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid grid-cols-12 gap-0 border-b hair py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-500 sm:text-[11px]">
          <div className="col-span-6">§ 04 — Ablauf</div>
          <div className="col-span-6 text-right">14 Tage · 4 Schritte</div>
        </div>

        <div className="grid grid-cols-12 gap-0 border-b hair py-10 sm:py-14 md:py-20">
          <div className="col-span-12 md:col-span-9">
            <h2 className="display-tight font-display text-4xl leading-[1.02] tracking-tightest text-ink-900 sm:text-5xl md:text-7xl">
              Von der ersten E-Mail
              <br />
              zur <span className="italic font-normal text-accent">Live-Website</span> in 14 Tagen.
            </h2>
          </div>
        </div>

        <ol className="grid grid-cols-1 gap-0 sm:grid-cols-2 md:grid-cols-4">
          {steps.map((s, idx, arr) => (
            <li
              key={s.n}
              className={[
                "flex flex-col gap-5 p-6 sm:p-8 md:p-10",
                idx < arr.length - 1 ? "border-b hair" : "",
                idx % 2 === 0 ? "sm:border-r hair" : "",
                idx >= 2 ? "sm:border-b-0" : "",
                idx < arr.length - 1 ? "md:border-r hair" : "",
                "md:border-b-0",
              ].join(" ")}
            >
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                <span>{s.n}</span>
                <span className="text-accent">{s.when}</span>
              </div>
              <h3 className="font-display text-[32px] leading-none tracking-tight text-ink-900">
                {s.t}
              </h3>
              <p className="text-[14.5px] leading-relaxed text-ink-600">
                {s.d}
              </p>
              <div className="mt-auto border-t hair pt-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                  Phase {s.n} / 04
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

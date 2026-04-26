const faqs = [
  {
    q: "In welchen Regionen seid ihr aktiv?",
    a: "Wir arbeiten mit Betrieben in ganz Österreich und Deutschland. Vor-Ort-Termine bieten wir in Wien, Graz, Salzburg, München, Berlin und Hamburg an — alles andere läuft per Video.",
  },
  {
    q: "Muss ich selbst Texte und Fotos liefern?",
    a: "Nein. Wir schreiben die Texte auf Wunsch mit Ihnen zusammen und organisieren, wenn nötig, einen Fotografen in Ihrer Stadt.",
  },
  {
    q: "Wie läuft das Hosting ab?",
    a: "Domain und Hosting laufen auf Ihren Namen — bei EU-Anbietern mit Servern in Frankfurt oder Wien. Wir richten alles für Sie ein, ohne Aufschlag.",
  },
  {
    q: "Bin ich nach dem Launch an euch gebunden?",
    a: "Nein. Die Website gehört Ihnen, Sie erhalten alle Zugänge. Die monatliche Betreuung ist optional und jederzeit kündbar.",
  },
  {
    q: "Rechnung für Österreich oder Deutschland?",
    a: "Beides. Wir stellen österreichische Rechnungen mit UID-Nummer oder Rechnungen nach §13b UStG für Deutschland aus.",
  },
  {
    q: "Könnt ihr eine bestehende Website übernehmen?",
    a: "Ja. Wir migrieren von WordPress, Wix, Jimdo oder Squarespace — inklusive Weiterleitung aller alten URLs, damit Google-Rankings erhalten bleiben.",
  },
];

export default function FAQ() {
  return (
    <section className="border-b hair">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid grid-cols-12 gap-0 border-b hair py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-500 sm:text-[11px]">
          <div className="col-span-6">§ 07 — Häufige Fragen</div>
          <div className="col-span-6 text-right">Sechs Antworten</div>
        </div>

        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-12 border-b hair p-6 sm:p-8 md:col-span-4 md:border-b-0 md:border-r md:p-12">
            <h2 className="display-tight font-display text-3xl leading-[1.05] tracking-tightest text-ink-900 sm:text-5xl md:text-6xl">
              Alles,
              <br />
              was Sie vorher
              <br />
              <span className="italic font-normal text-accent">wissen wollen.</span>
            </h2>
            <p className="mt-8 max-w-xs text-[14.5px] leading-relaxed text-ink-600">
              Fehlt etwas? Schreiben Sie uns — wir antworten innerhalb eines
              Werktags.
            </p>
            <a
              href="#kontakt"
              className="mt-8 inline-flex h-11 items-center gap-3 border hair bg-paper px-4 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-900 transition hover:bg-ink-900 hover:text-paper"
            >
              Frage stellen <span>→</span>
            </a>
          </div>

          <dl className="col-span-12 md:col-span-8">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                className="group border-b hair last:border-b-0"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 text-left sm:gap-6 sm:p-6 md:p-8">
                  <div className="flex min-w-0 items-start gap-4 sm:gap-6">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400 sm:pt-1 md:pt-1">
                      0{i + 1}
                    </span>
                    <dt className="font-display text-lg leading-snug tracking-tight text-ink-900 sm:text-xl md:text-2xl">
                      {f.q}
                    </dt>
                  </div>
                  <span className="mt-0.5 grid h-8 w-8 flex-none place-items-center border hair text-ink-700 transition group-open:rotate-45 group-open:bg-ink-900 group-open:text-paper">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <dd className="border-t hair px-5 pb-6 pt-5 sm:px-6 sm:pb-8 md:px-8">
                  <div className="sm:pl-[40px] md:pl-[56px]">
                    <p className="max-w-2xl text-[14px] leading-relaxed text-ink-600 sm:text-[15px]">
                      {f.a}
                    </p>
                  </div>
                </dd>
              </details>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

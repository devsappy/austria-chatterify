const services = [
  {
    n: "01",
    label: "Website",
    title: "Eine Website, die anruft.",
    body: "Startseite, Leistungen, Referenzen, Kontakt. Schnell, DSGVO-konform, mit Google-Business-Anbindung und einem Formular, das direkt in Ihren Posteingang geht.",
    tags: ["Next.js", "DSGVO", "EU-Hosting", "Barrierefrei"],
  },
  {
    n: "02",
    label: "Lokales SEO",
    title: "In Ihrer Stadt auf Seite eins.",
    body: "Google-Profil, lokale Keywords, Bewertungen sammeln. Wir messen Anrufe und Routen — nicht nur Klicks.",
    tags: ["Google Profile", "Bewertungen", "Reporting"],
  },
  {
    n: "03",
    label: "Buchung · Shop",
    title: "Termine, Reservierungen, Bestellungen.",
    body: "Integration mit Reservio, OpenTable, Calendly, oder ein einfacher Shop für Gutscheine und Produkte.",
    tags: ["Reservio", "OpenTable", "Stripe"],
  },
  {
    n: "04",
    label: "Betreuung",
    title: "Ein fester Ansprechpartner.",
    body: "Updates, Backups, kleine Änderungen. Auf Deutsch, erreichbar, ohne Ticketsystem.",
    tags: ["Monatlich", "1 Kontakt", "Kein Abo-Zwang"],
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="border-b hair bg-ink-900 text-paper">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid grid-cols-12 gap-0 border-b border-white/10 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-400 sm:text-[11px]">
          <div className="col-span-6">§ 03 — Leistungen</div>
          <div className="col-span-6 text-right">Vier Bausteine</div>
        </div>

        <div className="grid grid-cols-12 gap-0 border-b border-white/10 py-10 sm:py-14 md:py-20">
          <div className="col-span-12 md:col-span-8">
            <h2 className="display-tight font-display text-4xl leading-[1.02] tracking-tightest sm:text-5xl md:text-7xl">
              Vier klare Bausteine.
              <br />
              <span className="italic font-normal text-accent-300">Keine Geheimsprache.</span>
            </h2>
          </div>
          <div className="col-span-12 mt-8 md:col-span-4 md:col-start-9 md:mt-0">
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-300">
              Sie wählen, was Sie brauchen — vom einseitigen Auftritt bis zur
              laufenden Betreuung. Alles baut aufeinander auf.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
          {services.map((s, idx) => (
            <article
              key={s.n}
              className={[
                "relative flex flex-col gap-6 p-6 sm:p-10 md:p-12",
                idx % 2 === 0 ? "md:border-r border-white/10" : "",
                idx < 2 ? "border-b border-white/10" : "",
                "border-b border-white/10 last:border-b-0 md:last:border-b-0",
                idx === 2 ? "md:border-b-0" : "",
              ].join(" ")}
            >
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                <span>{s.n}</span>
                <span>{s.label}</span>
              </div>
              <h3 className="font-display text-3xl leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
                {s.title}
              </h3>
              <p className="max-w-md text-[15px] leading-relaxed text-ink-300">
                {s.body}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 border-t border-white/10 pt-5">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="border border-white/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import BookingEmbed from "./BookingEmbed";

export default function Contact() {
  return (
    <section id="kontakt" className="relative border-b hair bg-ink-900 text-paper">
      <div className="noise absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid grid-cols-12 gap-0 border-b border-white/10 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-400 sm:text-[11px]">
          <div className="col-span-6">§ 08 — Termin buchen</div>
          <div className="col-span-6 text-right">Antwort in &lt; 24 Std.</div>
        </div>

        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-12 border-b border-white/10 py-12 sm:py-16 md:col-span-5 md:border-b-0 md:border-r md:py-24 md:pr-12">
            <h2 className="display-tight font-display text-4xl leading-[0.98] tracking-tightest sm:text-5xl md:text-6xl lg:text-7xl">
              Lassen Sie uns
              <br />
              <span className="italic font-normal text-accent-300">zwanzig Minuten</span>
              <br />
              sprechen.
            </h2>
            <p className="mt-8 max-w-sm text-[15px] leading-relaxed text-ink-300 sm:mt-10">
              Wählen Sie rechts einen freien Termin — unverbindlich und
              kostenlos. Im Anschluss erhalten Sie ein individuelles Angebot.
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-0 border-t border-white/10 sm:mt-14">
              {[
                ["E-Mail", "hallo@handwerk-atelier.eu", "mailto:hallo@handwerk-atelier.eu"],
                ["Telefon · AT", "+43 1 234 5678", "tel:+4312345678"],
                ["Telefon · DE", "+49 89 123 456", "tel:+4989123456"],
                ["Atelier", "Neubaugasse 12 · 1070 Wien", null],
              ].map(([k, v, href]) => (
                <div
                  key={k}
                  className="flex flex-col gap-1 border-b border-white/10 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                    {k}
                  </dt>
                  <dd className="text-sm text-paper sm:text-right">
                    {href ? (
                      <a href={href} className="break-all hover:text-accent-300 sm:break-normal">
                        {v}
                      </a>
                    ) : (
                      v
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="col-span-12 py-12 sm:py-16 md:col-span-7 md:py-24 md:pl-12">
            <div className="mb-8 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400">
              <span>Buchungskalender — Termin 01</span>
              <a
                href="https://termine.od-solution.com/#/211207000000081008"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-300"
              >
                In neuem Tab öffnen ↗
              </a>
            </div>
            <div className="border border-white/10">
              <BookingEmbed />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

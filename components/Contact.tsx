const BOOKING_URL = "https://termine.od-solution.com/#/211207000000081008";

export default function Contact() {
  return (
    <section id="kontakt" className="relative border-b hair bg-ink-900 text-paper">
      <div className="noise absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-12 border-b border-white/10 py-12 sm:py-16 md:col-span-5 md:border-b-0 md:border-r md:py-24 md:pr-12">
            <h2 className="display-tight font-display text-4xl leading-[0.98] tracking-tightest sm:text-5xl md:text-6xl lg:text-7xl">
              Lassen Sie uns
              <br />
              <span className="font-normal text-accent-300">zwanzig Minuten</span>
              <br />
              sprechen.
            </h2>
            <p className="mt-8 max-w-sm text-[15px] leading-relaxed text-paper/75 sm:mt-10">
              Buchen Sie einen freien Termin — unverbindlich und kostenlos.
              Im Anschluss erhalten Sie ein individuelles Angebot.
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
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/60">
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
            <div className="flex h-full flex-col justify-between gap-10">
              <div className="space-y-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/60">
                  — Termin 01 · 20 Minuten · kostenlos
                </p>
                <h3 className="display-tight font-display text-3xl leading-[1.02] tracking-tightest text-paper sm:text-4xl md:text-5xl">
                  Einen{" "}
                  <span className="font-normal text-accent-300">freien Termin</span>
                  <br />
                  in 30 Sekunden buchen.
                </h3>
                <p className="max-w-md text-[15px] leading-relaxed text-paper/70">
                  Der Buchungskalender öffnet sich in einem neuen Fenster.
                  Sie sehen sofort die nächsten verfügbaren Slots und buchen
                  mit zwei Klicks — ohne Konto, ohne Wartezeit.
                </p>
              </div>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-16 items-center justify-between border border-white/20 bg-paper px-6 text-ink-900 transition hover:bg-accent-300"
              >
                <span className="text-base font-medium tracking-tight sm:text-lg">
                  Termin buchen
                </span>
                <span className="font-mono text-sm text-ink-900/60 transition group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              <ul className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/55">
                <li>20 Min</li>
                <li className="text-center">Kostenlos</li>
                <li className="text-right">Unverbindlich</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section className="relative border-b hair">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* headline */}
        <div className="grid grid-cols-12 gap-0">
          <div className="relative col-span-12 flex flex-col pb-12 pt-28 sm:pb-16 sm:pt-36 md:col-span-7 md:pb-24 md:pr-8 md:pt-52 lg:pb-28 lg:pt-64">
            <h1 className="display-tight font-display text-[40px] leading-[0.92] tracking-tightest text-ink-900 sm:text-[64px] md:text-[64px] lg:text-[88px] xl:text-[104px]">
              Websites
              <br />
              die dich zum
              <br />
              <span className="font-normal">Staunen</span>
              <span
                aria-hidden
                className="mx-2 inline-block h-[0.16em] w-[0.16em] translate-y-[-0.55em] rounded-full bg-accent align-baseline sm:mx-3"
              />
              bringen.
            </h1>
          </div>

          <aside className="col-span-12 flex flex-col justify-between gap-10 border-t hair py-10 md:col-span-5 md:border-l md:border-t-0 md:pl-8 md:py-28 lg:py-32">
            <div className="space-y-4">
              <p className="mono-label text-ink-500">— Kurzfassung</p>
              <p className="text-[15px] leading-relaxed text-ink-700">
                Ein kleines Atelier aus Wien und München. Wir bauen sorgfältige,
                schnelle Websites für Handwerksbetriebe, Cafés und Restaurants —
                individuell, in der EU gehostet, in 7&nbsp;Tagen online.
              </p>
            </div>

            <div className="frame p-3">
              <div className="relative border border-ink-900/10">
                <div
                  className="relative aspect-[5/4] overflow-hidden bg-ink-900 bg-contain bg-center bg-no-repeat"
                  style={{ backgroundImage: "url('/micbackground.png')" }}
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-br from-ink-900/85 via-ink-900/55 to-ink-900/90"
                  />
                  <div className="relative flex h-full flex-col justify-between p-5 sm:p-7">
                    <p className="mono-label text-paper/70">
                      — Laut &amp; deutlich
                    </p>
                    <p className="mt-auto text-right font-display display-tight text-[26px] leading-[0.95] tracking-tightest text-paper sm:text-[32px] lg:text-[38px]">
                      Die <span className="font-normal italic">beste</span>
                      <br />
                      Web-Agentur
                      <br />
                      für{" "}
                      <span className="text-accent-300">Österreich</span>
                      <br />
                      &amp;{" "}
                      <span className="text-accent-300">Deutschland</span>.
                    </p>
                    <div className="flex items-center justify-between border-t border-paper/15 pt-3">
                      <span className="mono-label text-paper/60">
                        Wien · München
                      </span>
                      <span className="mono-label text-accent-300">
                        Nr. 1 ★
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#kontakt"
              className="group inline-flex h-12 items-center justify-between border hair bg-ink-900 px-4 text-[13px] font-medium text-paper transition hover:bg-ink-800"
            >
              Kostenloses Gespräch buchen
              <span className="font-mono text-[11px] text-paper/60 transition group-hover:translate-x-0.5 group-hover:text-paper">
                ↗
              </span>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

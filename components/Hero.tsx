import HeroLaptopMount from "./HeroLaptopMount";

export default function Hero() {
  return (
    <section className="relative border-b hair">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* headline */}
        <div className="grid grid-cols-12 gap-0">
          <div className="relative col-span-12 flex flex-col py-12 sm:py-16 md:col-span-7 md:py-24 md:pr-8 lg:py-28">
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
                individuell, in der EU gehostet, in 14&nbsp;Tagen online.
              </p>
            </div>

            <div className="frame p-3">
              <div className="border border-ink-900/10">
                <HeroLaptopMount />
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

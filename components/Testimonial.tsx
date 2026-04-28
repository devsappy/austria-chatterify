export default function Testimonial() {
  return (
    <section className="border-b hair">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-12 border-b hair py-12 sm:py-16 md:col-span-8 md:border-b-0 md:border-r md:py-24 md:pr-16">
            <div className="mono-label text-ink-500">Zitat · Installateur Wagner</div>
            <blockquote className="display-tight mt-6 font-display text-3xl leading-[1.1] tracking-tightest text-ink-900 sm:mt-8 sm:text-4xl md:text-5xl lg:text-6xl">
              „Wir bekommen seit dem Launch <span className="font-normal text-accent">drei- bis viermal</span>{" "}
              so viele Anfragen. Das Formular geht direkt aufs Handy — wir können am Bau schon antworten."
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-4 border-t hair pt-6 sm:mt-12 sm:pt-8">
              <div className="grid h-12 w-12 place-items-center border hair bg-ink-900 font-display text-paper">
                MW
              </div>
              <div>
                <div className="font-display text-lg leading-tight tracking-tight text-ink-900">
                  Markus Wagner
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
                  Installateur Wagner · 1230 Wien
                </div>
              </div>
            </figcaption>
          </div>

          <div className="col-span-12 grid grid-cols-1 md:col-span-4">
            {[
              ["4,9 / 5", "127 Google-Bewertungen"],
              ["+280 %", "Anfragen im ersten Quartal"],
              ["2,3 s", "Ladezeit auf LTE"],
            ].map(([k, v], i) => (
              <div
                key={k}
                className={[
                  "flex flex-col justify-between gap-6 p-6 sm:gap-8 sm:p-8 md:p-10",
                  i < 2 ? "border-b hair" : "",
                ].join(" ")}
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                  0{i + 1} / 03
                </div>
                <div>
                  <div className="font-display text-4xl leading-none tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
                    {k}
                  </div>
                  <div className="mt-3 text-[13px] leading-snug text-ink-600">
                    {v}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

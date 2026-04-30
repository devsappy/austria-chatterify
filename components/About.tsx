import AboutGallery from "./AboutGallery";

export default function About() {
  return (
    <section id="ueber-uns" className="relative border-b hair">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* header */}
        <div className="grid grid-cols-12 gap-0 border-b hair py-12 sm:py-16 md:py-24">
          <div className="col-span-12 md:col-span-7 md:pr-8">
            <p className="mono-label text-ink-500">— Über uns</p>
            <h2 className="display-tight font-display mt-6 text-4xl leading-[1.02] tracking-tightest text-ink-900 sm:text-5xl md:text-6xl lg:text-7xl">
              Aus Neugier entstanden.
              <br />
              <span className="font-normal text-accent">Mit Sorgfalt</span>{" "}
              gewachsen.
            </h2>
          </div>
          <div className="col-span-12 mt-8 md:col-span-4 md:col-start-9 md:mt-0">
            <p className="text-[15px] leading-relaxed text-ink-600">
              Es begann, wie die meisten bedeutsamen Dinge beginnen — mit ein
              paar Freunden, viel Neugier und Zeit, in der wir eigentlich
              hätten schlafen sollen.
            </p>
          </div>
        </div>

        {/* body story + values aside */}
        <div className="grid grid-cols-12 gap-0 py-12 sm:py-16 md:py-20">
          <div className="col-span-12 md:col-span-7 md:pr-12">
            <div className="space-y-6 text-[16px] leading-relaxed text-ink-700">
              <p>
                Wir haben immer an etwas gebaut: kleine Tools, einfache
                Websites, Experimente, die mal funktionierten und mal nicht —
                aber wir machten weiter. Nicht, weil wir einen großen Plan
                hatten, sondern weil wir es wirklich genossen, gemeinsam Dinge
                zu bauen und zu verstehen.
              </p>
              <p>
                Mit der Zeit wurden aus diesen nächtlichen Projekten ernsthaftere
                Vorhaben. Wir übernahmen echte Aufträge, arbeiteten mit anderen
                zusammen und lernten, was es heißt, nicht nur für uns selbst
                zu bauen, sondern für Menschen, die uns ihre Ideen anvertrauen.
              </p>
              <p>
                Heute bauen wir Websites, Anwendungen und intelligente
                Systeme — einschließlich KI-gestützter Chatbots und
                Voice-Agents — für Unternehmen in Österreich und Deutschland.
                Unser Fokus liegt auf Lösungen, die verlässlich, skalierbar
                und auf langfristigen Wert ausgelegt sind.
              </p>
              <p>
                Was als gemeinsames Interesse begann, ist heute eine
                fokussierte, professionelle Werkstatt — geprägt von
                Zusammenarbeit, getrieben von Qualität und dem Anspruch,
                digitale Produkte zu bauen, die Bestand haben.
              </p>
            </div>
          </div>

          <aside className="col-span-12 mt-10 md:col-span-4 md:col-start-9 md:mt-0">
            <div className="frame p-6 sm:p-8">
              <p className="mono-label text-ink-500">
                — Was sich nie verändert hat
              </p>
              <ul className="mt-6 divide-y hair font-display text-2xl leading-[1.1] tracking-tightest text-ink-900 sm:text-[28px]">
                <li className="pb-5">
                  Wir achten{" "}
                  <span className="text-accent">kompromisslos</span>{" "}
                  auf die Details.
                </li>
                <li className="py-5">
                  Wir{" "}
                  <span className="font-normal italic">hinterfragen</span>{" "}
                  alles.
                </li>
                <li className="pt-5">
                  Wir bauen, worauf wir noch in Jahren stolz sein wollen.
                </li>
              </ul>
            </div>
          </aside>
        </div>

        <AboutGallery />

        {/* closing line */}
        <div className="border-t hair py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-12 gap-0">
            <div className="col-span-12 md:col-span-8">
              <p className="font-display display-tight text-3xl leading-[1.04] tracking-tightest text-ink-900 sm:text-4xl md:text-5xl lg:text-6xl">
                Sorgfältig gefertigt.
                <br />
                <span className="font-normal text-accent">
                  Auf die Zukunft gebaut.
                </span>
              </p>
            </div>
            <div className="col-span-12 mt-6 flex items-end md:col-span-4 md:mt-0 md:justify-end">
              <p className="mono-label text-ink-500">
                Wien · München · seit 2014
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

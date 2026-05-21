import Image from "next/image";

const offerings = [
  {
    tag: "KI",
    title: "Voice-Agents",
    detail:
      "Eingehende Anrufe automatisch beantworten — Termine vereinbaren, FAQs klären, qualifizierte Anfragen weiterleiten. 24/7, mehrsprachig, ohne Wartemusik.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="3" width="6" height="12" rx="3" />
        <path d="M5 11a7 7 0 0 0 14 0" />
        <path d="M12 18v3" />
        <path d="M8 21h8" />
      </svg>
    ),
  },
  {
    tag: "KI",
    title: "Chatbots",
    detail:
      "KI-Assistenten für Ihre Website, die Anfragen vorqualifizieren und Routine-Fragen beantworten — bevor sie auf Ihrem Schreibtisch landen.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 5h16v11H8l-4 4V5z" />
        <circle cx="9" cy="11" r="0.8" fill="currentColor" />
        <circle cx="13" cy="11" r="0.8" fill="currentColor" />
        <circle cx="17" cy="11" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    tag: "Workflow",
    title: "Buchungssysteme",
    detail:
      "Online-Reservierungen, Termine und Direktbuchungen — mit Bestätigung, Erinnerung und Kalender-Sync. Ohne Telefonklingeln, ohne Doppelbuchungen.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.5" y="5" width="17" height="15" rx="1.5" />
        <path d="M3.5 9h17" />
        <path d="M8 3v4M16 3v4" />
        <circle cx="8.5" cy="14" r="0.8" fill="currentColor" />
        <circle cx="12" cy="14" r="0.8" fill="currentColor" />
        <circle cx="15.5" cy="14" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    tag: "Mobile",
    title: "App-Entwicklung",
    detail:
      "Native iOS- und Android-Apps oder progressive Web-Apps — für interne Tools, Kundenbindung oder neue Geschäftsmodelle. Performant und wartbar.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6.5" y="2.5" width="11" height="19" rx="2" />
        <path d="M10 5.5h4" />
        <circle cx="12" cy="18.5" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="ueber-uns" className="relative border-b hair">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* header */}
        <div className="grid grid-cols-12 gap-0 border-b hair py-12 sm:py-16 md:py-24">
          <div className="col-span-12 flex flex-col md:col-span-7 md:pr-8">
            <p className="mono-label text-ink-500">— Über uns</p>
            <h2 className="display-tight font-display mt-6 text-4xl leading-[1.02] tracking-tightest text-ink-900 sm:text-5xl md:text-6xl lg:text-7xl">
              Aus Neugier entstanden.
              <br />
              <span className="font-normal text-accent">Mit Sorgfalt</span>{" "}
              gewachsen.
            </h2>
            <p className="mt-10 max-w-md text-[16px] leading-relaxed text-ink-700 sm:text-[17px]">
              Es begann, wie die meisten bedeutsamen Dinge beginnen — mit ein
              paar Freunden, viel Neugier und Zeit, in der wir eigentlich
              hätten schlafen sollen.
            </p>
            <dl className="mt-auto grid grid-cols-3 gap-0 border-t hair pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500 sm:gap-4">
              <div>
                <dt className="text-ink-400">Team</dt>
                <dd className="mt-1 text-ink-700">Wien · München</dd>
              </div>
              <div>
                <dt className="text-ink-400">Seit</dt>
                <dd className="mt-1 text-ink-700">2014</dd>
              </div>
              <div>
                <dt className="text-ink-400">Fokus</dt>
                <dd className="mt-1 text-ink-700">DACH-Raum</dd>
              </div>
            </dl>
          </div>
          <div className="col-span-12 mt-8 md:col-span-4 md:col-start-9 md:mt-0">
            <div className="relative aspect-[4/5] overflow-hidden border hair bg-ink-50">
              <Image
                src="/discrete.png"
                alt="Werkstatt — sorgfältig, leise, verlässlich"
                fill
                sizes="(min-width: 768px) 30vw, 100vw"
                className="object-contain p-1"
              />
            </div>
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

        {/* what we provide */}
        <div className="border-t hair py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-12 gap-0">
            <div className="col-span-12 md:col-span-7 md:pr-8">
              <p className="mono-label text-ink-500">— Was wir bauen</p>
              <h3 className="display-tight font-display mt-6 text-3xl leading-[1.04] tracking-tightest text-ink-900 sm:text-4xl md:text-5xl">
                Vier Werkzeuge,
                <br />
                <span className="font-normal text-accent">
                  ein Versprechen
                </span>
                : weniger Telefon.
              </h3>
            </div>
            <div className="col-span-12 mt-6 md:col-span-4 md:col-start-9 md:mt-0">
              <p className="text-[14.5px] leading-relaxed text-ink-600">
                Was wir heute bauen, war vor zehn Jahren ein Nebenprojekt.
                Heute sind es vier Werkzeuge, die wir in Produktion betreiben —
                für Betriebe, die Anfragen lieber bearbeiten als entgegennehmen.
              </p>
            </div>
          </div>

          <ol className="mt-10 grid grid-cols-1 gap-0 border-t hair sm:mt-12 sm:grid-cols-2 md:grid-cols-4">
            {offerings.map((o, i, arr) => (
              <li
                key={o.title}
                className={[
                  "flex flex-col gap-5 p-6 sm:p-8 md:p-10",
                  i < arr.length - 1 ? "border-b hair" : "",
                  i % 2 === 0 ? "sm:border-r hair" : "",
                  i < arr.length - 2 ? "sm:border-b hair" : "sm:border-b-0",
                  "md:border-b-0",
                  i < arr.length - 1 ? "md:border-r hair" : "",
                ].join(" ")}
              >
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                  <span>0{i + 1} / 0{arr.length}</span>
                  <span className="text-accent">{o.tag}</span>
                </div>
                <div className="grid h-10 w-10 place-items-center border hair text-ink-900">
                  <span className="block h-5 w-5">{o.icon}</span>
                </div>
                <h4 className="font-display text-[26px] leading-tight tracking-tight text-ink-900">
                  {o.title}
                </h4>
                <p className="mt-auto text-[14px] leading-relaxed text-ink-600">
                  {o.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>

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

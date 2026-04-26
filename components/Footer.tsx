export default function Footer() {
  return (
    <footer className="bg-paper">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* meta columns */}
        <div className="grid grid-cols-12 gap-0 border-b hair">
          <div className="col-span-12 border-b hair p-6 sm:p-8 md:col-span-4 md:border-b-0 md:border-r md:p-10">
            <div className="mono-label text-ink-500">Atelier</div>
            <address className="mt-5 space-y-1 text-[15px] not-italic leading-relaxed text-ink-800">
              <div>Handwerk · Atelier</div>
              <div>Neubaugasse 12</div>
              <div>1070 Wien · Österreich</div>
            </address>
            <div className="mt-6 flex gap-4 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
              <span>N 48°12'</span>
              <span className="text-ink-300">·</span>
              <span>E 16°22'</span>
            </div>
          </div>

          <div className="col-span-6 border-b hair p-6 sm:p-8 md:col-span-2 md:border-b-0 md:border-r md:p-10">
            <div className="mono-label text-ink-500">Seiten</div>
            <ul className="mt-5 space-y-2 text-[15px] text-ink-800">
              <li><a href="/#leistungen" className="hover:text-accent">Leistungen</a></li>
              <li><a href="/branchen" className="hover:text-accent">Branchen</a></li>
              <li><a href="/regionen" className="hover:text-accent">Regionen</a></li>
              <li><a href="/#ablauf" className="hover:text-accent">Ablauf</a></li>
              <li><a href="/#kontakt" className="hover:text-accent">Kontakt</a></li>
            </ul>
          </div>

          <div className="col-span-6 border-b hair p-6 sm:p-8 md:col-span-2 md:border-b-0 md:border-r md:p-10">
            <div className="mono-label text-ink-500">Rechtliches</div>
            <ul className="mt-5 space-y-2 text-[15px] text-ink-800">
              <li><a href="#" className="hover:text-accent">Impressum</a></li>
              <li><a href="#" className="hover:text-accent">Datenschutz</a></li>
              <li><a href="#" className="hover:text-accent">AGB</a></li>
            </ul>
          </div>

          <div className="col-span-12 p-6 sm:p-8 md:col-span-4 md:p-10">
            <div className="mono-label text-ink-500">Kontakt</div>
            <ul className="mt-5 space-y-2 text-[15px] text-ink-800">
              <li>
                <a href="mailto:hallo@handwerk-atelier.eu" className="hover:text-accent">
                  hallo@handwerk-atelier.eu
                </a>
              </li>
              <li>
                <a href="tel:+4312345678" className="hover:text-accent">
                  +43 1 234 5678
                </a>
              </li>
              <li>
                <a href="tel:+4989123456" className="hover:text-accent">
                  +49 89 123 456
                </a>
              </li>
            </ul>
            <a
              href="#kontakt"
              className="mt-8 inline-flex h-11 items-center gap-3 border hair bg-ink-900 px-4 font-mono text-[11px] uppercase tracking-[0.16em] text-paper transition hover:bg-accent hover:border-accent"
            >
              Intro buchen <span>→</span>
            </a>
          </div>
        </div>

        {/* giant wordmark */}
        <div className="relative overflow-hidden border-b hair py-14 md:py-20">
          <h2
            aria-hidden="true"
            className="display-tight select-none font-display text-[22vw] leading-[0.82] tracking-tightest text-ink-900"
          >
            Handwerk<span className="italic font-normal text-accent">·</span>Atelier
          </h2>
        </div>

        {/* colophon */}
        <div className="flex flex-col gap-3 py-6 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-500 sm:text-[11px] md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Handwerk · Atelier GmbH</span>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-ink-500">
            <span>Made in Wien · München</span>
            <span className="hidden text-ink-300 md:inline">·</span>
            <span className="hidden md:inline">Server: Frankfurt · Wien</span>
          </div>
          <span className="flex items-center gap-2">
            <span className="tick h-1.5 w-1.5 flex-none rounded-full bg-accent" />
            Studio verfügbar — Q2 2026
          </span>
        </div>
      </div>
    </footer>
  );
}

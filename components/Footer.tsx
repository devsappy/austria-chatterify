export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-300 text-paper">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* main row */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 py-10 md:py-14">
          {/* brand */}
          <div className="col-span-12 md:col-span-4">
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 flex-none place-items-center border border-paper/20 bg-paper text-ink-900">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 18 12 4l8 14" />
                  <path d="M4 20h16" />
                </svg>
              </span>
              <span className="font-display text-[18px] tracking-tight">
                Handwerk · Atelier
              </span>
            </div>
            <address className="mt-5 space-y-1 text-[14px] not-italic leading-relaxed text-paper/75">
              <div>Neubaugasse 12 · 1070 Wien</div>
              <div>
                <a
                  href="mailto:hallo@handwerk-atelier.eu"
                  className="hover:text-paper"
                >
                  hallo@handwerk-atelier.eu
                </a>
              </div>
            </address>
          </div>

          {/* studio links */}
          <div className="col-span-6 md:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/50">
              Studio
            </div>
            <ul className="mt-4 space-y-2 text-[14px]">
              <li><a href="/#leistungen" className="text-paper/85 hover:text-paper">Leistungen</a></li>
              <li><a href="/branchen" className="text-paper/85 hover:text-paper">Branchen</a></li>
              <li><a href="/regionen" className="text-paper/85 hover:text-paper">Regionen</a></li>
              <li><a href="/#kontakt" className="text-paper/85 hover:text-paper">Kontakt</a></li>
            </ul>
          </div>

          {/* legal */}
          <div className="col-span-6 md:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/50">
              Rechtliches
            </div>
            <ul className="mt-4 space-y-2 text-[14px]">
              <li><a href="#" className="text-paper/85 hover:text-paper">Impressum</a></li>
              <li><a href="#" className="text-paper/85 hover:text-paper">Datenschutz</a></li>
              <li><a href="#" className="text-paper/85 hover:text-paper">AGB</a></li>
            </ul>
          </div>

          {/* CTA + social */}
          <div className="col-span-12 md:col-span-4 md:flex md:flex-col md:items-end md:text-right">
            <a
              href="#kontakt"
              className="group inline-flex h-11 items-center gap-3 border border-paper bg-paper px-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-900 transition hover:border-ink-900 hover:bg-ink-900 hover:text-paper"
            >
              Intro buchen
              <span className="transition group-hover:translate-x-0.5">↗</span>
            </a>
            <div className="mt-5 flex gap-2 md:justify-end">
              <a
                href="https://github.com/handwerk-atelier"
                aria-label="GitHub"
                className="grid h-8 w-8 place-items-center border border-paper/20 transition hover:border-paper hover:text-paper"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 8.84 21.5c.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33s1.7.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10 10 0 0 0 12 2Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/handwerk-atelier"
                aria-label="LinkedIn"
                className="grid h-8 w-8 place-items-center border border-paper/20 transition hover:border-paper hover:text-paper"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                  <path d="M4 4h4v4H4V4zm0 6h4v10H4V10zm6 0h3.8v1.4h.05c.53-1 1.83-2.06 3.77-2.06 4.04 0 4.78 2.66 4.78 6.12V20h-4v-4.94c0-1.18-.02-2.7-1.65-2.7-1.65 0-1.9 1.29-1.9 2.62V20h-4V10z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/handwerk.atelier"
                aria-label="Instagram"
                className="grid h-8 w-8 place-items-center border border-paper/20 transition hover:border-paper hover:text-paper"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* bottom legal row */}
        <div className="flex flex-col gap-2 border-t border-paper/10 py-5 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/55 sm:text-[11px] md:flex-row md:items-center md:justify-between">
          <span>© {year} Handwerk · Atelier GmbH</span>
          <span className="flex items-center gap-2">
            <span className="tick h-1.5 w-1.5 flex-none rounded-full bg-paper" />
            DSGVO · EU-Hosting · Wien · München
          </span>
        </div>
      </div>
    </footer>
  );
}

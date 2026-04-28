import Link from "next/link";

const links = [
  { href: "/#leistungen", label: "Leistungen", idx: "01" },
  { href: "/branchen", label: "Branchen", idx: "02" },
  { href: "/regionen", label: "Regionen", idx: "03" },
  { href: "/#ablauf", label: "Ablauf", idx: "04" },
  { href: "/#kontakt", label: "Kontakt", idx: "05" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b hair bg-paper/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <span className="grid h-7 w-7 flex-none place-items-center border hair bg-ink-900 text-paper sm:h-8 sm:w-8">
            <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-3.5 sm:w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 18 12 4l8 14" />
              <path d="M4 20h16" />
            </svg>
          </span>
          <span className="flex min-w-0 items-baseline gap-1 sm:gap-1.5">
            <span className="truncate font-display text-[15px] tracking-tight text-ink-900 sm:text-[18px]">
              Handwerk
            </span>
            <span className="text-accent">·</span>
            <span className="truncate font-display text-[15px] tracking-tight text-ink-700 sm:text-[18px]">
              Atelier
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group flex items-baseline gap-1.5 text-[13px] text-ink-700 transition-colors hover:text-ink-900"
            >
              <span className="font-mono text-[10px] text-ink-400 group-hover:text-accent">
                {l.idx}
              </span>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-none items-center gap-2">
          <a
            href="#kontakt"
            className="hidden h-10 items-center gap-2 border hair bg-ink-900 px-4 text-[13px] font-medium tracking-tight text-paper transition hover:bg-ink-800 sm:inline-flex sm:px-5"
          >
            Intro buchen
            <span className="font-mono text-[10px] text-paper/60">↗</span>
          </a>

          <details className="relative md:hidden">
            <summary className="grid h-10 w-10 cursor-pointer list-none place-items-center border hair bg-paper text-ink-900 transition [&::-webkit-details-marker]:hidden">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </summary>
            <div className="absolute right-0 top-[calc(100%+1px)] z-50 w-[min(280px,calc(100vw-2rem))] border hair bg-paper shadow-lg">
              <ul className="divide-y hair">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="flex items-baseline justify-between gap-3 px-4 py-3 text-[14px] text-ink-800 hover:bg-ink-50"
                    >
                      <span>{l.label}</span>
                      <span className="font-mono text-[10px] text-ink-400">{l.idx}</span>
                    </a>
                  </li>
                ))}
                <li className="sm:hidden">
                  <a
                    href="#kontakt"
                    className="flex items-center justify-between gap-3 bg-ink-900 px-4 py-3 text-[13px] font-medium text-paper"
                  >
                    Intro buchen
                    <span className="font-mono text-[10px] text-paper/60">↗</span>
                  </a>
                </li>
              </ul>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

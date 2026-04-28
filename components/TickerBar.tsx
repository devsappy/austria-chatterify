export default function TickerBar() {
  return (
    <div className="w-full border-b hair bg-ink-900 text-paper">
      <div className="mx-auto flex h-8 max-w-[1400px] items-center justify-between gap-3 px-4 font-mono text-[10px] uppercase tracking-[0.14em] sm:px-6 sm:text-[11px]">
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <span className="tick h-1.5 w-1.5 flex-none rounded-full bg-accent-300" />
          <span className="truncate">Atelier · Wien · München · Berlin</span>
        </div>
        <div className="hidden gap-6 md:flex">
          <span>Erste Skizze in 72 Std.</span>
        </div>
        <div className="flex flex-none items-center gap-2">
          <span className="hidden text-ink-400 sm:inline">Mo–Fr</span>
          <span>09:00 – 18:00 MEZ</span>
        </div>
      </div>
    </div>
  );
}

type Solution = { tag: string; title: string; detail: string };

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  solutions: Solution[];
};

export default function SolutionStack({ eyebrow, title, lede, solutions }: Props) {
  return (
    <section className="relative border-b hair bg-ink-900 text-paper">
      <div className="noise absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid grid-cols-12 gap-0 border-b border-white/10 py-12 sm:py-16 md:py-20">
          <div className="col-span-12 md:col-span-7 md:pr-8">
            <p className="mono-label text-paper/60">{eyebrow}</p>
            <h2 className="display-tight font-display mt-6 text-4xl leading-[1.02] tracking-tightest sm:text-5xl md:text-6xl">
              {title}
            </h2>
          </div>
          {lede ? (
            <div className="col-span-12 mt-8 md:col-span-4 md:col-start-9 md:mt-0">
              <p className="text-[15px] leading-relaxed text-paper/75">
                {lede}
              </p>
            </div>
          ) : null}
        </div>

        <ol className="grid grid-cols-1 gap-0 md:grid-cols-3">
          {solutions.map((s, i, arr) => (
            <li
              key={s.title}
              className={[
                "flex flex-col gap-5 p-6 sm:p-8 md:p-10",
                i < arr.length - 1 ? "border-b border-white/10" : "",
                "md:border-b-0",
                i < arr.length - 1 ? "md:border-r border-white/10" : "",
              ].join(" ")}
            >
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-paper/55">
                <span>0{i + 1} / 0{arr.length}</span>
                <span className="text-accent-300">{s.tag}</span>
              </div>
              <h3 className="font-display text-[28px] leading-tight tracking-tight sm:text-[32px]">
                {s.title}
              </h3>
              <p className="mt-auto text-[14.5px] leading-relaxed text-paper/75">
                {s.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

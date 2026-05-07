type Pain = { headline: string; detail: string };

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  pains: Pain[];
};

export default function PainPoints({ eyebrow, title, intro, pains }: Props) {
  return (
    <section className="border-b hair">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid grid-cols-12 gap-0 border-b hair py-12 sm:py-16 md:py-20">
          <div className="col-span-12 md:col-span-7 md:pr-8">
            <p className="mono-label text-ink-500">{eyebrow}</p>
            <h2 className="display-tight font-display mt-6 text-4xl leading-[1.02] tracking-tightest text-ink-900 sm:text-5xl md:text-6xl">
              {title}
            </h2>
          </div>
          {intro ? (
            <div className="col-span-12 mt-8 md:col-span-4 md:col-start-9 md:mt-0">
              <p className="text-[15px] leading-relaxed text-ink-600">
                {intro}
              </p>
            </div>
          ) : null}
        </div>

        <ol className="grid grid-cols-1 gap-0 sm:grid-cols-2">
          {pains.map((p, i, arr) => (
            <li
              key={p.headline}
              className={[
                "flex flex-col gap-3 p-6 sm:p-8 md:p-10",
                i < arr.length - 1 ? "border-b hair" : "",
                i % 2 === 0 ? "sm:border-r hair" : "",
                i >= arr.length - 2 ? "sm:border-b-0" : "",
                i < arr.length - 2 ? "sm:border-b hair" : "",
              ].join(" ")}
            >
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                <span>0{i + 1}</span>
                <span className="text-accent">Pain</span>
              </div>
              <h3 className="font-display text-2xl leading-tight tracking-tight text-ink-900 sm:text-[28px] md:text-3xl">
                {p.headline}
              </h3>
              <p className="text-[14.5px] leading-relaxed text-ink-600">
                {p.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

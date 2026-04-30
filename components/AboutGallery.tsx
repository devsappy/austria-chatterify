"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type Img = { src: string; ar: string };

const COLS: Img[][] = [
  [
    { src: "/pic1.jpg", ar: "4 / 5" },
    { src: "/pic2.jpg", ar: "3 / 4" },
    { src: "/pic3.jpg", ar: "1 / 1" },
    { src: "/pic4.jpg", ar: "3 / 4" },
  ],
  [
    { src: "/pic5.jpg", ar: "3 / 4" },
    { src: "/pic6.jpg", ar: "4 / 5" },
    { src: "/pic7.jpg", ar: "3 / 4" },
    { src: "/pic8.jpg", ar: "1 / 1" },
  ],
  [
    { src: "/pic9.jpg", ar: "4 / 5" },
    { src: "/pic10.jpg", ar: "3 / 4" },
    { src: "/pic11.jpg", ar: "4 / 5" },
  ],
];

const SPEEDS = [-220, 110, -340];
const STARTS = COLS.reduce<number[]>((acc, _c, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + COLS[i - 1].length);
  return acc;
}, []);

export default function AboutGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const colRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");

    let enabled = mq.matches && !rm.matches;
    let raf = 0;

    const reset = () => {
      colRefs.current.forEach((el) => {
        if (el) el.style.transform = "translate3d(0, 0, 0)";
      });
    };

    const compute = () => {
      const el = sectionRef.current;
      if (!el) return;
      if (!enabled) {
        reset();
        return;
      }
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh;
      // 0 when section just enters (rect.top = vh), 1 when section fully exits (rect.bottom = 0)
      const passed = vh - rect.top;
      const progress = Math.max(0, Math.min(1, passed / total));
      const factor = (progress - 0.5) * 2; // -1 .. +1
      for (let i = 0; i < colRefs.current.length; i++) {
        const c = colRefs.current[i];
        if (!c) continue;
        c.style.transform = `translate3d(0, ${(factor * SPEEDS[i]).toFixed(2)}px, 0)`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(compute);
    };

    const onMqChange = () => {
      enabled = mq.matches && !rm.matches;
      compute();
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    mq.addEventListener("change", onMqChange);
    rm.addEventListener("change", onMqChange);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      mq.removeEventListener("change", onMqChange);
      rm.removeEventListener("change", onMqChange);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative overflow-hidden border-t hair py-12 sm:py-16 md:py-20"
    >
      <div className="mb-8 flex items-end justify-between gap-6 sm:mb-10">
        <p className="mono-label text-ink-500">— Werkstatt · Eindrücke</p>
        <p className="mono-label text-ink-400">11 Bilder</p>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
        {COLS.map((col, c) => {
          const offsetClass =
            c === 1 ? "md:pt-16" : c === 2 ? "md:pt-8" : "";
          return (
            <div
              key={c}
              ref={(el) => {
                colRefs.current[c] = el;
              }}
              className={`flex flex-col gap-3 will-change-transform md:gap-4 ${offsetClass}`}
            >
              {col.map((img, i) => {
                const num = STARTS[c] + i + 1;
                return (
                  <figure
                    key={img.src}
                    className="relative overflow-hidden border hair bg-ink-100"
                    style={{ aspectRatio: img.ar }}
                  >
                    <Image
                      src={img.src}
                      alt={`Werkstatt-Eindruck ${String(num).padStart(2, "0")}`}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </figure>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

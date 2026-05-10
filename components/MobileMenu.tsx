"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { industriesByCategory } from "@/lib/seo-data";

type Child = { label: string; href: string };
type Section =
  | { label: string; href: string; children?: never }
  | { label: string; href?: never; children: Child[] };

const handwerk = industriesByCategory("handwerk");
const gastro = industriesByCategory("gastronomie");

const sections: Section[] = [
  { label: "Start", href: "/" },
  {
    label: "Handwerk",
    children: [
      { label: "Übersicht", href: "/handwerk" },
      ...handwerk.map((i) => ({
        label: i.name,
        href: `/branchen/${i.slug}`,
      })),
    ],
  },
  {
    label: "Gastronomie",
    children: [
      { label: "Übersicht", href: "/gastronomie" },
      ...gastro.map((i) => ({
        label: i.name,
        href: `/branchen/${i.slug}`,
      })),
    ],
  },
  { label: "Regionen", href: "/regionen" },
  { label: "Ablauf", href: "/#ablauf" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setExpanded(null);
  };

  const overlay = open ? (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Hauptnavigation"
      className="fixed inset-0 z-[100] flex flex-col bg-paper md:hidden"
    >
          {/* top bar */}
          <div className="flex h-14 flex-none items-center justify-between gap-3 border-b hair px-4 sm:h-16 sm:px-6">
            <button
              type="button"
              onClick={close}
              aria-label="Menü schließen"
              className="inline-flex h-9 items-center gap-2 border hair bg-paper px-3 text-[12px] font-medium tracking-tight text-ink-900 transition hover:bg-ink-50"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
              Schließen
            </button>

            <span
              aria-hidden
              className="grid h-7 w-7 flex-none place-items-center border hair bg-ink-900 text-paper"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-3 w-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 18 12 4l8 14" />
                <path d="M4 20h16" />
              </svg>
            </span>

            <a
              href="/kontakt"
              onClick={close}
              className="group inline-flex h-9 items-center gap-2 border hair bg-ink-900 px-3 text-[12px] font-medium tracking-tight text-paper transition hover:bg-ink-800"
            >
              Intro buchen
              <span className="font-mono text-[10px] text-paper/60 transition group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
          </div>

          {/* items */}
          <ul className="flex-1 overflow-y-auto px-4 pb-12 sm:px-6">
            {sections.map((s) => {
              const isExpanded = expanded === s.label;

              if (!s.children) {
                return (
                  <li key={s.label} className="border-b hair">
                    <a
                      href={s.href}
                      onClick={close}
                      className="block py-5 font-display text-[34px] font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-[40px]"
                    >
                      {s.label}
                    </a>
                  </li>
                );
              }

              return (
                <li key={s.label} className="border-b hair">
                  <button
                    type="button"
                    onClick={() =>
                      setExpanded(isExpanded ? null : s.label)
                    }
                    aria-expanded={isExpanded}
                    className="flex w-full items-center justify-between gap-3 py-5 text-left"
                  >
                    <span className="font-display text-[34px] font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-[40px]">
                      {s.label}
                      <sup className="ml-2 align-super font-mono text-[13px] font-normal text-ink-500">
                        (+{s.children.length})
                      </sup>
                    </span>
                    <span
                      aria-hidden
                      className="grid h-8 w-8 flex-none place-items-center text-2xl leading-none text-ink-700"
                    >
                      {isExpanded ? "−" : "+"}
                    </span>
                  </button>

                  {isExpanded ? (
                    <ul className="grid grid-cols-2 gap-x-6 gap-y-2 pb-6 text-[15px] leading-relaxed text-ink-600">
                      {s.children.map((c) => (
                        <li key={c.href}>
                          <a
                            href={c.href}
                            onClick={close}
                            className="block py-1 hover:text-ink-900"
                          >
                            {c.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null;

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Menü öffnen"
        className="grid h-10 w-10 cursor-pointer place-items-center border hair bg-paper text-ink-900 transition hover:bg-ink-50"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>
      {mounted && overlay ? createPortal(overlay, document.body) : null}
    </div>
  );
}

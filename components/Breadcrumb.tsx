import { SITE } from "@/lib/seo-data";

type Crumb = { href: string; label: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${SITE.url}${c.href}`,
    })),
  };

  return (
    <div className="border-b hair">
      <div className="mx-auto flex max-w-[1400px] items-center gap-2 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
        {items.map((c, i) => (
          <span key={c.href} className="flex items-center gap-2">
            {i > 0 && <span className="text-ink-300">/</span>}
            {i === items.length - 1 ? (
              <span className="text-ink-700">{c.label}</span>
            ) : (
              <a href={c.href} className="hover:text-ink-900">
                {c.label}
              </a>
            )}
          </span>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
    </div>
  );
}

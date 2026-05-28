import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Contact from "@/components/Contact";
import { SITE } from "@/lib/seo-data";
import {
  WISSEN_ARTICLES,
  getWissenArticle,
  getRelatedArticles,
} from "@/lib/wissen-data";

type Params = { slug: string };

export function generateStaticParams() {
  return WISSEN_ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const article = getWissenArticle(params.slug);
  if (!article) return {};
  const url = `${SITE.url}/wissen/${article.slug}`;
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.tags,
    alternates: { canonical: `/wissen/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.metaTitle,
      description: article.metaDescription,
      url,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [SITE.brand],
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
    },
  };
}

export default function WissenArticlePage({ params }: { params: Params }) {
  const article = getWissenArticle(params.slug);
  if (!article) return notFound();

  const url = `${SITE.url}/wissen/${article.slug}`;
  const related = getRelatedArticles(article.slug);

  const graph: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumbs`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: SITE.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "Wissen",
          item: `${SITE.url}/wissen`,
        },
        { "@type": "ListItem", position: 3, name: article.title, item: url },
      ],
    },
    {
      "@type": "Article",
      "@id": `${url}#article`,
      headline: article.title,
      description: article.metaDescription,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
      inLanguage: "de-DE",
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: {
        "@type": "Organization",
        "@id": `${SITE.url}#organization`,
        name: SITE.brand,
        url: SITE.url,
      },
      publisher: { "@id": `${SITE.url}#organization` },
      image: `${SITE.url}${SITE.ogImage}`,
      keywords: article.tags.join(", "),
      articleSection: article.category,
      wordCount: estimateWordCount(article),
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: [
          "[data-speakable='lede']",
          "[data-speakable='tldr']",
          "[data-speakable='faq']",
        ],
      },
      about: {
        "@type": "Thing",
        name: article.tags[0] ?? article.category,
      },
      audience: {
        "@type": "BusinessAudience",
        audienceType: article.primaryAudience,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      inLanguage: "de-DE",
      mainEntity: article.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  if (article.howTo) {
    graph.push({
      "@type": "HowTo",
      "@id": `${url}#howto`,
      name: article.howTo.name,
      totalTime: article.howTo.totalTime,
      inLanguage: "de-DE",
      step: article.howTo.steps.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.name,
        text: s.text,
      })),
    });
  }

  const jsonLd = { "@context": "https://schema.org", "@graph": graph };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumb
        items={[
          { href: "/", label: "Start" },
          { href: "/wissen", label: "Wissen" },
          { href: `/wissen/${article.slug}`, label: article.title },
        ]}
      />

      {/* Article header */}
      <section className="border-b hair">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="grid grid-cols-12 gap-0 py-12 sm:py-16 md:py-20">
            <div className="col-span-12 md:col-span-9">
              <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
                <span>{article.category}</span>
                <span className="text-ink-300">·</span>
                <span>{article.readingMinutes} Min Lesezeit</span>
                <span className="text-ink-300">·</span>
                <span>
                  Aktualisiert{" "}
                  {new Date(article.updatedAt).toLocaleDateString("de-DE", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <h1 className="display-tight font-display mt-6 text-3xl leading-[1.04] tracking-tightest text-ink-900 sm:text-5xl md:text-6xl lg:text-[64px]">
                {article.title}
              </h1>
              <p
                data-speakable="lede"
                className="mt-8 max-w-3xl text-[17px] leading-relaxed text-ink-700 sm:text-lg"
              >
                {article.lede}
              </p>
              <div className="mt-8 flex flex-wrap gap-1.5">
                {article.tags.map((t) => (
                  <span
                    key={t}
                    className="border hair bg-paper px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TL;DR */}
      <section className="border-b hair bg-ink-50/40">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="grid grid-cols-12 gap-0 py-10 sm:py-14">
            <div className="col-span-12 md:col-span-3">
              <p className="mono-label text-ink-500">— Auf einen Blick</p>
              <h2 className="display-tight font-display mt-4 text-2xl leading-tight tracking-tightest text-ink-900 sm:text-3xl">
                TL;DR
              </h2>
            </div>
            <ul
              data-speakable="tldr"
              className="col-span-12 mt-6 space-y-3 md:col-span-9 md:mt-0 md:border-l hair md:pl-10"
            >
              {article.tldr.map((point, i) => (
                <li
                  key={point}
                  className="flex items-start gap-4 text-[15px] leading-relaxed text-ink-800"
                >
                  <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                    0{i + 1}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="border-b hair">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <article className="grid grid-cols-12 gap-0 py-12 sm:py-16 md:py-20">
            <div className="col-span-12 md:col-span-9 md:pr-12">
              {article.sections.map((s, i) => (
                <div
                  key={s.heading}
                  className={i > 0 ? "mt-12 sm:mt-16" : ""}
                >
                  <h2 className="display-tight font-display text-3xl leading-tight tracking-tightest text-ink-900 sm:text-4xl md:text-5xl">
                    {s.heading}
                  </h2>
                  {s.paragraphs?.map((p, j) => (
                    <p
                      key={j}
                      className="mt-6 max-w-3xl text-[16px] leading-relaxed text-ink-700 sm:text-[17px]"
                    >
                      {p}
                    </p>
                  ))}
                  {s.bullets ? (
                    <ul className="mt-6 max-w-3xl space-y-3">
                      {s.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-[15.5px] leading-relaxed text-ink-700"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 inline-block h-1 w-3 flex-none bg-accent"
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}

              {/* HowTo block, if present */}
              {article.howTo ? (
                <div className="mt-16">
                  <h2 className="display-tight font-display text-3xl leading-tight tracking-tightest text-ink-900 sm:text-4xl md:text-5xl">
                    {article.howTo.name}
                  </h2>
                  <ol className="mt-8 grid grid-cols-1 gap-0 border hair sm:grid-cols-2">
                    {article.howTo.steps.map((step, i, arr) => (
                      <li
                        key={step.name}
                        className={[
                          "flex flex-col gap-3 p-6 sm:p-8",
                          i < arr.length - 1 ? "border-b hair" : "",
                          i % 2 === 0 && i !== arr.length - 1
                            ? "sm:border-r hair"
                            : "",
                          i >= arr.length - 2
                            ? "sm:border-b-0"
                            : "",
                          i < arr.length - 2 ? "sm:border-b hair" : "",
                        ].join(" ")}
                      >
                        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                          Schritt {String(i + 1).padStart(2, "0")} / {String(arr.length).padStart(2, "0")}
                        </div>
                        <h3 className="font-display text-xl leading-tight tracking-tight text-ink-900 sm:text-2xl">
                          {step.name}
                        </h3>
                        <p className="text-[14.5px] leading-relaxed text-ink-600">
                          {step.text}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              ) : null}
            </div>

            {/* TOC sidebar */}
            <aside className="col-span-12 mt-12 md:col-span-3 md:mt-0 md:border-l hair md:pl-10">
              <div className="md:sticky md:top-24">
                <p className="mono-label text-ink-500">— Inhalt</p>
                <ol className="mt-6 space-y-3 text-[13.5px] leading-snug">
                  {article.sections.map((s, i) => (
                    <li key={s.heading} className="flex items-start gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                        0{i + 1}
                      </span>
                      <span className="text-ink-700">{s.heading}</span>
                    </li>
                  ))}
                  {article.howTo ? (
                    <li className="flex items-start gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                        0{article.sections.length + 1}
                      </span>
                      <span className="text-ink-700">
                        {article.howTo.name}
                      </span>
                    </li>
                  ) : null}
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                      0{article.sections.length + (article.howTo ? 2 : 1)}
                    </span>
                    <span className="text-ink-700">Häufige Fragen</span>
                  </li>
                </ol>
              </div>
            </aside>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b hair">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="grid grid-cols-12 gap-0 border-b hair py-10 sm:py-14 md:py-20">
            <div className="col-span-12 md:col-span-8">
              <p className="mono-label text-ink-500">— Häufige Fragen</p>
              <h2 className="display-tight font-display mt-6 text-3xl leading-[1.04] tracking-tightest text-ink-900 sm:text-4xl md:text-5xl">
                Direkte Antworten.
              </h2>
            </div>
          </div>

          <div data-speakable="faq">
            {article.faqs.map((f, i, arr) => (
              <details
                key={f.q}
                className={[
                  "group border-b hair px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-7",
                  i === arr.length - 1 ? "border-b-0" : "",
                ].join(" ")}
              >
                <summary className="flex cursor-pointer items-start justify-between gap-6 text-left">
                  <h3 className="font-display text-lg leading-snug tracking-tight text-ink-900 sm:text-xl md:text-2xl">
                    {f.q}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="mt-1 font-mono text-[12px] text-ink-500 transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink-700">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related articles */}
      {related.length ? (
        <section className="border-b hair">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
            <div className="grid grid-cols-12 gap-0 border-b hair py-10 sm:py-12">
              <div className="col-span-12">
                <p className="mono-label text-ink-500">— Weiterlesen</p>
                <h2 className="display-tight font-display mt-4 text-2xl leading-tight tracking-tightest text-ink-900 sm:text-3xl md:text-4xl">
                  Passende Leitfäden
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
              {related.map((r, i, arr) => (
                <a
                  key={r.slug}
                  href={`/wissen/${r.slug}`}
                  className={[
                    "group flex flex-col gap-4 border-b hair p-6 transition-colors hover:bg-ink-900 hover:text-paper sm:p-8",
                    i < arr.length - 1 ? "md:border-r hair md:border-b-0" : "",
                  ].join(" ")}
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400 group-hover:text-paper/60">
                    {r.category} · {r.readingMinutes} Min
                  </div>
                  <h3 className="font-display text-xl leading-tight tracking-tight md:text-2xl">
                    {r.title}
                  </h3>
                  <p className="mt-auto text-[13.5px] leading-relaxed text-ink-600 group-hover:text-paper/75">
                    {r.metaDescription}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <Contact />
    </PageShell>
  );
}

function estimateWordCount(
  article: ReturnType<typeof getWissenArticle>,
): number {
  if (!article) return 0;
  let text = article.lede + " " + article.tldr.join(" ");
  for (const s of article.sections) {
    text += " " + s.heading + " ";
    if (s.paragraphs) text += s.paragraphs.join(" ") + " ";
    if (s.bullets) text += s.bullets.join(" ") + " ";
  }
  text += " " + article.faqs.map((f) => f.q + " " + f.a).join(" ");
  if (article.howTo) {
    text += " " + article.howTo.steps.map((s) => s.name + " " + s.text).join(" ");
  }
  return text.trim().split(/\s+/).length;
}

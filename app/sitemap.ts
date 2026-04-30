import type { MetadataRoute } from "next";
import { SITE, CITIES, INDUSTRIES, allCombos } from "@/lib/seo-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE.url;

  const staticUrls: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/regionen`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/branchen`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/ueber-uns`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const cityUrls: MetadataRoute.Sitemap = CITIES.map((c) => ({
    url: `${base}/regionen/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
    alternates: {
      languages: {
        "de-AT": `${base}/regionen/${c.slug}`,
        "de-DE": `${base}/regionen/${c.slug}`,
      },
    },
  }));

  const industryUrls: MetadataRoute.Sitemap = INDUSTRIES.map((i) => ({
    url: `${base}/branchen/${i.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const comboUrls: MetadataRoute.Sitemap = allCombos().map(({ branche, stadt }) => ({
    url: `${base}/webdesign/${branche}/${stadt}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticUrls, ...cityUrls, ...industryUrls, ...comboUrls];
}

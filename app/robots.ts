import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo-data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: ["Googlebot", "Bingbot", "Slurp", "DuckDuckBot", "Applebot"],
        allow: "/",
      },
      // AI crawlers — explicit allow so AI answer engines can index, cite, and surface us.
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Applebot-Extended",
          "Bingbot",
          "Amazonbot",
          "YouBot",
          "Meta-ExternalAgent",
          "Meta-ExternalFetcher",
          "Bytespider",
          "Diffbot",
          "DuckAssistBot",
          "Cohere-ai",
          "Cohere-training-data-crawler",
          "MistralAI-User",
        ],
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}

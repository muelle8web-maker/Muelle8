import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// TODO: replace with the real production domain before launch.
const BASE_URL = "https://muelle8seafood.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/menu`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/catering`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/gift-cards`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/our-story`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    // /order intentionally omitted: currently a thin placeholder page.
    // Add it here once the real ordering flow ships with substantive,
    // unique content (menu items, pricing, checkout steps, etc).
    // /sign-in intentionally omitted: auth pages should not be indexed
    // (see robots.ts, which also disallows crawling it).
  ];
}

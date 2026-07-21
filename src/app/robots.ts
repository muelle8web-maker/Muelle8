import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// TODO: replace with the real production domain before launch.
const BASE_URL = "https://muelle8seafood.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /sign-in is a private/auth page and should not be indexed.
        // Note: for pages you still want crawled-but-not-indexed, prefer a
        // page-level `noindex` (via generateMetadata `robots: { index: false }`)
        // over robots.txt disallow, since disallow prevents Googlebot from
        // ever seeing that noindex directive. /sign-in has no meaningful
        // content to crawl, so a hard disallow here is appropriate.
        disallow: ["/sign-in"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}

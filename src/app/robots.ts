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
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}

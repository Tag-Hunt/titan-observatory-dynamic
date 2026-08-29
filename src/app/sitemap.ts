import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/site";

type SitemapEntry = MetadataRoute.Sitemap[number];

type Route = {
  path: string;
  /**
   * Date of the last substantive content change for this route.
   *
   * Bump this when you meaningfully change a page. It is deliberately not
   * the build timestamp: a sitemap that claims every page changed on every
   * deploy is inaccurate, and search engines respond by ignoring `lastmod`
   * for the whole site.
   */
  lastModified: string;
  changeFrequency: SitemapEntry["changeFrequency"];
  priority: number;
};

/**
 * Every publicly indexable route.
 *
 * Deliberately excluded:
 *  - `/volunteer` permanent redirect to an offsite form
 *  - `/api/*`     also disallowed in robots.ts
 */
const routes: Route[] = [
  { path: "/", lastModified: "2026-07-13", changeFrequency: "weekly", priority: 1.0 },
  { path: "/donate", lastModified: "2026-03-31", changeFrequency: "monthly", priority: 0.9 },
  { path: "/project-updates", lastModified: "2026-06-03", changeFrequency: "weekly", priority: 0.8 },
  { path: "/telescope-overview", lastModified: "2026-03-31", changeFrequency: "monthly", priority: 0.8 },
  { path: "/hydrogen-line", lastModified: "2026-08-26", changeFrequency: "monthly", priority: 0.8 },
  { path: "/system-architecture", lastModified: "2026-08-26", changeFrequency: "monthly", priority: 0.7 },
  { path: "/team", lastModified: "2026-05-15", changeFrequency: "monthly", priority: 0.6 },
  { path: "/faq", lastModified: "2026-03-31", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", lastModified: "2026-08-27", changeFrequency: "yearly", priority: 0.6 },
  { path: "/terms", lastModified: "2026-04-03", changeFrequency: "yearly", priority: 0.3 },
  { path: "/privacy", lastModified: "2026-04-03", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, lastModified, changeFrequency, priority }) => ({
    url: absoluteUrl(path),
    lastModified: new Date(lastModified),
    changeFrequency,
    priority,
  }));
}

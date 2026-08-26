const FALLBACK_SITE_URL = "https://titanobservatory.org";

/**
 * Absolute, trailing-slash-free origin for the public site.
 *
 * Resolution order matches the one `robots.ts` has always used, so the
 * sitemap, robots directives and `metadataBase` can never disagree about
 * which origin is canonical.
 */
export const siteUrl = (
  process.env.NEXTAUTH_URL ??
  process.env.NEXT_PUBLIC_SITE_URL ??
  FALLBACK_SITE_URL
).replace(/\/+$/, "");

export const siteName = "Titan Observatory";

export const siteDescription =
  "A 501(c)(3) nonprofit bringing a 10-meter NASA-built radio telescope online as a remote observing platform open to students, researchers, and the public.";

/** Absolute URL for a site-relative path, e.g. `absoluteUrl("/about")`. */
export function absoluteUrl(path = "/"): string {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

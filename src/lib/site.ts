const FALLBACK_SITE_URL = "https://titanobservatory.org";

/**
 * Absolute, trailing-slash-free origin for the public site.
 *
 * Keep sitemap, robots directives and `metadataBase` on the same canonical
 * origin, with a production fallback for environments that omit configuration.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  FALLBACK_SITE_URL
).replace(/\/+$/, "");

export const siteName = "Titan Observatory";

export const siteDescription =
  "A 501(c)(3) nonprofit bringing a 10-meter NASA-built radio telescope online as a remote observing platform open to students, researchers, and the public.";

/** Absolute URL for a site-relative path, e.g. `absoluteUrl("/donate")`. */
export function absoluteUrl(path = "/"): string {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

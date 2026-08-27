import type { Metadata } from "next";

import { absoluteUrl, siteName } from "@/lib/site";
import HydrogenLineContent from "./HydrogenLineContent";

const PAGE_PATH = "/hydrogen-line";

export const metadata: Metadata = {
  title: "The Hydrogen Line",
  description:
    "What the 21 cm hydrogen line is, how the spin-flip transition produces a 1420.4 MHz radio signal, how Ewen and Purcell first detected it in 1951, and how the Doppler shift turns it into a map of the Milky Way.",
  keywords: [
    "hydrogen line",
    "21 cm line",
    "1420 MHz",
    "neutral hydrogen",
    "spin-flip transition",
    "radio astronomy",
    "Doppler shift",
    "Karl Jansky",
    "Ewen and Purcell",
  ],
  alternates: { canonical: absoluteUrl(PAGE_PATH) },
  openGraph: {
    type: "article",
    url: absoluteUrl(PAGE_PATH),
    siteName,
    title: `The Hydrogen Line | ${siteName}`,
    description:
      "The 21 cm hydrogen line explained: the spin-flip transition, its 1951 discovery, and how the Doppler shift makes it a map of the galaxy.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Hydrogen Line",
  description:
    "What the 21 cm hydrogen line is, how the spin-flip transition produces a 1420.4 MHz radio signal, how it was first detected in 1951, and how the Doppler shift turns it into a map of the Milky Way.",
  about: [
    { "@type": "Thing", name: "Hydrogen line" },
    { "@type": "Thing", name: "Radio astronomy" },
  ],
  mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(PAGE_PATH) },
  publisher: {
    "@type": "Organization",
    name: siteName,
    url: absoluteUrl("/"),
  },
};

export default function HydrogenLinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <HydrogenLineContent />
    </>
  );
}

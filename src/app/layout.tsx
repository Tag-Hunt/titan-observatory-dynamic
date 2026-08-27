import type { Metadata, Viewport } from "next";
import Script from "next/script";

import ClientEnhancements from "@/components/ClientEnhancements";
import RouteShell from "@/components/RouteShell";
import { siteDescription, siteName, siteUrl } from "@/lib/site";
import "./globals.css";
import "react-photo-view/dist/react-photo-view.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Radio Telescopes Open to Everyone`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-clip bg-titan-bg text-titan-text-primary">
        {GA_MEASUREMENT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="lazyOnload"
            />
            <Script id="ga-bootstrap" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname
                });
                gtag('config', 'AW-18061271562');
              `}
            </Script>
          </>
        ) : null}
        <ClientEnhancements measurementId={GA_MEASUREMENT_ID} />
        <RouteShell>{children}</RouteShell>
      </body>
    </html>
  );
}

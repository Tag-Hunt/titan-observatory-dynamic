"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import SectionReveals from "@/components/SectionReveals";

const DecorativeEffects = dynamic(() => import("@/components/DecorativeEffects"), {
  ssr: false,
});
const FloatingAccessibilityControls = dynamic(
  () => import("@/components/FloatingAccessibilityControls"),
  { ssr: false },
);
const GoogleAnalytics = dynamic(() => import("@/components/GoogleAnalytics"), {
  ssr: false,
});
const GivebutterConversionTracker = dynamic(
  () => import("@/components/GivebutterConversionTracker"),
  { ssr: false },
);

export default function ClientEnhancements({
  measurementId,
}: {
  measurementId?: string;
}) {
  const pathname = usePathname();
  const isStandaloneLegalPage = pathname === "/terms" || pathname === "/privacy";

  return (
    <>
      {isStandaloneLegalPage ? null : <SectionReveals pathname={pathname} />}
      <GivebutterConversionTracker />
      {isStandaloneLegalPage ? null : (
        <DecorativeEffects showShootingStars={pathname === "/"} />
      )}
      {measurementId ? <GoogleAnalytics measurementId={measurementId} /> : null}
      {isStandaloneLegalPage ? null : <FloatingAccessibilityControls />}
    </>
  );
}

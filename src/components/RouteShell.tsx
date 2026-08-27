"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SiteHeader from "@/components/SiteHeader";

const standaloneLegalRoutes = new Set(["/terms", "/privacy"]);

export default function RouteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (standaloneLegalRoutes.has(pathname)) {
    return children;
  }

  return (
    <div className="relative z-10 flex min-h-screen flex-col" data-page-root>
      <SiteHeader />
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-5 pt-6 pb-16 sm:px-6 sm:pt-8 sm:pb-12 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}

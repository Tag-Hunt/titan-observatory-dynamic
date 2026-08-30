"use client";

import { IconArrowLeft } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

interface LegalPageLayoutProps {
  current: "terms" | "observation-credits" | "privacy";
  title: string;
  summary: string;
  lastUpdated?: string;
  children: ReactNode;
}

const legalDocuments = [
  { id: "terms", label: "Terms and Conditions", href: "/terms" },
  {
    id: "observation-credits",
    label: "Observation Credit Terms",
    href: "/observation-credit-terms",
  },
  { id: "privacy", label: "Privacy Policy", href: "/privacy" },
] as const;

export default function LegalPageLayout({
  current,
  title,
  summary,
  lastUpdated = "July 17, 2026",
  children,
}: LegalPageLayoutProps) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length <= 1) {
      router.replace("/");
      return;
    }

    router.back();
  };

  return (
    <div
      className="dark min-h-screen bg-[#0e1019] text-[#d0d5dd]"
      style={{ fontFamily: "Outfit, sans-serif" }}
    >
      <header className="border-b border-white/10 bg-[#0e1019]">
        <div className="mx-auto flex min-h-24 max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8 sm:py-5 lg:px-10">
          <Link
            href="/"
            className="flex items-center gap-5"
            aria-label="Titan Observatory home"
          >
            <Image
              width={891}
              height={348}
              className="h-auto w-[168px] max-w-full sm:w-[190px]"
              src="/images/Logos/WideLight.webp"
              alt="Titan Observatory"
              priority
            />
            <span className="hidden border-l border-white/15 pl-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#667085] sm:block">
              Legal
            </span>
          </Link>

          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#98a2b3] transition-colors hover:text-white"
          >
            <IconArrowLeft className="size-4" aria-hidden="true" />
            Back
          </button>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl lg:grid-cols-[15rem_minmax(0,1fr)]">
        <aside className="border-b border-white/10 px-5 py-7 sm:px-8 lg:border-r lg:border-b-0 lg:px-8 lg:py-12">
          <div className="lg:sticky lg:top-8">
            <nav
              aria-label="Legal documents"
              className="flex gap-5 overflow-x-auto lg:block lg:space-y-1"
            >
              {legalDocuments.map((document) => {
                const isActive = document.id === current;

                return (
                  <Link
                    key={document.href}
                    href={document.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`block shrink-0 border-b-2 px-0 py-2 text-sm font-medium transition-colors lg:border-b-0 lg:border-l-2 lg:px-4 lg:py-2.5 ${
                      isActive
                        ? "border-[#747ed4] text-white"
                        : "border-transparent text-[#667085] hover:border-white/20 hover:text-[#e4e7ec]"
                    }`}
                  >
                    {document.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-10 hidden border-t border-white/10 pt-5 text-xs leading-5 text-[#475467] lg:block">
              <p>Effective date</p>
              <p className="mt-1 font-medium text-[#98a2b3]">{lastUpdated}</p>
            </div>
          </div>
        </aside>

        <article className="min-w-0 px-5 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16 xl:px-20">
          <header className="max-w-3xl border-b border-white/15 pb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8c94e5]">
              Titan Observatory
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.025em] text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#98a2b3] sm:text-lg sm:leading-8">
              {summary}
            </p>
            <p className="mt-6 text-xs font-medium uppercase tracking-[0.12em] text-[#475467] lg:hidden">
              Last updated <span className="ml-1 text-[#98a2b3]">{lastUpdated}</span>
            </p>
          </header>

          <div className="max-w-3xl text-[15px] leading-7 text-[#98a2b3] [&_a]:font-medium [&_a]:text-[#8c94e5] [&_a]:underline [&_a]:decoration-[#8c94e566] [&_a]:underline-offset-4 hover:[&_a]:decoration-[#8c94e5] [&_h2]:mb-4 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-[#f2f4f7] [&_h3]:mb-2 [&_h3]:font-semibold [&_h3]:text-[#f2f4f7] [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1.5 [&_p+p]:mt-3 [&_section]:border-b [&_section]:border-white/10 [&_section]:py-9 [&_ul]:mt-3 [&_ul]:space-y-2">
            {children}
          </div>
        </article>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-[#475467] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>© {new Date().getFullYear()} Titan Observatory</p>
          <p>Educational access to radio astronomy</p>
          <a
            className="hover:text-[#d0d5dd]"
            href="https://app.titanobservatory.org/contact"
          >
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}

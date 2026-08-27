"use client";

import { useLayoutEffect } from "react";

import {
  ANIMATIONS_EVENT,
  getAnimationsDisabled,
} from "@/lib/animations";

const REVEAL_SELECTOR = "[data-reveal], main section, main header";

export default function SectionReveals({ pathname }: { pathname: string }) {
  useLayoutEffect(() => {
    const pageRoot = document.querySelector<HTMLElement>("[data-page-root]");
    if (!pageRoot) return;

    const candidates = Array.from(
      pageRoot.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
    );
    const elements = candidates.filter((element) => {
      if (element.matches("[data-reveal]")) return true;

      // Prefer a page's deliberately granular reveals over also animating
      // their containing section or header.
      return (
        !element.closest("[data-reveal]") &&
        !element.querySelector("[data-reveal]")
      );
    });

    if (elements.length === 0) return;

    for (const element of elements) {
      element.dataset.sectionReveal = "";
    }
    document.documentElement.dataset.sectionReveals = "enabled";

    const reveal = (element: HTMLElement) => {
      element.classList.add("is-revealed");
      observer?.unobserve(element);
      pending.delete(element);
    };

    const revealAll = () => {
      for (const element of elements) reveal(element);
    };

    let observer: IntersectionObserver | null = null;
    const pending = new Set(elements);

    if (
      getAnimationsDisabled() ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      revealAll();
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) reveal(entry.target as HTMLElement);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    for (const element of elements) observer.observe(element);

    // Cover browsers that delay observer callbacks while restoring a tab or
    // route from cache.
    const sweep = () => {
      for (const element of Array.from(pending)) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 40 && rect.bottom > 0) {
          reveal(element);
        }
      }
    };
    let sweepTimer = window.setTimeout(sweep, 350);
    const onScroll = () => {
      window.clearTimeout(sweepTimer);
      sweepTimer = window.setTimeout(sweep, 120);
    };
    const onAnimationsToggle = (event: Event) => {
      const detail = (event as CustomEvent<{ disabled?: boolean }>).detail;
      if (detail?.disabled) revealAll();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener(ANIMATIONS_EVENT, onAnimationsToggle);

    return () => {
      observer?.disconnect();
      window.clearTimeout(sweepTimer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener(ANIMATIONS_EVENT, onAnimationsToggle);
    };
  }, [pathname]);

  return null;
}

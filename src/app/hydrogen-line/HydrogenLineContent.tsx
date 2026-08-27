"use client";

/**
 * Ported from the observing app's queue page
 * (platform/frontend/src/components/QueuePage/index.tsx).
 *
 * The section markup, class names, copy and animations are carried over
 * unchanged. What is dropped is the queue machinery the marketing site has no
 * backend for — the sticky queue header, join form, Turnstile widget, position
 * readout and progress bar — along with the app's own footer, since this page
 * renders inside the site layout's header and footer.
 */

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

import { useVisibleAnimation, STICKY_HEADER_ANIMATION_MARGIN_PX } from "@/lib/useVisibleAnimation";
import { HydrogenAtomDepiction } from "@/components/hydrogen-line/HydrogenAtom";
import { StarsBackground } from "@/components/hydrogen-line/StarsBackground";
import { DopplerExplainer } from "@/components/hydrogen-line/DopplerExplainer";
import { HeroSpectrum } from "@/components/hydrogen-line/HeroSpectrum";

import "./queue-page.css";

const MISLEADING_POPOVER_WIDTH = 260;
const MISLEADING_POPOVER_HEIGHT = 245;
const MISLEADING_POPOVER_GAP = 10;
const MISLEADING_POPOVER_MARGIN = 12;
const SPECTRAL_LINES_POPOVER_HEIGHT = 142;

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

type InlinePopoverState = {
  left: number;
  top: number;
  placement: "above" | "below";
  open: boolean;
};

type InlineHoverPopoverProps = {
  label: ReactNode;
  ariaLabel: string;
  children: ReactNode;
  className?: string;
  popoverClassName?: string;
  width?: number;
  height?: number;
};

function InlineHoverPopover({
  label,
  ariaLabel,
  children,
  className = "",
  popoverClassName = "",
  width = MISLEADING_POPOVER_WIDTH,
  height = MISLEADING_POPOVER_HEIGHT,
}: InlineHoverPopoverProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [popover, setPopover] = useState<InlinePopoverState | null>(null);

  const positionPopover = () => {
    const trigger = buttonRef.current;
    if (!trigger) return;
    const rect = trigger.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const popoverWidth = Math.min(width, viewportWidth - MISLEADING_POPOVER_MARGIN * 2);
    const halfWidth = popoverWidth / 2;
    const maxLeft = Math.max(
      MISLEADING_POPOVER_MARGIN + halfWidth,
      viewportWidth - MISLEADING_POPOVER_MARGIN - halfWidth,
    );
    const left = clamp(
      rect.left + rect.width / 2,
      MISLEADING_POPOVER_MARGIN + halfWidth,
      maxLeft,
    );
    const roomAbove = rect.top - MISLEADING_POPOVER_MARGIN;
    const roomBelow = viewportHeight - rect.bottom - MISLEADING_POPOVER_MARGIN;
    const placement = roomAbove > roomBelow && roomAbove >= height ? "above" : "below";
    const preferredTop =
      placement === "above"
        ? rect.top - MISLEADING_POPOVER_GAP - height
        : rect.bottom + MISLEADING_POPOVER_GAP;
    const maxTop = Math.max(
      MISLEADING_POPOVER_MARGIN,
      viewportHeight - MISLEADING_POPOVER_MARGIN - height,
    );
    const top = clamp(preferredTop, MISLEADING_POPOVER_MARGIN, maxTop);
    setPopover({ left, top, placement, open: true });
  };

  const hidePopover = () => {
    setPopover((current) => (current ? { ...current, open: false } : null));
  };

  useEffect(() => {
    if (!popover?.open) return;
    window.addEventListener("resize", positionPopover);
    window.addEventListener("scroll", positionPopover, true);
    return () => {
      window.removeEventListener("resize", positionPopover);
      window.removeEventListener("scroll", positionPopover, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [popover, width, height]);

  return (
    <button
      ref={buttonRef}
      className={`spectrum-doppler-term h1-misleading-highlight${className ? ` ${className}` : ""}`}
      type="button"
      aria-label={ariaLabel}
      aria-expanded={popover?.open ? "true" : "false"}
      onMouseEnter={positionPopover}
      onFocus={positionPopover}
      onMouseLeave={hidePopover}
      onBlur={hidePopover}
      onClick={positionPopover}
    >
      {label}
      <span
        className={`h1-misleading-popover h1-misleading-popover-${popover?.placement ?? "below"}${popover?.open ? " h1-misleading-popover-open" : ""}${popoverClassName ? ` ${popoverClassName}` : ""}`}
        role="tooltip"
        style={popover ? { left: popover.left, top: popover.top } : undefined}
      >
        {children}
      </span>
    </button>
  );
}

export default function HydrogenLineContent() {
  const pageRef = useRef<HTMLDivElement | null>(null);

  // Scroll-driven reveals: every [data-reveal] element rises into place the
  // first time it enters the viewport. With reduced motion preferred we skip
  // straight to the revealed state (the CSS transition is also disabled).
  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;
    const els = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (els.length === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      for (const el of els) el.classList.add("is-revealed");
      return;
    }
    const pending = new Set(els);
    const reveal = (el: HTMLElement) => {
      el.classList.add("is-revealed");
      pending.delete(el);
      observer.unobserve(el);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) reveal(entry.target as HTMLElement);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    for (const el of els) observer.observe(el);
    // Belt-and-braces geometric sweep: if the observer never fires (it ticks
    // with the refresh driver, which some environments suspend), anything
    // already in the viewport still reveals shortly after mount and on scroll.
    const sweep = () => {
      for (const el of Array.from(pending)) {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 40 && rect.bottom > 0) reveal(el);
      }
      if (pending.size === 0) window.removeEventListener("scroll", onScroll);
    };
    let sweepTimer = window.setTimeout(sweep, 350);
    const onScroll = () => {
      clearTimeout(sweepTimer);
      sweepTimer = window.setTimeout(sweep, 120);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      clearTimeout(sweepTimer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const animationsPaused = false;

  const [spinFlipRef, spinFlipActive] = useVisibleAnimation<HTMLDivElement>(
    STICKY_HEADER_ANIMATION_MARGIN_PX,
  );

  return (
    <div className="h1-fullbleed">
      <div className="queue-waiting" ref={pageRef}>
        <div className="h1-page">
          {/* ── Hero ──────────────────────────────────────────────────────── */}
          <section className="h1-hero" id="h1-intro-section">
            <div className="h1-hero-inner">
              <div className="h1-hero-text" data-reveal>
                <span className="h1-eyebrow">What is it?</span>
                <h1 className="h1-hero-title">The Hydrogen Line</h1>
                <p className="h1-hero-sub">Found around 1420.4 MHz, the hydrogen line is a characteristic radio signal emitted by electrically neutral hydrogen atoms, a common form of the most abundant element in the universe. Its discovery and use in early days of radio astronomy unlocked an entirely new set of tools for exploring the universe, allowing us to see through thick clouds of dust, measure the velocity and structure of nearby hydrogen, and, for the first time, learn what our own Milky Way galaxy looked like.</p>
                <p className="queue-content-disclaimer">
                  All content is researched and written by humans :)
                </p>
              </div>
              <div className="h1-hero-visual" data-reveal="lag">
                <HeroSpectrum paused={animationsPaused} />
                <p className="h1-visual-caption">
                  Hydrogen line profile looking outward through the galactic disk
                  (l = 65°, b = 0°). LAB all-sky survey, Kalberla et al. 2005.
                </p>
              </div>
            </div>
          </section>

          {/* ── Radio Astronomy History section ────────────────────────────── */}
          <section className="h1-spinflip h1-discovery-section" id="h1-history-section">
            <StarsBackground />
            <div className="h1-spinflip-inner">
              <div className="h1-spinflip-text" data-reveal>
                <span className="h1-eyebrow">How was it discovered?</span>
                <h2 className="h1-section-heading">Science at its best</h2>
                <p className="h1-section-body">
                  In the decades after radio waves were first detected from space in 1931, radio astronomy was mostly limited to measuring continuum emission. That could reveal a source&apos;s general &quot;brightness,&quot; but not much else. While the power of{" "}
                  <InlineHoverPopover
                    label="spectral lines"
                    ariaLabel="Show what spectral lines are"
                    height={SPECTRAL_LINES_POPOVER_HEIGHT}
                    popoverClassName="h1-spectral-lines-popover"
                  >
                    <strong>Spectral lines act as fingerprints.</strong>
                    <span>
                      When atoms or molecules interact with light, their unique structure causes them to absorb and reemit photons at very specific wavelengths. Because the laws of physics are universal, we can use these highly specific &quot;fingerprints&quot; to identify the chemical composition of material from anywhere in the universe!
                    </span>
                  </InlineHoverPopover>{" "}
                  was already well known in visible-light astronomy, its application to radio astronomy was not immediately explored. It would take time to develop both the technical skills and shared expertise to bridge the gap between RF engineering and astronomy, which had been completely separate fields until that point.
                </p>
                <p className="h1-section-body">By the 1950s, thanks in large part to the efforts of radio engineer Grote Reber, radio astronomy had matured enough for more speculative ideas to form. One of those ideas came from a paper by Van de Hulst in 1945 predicting the existence of the 21 cm line emitted by galactic hydrogen. However, the discovery would not come from a research team with the latest technology, but from a graduate student who built his own telescope on a $500 budget, sticking out of the fourth floor of Harvard&apos;s Lyman Lab (pictured).</p>
                <p className="h1-section-body">When Doc Ewen began the experiment under Purcell&apos;s guidance, there was little expectation of actually detecting anything. Even Van de Hulst had expressed doubt that the signal would be strong enough to observe. Still, in science, looking for something and not finding it still teaches us something. In this case, they hoped to at least set an upper limit on how strong the signal could be, if it did exist.</p>
                <p className="h1-section-body">Ewen turned on the receiver after major modifications for the first time during Easter weekend in 1951. As Ewen put it: &quot;By 3:00 AM on Sunday morning March 25, I was convinced that the line had been detected.&quot;</p>
              </div>
              <figure className="h1-ewen-figure" data-reveal="lag">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/hydrogen-line/ewen.webp"
                  alt="Doc Ewen inspecting patchwork inside the horn antenna"
                  className="h1-ewen-image"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="h1-ewen-caption">
                  <blockquote>
                    After one year, parts of the copper skin had cracked and peeled away from the plywood. I purchased fifty feet of rope from a local hardware store, tied one end around my waist and the other to the lower section of the antenna mount. With a large soldering iron, solder, and a bristle brush I went over the side, four floors up, and slid into the horn. About an hour later, I managed to climb out of the horn back on to the parapet. This picture of me inspecting the patchwork was taken about two days later. The line was detected within the next few weeks.
                  </blockquote>
                  <cite>Doc Ewen</cite>
                </figcaption>
              </figure>
            </div>
          </section>

          {/* ── Doppler section ────────────────────────────────────────────── */}
          <section className="h1-spinflip h1-spinflip-alt" id="h1-doppler-section">
            <div className="h1-doppler-inner">
              <DopplerExplainer paused={animationsPaused} reveal />
            </div>
          </section>

          {/* ── Donation banner ────────────────────────────────────────────── */}
          <div className="donation-banner">
            <div className="donation-banner-inner" data-reveal>
              <div className="donation-banner-body">
                <p className="donation-banner-headline">We need your help!</p>
                <p className="donation-banner-sub">
                  We&apos;re a small team of passionate volunteers working hard to make the Titan Observatory a reality, but we need more support. If you like what we&apos;re doing, please consider donating and help lay the foundation for a first-of-its-kind community radio observatory.
                </p>
                <p className="donation-banner-sub donation-banner-sub-cta">
                  <strong>
                    Interested in sponsoring, collaborating, or making an in-kind donation? Send us an email at{" "}
                    <a className="donation-banner-email" href="mailto:contact@titanobservatory.org">contact@titanobservatory.org</a>
                  </strong>
                </p>
              </div>
              <div className="donation-banner-actions">
                <a className="donation-banner-link donation-banner-link-primary" href="/donate">
                  Donate
                </a>
                <a
                  className="donation-banner-link donation-banner-link-secondary"
                  href="mailto:contact@titanobservatory.org"
                >
                  Partner with us
                </a>
              </div>
            </div>
          </div>

          {/* ── Spin-flip section ──────────────────────────────────────────── */}
          <section className="h1-doppler" id="h1-spinflip-section">
            <div className="h1-spinflip-inner">
              <div className="h1-spinflip-text" data-reveal>
                <span className="h1-eyebrow">What causes it?</span>
                <h2 className="h1-section-heading">The spin-flip transition</h2>
                <p className="h1-section-body">
                  Neutral hydrogen consists of one proton and one electron, each with a quantum property known as spin. The term &quot;spin&quot; here is a bit{" "}
                  <InlineHoverPopover
                    label="misleading"
                    ariaLabel="Show why the spin analogy is misleading"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/hydrogen-line/spin-analogy.webp"
                      alt="Electron spin explained: imagine a ball that's rotating, except it's not a ball and it's not rotating."
                      loading="lazy"
                      decoding="async"
                    />
                  </InlineHoverPopover>{" "}
                  to say the least, so for this analogy, we&apos;ll simply represent it&apos;s two possible states: &quot;up&quot; and &quot;down&quot;. When the proton and electron spins are parallel, pointing in the same direction, the atom has a slightly higher energy level than when the spins are anti-parallel (due to complex interactions between their magnetic moments).
                </p>
                <p className="h1-section-body">
                  Very rarely, a hydrogen atom in the higher-energy parallel configuration transitions, or &ldquo;flips,&rdquo; into the lower-energy anti-parallel configuration. Because energy is conserved, the atom cannot simply lose that extra energy. It must carry the energy away somehow, and in this case it is released as a radio photon at 1420.4 MHz, corresponding to a wavelength of about 21 centimeters.
                </p>
                <p className="h1-section-body">Although any individual spin-flip transition is exceptionally rare, neutral hydrogen is so abundant in the galaxy that the combined signal is constant and measurable, even with a home-built radio telescope!</p>
              </div>
              <div className="h1-spinflip-visual-wrap" ref={spinFlipRef} data-reveal="lag">
                <div className="h1-spinflip-visual">
                  <HydrogenAtomDepiction paused={!spinFlipActive} />
                </div>
                <p className="h1-visual-caption">
                  In neutral hydrogen, a rare flip from parallel to anti-parallel spin releases a 1420.4 MHz radio photon: the 21 cm hydrogen line.
                </p>
              </div>
            </div>
          </section>

          {/* ── Jansky section ─────────────────────────────────────────────── */}
          <section className="h1-spinflip h1-spinflip-alt h1-jansky-section" id="h1-jansky-section">
            <div className="h1-spinflip-inner">
              <div className="h1-spinflip-text" data-reveal>
                <span className="h1-eyebrow">More lore</span>
                <h2 className="h1-section-heading">The beginning of radio astronomy</h2>
                <p className="h1-section-body">In the 1930&apos;s, while working at Bell Labs in it&apos;s formative years, Karl Jansky was tasked with identifying sources of radio noise which could interefere with overseas radio communication (a bleeding edge technology at the time). Among more mundane sources like thunderstorms, Jansky observed a peculiar background &quot;hiss&quot; of unknown origin which seemed to cycle in intensity once per day, leading Jansky to assume this noise originated from the sun.</p>
                <p className="h1-section-body">However, after a few more months of observation, the point of maximum &quot;static&quot; had noticibly shifted from the position of the sun. Recognizing that this puzzle was beyond the realm of RF engineering, Janksky met with his friend and astrophysicist Albert Melvin Skellett, who pointed out that the now refined 23 hours and 56 minute period of the signal was the exact length of a sidereal day.</p>
              </div>
              <figure className="h1-jansky-figure" data-reveal="lag">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/hydrogen-line/jansky.webp"
                  alt="Karl Jansky's rotating directional radio antenna array"
                  className="h1-jansky-image"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="h1-jansky-caption">
                  Karl Jansky, working at Bell Telephone Laboratories in Holmdel, NJ, built this antenna to receive radio waves at a frequency of 20.5 MHz (wavelength about 14.5 meters). It was mounted on a turntable that allowed it to rotate in any direction, earning it the name &quot;Jansky&apos;s merry-go-round&quot;.
                </figcaption>
              </figure>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

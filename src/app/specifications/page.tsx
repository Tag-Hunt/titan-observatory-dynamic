import type { Metadata } from "next";
import Image from "next/image";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Telescope & Site Specifications | Titan Observatory",
  description:
    "A closer look at Titan's 10-meter NASA-built radio telescope and the Florida site that will host it.",
};

const keyFacts = [
  {
    label: "Aperture",
    value: "10 m Cassegrain surface gathers plenty of signal for faint 1420.4 MHz hydrogen work.",
  },
  {
    label: "Drives",
    value: "Dual gear trains, dual DC motors, and electronic brakes—balanced enough to nudge by hand.",
  },
  {
    label: "Speed & Range",
    value: "Variable slews from 0–10°/s, elevation 0–95°, azimuth 360°+ with managed wrap.",
  },
  {
    label: "Control",
    value: "Analog feedback today; we’re adding encoders and computer control for reliable remote pointing.",
  },
  {
    label: "Power",
    value: "Twin 48 VDC supplies plus a modest 120 V, ~20 A site draw.",
  },
  {
    label: "Footprint & Fixtures",
    value: "Compact ~8 ft circular pier footprint, bolt template, spare gearboxes, and a rack-mount analog readout.",
  },
];

const telescopeImages = [
  {
    src: "/images/titan-looking-up.png",
    alt: "Looking up from the base of the Titan dish.",
  },
  {
    src: "/images/titan-drone-shot-1.png",
    alt: "Drone shot of the Titan telescope and surroundings.",
  },
  {
    src: "/images/titan-drone-shot-2.png",
    alt: "Top-down drone view of the Titan telescope assembly.",
  },
];

const candidateSections = [
  {
    title: "Approach & Access",
    copy: [
      "A county road runs right to the gate, and the planned service drive gives the crane and transport crew a straight shot to the pier location.",
      "From the frontage you can see open horizon in every direction plus plenty of staging room for the lift team once the dish arrives.",
    ],
    image: { src: "/images/zoning-from-road.png", alt: "Roadside view of the proposed observatory entrance." },
  },
  {
    title: "Parcel Layout & Zoning",
    copy: [
      "Agricultural zoning keeps permitting simple. The parcel grid shows where the pier will sit and the buffer we’re keeping clear around the dish.",
      "The pier bolt pattern drops neatly onto the planned slab, leaving room for conduit runs now and future upgrades later.",
    ],
    image: { src: "/images/zoning-grid.png", alt: "Parcel grid map showing the proposed pier and access drive." },
  },
  {
    title: "Radio Environment",
    copy: [
      "Pasture and groves surround the parcel, which keeps broadband noise low for the L- and S-band work we have planned.",
      "Zooming out, there’s still no heavy industry or major transmitters, so we hold onto the radio-quiet window classrooms need for clean spectra.",
    ],
    image: { src: "/images/zoning-circle.png", alt: "Land-use buffer illustrating the radio-quiet surroundings." },
  },
];

export default function SpecificationsPage() {
  return (
    <main className="space-y-16">
      <section className="grid gap-16 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8">
          <header className="space-y-3">
            <h1 className="text-4xl font-bold text-titan-text-secondary">Titan Telescope Overview</h1>
            <p className="text-sm leading-relaxed text-titan-text-primary/90">
              The Titan dish is a 10-meter Scientific-Atlanta Cassegrain on an ANTLab positioner that once lived in
              NASA’s network. Decades of careful maintenance kept the mechanics tight, which means we can focus on
              modern controls and data systems instead of rebuilding the hardware from scratch.
            </p>
          </header>

          <div className="grid gap-4 sm:grid-cols-2">
            {keyFacts.map(fact => (
              <article
                key={fact.label}
                className="rounded-3xl border border-titan-border/50 bg-titan-bg-alt/25 p-5 text-sm leading-relaxed text-titan-text-primary/90"
              >
                <h3 className="text-base font-semibold text-titan-text-secondary">{fact.label}</h3>
                <p className="mt-1">{fact.value}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <figure className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-titan-border/60 bg-titan-bg-alt/40 shadow-titan lg:col-span-2">
            <Image
              src={telescopeImages[0].src}
              alt={telescopeImages[0].alt}
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 560px, (min-width: 768px) 70vw, 90vw"
              priority
            />
          </figure>
          <figure className="relative aspect-[5/4] overflow-hidden rounded-[2rem] border border-titan-border/60 bg-titan-bg-alt/40 shadow-titan">
            <Image
              src={telescopeImages[1].src}
              alt={telescopeImages[1].alt}
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 360px, (min-width: 768px) 45vw, 90vw"
            />
          </figure>
          <figure className="relative aspect-[5/4] overflow-hidden rounded-[2rem] border border-titan-border/60 bg-titan-bg-alt/40 shadow-titan">
            <Image
              src={telescopeImages[2].src}
              alt={telescopeImages[2].alt}
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 360px, (min-width: 768px) 45vw, 90vw"
            />
          </figure>
        </div>
      </section>

      <section className="space-y-10">
        <header className="space-y-3">
          <h2 className="text-3xl font-semibold text-titan-text-secondary">Candidate Site Overview</h2>
          <p className="text-sm leading-relaxed text-titan-text-primary/90">
            The proposed site keeps Titan close to infrastructure while preserving a radio-quiet horizon. Each diagram
            and photo below shows how the approach, zoning, and surrounding land support the observatory plan.
          </p>
        </header>

        <div className="space-y-8">
          {candidateSections.map(section => (
            <article
              key={section.title}
              className="grid gap-6 rounded-3xl border border-titan-border/50 bg-titan-bg-alt/20 p-6 text-sm leading-relaxed text-titan-text-primary/90 lg:grid-cols-[1.05fr_0.95fr]"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-titan-text-secondary">{section.title}</h3>
                {section.copy.map(paragraph => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <figure className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-titan-border/40 bg-titan-bg-alt/30 shadow-titan">
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 480px, (min-width: 768px) 45vw, 90vw"
                />
              </figure>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

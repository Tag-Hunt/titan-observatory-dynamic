import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { cn } from "@/lib/utils";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Science & Roadmap",
  description:
    "What Titan Observatory observes, the instruments that do it, and the roadmap from a working 2.3-meter hydrogen-line telescope to a scalable radio network.",
};

/**
 * Status vocabulary used across this page.
 *
 * Every capability and instrument carries a status on purpose: the difference
 * between what works today and what is still an intention is the most useful
 * thing this page can tell a reader who knows the field.
 */
const statusStyles = {
  operating: {
    label: "Operating",
    className: "border-titan-green/40 bg-titan-green/10 text-titan-green",
  },
  building: {
    label: "In development",
    className: "border-titan-yellow/40 bg-titan-yellow/10 text-titan-yellow",
  },
  planned: {
    label: "Planned",
    className: "border-titan-aqua/40 bg-titan-aqua/10 text-titan-aqua",
  },
  longTerm: {
    label: "Long-term",
    className: "border-titan-purple/50 bg-titan-purple/15 text-titan-text-secondary",
  },
} as const;

type Status = keyof typeof statusStyles;

function StatusBadge({ status }: { status: Status }) {
  const { label, className } = statusStyles[status];
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em]",
        className,
      )}
    >
      {label}
    </span>
  );
}

const capabilities: Array<{ title: string; status: Status; body: string }> = [
  {
    title: "Neutral hydrogen (21 cm) spectroscopy",
    status: "building",
    body: "Our first and primary capability. Hydrogen is the most abundant element in the universe, and cold hydrogen gas emits a faint, extremely specific radio signal at 1420.4 MHz. Because we know its exact rest frequency, any shift we measure is a direct readout of how fast that gas is moving toward or away from us.",
  },
  {
    title: "Mapping the Milky Way",
    status: "planned",
    body: "Repeat hydrogen measurements along the galactic plane build up a picture of where the gas in our galaxy is and how it rotates. This is the observation that first revealed the Milky Way's spiral structure from the inside, and the same rotation curve is one of the earliest pieces of evidence for dark matter.",
  },
  {
    title: "Solar radio monitoring",
    status: "planned",
    body: "The Sun is a loud, variable radio source and a forgiving first target. Programs comparable to NASA-supported Radio JOVE give students something that changes day to day, which makes repeat observing worthwhile rather than a one-time exercise.",
  },
  {
    title: "Continuum observations of bright sources",
    status: "planned",
    body: "Drift scans and pointed observations of strong sources such as Cassiopeia A, Cygnus A, and the galactic center. These double as the pointing and calibration checks that tell us the instrument is behaving.",
  },
  {
    title: "Satellite reception and spectrum identification",
    status: "planned",
    body: "Learning to recognize what is astronomical and what is human-made is a real skill, not a nuisance. Identifying satellites and terrestrial signals in a live spectrum is one of the most immediately engaging exercises available on a radio telescope.",
  },
  {
    title: "Pulsar detection and timing",
    status: "longTerm",
    body: "Strong pulsars are within reach of a well-instrumented mid-size dish. Timing experiments demand real backend capability, wider bandwidth, and dedispersion, so this depends on receiver and pipeline maturity rather than aperture alone.",
  },
  {
    title: "Masers and molecular lines",
    status: "longTerm",
    body: "Sources such as the 1612 MHz OH masers around evolved stars become accessible as sensitivity, frequency coverage, and calibration improve. They will require larger apertures and higher-frequency front ends.",
  },
  {
    title: "Interferometry across multiple dishes",
    status: "longTerm",
    body: "Combining separated dishes trades collecting area for angular resolution. For Titan this is as much an engineering and education program as a science one: correlation, timing distribution, and phase calibration are excellent student projects.",
  },
  {
    title: "Optical spectroscopy",
    status: "longTerm",
    body: "A small remotely operated spectroscopy dome could eventually extend the same learn, observe, analyze, share workflow to stellar spectra once the radio program is well established.",
  },
];

const siteCards = [
  {
    title: "Digitize at the dish",
    body: "Each telescope digitizes its own signal locally with a software-defined radio. Only digital data and control traffic travel back to the server shelter. This avoids the loss and pickup that come with long analog runs, and it means telescopes can be spread across the field instead of clustered around a receiver room.",
  },
  {
    title: "Fiber, not copper",
    body: "The backbone between instrument clusters and the shelter is fiber. Fiber carries no current, so it neither radiates interference into the front ends nor offers lightning a conductive path across the site, which is a real consideration in central Florida.",
  },
  {
    title: "Independent solar nodes",
    body: "Telescope mounts, batteries, local control electronics, and digitization run from their own solar and battery supply. Independence from mains power at the instrument reduces conducted noise and keeps a dish operable when site power is not.",
  },
  {
    title: "A quiet seven acres",
    body: "The permanent site is a seven-acre area of family-owned agricultural land in unincorporated Polk County, Florida, chosen for its low interference, open horizon, and room to add dishes.",
  },
  {
    title: "Unattended by design",
    body: "The site is designed to operate autonomously, preventing RFI from on-site staff and forcing the discipline of safe states, weather and battery interlocks, equipment-health monitoring, remote power control, and operator alerting.",
  },
] as const;

const dataPoints = [
  "Raw instrument and SDR data, calibrated products, and processed visualizations where technically practical.",
  "Instrument configuration, pointing, timestamps, calibration state, weather, RFI flags, and processing history recorded as metadata as scientific maturity improves.",
  "Documented standard formats and published API access for external projects and automated retrieval.",
] as const;

const roadmap: Array<{
  title: string;
  status: "current" | "next" | "later";
  body: string;
}> = [
  {
    title: "Build the site",
    status: "current",
    body:
      "Prepare the permanent site, install the existing 2.3 m hydrogen-line telescope, and connect it to the platform for reliable remote observing.",
  },
  {
    title: "Open observing to the public",
    status: "next",
    body:
      "Offer guided observations, data analysis, and classroom programs shaped by feedback from early users.",
  },
  {
    title: "Scale the radio network",
    status: "later",
    body:
      "Standardize control hardware, integrate donated dishes, add new receiver bands, and expand site infrastructure.",
  },
  {
    title: "Broaden the program",
    status: "later",
    body:
      "Develop internships, university projects, interferometry, and more advanced science workflows, with optical spectroscopy as a possible future addition.",
  },
];

const roadmapStatusStyles = {
  current: {
    label: "In progress",
    dot: "bg-titan-orange",
    card: "border-titan-orange/40 bg-titan-orange/[0.06]",
    text: "text-titan-orange",
  },
  next: {
    label: "Next",
    dot: "bg-titan-yellow",
    card: "border-titan-border/60 bg-titan-bg-alt/80",
    text: "text-titan-yellow",
  },
  later: {
    label: "Later",
    dot: "bg-titan-text-muted",
    card: "border-titan-border/50 bg-titan-bg-alt/50",
    text: "text-titan-text-muted",
  },
} as const;

export default function SciencePage() {
  return (
    <main className="relative z-10 space-y-20">
      <header className="space-y-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-titan-orange sm:text-xs sm:tracking-[0.25em]">
          The Science
        </p>
        <h1 className="text-3xl font-bold text-titan-text-secondary sm:text-4xl">
          Science &amp; Roadmap
        </h1>
        <p className="max-w-3xl text-sm leading-7 text-titan-text-primary/90">
          This page is the unvarnished version of what Titan Observatory can do. Every capability and
          instrument below carries a status, because the difference between{" "}
          <em>working today</em> and <em>intended later</em> is the most useful thing we can tell
          you. If you are new to radio astronomy, start with the primer directly below. If you
          already know the field, the instrument and site sections are where the detail is.
        </p>
      </header>

      {/* Beginner primer */}
      <AnimatedSection className="rounded-3xl border border-titan-border/50 bg-titan-bg-alt/60 p-7 backdrop-blur-sm sm:p-8">
        <div className="mx-auto max-w-3xl space-y-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-titan-text-muted sm:text-xs sm:tracking-[0.25em]">
            New to this?
          </p>
          <h2 className="text-2xl font-semibold text-titan-text-secondary">
            What a radio telescope actually does
          </h2>
          <p className="text-sm leading-7 text-titan-text-primary/90">
            Visible light is one narrow slice of the electromagnetic spectrum. Radio waves are the
            same phenomenon at much longer wavelengths, and the universe is full of them. They pass
            straight through the dust clouds that block visible light, they arrive day and night, and
            they carry information no optical telescope can collect.
          </p>
          <p className="text-sm leading-7 text-titan-text-primary/90">
            A radio telescope is not a camera. The dish is a collector: it focuses incoming radio
            waves onto a single sensitive receiver, the signal is amplified and digitized, and what
            comes out is a{" "}
            <strong className="font-semibold text-titan-text-secondary">spectrum</strong> &mdash; a
            graph of how much energy arrives at each frequency. Learning to read that graph is the
            whole skill, and it is genuinely learnable in an afternoon.
          </p>
          <p className="text-sm leading-7 text-titan-text-primary/90">
            Here is why that graph is powerful. Atoms emit and absorb at exact, known frequencies. So
            when you see a bump sitting slightly off from where it belongs, the source is moving
            &mdash; and the size of the shift tells you how fast. That one idea is how we measure the
            rotation of our own galaxy from the inside.
          </p>
          <Link
            href="/hydrogen-line"
            className="inline-flex items-center justify-center rounded-full border border-titan-yellow/50 bg-titan-yellow/10 px-6 py-3 text-sm font-semibold text-titan-text-secondary transition hover:bg-titan-yellow/20"
          >
            Read the full hydrogen line story
          </Link>
        </div>
      </AnimatedSection>

      {/* Capabilities */}
      <section className="space-y-8">
        <div className="max-w-3xl space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-titan-text-muted sm:text-xs sm:tracking-[0.25em]">
            Observing program
          </p>
          <h2 className="text-2xl font-semibold text-titan-text-secondary">What We Observe</h2>
          <p className="text-sm leading-7 text-titan-text-primary/90">
            Hydrogen-line observing is the first production capability. The program expands as
            receivers, backends, apertures, and calibration mature &mdash; not on a marketing
            schedule.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {capabilities.map((item) => (
            <AnimatedSection
              key={item.title}
              className="rounded-3xl border border-titan-border/60 bg-titan-bg-alt/80 p-6 backdrop-blur-sm transition hover:border-titan-purple/40 sm:p-7"
            >
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-base font-semibold text-titan-text-secondary">{item.title}</h3>
                <StatusBadge status={item.status} />
              </div>
              <p className="mt-3 text-sm leading-7 text-titan-text-primary/80">{item.body}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Site & signal chain */}
      <section className="space-y-8">
        <div className="max-w-3xl space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-titan-text-muted sm:text-xs sm:tracking-[0.25em]">
            Site &amp; signal chain
          </p>
          <h2 className="text-2xl font-semibold text-titan-text-secondary">
            Why the Site Design Matters
          </h2>
          <p className="text-sm leading-7 text-titan-text-primary/90">
            Radio astronomy is the study of extremely faint signals in an environment full of loud
            human-made ones. Almost every decision below exists to protect the noise floor.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {siteCards.map((card) => (
            <AnimatedSection
              key={card.title}
              className="rounded-3xl border border-titan-border/60 bg-titan-bg-alt/80 p-6 backdrop-blur-sm sm:p-7"
            >
              <h3 className="text-base font-semibold text-titan-text-secondary">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-titan-text-primary/80">{card.body}</p>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection>
          <Link
            href="/system-architecture"
            className="inline-flex items-center justify-center rounded-full border border-titan-purple/60 bg-titan-purple/15 px-6 py-3 text-sm font-semibold text-titan-text-secondary transition hover:bg-titan-purple/25"
          >
            See the control and data architecture
          </Link>
        </AnimatedSection>
      </section>

      {/* Data & openness */}
      <AnimatedSection className="rounded-3xl border border-titan-border/50 bg-titan-bg-alt/60 p-7 backdrop-blur-sm sm:p-8">
        <div className="mx-auto max-w-3xl space-y-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-titan-text-muted sm:text-xs sm:tracking-[0.25em]">
            Data
          </p>
          <h2 className="text-2xl font-semibold text-titan-text-secondary">
            Open by Default, and Honest About Grade
          </h2>
          <p className="text-sm leading-7 text-titan-text-primary/90">
            Software, hardware designs, educational material, and scientific datasets are open by default. The plan is a public archive of observational data
            with documented formats and an API, so schools, researchers, and independent
            citizen-science projects can pull from the instruments directly.
          </p>
          <p className="text-sm leading-7 text-titan-text-primary/90">
            As an education-focused non-profit, Titan will initially target {" "}
            <strong className="font-semibold text-titan-text-secondary">
              public-engagement grade
            </strong> data.
            That is, good enough to learn from and to support
            genuine citizen-science programs, but not yet carrying the calibration, provenance, and
            metadata standards a scientifically rigorous result requires. However, we will constantly work toward rigorous calibration and
            full provenance as a continuing objective with its own acceptance tests.
          </p>
          <ul className="space-y-3 text-sm leading-7 text-titan-text-primary/85">
            {dataPoints.map((line) => (
              <li key={line} className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-titan-aqua" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>

      {/* Roadmap */}
      <section className="space-y-8">
        <div className="max-w-3xl space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-titan-text-muted sm:text-xs sm:tracking-[0.25em]">
            Roadmap
          </p>
          <h2 className="text-2xl font-semibold text-titan-text-secondary">Where We&apos;re Going</h2>
          <p className="text-sm leading-7 text-titan-text-primary/90">
            We are focused first on getting one telescope operating at the permanent site, then
            growing access, instruments, and educational programs from there. Timing will depend on
            funding, site work, and what we learn from early users.
          </p>
        </div>
        <ol className="grid gap-4 md:grid-cols-2">
          {roadmap.map((item) => {
            const style = roadmapStatusStyles[item.status];
            return (
              <AnimatedSection
                key={item.title}
                className={cn("rounded-3xl border p-6 backdrop-blur-sm sm:p-7", style.card)}
              >
                <li className="list-none space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-base font-semibold text-titan-text-secondary">
                      {item.title}
                    </h3>
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em]",
                        style.text,
                      )}
                    >
                      <span className={cn("h-1.5 w-1.5 rounded-full", style.dot)} />
                      {style.label}
                    </span>
                  </div>
                  <p className="text-sm leading-7 text-titan-text-primary/85">{item.body}</p>
                </li>
              </AnimatedSection>
            );
          })}
        </ol>
      </section>

      {/* CTA */}
      <AnimatedSection className="rounded-3xl border border-titan-border/60 bg-titan-bg-alt/80 p-8 backdrop-blur-sm">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-2xl font-semibold text-titan-text-secondary">
            Build an instrument with us
          </h2>
          <p className="text-sm leading-7 text-titan-text-primary/85">
            Titan is meant to be a testbed as well as an observatory. Mounts, motor control, feeds and
            receiver chains, calibration systems, telemetry, automation, data pipelines, interfaces,
            and analysis tools are all real work a university group or a student volunteer can own end
            to end.
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href="https://forms.gle/MwwsctzD1G5woQAo6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-titan-purple/70 bg-titan-purple px-6 py-3 text-sm font-semibold text-titan-text-secondary transition hover:bg-[#565b7a]"
          >
            Apply to Volunteer
          </a>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-titan-border/70 px-6 py-3 text-sm font-semibold text-titan-text-secondary transition hover:border-titan-blue/50 hover:bg-titan-blue/5"
          >
            Discuss a partnership
          </Link>
          <Link
            href="/donate"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-titan-orange px-7 py-3 text-sm font-bold text-titan-bg transition hover:brightness-110"
          >
            Support the Observatory
          </Link>
        </div>
      </AnimatedSection>
    </main>
  );
}

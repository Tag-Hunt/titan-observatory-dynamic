import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import GivebutterWidget from "@/components/GivebutterWidget";
import FaqList from "./FaqList";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Titan Observatory: what already works, what we observe, how the site and instruments are designed, data policy, and how to get involved.",
};

const linkClass = "text-titan-yellow underline-offset-4 hover:underline";

const aboutFaqs = [
  {
    question: "What is Titan Observatory?",
    answer: (
      <>
        Titan Astronomical Observatory, Inc. is a Florida 501(c)(3) nonprofit, founded in 2025 and
        based in Polk County. We are building a remotely accessible radio observatory paired with an
        online learning platform, so that anyone can learn a concept, run a real observation that
        applies it, inspect the data, and understand what the measurement does and does not show. The
        point is not telescope rental. It is showing people how astronomical claims are actually
        derived.
      </>
    ),
  },
  {
    question: "What already works, and what is still a plan?",
    answer: (
      <>
        Working today: a 2.3-meter hydrogen-line telescope that has produced live detections in
        demonstrations, and a functioning platform at{" "}
        <a
          className={linkClass}
          href="https://app.titanobservatory.org"
          target="_blank"
          rel="noreferrer"
        >
          app.titanobservatory.org
        </a>{" "}
        with accounts, learning modules, guided observing, an advanced observation planner, a
        campaign scheduler, and simulated observations. Still ahead: the permanent site build, public
        booking of a real instrument, the public data archive and API, and the larger dishes. Every
        capability on the{" "}
        <Link className={linkClass} href="/science">
          Science &amp; Roadmap
        </Link>{" "}
        page is individually labelled so you can tell which is which.
      </>
    ),
  },
  {
    question: "How is the project funded?",
    answer:
      "Entirely through public donations and grants. There are no institutional backers or corporate sponsors at this time. We list organizations as partners only once there is a current contact and a written commitment, so you will not find a logo wall of people who once expressed interest.",
  },
  {
    question: "What's the timeline?",
    answer: (
      <>
        We do not have firm dates yet. Timing depends on funding, site work, and what we learn from
        early users. The{" "}
        <Link className={linkClass} href="/science">
          Science &amp; Roadmap
        </Link>{" "}
        page shows what we are working on now and what comes next.
      </>
    ),
  },
  {
    question: "Is my donation tax-deductible?",
    answer: (
      <>
        Yes, to the extent allowed by law, and you will receive a receipt once your contribution is
        processed. Our organizational profile is public on{" "}
        <a
          className={linkClass}
          href="https://app.candid.org/profile/16551508/titan-astronomical-observatory-inc-39-4885264/?pkId=86b218a1-77e9-4f25-9a89-729b4d9adabc"
          target="_blank"
          rel="noreferrer"
        >
          Candid
        </a>
        . We also accept donor-advised fund grants, appreciated securities, cryptocurrency, and
        in-kind equipment &mdash; see the{" "}
        <Link className={linkClass} href="/donate">
          donate page
        </Link>{" "}
        for details.
      </>
    ),
  },
];

const scienceFaqs = [
  {
    question: "What will the telescopes actually be able to observe?",
    answer: (
      <>
        Neutral hydrogen at the 21-centimeter line (1420.4 MHz) is the first production capability,
        which supports mapping the distribution and rotation of hydrogen gas across the Milky Way.
        From there the program expands as receivers, backends, aperture, and calibration mature:
        solar radio monitoring, continuum observations of bright sources, satellite and spectrum
        identification, then pulsar work, molecular lines, and interferometry. The{" "}
        <Link className={linkClass} href="/science">
          Science &amp; Roadmap
        </Link>{" "}
        page lists each one with its current status rather than presenting them all as available.
      </>
    ),
  },
  {
    question: "Why start with the hydrogen line?",
    answer: (
      <>
        Because it is the rare case where a genuinely important scientific result is reachable with
        modest equipment. Neutral hydrogen is abundant enough that its 1420 MHz emission is
        detectable with a small dish, its rest frequency is known precisely, so any measured shift is
        a direct Doppler readout of velocity, and the resulting rotation curve is a real piece of
        evidence for dark matter rather than a classroom simulation. It is also protected spectrum,
        which helps. Our{" "}
        <Link className={linkClass} href="/hydrogen-line">
          hydrogen line article
        </Link>{" "}
        covers the physics and the history of its discovery in detail.
      </>
    ),
  },
  {
    question: "Where will the observatory be located, and how was the site chosen?",
    answer:
      "A seven-acre area of family-owned agricultural land in rural, unincorporated Polk County, Florida, held under a right-of-entry agreement while a longer-term lease with a purchase option is negotiated. It was selected for low radio frequency interference, an open horizon, agricultural zoning, and room to add instruments over time. An RFI baseline survey, along with topographic, geotechnical, drainage, utility, lighting, and permitting work, is part of the site characterization ahead of construction.",
  },
  {
    question: "How do you deal with radio frequency interference?",
    answer:
      "It is a design constraint from the start, not a later fix. Each telescope digitizes its own signal locally with a software-defined radio, so only digital data and control traffic travel back to the shelter rather than long analog runs that both lose signal and pick up noise. The backbone is fiber, which carries no current and so neither radiates into the front ends nor gives lightning a conductive path across the site. Telescope nodes run on their own solar and battery supply, keeping mains-conducted noise away from the instruments. Beyond that: physical separation from the equipment shelter, shielding and filtering, an RFI baseline survey of the site, and continuous RFI monitoring with flags recorded alongside the data.",
  },
  {
    question: "Won't moving a 10-meter dish be incredibly expensive?",
    answer:
      "It would be if it had to move in one piece, but we confirmed with a rigging and transport company that the design makes disassembly straightforward. After removing four main bolts, the dish lifts off its pedestal with a modest crane. It can then be broken down into manageable panels on the ground and loaded onto standard flatbed trailers. We have a quoted crane and crew cost of $6,000 for that step. The seller has also indicated the telescope can remain in place after purchase, so relocation does not have to happen the moment the sale closes.",
  },
  {
    question: "Is the data scientifically usable, or is this an educational toy?",
    answer: (
      <>
        Real measurements from real instruments &mdash; but we would rather tell you the limitation
        than let you find it. Titan&apos;s data starts as{" "}
        <strong className="font-semibold text-titan-text-secondary">
          public-engagement grade
        </strong>
        : good enough to learn from and to support genuine citizen-science programs, but not yet
        carrying the calibration, provenance, and metadata standards a refereed result requires.
        Moving toward rigorous calibration, documented provenance, and quality control is an explicit
        and continuing objective with its own acceptance tests. We will say plainly when a given
        instrument and pipeline reach that standard, and we will not claim it before then.
      </>
    ),
  },
  {
    question: "Will observation data be publicly available?",
    answer:
      "That is the intent. The plan is a public archive of observational datasets with documented standard formats and a published API, so schools, researchers, and independent citizen-science projects can retrieve data automatically rather than requesting files. Raw instrument and SDR data, calibrated products, and processed visualizations will be provided where technically practical, with instrument configuration, pointing, timestamps, calibration state, weather, and RFI flags recorded as metadata. Note that deleting your account removes your personal information but does not remove observations already incorporated into the scientific archive.",
  },
  {
    question: "Will I be able to use a telescope myself?",
    answer: (
      <>
        Yes, that is the whole point. Once an instrument is commissioned for public service you will
        be able to schedule time, point it at a target, collect data, and work through guided
        analysis. Access is governed by available observing credits and by safety limits enforced in
        software &mdash; not by credentials, institutional affiliation, or an approved proposal.
        Finishing the introductory modules earns your first credit, but coursework is never a
        prerequisite: the advanced planner is open to anyone who wants it. You can create an account
        and try the platform, including simulated observations, at{" "}
        <a
          className={linkClass}
          href="https://app.titanobservatory.org"
          target="_blank"
          rel="noreferrer"
        >
          app.titanobservatory.org
        </a>{" "}
        today.
      </>
    ),
  },
];

const involvementFaqs = [
  {
    question: "Can I volunteer?",
    answer: (
      <>
        Absolutely. We need help across RF engineering, signal processing, software development, web
        platform design, mechanical fabrication, education curriculum writing, editing, and general
        administration. You don&apos;t need to be a radio astronomer; many of the most valuable
        contributions come from people with adjacent skills. Apply through our{" "}
        <a
          className={linkClass}
          href="https://forms.gle/MwwsctzD1G5woQAo6"
          target="_blank"
          rel="noreferrer"
        >
          volunteer form
        </a>{" "}
        and we&apos;ll match you with open work.
      </>
    ),
  },
  {
    question: "I teach at a university. Can students build something real here?",
    answer: (
      <>
        Yes, and it is a deliberate part of the model rather than a courtesy. Titan is meant to work
        as an instrumentation and software testbed: mounts, motor control, feeds, receiver chains,
        calibration systems, telemetry, automation, data pipelines, user interfaces, and analysis
        tools are all genuine subsystems a capstone team can own. We maintain published interface
        specifications, safety requirements, review gates, and acceptance testing precisely so that
        an external project can be accepted into operational service instead of ending as a
        demonstration. A local off-site workshop for fabrication and integration is part of the
        longer-term plan.{" "}
        <Link className={linkClass} href="/contact">
          Get in touch
        </Link>{" "}
        to discuss a project.
      </>
    ),
  },
  {
    question: "I teach K-12. Is there anything for classrooms?",
    answer:
      "It is planned, and honestly not ready yet. The intent is teacher lesson plans, classroom accounts with student management, standards alignment, downloadable activities, and preconfigured group observations, funded partly through a donated student-hours pool so that cost is not the barrier. Schools anywhere can participate since access is online; Florida relationships are simply our earliest practical partnerships, not a geographic limit. If you would like to help shape this, we would rather hear from you early than hand you a finished thing you cannot use.",
  },
  {
    question: "How can I stay updated?",
    answer:
      "Three ways, roughly in order of frequency: join the Discord for day-to-day discussion and announcements, follow the community forum for structured project updates and technical posts, or use the newsletter widget below if you only want to hear about major milestones and fundraising campaigns.",
  },
];

const sections = [
  { label: "About the Project", accent: "bg-titan-orange", faqs: aboutFaqs },
  { label: "Science & Instruments", accent: "bg-titan-yellow", faqs: scienceFaqs },
  { label: "Getting Involved", accent: "bg-titan-aqua", faqs: involvementFaqs },
];

export default function FaqPage() {
  return (
    <main className="relative z-10">
      <div className="mx-auto w-full max-w-3xl space-y-20">
        {/* Header */}
        <header className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-titan-orange sm:text-xs sm:tracking-[0.25em]">
            Questions &amp; Answers
          </p>
          <h1 className="text-4xl font-bold text-titan-text-secondary sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="text-sm leading-7 text-titan-text-primary/90">
            If something here reads as vague, it is usually because we do not know the answer yet
            and would rather say so. Anything we have not settled is marked as such.
          </p>
        </header>

        {/* FAQ Sections */}
        {sections.map((section, index) => (
          <AnimatedSection
            key={section.label}
            className={index > 0 ? "border-t border-titan-border/40 pt-14" : ""}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className={`inline-block h-2.5 w-2.5 rounded-full ${section.accent}`} />
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-titan-text-secondary sm:text-xs sm:tracking-[0.25em]">
                {section.label}
              </h2>
            </div>
            <FaqList items={section.faqs} />
          </AnimatedSection>
        ))}
        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <AnimatedSection className="mx-auto w-full max-w-[420px] overflow-hidden lg:mx-0">
            <GivebutterWidget
              id="pzez1n"
              placeholderClassName="min-h-[34rem]"
              widgetClassName="block w-full"
            />
          </AnimatedSection>

          <AnimatedSection className="rounded-3xl border border-titan-border/60 bg-titan-bg-alt/80 p-8 text-center backdrop-blur-sm lg:text-left">
            <h3 className="text-lg font-semibold text-titan-text-secondary">
              Still have questions?
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-titan-text-primary/80 lg:mx-0">
              Reach out on the community forum or drop us an email. We&apos;re happy to help.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="https://community.titanobservatory.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-titan-blue/60 bg-titan-blue/20 px-6 py-3 text-sm font-semibold text-titan-text-secondary transition hover:bg-titan-blue/30"
              >
                Visit the Forum
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-titan-border/70 px-6 py-3 text-sm font-semibold text-titan-text-secondary transition hover:border-titan-blue/50 hover:bg-titan-blue/5"
              >
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </section>
      </div>
    </main>
  );
}

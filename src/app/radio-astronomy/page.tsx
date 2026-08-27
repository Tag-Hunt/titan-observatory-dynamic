import type { Metadata } from "next";
import Link from "next/link";

import AnimatedSection from "@/components/AnimatedSection";
import { absoluteUrl, siteName } from "@/lib/site";
import { cn } from "@/lib/utils";

const PAGE_PATH = "/radio-astronomy";

export const metadata: Metadata = {
  title: "What Is Radio Astronomy?",
  description:
    "A plain-language introduction to radio astronomy: the radio window in the electromagnetic spectrum, how a radio telescope actually works, and the history from Karl Jansky's 1932 hiss to pulsars, the cosmic microwave background, and the first image of a black hole.",
  keywords: [
    "radio astronomy",
    "what is radio astronomy",
    "radio telescope",
    "radio window",
    "Karl Jansky",
    "Grote Reber",
    "interferometry",
    "pulsars",
    "cosmic microwave background",
    "history of radio astronomy",
  ],
  alternates: { canonical: absoluteUrl(PAGE_PATH) },
  openGraph: {
    type: "article",
    url: absoluteUrl(PAGE_PATH),
    siteName,
    title: `What Is Radio Astronomy? | ${siteName}`,
    description:
      "How radio telescopes see the invisible universe, and the century of discoveries that built the field.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is Radio Astronomy?",
  description:
    "An introduction to the fundamentals and history of radio astronomy: the radio window, how radio telescopes work, and the discoveries the field produced.",
  about: [
    { "@type": "Thing", name: "Radio astronomy" },
    { "@type": "Thing", name: "Radio telescope" },
  ],
  mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(PAGE_PATH) },
  publisher: {
    "@type": "Organization",
    name: siteName,
    url: absoluteUrl("/"),
  },
};

const fundamentals = [
  {
    step: "01",
    color: "text-titan-aqua",
    borderColor: "border-titan-aqua/30",
    bgColor: "bg-titan-aqua/10",
    title: "It's All the Same Light",
    content: (
      <>
        <p>
          Visible light, X-rays, and radio waves are the same phenomenon at different
          wavelengths. Our eyes respond to a narrow band around 400&ndash;700&thinsp;nm,
          which is a sliver of what the universe actually emits. Radio waves sit at the
          long-wavelength, low-energy end of the spectrum: centimeters to meters instead
          of billionths of a meter.
        </p>
        <p className="mt-3">
          That difference in scale is the whole point. Cold gas, relativistic electrons
          spiralling in magnetic fields, and objects buried behind opaque dust all
          announce themselves in radio while staying invisible to an optical telescope.
        </p>
      </>
    ),
  },
  {
    step: "02",
    color: "text-titan-purple",
    borderColor: "border-titan-purple/30",
    bgColor: "bg-titan-purple/10",
    title: "The Radio Window",
    content: (
      <p>
        Earth&apos;s atmosphere is opaque across most of the spectrum. Only two broad bands
        reach the ground: the{" "}
        <strong className="font-semibold text-titan-purple">optical window</strong> and the
        much wider{" "}
        <strong className="font-semibold text-titan-purple">radio window</strong>, which
        runs from roughly 10&thinsp;MHz &mdash; below that, the ionosphere reflects signals
        back into space &mdash; up to a few hundred GHz, above which water vapour and
        oxygen absorb them. Everything ground-based radio astronomy has ever done happened
        inside that window. Unlike optical work, it does not care whether the Sun is up or
        whether the sky is cloudy.
      </p>
    ),
  },
  {
    step: "03",
    color: "text-titan-orange",
    borderColor: "border-titan-orange/30",
    bgColor: "bg-titan-orange/10",
    title: "What a Radio Telescope Actually Does",
    content: (
      <>
        <p>
          A radio telescope is not a camera. The dish is a mirror that concentrates incoming
          radio waves onto a{" "}
          <strong className="font-semibold text-titan-orange">feed antenna</strong> at its
          focus, where the wave becomes a tiny electrical current, often measured in
          femtowatts. A cooled{" "}
          <strong className="font-semibold text-titan-orange">low-noise amplifier</strong>{" "}
          boosts it before the receiver&apos;s own thermal noise can bury it, the signal is
          mixed down to a lower frequency, and a digitizer turns it into numbers.
        </p>
        <p className="mt-3">
          What comes out is power versus time, or power versus frequency &mdash; a{" "}
          <strong className="font-semibold text-titan-orange">spectrum</strong>. An image is
          built up by scanning that single measurement across the sky, point by point, or by
          combining many antennas at once.
        </p>
      </>
    ),
  },
  {
    step: "04",
    color: "text-titan-yellow",
    borderColor: "border-titan-yellow/30",
    bgColor: "bg-titan-yellow/10",
    title: "Why Radio Dishes Are Enormous",
    content: (
      <>
        <p>
          Angular resolution scales with wavelength divided by aperture. Radio wavelengths
          are around a million times longer than visible light, so matching the sharpness of
          a modest backyard optical telescope would take a dish the size of a city. A
          10-meter dish observing at 21&thinsp;cm resolves roughly 1.5&deg;, about three
          times the width of the full Moon.
        </p>
        <p className="mt-3">
          The fix is{" "}
          <strong className="font-semibold text-titan-yellow">interferometry</strong>:
          combine widely separated antennas and the resolution is set by the distance
          between them rather than by any single dish. That is how the Event Horizon
          Telescope turned a planet-wide network of stations into an instrument sharp enough
          to image a black hole&apos;s shadow.
        </p>
      </>
    ),
  },
  {
    step: "05",
    color: "text-titan-green",
    borderColor: "border-titan-green/30",
    bgColor: "bg-titan-green/10",
    title: "Spectral Lines Carry the Physics",
    content: (
      <>
        <p>
          Atoms and molecules emit at sharply defined frequencies. Neutral hydrogen, the most
          abundant substance in the universe, emits at{" "}
          <strong className="font-semibold text-titan-green">1420.4&thinsp;MHz</strong> &mdash;
          the 21&thinsp;cm line. Because motion Doppler-shifts that frequency, a single
          spectrum tells you not only that hydrogen is there, but how fast it is moving
          toward or away from you.
        </p>
        <p className="mt-3">
          That is what makes a radio telescope a measuring instrument rather than a
          picture-taker, and it is the observation Titan Observatory will start with.{" "}
          <Link
            href="/hydrogen-line"
            className="font-semibold text-titan-green underline decoration-titan-green/40 underline-offset-4 transition hover:decoration-titan-green"
          >
            Read the full explanation of the hydrogen line
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    step: "06",
    color: "text-titan-red",
    borderColor: "border-titan-red/30",
    bgColor: "bg-titan-red/10",
    title: "The Hardest Problem Is Noise",
    content: (
      <p>
        Astronomical radio signals are staggeringly faint. Everything competes with them:
        the receiver&apos;s own electronics, radiation from the warm ground, the atmosphere,
        and above all{" "}
        <strong className="font-semibold text-titan-red">radio frequency interference</strong>{" "}
        from phones, Wi-Fi, car ignitions, and satellites. Much of the craft of radio
        astronomy is careful calibration, shielding, and site selection, so that what
        survives in the data is the sky and not the neighbourhood.
      </p>
    ),
  },
];

const timeline = [
  {
    year: "1864",
    title: "Maxwell predicts the waves",
    body: "James Clerk Maxwell's equations imply that light is an electromagnetic wave and that waves of any wavelength should exist. Heinrich Hertz generates and detects radio waves in the laboratory in 1887.",
  },
  {
    year: "1890s",
    title: "The first attempts fail",
    body: "Thomas Edison, Oliver Lodge, and the German pair Wilsing and Scheiner all try to detect radio emission from the Sun. Their equipment is far too insensitive, and the ionosphere blocks the low frequencies they were listening at. Nobody succeeds, and the idea is largely dropped for thirty years.",
  },
  {
    year: "1932",
    title: "Jansky hears the galaxy",
    body: "Karl Jansky, hunting for the sources of static that disrupted Bell Labs' transatlantic radiotelephone service, finds a faint hiss that repeats every 23 hours and 56 minutes — the sidereal day, not the solar one. The source is not the Sun but the center of the Milky Way. Radio astronomy is born, and then largely ignored.",
    highlight: true,
  },
  {
    year: "1937",
    title: "Reber builds a dish in his backyard",
    body: "Grote Reber, a radio engineer in Wheaton, Illinois, builds a 9.5-meter parabolic dish beside his house and spends much of the following decade as effectively the world's only radio astronomer, producing the first radio maps of the sky.",
  },
  {
    year: "1942",
    title: "The Sun, found by accident",
    body: "James Hey, investigating what was assumed to be German jamming of British radar, traces the interference to an intense radio outburst from a sunspot group. Wartime radar work leaves behind both the receivers and the engineers that the postwar field is built on.",
  },
  {
    year: "1951",
    title: "The 21 cm hydrogen line",
    body: "Six years after Hendrik van de Hulst predicts it, Harold \"Doc\" Ewen and Edward Purcell detect neutral hydrogen at 1420.4 MHz using a horn antenna sticking out of a fourth-floor window at Harvard, built on roughly a $500 budget. Mapping that line reveals the Milky Way's spiral structure and, later, the flat rotation curves that are among the first evidence for dark matter.",
    highlight: true,
  },
  {
    year: "1946–1960s",
    title: "Interferometry arrives",
    body: "Martin Ryle and colleagues at Cambridge develop aperture synthesis, combining separated antennas into one virtual telescope far larger than any dish. It turns radio astronomy from a blurry survey technique into high-resolution imaging, and earns Ryle a share of the 1974 Nobel Prize in Physics.",
  },
  {
    year: "1963",
    title: "Quasars",
    body: "Maarten Schmidt measures the redshift of the radio source 3C 273 and finds it to be extraordinarily distant, and therefore extraordinarily luminous. Quasars turn out to be supermassive black holes accreting matter in the hearts of galaxies.",
  },
  {
    year: "1965",
    title: "The cosmic microwave background",
    body: "Arno Penzias and Robert Wilson cannot get rid of a persistent excess noise in their Holmdel horn antenna. It is the afterglow of the Big Bang, and it wins them the 1978 Nobel Prize — the second time an unexplained hiss at Bell Labs rewrote cosmology.",
    highlight: true,
  },
  {
    year: "1967",
    title: "Pulsars",
    body: "Jocelyn Bell Burnell spots a precisely repeating 1.34-second pulse in the chart-recorder traces of a Cambridge array. It is a rotating neutron star. Hulse and Taylor's 1974 binary pulsar later provides the first evidence for gravitational waves, decades before they were directly detected.",
  },
  {
    year: "1968–present",
    title: "Chemistry between the stars",
    body: "Ammonia, water, formaldehyde, and eventually hundreds of other molecules are identified in interstellar clouds by their rotational transitions at radio and millimeter wavelengths. Radio astronomy becomes the primary tool of astrochemistry and of star-formation research.",
  },
  {
    year: "2007–2019",
    title: "Fast radio bursts and a black hole's shadow",
    body: "Millisecond-long fast radio bursts from other galaxies are recognised in archival data in 2007 and remain only partly explained. In 2019 the Event Horizon Telescope, a global array observing at 1.3 mm, publishes the first image of a black hole's shadow, in the galaxy M87.",
  },
];

const revealed = [
  {
    label: "Cold hydrogen",
    body: "The neutral gas that fills the galaxy is invisible optically but glows at 21 cm, tracing spiral arms and the rotation curves that point to dark matter.",
  },
  {
    label: "Pulsars",
    body: "Neutron stars sweeping beams past Earth with clock-like regularity, used as laboratories for gravity and as a galaxy-scale gravitational wave detector.",
  },
  {
    label: "The Big Bang's afterglow",
    body: "The cosmic microwave background, a 2.7 K radio glow filling the whole sky and encoding the structure of the infant universe.",
  },
  {
    label: "Galactic nuclei and jets",
    body: "Supermassive black holes launching synchrotron-bright jets across hundreds of thousands of light-years.",
  },
  {
    label: "Star-forming clouds",
    body: "Molecular gas and complex organic chemistry inside dusty regions that visible light cannot penetrate.",
  },
  {
    label: "The solar system",
    body: "Solar flares, Jupiter's decametric bursts, and planetary radar — some of it detectable with amateur-scale equipment.",
  },
];

export default function RadioAstronomyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <main className="relative z-10 space-y-20">
        <header className="space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-titan-orange sm:text-xs sm:tracking-[0.25em]">
            The Fundamentals
          </p>
          <h1 className="text-3xl font-bold text-titan-text-secondary sm:text-4xl">
            What Is Radio Astronomy?
          </h1>
          <p className="max-w-3xl text-base leading-8 text-titan-text-primary/90">
            Radio astronomy is the study of the universe using the longest wavelengths of
            light. Instead of focusing light onto an eye or a sensor, a radio telescope
            collects radio waves with an antenna and measures their power &mdash; usually
            frequency by frequency, so the result is a spectrum rather than a picture.
          </p>
          <p className="max-w-3xl text-base leading-8 text-titan-text-primary/90">
            The field is barely ninety years old. It was started by an engineer trying to get
            rid of static, and in that time it has produced pulsars, quasars, the cosmic
            microwave background, the evidence for dark matter in galaxy rotation, and the
            first image of a black hole. Here is how it works, and how it got here.
          </p>
        </header>

        <section className="space-y-8">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-titan-text-muted sm:text-xs sm:tracking-[0.25em]">
              How it works
            </p>
            <h2 className="text-2xl font-semibold text-titan-text-secondary">
              Six Ideas That Explain the Field
            </h2>
          </div>
          <div className="mx-auto max-w-3xl space-y-0 text-sm leading-relaxed text-titan-text-primary/90">
            {fundamentals.map((item) => (
              <article
                key={item.title}
                className="flex gap-5 border-b border-titan-border/40 py-7 first:pt-0 last:border-b-0 last:pb-0"
              >
                <span
                  className={cn(
                    "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border font-mono text-[10px] font-bold",
                    item.color,
                    item.borderColor,
                    item.bgColor,
                  )}
                >
                  {item.step}
                </span>
                <div className="space-y-2">
                  <h3 className={cn("text-base font-semibold", item.color)}>{item.title}</h3>
                  <div>{item.content}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-titan-text-muted sm:text-xs sm:tracking-[0.25em]">
              A short history
            </p>
            <h2 className="text-2xl font-semibold text-titan-text-secondary">
              From an Unwanted Hiss to a Black Hole
            </h2>
            <p className="max-w-3xl pt-1 text-sm leading-relaxed text-titan-text-primary/80">
              A striking amount of this history is accidental. Three of the field&apos;s
              biggest discoveries began as noise that somebody was trying to eliminate.
            </p>
          </div>

          <ol className="mx-auto max-w-3xl border-l border-titan-border/50 pl-6 sm:pl-8">
            {timeline.map((entry) => (
              <li key={entry.year} className="relative py-6 first:pt-0 last:pb-0">
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -left-[1.6rem] top-7 h-2 w-2 rounded-full ring-4 ring-titan-bg sm:-left-[2.1rem]",
                    entry.highlight ? "bg-titan-orange" : "bg-titan-border",
                  )}
                />
                <p
                  className={cn(
                    "font-mono text-xs font-bold uppercase tracking-[0.18em]",
                    entry.highlight ? "text-titan-orange" : "text-titan-text-muted",
                  )}
                >
                  {entry.year}
                </p>
                <h3 className="mt-1.5 text-base font-semibold text-titan-text-secondary">
                  {entry.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-titan-text-primary/90">
                  {entry.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-titan-text-muted sm:text-xs sm:tracking-[0.25em]">
              What we see
            </p>
            <h2 className="text-2xl font-semibold text-titan-text-secondary">
              The Universe Only Radio Can Show You
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {revealed.map((item, index) => (
              <AnimatedSection
                key={item.label}
                delay={index * 0.08}
                className="rounded-3xl border border-titan-border/60 bg-titan-bg-alt/90 p-5 text-sm leading-relaxed text-titan-text-primary/90 shadow-[0_14px_34px_-24px_rgba(8,12,24,0.8)] backdrop-blur-sm transition hover:border-titan-purple/40 hover:bg-titan-bg-alt/95"
              >
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-titan-text-muted sm:text-xs">
                  {item.label}
                </h3>
                <p className="mt-2">{item.body}</p>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl space-y-5">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-titan-text-muted sm:text-xs sm:tracking-[0.25em]">
              Why it matters to us
            </p>
            <h2 className="text-2xl font-semibold text-titan-text-secondary">
              A Science You Can Actually Do
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-titan-text-primary/90">
            Radio astronomy has an unusual history of serious results coming from modest
            equipment. Reber worked alone with a homemade dish in his yard. Ewen and Purcell
            detected the hydrogen line with a horn antenna built on a shoestring budget. The
            physics does not demand a mountaintop or a launch vehicle &mdash; it demands a
            good antenna, a quiet receiver, and patience.
          </p>
          <p className="text-sm leading-relaxed text-titan-text-primary/90">
            What has been missing is access. Professional instruments are oversubscribed and
            effectively closed to anyone outside a research institution. Titan Observatory
            exists to change that: a 10-meter NASA-built dish brought back online with modern
            control and data systems, and opened up over the internet so students, hobbyists,
            and curious people can point a real radio telescope and keep the data.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
            <Link
              href="/hydrogen-line"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-titan-border/70 px-6 py-3 text-sm font-semibold text-titan-text-secondary transition hover:border-titan-orange/50 hover:bg-titan-orange/5"
            >
              The Hydrogen Line
            </Link>
            <Link
              href="/telescope-overview"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-titan-border/70 px-6 py-3 text-sm font-semibold text-titan-text-secondary transition hover:border-titan-orange/50 hover:bg-titan-orange/5"
            >
              Our Telescope
            </Link>
            <Link
              href="/system-architecture"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-titan-border/70 px-6 py-3 text-sm font-semibold text-titan-text-secondary transition hover:border-titan-orange/50 hover:bg-titan-orange/5"
            >
              System Architecture
            </Link>
          </div>
        </section>

        <AnimatedSection className="rounded-2xl border border-titan-border/50 bg-titan-bg-alt/60 p-8 text-center backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-titan-text-secondary">
            Help Put a Radio Telescope in Everyone&apos;s Hands
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-titan-text-primary/80">
            We&apos;re a 501(c)(3) nonprofit. Every tax-deductible donation goes toward
            getting the dish observing and the platform open to the public.
          </p>
          <Link
            href="/donate"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-titan-orange px-7 py-3 text-sm font-bold text-titan-bg transition hover:brightness-110"
          >
            Support the Observatory
          </Link>
        </AnimatedSection>
      </main>
    </>
  );
}

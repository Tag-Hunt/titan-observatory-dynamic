import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DeferredDonorMessageCarousel from "@/components/DeferredDonorMessageCarousel";
import DemoTelescopeFigure from "@/components/DemoTelescopeFigure";
import DiscordPresenceBadge from "@/components/DiscordPresenceBadge";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import GivebutterWidget from "@/components/GivebutterWidget";
import { siteName } from "@/lib/site";

export const revalidate = 3600;

const APP_URL = "https://app.titanobservatory.org";

export const metadata: Metadata = {
  // Absolute: the home page is the brand, so it should not take the "%s | …" template.
  title: { absolute: `${siteName} — Radio Telescopes Open to Everyone` },
  description:
    "Titan Observatory is a Florida nonprofit building a network of radio telescopes open to everyone. A working hydrogen-line telescope, a live observing platform, and a public path from learning a concept to measuring it yourself.",
};

/** The core user journey, stated plainly for someone with no background. */
const pathway = [
  {
    step: "01",
    title: "Learn",
    body: "Self-directed modules written by experts in the field build one idea at a time: what radio waves are, how a dish collects them, and what a spectrum is actually showing you.",
  },
  {
    step: "02",
    title: "Observe",
    body: "Choose one of our observation presets or create your own advanced observing plan. Our telescopes are available to amatuers and professionals alike.",
  },
  {
    step: "03",
    title: "Analyze",
    body: "Guided data analysis walks you through the steps to turn raw telescope data into a calibrated spectrum, and then into a conclusion about the target.",
  },
  {
    step: "04",
    title: "Share",
    body: "Download a sharable snapshot of your observation, allowing you to show off your own observation of the universe.",
  },
] as const;

export default function Home() {
  return (
    <main className="space-y-20 sm:space-y-20">
      <section className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-10">
        <div className="space-y-6 sm:space-y-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-titan-orange sm:text-xs sm:tracking-[0.25em]">
            A Florida 501(c)(3) Nonprofit
          </p>
          <h1 className="max-w-[13ch] text-[2.85rem] font-bold leading-[0.98] text-titan-text-secondary sm:max-w-none sm:text-5xl">
            A network of radio telescopes,
            <br className="hidden sm:block" />
            <span className="text-titan-yellow"> open to everyone.</span>
          </h1>
          <p className="max-w-2xl text-[1.05rem] leading-8 text-titan-text-primary/90 sm:text-lg">
            Modern astronomy has moved far beyond simply looking up at the sky and describing what
            we see. Yet its discoveries often reach us as extraordinary conclusions, detached from
            the measurements behind them. Titan Observatory exists to close that gap by giving anyone
            the chance to learn a concept, point a real telescope, and explore the universe through
            the eyes of a modern astronomer.
          </p>
          <div className="flex flex-col gap-4 pt-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href="/donate"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-titan-orange px-7 py-3.5 text-sm font-bold text-titan-bg transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-titan-orange sm:w-auto"
            >
              Support the Observatory
            </Link>
            <a
              href={APP_URL}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-titan-green/50 bg-titan-green/10 px-6 py-3.5 text-sm font-semibold text-titan-text-secondary transition hover:bg-titan-green/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-titan-green sm:w-auto"
            >
              Explore the platform
            </a>
            <DiscordPresenceBadge className="w-full sm:w-auto" />
          </div>
        </div>

        <BackgroundGradient
          containerClassName="mx-auto w-full max-w-[28rem] rounded-[2rem]"
          className="relative h-[70svh] min-h-[28rem] w-full overflow-hidden rounded-[2rem] border border-titan-border/60 bg-titan-bg-alt/80 p-0 shadow-[0_28px_60px_-34px_rgba(12,16,40,0.95)] sm:h-auto sm:min-h-0 sm:aspect-[4/5] lg:aspect-[3/4]"
        >
          <Image
            src="/images/titan.jpg"
            alt="The 10-meter Cassegrain dish Titan Observatory is working to acquire."
            fill
            className="object-cover object-[54%_42%] sm:object-center"
            sizes="(min-width: 1024px) 420px, (min-width: 640px) 60vw, 100vw"
            fetchPriority="high"
            priority
          />
        </BackgroundGradient>
      </section>

      <section
        id="why-it-matters"
        className="scroll-mt-24 rounded-3xl border border-titan-border/50 bg-titan-bg-alt/60 p-7 backdrop-blur-sm sm:p-8"
      >
        <div className="mx-auto max-w-3xl space-y-5">
          <h2 className="text-2xl font-semibold text-titan-text-secondary">Why It Matters</h2>
          <p className="text-sm leading-7 text-titan-text-primary/90">
            Almost everything we know about the universe beyond the solar system arrives as
            electromagnetic waves. But <em>how</em>? How can light tell us the composition of a
            planet&apos;s atmosphere from hundreds of light-years away? Or that some smudge in an
            image is a galaxy born near the dawn of the universe, billions of years ago?
          </p>
          <p className="text-sm leading-7 text-titan-text-primary/90">
            Those answers exist, but the science can feel so abstract,
            so expensive, and so credential-dependent that curious people quietly conclude real
            understanding is for somebody else. That distance has a cost: the public ends up asked to
            trust experts without ever being shown a path from observation to conclusion. Being shown
            that path is the difference between accepting a fact and understanding it.
          </p>
          <p className="text-sm leading-7 text-titan-text-primary/90">
            Radio astronomy is an unusually good tool to close that distance. Its instruments are
            less complex and more economical than optical telescopes, its signals are straightforward to interpret, and it employs the same fundamental principles behind the most significant discoveries of the modern era. Titan will initially observe at the 21&thinsp;cm hydrogen line
            (1420&thinsp;MHz), emitted by the neutral hydrogen that fills the Milky Way &mdash;
            the same measurement that allowed us to map our galaxy&apos;s spiral structure from the inside and
            produced the rotation curve that became one of the first clues that dark matter exists.
          </p>
          <p className="text-sm leading-7 text-titan-text-primary/90">
            You can be handed that conclusion. Or you can point a telescope, map the velocity of hydrogen as you sweep along the galactic plane, and work out the rotation yourself. We think
            the second one changes how people relate to science.
          </p>
          <Link
            href="/hydrogen-line"
            className="inline-flex items-center justify-center rounded-full border border-titan-yellow/50 bg-titan-yellow/10 px-6 py-3 text-sm font-semibold text-titan-text-secondary transition hover:bg-titan-yellow/20"
          >
            How the hydrogen line was discovered
          </Link>
        </div>
      </section>

      {/* The pathway: the beginner on-ramp, stated concretely. */}
      <section className="space-y-8">
        <div className="max-w-3xl space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-titan-text-muted sm:text-xs sm:tracking-[0.25em]">
            How it works
          </p>
          <h2 className="text-2xl font-semibold text-titan-text-secondary">
            Learn, Observe, Analyze, Share
          </h2>
          <p className="text-sm leading-7 text-titan-text-primary/90">
            The guiding principle of the observatory is to allow anyone curious to go from a concept to a measurement, and from a measurement to a conclusion. The four steps below are the core of that journey, and they are designed to be approachable for someone with no prior experience in radio astronomy.
          </p>
        </div>
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pathway.map((item) => (
            <li
              key={item.step}
              className="rounded-3xl border border-titan-border/60 bg-titan-bg-alt/80 p-6 backdrop-blur-sm"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-titan-orange/30 bg-titan-orange/10 font-mono text-[10px] font-bold text-titan-orange">
                {item.step}
              </span>
              <h3 className="mt-3 text-base font-semibold text-titan-text-secondary">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-titan-text-primary/80">{item.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="-mt-4 -mb-4 sm:-mt-8 sm:-mb-14">
        <DeferredDonorMessageCarousel />
      </div>

      <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
        <div className="min-w-0 flex justify-center lg:justify-start">
          <div className="w-full max-w-[420px] overflow-hidden">
            <GivebutterWidget
              id="LyX3Yj"
              placeholderClassName="min-h-[38rem]"
              widgetClassName="block w-full"
            />
          </div>
        </div>
        <div className="space-y-6 sm:space-y-6">
          <h2 className="text-2xl font-semibold text-titan-text-secondary">
            What Your Support Enables
          </h2>
          <p className="text-sm leading-7 text-titan-text-primary/90">
            Right now, every dollar goes toward the unglamorous work that has to come first:
            professional consultations, the site survey, an interference baseline, permitting
            guidance, and a costed plan for the first permanent telescope pad. We publish detailed
            plans before funds are committed to major acquisitions, not after.
          </p>
          <div className="space-y-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-titan-text-muted sm:text-xs sm:tracking-[0.25em]">
              Looking ahead
            </p>
            <ul className="space-y-5 text-sm leading-7 text-titan-text-primary/90">
              <li className="flex gap-4">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-titan-orange" />
                <span>
                  <strong className="font-semibold text-titan-text-secondary">
                    The 2.3&thinsp;m telescope under open sky.
                  </strong>{" "}
                  A pad, a fenced enclosure, solar power, and connectivity on the permanent site
                  turns a working demonstration instrument into a telescope the public can book.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-titan-orange" />
                <span>
                  <strong className="font-semibold text-titan-text-secondary">
                    A network, not a single dish.
                  </strong>{" "}
                  Donated 2&ndash;5&thinsp;m dishes converted to a common mount and receiver
                  standard, so observing capacity grows by adding instruments instead of rationing
                  hours on one.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-titan-orange" />
                <span>
                  <strong className="font-semibold text-titan-text-secondary">
                    A 10&thinsp;m flagship.
                  </strong>{" "}
                  Titan holds a purchase option on a well-maintained 10&thinsp;m Cassegrain formerly
                  operated in NASA&apos;s network. Its aperture and surface quality reach fainter
                  targets and higher frequencies than the small dishes can.
                </span>
              </li>
            </ul>
            <Link
              href="/science"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-titan-text-secondary underline decoration-titan-border underline-offset-4 transition hover:decoration-titan-yellow"
            >
              See the full roadmap <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <DemoTelescopeFigure />

      <section className="rounded-3xl border border-titan-border/50 bg-titan-bg-alt/60 p-7 backdrop-blur-sm sm:p-8">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div className="space-y-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-titan-text-muted sm:text-xs sm:tracking-[0.25em]">
              Donor thank-you
            </p>
            <h3 className="text-xl font-semibold text-titan-text-secondary">Mission Badge Gift</h3>
            <p className="text-sm leading-7 text-titan-text-primary/90">
              Qualifying donors receive a small thank-you package with a Titan Observatory badge, a
              sticker, and a postcard featuring a randomly selected image from NASA&apos;s archives.
            </p>
            <div className="space-y-1.5 text-sm text-titan-text-primary/90">
              <p>
                <span className="font-semibold text-titan-text-secondary">$25+</span> - sticker and
                postcard
              </p>
              <p>
                <span className="font-semibold text-titan-text-secondary">$50+</span> - embroidered
                badge, sticker, and postcard
              </p>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-[220px] sm:max-w-[240px]">
              <Image
                src="/images/DonorGift.jpg"
                alt="Titan Observatory donor gift items."
                width={480}
                height={480}
                sizes="(min-width: 768px) 240px, 220px"
                className="h-auto w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-8">
        <div className="space-y-6 rounded-3xl border border-titan-border/60 bg-titan-bg-alt/80 p-7 backdrop-blur-sm sm:p-8">
          <h2 className="text-2xl font-semibold text-titan-text-secondary">Get Involved</h2>
          <p className="text-sm leading-7 text-titan-text-primary/90">
            Building a remote radio observatory takes a wide range of skills, and most of them are
            not radio astronomy. We need RF and signal processing, software and web development,
            mechanical fabrication, curriculum writing, editing, and plain administration.
          </p>
          <p className="text-sm leading-7 text-titan-text-primary/90">
            Titan is also a testbed by design. University teams and capstone groups can take on
            mounts, motor control, feeds and receiver chains, calibration, telemetry, or data
            pipelines &mdash; real subsystems that go into operational service, not into a drawer. If
            you are just here to learn, the forum and Discord are open.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="https://forms.gle/MwwsctzD1G5woQAo6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-titan-purple/70 bg-titan-purple px-6 py-3 text-sm font-semibold text-titan-text-secondary transition hover:bg-[#565b7a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-titan-purple sm:w-auto"
            >
              Apply to Volunteer
            </a>
            <a
              href="https://community.titanobservatory.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-titan-blue/60 bg-titan-blue/20 px-6 py-3 text-sm font-semibold text-titan-text-secondary transition hover:bg-titan-blue/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-titan-blue sm:w-auto"
            >
              Visit the Forum
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[420px] overflow-hidden lg:max-w-none">
          <GivebutterWidget
            id="pzez1n"
            placeholderClassName="min-h-[34rem]"
            widgetClassName="block w-full"
          />
        </div>
      </section>
    </main>
  );
}

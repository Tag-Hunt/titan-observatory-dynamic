import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DeferredDonorMessageCarousel from "@/components/DeferredDonorMessageCarousel";
import DiscordPresenceBadge from "@/components/DiscordPresenceBadge";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import GivebutterWidget from "@/components/GivebutterWidget";
import { siteName } from "@/lib/site";

export const revalidate = 3600;

export const metadata: Metadata = {
  // Absolute: the home page is the brand, so it should not take the "%s | …" template.
  title: { absolute: `${siteName} — Radio Telescopes Open to Everyone` },
  description:
    "Titan Observatory is building a network of radio telescopes open to everyone — real instruments and a remote observing platform for hands-on astronomy.",
};

export default function Home() {
  return (
    <main className="space-y-20 sm:space-y-20">
      <section className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-10">
        <div className="space-y-6 sm:space-y-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-titan-orange sm:text-xs sm:tracking-[0.25em]">
            Phase 1 In Progress
          </p>
          <h1 className="max-w-[13ch] text-[2.85rem] font-bold leading-[0.98] text-titan-text-secondary sm:max-w-none sm:text-5xl">
            A network of radio telescopes,
            <br className="hidden sm:block" />
            <span className="text-titan-yellow"> open to everyone.</span>
          </h1>
          <p className="max-w-2xl text-[1.05rem] leading-8 text-titan-text-primary/90 sm:text-lg">
Titan Observatory is a Florida-based nonprofit
            with the mission to make radio astronomy more accessible than ever by building a remote observing platform and educational experiences that let the public, students, and aspiring researchers explore the universe through hands-on observation and data.
          </p>
          <p className="max-w-2xl text-[1.05rem] leading-8 text-titan-text-primary/90 sm:text-lg">
            We believe it&apos;s important to give everyone the opportunity to
            perform and understand their own observations of the universe, so that
            we can all share in the excitement of future discoveries and feel
            connected to the science behind them.
          </p>
          <div className="flex flex-col gap-4 pt-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href="/donate"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-titan-orange px-7 py-3.5 text-sm font-bold text-titan-bg transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-titan-orange sm:w-auto"
            >
              Support the Observatory
            </Link>
            <Link
              href="/radio-astronomy"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-titan-border/70 px-6 py-3.5 text-sm font-semibold text-titan-text-secondary transition hover:border-titan-orange/50 hover:bg-titan-orange/5 sm:w-auto"
            >
              What is radio astronomy?
            </Link>
            <DiscordPresenceBadge className="w-full sm:w-auto" />
          </div>
        </div>

        <BackgroundGradient
          containerClassName="mx-auto w-full max-w-[28rem] rounded-[2rem]"
          className="relative h-[70svh] min-h-[28rem] w-full overflow-hidden rounded-[2rem] border border-titan-border/60 bg-titan-bg-alt/80 p-0 shadow-[0_28px_60px_-34px_rgba(12,16,40,0.95)] sm:h-auto sm:min-h-0 sm:aspect-[4/5] lg:aspect-[3/4]"
        >
          <Image
            src="/images/titan.jpg"
            alt="The 10-meter Titan radio telescope dish."
            fill
            className="object-cover object-[54%_42%] sm:object-center"
            sizes="(min-width: 1024px) 420px, (min-width: 640px) 60vw, 100vw"
            fetchPriority="high"
            priority
          />
        </BackgroundGradient>
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
            Every dollar goes directly toward expert consultations, site evaluation, and planning work. Once we have enough professional input to confirm the viability of the project, more detailed plans will be shared publicly before funds are used to acquire the telescope.
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
                    Broader frequency coverage.
                  </strong>{" "}
                  Pending dish characterization, we hope to add L- and S-band
                  RF chains alongside the 21 cm hydrogen line feed, opening up
                  a wider range of science targets and educational experiments.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-titan-orange" />
                <span>
                  <strong className="font-semibold text-titan-text-secondary">
                    A network of dishes.
                  </strong>{" "}
                  The infrastructure will be designed from the start to be
                  scalable. Our team will work to integrate donated dishes over
                  time, increasing observation capacity and creating
                  opportunities for advanced experiments.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-titan-orange" />
                <span>
                  <strong className="font-semibold text-titan-text-secondary">
                    Integrated science education.
                  </strong>{" "}
                  Once routine observations are underway, we plan to develop
                  curricula that put real telescope time in students&apos; hands,
                  covering the electromagnetic spectrum, cosmic radio sources,
                  and how a radio telescope works from first principles.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="why-it-matters"
        className="scroll-mt-24 rounded-3xl border border-titan-border/50 bg-titan-bg-alt/60 p-7 backdrop-blur-sm sm:p-8"
      >
        <div className="mx-auto max-w-3xl space-y-5">
          <h2 className="text-2xl font-semibold text-titan-text-secondary">
            Why It Matters
          </h2>
          <p className="text-sm leading-7 text-titan-text-primary/90">
            Much of our understanding of the universe beyond the solar system
            comes from the properties of electromagnetic waves received from
            space. But <em>how</em>? How can light tell us the composition of a
            planet&apos;s atmosphere from hundreds of light-years away? Or that
            some smudge in an image is a galaxy born near the dawn of the
            universe, billions of years ago?
          </p>
          <p className="text-sm leading-7 text-titan-text-primary/90">
            Radio astronomy covers the longest-wavelength end of that spectrum.
            Titan Observatory will initially observe at the 21&thinsp;cm hydrogen
            line (1420&thinsp;MHz), detecting the neutral hydrogen that permeates
            the Milky Way, including mapping its rotation curve, one of the
            first clues we had for the existence of dark matter.
          </p>
          <p className="text-sm leading-7 text-titan-text-primary/90">
            By creating a more accessible and engaging way to experience radio
            astronomy, we hope to inspire future astronomers and help curious
            citizen scientists better understand what the electromagnetic
            spectrum can tell us about the universe we live in.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-titan-border/50 bg-titan-bg-alt/60 p-7 backdrop-blur-sm sm:p-8">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div className="space-y-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-titan-text-muted sm:text-xs sm:tracking-[0.25em]">
              Donor thank-you
            </p>
            <h3 className="text-xl font-semibold text-titan-text-secondary">
              Mission Badge Gift
            </h3>
            <p className="text-sm leading-7 text-titan-text-primary/90">
              Qualifying donors receive a small thank-you package with a Titan
              Observatory badge, a sticker, and a postcard featuring a
              randomly selected image from NASA&apos;s archives.
            </p>
            <div className="space-y-1.5 text-sm text-titan-text-primary/90">
              <p>
                <span className="font-semibold text-titan-text-secondary">
                  $25+
                </span>{" "}
                - sticker and postcard
              </p>
              <p>
                <span className="font-semibold text-titan-text-secondary">
                  $50+
                </span>{" "}
                - embroidered badge, sticker, and postcard
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
          <h2 className="text-2xl font-semibold text-titan-text-secondary">
            Get Involved
          </h2>
          <p className="text-sm leading-7 text-titan-text-primary/90">
            Building a remote radio observatory requires a wide range of skill
            sets - you don&apos;t have to be a radio astronomer or a master
            programmer to contribute. If you&apos;re just looking to learn,
            head to the community forum or join our Discord.
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

import Image from "next/image";

export default function DemoTelescopeFigure() {
  return (
    <figure className="mx-auto grid w-full max-w-5xl items-center overflow-hidden rounded-3xl border border-titan-border/60 bg-titan-bg-alt/80 md:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.95fr)]">
      <Image
        src="/images/DEMO-1.jpg"
        alt="Titan Observatory's 2.3-meter hydrogen-line radio telescope in its current tree-lined demonstration location."
        width={4000}
        height={3000}
        sizes="(min-width: 768px) 540px, 100vw"
        className="h-auto w-full border-b border-titan-border/60 md:border-b-0 md:border-r"
      />
      <figcaption className="space-y-5 p-6 sm:p-8">
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-titan-orange sm:text-xs sm:tracking-[0.25em]">
            Our first instrument
          </p>
          <h3 className="text-xl font-semibold text-titan-text-secondary">
            2.3&thinsp;m Hydrogen-Line Telescope
          </h3>
        </div>
        <p className="text-sm leading-7 text-titan-text-primary/85">
          This working demonstration telescope is built to detect the 21-centimeter emission from
          neutral hydrogen at 1420.4&thinsp;MHz. Its mesh reflector concentrates the faint signal at
          the feed so the receiver can turn it into a spectrum of hydrogen in the Milky Way.
        </p>
        <dl className="grid grid-cols-2 gap-x-5 gap-y-4 border-y border-titan-border/50 py-5 text-sm">
          <div>
            <dt className="text-xs text-titan-text-muted">Dish diameter</dt>
            <dd className="mt-1 font-semibold text-titan-text-secondary">2.3 meters</dd>
          </div>
          <div>
            <dt className="text-xs text-titan-text-muted">Primary band</dt>
            <dd className="mt-1 font-semibold text-titan-text-secondary">21 cm / 1420.4 MHz</dd>
          </div>
          <div>
            <dt className="text-xs text-titan-text-muted">Current state</dt>
            <dd className="mt-1 font-semibold text-titan-text-secondary">Working prototype</dd>
          </div>
          <div>
            <dt className="text-xs text-titan-text-muted">Next step</dt>
            <dd className="mt-1 font-semibold text-titan-text-secondary">Permanent site</dd>
          </div>
        </dl>
        <p className="text-sm leading-7 text-titan-text-primary/75">
          The current tree-lined location limits its view of the sky. An engineered pad, open
          horizon, solar power, connectivity, and safety systems will turn it into a reliable remote
          instrument the public can book.
        </p>
      </figcaption>
    </figure>
  );
}

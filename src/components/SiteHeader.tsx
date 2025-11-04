import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="bg-transparent">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-6 text-center sm:py-8">
        <Image
          src="/images/2.png"
          alt="Titan Astronomical Observatory logo"
          width={3711}
          height={1352}
          priority
          unoptimized
          className="h-auto w-full max-w-md sm:max-w-lg"
        />
      </div>
    </header>
  );
}

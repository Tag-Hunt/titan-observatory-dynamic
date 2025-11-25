import type { Metadata } from "next";
import Image from "next/image";
import { ConceptGlowPanel } from "@/components/ui/concept-glow-panel";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Concept Dashboard | Titan Observatory",
  description:
    "The Titan Observatory dashboard concept, with both broad accessibility and advanced controls.",
};

const mockups = [
  {
    title: "first-box-1",
    description: [
      "box text.",
    ],
    image: {
      src: "/images/Dashboard-Mockup-1.png",
      alt: "Dashboard-Mockup-1",
    },
  },
  {
    title: "second-box-2",
    description: [
      "box text 2.",
    ],
    image: {
      src: "/images/Dashboard-Mockup-2.png",
      alt: "Dashboard-Mockup-2",
    },
  },
];

export default function ConceptDashboardPage() {
  return (
    <main className="relative z-10 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-titan-text-secondary">Concept Dashboard</h1>
        <p className="text-sm leading-relaxed text-titan-text-primary/90">
          Description goes here 1
        </p>
      </section>

      <section className="space-y-8">
        {mockups.map(item => (
          <article key={item.title} className="space-y-5 text-sm leading-relaxed text-titan-text-primary/90">
            <div className="space-y-3 rounded-3xl border border-titan-border/60 bg-titan-bg-alt/90 p-6 shadow-[0_14px_34px_-24px_rgba(8,12,24,0.8)] backdrop-blur-sm">
              <h2 className="text-lg font-semibold text-titan-text-secondary">{item.title}</h2>
              {item.description.map(text => (
                <p key={text}>{text}</p>
              ))}
            </div>
            <figure className="mx-auto w-full max-w-5xl">
              <ConceptGlowPanel className="relative w-full border border-titan-border/60 bg-titan-bg-alt/80 shadow-[0_28px_60px_-34px_rgba(12,16,40,0.95)]">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.src.includes("Mockup-1") ? 1848 : 1508}
                  height={item.image.src.includes("Mockup-1") ? 1303 : 1123}
                  className="h-auto w-full object-contain"
                  sizes="(min-width: 1280px) 900px, (min-width: 768px) 85vw, 95vw"
                  priority={item.image.src.includes("Mockup-1")}
                />
              </ConceptGlowPanel>
            </figure>
          </article>
        ))}
      </section>
    </main>
  );
}

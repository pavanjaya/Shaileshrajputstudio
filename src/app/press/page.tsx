import Image from "next/image";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArrowIcon } from "@/components/ArrowIcon";
import { PressTabs } from "@/components/PressTabs";
import { pressEntries } from "@/data/press";

export const metadata: Metadata = {
  title: "Exhibitions & Press",
  description: "Shailesh Rajput Studio's exhibitions, and its work as featured in design publications.",
};

const exhibitionEntries = pressEntries.filter((entry) => entry.category === "Exhibition");
const pressOnlyEntries = pressEntries.filter((entry) => entry.category === "Press");

// Real photos from the studio's own exhibitions/design weeks — not tied to
// a specific named show in our data, so shown as a general gallery rather
// than captioned with an exhibition name we don't actually have.
const exhibitionPhotos = [
  "/images/world-gallery/design-week.png",
  "/images/world-gallery/exhibition-floor.png",
  "/images/world-gallery/the-team.png",
  "/images/world-gallery/in-the-making.png",
  "/images/world-gallery/tribe.png",
];

export default function PressPage() {
  return (
    <>
      <Nav />

      <section className="mx-auto max-w-3xl px-6 pt-20 pb-16 text-center sm:pt-28">
        <p className="font-sans-ui mb-4 flex items-center justify-center gap-2 text-xs tracking-[0.2em] text-[var(--ash)] uppercase">
          Exhibitions &amp; Press
        </p>
        <h1 className="mb-4 text-4xl leading-tight sm:text-5xl">
          Featured in the world.
        </h1>
        <p className="text-[var(--ink)]/70 leading-relaxed">
          Where the studio has shown its work in person, and how design
          publications have covered it — profiles, projects, and features
          from around the world.
        </p>
      </section>

      <div className="mx-auto max-w-5xl px-6 pb-24">
        <PressTabs
          exhibitions={
            <div>
              <div className="mb-14 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {exhibitionPhotos.map((src) => (
                  <div key={src} className="aspect-[4/5] overflow-hidden">
                    <Image
                      src={src}
                      alt="The studio at a design exhibition"
                      width={500}
                      height={625}
                      unoptimized
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
                {exhibitionEntries.map((entry, i) => (
                  <div key={entry.title + i} className="py-8">
                    <p className="font-sans-ui mb-1 text-xs tracking-[0.15em] text-[var(--ash)] uppercase">
                      {entry.venue} · {entry.year} · {entry.status}
                    </p>
                    <h2 className="text-xl">{entry.title}</h2>
                    <p className="mt-1 text-sm text-[var(--ink)]/60">{entry.description}</p>
                  </div>
                ))}
              </div>
            </div>
          }
          press={
            <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {pressOnlyEntries.map((entry, i) => (
                <div
                  key={entry.title + i}
                  className="grid grid-cols-1 items-center gap-6 py-8 sm:grid-cols-[140px_1fr]"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[var(--paper-2)] sm:aspect-square">
                    <Image
                      src={entry.image ?? `/images/press/press-${(i % 3) + 1}.svg`}
                      alt={entry.title}
                      width={400}
                      height={400}
                      unoptimized
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-sans-ui mb-1 text-xs tracking-[0.15em] text-[var(--ash)] uppercase">
                      {entry.venue} · {entry.year}
                    </p>
                    <h2 className="text-xl">{entry.title}</h2>
                    <p className="mt-1 text-sm text-[var(--ink)]/60">{entry.description}</p>
                    {entry.url && (
                      <a
                        href={entry.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans-ui mt-2 inline-flex items-center gap-1.5 text-sm text-[var(--ink)]/70 hover:text-[var(--ink)]"
                      >
                        Read the feature
                        <ArrowIcon className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          }
        />
      </div>

      <Footer />
    </>
  );
}

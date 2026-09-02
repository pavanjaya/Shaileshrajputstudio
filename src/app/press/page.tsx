import Image from "next/image";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArrowIcon } from "@/components/ArrowIcon";
import { pressEntries } from "@/data/press";

export const metadata: Metadata = {
  title: "Exhibitions & Press",
  description: "Shailesh Rajput Studio's work, as featured in design publications and press.",
};

const featuredEntries = pressEntries.filter((entry) => !entry.placeholder);

export default function PressPage() {
  return (
    <>
      <Nav />

      <section className="mx-auto max-w-3xl px-6 pt-20 pb-16 text-center sm:pt-28">
        <p className="font-sans-ui mb-4 flex items-center justify-center gap-2 text-xs tracking-[0.2em] text-[var(--ash)] uppercase">
          Exhibitions &amp; Press
        </p>
        <h1 className="mb-4 text-4xl leading-tight sm:text-5xl">
          Featured in the press.
        </h1>
        <p className="text-[var(--ink)]/70 leading-relaxed">
          The studio&apos;s work, as covered by design publications — profiles,
          projects, and features from around the world.
        </p>
      </section>

      <div className="mx-auto max-w-5xl px-6 pb-24">
        <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {featuredEntries.map((entry, i) => (
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
      </div>

      <Footer />
    </>
  );
}

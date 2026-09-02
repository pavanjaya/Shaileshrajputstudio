import Image from "next/image";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { pressEntries } from "@/data/press";

export const metadata: Metadata = {
  title: "Exhibitions & Press",
  description: "Shows, features and appearances from Shailesh Rajput Studio.",
};

export default function PressPage() {
  return (
    <>
      <Nav />

      <section className="mx-auto max-w-3xl px-6 pt-20 pb-16 text-center sm:pt-28">
        <p className="font-sans-ui mb-4 flex items-center justify-center gap-2 text-xs tracking-[0.2em] text-[var(--ash)] uppercase">
          Exhibitions &amp; Press
        </p>
        <h1 className="text-4xl leading-tight sm:text-5xl">
          Shows, features and appearances.
        </h1>
      </section>

      <div className="mx-auto max-w-5xl px-6 pb-24">
        <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {pressEntries.map((entry, i) => (
            <div
              key={entry.title + i}
              className="grid grid-cols-1 items-center gap-6 py-8 sm:grid-cols-[140px_1fr_auto]"
            >
              <div className="aspect-[4/3] overflow-hidden sm:aspect-square">
                <Image
                  src={`/images/press/press-${(i % 3) + 1}.svg`}
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
              </div>
              <span
                className={`font-sans-ui h-fit shrink-0 rounded-full border px-3 py-1 text-xs tracking-[0.1em] uppercase ${
                  entry.status === "Upcoming"
                    ? "border-[var(--accent)] text-[var(--ink)]"
                    : "border-[var(--line)] text-[var(--ink)]/50"
                }`}
              >
                {entry.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

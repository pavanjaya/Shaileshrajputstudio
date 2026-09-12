import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { collections, coverImage } from "@/data/collections";

export const metadata: Metadata = {
  title: "Collections",
  description: "The six main stories of Shailesh Rajput Studio, presented as immersive chapters, not SKUs.",
};

export default function CollectionsPage() {
  return (
    <>
      <Nav />

      <section className="mx-auto max-w-3xl px-6 pt-20 pb-16 text-center sm:pt-28">
        <Reveal>
          <p className="font-sans-ui mb-4 flex items-center justify-center gap-2 text-xs tracking-[0.2em] text-[var(--ash)] uppercase">
            Collections
          </p>
        </Reveal>
        <RevealText as="h1" className="mb-6 text-4xl leading-tight sm:text-5xl">
          Chapters, not SKU lists.
        </RevealText>
        <Reveal delay={0.05}>
          <p className="text-[var(--ink)]/70 leading-relaxed">
            Each collection is presented the way collectible art is
            presented globally, through its myth, its films, its material
            story. Prices are not displayed; every piece is available on
            request.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16 pb-24">
        <Reveal as="div" staggerChildren className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((c) => (
            <Link
              key={c.slug}
              href={`/collections/${c.slug}`}
              className="group block"
            >
              <div className="mb-4 aspect-[4/3] overflow-hidden">
                <Image
                  src={coverImage(c)}
                  alt={c.title}
                  width={1000}
                  height={750}
                  unoptimized
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <p className="font-sans-ui mb-2 text-xs tracking-[0.2em] text-[var(--ash)] uppercase">
                {c.sanskritName}
                {c.elements ? ` · ${c.elements.length} Elements` : " · Story Series"}
              </p>
              <h2 className="mb-2 text-xl">{c.title}</h2>
              <p className="text-sm leading-relaxed text-[var(--ink)]/70">{c.myth}</p>
            </Link>
          ))}
        </Reveal>
      </section>

      <Footer />
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArrowIcon } from "@/components/ArrowIcon";
import { getPanchBhuta, getElements, coverImage, stillImages, filmPoster } from "@/data/collections";
import { getProductsBySeries } from "@/data/products";
import { ElementBrowser } from "@/components/ElementBrowser";

export const metadata: Metadata = {
  title: "Panch Bhuta",
  description: "Panch Bhuta — the studio's six elemental principles: Bhumi, Jal, Agni, Vayu, Vyom, and Dhatu.",
};

export default function PanchBhutaPage() {
  const panchBhuta = getPanchBhuta();
  const elements = getElements();
  const productsByElement = Object.fromEntries(
    elements.map((el) => [el.slug, getProductsBySeries(el.title)]),
  );

  return (
    <>
      <Nav />

      <section className="relative flex h-[70vh] min-h-[420px] items-end overflow-hidden">
        <Image
          src={coverImage(panchBhuta)}
          alt={panchBhuta.title}
          fill
          priority
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />
        <div className="relative z-10 mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-16 pb-14 text-white">
          <p className="font-sans-ui mb-3 text-xs tracking-[0.2em] uppercase text-white/80">
            The Main Stories · Six Elements
          </p>
          <h1 className="text-4xl sm:text-6xl">{panchBhuta.title}</h1>
          <p className="font-sans-ui mt-2 text-lg text-white/70">{panchBhuta.sanskritName}</p>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-20 text-center">
        <p className="font-sans-ui mb-4 text-xs tracking-[0.2em] text-[var(--ash)] uppercase">
          The Myth
        </p>
        <p className="text-2xl leading-relaxed sm:text-3xl">{panchBhuta.myth}</p>
      </section>

      <section className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16 pb-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stillImages(panchBhuta).map((src, i) => (
            <div key={src} className="aspect-[4/5] overflow-hidden">
              <Image
                src={src}
                alt={`${panchBhuta.title} still ${i + 1}`}
                width={800}
                height={1000}
                unoptimized
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--line)] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-sans-ui mb-4 text-xs tracking-[0.2em] text-[var(--ash)] uppercase">
            The Material Story
          </p>
          <p className="text-xl leading-relaxed sm:text-2xl">{panchBhuta.materialStory}</p>
        </div>
      </section>

      <section className="border-t border-[var(--line)] pt-20">
        <div className="mx-auto mb-8 max-w-[1800px] px-6 sm:px-10 lg:px-16">
          <p className="font-sans-ui mb-2 text-xs tracking-[0.2em] text-[var(--ash)] uppercase">
            The Six Elements
          </p>
          <h2 className="text-3xl sm:text-4xl">Find your element.</h2>
        </div>
        <ElementBrowser elements={elements} productsByElement={productsByElement} />
      </section>

      {panchBhuta.films.length > 0 && (
        <section className="border-t border-[var(--line)] px-6 sm:px-10 lg:px-16 py-20">
          <div className="mx-auto max-w-[1800px]">
            <div className="flex flex-wrap justify-center gap-4">
              {panchBhuta.films.map((film) => (
                <div
                  key={film.slug}
                  className="group relative w-full max-w-[180px] overflow-hidden rounded-2xl bg-[var(--ink)]"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-10 bg-gradient-to-b from-black/70 to-transparent px-3 pt-3 pb-8 text-white">
                    <p className="text-sm">{film.title}</p>
                    <p className="font-sans-ui text-xs text-white/70">{film.type}</p>
                  </div>
                  <video
                    controls
                    preload="none"
                    poster={filmPoster(film)}
                    className="aspect-[9/16] w-full object-cover"
                  >
                    <source src={film.videoSrc} type="video/mp4" />
                  </video>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16 py-14">
        <Link href="/collections" className="group flex items-center justify-between">
          <div>
            <p className="font-sans-ui mb-1 text-xs tracking-[0.2em] text-[var(--ash)] uppercase">
              Back to
            </p>
            <p className="text-2xl group-hover:text-[var(--accent)]">All Collections</p>
          </div>
          <span className="text-[var(--ink)]/40 transition group-hover:translate-x-1 group-hover:text-[var(--ink)]">
            <ArrowIcon className="h-6 w-6" />
          </span>
        </Link>
      </section>

      <Footer />
    </>
  );
}

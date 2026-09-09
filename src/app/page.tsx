import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SoundToggle } from "@/components/SoundToggle";
import { IntroLoader } from "@/components/IntroLoader";
import { ArrowIcon } from "@/components/ArrowIcon";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { StoriesFan } from "@/components/StoriesFan";
import { collections, coverImage, getPanchBhuta } from "@/data/collections";
import { getProductBySlug } from "@/data/products";
import { pressEntries } from "@/data/press";

// Panch Bhuta's own cover is a placeholder gradient — use one of its real
// elemental photos (Bhumi) as a nicer representative thumbnail on the
// homepage's story grid instead.
const panchBhutaThumb = getPanchBhuta().elements![0];

// A curated set of real, photographed pieces spanning the catalogue's
// breadth — the homepage's entry point into the full product range.
const featuredSlugs = [
  "trivik",
  "sambhu-textured",
  "swarnita",
  "bodhi-deep-samuha",
  "aatrey-flower",
  "manas",
  "pravala",
  "ant-light-bada",
  "eraya-iv",
  "dhaarana",
];
const featuredProducts = featuredSlugs.map((slug) => getProductBySlug(slug)!).filter(Boolean);

// StoriesFan is a Client Component, so its props must be plain, serializable
// data — resolve each collection's cover image here on the server first.
const storyTiles = collections.map((c) => ({
  slug: c.slug,
  title: c.title,
  sanskritName: c.sanskritName,
  myth: c.myth,
  elementsCount: c.elements?.length,
  image: c.elements ? coverImage(panchBhutaThumb) : coverImage(c),
}));

export default function ArrivalPage() {
  return (
    <>
      <IntroLoader />
      <Nav />

      <section className="relative flex h-screen min-h-[560px] items-end overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/arrival-hero.svg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/arrival-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />
        <SoundToggle src="/audio/arrival-theme.mp3" />
        <div className="pointer-events-none relative z-10 mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-16 pb-16 text-white">
          <p className="font-sans-ui mb-4 flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white/80">
            An Evolving Practice of Life and Design
          </p>
          <h1 className="max-w-2xl text-4xl leading-tight sm:text-5xl md:text-6xl">
            Objects that carry soul and story into spaces.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-24 pb-16 text-center sm:pt-32">
        <p className="text-2xl leading-relaxed sm:text-3xl">
          The purest expression of an idea, feeling, or experience distilled
          to what truly matters.
        </p>
        <p className="mt-6 leading-relaxed text-[var(--ink)]/70">
          Depth through simplicity. Meaning through restraint.
        </p>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--ink)] text-white">
        <div className="mx-auto grid max-w-[1800px] grid-cols-1 gap-12 px-6 py-20 sm:grid-cols-[380px_1fr] sm:gap-16 sm:px-10 sm:py-28 lg:px-16">
          <div className="overflow-hidden">
            <Image
              src="/images/founder-portrait.png"
              alt="Shailesh and Manasi — Founders, Shailesh Rajput Studio"
              width={1195}
              height={1254}
              unoptimized
              className="w-full object-cover"
            />
          </div>
          <div>
            <p className="font-sans-ui mb-2 text-xs tracking-[0.2em] text-white/50 uppercase">
              The Studio
            </p>
            <h2 className="mb-8 max-w-lg text-3xl leading-snug sm:text-4xl">
              A practice of observation, held by two hands.
            </h2>
            <p className="mb-5 leading-relaxed text-white/80">
              Shailesh and Manasi approach design as a process of discovery
              rather than control. Questions arrive before answers. Intuition
              arrives before logic — through sketching, experimentation, and
              making, their observations take shape as objects that invite
              others into the same sense of wonder.
            </p>
            <p className="mb-8 leading-relaxed text-white/80">
              Rooted in looking closely at nature, materials, and the quiet
              details of everyday life, this way of seeing became the
              foundation of Shailesh Rajput Studio — where observation
              becomes form, and design becomes a way of participating in
              life.
            </p>
            <Link
              href="/world"
              className="font-sans-ui inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white"
            >
              Learn more about the studio
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16 pb-24 pt-24">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="font-sans-ui mb-2 flex items-center gap-2 text-xs tracking-[0.2em] text-[var(--ash)] uppercase">
              Featured Products
            </p>
            <h2 className="text-3xl sm:text-4xl">A first look at the work.</h2>
          </div>
          <Link
            href="/products"
            className="font-sans-ui hidden shrink-0 items-center gap-1.5 text-sm text-[var(--ink)]/60 hover:text-[var(--ink)] sm:inline-flex"
          >
            View all products
            <ArrowIcon className="h-3.5 w-3.5" />
          </Link>
        </div>

        <FeaturedCarousel products={featuredProducts} />

        <Link
          href="/products"
          className="font-sans-ui mt-10 flex items-center justify-center gap-1.5 text-sm text-[var(--ink)]/60 hover:text-[var(--ink)] sm:hidden"
        >
          View all products
          <ArrowIcon className="h-3.5 w-3.5" />
        </Link>
      </section>

      <section className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16 pb-24">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="font-sans-ui mb-2 flex items-center gap-2 text-xs tracking-[0.2em] text-[var(--ash)] uppercase">
              The Stories
            </p>
            <h2 className="text-3xl sm:text-4xl">Six stories, one practice.</h2>
          </div>
          <Link
            href="/collections"
            className="font-sans-ui hidden shrink-0 items-center gap-1.5 text-sm text-[var(--ink)]/60 hover:text-[var(--ink)] sm:inline-flex"
          >
            View all stories
            <ArrowIcon className="h-3.5 w-3.5" />
          </Link>
        </div>

        <StoriesFan stories={storyTiles} />
      </section>

      <section className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16 pb-24">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-[320px_1fr] sm:gap-16">
          <div>
            <p className="font-sans-ui mb-2 text-xs tracking-[0.2em] text-[var(--ash)] uppercase">
              Exhibitions &amp; Press
            </p>
            <h2 className="mb-8 text-3xl sm:text-4xl">In the world.</h2>
            <Link
              href="/press"
              className="font-sans-ui inline-flex items-center gap-1.5 text-sm text-[var(--ink)]/60 hover:text-[var(--ink)]"
            >
              View all news
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {pressEntries
              .filter((entry) => !entry.placeholder)
              .slice(0, 3)
              .map((entry, i) => (
              <Link
                key={entry.title + i}
                href={entry.url ?? "/press"}
                target={entry.url ? "_blank" : undefined}
                rel={entry.url ? "noopener noreferrer" : undefined}
                className="group grid grid-cols-[100px_1fr] items-center gap-6 py-6 sm:grid-cols-[140px_1fr]"
              >
                {entry.logo ? (
                  <div className="flex aspect-square items-center justify-center border border-[var(--line)] bg-white p-4">
                    <Image
                      src={entry.logo}
                      alt={`${entry.venue} logo`}
                      width={300}
                      height={300}
                      unoptimized
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="aspect-square overflow-hidden bg-[var(--paper-2)]">
                    <Image
                      src={entry.image ?? `/images/press/press-${(i % 3) + 1}.svg`}
                      alt={entry.title}
                      width={300}
                      height={300}
                      unoptimized
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div>
                  <p className="font-sans-ui mb-1 text-xs tracking-[0.15em] text-[var(--ash)] uppercase">
                    {entry.venue}
                  </p>
                  <p className="text-lg leading-snug transition group-hover:text-[var(--accent)]">
                    {entry.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--ink)] px-6 py-24 text-center text-white">
        <p className="font-sans-ui mb-4 text-xs tracking-[0.2em] uppercase text-white/60">
          The World We Are Building
        </p>
        <h2 className="mx-auto mb-8 max-w-2xl text-3xl leading-snug sm:text-4xl">
          A place where creators, artisans, thinkers, and curious minds gather
          to exchange ideas and create meaningful work.
        </h2>
        <Link
          href="/acquire"
          className="font-sans-ui inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[var(--ink)] transition hover:bg-[var(--accent)]"
        >
          Begin a Conversation
        </Link>
      </section>

      <Footer />
    </>
  );
}

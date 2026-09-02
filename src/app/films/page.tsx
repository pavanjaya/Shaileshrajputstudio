import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArrowIcon } from "@/components/ArrowIcon";
import { getPanchBhuta, getElements, getStoryCollections, filmPoster } from "@/data/collections";

const panchBhuta = getPanchBhuta();

const filmGroups = [
  { slug: panchBhuta.slug, title: panchBhuta.title, href: "/collections/panch-bhuta", films: panchBhuta.films },
  ...getElements().map((el) => ({ slug: el.slug, title: el.title, href: "/collections/panch-bhuta", films: el.films })),
  ...getStoryCollections().map((c) => ({ slug: c.slug, title: c.title, href: `/collections/${c.slug}`, films: c.films })),
];

export const metadata: Metadata = {
  title: "Films",
  description: "The storytelling archive — every film made for Shailesh Rajput Studio, in one place.",
};

export default function FilmsPage() {
  return (
    <>
      <Nav />

      <section className="mx-auto max-w-3xl px-6 pt-20 pb-16 text-center sm:pt-28">
        <p className="font-sans-ui mb-4 flex items-center justify-center gap-2 text-xs tracking-[0.2em] text-[var(--ash)] uppercase">
          Films
        </p>
        <h1 className="mb-6 text-4xl leading-tight sm:text-5xl">
          The storytelling archive.
        </h1>
        <p className="text-[var(--ink)]/70 leading-relaxed">
          Every film made for the brand, in one place — origin films, process
          films, and pieces seen in situ.
        </p>
      </section>

      <div className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16 pb-24">
        {filmGroups.map((g) => (
          <section key={g.slug} className="mb-16">
            <div className="mb-6 flex items-baseline justify-between">
              <h2 className="text-xl">{g.title}</h2>
              <Link
                href={g.href}
                className="font-sans-ui inline-flex items-center gap-1.5 text-sm text-[var(--ink)]/60 hover:text-[var(--ink)]"
              >
                View collection
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
              {g.films.map((film) =>
                film.videoSrc ? (
                  <div
                    key={film.slug}
                    className="group relative mx-auto w-full max-w-[180px] overflow-hidden rounded-2xl bg-[var(--ink)]"
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
                ) : (
                  <div
                    key={film.slug}
                    className="group relative mx-auto w-full max-w-[180px] overflow-hidden rounded-2xl bg-[var(--ink)]"
                  >
                    <div className="relative aspect-[9/16] overflow-hidden">
                      <Image
                        src={filmPoster(film)}
                        alt={film.title}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                      <div className="pointer-events-none absolute inset-x-0 top-0 bg-gradient-to-b from-black/70 to-transparent px-3 pt-3 pb-8 text-white">
                        <p className="text-sm">{film.title}</p>
                        <p className="font-sans-ui text-xs text-white/70">
                          {film.type} · {film.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </>
  );
}

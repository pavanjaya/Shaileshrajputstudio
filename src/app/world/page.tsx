import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Coil } from "@/components/Coil";
import {
  PurposeIcon,
  VisionIcon,
  MissionIcon,
  QuietRebellionIcon,
  InnocentCuriosityIcon,
  ElementalWisdomIcon,
  LayeredSimplicityIcon,
} from "@/components/WorldIcons";

export const metadata: Metadata = {
  title: "The World",
  description:
    "The studio story, the founder story, the philosophy and the values of Shailesh Rajput Studio.",
};

const studioGallery = [
  { image: "/images/world-gallery/design-week.png", text: "" },
  { image: "/images/world-gallery/exhibition-floor.png", text: "" },
  { image: "/images/world-gallery/the-team.png", text: "" },
  { image: "/images/world-gallery/in-the-making.png", text: "" },
  { image: "/images/world-gallery/tribe.png", text: "" },
];

const belief = [
  {
    name: "Purpose",
    icon: PurposeIcon,
    statement: "SRS exists to create moments of pause, reflection, and inner connection.",
    supporting:
      "Each object placed into the world carries a story. Childlike curiosity, observing deeply, feeling deeply, translating emotion into form — SRS creates slowly and intuitively, allowing story, material, process, and emotion to shape each piece.",
  },
  {
    name: "Vision",
    icon: VisionIcon,
    statement: "An evolving practice of life and design.",
    supporting:
      "Bringing together creators, artisans, materials, stories, and philosophies that inspire people to live with presence. Reimagining humanity's relationship with creation.",
  },
  {
    name: "Mission",
    icon: MissionIcon,
    statement: "To create soulful Indian objects and experiences through intuition.",
    supporting:
      "Shaping materials with patience and hand, through the creator's inspired originality and material innovation.",
  },
];

const values = [
  {
    name: "Quiet Rebellion",
    icon: QuietRebellionIcon,
    description:
      "We reject performative luxury and trend-driven creation in favour of emotional depth and enduring originality.",
  },
  {
    name: "Innocent Curiosity",
    icon: InnocentCuriosityIcon,
    description:
      "We approach life and making with openness, wonder, and a willingness to observe before assuming.",
  },
  {
    name: "Elemental Wisdom",
    icon: ElementalWisdomIcon,
    description:
      "We trust intuition and nature as forms of intelligence — listening deeply before shaping form.",
  },
  {
    name: "Layered Simplicity",
    icon: LayeredSimplicityIcon,
    description:
      "We seek depth through essence — creating work that is simple, yet reveals deeper truths in its layers.",
  },
];

export default function WorldPage() {
  return (
    <>
      <Nav />

      <section className="mx-auto max-w-3xl px-6 pt-20 pb-16 text-center sm:pt-28">
        <p className="font-sans-ui mb-4 flex items-center justify-center gap-2 text-xs tracking-[0.2em] text-[var(--ash)] uppercase">
          The World
        </p>
        <h1 className="text-4xl leading-tight sm:text-5xl">
          The reincarnation story, told in full.
        </h1>
      </section>

      <section className="mx-auto mb-8 max-w-[1800px] px-6 sm:px-10 lg:px-16">
        <div className="relative h-[70vh] min-h-[420px] w-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/videos/arrival-hero.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-16">
        <p className="font-sans-ui mb-3 text-xs tracking-[0.2em] text-[var(--ash)] uppercase">
          The Studio Story
        </p>
        <p className="mb-6 text-xl leading-relaxed sm:text-2xl">
          Shailesh Rajput Studio is a design practice creating sculptural
          lighting, objects, and experiences inspired by the intelligence of
          nature and the deeper patterns that shape existence.
        </p>
        <p className="mb-6 text-[var(--ink)]/80 leading-relaxed">
          Rooted in observation, curiosity, and intuitive making, the studio
          sees creation as a way of understanding the world. The same forces
          that shape rivers, roots, erosion, growth, and transformation become
          a source of inspiration for form, material, and meaning.
        </p>
        <p className="mb-6 text-[var(--ink)]/80 leading-relaxed">
          At SRS, objects are not viewed as static possessions, but as living
          presences within everyday life — carrying atmosphere, memory,
          story, and emotion into the spaces they inhabit. Each creation is
          approached as an exploration, allowing material and discovery to
          guide its evolution.
        </p>
        <p className="text-[var(--ink)]/80 leading-relaxed">
          Rather than following trends or pursuing novelty, the studio seeks
          to distill the essence of an idea into its purest expression. SRS
          believes design can reconnect people to presence, shaping not only
          how a space looks, but how it is experienced over time.
        </p>
      </section>

      <section className="marquee-wrapper w-full overflow-hidden pb-16">
        <div className="animate-marquee flex w-max gap-4">
          {[...studioGallery, ...studioGallery].map((item, i) => (
            <div key={i} className="h-[420px] w-[320px] shrink-0 overflow-hidden">
              <Image
                src={item.image}
                alt=""
                width={640}
                height={840}
                unoptimized
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--ink)] text-white">
        <div className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-[180px_1fr] sm:gap-16">
            <p className="font-sans-ui text-xs tracking-[0.2em] text-white/50 uppercase">
              (The Founder Story)
            </p>
            <div>
              <p className="mb-6 text-lg leading-relaxed sm:text-xl">
                The observer, seeker and maker — Shailesh and Manasi approach
                design as a process of discovery rather than control.
                Questions arrive before answers. Intuition arrives before
                logic.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-white/80 sm:text-xl">
                Through sketching, experimentation, reflection, and making,
                their observations gradually take shape as objects that
                invite others into the same sense of wonder, curiosity, and
                presence.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-white/80 sm:text-xl">
                Their practice is rooted in looking closely — at nature,
                materials, forms, light, shadow, and the quiet details of
                everyday life. Rather than beginning with a fixed answer,
                they allow each idea to unfold through the process of
                making, letting curiosity and intuition guide what comes
                next.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-white/80 sm:text-xl">
                For Shailesh and Manasi, design is not simply about creating
                products. It is a way of observing, questioning, and
                understanding the world. A way of translating moments of
                curiosity into something tangible — something that can be
                experienced, lived with, and discovered over time.
              </p>
              <p className="mb-14 text-lg leading-relaxed text-white/80 sm:text-xl">
                This way of seeing became the foundation of Shailesh Rajput
                Studio — a practice where observation becomes form,
                intuition meets craft, and design becomes a way of
                understanding and participating in life.
              </p>

              <div className="max-w-md overflow-hidden">
                <Image
                  src="/images/founder-portrait.png"
                  alt="Shailesh and Manasi — Founders, Shailesh Rajput Studio"
                  width={1195}
                  height={1254}
                  unoptimized
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
        <p className="font-sans-ui mb-14 flex items-center justify-center gap-2.5 text-center text-xs tracking-[0.2em] text-[var(--ash)] uppercase">
          <Coil className="h-4 w-4 text-[var(--accent)]" />
          Our Belief System
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {belief.map((b, i) => (
            <div
              key={b.name}
              className={`relative px-0 pt-8 first:pt-0 sm:px-10 sm:pt-0 sm:first:pl-0 ${
                i > 0 ? "border-t border-[var(--line)] sm:border-t-0 sm:border-l" : ""
              }`}
            >
              <b.icon className="mb-5 h-7 w-7 text-[var(--accent)]" />
              <h2 className="mb-4 text-sm tracking-[0.15em] text-[var(--ash)] uppercase">
                {b.name}
              </h2>
              <p className="mb-4 text-xl leading-snug">{b.statement}</p>
              <p className="text-sm leading-relaxed text-[var(--ink)]/70">{b.supporting}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16 py-16 sm:py-24">
        <p className="font-sans-ui mb-14 flex items-center gap-2.5 text-xs tracking-[0.2em] text-[var(--ash)] uppercase">
          <Coil className="h-4 w-4 text-[var(--accent)]" />
          Core Values
        </p>
        <div className="grid grid-cols-1 gap-x-10 gap-y-0 sm:grid-cols-2">
          {values.map((v) => (
            <div
              key={v.name}
              className="group flex gap-5 border-t border-[var(--line)] py-8 first:border-t sm:py-10"
            >
              <v.icon className="mt-1 h-6 w-6 shrink-0 text-[var(--ink)]/30 transition-colors duration-300 group-hover:text-[var(--accent)]" />
              <div>
                <h3 className="mb-2 text-xl">{v.name}</h3>
                <p className="text-[var(--ink)]/70 leading-relaxed">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--ink)] px-6 py-20 text-center text-white">
        <p className="font-sans-ui mb-4 text-xs tracking-[0.2em] uppercase text-white/60">
          Sadhana · साधना
        </p>
        <h2 className="mx-auto mb-8 max-w-xl text-3xl leading-snug sm:text-4xl">
          Design approach, philosophy, principles and product pillars — the
          practice the studio has always run on.
        </h2>
        <Link
          href="/sadhana"
          className="font-sans-ui inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[var(--ink)] transition hover:bg-[var(--accent)]"
        >
          Explore Sadhana
        </Link>
      </section>

      <Footer />
    </>
  );
}

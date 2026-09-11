import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { studio } from "@/lib/studio";

export const metadata: Metadata = {
  title: "Contact",
  description: "Visit or write to Shailesh Rajput Studio.",
};

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M12 21s-7-6.1-7-11.2A7 7 0 0 1 12 3a7 7 0 0 1 7 6.8C19 14.9 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.8" r="2.4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4 6.5l8 6.5 8-6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
      <path
        d="M7 17 17 7M17 7H9M17 7v8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactPage() {
  const mapsQuery = encodeURIComponent(studio.address.full);
  const mapsOpenUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

  return (
    <>
      <Nav />

      <section className="mx-auto max-w-2xl px-6 pt-20 pb-16 text-center sm:pt-28">
        <Reveal>
          <p className="font-sans-ui mb-4 flex items-center justify-center gap-2 text-xs tracking-[0.2em] text-[var(--ash)] uppercase">
            Contact
          </p>
        </Reveal>
        <RevealText as="h1" className="mb-6 text-4xl leading-tight sm:text-5xl">
          Visit the studio, or write to us.
        </RevealText>
        <Reveal delay={0.05}>
          <p className="text-[var(--ink)]/70 leading-relaxed">
            The work is best experienced in person. Reach out to arrange a
            visit, or send a note directly.
          </p>
        </Reveal>
      </section>

      <section className="bg-[var(--paper-2)]">
        <Reveal as="div" staggerChildren className="mx-auto grid max-w-[1800px] grid-cols-1 sm:grid-cols-2">
          <div className="flex flex-col justify-center gap-10 px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
            <Reveal>
              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ink)] text-white">
                  <PinIcon />
                </div>
                <p className="font-sans-ui mb-3 text-xs tracking-[0.15em] text-[var(--ash)] uppercase">
                  Studio Address
                </p>
                <p className="leading-relaxed text-[var(--ink)]">
                  {studio.address.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ink)] text-white">
                  <MailIcon />
                </div>
                <p className="font-sans-ui mb-3 text-xs tracking-[0.15em] text-[var(--ash)] uppercase">
                  Email Address
                </p>
                <a
                  href={`mailto:${studio.email}`}
                  className="leading-relaxed text-[var(--ink)] hover:text-[var(--accent)]"
                >
                  {studio.email}
                </a>
              </div>
            </Reveal>
          </div>

          <div className="relative h-[420px] sm:h-auto sm:min-h-[480px]">
            <iframe
              src={mapsEmbedUrl}
              title="Shailesh Rajput Studio — Location"
              className="h-full w-full grayscale-[15%]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={mapsOpenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans-ui absolute top-4 left-4 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs tracking-[0.1em] text-[var(--ink)] uppercase shadow-md transition hover:bg-[var(--ink)] hover:text-white"
            >
              Open in Maps
              <ArrowUpRightIcon />
            </a>
          </div>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}

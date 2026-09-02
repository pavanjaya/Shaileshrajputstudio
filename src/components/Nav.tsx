"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { studio } from "@/lib/studio";

const links = [
  { href: "/products", label: "Products" },
  { href: "/collections", label: "Stories" },
  { href: "/world", label: "The World" },
  { href: "/sadhana", label: "Sadhana" },
  { href: "/films", label: "Films" },
  { href: "/press", label: "Exhibitions & Press" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    // The hero is a full h-screen video, so switch to the solid style right
    // as it scrolls out of view — not on the first few pixels of scroll,
    // which would show a solid cream bar sitting on top of the still-mostly
    // -visible dark video underneath it.
    function onScroll() {
      setScrolled(window.scrollY > window.innerHeight - 120);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // On the homepage the nav starts transparent, overlaid on the full-bleed
  // video hero — but it still needs to stay docked while scrolling, same as
  // every other page. `fixed` (not `sticky`) keeps it pinned without adding
  // real document height that would push the hero down. Once scrolled past
  // the hero it switches to the same solid paper background every other
  // page uses, since white-on-transparent would be illegible over content.
  const transparentHome = isHome && !scrolled;

  return (
    <header
      className={`font-sans-ui top-0 z-50 transition-colors ${
        isHome ? "fixed inset-x-0" : "sticky"
      } ${transparentHome ? "" : "bg-[var(--paper)]/95 backdrop-blur"}`}
    >
      <div className="mx-auto flex max-w-[1800px] items-center justify-between px-6 sm:px-10 lg:px-16 py-5">
        <Link href="/" className="block" onClick={() => setOpen(false)}>
          <Image
            src="/brand/srs-logo.png"
            alt={studio.name}
            width={1488}
            height={366}
            priority
            unoptimized
            className={`h-[37px] w-auto transition sm:h-[42px] ${transparentHome ? "brightness-0 invert" : ""}`}
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                transparentHome
                  ? "text-white/80 hover:text-white"
                  : pathname.startsWith(link.href)
                    ? "text-[var(--ink)]"
                    : "text-[var(--ink)]/60 hover:text-[var(--ink)]"
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/acquire"
            className={
              transparentHome
                ? "rounded-full bg-white px-5 py-2.5 text-[var(--ink)] transition hover:bg-[var(--accent)]"
                : "rounded-full bg-[var(--ink)] px-5 py-2.5 text-white transition hover:bg-[var(--accent)] hover:text-[var(--ink)]"
            }
          >
            Converse
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`h-px w-6 ${transparentHome ? "bg-white" : "bg-[var(--ink)]"}`} />
          <span className={`h-px w-6 ${transparentHome ? "bg-white" : "bg-[var(--ink)]"}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 bg-[var(--paper)] px-6 pb-6 text-base md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-[var(--line)] py-3 text-[var(--ink)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/acquire"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-[var(--ink)] px-5 py-3 text-center text-white"
          >
            Converse
          </Link>
        </nav>
      )}
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";
import { studio } from "@/lib/studio";
import {
  PhoneIcon,
  WhatsAppIcon,
  EmailIcon,
  InstagramIconFilled,
  FacebookIconFilled,
} from "@/components/ConnectIcons";

export function Footer() {
  return (
    <footer className="bg-[var(--footer-bg)]">
      <div className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16 py-[104px]">
        <div className="mb-10 grid grid-cols-1 gap-10 sm:grid-cols-4">
          <div className="sm:col-span-2">
            <Image
              src="/brand/srs-logo.png"
              alt={studio.name}
              width={1488}
              height={366}
              unoptimized
              className="mb-4 h-[37px] w-auto"
            />
            <p className="font-sans-ui max-w-xs text-sm text-[var(--ink)]/60">
              An evolving practice of life and design — objects and experiences
              inspired by the intelligence of nature.
            </p>
          </div>

          <div className="font-sans-ui text-sm">
            <p className="mb-3 tracking-[0.15em] text-[var(--ash)] uppercase">Explore</p>
            <ul className="space-y-2 text-[var(--ink)]/70">
              <li><Link href="/products" className="hover:text-[var(--ink)]">Products</Link></li>
              <li><Link href="/collections" className="hover:text-[var(--ink)]">Stories</Link></li>
              <li><Link href="/world" className="hover:text-[var(--ink)]">The World</Link></li>
              <li><Link href="/sadhana" className="hover:text-[var(--ink)]">Sadhana</Link></li>
              <li><Link href="/films" className="hover:text-[var(--ink)]">Films</Link></li>
              <li><Link href="/press" className="hover:text-[var(--ink)]">Exhibitions &amp; Press</Link></li>
              <li><Link href="/acquire" className="hover:text-[var(--ink)]">Converse</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--ink)]">Contact</Link></li>
            </ul>
          </div>

          <div className="font-sans-ui text-sm">
            <p className="mb-3 tracking-[0.15em] text-[var(--ash)] uppercase">Contact</p>
            <ul className="mb-8 space-y-2 text-[var(--ink)]/70">
              <li>
                <a href={`tel:${studio.phone}`} className="flex items-center gap-2 hover:text-[var(--ink)]">
                  <PhoneIcon className="h-4 w-4 shrink-0" />
                  Call
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${studio.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[var(--ink)]"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${studio.email}`} className="flex items-center gap-2 hover:text-[var(--ink)]">
                  <EmailIcon className="h-4 w-4 shrink-0" />
                  Email
                </a>
              </li>
            </ul>

            <p className="mb-3 tracking-[0.15em] text-[var(--ash)] uppercase">Follow</p>
            <div className="flex items-center gap-3">
              <a
                href={studio.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on Instagram"
                className="text-[var(--ink)] transition hover:opacity-70"
              >
                <InstagramIconFilled className="h-9 w-9" />
              </a>
              <a
                href={studio.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on Facebook"
                className="text-[var(--ink)] transition hover:opacity-70"
              >
                <FacebookIconFilled className="h-9 w-9" />
              </a>
            </div>
          </div>
        </div>

        <div className="font-sans-ui flex flex-col gap-2 text-xs text-[var(--ink)]/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {studio.name}.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[var(--ink)]">
              Privacy Policy
            </Link>
            <a
              href="https://www.hueness.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--ink)]"
            >
              Made by Hueness
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

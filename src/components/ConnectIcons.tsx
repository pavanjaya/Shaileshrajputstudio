// A small set of minimal line icons for the studio's contact and social
// channels — matches ArrowIcon's stroke weight (1.5, currentColor) so they
// sit consistently with the rest of the site's iconography.
type IconProps = { className?: string };

export function PhoneIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 4h3.5l1.5 4.5-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4.5 1.5V19a2 2 0 0 1-2 2C10.5 21 3 13.5 3 6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21a9 9 0 1 0-7.79-4.5L3 21l4.65-1.18A9 9 0 0 0 12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 8.7c.15-.5.6-.85 1.1-.85h.6c.3 0 .55.2.63.48l.5 1.6a.66.66 0 0 1-.15.65l-.6.62a5.6 5.6 0 0 0 2.9 2.9l.62-.6a.66.66 0 0 1 .65-.15l1.6.5c.28.08.48.33.48.63v.6c0 .5-.35.95-.85 1.1-.7.2-1.85.3-3.4-.5a9 9 0 0 1-4.5-4.5c-.8-1.55-.7-2.7-.5-3.4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EmailIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InstagramIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M14.5 21v-7.2h2.4l.4-2.8h-2.8V9.1c0-.8.2-1.4 1.4-1.4h1.5V5.2C16.9 5.1 16 5 15 5c-2.2 0-3.7 1.3-3.7 3.8v2.2H8.9v2.8h2.4V21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

// Solid, filled-badge versions — the studio's brand-toned block matching
// each platform's own mark, rather than an outline redraw. Used for the
// footer's "Follow" row.

export function FacebookIconFilled({ className = "h-9 w-9" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="currentColor" />
      <path
        d="M13.6 20v-6.5h2.2l.3-2.5h-2.5V9.4c0-.7.2-1.2 1.3-1.2h1.3V5.9c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.1-3.2 3.3V11H8.7v2.5h2.4V20h2.5Z"
        fill="var(--paper)"
      />
    </svg>
  );
}

export function XIcon({ className = "h-9 w-9" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M13.3 10.4 19.8 3h-1.5l-5.6 6.4L8.2 3H3l6.8 9.7L3 20.5h1.5l5.9-6.8 4.7 6.8H20l-6.7-10.1Zm-2.1 2.4-.7-1L5.1 4.1h2.3l4.4 6.3.7 1 5.7 8.2h-2.3l-4.7-6.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramIconFilled({ className = "h-9 w-9" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="7" fill="currentColor" />
      <rect x="6.5" y="6.5" width="11" height="11" rx="3.5" stroke="var(--paper)" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" stroke="var(--paper)" strokeWidth="1.5" />
      <circle cx="16.3" cy="7.7" r="0.9" fill="var(--paper)" />
    </svg>
  );
}

export function YouTubeIconFilled({ className = "h-9 w-9" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect y="4" width="24" height="16" rx="6" fill="currentColor" />
      <path d="M10.3 8.8v6.4l5.6-3.2-5.6-3.2Z" fill="var(--paper)" />
    </svg>
  );
}

export function LinkedInIconFilled({ className = "h-9 w-9" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="7" fill="currentColor" />
      <circle cx="7.3" cy="7.6" r="1.5" fill="var(--paper)" />
      <rect x="6.1" y="10.4" width="2.4" height="7.3" fill="var(--paper)" />
      <path
        d="M11 10.4h2.3v1c.5-.7 1.3-1.2 2.4-1.2 2 0 3 1.3 3 3.6v4h-2.4v-3.6c0-1.1-.4-1.8-1.4-1.8-.8 0-1.3.5-1.5 1-.1.2-.1.5-.1.8v3.6H11v-7.4Z"
        fill="var(--paper)"
      />
    </svg>
  );
}

// One distinct icon per belief/value on /world — each symbolic of its
// specific concept rather than one glyph repeated and rotated. Drawn as
// irregular, slightly imperfect strokes (asymmetric curves, no true
// circles or straight-line geometry) rather than a generic icon-pack
// look — the same "hand-drawn coil" language as <Coil>, just one new
// mark per concept instead of the one spiral reused everywhere.

export function PurposeIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12.2 4.3C16.8 4.1 19.9 7.5 19.7 12.1C19.5 16.5 15.9 19.8 11.7 19.6C7.6 19.4 4.3 15.9 4.5 11.6C4.7 7.7 8.1 4.6 12.2 4.3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11.9 12.1C11.95 12.05 12 12.05 12 12.1" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

export function VisionIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M2.7 12.4C5.3 7.7 8.5 5.5 12.1 5.7C15.8 5.9 18.8 8.3 21 12.1C18.6 16.1 15.5 18.3 11.9 18.2C8.4 18 5.2 15.7 2.7 12.4Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1 9.5C13.6 9.4 14.7 10.6 14.6 12C14.5 13.4 13.2 14.6 11.8 14.5C10.5 14.4 9.4 13.1 9.5 11.7C9.6 10.5 10.7 9.6 12.1 9.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MissionIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5.1 19.2C9.2 15.1 13.2 10.9 17.6 6.7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M11.2 5.9C13.7 5.4 16.2 5.3 18.4 5.7C18.9 7.8 19 10.2 18.6 12.6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function QuietRebellionIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M2.8 12.6C4.6 12.2 6 12.7 7.5 12.2C8.9 9.3 10.2 6.1 11.7 6C13.2 5.9 14 12.6 15.4 17.7C16.4 14.5 17.1 12.5 17.9 12.1C19.1 11.5 20.1 12 21.2 11.9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InnocentCuriosityIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M8.4 9.2C8.1 6.6 9.7 4.9 11.9 5C14.2 5.1 15.8 6.7 15.5 8.8C15.2 10.9 12.4 10.8 12.1 13.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path d="M11.95 17.7C12 17.65 12.05 17.7 12 17.75" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

export function ElementalWisdomIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12.3 3.9C7.4 5.8 4.9 10.4 7.6 15.4C10.3 20 16.6 19.7 18.7 15.8C21 11.5 16.9 6.2 12.3 3.9Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11.9 4.6C11.5 8.8 12.6 13.1 13.4 16.9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function LayeredSimplicityIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12.1 3.8L20.9 8.9L12 14.2L3.2 9L12.1 3.8Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.4 13.7C6.3 15.5 9.2 17.2 12.1 18.9C15 17.2 17.8 15.4 20.6 13.6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

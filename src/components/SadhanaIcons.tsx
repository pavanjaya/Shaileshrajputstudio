// One distinct line-icon per Design Principle / Product Pillar on
// /sadhana — same stroke language as WorldIcons, each shape specific to
// its concept.

export function EvolutionIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 17C4 17 7 19 10 15C13 11 11 6 14 5C17 4 19 7 19 7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path d="M15.5 4.5L19 7L16.5 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TactilityIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.4" opacity="0.3" />
    </svg>
  );
}

export function SimplicityIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function InstinctIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3V6M12 18V21M3 12H6M18 12H21M5.6 5.6L7.8 7.8M18.4 5.6L16.2 7.8M5.6 18.4L7.8 16.2M18.4 18.4L16.2 16.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function HumanPaceIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M2 14C4 14 4 8 6 8C8 8 8 16 10 16C12 16 12 6 14 6C16 6 16 18 18 18C20 18 20 10 22 10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TouchedIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 13V6.5C8 5.7 8.7 5 9.5 5C10.3 5 11 5.7 11 6.5V12M11 12V5.5C11 4.7 11.7 4 12.5 4C13.3 4 14 4.7 14 5.5V12M14 12V6.5C14 5.7 14.7 5 15.5 5C16.3 5 17 5.7 17 6.5V14M8 13L5.8 11.2C5.2 10.7 4.3 10.8 3.9 11.5C3.6 12 3.7 12.7 4.2 13.1L8.5 17.3C9.2 18.9 10.8 20 12.6 20H14C16.8 20 19 17.8 19 15V14"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function QuietAliveIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 12H8L11 5L13 19L15.5 12H21"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StoryWithinIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 6.5C10.5 5.3 8 4.8 5.5 5C4.7 5.05 4 5.7 4 6.5V17C4 17.8 4.7 18.4 5.5 18.3C8 18 10.5 18.5 12 19.5C13.5 18.5 16 18 18.5 18.3C19.3 18.4 20 17.8 20 17V6.5C20 5.7 19.3 5.05 18.5 5C16 4.8 13.5 5.3 12 6.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M12 6.5V19.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

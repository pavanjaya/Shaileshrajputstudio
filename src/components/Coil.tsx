// The identity's own "coil language" motif — a continuous, hand-drawn
// spiral (never a machine-perfect curve) used site-wide as a small
// decorative/section mark. One base glyph, reused at different sizes and
// rotations rather than a set of unrelated icons, so it reads as one
// consistent visual language instead of a generic icon pack.
export function Coil({
  className = "h-6 w-6",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} style={style} aria-hidden="true">
      <path
        d="M20.5 8.5C15 5.5 8 7.5 6.5 13.5C5.2 18.7 9.3 23.5 14.5 22.8C18.7 22.2 21 18 19 14.8C17.2 11.9 13 11.3 11.3 14C9.9 16.2 11.4 18.6 13.5 18.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

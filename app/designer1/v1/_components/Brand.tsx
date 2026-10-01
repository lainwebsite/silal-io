// Brand files come from /public/brand (docs/brand.md). Never redraw or recolour them.
/* eslint-disable @next/next/no-img-element */

export function IoMark({ height = 40, className }: { height?: number; className?: string }) {
  return (
    <img
      src="/brand/io-mark.svg"
      alt="Innovation Oasis"
      height={height}
      width={Math.round((height * 255) / 188)}
      className={className}
    />
  );
}

// Full lock-up incl. "Part of Silal" endorsement. Keep ≥120px wide so the endorsement stays legible.
export function IoLockup({ width = 160, reversed = false }: { width?: number; reversed?: boolean }) {
  return (
    <img
      src={reversed ? "/brand/io-lockup-reversed.svg" : "/brand/io-lockup.svg"}
      alt="Innovation Oasis — Part of Silal"
      width={width}
      height={Math.round((width * 380) / 330)}
    />
  );
}

export function Arrow({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

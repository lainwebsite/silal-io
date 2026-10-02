// Brand files come from /public/brand (docs/brand.md). Never redraw or recolour them.
// /designer1/brand/* are cropped *views* of the official lock-up (same paths, tighter viewBox).
/* eslint-disable @next/next/no-img-element */

export function IoMark({ height = 40, className, alt = "Innovation Oasis" }: { height?: number; className?: string; alt?: string }) {
  return (
    <img src="/brand/io-mark.svg" alt={alt} height={height} width={Math.round((height * 255) / 188)} className={className} />
  );
}

// Full vertical lock-up incl. "Part of Silal". Keep ≥120px wide.
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

// Guidelines "format three": wordmark + endorsement on the left, small IO mark on the right. Best for headers.
export function IoHorizontal({ height = 52, reversed = false }: { height?: number; reversed?: boolean }) {
  const wmH = height;
  const wmW = Math.round((wmH * 326) / 148);
  const markH = Math.round(height * 0.78);
  return (
    <span style={{ display: "inline-flex", alignItems: "flex-start", gap: Math.round(height * 0.18) }}>
      <img
        src={reversed ? "/V1/brand/io-wordmark-endorsed-reversed.svg" : "/V1/brand/io-wordmark-endorsed.svg"}
        alt="Innovation Oasis — Part of Silal"
        width={wmW}
        height={wmH}
      />
      <IoMark height={markH} alt="" />
    </span>
  );
}

export function Arrow({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Highlights the letters "io" inside a word, like the wordmark ("innovat-io-n") and the guideline "explorat-io-n".
export function IoWord({ word, className }: { word: string; className?: string }) {
  const i = word.toLowerCase().lastIndexOf("io");
  if (i < 0) return <span className={className}>{word}</span>;
  return (
    <span className={className}>
      {word.slice(0, i)}
      <span style={{ color: "var(--io)" }}>{word.slice(i, i + 2)}</span>
      {word.slice(i + 2)}
    </span>
  );
}

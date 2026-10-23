/* eslint-disable @next/next/no-img-element */
// Official logo files from /public/brand, used unchanged (docs/brand.md: never redraw or recolour).

export function Mark({ className, alt = "Innovation Oasis" }: { className?: string; alt?: string }) {
  return <img src="/brand/io-mark.svg" alt={alt} className={className} width={255} height={188} />;
}

export function Lockup({ reversed, className }: { reversed?: boolean; className?: string }) {
  return (
    <img
      src={reversed ? "/brand/io-lockup-reversed.svg" : "/brand/io-lockup.svg"}
      alt="Innovation Oasis, part of Silal"
      className={className}
      width={330}
      height={380}
    />
  );
}

// Cropped views of the lock-up (identical paths, only the viewBox changed): wordmark + "Part of Silal".
export function Wordmark({ reversed, className }: { reversed?: boolean; className?: string }) {
  return (
    <img
      src={reversed ? "/V2/brand/io-wordmark-endorsed-reversed.svg" : "/V2/brand/io-wordmark-endorsed.svg"}
      alt=""
      className={className}
      width={326}
      height={148}
    />
  );
}

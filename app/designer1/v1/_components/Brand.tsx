// Placeholder "io" mark until the client supplies the logo SVG (see docs/BRIEF.md → Open inputs).
export function IoMark({ size = 40, color = "#1689cf" }: { size?: number; color?: string }) {
  return (
    <svg width={size * 1.45} height={size} viewBox="0 0 58 40" fill="none" aria-hidden="true">
      <circle cx="6" cy="6" r="4.5" fill={color} />
      <rect x="2" y="14" width="8" height="24" rx="4" fill={color} />
      <circle cx="38" cy="22" r="16" stroke={color} strokeWidth="5.5" />
      <path d="M27 18c3.5-2.5 7-2.5 11 0s7.5 2.5 11 0" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M27 23.5c3.5-2.5 7-2.5 11 0s7.5 2.5 11 0" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M28.5 29c3-2 6-2 9.5 0s6.5 2 9.5 0" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

// Wave motif taken from the lab wall graphics in the facility photos.
export function Waves({ className, color = "#ffffff" }: { className?: string; color?: string }) {
  const rows = [0, 1, 2, 3, 4, 5];
  return (
    <svg className={className} viewBox="0 0 600 260" fill="none" aria-hidden="true">
      {rows.map((i) => (
        <path
          key={i}
          d={`M0 ${40 + i * 34} C 100 ${10 + i * 34}, 200 ${70 + i * 34}, 300 ${40 + i * 34} S 500 ${10 + i * 34}, 600 ${40 + i * 34}`}
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

export function Arrow({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

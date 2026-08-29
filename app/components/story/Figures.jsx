/* Design C - the flat shape vocabulary every comic panel is drawn from.
   No outlines anywhere: solid silhouettes read instantly at panel size and
   there are no stroke seams to fight where shapes meet. */

/* Figure stands ON the y coordinate you give it and is ~80 units tall at s=1. */
export function Person({ x, y, s = 1, tone = "var(--forest)", flip = false, accent, children }) {
  return (
    <g transform={"translate(" + x + "," + y + ") scale(" + (flip ? -s : s) + "," + s + ")"}>
      <circle cx="0" cy="-66" r="14" fill={tone} />
      {accent ? <path d="M-14 -70a14 14 0 0 1 28 0z" fill={accent} /> : null}
      <path d="M-21 0v-28c0-13 9-23 21-23s21 10 21 23V0z" fill={tone} />
      {children}
    </g>
  );
}

/* Shop counter. Draw AFTER the person behind it so they're partly hidden. */
export function Counter({ x, y, w = 120, h = 62 }) {
  return (
    <g>
      <rect x={x} y={y + 9} width={w} height={h - 9} rx="3" fill="var(--forest)" />
      <rect x={x - 6} y={y} width={w + 12} height="11" rx="5.5" fill="var(--lime)" />
    </g>
  );
}

/* tail: "left" | "right" | "none". Use "none" for thought bubbles, where a
   trail of circles stands in for the pointer. */
export function Bubble({ x, y, w, h, tone = "var(--cream)", tail = "left", children }) {
  const r = Math.min(18, h / 2);
  return (
    <g transform={"translate(" + x + "," + y + ")"}>
      {tail === "none" ? null : (
        <path
          d={tail === "left" ? "M16 " + h + "l-3 15 18-15z" : "M" + (w - 16) + " " + h + "l3 15-18-15z"}
          fill={tone}
        />
      )}
      <rect x="0" y="0" width={w} height={h} rx={r} fill={tone} />
      {children}
    </g>
  );
}

/* Small phone slab. Screen is transparent - drop content in as children. */
export function Phone({ x, y, w = 60, h = 106, rot = 0, tone = "var(--forest)", screen = "var(--cream)", children }) {
  return (
    <g transform={"translate(" + x + "," + y + ") rotate(" + rot + ")"}>
      <rect x="0" y="0" width={w} height={h} rx={w * 0.19} fill={tone} />
      <rect x="5" y="5" width={w - 10} height={h - 10} rx={w * 0.13} fill={screen} />
      {children}
    </g>
  );
}

export function Qr({ x, y, s = 1, tone = "var(--forest)" }) {
  return (
    <g transform={"translate(" + x + "," + y + ") scale(" + s + ")"} fill={tone}>
      <path d="M0 0h16v16H0zM4 4v8h8V4z" />
      <path d="M32 0h16v16H32zM36 4v8h8V4z" />
      <path d="M0 32h16v16H0zM4 36v8h8v-8z" />
      <rect x="22" y="0" width="5" height="5" />
      <rect x="22" y="10" width="5" height="5" />
      <rect x="22" y="22" width="5" height="5" />
      <rect x="33" y="22" width="5" height="5" />
      <rect x="43" y="22" width="5" height="5" />
      <rect x="22" y="33" width="5" height="5" />
      <rect x="33" y="33" width="5" height="5" />
      <rect x="43" y="43" width="5" height="5" />
      <rect x="33" y="43" width="5" height="5" />
    </g>
  );
}

export function Spark({ x, y, s = 1, tone = "var(--coral)", className }) {
  return (
    <g className={className} transform={"translate(" + x + "," + y + ") scale(" + s + ")"}>
      <path
        d="M0 -12c.7 5.6 4.3 9.2 9.9 9.9C4.3 -1.4.7 2.2 0 7.8-.7 2.2-4.3-1.4-9.9-2.1-4.3-2.8-.7-6.4 0-12z"
        fill={tone}
      />
    </g>
  );
}

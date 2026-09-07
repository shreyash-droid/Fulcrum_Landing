"use client";

import { useState } from "react";

/* Team / advisor portrait.
   Shows /team/<name>.jpg once it exists in /public; until then (or if the
   file is missing) it falls back to a premium monogram on a themed gradient.
   Drop a photo named exactly like `src` into public/team/ and it appears
   automatically - no code change needed. */
export default function TeamAvatar({ src, name, initials, tone = "lime" }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`ta ta--${tone}`}>
      {!failed && src ? (
        <img
          className="ta-img"
          src={src}
          alt={name}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="ta-mono" aria-hidden="true">
          {initials}
        </span>
      )}
      <span className="ta-ring" aria-hidden="true"></span>
    </div>
  );
}

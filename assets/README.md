# Hero app screenshots

The hero phone frames display the real app UI from two image files. Save your
screenshots here with these exact names:

- `fulcrum-business.png` — the Fulcrum **Business** app (dashboard: customer
  visits, page views, sales growth, activity heatmap). This is the same asset as
  the design project's `uploads/Buisness owner FINAL (1).png`.
- `fulcrum-customer.png` — the Fulcrum **Retail/customer** app (welcome, points,
  browse categories, nearby stores). Same as `uploads/customer app FINAL.png`.

Notes:
- Portrait phone screenshots (roughly 2:4.3). They are shown with
  `object-fit: cover` inside a 220 × 460 screen, so a few px may crop top/bottom.
- Until these files exist, the hero gracefully falls back to the CSS-built
  mockups (the `<img>` self-removes on load error), so the page never breaks.
- Keep them reasonably optimized (ideally ≤ ~150 KB each). Very large exports
  (the design-project originals are ~6000 px wide) will bloat page load — export
  at ~750–900 px wide, or run them through an image optimizer / convert to WebP
  and update the filenames in `index.html` / `index-blue.html`.

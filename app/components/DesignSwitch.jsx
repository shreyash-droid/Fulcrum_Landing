"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/* ============================================================
   Design direction switch - REVIEW SCAFFOLD.

   Lets us flip between the three landing directions while we decide.
   Once a direction is picked, delete: this file, app/styles/switch.css,
   the /visual and /story routes, app/components/visual|story, and the
   <DesignSwitch /> calls in the three headers.
   ============================================================ */

const DESIGNS = [
  { href: "/", short: "A", label: "Editorial" },
  { href: "/visual", short: "B", label: "Visual" },
];

export default function DesignSwitch({ tone = "light" }) {
  const pathname = usePathname();

  return (
    <div className={"design-switch design-switch--" + tone} role="group" aria-label="Preview design direction">
      <span className="ds-label" aria-hidden="true">
        Design
      </span>
      {DESIGNS.map((d) => {
        const active = pathname === d.href;
        return (
          <Link
            key={d.href}
            href={d.href}
            className="ds-opt"
            data-active={active}
            aria-current={active ? "page" : undefined}
            title={"Design " + d.short + " - " + d.label}
          >
            <span className="ds-short" aria-hidden="true">
              {d.short}
            </span>
            <span className="ds-full">{d.label}</span>
          </Link>
        );
      })}
    </div>
  );
}

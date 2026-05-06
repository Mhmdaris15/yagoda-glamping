"use client";

import React, { useEffect, useRef } from "react";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  /** Element wrapper. Default: span. */
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
};

/**
 * Word-level "shutter" reveal: each word slides up from below a clipped line.
 * Pairs with `.word`/`.word > span` rules in globals.css.
 */
export default function SplitText({
  text,
  className = "",
  delay = 0,
  stagger = 60,
  as: As = "span",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = el.querySelectorAll<HTMLElement>(".word");

    const reveal = () => {
      words.forEach((w, i) => {
        setTimeout(() => w.classList.add("is-in"), delay + i * stagger);
      });
    };

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            reveal();
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, stagger, text]);

  const tokens = text.split(/(\s+)/);

  return (
    <As ref={ref as React.RefObject<HTMLElement & HTMLHeadingElement & HTMLParagraphElement>} className={className}>
      {tokens.map((tok, i) =>
        /^\s+$/.test(tok) ? (
          <span key={i}>{tok}</span>
        ) : (
          <span key={i} className="word">
            <span>{tok}</span>
          </span>
        )
      )}
    </As>
  );
}

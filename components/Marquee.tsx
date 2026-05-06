"use client";

import React from "react";

type Props = {
  items: string[];
  className?: string;
  separator?: React.ReactNode;
  direction?: "left" | "right";
};

export default function Marquee({
  items,
  className = "",
  separator,
  direction = "left",
}: Props) {
  // Duplicate twice so the marquee can loop seamlessly
  const sep = separator ?? <span className="mx-8 opacity-40">✦</span>;
  const items2 = [...items, ...items];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="marquee-track inline-flex whitespace-nowrap will-change-transform"
        style={{ animationDirection: direction === "right" ? "reverse" : "normal" }}
      >
        {items2.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span>{item}</span>
            {sep}
          </span>
        ))}
      </div>
    </div>
  );
}

"use client";

import React, { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  childStagger?: boolean;
  threshold?: number;
  rootMargin?: string;
  as?: keyof React.JSX.IntrinsicElements;
};

export default function Reveal({
  children,
  className = "",
  childStagger = false,
  threshold = 0.18,
  rootMargin = "0px 0px -10% 0px",
  as = "div",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-in");
            obs.unobserve(el);
          }
        });
      },
      { threshold, rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);

  const Tag = as as React.ElementType;
  return (
    <Tag
      ref={ref as React.RefObject<HTMLElement>}
      className={`${childStagger ? "reveal-child" : "reveal"} ${className}`}
    >
      {children}
    </Tag>
  );
}

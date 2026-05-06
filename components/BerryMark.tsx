import React from "react";

type Props = {
  size?: number;
  className?: string;
  color?: string;
};

/**
 * Hand-drawn berry on a stem — the brand mark for Yagoda.
 * Used in the nav, footer, and as a subtle bullet/divider throughout the site.
 */
export default function BerryMark({ size = 28, className, color = "currentColor" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke={color}
      strokeWidth={1.1}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 3c-1.6 2.6-3.7 4.5-6 5" opacity="0.8" />
      <path d="M16 3c1.6 2.6 3.7 4.5 6 5" opacity="0.8" />
      <ellipse cx="16" cy="20" rx="9" ry="9.6" />
      <path d="M16 9.5v3.5" />
      <path d="M11 17.5c.5-1.4 1.6-2.6 3-3.2" opacity="0.5" />
      <circle cx="13" cy="17" r="0.7" fill={color} stroke="none" opacity="0.55" />
    </svg>
  );
}

/**
 * Base path for static asset references.
 * Next.js `basePath: "/yagoda-glamping"` is configured in `next.config.ts`,
 * so it applies in both dev and production — the prefix must always be present
 * on raw <img src> / iframe srcs / etc. that bypass next/link.
 */
export const BASE_PATH = "/yagoda-glamping";

/** Prefix a static asset path with the base path */
export function assetPath(path: string): string {
  return `${BASE_PATH}${path}`;
}

/** Shared config for base path — used for static image references */
export const BASE_PATH = process.env.NODE_ENV === "production" ? "/yagoda-glamping" : "";

/** Prefix a static asset path with the base path */
export function assetPath(path: string): string {
    return `${BASE_PATH}${path}`;
}

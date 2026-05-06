import { assetPath } from "./config";

import banyaManifest from "../public/images/banya/manifest.json" with { type: "json" };
import houseAManifest from "../public/images/house-a/manifest.json" with { type: "json" };
import houseBManifest from "../public/images/house-b/manifest.json" with { type: "json" };
import houseCManifest from "../public/images/house-c/manifest.json" with { type: "json" };
import restaurantManifest from "../public/images/restaurant/manifest.json" with { type: "json" };
import territoryManifest from "../public/images/territory/manifest.json" with { type: "json" };

export type ManifestEntry = {
  id: string;
  file: string;
  large: string;
  thumb: string;
  orientation: "landscape" | "portrait";
  width: number;
  height: number;
};

const manifests = {
  banya: banyaManifest as ManifestEntry[],
  "house-a": houseAManifest as ManifestEntry[],
  "house-b": houseBManifest as ManifestEntry[],
  "house-c": houseCManifest as ManifestEntry[],
  restaurant: restaurantManifest as ManifestEntry[],
  territory: territoryManifest as ManifestEntry[],
};

export type Category = keyof typeof manifests;

export type ImageVariant = "default" | "large" | "thumb";

export function imgUrl(category: Category, id: string, variant: ImageVariant = "default") {
  const entry = manifests[category].find((e) => e.id === id);
  if (!entry) return assetPath(`/images/${category}/${id}.webp`);
  const file = variant === "large" ? entry.large : variant === "thumb" ? entry.thumb : entry.file;
  return assetPath(`/images/${category}/${file}`);
}

export function pickImage(category: Category, index = 0, variant: ImageVariant = "default"): string {
  const list = manifests[category];
  const entry = list[index % list.length];
  if (!entry) return assetPath(`/images/${category}/placeholder.webp`);
  const file = variant === "large" ? entry.large : variant === "thumb" ? entry.thumb : entry.file;
  return assetPath(`/images/${category}/${file}`);
}

export function getCategory(category: Category): ManifestEntry[] {
  return manifests[category];
}

export function imagesFor(
  category: Category,
  count: number,
  startAt = 0,
  variant: ImageVariant = "default"
): string[] {
  const list = manifests[category];
  const out: string[] = [];
  for (let i = 0; i < count; i++) {
    const e = list[(startAt + i) % list.length];
    if (!e) continue;
    const file = variant === "large" ? e.large : variant === "thumb" ? e.thumb : e.file;
    out.push(assetPath(`/images/${category}/${file}`));
  }
  return out;
}

export function entriesFor(category: Category, count: number, startAt = 0): ManifestEntry[] {
  const list = manifests[category];
  const out: ManifestEntry[] = [];
  for (let i = 0; i < count; i++) {
    const e = list[(startAt + i) % list.length];
    if (e) out.push(e);
  }
  return out;
}

"use client";

import React from "react";
import { useT } from "@/lib/i18n";
import { entriesFor } from "@/lib/images";
import { assetPath } from "@/lib/config";
import SplitText from "@/components/SplitText";

export default function Territory() {
  const { t } = useT();
  const items = entriesFor("territory", 14, 0);

  return (
    <section id="territory" className="relative bg-forest text-cream py-28 lg:py-36 overflow-hidden">
      <div className="px-6 lg:px-10 mb-14 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="section-divider" />
              <span className="eyebrow-mono text-cream/55">{t("territory.eyebrow")} · 06</span>
            </div>
            <h2 className="font-display text-[clamp(2.4rem,5vw,4.6rem)] leading-[1.02] tracking-tight">
              <SplitText text={t("territory.title")} />
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <p className="text-cream/65 text-base leading-relaxed max-w-md">{t("territory.body")}</p>
          </div>
        </div>
      </div>

      {/* Horizontal scroll gallery */}
      <div className="relative">
        <div className="h-scroll flex gap-4 lg:gap-6 px-6 lg:px-10 pb-8">
          {items.map((entry, i) => {
            const isPortrait = entry.orientation === "portrait";
            return (
              <figure
                key={entry.id}
                className={`shrink-0 editorial-card ${
                  isPortrait
                    ? "w-[280px] sm:w-[340px] lg:w-[420px] aspect-[3/4]"
                    : "w-[420px] sm:w-[520px] lg:w-[640px] aspect-[4/3]"
                }`}
              >
                <img
                  src={assetPath(`/images/territory/${entry.large}`)}
                  alt=""
                  className="w-full h-full object-cover"
                  loading={i < 3 ? "eager" : "lazy"}
                />
                <figcaption className="absolute bottom-3 left-3 text-cream/65 font-mono text-[10px] tracking-wider">
                  {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </figcaption>
              </figure>
            );
          })}
        </div>
        <div className="px-6 lg:px-10 max-w-[1400px] mx-auto eyebrow-mono text-cream/40">
          ← →   {t("common.gallery")}
        </div>
      </div>
    </section>
  );
}

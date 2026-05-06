"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useT } from "@/lib/i18n";
import { entriesFor, pickImage, type Category } from "@/lib/images";
import { assetPath } from "@/lib/config";
import SplitText from "@/components/SplitText";
import Reveal from "@/components/Reveal";

type Slug = "family-one" | "family-two" | "studio";

const slugMap: Record<Slug, { i18nKey: "a" | "b" | "c"; category: Category; num: string }> = {
  "family-one": { i18nKey: "a", category: "house-a", num: "01" },
  "family-two": { i18nKey: "b", category: "house-b", num: "02" },
  studio: { i18nKey: "c", category: "house-c", num: "03" },
};

export default function CabinDetailContent({ slug }: { slug: Slug }) {
  const { t, tList } = useT();
  const meta = slugMap[slug];
  const titleKey = `cabins.${meta.i18nKey}`;
  const bullets = tList(`${titleKey}.bullets`);
  const gallery = entriesFor(meta.category, 9, 1);
  const heroImg = pickImage(meta.category, 0, "large");
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <main className="bg-cream text-forest">
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[640px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt={t(`${titleKey}.title`)}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/15 to-forest-deep/30" />
        <div className="absolute inset-0 flex items-end px-6 lg:px-10 pb-16 lg:pb-20">
          <div className="max-w-[1400px] mx-auto w-full text-cream">
            <div className="flex items-center gap-3 mb-5 text-cream/65">
              <span className="section-divider" />
              <span className="eyebrow-mono">{meta.num} · {t("nav.stay")}</span>
            </div>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tight">
              <SplitText text={t(`${titleKey}.title`)} />
            </h1>
            <Link
              href="/#stay"
              className="mt-10 inline-flex items-center gap-2 eyebrow text-cream/70 hover:text-cream transition-colors"
            >
              {t("common.back")}
            </Link>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <p className="font-display text-2xl lg:text-3xl text-forest leading-snug mb-10">
                {t(`${titleKey}.long`)}
              </p>
            </Reveal>

            <h2 className="eyebrow text-forest/55 mb-6">{t("cabinDetail.includes")}</h2>
            <ul className="space-y-3.5 mb-12">
              {bullets.map((b, i) => (
                <li key={i} className="flex gap-4 text-forest/80 leading-relaxed">
                  <span className="font-mono text-[10px] tracking-widest text-berry pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8 border-y border-forest/10">
              <div>
                <div className="eyebrow-mono text-forest/45 mb-2">{t("cabinDetail.capacity")}</div>
                <div className="font-display text-2xl">{t(`${titleKey}.capacity`)}</div>
              </div>
              <div>
                <div className="eyebrow-mono text-forest/45 mb-2">{t("cabinDetail.size")}</div>
                <div className="font-display text-2xl">
                  {t(`${titleKey}.size`)}
                  <span className="text-forest/50 text-sm ml-1">{t("cabinDetail.sqm")}</span>
                </div>
              </div>
              <div>
                <div className="eyebrow-mono text-forest/45 mb-2">{t("cabinDetail.view")}</div>
                <div className="font-display text-2xl">{t(`${titleKey}.view`)}</div>
              </div>
            </div>

            {/* Gallery */}
            <div className="mt-14">
              <h2 className="eyebrow text-forest/55 mb-6">{t("common.gallery")}</h2>
              <div className="grid grid-cols-12 gap-3">
                {gallery.map((entry, i) => {
                  const isPortrait = entry.orientation === "portrait";
                  const span =
                    i === 0 ? "col-span-12 md:col-span-8 aspect-[16/10]"
                    : i === 1 ? "col-span-12 md:col-span-4 aspect-[3/4]"
                    : i === 4 ? "col-span-12 md:col-span-8 aspect-[16/9]"
                    : isPortrait ? "col-span-6 md:col-span-3 aspect-[3/4]"
                    : "col-span-6 md:col-span-4 aspect-[4/3]";
                  return (
                    <button
                      key={entry.id}
                      onClick={() => setLightbox(i)}
                      className={`editorial-card hover-zoom ${span}`}
                    >
                      <img
                        src={assetPath(`/images/${meta.category}/${entry.file}`)}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sticky booking */}
          <aside className="col-span-12 lg:col-span-5 lg:pl-12">
            <div className="sticky top-28 space-y-6">
              <div className="bg-forest-deep text-cream p-10 lg:p-12 border border-forest-deep/30">
                <div className="eyebrow-mono text-cream/55 mb-3">{t("nav.booking")}</div>
                <h3 className="font-display text-3xl lg:text-4xl mb-4">
                  {t("cabinDetail.bookThis")}
                </h3>
                <p className="text-cream/65 text-sm leading-relaxed mb-8">
                  {t("booking.body")}
                </p>
                <a
                  href="tel:+79218835640"
                  className="btn-pill btn-on-dark w-full justify-center mb-3"
                >
                  <span className="material-symbols-outlined !text-base">call</span>
                  +7 921 883 56 40
                </a>
                <a
                  href="https://wa.me/79218835640"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill bg-cream text-forest w-full justify-center hover:bg-sand-warm"
                >
                  WhatsApp →
                </a>
                <div className="mt-6 eyebrow-mono text-cream/40">{t("booking.hours")}</div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && gallery[lightbox] && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] lightbox-backdrop flex items-center justify-center p-4 cursor-zoom-out"
        >
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
            className="absolute top-6 right-6 text-cream eyebrow flex items-center gap-2"
          >
            {t("common.close")} ×
          </button>
          <img
            src={assetPath(`/images/${meta.category}/${gallery[lightbox].large}`)}
            alt=""
            onClick={(e) => e.stopPropagation()}
            className="max-w-[90vw] max-h-[88vh] object-contain"
          />
        </div>
      )}
    </main>
  );
}

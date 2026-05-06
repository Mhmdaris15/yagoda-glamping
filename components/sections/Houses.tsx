"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useT } from "@/lib/i18n";
import { pickImage } from "@/lib/images";
import SplitText from "@/components/SplitText";
import Reveal from "@/components/Reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HOUSES = [
  { key: "a", slug: "family-one", category: "house-a", from: "12 800 ₽", num: "01" },
  { key: "b", slug: "family-two", category: "house-b", from: "12 400 ₽", num: "02" },
  { key: "c", slug: "studio", category: "house-c", from: "8 900 ₽", num: "03" },
] as const;

export default function Houses() {
  const { t } = useT();
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".house-card").forEach((card) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 88%", toggleActions: "play none none none" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="stay" className="relative bg-cream text-forest py-28 lg:py-36 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-20 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-3 mb-7">
              <span className="section-divider" />
              <span className="eyebrow-mono text-forest/55">{t("houses.eyebrow")} · 03</span>
            </div>
            <h2 className="font-display text-[clamp(2.6rem,5.5vw,5rem)] leading-[1.02] tracking-tight">
              <SplitText text={t("houses.title")} className="block" />
              <SplitText text={t("houses.titleAccent")} className="block italic text-forest/55" delay={120} />
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:pl-10">
            <Reveal childStagger>
              <p className="text-forest/75 text-base leading-relaxed max-w-md">{t("houses.lead")}</p>
            </Reveal>
          </div>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          {/* Card 1 - tall + offset */}
          <Link href={`/cabins/${HOUSES[0].slug}`} className="house-card editorial-card group col-span-12 md:col-span-7 lg:col-span-7 aspect-[4/5]">
            <img src={pickImage("house-a", 0, "large")} alt={t("houses.cards.a.title")} className="w-full h-full object-cover" />
            <div className="meta-overlay text-cream">
              <div className="flex items-end justify-between">
                <div>
                  <span className="font-mono text-[10px] tracking-widest text-cream/65 uppercase">{HOUSES[0].num} / {t("houses.cards.a.tag")}</span>
                  <h3 className="font-display text-3xl lg:text-5xl mt-1">{t("houses.cards.a.title")}</h3>
                  <p className="text-cream/70 text-sm mt-2 max-w-xs">{t("houses.cards.a.desc")}</p>
                </div>
                <div className="text-right text-cream/85 hidden md:block">
                  <div className="eyebrow-mono opacity-60">{t("houses.from")}</div>
                  <div className="font-display text-2xl mt-0.5">{HOUSES[0].from}</div>
                  <div className="eyebrow-mono opacity-60 mt-1">{t("houses.perNight")}</div>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-2 text-cream eyebrow opacity-80 group-hover:opacity-100 transition-opacity">
                {t("houses.explore")} <span aria-hidden>→</span>
              </div>
            </div>
          </Link>

          {/* Card 2 - tall, top offset */}
          <Link href={`/cabins/${HOUSES[1].slug}`} className="house-card editorial-card group col-span-12 md:col-span-5 lg:col-span-5 aspect-[3/4] md:mt-20">
            <img src={pickImage("house-b", 0, "large")} alt={t("houses.cards.b.title")} className="w-full h-full object-cover" />
            <div className="meta-overlay text-cream">
              <span className="font-mono text-[10px] tracking-widest text-cream/65 uppercase">{HOUSES[1].num} / {t("houses.cards.b.tag")}</span>
              <h3 className="font-display text-3xl lg:text-4xl mt-1">{t("houses.cards.b.title")}</h3>
              <p className="text-cream/70 text-sm mt-2 max-w-xs">{t("houses.cards.b.desc")}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="eyebrow text-cream/85">{t("houses.from")} {HOUSES[1].from}</span>
                <span className="eyebrow text-cream/65 group-hover:text-cream transition-colors">→</span>
              </div>
            </div>
          </Link>

          {/* Card 3 - wide, with text aside */}
          <div className="house-card col-span-12 grid grid-cols-12 gap-6 lg:gap-8 mt-6">
            <div className="col-span-12 md:col-span-4 lg:col-span-3 flex flex-col justify-end">
              <span className="font-mono text-[10px] tracking-widest text-forest/45 uppercase">{HOUSES[2].num} / {t("houses.cards.c.tag")}</span>
              <h3 className="font-display text-3xl lg:text-5xl mt-1 mb-3">{t("houses.cards.c.title")}</h3>
              <p className="text-forest/70 text-sm leading-relaxed">{t("houses.cards.c.desc")}</p>
              <Link href={`/cabins/${HOUSES[2].slug}`} className="mt-6 self-start eyebrow text-forest/65 hover:text-forest transition-colors inline-flex items-center gap-2">
                {t("houses.explore")} →
              </Link>
            </div>
            <Link href={`/cabins/${HOUSES[2].slug}`} className="editorial-card group col-span-12 md:col-span-8 lg:col-span-9 aspect-[16/9]">
              <img src={pickImage("house-c", 0, "large")} alt={t("houses.cards.c.title")} className="w-full h-full object-cover" />
              <div className="meta-overlay text-cream">
                <div className="flex items-end justify-between">
                  <span className="eyebrow text-cream/85">{t("houses.from")} {HOUSES[2].from}</span>
                  <span className="eyebrow text-cream/65 group-hover:text-cream transition-colors">{t("houses.explore")} →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

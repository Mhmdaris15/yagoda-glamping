"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useT } from "@/lib/i18n";
import { pickImage } from "@/lib/images";
import SplitText from "@/components/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const { t } = useT();
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".hero-bg", {
        yPercent: 25,
        ease: "none",
        scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-eyebrow", { y: -20, opacity: 0.4, scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: 0.5 } });
    }, root);
    return () => ctx.revert();
  }, []);

  const bg = pickImage("territory", 0, "large");
  const inset1 = pickImage("territory", 5, "default");
  const inset2 = pickImage("banya", 0, "default");

  return (
    <section ref={root} className="hero-section relative h-[100vh] min-h-[760px] w-full overflow-hidden bg-forest-deep text-cream">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={bg}
          alt=""
          className="hero-bg absolute inset-0 w-full h-[120%] object-cover will-change-transform"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Top eyebrow */}
      <div className="hero-eyebrow absolute top-32 left-0 right-0 z-10 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <span className="eyebrow-mono text-cream/65">— {t("hero.eyebrow")}</span>
          <span className="hidden md:block eyebrow-mono text-cream/55">59.948°N · 31.038°E</span>
        </div>
      </div>

      {/* Title */}
      <div className="relative z-10 h-full flex flex-col justify-end px-6 lg:px-10 pb-20 lg:pb-28">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-9">
              <h1 className="font-display text-[clamp(3.4rem,9vw,9.5rem)] leading-[0.92] text-cream tracking-[-0.025em] text-shadow">
                <SplitText text={t("hero.titleA")} as="span" className="block" />
                <SplitText text={t("hero.titleB")} as="span" className="block italic font-light text-cream/85" delay={120} />
                <SplitText text={t("hero.titleC")} as="span" className="block" delay={260} />
              </h1>
            </div>
            <div className="col-span-12 lg:col-span-3 lg:flex lg:justify-end lg:items-end">
              <div className="hidden lg:flex flex-col gap-4 max-w-[280px]">
                <div className="grid grid-cols-2 gap-2">
                  <div className="aspect-[3/4] overflow-hidden rounded-sm">
                    <img src={inset1} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-[3/4] overflow-hidden rounded-sm mt-6">
                    <img src={inset2} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-14 grid grid-cols-12 gap-6 items-end">
            <p className="col-span-12 lg:col-span-5 text-cream/85 text-base lg:text-lg leading-relaxed text-shadow-sm max-w-md">
              {t("hero.subtitle")}
            </p>
            <div className="col-span-12 lg:col-span-7 flex items-center justify-between gap-4">
              <a href="#stay" className="btn-pill btn-on-dark">
                {t("nav.stay")}
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="#booking"
                className="btn-pill bg-cream text-forest hover:bg-sand-warm"
              >
                {t("nav.booking")}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-cream/55">
        <span className="eyebrow-mono">{t("hero.scroll")}</span>
        <span className="block w-px h-10 bg-gradient-to-b from-cream/55 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

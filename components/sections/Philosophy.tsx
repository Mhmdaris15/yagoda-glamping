"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useT } from "@/lib/i18n";
import { pickImage } from "@/lib/images";
import SplitText from "@/components/SplitText";
import Reveal from "@/components/Reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Philosophy() {
  const { t } = useT();
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".phil-img", {
        scale: 1.12,
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const img = pickImage("territory", 12, "large");

  return (
    <section ref={root} className="relative bg-cream text-forest min-h-screen grid grid-cols-12 items-stretch">
      {/* Left dark canvas */}
      <div className="col-span-12 lg:col-span-7 bg-forest text-cream relative px-6 lg:px-16 py-24 lg:py-32 grain">
        <div className="max-w-[640px] relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="section-divider" />
            <span className="eyebrow-mono text-cream/55">{t("philosophy.eyebrow")} · 01</span>
          </div>
          <h2 className="font-display text-[clamp(2.4rem,5vw,4.6rem)] leading-[1.02] tracking-tight mb-12">
            <SplitText text={t("philosophy.title")} className="block" />
            <SplitText text={t("philosophy.titleAccent")} className="block italic text-cream/70" delay={140} />
          </h2>
          <Reveal childStagger>
            <p className="text-cream/85 text-lg lg:text-xl leading-relaxed mb-7 max-w-md">
              {t("philosophy.lead")}
            </p>
            <p className="text-cream/55 text-base leading-relaxed max-w-md">
              {t("philosophy.body")}
            </p>
          </Reveal>
        </div>
        {/* Decorative numeral */}
        <div className="absolute right-6 lg:right-12 top-12 lg:top-16 numeral-xxl text-cream/[0.06] pointer-events-none select-none">
          01
        </div>
      </div>

      {/* Right image */}
      <div className="col-span-12 lg:col-span-5 relative overflow-hidden min-h-[60vh] lg:min-h-[100vh]">
        <img
          src={img}
          alt=""
          className="phil-img absolute inset-0 w-full h-[110%] object-cover will-change-transform"
        />
        <div className="absolute bottom-8 left-8 right-8 text-cream eyebrow-mono">
          <span className="bg-forest-deep/65 backdrop-blur-sm px-3 py-1.5">
            {t("contacts.address")}
          </span>
        </div>
      </div>
    </section>
  );
}

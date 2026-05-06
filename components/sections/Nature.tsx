"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useT } from "@/lib/i18n";
import { pickImage } from "@/lib/images";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Nature() {
  const { t } = useT();
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nature-card", {
        y: 60,
        opacity: 0,
        scale: 0.96,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 70%", toggleActions: "play none none none" },
      });
      gsap.to(".nature-bg", {
        scale: 1.12,
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative h-[110vh] min-h-[760px] w-full flex items-center overflow-hidden bg-forest-deep grain">
      <div className="absolute inset-0">
        <img
          src={pickImage("territory", 25, "large")}
          alt=""
          className="nature-bg w-full h-full object-cover will-change-transform"
        />
        <div className="absolute inset-0 bg-forest-deep/35" />
      </div>

      {/* Right floating card */}
      <div className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 nature-card max-w-sm p-10 lg:p-12 bg-forest-deep/85 backdrop-blur-md border border-cream/10 text-cream">
        <div className="flex items-center gap-3 mb-7">
          <span className="section-divider" />
          <span className="eyebrow-mono text-cream/65">{t("nature.eyebrow")} · 04</span>
        </div>
        <h3 className="font-display text-3xl lg:text-4xl leading-tight mb-4">{t("nature.title")}</h3>
        <p className="text-cream/65 text-sm leading-relaxed mb-10">{t("nature.body")}</p>
        <div className="flex items-end gap-5 pt-6 border-t border-cream/10">
          <span className="font-display text-7xl lg:text-8xl leading-none text-cream">
            {t("nature.stat")}
          </span>
          <span className="text-cream/55 text-xs uppercase tracking-[0.28em] pb-3 leading-relaxed">
            {t("nature.statLabel")}
          </span>
        </div>
      </div>

      {/* Left small label */}
      <div className="absolute left-6 lg:left-10 bottom-10 text-cream/85 max-w-xs">
        <div className="eyebrow-mono mb-2 opacity-60">59.948°N · 31.038°E</div>
        <div className="text-base">{t("contacts.driving")}</div>
      </div>
    </section>
  );
}

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

export default function Restaurant() {
  const { t } = useT();
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".rest-img").forEach((img, i) => {
        gsap.fromTo(
          img,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: i * 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: img, start: "top 88%", toggleActions: "play none none none" },
          }
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="restaurant"
      className="relative bg-paper text-forest py-28 lg:py-36 px-6 lg:px-10 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6 mb-16 items-end">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-3 mb-7">
              <span className="section-divider" />
              <span className="eyebrow-mono text-forest/55">{t("restaurant.eyebrow")} · 05</span>
            </div>
            <h2 className="font-display text-[clamp(2.4rem,5.5vw,5rem)] leading-[1.02] tracking-tight">
              <SplitText text={t("restaurant.title")} className="block" />
              <SplitText text={t("restaurant.titleAccent")} className="block italic text-forest/65" delay={120} />
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pl-10">
            <p className="text-forest/75 text-base leading-relaxed max-w-md mb-7">
              {t("restaurant.lead")}
            </p>
            <a href="#booking" className="btn-pill btn-ghost text-[10px]">
              {t("restaurant.cta")}
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        {/* Asymmetric image trio */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          <div className="rest-img editorial-card col-span-12 md:col-span-7 aspect-[5/4]">
            <img src={pickImage("restaurant", 2, "large")} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="rest-img editorial-card col-span-12 md:col-span-5 aspect-[3/4] md:mt-16">
            <img src={pickImage("restaurant", 7, "large")} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="rest-img editorial-card col-span-12 md:col-span-5 aspect-[4/5] md:-mt-12">
            <img src={pickImage("restaurant", 14, "large")} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="rest-img editorial-card col-span-12 md:col-span-7 aspect-[16/9]">
            <img src={pickImage("restaurant", 22, "large")} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useT } from "@/lib/i18n";
import { pickImage } from "@/lib/images";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SERVICE_KEYS = ["spa", "chan", "hall", "events"] as const;

export default function Services() {
  const { t } = useT();
  const root = useRef<HTMLElement>(null);

  const services = SERVICE_KEYS.map((key, i) => ({
    key,
    name: t(`services.items.${key}.name`),
    desc: t(`services.items.${key}.desc`),
    image:
      key === "spa"
        ? pickImage("banya", 1, "large")
        : key === "chan"
        ? pickImage("banya", 8, "large")
        : key === "hall"
        ? pickImage("restaurant", 4, "large")
        : pickImage("restaurant", 12, "large"),
    index: String(i + 1).padStart(2, "0"),
  }));

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".svc-item");
      const images = gsap.utils.toArray<HTMLElement>(".svc-image");
      const descs = gsap.utils.toArray<HTMLElement>(".svc-desc");
      const total = items.length;

      const activate = (idx: number) => {
        items.forEach((el, j) => el.classList.toggle("service-active", j === idx));
        images.forEach((el, j) => gsap.to(el, { opacity: j === idx ? 1 : 0, duration: 0.6, ease: "power2.inOut" }));
        descs.forEach((el, j) => gsap.to(el, { opacity: j === idx ? 1 : 0, duration: 0.5, ease: "power2.inOut" }));
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: `+=${total * 90}vh`,
          pin: true,
          pinSpacing: true,
          scrub: 0.4,
          onUpdate: (self) => {
            const idx = Math.min(Math.floor(self.progress * total), total - 1);
            activate(idx);
          },
        },
      });
      tl.to({}, { duration: total });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative h-screen w-full grid grid-cols-12 overflow-hidden bg-forest-deep text-cream" id="services">
      {/* Image side */}
      <div className="col-span-12 lg:col-span-7 relative h-full overflow-hidden">
        {services.map((s, i) => (
          <img
            key={s.key}
            src={s.image}
            alt={s.name}
            className={`svc-image absolute inset-0 w-full h-full object-cover ${i === 0 ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/45 via-transparent to-forest-deep/40 pointer-events-none" />
        {/* Top label */}
        <div className="absolute top-8 left-8 z-10 flex items-center gap-3 text-cream/80">
          <span className="section-divider" />
          <span className="eyebrow-mono">{t("services.eyebrow")} · 02</span>
        </div>
      </div>

      {/* Text side */}
      <div className="col-span-12 lg:col-span-5 bg-forest text-cream flex flex-col justify-center px-8 lg:px-14 py-16 relative">
        <h2 className="font-display text-[clamp(2.2rem,3.6vw,3.6rem)] leading-[1.02] mb-10 tracking-tight">
          {t("services.title")}{" "}
          <span className="italic text-cream/70">{t("services.titleAccent")}</span>
        </h2>

        <div className="space-y-1 mb-10">
          {services.map((s, i) => (
            <div
              key={s.key}
              className={`svc-item service-item flex items-baseline gap-5 cursor-default ${i === 0 ? "service-active" : ""}`}
            >
              <span className="font-mono text-[10px] text-cream/35 tracking-widest pt-2">{s.index}</span>
              <h3 className="font-display text-[clamp(2rem,3.6vw,3.6rem)] leading-[1.05] service-name">
                {s.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="relative min-h-[120px] mb-10 max-w-md">
          {services.map((s, i) => (
            <p
              key={s.key}
              className={`svc-desc text-cream/65 text-base leading-relaxed ${i === 0 ? "opacity-100 relative" : "opacity-0 absolute inset-0"}`}
            >
              {s.desc}
            </p>
          ))}
        </div>

        <Link
          href="/services"
          className="self-start text-cream/60 eyebrow inline-flex items-center gap-3 hover:text-cream transition-colors"
        >
          {t("services.cta")}
          <span aria-hidden="true">→</span>
        </Link>

        {/* Decorative numeral */}
        <div className="absolute -bottom-6 right-6 numeral-xxl text-cream/[0.05] pointer-events-none select-none">
          02
        </div>
      </div>
    </section>
  );
}

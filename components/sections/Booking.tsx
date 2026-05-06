"use client";

import React from "react";
import { useT } from "@/lib/i18n";
import { pickImage } from "@/lib/images";
import SplitText from "@/components/SplitText";

export default function Booking() {
  const { t } = useT();

  return (
    <section id="booking" className="relative bg-cream text-forest py-28 lg:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-3 mb-7">
              <span className="section-divider" />
              <span className="eyebrow-mono text-forest/55">{t("booking.eyebrow")} · 07</span>
            </div>
            <h2 className="font-display text-[clamp(2.6rem,6vw,5.5rem)] leading-[0.98] tracking-tight">
              <SplitText text={t("booking.title")} className="block" />
              <SplitText text={t("booking.titleAccent")} className="block italic text-forest/55" delay={140} />
            </h2>
            <p className="text-forest/70 text-base leading-relaxed max-w-md mt-7">
              {t("booking.body")}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="tel:+79218835640"
                className="btn-pill btn-primary"
              >
                <span className="material-symbols-outlined !text-base">call</span>
                {t("booking.call")} · +7 921 883 56 40
              </a>
              <a
                href="https://wa.me/79218835640"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-ghost"
              >
                {t("booking.whatsapp")}
                <span aria-hidden>→</span>
              </a>
            </div>
            <p className="mt-7 eyebrow-mono text-forest/45">{t("booking.hours")}</p>
          </div>

          <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="editorial-card aspect-[3/4] mt-12">
              <img src={pickImage("territory", 35, "default")} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="editorial-card aspect-[3/4]">
              <img src={pickImage("banya", 14, "default")} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

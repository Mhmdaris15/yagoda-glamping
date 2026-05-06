"use client";

import React from "react";
import { useT } from "@/lib/i18n";

export default function MapSection() {
  const { t } = useT();

  return (
    <section id="contacts" className="relative bg-forest-deep text-cream py-24 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-8 mb-12 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="section-divider" />
              <span className="eyebrow-mono text-cream/55">{t("contacts.title")}</span>
            </div>
            <h2 className="font-display text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.02]">
              {t("contacts.subtitle")}
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <p className="text-cream/80 text-base leading-relaxed mb-2">
              {t("contacts.address")}
            </p>
            <p className="text-cream/55 text-sm leading-relaxed mb-3">
              {t("contacts.driving")}
            </p>
            <a
              href="tel:+79218835640"
              className="font-display text-2xl text-cream hover:text-sand-warm transition-colors"
            >
              {t("contacts.phone")}
            </a>
          </div>
        </div>
        <div className="relative w-full aspect-[16/8] overflow-hidden border border-cream/10">
          <iframe
            title="Yagoda Glamping — карта"
            src="https://yandex.com/map-widget/v1/?ll=31.038%2C59.948&mode=search&oid=1027847&ol=biz&z=14"
            className="absolute inset-0 w-full h-full grayscale-[0.6] contrast-105 invert-[0.86]"
            loading="lazy"
            allow="geolocation"
          />
        </div>
      </div>
    </section>
  );
}

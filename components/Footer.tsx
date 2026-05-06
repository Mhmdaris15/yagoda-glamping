"use client";

import React from "react";
import Link from "next/link";
import { useT } from "@/lib/i18n";
import BerryMark from "./BerryMark";

export default function Footer() {
  const { t } = useT();

  return (
    <footer
      className="relative bg-forest-deep text-cream pt-24 pb-10 px-6 lg:px-10 overflow-hidden"
      id="footer"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Top giant marker */}
        <div className="grid grid-cols-12 gap-6 mb-20 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="text-cream/45 eyebrow mb-6">{t("footer.tag")}</div>
            <h2 className="font-display text-[clamp(3rem,7vw,7rem)] leading-[0.92] text-cream tracking-tight">
              Yagoda
              <br />
              <span className="italic text-cream/65">Glamping</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex flex-col items-start lg:items-end gap-4">
            <span className="text-cream/40">
              <BerryMark size={48} />
            </span>
            <a
              href="tel:+79218835640"
              className="font-display text-3xl text-cream hover:text-sand-warm transition-colors"
            >
              +7 921 883 56 40
            </a>
            <a
              href="https://wa.me/79218835640"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/55 eyebrow hover:text-cream transition-colors"
            >
              WhatsApp →
            </a>
          </div>
        </div>

        {/* Map embed */}
        <div className="relative w-full aspect-[16/7] mb-16 overflow-hidden rounded-sm border border-cream/10">
          <iframe
            title="Yagoda Glamping — карта"
            src="https://yandex.com/map-widget/v1/?ll=31.038%2C59.948&mode=search&oid=1027847&ol=biz&z=14"
            className="absolute inset-0 w-full h-full grayscale-[0.6] contrast-105 invert-[0.84]"
            loading="lazy"
            allow="geolocation"
          />
        </div>

        {/* Columns */}
        <div className="grid grid-cols-12 gap-10 pb-12 border-b border-cream/10">
          <div className="col-span-6 md:col-span-3">
            <div className="eyebrow text-cream/45 mb-5">{t("contacts.title")}</div>
            <p className="text-cream/85 leading-relaxed">
              {t("contacts.address")}
            </p>
            <p className="text-cream/55 mt-3 text-sm">
              {t("contacts.driving")}
            </p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="eyebrow text-cream/45 mb-5">{t("nav.stay")}</div>
            <ul className="space-y-2.5 text-cream/80 text-sm">
              <li><Link href="/cabins/family-one" className="hover:text-cream transition-colors">{t("cabins.a.title")}</Link></li>
              <li><Link href="/cabins/family-two" className="hover:text-cream transition-colors">{t("cabins.b.title")}</Link></li>
              <li><Link href="/cabins/studio" className="hover:text-cream transition-colors">{t("cabins.c.title")}</Link></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="eyebrow text-cream/45 mb-5">{t("nav.services")}</div>
            <ul className="space-y-2.5 text-cream/80 text-sm">
              <li><Link href="/services#banya" className="hover:text-cream transition-colors">{t("services.items.spa.name")}</Link></li>
              <li><Link href="/services#hall" className="hover:text-cream transition-colors">{t("services.items.hall.name")}</Link></li>
              <li><Link href="/services#events" className="hover:text-cream transition-colors">{t("services.items.events.name")}</Link></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="eyebrow text-cream/45 mb-5">{t("nav.contacts")}</div>
            <div className="flex gap-3 mb-5">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/65 hover:text-cream hover:border-cream/55 transition-all"
                aria-label="VK"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.66 2 15.07 2zm3.07 14.27h-1.49c-.56 0-.74-.45-1.74-1.45-.87-.84-1.24-.95-1.46-.95-.3 0-.39.08-.39.5v1.32c0 .36-.11.57-1.06.57-1.57 0-3.31-.95-4.54-2.71C5.59 11.16 5.07 9.31 5.07 8.94c0-.21.08-.41.5-.41h1.49c.38 0 .52.17.66.57.71 2.07 1.91 3.88 2.4 3.88.18 0 .27-.08.27-.55v-2.16c-.06-.99-.59-1.07-.59-1.42 0-.17.15-.34.39-.34h2.34c.32 0 .43.17.43.55v2.91c0 .32.14.43.23.43.18 0 .33-.11.66-.44.99-1.11 1.7-2.83 1.7-2.83.09-.21.25-.4.63-.4h1.49c.45 0 .54.23.45.55-.18.85-2 3.4-2 3.4-.16.25-.21.36 0 .65.16.21.66.65 1 1.04.61.7 1.08 1.29 1.21 1.69.13.41-.07.62-.49.62z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/79218835640"
                className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/65 hover:text-cream hover:border-cream/55 transition-all"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
            <a href="tel:+79218835640" className="text-cream/85 text-sm hover:text-cream transition-colors block">
              +7 921 883 56 40
            </a>
            <a href="mailto:hello@yagoda.glamping" className="text-cream/85 text-sm hover:text-cream transition-colors block mt-1">
              hello@yagoda.glamping
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-[10.5px] uppercase tracking-[0.28em] text-cream/35">
          <p>{t("footer.rights")}</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-cream/70 transition-colors">{t("footer.legal")}</Link>
            <span className="font-mono normal-case tracking-wider">59.948°N · 31.038°E</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

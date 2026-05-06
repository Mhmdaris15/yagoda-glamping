"use client";

import React from "react";
import Link from "next/link";
import { useT } from "@/lib/i18n";
import { pickImage, entriesFor } from "@/lib/images";
import { assetPath } from "@/lib/config";
import SplitText from "@/components/SplitText";
import Reveal from "@/components/Reveal";

export default function ServicesContent() {
  const { t } = useT();
  const banyaPics = entriesFor("banya", 6, 0);
  const restaurantPics = entriesFor("restaurant", 6, 1);
  const eventsPics = entriesFor("restaurant", 4, 30);

  return (
    <main className="bg-cream text-forest">
      {/* Hero */}
      <section className="relative h-[68vh] min-h-[520px] w-full overflow-hidden bg-forest-deep">
        <img
          src={pickImage("banya", 3, "large")}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 to-transparent" />
        <div className="absolute inset-0 flex items-end px-6 lg:px-10 pb-14">
          <div className="max-w-[1400px] mx-auto w-full text-cream">
            <div className="flex items-center gap-3 mb-5 text-cream/55">
              <span className="section-divider" />
              <span className="eyebrow-mono">{t("services_page.hero.eyebrow")}</span>
            </div>
            <h1 className="font-display text-[clamp(2.6rem,7vw,6.4rem)] leading-[0.96]">
              <SplitText text={t("services_page.hero.title")} />
            </h1>
            <Link href="/" className="inline-block mt-8 eyebrow text-cream/65 hover:text-cream transition-colors">
              {t("common.back")}
            </Link>
          </div>
        </div>
      </section>

      {/* Banya */}
      <section id="banya" className="py-24 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="col-span-12 lg:col-span-5">
            <div className="flex items-center gap-3 mb-6 sticky top-28">
              <div>
                <span className="font-mono text-[10px] tracking-widest text-forest/50">01</span>
                <h2 className="font-display text-[clamp(2.2rem,4.4vw,3.8rem)] leading-tight mt-2">
                  <SplitText text={t("services_page.banya.title")} />
                </h2>
                <Reveal>
                  <p className="text-forest/75 text-base leading-relaxed mt-6 max-w-md">
                    {t("services_page.banya.body")}
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 grid grid-cols-12 gap-3">
            {banyaPics.map((entry, i) => {
              const isPortrait = entry.orientation === "portrait";
              const span = i === 0 ? "col-span-12 aspect-[16/9]"
                : i === 1 || i === 2 ? "col-span-6 aspect-square"
                : isPortrait ? "col-span-6 aspect-[3/4]"
                : "col-span-12 aspect-[16/9]";
              return (
                <div key={entry.id} className={`editorial-card hover-zoom ${span}`}>
                  <img
                    src={assetPath(`/images/banya/${entry.large}`)}
                    alt=""
                    className="w-full h-full object-cover"
                    loading={i < 2 ? "eager" : "lazy"}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Banquet */}
      <section id="hall" className="py-24 px-6 lg:px-10 bg-forest text-cream">
        <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="col-span-12 lg:col-span-7 grid grid-cols-12 gap-3 order-2 lg:order-1">
            {restaurantPics.map((entry, i) => {
              const isPortrait = entry.orientation === "portrait";
              const span = i === 0 ? "col-span-12 aspect-[16/9]"
                : isPortrait ? "col-span-6 aspect-[3/4]"
                : i % 2 === 0 ? "col-span-6 aspect-square"
                : "col-span-12 aspect-[16/9]";
              return (
                <div key={entry.id} className={`editorial-card hover-zoom ${span}`}>
                  <img
                    src={assetPath(`/images/restaurant/${entry.large}`)}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
          <div className="col-span-12 lg:col-span-5 order-1 lg:order-2">
            <div className="sticky top-28">
              <span className="font-mono text-[10px] tracking-widest text-cream/50">02</span>
              <h2 className="font-display text-[clamp(2.2rem,4.4vw,3.8rem)] leading-tight mt-2 text-cream">
                <SplitText text={t("services_page.hall.title")} />
              </h2>
              <Reveal>
                <p className="text-cream/75 text-base leading-relaxed mt-6 max-w-md">
                  {t("services_page.hall.body")}
                </p>
              </Reveal>
              <a href="/#booking" className="btn-pill btn-on-dark mt-10">
                {t("nav.booking")} →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-24 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="col-span-12 lg:col-span-5">
            <div className="sticky top-28">
              <span className="font-mono text-[10px] tracking-widest text-forest/50">03</span>
              <h2 className="font-display text-[clamp(2.2rem,4.4vw,3.8rem)] leading-tight mt-2">
                <SplitText text={t("services_page.events.title")} />
              </h2>
              <Reveal>
                <p className="text-forest/75 text-base leading-relaxed mt-6 max-w-md">
                  {t("services_page.events.body")}
                </p>
              </Reveal>
              <a href="/#booking" className="btn-pill btn-ghost mt-10">
                {t("nav.booking")} →
              </a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 grid grid-cols-12 gap-3">
            {eventsPics.map((entry, i) => {
              const isPortrait = entry.orientation === "portrait";
              const span = isPortrait ? "col-span-6 aspect-[3/4]" : "col-span-6 aspect-[4/3]";
              return (
                <div key={entry.id} className={`editorial-card hover-zoom ${span}`}>
                  <img
                    src={assetPath(`/images/restaurant/${entry.large}`)}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useT, useLang } from "@/lib/i18n";
import BerryMark from "./BerryMark";

export default function NavBar() {
  const { t } = useT();
  const { lang, setLang } = useLang();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full px-6 lg:px-10 transition-all duration-700 ${
        scrolled ? "py-3 bg-forest/92 backdrop-blur-xl" : "py-5 bg-transparent"
      }`}
      id="main-nav"
    >
      {/* Top scrim — keeps the nav legible over bright photos */}
      {!scrolled && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-forest-deep/65 to-transparent" />
      )}
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-cream/85 group-hover:text-cream transition-colors">
            <BerryMark size={26} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[22px] tracking-[0.18em] uppercase text-cream font-semibold">
              Yagoda
            </span>
            <span className="text-[8.5px] tracking-[0.42em] uppercase text-cream/55 mt-1">
              {lang === "ru" ? "Глэмпинг · Шлиссельбург" : "Glamping · Shlisselburg"}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-9 text-cream/85 eyebrow">
          <Link href="/#stay" className="hover:text-cream transition-colors duration-300 nav-link">
            {t("nav.stay")}
          </Link>
          <Link href="/services" className="hover:text-cream transition-colors duration-300">
            {t("nav.services")}
          </Link>
          <Link href="/#restaurant" className="hover:text-cream transition-colors duration-300">
            {t("nav.restaurant")}
          </Link>
          <Link href="/#contacts" className="hover:text-cream transition-colors duration-300">
            {t("nav.contacts")}
          </Link>
        </nav>

        {/* Right cluster */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Lang switch */}
          <div className="flex items-center gap-1 text-[11px] tracking-[0.18em] uppercase text-cream/70 font-medium">
            <button
              onClick={() => setLang("ru")}
              className={`px-1.5 py-1 transition-colors ${lang === "ru" ? "text-cream" : "hover:text-cream/90"}`}
              aria-label="Русский"
            >
              RU
            </button>
            <span className="text-cream/30">·</span>
            <button
              onClick={() => setLang("en")}
              className={`px-1.5 py-1 transition-colors ${lang === "en" ? "text-cream" : "hover:text-cream/90"}`}
              aria-label="English"
            >
              EN
            </button>
          </div>

          {/* Phone */}
          <a
            href="tel:+79218835640"
            className="text-cream font-medium text-[13px] tracking-wide hover:text-sand-warm transition-colors hidden xl:block"
          >
            +7 921 883 56 40
          </a>

          <Link
            href="/#booking"
            className="btn-pill btn-on-dark text-[10px]"
          >
            {t("nav.booking")}
          </Link>
        </div>

        {/* Mobile button */}
        <button
          className="lg:hidden text-cream p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={t("nav.menu")}
        >
          <span className="material-symbols-outlined text-2xl">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-forest/97 backdrop-blur-xl border-t border-cream/10 py-8 px-6">
          <nav className="flex flex-col gap-6 text-cream eyebrow">
            <Link href="/#stay" onClick={() => setMenuOpen(false)} className="py-1.5 hover:text-sand-warm transition-colors">
              {t("nav.stay")}
            </Link>
            <Link href="/services" onClick={() => setMenuOpen(false)} className="py-1.5 hover:text-sand-warm transition-colors">
              {t("nav.services")}
            </Link>
            <Link href="/#restaurant" onClick={() => setMenuOpen(false)} className="py-1.5 hover:text-sand-warm transition-colors">
              {t("nav.restaurant")}
            </Link>
            <Link href="/#contacts" onClick={() => setMenuOpen(false)} className="py-1.5 hover:text-sand-warm transition-colors">
              {t("nav.contacts")}
            </Link>
            <Link href="/#booking" onClick={() => setMenuOpen(false)} className="py-1.5 hover:text-sand-warm transition-colors">
              {t("nav.booking")}
            </Link>
            <hr className="border-cream/10 my-2" />
            <a href="tel:+79218835640" className="text-sand-warm text-base normal-case tracking-normal font-display">
              +7 921 883 56 40
            </a>
            <div className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase mt-1">
              <button
                onClick={() => setLang("ru")}
                className={lang === "ru" ? "text-cream" : "text-cream/50"}
              >
                Русский
              </button>
              <span className="text-cream/30">·</span>
              <button
                onClick={() => setLang("en")}
                className={lang === "en" ? "text-cream" : "text-cream/50"}
              >
                English
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

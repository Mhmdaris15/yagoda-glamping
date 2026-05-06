"use client";

import React from "react";
import { useT } from "@/lib/i18n";
import Marquee from "@/components/Marquee";
import BerryMark from "@/components/BerryMark";

export default function MarqueeStrip() {
  const { tList } = useT();
  const items = tList("marquee.items");

  return (
    <section className="bg-forest-deep text-cream py-7 border-y border-cream/10">
      <Marquee
        items={items.length ? items : ["Yagoda Glamping"]}
        className="font-display text-3xl md:text-4xl tracking-tight"
        separator={
          <span className="mx-10 inline-flex items-center text-berry/85">
            <BerryMark size={22} />
          </span>
        }
      />
    </section>
  );
}

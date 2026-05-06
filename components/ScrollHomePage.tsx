"use client";

import React from "react";
import Hero from "./sections/Hero";
import MarqueeStrip from "./sections/MarqueeStrip";
import Philosophy from "./sections/Philosophy";
import Services from "./sections/Services";
import Houses from "./sections/Houses";
import Nature from "./sections/Nature";
import Restaurant from "./sections/Restaurant";
import Territory from "./sections/Territory";
import Booking from "./sections/Booking";

export default function ScrollHomePage() {
  return (
    <main className="scroll-container">
      <Hero />
      <MarqueeStrip />
      <Philosophy />
      <Services />
      <Houses />
      <Nature />
      <Restaurant />
      <Territory />
      <Booking />
    </main>
  );
}

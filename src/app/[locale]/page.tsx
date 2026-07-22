"use client";

import HeroSection from "@/components/hero-section";
import SectionGhana from "@/components/sections/section-ghana";
import SectionLidar from "@/components/sections/section-lidar";
import SectionGeology from "@/components/sections/section-geology";
import SectionResource from "@/components/sections/section-resource";
import SectionMining from "@/components/sections/section-mining";
import SectionProcessing from "@/components/sections/section-processing";
import SectionGold from "@/components/sections/section-gold";
import SectionCorporate from "@/components/sections/section-corporate";
import SectionContact from "@/components/sections/section-contact";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SectionGhana />
      <SectionLidar />
      <SectionGeology />
      <SectionResource />
      <SectionMining />
      <SectionProcessing />
      <SectionGold />
      <SectionCorporate />
      <SectionContact />
    </>
  );
}

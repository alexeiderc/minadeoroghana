"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/hero-section";
import SectionGhana from "@/components/sections/section-ghana";

const SectionLidar = dynamic(() => import("@/components/sections/section-lidar"), { ssr: false });
const SectionGeology = dynamic(() => import("@/components/sections/section-geology"), { ssr: false });
const SectionResource = dynamic(() => import("@/components/sections/section-resource"), { ssr: false });
const SectionMining = dynamic(() => import("@/components/sections/section-mining"), { ssr: false });
const SectionProcessing = dynamic(() => import("@/components/sections/section-processing"), { ssr: false });
const SectionGold = dynamic(() => import("@/components/sections/section-gold"), { ssr: false });
const SectionCorporate = dynamic(() => import("@/components/sections/section-corporate"), { ssr: false });
const SectionContact = dynamic(() => import("@/components/sections/section-contact"), { ssr: false });

export default function HomePage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && (hash.includes("invite_token") || hash.includes("recovery_token") || hash.includes("confirmation_token"))) {
      window.location.replace("/admin" + hash);
    }
  }, []);

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

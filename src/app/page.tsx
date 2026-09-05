"use client";

import React, { useState } from "react";
import { Hero } from "@/components/sections/Hero";
import { HeroCentered } from "@/components/sections/HeroCentered";
import { LogoWall } from "@/components/sections/LogoWall";
import { EditorialCanvasSection } from "@/components/sections/EditorialCanvasSection";
import { ScrollMetricsStorySection } from "@/components/sections/ScrollMetricsStorySection";
import { PilotProgramSection } from "@/components/sections/PilotProgramSection";
import { LeadershipCardsSection } from "@/components/sections/LeadershipCardsSection";
import { CaseStoriesSection } from "@/components/sections/CaseStoriesSection";
import { ContactSplitSection } from "@/components/sections/ContactSplitSection";
import { VersionToggle } from "@/components/ui/VersionToggle";

export default function HomePage() {
  const [version, setVersion] = useState<1 | 2>(2); // Default to V2 (New Centered Design)

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#0A0A0A] text-white">
      {/* 1 · Hero depending on Selected Version */}
      {version === 1 ? (
        <>
          {/* V1: Editorial Left-Aligned Hero */}
          <Hero />
          {/* V1: Independent Logo Wall Grid */}
          <LogoWall />
        </>
      ) : (
        <>
          {/* V2: Centered Minimal Statement Hero with Inbuilt Logos */}
          <HeroCentered />
        </>
      )}

      {/* 2 · Manifest & Metodik — Master Bergcanvas i schweizisk arkitektur med scroll-dimmer */}
      <EditorialCanvasSection />

      {/* 3 · Dokumenterade Kundcase — 2x2x2 Grid (AVEVA, Monster, IDNet, Wall to Wall, Allt om Juridik, NordTech) */}
      <CaseStoriesSection />

      {/* 4 · Pilotmodellen — Den nya vita sektionen med lila 3D-glasfiber och 3-månadersavtalet */}
      <PilotProgramSection />

      {/* 5 · Ledning & Team — NURA-arkitektur med Pontus Bredal-Hansen, Joakim Ström och Malin Berlin */}
      <LeadershipCardsSection />

      {/* 6 · Sifferberättelsen — Interaktiv Storytelling med siffror och dynamiska teser */}
      <ScrollMetricsStorySection />

      {/* 7 · Kontaktytan — Split Conversion Card från skissen */}
      <ContactSplitSection />

      {/* Discrete Floating Version Switcher on right edge for meeting presentation */}
      <VersionToggle version={version} onSelectVersion={setVersion} />
    </div>
  );
}

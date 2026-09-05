import React from "react";
import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/AboutHero";
import { CompanyStory } from "@/components/sections/CompanyStory";
import { CoreValues } from "@/components/sections/CoreValues";
import { LeadershipGrid } from "@/components/sections/LeadershipGrid";
import { DualHubPresence } from "@/components/sections/DualHubPresence";
import { CareerTeaser } from "@/components/sections/CareerTeaser";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Om Oss & Teamet — Människorna bakom samtalen | Hard Call Sales",
  description:
    "Lär känna Hard Call Sales. Vi kombinerar världsledande AI-teknologi och LinkedClient med seniora B2B-säljare från våra hubbar i Stockholm och Sliema, Malta.",
  openGraph: {
    title: "Om Oss — Hard Call Sales",
    description:
      "Vi bygger framtidens B2B-försäljning. Siffror före adjektiv, 100 % transparens och hubbar i Stockholm & Malta.",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* 1. Hero Section */}
      <AboutHero />

      {/* 2. Company Story & Mission (Traditional to Hybrid AI Outreach) */}
      <CompanyStory />

      {/* 3. Core Values (4 Pillars: Resultat, Transparens, Precision, Partnerskap) */}
      <CoreValues />

      {/* 4. Leadership & Team Grid with Detailed Profiles & LinkedIn Links */}
      <LeadershipGrid />

      {/* 5. Dual Hub Presence (Stockholm HQ & Sliema Malta Hub) */}
      <DualHubPresence />

      {/* 6. Career Teaser (Link to /jobba-hos-oss) */}
      <CareerTeaser />

      {/* 7. High-Conversion Final CTA Banner */}
      <CtaBanner
        eyebrow="Redo att lära känna oss närmare?"
        title="Lär känna oss över ett förutsättningslöst möte"
        subtitle="Vi visar hur vår pilotmodell fungerar i praktiken och presenterar en analys av er marknadspotential. 20 minuter, inga förpliktelser."
        buttonLabel="Boka ett introduktionsmöte"
        buttonHref="/boka-mote"
      />
    </div>
  );
}

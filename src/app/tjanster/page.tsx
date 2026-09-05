import React from "react";
import type { Metadata } from "next";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { ServicesDeepDive } from "@/components/sections/ServicesDeepDive";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { PilotTimeline } from "@/components/sections/PilotTimeline";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Våra Säljtjänster — Mötesbokning B2B & Leadgenerering | Hard Call Sales",
  description:
    "Sex beprövade sätt vi fyller er pipeline med kvalificerade säljmöten. Från AI-prospektering och LinkedIn-sekvenser till seniora mötesbokare och CRM-integration.",
  openGraph: {
    title: "Våra Säljtjänster — Hard Call Sales",
    description:
      "Mötesbokning med rätt beslutsfattare. 3-månaders pilotmodell, 10–100 möten per månad, ingen bindningstid.",
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* 1. Hero Section */}
      <ServicesHero />

      {/* 2. Comprehensive Deep-Dive into all 6 Core Services */}
      <ServicesDeepDive />

      {/* 3. In-House SDR vs Hard Call Sales Comparison Matrix */}
      <ComparisonTable />

      {/* 4. Embedded 6-Step Pilot Timeline & Methodology */}
      <PilotTimeline />

      {/* 5. Service & Delivery FAQ Accordion */}
      <FaqAccordion
        title="Vanliga frågor om våra säljtjänster & leverans"
        subtitle="Här besvarar vi de vanligaste funderingarna kring hur en pilot fungerar, hur möten kvalificeras och vad som händer vid no-shows."
        defaultCategory="Tjänster"
        theme="dark"
      />

      {/* 6. High-Conversion Final CTA Banner */}
      <CtaBanner
        eyebrow="Redo att fylla kalendern?"
        title="Vill du se hur många möten vi kan boka i er bransch?"
        subtitle="Efter tre månaders pilot vet ni exakt vad ett samarbete genererar i pipeline och stängda affärer. Ingen långsiktig bindning under testet."
        buttonLabel="Boka ett förutsättningslöst möte"
        buttonHref="/boka-mote"
      />
    </div>
  );
}

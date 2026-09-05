import React from "react";
import type { Metadata } from "next";
import { LinkedClientHero } from "@/components/sections/LinkedClientHero";
import { AiOutreachSimulator } from "@/components/sections/AiOutreachSimulator";
import { WorkflowArchitecture } from "@/components/sections/WorkflowArchitecture";
import { LinkedClientMetrics } from "@/components/sections/LinkedClientMetrics";
import { SecurityCompliance } from "@/components/sections/SecurityCompliance";
import { RoiCalculator } from "@/components/sections/RoiCalculator";
import { LinkedClientTestimonial } from "@/components/sections/LinkedClientTestimonial";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "LinkedClient — Autonom AI-Säljagent för B2B | Hard Call Sales",
  description:
    "Världens första AI-Sales agent som kombinerar autonom AI-prospektering och hyper-personaliserad kontakt med seniora säljares telefonavslut. Certifierad partner.",
  openGraph: {
    title: "LinkedClient — Er autonoma AI-säljagent för B2B | Hard Call Sales",
    description:
      "Automatiserad prospektering mot 100M+ beslutsfattare kombinerat med telefonavslut av erfarna säljare. Boka live-demo idag.",
  },
};

export default function LinkedClientPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* 1. Hero Section with AI Badge & Dual CTAs */}
      <LinkedClientHero />

      {/* 2. Interactive Live Simulation of AI Outreach Conversation */}
      <AiOutreachSimulator />

      {/* 3. 4-Stage Workflow Architecture Diagram */}
      <WorkflowArchitecture />

      {/* 4. Key Metrics Grid (+300% Capacity, 99.4% Deliverability, 3.8x ROI, 24/7) */}
      <LinkedClientMetrics />

      {/* 5. Enterprise Security, GDPR & Compliance Section */}
      <SecurityCompliance />

      {/* 6. Interactive ROI & Meeting Calculator */}
      <RoiCalculator />

      {/* 7. Client Performance Quote & Social Proof */}
      <LinkedClientTestimonial />

      {/* 8. Final High-Impact Book Demo CTA */}
      <CtaBanner
        eyebrow="Upplev LinkedClient live"
        title="Boka en 20-minuters demonstration på er målgrupp"
        subtitle="Vi visar hur motorn identifierar beslutsfattare och bokar kvalificerade möten för er specifika produkt eller tjänst."
        buttonLabel="Boka live-demo nu"
        buttonHref="/boka-mote?service=linkedclient"
      />
    </div>
  );
}

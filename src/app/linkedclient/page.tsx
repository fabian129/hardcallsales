import React from "react";
import type { Metadata } from "next";
import { LinkedClientHero } from "@/components/sections/LinkedClientHero";
import { LinkedClientLogos } from "@/components/sections/LinkedClientLogos";

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
    <div className="flex flex-col w-full min-h-screen bg-[#000000]">
      {/* 1. Hero Section matching 1:1 target visual layout & authentic content */}
      <LinkedClientHero />

      {/* 2. Partner Logos presented cleanly and beautifully without slop */}
      <LinkedClientLogos />
    </div>
  );
}

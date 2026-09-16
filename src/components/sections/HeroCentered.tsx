"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AuraBackground } from "@/components/ui/AuraBackground";

const CLIENT_LOGOS = [
  { name: "AVEVA", label: "AVEVA" },
  { name: "Monster", label: "MONSTER" },
  { name: "IDNet", label: "IDNET" },
  { name: "Wall to Wall", label: "WALL TO WALL GROUP" },
  { name: "Allt om Juridik", label: "ALLT OM JURIDIK" },
];

export const HeroCentered: React.FC = () => {
  return (
    <section className="relative h-[100dvh] min-h-[750px] w-full flex flex-col justify-between overflow-hidden bg-[#0D0D0D] text-white pt-28 pb-10 sm:pb-12 border-b border-[#1F1F1F]">
      
      {/* 1. Subtle, Calm Animated Aura Shader Background (Zero background photo) */}
      <AuraBackground projectId="yWZ2Tbe094Fsjgy9NRnD" opacity={0.35} className="scale-105 blur-[2px]" />

      {/* 2. Soft vignette gradient to anchor text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/60 via-transparent to-[#0D0D0D] pointer-events-none" />

      {/* Main Centered Content */}
      <Container size="wide" className="relative z-10 my-auto">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          {/* Top Status Notification Chip */}
          <Reveal delay={0.1} yOffset={20}>
            <div className="mb-6 sm:mb-8">
              <Link href="/#process">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.12] border border-white/15 transition-all text-xs sm:text-[13px] text-[#EDEDED] font-medium cursor-pointer">
                  <span>Pilotmodell: 3 månaders test, 10–100 möten i månaden</span>
                  <ArrowRight size={13} className="text-[#7851A9]" />
                </div>
              </Link>
            </div>
          </Reveal>

          {/* Main Headline (V1 Editorial Text) */}
          <Reveal delay={0.2} yOffset={25}>
            <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-normal tracking-tight text-white leading-[1.08] mb-6 sm:mb-8">
              Vi bygger B2B-pipelines <br className="hidden sm:block" />
              för IT- och SaaS-bolag <br className="hidden sm:block" />
              — snabbt.
            </h1>
          </Reveal>

          {/* Subheadline (Pontus Feedback: LinkedIn, e-post och telefonuppföljning) */}
          <Reveal delay={0.3} yOffset={20}>
            <p className="text-base sm:text-lg lg:text-[20px] text-white font-normal leading-[1.6] max-w-2xl mb-8 sm:mb-10 text-white/95">
              Vi kombinerar LinkedIn, e-post och personlig telefonuppföljning för att identifiera köpintention – och bokar endast möten med beslutsfattare som faktiskt visat intresse för det ni säljer.
            </p>
          </Reveal>

          {/* Dual Action Buttons */}
          <Reveal delay={0.3} yOffset={20}>
            <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
              <Button
                href="#process"
                variant="secondary"
                size="md"
                hasArrow
                className="bg-white text-black hover:bg-[#EDEDED]"
              >
                Se pilotmodellen
              </Button>
              
              <Button
                useCalModal
                variant="primary"
                size="md"
                hasArrow
                className="bg-[#7851A9] hover:bg-[#684196] text-white"
              >
                Boka möte
              </Button>
            </div>
          </Reveal>

        </div>
      </Container>

      {/* Integrated Bottom Logo Row */}
      <Container size="wide" className="relative z-10 pt-6 border-t border-white/[0.06]">
        <Reveal delay={0.4} yOffset={15}>
          <div className="flex flex-wrap items-center justify-around sm:justify-between gap-6 opacity-60 hover:opacity-100 transition-opacity">
            {CLIENT_LOGOS.map((client, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#A8A8A8] uppercase">
                <span className="w-2 h-2 rounded-full border border-white/40 inline-block" />
                <span>{client.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

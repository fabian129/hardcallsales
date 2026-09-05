"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

import { Reveal } from "@/components/ui/Reveal";

export const Hero: React.FC = () => {
  const scrollToNext = () => {
    const el = document.getElementById("logovagg");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[100dvh] min-h-[720px] w-full flex flex-col justify-between overflow-hidden bg-[#0A0A0A] text-white pt-24 pb-8 lg:pt-28 lg:pb-12 border-b border-[#222222]">
      {/* Crisp Atmospheric Dark Scrim (No Purple Glow) */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/60 pointer-events-none" />

      <Container size="wide" className="relative z-10 my-auto">
        <div className="max-w-4xl flex flex-col items-start text-left">
          
          {/* Top Status Notification Chip */}
          <Reveal delay={0.1} yOffset={20}>
            <div className="mb-6 sm:mb-8">
              <Link href="/boka-mote">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.12] border border-white/15 transition-all text-xs sm:text-[13px] text-[#EDEDED] font-medium cursor-pointer">
                  <span>Pilotmodell: 3 månaders test, 10–100 möten i månaden</span>
                  <ArrowRight size={13} className="text-[#7851A9]" />
                </div>
              </Link>
            </div>
          </Reveal>

          {/* Swedish Main Headline (Pure White, 64px, No Gradient) */}
          <Reveal delay={0.2} yOffset={30}>
            <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-normal tracking-tight text-white leading-[1.08] mb-6 sm:mb-8">
              Vi bygger B2B-pipelines <br />
              för IT- och SaaS-bolag <br />
              — snabbt.
            </h1>
          </Reveal>

          {/* Subheadline */}
          <Reveal delay={0.3} yOffset={25}>
            <p className="text-base sm:text-lg lg:text-xl text-[#B0B0B0] font-normal leading-relaxed max-w-2xl mb-10 sm:mb-12">
              Vi når beslutsfattare oavsett bransch och geografi — 100+ miljoner via LinkedIn. Du slipper bygga en egen SDR-funktion.
            </p>
          </Reveal>

          {/* Dual Action CTA Row */}
          <Reveal delay={0.4} yOffset={20}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Button
                href="/boka-mote"
                variant="primary"
                size="lg"
                hasArrow
                className="bg-[#7851A9] hover:bg-[#684196] text-white px-8 py-4 font-semibold text-base"
              >
                Boka ett möte
              </Button>
              
              <Button
                href="/linkedclient"
                variant="secondary"
                size="lg"
                className="bg-white hover:bg-[#EDEDED] text-[#0A0A0A] px-8 py-4 font-semibold text-base border-none"
              >
                Se LinkedClient
              </Button>
            </div>
          </Reveal>

        </div>
      </Container>

      {/* Bottom Scroll Prompt */}
      <Container size="wide" className="relative z-10 pt-4 hidden md:block">
        <Reveal delay={0.5} yOffset={15}>
          <div className="flex justify-end items-center">
            <button
              onClick={scrollToNext}
              aria-label="Scrolla ner"
              className="group flex items-center gap-3 text-xs font-medium text-[#A8A8A8] hover:text-white transition-colors cursor-pointer"
            >
              <span>Så funkar det</span>
              <div className="w-9 h-9 rounded-full border border-white/20 group-hover:border-white/40 flex items-center justify-center transition-all bg-white/[0.04]">
                <ArrowDown size={14} className="text-[#EDEDED] group-hover:translate-y-0.5 transition-transform" />
              </div>
            </button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const STATS = [
  { value: "10–100", label: "möten per månad" },
  { value: "6", label: "steg i piloten" },
  { value: "3", label: "månader till utvärdering" },
  { value: "0", label: "egen SDR-funktion" },
];

export const MetricsStatement: React.FC = () => {
  return (
    <section className="w-full bg-[#0A0A0A] text-white py-24 sm:py-32 border-b border-[#1C1C1C] relative overflow-hidden">
      <Container size="wide">
        <div className="max-w-6xl mx-auto">
          
          {/* Top Split: Headline vs Paragraphs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20 sm:mb-28">
            
            {/* Left Column: Eyebrow + Headline */}
            <div className="lg:col-span-5">
              <Reveal delay={0.1} yOffset={20}>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#7851A9] block mb-4">
                  OM OSS
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-white leading-[1.15]">
                  Pipeline byggd av människor — driven av agenter
                </h2>
              </Reveal>
            </div>

            {/* Right Column: Explanatory Copy */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-sm sm:text-base text-[#A8A8A8] font-normal leading-relaxed">
              <Reveal delay={0.2} yOffset={20}>
                <p>
                  Vi bokar möten på riktigt: research, kampanjer i mejl och LinkedIn, telefonuppföljning och en AI-sales agent som håller tråden mellan samtalen.
                </p>
                <p className="mt-4">
                  Piloten löper i tre månader och sex steg. Du får möten i kalendern, vi får bevis — och du behöver aldrig bygga en egen SDR-funktion för att komma igång.
                </p>
              </Reveal>
            </div>

          </div>

          {/* 4 Large Metric Numbers Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 pt-12 border-t border-white/[0.08]">
            {STATS.map((stat, idx) => (
              <Reveal key={idx} delay={0.1 * (idx + 1)} yOffset={25}>
                <div className="flex flex-col">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight mb-2 font-sans">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-[13px] text-[#8E8E8E] font-normal">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};

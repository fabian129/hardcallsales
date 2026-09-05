import React from "react";
import { History, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { COMPANY_STORY } from "@/data/team";

export const CompanyStory: React.FC = () => {
  return (
    <section className="w-full bg-[#0A0A0A] text-white py-20 sm:py-28 border-b border-[#2B2B2B] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[500px] h-[300px] bg-[#7851A9]/8 blur-[130px] pointer-events-none rounded-full" />

      <Container size="wide" className="relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <Badge variant="purple-soft" size="md" className="mb-4">
            <History size={14} className="text-[#7851A9] mr-1.5" />
            <span>Vår Historia & Mission</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight mb-6">
            {COMPANY_STORY.headline}
          </h2>
          <p className="text-base sm:text-lg text-[#EDEDED] font-medium leading-relaxed">
            {COMPANY_STORY.intro}
          </p>
        </div>

        {/* 2-Column Story Narrative & Milestone Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start mb-16">
          
          {/* Narrative Text (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-[#A8A8A8] leading-relaxed">
            {COMPANY_STORY.paragraphs.map((p, idx) => (
              <p key={idx}>
                {p}
              </p>
            ))}

            {/* Core Philosophy Callout */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-white/[0.04] to-[#7851A9]/10 border border-[#7851A9]/30 mt-8">
              <div className="flex items-center gap-2 text-white font-bold text-base mb-2">
                <Zap size={18} className="text-[#7851A9]" />
                <span>Vår kärnfilosofi: Människa + Maskin</span>
              </div>
              <p className="text-xs sm:text-sm text-[#EDEDED] leading-relaxed">
                Vi tror inte på att ersätta säljare med robotar, och inte heller på att låta säljare slösa 80 % av sin tid på manuell listbyggnad. Framtiden tillhör bolag som kombinerar AI-precision i toppen av tratten med genuin mänsklig dialog i avslutet.
              </p>
            </div>
          </div>

          {/* Milestone Timeline (Right 5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#111111]/90 border border-[#2B2B2B] p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-bold text-white tracking-tight pb-4 border-b border-white/10 flex items-center justify-between">
              <span>Vår utveckling</span>
              <span className="text-xs font-mono text-[#7851A9]">2020 — 2026</span>
            </h3>

            <div className="space-y-6">
              {COMPANY_STORY.milestones.map((m, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-[#7851A9]/40 group hover:border-[#7851A9] transition-colors">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[#7851A9] border-2 border-[#0A0A0A]" />
                  <div className="text-xs font-mono text-[#9B7BC7] font-semibold mb-1">
                    {m.year}
                  </div>
                  <div className="text-sm font-bold text-white mb-1">
                    {m.title}
                  </div>
                  <div className="text-xs text-[#A8A8A8] leading-relaxed">
                    {m.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
};

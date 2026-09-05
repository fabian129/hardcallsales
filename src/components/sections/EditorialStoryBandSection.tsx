"use client";

import React from "react";

export const EditorialStoryBandSection: React.FC = () => {
  return (
    <section id="tjansteband" className="w-full flex flex-col">
      {/* ── TOP HERO BANNER (Dark Photographic Section) ── */}
      <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[480px] bg-[#0A0A0A] overflow-hidden">
        {/* Background Image: Dark modern tech office/workstations with natural depth */}
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
          alt="Hard Call Sales Verksamhet"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-45 brightness-[0.7] contrast-[1.1]"
        />

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80 pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 max-w-[1440px] mx-auto h-full px-6 sm:px-12 lg:px-16 flex flex-col justify-center py-10 sm:py-14">
          
          {/* Level 1 (Top): + TJÄNSTER Tag */}
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/90">
              + TJÄNSTER
            </span>
          </div>

          {/* Separator Hairline across full container width underneath tag */}
          <div className="w-full h-[1px] bg-white/15 mt-4 mb-8 sm:mb-12" />

          {/* Level 2 (Under line): Parallel Headline (Left) & Subtitle (Right) */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            {/* Left: Huge Display Headline */}
            <h2 className="text-4xl sm:text-6xl lg:text-[76px] font-semibold text-white tracking-[-0.03em] leading-none">
              Våra tjänster
            </h2>

            {/* Right: Subtitle — strictly left-aligned over 3 clean lines */}
            <p className="max-w-md text-xs sm:text-[13px] text-white/80 leading-relaxed font-normal text-left">
              Hard Call Sales kopplar ihop IT- och SaaS-bolag med rätt beslutsfattare — genom bokade möten, uthållig uppföljning och ett flöde som håller över tid.
            </p>
          </div>
        </div>
      </div>

      {/* ── BOTTOM EDITORIAL NARRATIVE (Crisp Pure White Section) ── */}
      <div className="w-full bg-white text-[#111111] py-20 sm:py-28 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            
            {/* Left Column: + VÅRT FOKUS */}
            <div className="lg:col-span-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#777777] block sticky top-28">
                + VÅRT FOKUS
              </span>
            </div>

            {/* Right Column: Statement & 2-Column Clean Detail Block */}
            <div className="lg:col-span-9 flex flex-col">
              {/* Primary Manifesto Statement */}
              <h3 className="text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] font-normal text-[#111111] tracking-[-0.025em] leading-[1.25] mb-12 sm:mb-16 max-w-4xl">
                Hard Call Sales bygger mötesflödet åt IT- och SaaS-bolag genom mötesbokning, mejl- och LinkedIn-kampanjer och envis telefonuppföljning, så att era säljare möter rätt beslutsfattare i stället för att jaga listor. Allt börjar med en pilot på tre månader.
              </h3>

              {/* Secondary 2-Column Pure Paragraphs without artificial headers and without border line */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mt-4 sm:mt-8">
                {/* Col 1: Räckvidd & Nätverk */}
                <p className="text-xs sm:text-[13.5px] text-[#555555] leading-relaxed">
                  Med tillgång till över 100 miljoner beslutsfattare globalt och 70 000+ i eget nätverk bygger vi ert LinkedIn-kapital på autopilot samtidigt som vi fyller er kalender med kvalificerade möten.
                </p>

                {/* Col 2: Erfarenhet & Metod */}
                <p className="text-xs sm:text-[13.5px] text-[#555555] leading-relaxed">
                  Våra säljare har i snitt över 10 000 timmars erfarenhet. I kombination med AI-driven segmentering ringer vi personliga samtal som kvalificerar mot genuint budget- och investeringsbehov.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

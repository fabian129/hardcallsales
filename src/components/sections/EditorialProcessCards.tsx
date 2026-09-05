"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    num: "/01",
    title: "Kartläggning & Målgrupp",
    desc: "Vi analyserar ert erbjudande, definierar exakt ICP och bygger en lista med verifierade beslutsfattare med budget.",
    bgImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
  },
  {
    num: "/02",
    title: "Kampanj & A/B-test",
    desc: "Vi testar budskap, ämnesrader och kanaler parallellt, och skalar upp det som ger högst svarsfrekvens från rätt personer.",
    bgImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
  },
  {
    num: "/03",
    title: "Bokning & Uppföljning",
    desc: "Mötena bokas direkt i era säljares kalendrar. Varje lead kvalificeras mot BANT och följs upp tills den är avgjord.",
    bgImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
  },
  {
    num: "/04",
    title: "Utvärdering & Fortsättning",
    desc: "Efter tre månader visar vi utfallet: bokade möten, kostnad per möte och en konkret plan för långsiktig tillväxt.",
    bgImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
  },
];

export const EditorialProcessCards: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="process" className="w-full bg-[#0D0D0D] text-white py-36 sm:py-48 border-b border-[#1F1F1F] relative overflow-hidden">
      {/* Subtle vertical architectural guidelines matching balanced width */}
      <div className="absolute inset-0 pointer-events-none max-w-[1500px] mx-auto grid grid-cols-4 border-x border-white/[0.03]">
        <div className="border-r border-white/[0.03] h-full" />
        <div className="border-r border-white/[0.03] h-full" />
        <div className="border-r border-white/[0.03] h-full" />
      </div>

      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* 1. Large 2-Row Dominant Headline (Top Left) */}
        <div className="mb-14 sm:mb-20">
          <Reveal delay={0.1} yOffset={20}>
            <span className="text-xs font-mono tracking-widest text-[#888888] uppercase block mb-5">
              [ PILOTMODELLEN ]
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-[76px] font-normal tracking-tight text-white leading-[1.03] max-w-4xl">
              Så bygger vi er pipeline<br className="hidden sm:inline" /> på tre månader
            </h2>
          </Reveal>
        </div>

        {/* 2. Explanatory Body Copy (Positioned on the far right, tighter gap to boxes below) */}
        <div className="flex justify-end mb-12 sm:mb-16">
          <div className="w-full max-w-xl">
            <Reveal delay={0.2} yOffset={20}>
              <p className="text-base sm:text-lg lg:text-[20px] text-white font-normal leading-[1.6]">
                Vi kombinerar personlig outreach, A/B-testade budskap och senior mötesbokning till ett strukturerat tre månaders test med 10–100 bokade möten.
              </p>
            </Reveal>
          </div>
        </div>

        {/* 4 Editorial Atmospheric Process Cards across balanced canvas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
            {STEPS.map((step, idx) => {
              const isHovered = hoveredIdx === idx;
              return (
                <Reveal key={idx} delay={0.1 * (idx + 1)} yOffset={25}>
                  <div
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="relative h-[500px] sm:h-[530px] rounded-[24px] overflow-hidden flex flex-col justify-between p-3.5 border border-white/10 hover:border-white/30 transition-all duration-300 group cursor-pointer bg-[#141414]"
                  >
                    {/* Atmospheric Motion / Photo Backdrop in rich cinematic color tone */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-60 group-hover:opacity-85"
                      style={{ backgroundImage: `url('${step.bgImage}')` }}
                    />
                    {/* Subtle gradient overlay to transition smoothly into the text panel */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0D0D0D] pointer-events-none" />

                    {/* Top Content: Steg Badge */}
                    <div className="relative z-10 p-3 flex justify-between items-start">
                      <span className="text-xs font-mono text-white/90 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 shadow-md">
                        Steg 0{idx + 1}
                      </span>
                    </div>

                    {/* Bottom Frosted Card Panel (Occupies ~50% of card for prominent reading) */}
                    <div className="relative z-10 min-h-[50%] rounded-[18px] bg-[#0E0E0E]/90 backdrop-blur-xl border border-white/15 p-6 flex flex-col justify-between transition-all duration-300 shadow-2xl group-hover:bg-[#111111]/98 group-hover:border-white/30">
                      
                      {/* Thumbnail + Number */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-8 h-8 rounded-[9px] overflow-hidden border border-white/30 shadow-sm">
                          <img
                            src={step.thumb}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-xs font-mono font-medium tracking-wider text-[#CCCCCC] group-hover:text-white transition-colors">
                          {step.num}
                        </span>
                      </div>

                      {/* Title (Enlarged) */}
                      <h3 className="text-lg sm:text-[20px] font-semibold text-white tracking-tight leading-snug mb-2.5">
                        {step.title}
                      </h3>

                      {/* Description (Prominent, High Contrast Readability) */}
                      <p className="text-[13.5px] sm:text-[14px] text-[#D8D8D8] leading-relaxed group-hover:text-white transition-colors font-normal">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
    </section>
  );
};

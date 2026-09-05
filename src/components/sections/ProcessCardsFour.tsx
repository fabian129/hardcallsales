"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Kartläggning & måltavla",
    desc: "Vi går igenom er ICP, tidigare affärer och vinstmönster, och bygger en lista med rätt roller på rätt bolag.",
  },
  {
    step: "02",
    title: "Kampanj och A/B-test",
    desc: "Vi testar budskap, ämnesrader och kanaler parallellt, och skalar upp det som ger svar från rätt personer.",
  },
  {
    step: "03",
    title: "Bokning och uppföljning",
    desc: "Mötena bokas direkt i er kalender. Varje lead kvalificeras och följs upp tills den är avgjord.",
  },
  {
    step: "04",
    title: "Utvärdering & fortsättning",
    desc: "Efter tre månader visar vi utfallet: bokade möten, kostnad per möte och vad som bör fortsätta.",
  },
];

export const ProcessCardsFour: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(1); // Default on 02

  return (
    <section id="process" className="w-full bg-[#0A0A0A] text-white py-24 sm:py-36 border-b border-[#1A1A1A] relative">
      <Container size="wide">
        <div className="max-w-6xl mx-auto">
          
          {/* Top Header Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20 sm:mb-24">
            
            {/* Left Eyebrow */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#888888]">
                <span>✦</span>
                <span>Så arbetar vi</span>
              </div>
            </div>

            {/* Right Large Typographic Statement */}
            <div className="lg:col-span-9">
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-normal tracking-tight text-white leading-[1.25]">
                Vi bokar möten åt IT- och SaaS-bolag genom en pilot på tre månader — med testade budskap, tydlig process och siffror som visar vad som faktiskt fungerar.
              </h2>
            </div>

          </div>

          {/* 4 Process Cards Row with Card 02 Highlight */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            {PROCESS_STEPS.map((item, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`rounded-lg p-8 sm:p-9 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? "bg-[#111111] border border-white/40 shadow-xl min-h-[300px] z-10"
                      : "bg-[#0C0C0C] border border-white/[0.04] hover:border-white/15 min-h-[270px]"
                  }`}
                >
                  <div>
                    {/* Step Number */}
                    <span className={`text-xs font-mono block mb-8 transition-colors ${
                      isSelected ? "text-white" : "text-[#555555]"
                    }`}>
                      {item.step}
                    </span>

                    {/* Step Title */}
                    <h3 className={`text-xl font-normal tracking-tight mb-4 leading-snug transition-colors ${
                      isSelected ? "text-white" : "text-[#777777]"
                    }`}>
                      {item.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs sm:text-[13px] text-[#888888] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
};

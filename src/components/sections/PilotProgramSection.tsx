"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface Milestone {
  stepNum: string;
  timeline: string;
  title: string;
  description: string;
}

const MILESTONES: Milestone[] = [
  {
    stepNum: "01",
    timeline: "Vecka 1–2",
    title: "Målgrupp & Domänsäkring",
    description:
      "Vi kartlägger era idealkunder och kvalitetssäkrar beslutsfattare manuellt. Isolerade sändningsdomäner säkrar 100 % leveransbarhet så att era budskap når inkorgen.",
  },
  {
    stepNum: "02",
    timeline: "Vecka 3–5",
    title: "Multichannel Outreach",
    description:
      "Hypotesdriven copy A/B-testas över LinkedIn och direktmejl. Vi värmer upp intresset och identifierar vilka konton som visar tydliga köpsignaler.",
  },
  {
    stepNum: "03",
    timeline: "Vecka 6–10",
    title: "Senior Mötesbokning",
    description:
      "Våra erfarna säljare ringer upp öppnade dialoger och kvalificerar mot budget och behov. Endast relevanta möten bokas direkt i era säljares kalendrar.",
  },
  {
    stepNum: "04",
    timeline: "Vecka 11–12",
    title: "Bokslut & Datagranskning",
    description:
      "Full transparens i pipeline-värde, konverteringsgrad och ROI. Ni äger all data och alla leads — därefter avgör ni själva om vi fortsätter.",
  },
];

export const PilotProgramSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [entryProgress, setEntryProgress] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Synkroniserad ljusdimning från mörka CaseStoriesSection (börjar 35% senare, +20% till):
      // rect.top rör sig nedåt mot 0 när PilotProgramSection rullar in underifrån
      const entryDistance = windowHeight - rect.top;
      const entry = Math.min(1, Math.max(0, (entryDistance - windowHeight * 0.35) / (windowHeight * 0.28)));
      setEntryProgress(entry);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="pilot"
      className="relative w-full bg-[#FBFBFC] text-[#111111] overflow-hidden pt-36 sm:pt-44 lg:pt-52 pb-24 sm:pb-32 select-none border-b border-neutral-200/60 min-h-[140vh] flex flex-col justify-between"
    >
      {/* ── SYNCED DIMMER OVERLAY FRÅN MÖRKA KUNDCASEN (Tänds mjukt upp till #FBFBFC) ── */}
      <div
        className="absolute inset-0 bg-[#0A0A0A] pointer-events-none z-30 transition-opacity duration-75 ease-linear"
        style={{ opacity: Math.max(0, 1 - entryProgress) }}
      />

      {/* ── 1. ARCHITECTURAL GRID: Mer space mellan linjerna (4 breda kolumner som matchar stegen 1:1) ── */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full">
        <div className="border-r border-neutral-200/60 h-full hidden lg:block" />
        <div className="border-r border-neutral-200/60 h-full hidden lg:block" />
        <div className="border-r border-neutral-200/60 h-full hidden lg:block" />
        <div className="h-full hidden lg:block" />
      </div>

      {/* ── 2. AMBIENT WARM SUN GLOW ── */}
      <div className="absolute right-[18%] bottom-[12vh] w-[650px] h-[380px] rounded-full bg-amber-100/40 blur-3xl pointer-events-none select-none z-0" />

      {/* ── 3. MASSIVT BERG I BOTTEN (+5% till, majestätisk förankring precis under texten) ── */}
      <div className="absolute bottom-[-2.5vh] sm:bottom-[-3.5vh] lg:bottom-[-4.5vh] left-0 right-0 w-full h-[46vh] sm:h-[52vh] lg:h-[58vh] pointer-events-none z-10 flex justify-center items-end overflow-hidden opacity-95">
        <img
          src="/images/pilot-isolated-mountain.png"
          alt="Hard Call Sales Snömassiv"
          className="w-full max-w-[2550px] xl:max-w-[2900px] h-full object-contain object-bottom pointer-events-none scale-115 sm:scale-120"
        />
      </div>

      {/* ── HUVUDINNEHÅLL (z-20) ── */}
      <div className="relative z-20 max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 w-full flex flex-col justify-between flex-1">
        
        {/* ── TOPP: MONOLITISK RUBRIK (Helt ensam, ren och självsäker) ── */}
        <div className="w-full max-w-5xl lg:max-w-6xl mt-4 sm:mt-6 lg:mt-8 mb-20 sm:mb-24 lg:mb-28">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.08] text-[11px] font-mono tracking-widest text-neutral-600 uppercase mb-6 sm:mb-8">
            <Sparkles className="w-3 h-3 text-neutral-800" />
            <span>PILOTMODELL · 12 VECKOR UTAN BINDNINGSTID</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-[78px] xl:text-[88px] 2xl:text-[94px] font-medium text-[#111111] leading-[1.02] tracking-tight">
            <span className="block">Tolv veckor till full pipeline.</span>
            <span className="block text-neutral-400 font-normal mt-2 sm:mt-3.5">
              Inga bindningstider — ni avgör.
            </span>
          </h2>
        </div>

        {/* ── MITTEN: 4 STEG MELLAN LINJERNA SOM FÖLJER BERGETS TOPOGRAFI (Alla texter fria från berget) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 relative z-20 mb-20 sm:mb-28">
          {MILESTONES.map((m, idx) => {
            // Följer bergets kam harmoniskt: 01 ren, 02 klättrar, 03 lyfts över högsta toppen, 04 balanserar
            const offsets = [
              "lg:translate-y-2 xl:translate-y-4",
              "lg:-translate-y-4 xl:-translate-y-6",
              "lg:-translate-y-12 xl:-translate-y-16",
              "lg:translate-y-2 xl:translate-y-4",
            ];

            return (
              <div
                key={m.stepNum}
                className={`flex flex-col justify-start lg:px-8 xl:px-10 transition-transform duration-300 ${offsets[idx]} ${
                  idx === 0 ? "lg:pl-0" : ""
                } ${idx === 3 ? "lg:pr-0" : ""}`}
              >
              {/* Prick i toppen */}
              <div className="w-2 h-2 rounded-full bg-black mb-6" />

              {/* Tidslinje direkt ovanför siffran */}
              <span className="text-xs font-mono font-medium tracking-widest text-neutral-400 uppercase mb-2">
                {m.timeline}
              </span>

              {/* Svart ren siffra i mellanrummet */}
              <div className="text-5xl sm:text-6xl lg:text-7xl font-light text-black tracking-tight leading-none mb-6">
                {m.stepNum}
              </div>

              {/* Rubrik */}
              <h3 className="text-xl sm:text-2xl font-medium text-neutral-900 tracking-tight leading-snug mb-3">
                {m.title}
              </h3>

              {/* Brödtext */}
              <p className="text-base sm:text-[17px] text-neutral-700 leading-relaxed font-normal">
                {m.description}
              </p>
            </div>
            );
          })}
        </div>

        {/* ── BOTTEN: ENSAM HEROISK CTA (Gravitation & Slutdestination) ── */}
        <div className="pt-6 sm:pt-10 flex justify-center items-center relative z-20">
          <Link
            href="/boka-mote"
            className="inline-flex items-center gap-3.5 px-10 py-4 sm:px-12 sm:py-5 rounded-full bg-[#111111] text-white text-xs sm:text-sm font-medium tracking-widest uppercase hover:bg-black transition-all duration-300 shadow-[0_16px_40px_rgba(0,0,0,0.12)] hover:shadow-[0_24px_55px_rgba(0,0,0,0.22)] hover:-translate-y-1 group"
          >
            <span>BOKA ETT STRATEGISAMTAL</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};

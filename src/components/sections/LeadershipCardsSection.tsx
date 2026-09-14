"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AuraBackground } from "@/components/ui/AuraBackground";

interface LeaderCard {
  num: string;
  roleTag: string;
  name: string;
  desc: string;
  slug: string;
  avatar: string;
}

const LEADERS: LeaderCard[] = [
  {
    num: "/01",
    roleTag: "VD & Partner (Sverige)",
    name: "Malin Berlin",
    desc: "Toppsäljare med över 250 000 kr i månadsprovision. Leder det svenska kontoret och ansvarar för europeiska kundrelationer och nya samarbetsavtal.",
    slug: "malin",
    avatar: "/images/team/portrait-malin.png",
  },
  {
    num: "/02",
    roleTag: "Grundare & Partner",
    name: "Pontus Bredal-Hansen",
    desc: "Startade HCS på Malta 2017 efter att ha toppat intäktslistorna. Arkitekten bakom kampanjmetodiken, nätverksbygget och vår AI-integration.",
    slug: "pontus",
    avatar: "/images/team/portrait-pontus.png",
  },
  {
    num: "/03",
    roleTag: "Grundare & Operativ chef",
    name: "Joakim Ström",
    desc: "Startade HCS 2017. Passionerad sälj- och kulturbyggare med över 100 lästa säljböcker som leder den dagliga säljleveransen med kompromisslös energi.",
    slug: "joakim",
    avatar: "/images/team/portrait-joakim.png",
  },
  {
    num: "/04",
    roleTag: "Team Lead & Senior Mötesbokare",
    name: "Johanna Glaad",
    desc: "Leder dagliga SDR-team och onboarding med kompromisslöst fokus på show rate och hög möteskvalitet för nordiska enterprise- och SaaS-kunder.",
    slug: "johanna",
    avatar: "/images/team/portrait-johanna.png",
  },
  {
    num: "/05",
    roleTag: "Senior Mötesbokare & Key Account",
    name: "Joakim Lundin",
    desc: "Toppsäljare med mångårig vana av komplex mötesbokning mot VD och IT-chefer inom svensk tech, industri och fastighetssektorn.",
    slug: "lundin",
    avatar: "/images/team/portrait-lundin.png",
  },
  {
    num: "/06",
    roleTag: "Senior Mötesbokare & SDR",
    name: "Kevin Eriksson",
    desc: "Specialist på datadriven outreach och snabb mötesbokning mot nordiska beslutsfattare inom IT, mjukvara och industriell tech.",
    slug: "kevin",
    avatar: "/images/team/portrait-kevin.png",
  },
];

export const LeadershipCardsSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="ledning"
      className="w-full bg-[#050505] text-white pt-36 sm:pt-48 lg:pt-56 pb-52 sm:pb-64 lg:pb-80 border-b border-neutral-800/80 relative overflow-hidden select-none"
    >
      {/* ── 1. ARCHITECTURAL GRID: 4 diskreta vertikala linjer ── */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full">
        <div className="border-r border-white/[0.04] h-full hidden lg:block" />
        <div className="border-r border-white/[0.04] h-full hidden lg:block" />
        <div className="border-r border-white/[0.04] h-full hidden lg:block" />
        <div className="h-full hidden lg:block" />
      </div>

      {/* ── 2. VÄRLDSKARTANS AURA FRÅN HERON (UnicornStudio-map i lugn takt) ── */}
      <AuraBackground projectId="yWZ2Tbe094Fsjgy9NRnD" opacity={0.32} speedScale={0.25} className="scale-105 blur-[1px]" />

      {/* ── 3. MJUKA VINJETTER OCH LJUSGLÖD ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505] pointer-events-none z-10" />
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[800px] h-[350px] rounded-full bg-white/[0.02] blur-3xl pointer-events-none z-10" />

      {/* ── HUVUDINNEHÅLL (z-20) ── */}
      <div className="relative z-20 max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 w-full">
        
        {/* ── TOPP: HERO-INTRO TILL LEDNINGEN (Arkitektur, hubbar & hantverk) ── */}
        <div className="mb-20 sm:mb-28">
          {/* Eyebrow strip med hubbar och etablering */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2.5 text-[11px] font-mono tracking-widest text-neutral-300 uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>STOCKHOLM (ÖSTERMALM) · SLIEMA (12TH FLOOR, MALTA)</span>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 text-[11px] font-mono tracking-widest text-neutral-500 uppercase">
              <span>EST. 2017</span>
              <span>·</span>
              <span>10 000H+ ERFARENHET</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-16">
            <div className="max-w-4xl">
              <h2 className="text-4xl sm:text-6xl lg:text-[76px] xl:text-[84px] font-medium tracking-tight text-white leading-[1.02]">
                <span className="block">Människorna bakom</span>
                <span className="block text-neutral-400 font-normal mt-1.5 sm:mt-2.5">
                  hundratals miljoner.
                </span>
              </h2>
            </div>

            <div className="max-w-md flex flex-col gap-4">
              <p className="text-neutral-300 text-base sm:text-lg font-normal leading-relaxed">
                Från en villa på Malta 2017 till en av Nordens mest högpresterande mötesbokningsbyråer för IT och SaaS. Våra partners sitter inte på läktaren — de coachar, utvecklar metoden och leder varje uppdrag med samma kompromisslösa säljhantverk.
              </p>
              <div className="flex items-center gap-6 pt-4 border-t border-white/10 text-xs font-mono text-neutral-400">
                <div>
                  <span className="text-white font-semibold text-base sm:text-lg block">&gt;250k</span>
                  <span className="text-[10px] uppercase text-neutral-500">Toppsytt/mån</span>
                </div>
                <div className="border-l border-white/10 pl-6">
                  <span className="text-white font-semibold text-base sm:text-lg block">10 000h</span>
                  <span className="text-[10px] uppercase text-neutral-500">Snitt säljerfarenhet</span>
                </div>
                <div className="border-l border-white/10 pl-6">
                  <span className="text-white font-semibold text-base sm:text-lg block">8+ år</span>
                  <span className="text-[10px] uppercase text-neutral-500">I produktion</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── DE 6 MÖRKA KORTEN (Arkitektonisk precision) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-20">
          {LEADERS.map((leader, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <Link
                key={leader.name}
                href={`/ledning/${leader.slug}`}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group relative rounded-2xl overflow-hidden flex flex-col justify-between p-7 sm:p-8 border border-white/[0.08] bg-[#0C0C0E]/80 backdrop-blur-xl transition-all duration-500 hover:border-white/25 hover:bg-[#121215]/95 hover:-translate-y-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.85)] min-h-[460px] sm:min-h-[490px]"
              >
                {/* ── TOPP: Rolltagg + Nummer ── */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="inline-block px-3 py-1 bg-white/[0.06] backdrop-blur-md rounded-md text-[11px] font-mono tracking-wider text-neutral-300 border border-white/[0.08]">
                      {leader.roleTag}
                    </span>
                    <span className="text-xs font-mono text-neutral-500 group-hover:text-white transition-colors">
                      {leader.num}
                    </span>
                  </div>

                  {/* ── AVATAR: Cirkulärt porträtt med vit silverram ── */}
                  <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-full p-1 bg-white/[0.04] border border-white/15 group-hover:border-white/60 transition-all duration-500 shadow-md mb-6">
                    <img
                      src={leader.avatar}
                      alt={leader.name}
                      className="w-full h-full rounded-full object-cover grayscale contrast-115 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500"
                    />
                  </div>

                  {/* ── NAMN & BESKRIVNING ── */}
                  <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight mb-3 group-hover:text-white transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-neutral-400 font-normal leading-relaxed group-hover:text-neutral-300 transition-colors line-clamp-4">
                    {leader.desc}
                  </p>
                </div>

                {/* ── BOTTEN: Länkpil & CTA ── */}
                <div className="pt-5 mt-6 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors">
                  <span>Profil &amp; Kalender</span>
                  <div className="w-7 h-7 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:text-black transition-colors" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};


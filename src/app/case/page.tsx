import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HCS_STORIES } from "@/data/caseStoriesData";
import { StoryCard } from "@/components/sections/CaseStoriesSection";
import { AuraBackground } from "@/components/ui/AuraBackground";

export const metadata: Metadata = {
  title: "Case & Dokumenterade Resultat — AVEVA, Monster, IDNet m.fl. | Hard Call Sales",
  description:
    "Se hur vi hjälpt ledande IT- och SaaS-bolag att generera över 20 MSEK i nya affärer och boka hundratals kvalificerade möten med rätt beslutsfattare.",
  openGraph: {
    title: "Case & Dokumenterade Resultat — Hard Call Sales",
    description:
      "Bevisen, inte löftena. Dokumenterade resultat för AVEVA, Monster, IDNet, Wall to Wall Group, Allt om Juridik och NordTech Solutions.",
  },
};

const CLIENT_LOGOS = [
  "AVEVA",
  "Monster",
  "IDNet",
  "Wall to Wall Group",
  "Allt om Juridik",
  "NordTech Solutions",
  "Bumbee Labs",
  "Vimcar",
  "SaaS Nordic",
];

export default function CasePage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#0A0A0A] text-white">
      {/* ── 1. EDITORIAL CASE HERO MED AURA ENDAST I TOPPEN ── */}
      <section className="relative w-full pt-36 sm:pt-48 pb-20 sm:pb-24 border-b border-white/10 overflow-hidden select-none">
        {/* UnicornStudio Aura Background från Bakgrunder (Projekt 8G9qTlSBPboaCMb8UV64) */}
        <AuraBackground
          projectId="8G9qTlSBPboaCMb8UV64"
          opacity={0.45}
          speedScale={0.25}
          className="scale-105"
        />

        {/* Mjuk gradient-overlay för optimal textkontrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-transparent to-[#0A0A0A]/85 pointer-events-none" />

        <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
              <span className="w-2 h-2 rounded-full bg-[#7851A9]" />
              <span>DOKUMENTERADE CASE · BEVISEN, INTE LÖFTENA</span>
            </div>
            <div className="flex items-center gap-6 text-[11px] font-mono tracking-widest text-neutral-500 uppercase">
              <span>IT &amp; SAAS</span>
              <span>·</span>
              <span>ENTERPRISE PIPELINES</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-14">
            <div className="max-w-4xl">
              <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-medium tracking-tight text-white leading-[1.05]">
                Stora resultat för ledande <br className="hidden sm:block" />
                <span className="text-neutral-400 font-normal">B2B- &amp; SaaS-bolag.</span>
              </h1>
            </div>

            <div className="max-w-md flex flex-col gap-4">
              <p className="text-neutral-300 text-base sm:text-lg font-normal leading-relaxed">
                Vi mäter framgång i stängda affärer och säkrad omsättning. Se hur ledande bolag inom enterprise IT, logistik och SaaS bygger sin pipeline med Hard Call Sales.
              </p>
              <div className="pt-4 border-t border-white/10 flex items-center gap-6 text-xs font-mono text-neutral-400">
                <div>
                  <span className="text-white font-semibold text-lg block">&gt;20 MSEK</span>
                  <span className="text-[10px] uppercase text-neutral-500">Största affärsvärde</span>
                </div>
                <div className="border-l border-white/10 pl-6">
                  <span className="text-white font-semibold text-lg block">92 %</span>
                  <span className="text-[10px] uppercase text-neutral-500">Snitt Show-rate</span>
                </div>
                <div className="border-l border-white/10 pl-6">
                  <span className="text-white font-semibold text-lg block">3.8x</span>
                  <span className="text-[10px] uppercase text-neutral-500">Genomsnittlig ROI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. CASE GRID (2x2x2) ── */}
      <section className="w-full py-20 sm:py-28 relative">
        <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
            {HCS_STORIES.map((story, i) => (
              <StoryCard key={i} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. CLIENT ROSTER STRIP ── */}
      <section className="w-full py-16 border-t border-white/10 bg-[#080808]">
        <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16">
          <span className="block text-[11px] font-mono tracking-widest text-neutral-500 uppercase mb-8 text-center sm:text-left">
            BOLAG VI LEVERERAT MÖTEN OCH AFFÄRER TILL
          </span>
          <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-8 text-neutral-400 font-mono text-sm sm:text-base">
            {CLIENT_LOGOS.map((logo) => (
              <span key={logo} className="hover:text-white transition-colors duration-200">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CONVERSION CTA BANNER ── */}
      <section className="w-full py-24 sm:py-32 border-t border-white/10 bg-[#050505] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-[11px] font-mono tracking-widest text-neutral-300 uppercase mb-6">
            PILOTMODELL UTAN BINDNINGSTID
          </span>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
            Vill ni bli vårt nästa framgångscase?
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Testa vår 3-månaders pilotmodell med 10–100 bokade möten per månad. Ingen bindningstid under piloten — ni ser utfallet innan ni förbinder er.
          </p>
          <Link
            href="/boka-mote"
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-white text-black font-medium text-sm tracking-wide uppercase hover:bg-neutral-200 transition-all duration-200 shadow-xl"
          >
            <span>Boka ett förutsättningslöst möte</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

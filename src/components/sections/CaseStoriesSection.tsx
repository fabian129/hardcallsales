"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, CheckCircle2, ChevronDown, ChevronUp, Sparkles, X } from "lucide-react";
import { HCS_STORIES, type CaseStory } from "@/data/caseStoriesData";

export { HCS_STORIES };

export function StoryCard({ story }: { story: typeof HCS_STORIES[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`w-full relative rounded-[28px] overflow-hidden transition-all duration-300 border shadow-2xl flex flex-col justify-between group ${
        isOpen
          ? "bg-[#111116] border-[#7851A9]/60 shadow-[0_0_50px_rgba(120,81,169,0.18)]"
          : "bg-[#0E0E12] border-white/10 hover:border-white/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
      }`}
    >
      {/* ── AMBIENT ATMOSPHERIC BACKGROUND (NO STOCK PHOTOS) ── */}
      {/* Top-Right Purple Aura Bloom */}
      <div
        className={`absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none transition-all duration-500 blur-[80px] ${
          isOpen ? "bg-[#7851A9]/25 scale-125" : "bg-[#7851A9]/10 group-hover:bg-[#7851A9]/18"
        }`}
      />
      {/* Bottom-Left Secondary Sub-Glow */}
      <div className="absolute -bottom-24 -left-24 w-60 h-60 rounded-full bg-purple-950/20 blur-[70px] pointer-events-none" />

      {/* Subtle Precision Dot Matrix Background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.035] pointer-events-none select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={`dot-matrix-${story.id}`} width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="14" cy="14" r="1.2" fill="#FFFFFF" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#dot-matrix-${story.id})`} />
      </svg>

      {/* Top Border Hairline Highlight */}
      <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

      {/* ── CARD HEADER & LOGO PODIUM ── */}
      <div className="relative z-10 p-6 sm:p-7 flex items-center justify-between gap-4 border-b border-white/[0.06]">
        {/* Architectural Emblem Badge with Authentic Client Logo */}
        <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.1] shadow-inner">
          {story.logo ? (
            <img
              src={story.logo}
              alt={story.client}
              className="h-4 sm:h-5 w-auto max-w-[110px] object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity"
            />
          ) : (
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7851A9]" />
              <span className="text-xs sm:text-[13px] font-bold text-white tracking-wider uppercase font-sans">
                {story.client}
              </span>
            </div>
          )}
          <span className="text-[11px] text-[#A8A8A8] font-normal border-l border-white/15 pl-2.5 font-sans">
            {story.industry}
          </span>
        </div>

        {/* Quick Key Stat Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#7851A9]/20 backdrop-blur-md border border-[#7851A9]/40 text-white font-mono text-xs font-semibold shrink-0">
          <TrendingUp size={13} className="text-[#B794F4]" />
          <span>{story.stats.primary}</span>
        </div>
      </div>

      {/* ── CARD BODY ── */}
      <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-between flex-1">
        <div>
          {/* Metric Chips Row */}
          <div className="flex flex-wrap items-center gap-2 mb-3.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.06] border border-white/[0.08] backdrop-blur-md text-[11px] font-medium text-white/90">
              <CheckCircle2 size={12} className="text-[#7851A9]" />
              <span>{story.stats.secondary}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.06] border border-white/[0.08] backdrop-blur-md text-[11px] font-medium text-white/90">
              <CheckCircle2 size={12} className="text-[#7851A9]" />
              <span>{story.stats.metric}</span>
            </div>
          </div>

          {/* Case Headline */}
          <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight leading-snug mb-3">
            {story.event}
          </h3>

          {/* Teaser Summary */}
          <p className="text-xs sm:text-[13.5px] text-[#A0A0A0] leading-relaxed mb-5">
            {story.teaser}
          </p>

          {/* ── IN-BOX EXPANDED CONTENT ── */}
          {isOpen && (
            <div className="mt-5 pt-5 border-t border-white/[0.08] animate-in fade-in slide-in-from-top-2 duration-300">
              {/* Full Authentic Story from hardcallsales.se */}
              <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5 sm:p-6 mb-5 relative">
                <div className="absolute top-4 right-4 opacity-20">
                  <Sparkles size={18} className="text-[#B794F4]" />
                </div>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-[#B794F4] mb-2 font-semibold">
                  HELA UPPDRAGSBERÄTTELSEN
                </span>
                <p className="text-[13.5px] sm:text-[14.5px] text-[#E0E0E6] leading-relaxed font-sans font-normal">
                  {story.fullStory}
                </p>
              </div>

              {/* Delivery Scope & Target Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-black/40 border border-white/[0.05] mb-5">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#8A8A90] block mb-1">
                    OMFATTNING
                  </span>
                  <span className="text-xs text-white/95 font-medium leading-tight block">
                    {story.deliveryDetails.scope}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#8A8A90] block mb-1">
                    MÅLGRUPP
                  </span>
                  <span className="text-xs text-white/95 font-medium leading-tight block">
                    {story.deliveryDetails.target}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#B794F4] block mb-1">
                    LEVERERAT UTFALL
                  </span>
                  <span className="text-xs text-[#E9D8FD] font-medium leading-tight block">
                    {story.deliveryDetails.outcome}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── CARD FOOTER ACTIONS ── */}
        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3 mt-4">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
              isOpen
                ? "bg-white text-black hover:bg-neutral-200 shadow-lg"
                : "bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10 hover:border-white/20"
            }`}
          >
            {isOpen ? (
              <>
                <span>Dölj uppdrag</span>
                <ChevronUp size={14} className="text-black" />
              </>
            ) : (
              <>
                <span>Läs hela kundcaset</span>
                <ChevronDown size={14} className="text-[#B794F4]" />
              </>
            )}
          </button>

          {isOpen ? (
            <Link
              href="/boka-mote"
              className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold text-[#B794F4] hover:text-white transition-colors"
            >
              <span>Boka liknande upplägg</span>
              <ArrowRight size={14} />
            </Link>
          ) : (
            <span className="text-[11px] font-mono text-[#7A7A80] uppercase tracking-wider hidden sm:inline">
              KLICKA FÖR ATT EXPANDERA
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export const CaseStoriesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [exitProgress, setExitProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Synkroniserad ljusupptändning mot ljusa PilotProgramSection (börjar 35% senare, +20% till):
      // rect.bottom rör sig från windowHeight nedåt mot 0 när nästa sektion rullar in underifrån
      const exitDistance = windowHeight - rect.bottom;
      const exit = Math.min(1, Math.max(0, (exitDistance - windowHeight * 0.35) / (windowHeight * 0.28)));
      setExitProgress(exit);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="kunder"
      className="w-full bg-[#0A0A0A] text-white py-24 sm:py-32 border-b border-[#1F1F1F] relative overflow-hidden"
    >
      {/* ── SYNCED LJUSUPPTÄNDNING MOT PILOTPROGRAMMET: Tänds mjukt upp till #FBFBFC ── */}
      <div
        className="absolute inset-0 bg-[#FBFBFC] pointer-events-none z-0 transition-opacity duration-75 ease-linear"
        style={{ opacity: exitProgress }}
      />

      {/* Ambient background glow (dämpas när rummet tänds upp mot piloten) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none select-none z-0 transition-opacity duration-75 ease-linear"
        style={{ opacity: Math.max(0, 1 - exitProgress) }}
      />

      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-6 mb-12 sm:mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#7851A9] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#7851A9]" />
              <span>DOKUMENTERADE KUNDRESULTAT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-normal tracking-tight text-white leading-[1.1]">
              Stora resultat för ledande <br className="hidden sm:block" />
              B2B- &amp; SaaS-bolag
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#9E9E9E] font-normal leading-relaxed max-w-md">
            Se hur bolag som AVEVA, Monster, IDNet och Wall to Wall Group bygger förutsägbara mötespipelines med Hard Call Sales.
          </p>
        </div>

        {/* 2x2x2 Box Grid (3 rows x 2 columns) with identical visual cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
          {HCS_STORIES.map((story, i) => (
            <StoryCard key={i} story={story} />
          ))}
        </div>

      </div>
    </section>
  );
};

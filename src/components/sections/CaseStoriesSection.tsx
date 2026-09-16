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
      className={`w-full relative rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 border flex flex-col justify-between group ${
        isOpen
          ? "bg-[#0D0D10]/95 border-white/[0.16] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_24px_50px_rgba(0,0,0,0.85)]"
          : "bg-[#09090B]/85 hover:bg-[#0C0C0E]/90 border-white/[0.08] hover:border-white/[0.16] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_18px_36px_rgba(0,0,0,0.7)] backdrop-blur-2xl"
      }`}
    >
      {/* ── CARD HEADER & LOGO PODIUM ── */}
      <div className="relative z-10 px-6 py-5 sm:px-7 sm:py-6 flex items-center justify-between gap-4 border-b border-white/[0.05]">
        {/* Authentic White Client Logo & Industry */}
        <div className="flex items-center gap-3.5">
          {story.logo ? (
            <img
              src={story.logo}
              alt={story.client}
              className="h-5 sm:h-5.5 w-auto max-w-[120px] object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
            />
          ) : (
            <span className="text-xs sm:text-[13px] font-medium text-white tracking-wider uppercase font-sans">
              {story.client}
            </span>
          )}
          <span className="w-[1px] h-3.5 bg-white/[0.12] hidden sm:inline-block" />
          <span className="text-[11px] text-neutral-400 font-mono tracking-wide uppercase hidden sm:inline-block">
            {story.industry}
          </span>
        </div>

        {/* Quiet Key Stat Badge (Smoked Glass) */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-white font-mono text-xs font-medium shrink-0">
          <TrendingUp size={12} className="text-neutral-300" />
          <span>{story.stats.primary}</span>
        </div>
      </div>

      {/* ── CARD BODY ── */}
      <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-between flex-1">
        <div>
          {/* Subtle Monospace Metadata Row */}
          <div className="flex items-center gap-3.5 text-xs font-mono text-neutral-400 mb-3.5">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <span className="w-1 h-1 rounded-full bg-white/70 inline-block" />
              {story.stats.secondary}
            </span>
            <span className="w-[1px] h-3 bg-white/[0.1]" />
            <span className="flex items-center gap-1.5 text-neutral-300">
              <span className="w-1 h-1 rounded-full bg-white/70 inline-block" />
              {story.stats.metric}
            </span>
          </div>

          {/* Case Headline */}
          <h3 className="text-xl sm:text-2xl font-normal text-white tracking-tight leading-snug mb-2.5">
            {story.event}
          </h3>

          {/* Teaser Summary */}
          <p className="text-sm text-neutral-400 leading-relaxed font-light mb-6">
            {story.teaser}
          </p>

          {/* ── IN-BOX EXPANDED CONTENT ── */}
          {isOpen && (
            <div className="pt-5 border-t border-white/[0.06] animate-in fade-in duration-200">
              {/* Full Authentic Story from hardcallsales.se */}
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 sm:p-6 mb-5">
                <span className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2 font-medium">
                  HELA UPPDRAGSBERÄTTELSEN
                </span>
                <p className="text-[13.5px] sm:text-[14.5px] text-neutral-300 leading-relaxed font-sans font-light">
                  {story.fullStory}
                </p>
              </div>

              {/* Delivery Scope & Target Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-black/50 border border-white/[0.04] mb-5">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                    OMFATTNING
                  </span>
                  <span className="text-xs text-neutral-200 font-normal leading-tight block">
                    {story.deliveryDetails.scope}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                    MÅLGRUPP
                  </span>
                  <span className="text-xs text-neutral-200 font-normal leading-tight block">
                    {story.deliveryDetails.target}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    LEVERERAT UTFALL
                  </span>
                  <span className="text-xs text-white font-medium leading-tight block">
                    {story.deliveryDetails.outcome}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── CARD FOOTER ACTIONS ── */}
        <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between gap-3 mt-2">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase transition-all duration-150 cursor-pointer active:scale-[0.98] ${
              isOpen
                ? "bg-white text-black hover:bg-neutral-200 shadow-md font-semibold"
                : "bg-white/[0.03] hover:bg-white/[0.07] text-neutral-300 hover:text-white border border-white/[0.08] hover:border-white/[0.16]"
            }`}
          >
            {isOpen ? (
              <>
                <span>Dölj uppdrag</span>
                <ChevronUp size={13} className="text-black" />
              </>
            ) : (
              <>
                <span>Läs hela kundcaset</span>
                <ChevronDown size={13} className="text-neutral-400 group-hover:text-white transition-colors" />
              </>
            )}
          </button>

          {isOpen && (
            <Link
              href="/boka-mote"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
            >
              <span>Boka liknande upplägg</span>
              <ArrowRight size={13} />
            </Link>
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
      className="w-full bg-[#08080A] text-white py-24 sm:py-32 border-b border-white/[0.08] relative overflow-hidden"
    >
      {/* ── SYNCED LJUSUPPTÄNDNING MOT PILOTPROGRAMMET: Tänds mjukt upp till #FBFBFC ── */}
      <div
        className="absolute inset-0 bg-[#FBFBFC] pointer-events-none z-0 transition-opacity duration-75 ease-linear"
        style={{ opacity: exitProgress }}
      />

      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-6 mb-12 sm:mb-16 border-b border-white/[0.08] pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
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

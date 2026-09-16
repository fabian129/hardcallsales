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
      role="button"
      tabIndex={0}
      onClick={() => setIsOpen(!isOpen)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsOpen(!isOpen);
        }
      }}
      className={`w-full relative rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 border flex flex-col justify-between cursor-pointer select-none group ${
        isOpen
          ? "bg-[#0D0D11]/95 border-white/[0.18] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_28px_60px_rgba(0,0,0,0.85)]"
          : "bg-[#09090C]/80 hover:bg-[#0C0C10]/90 border-white/[0.07] hover:border-white/[0.16] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_18px_36px_rgba(0,0,0,0.7)] backdrop-blur-2xl"
      }`}
    >
      {/* ── TOP TASTEFUL EYEBROW ROW ── */}
      <div className="relative z-10 px-8 pt-7 pb-5 sm:px-10 sm:pt-8 sm:pb-6 flex items-center justify-between gap-4 border-b border-white/[0.05]">
        <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
          {story.industry}
        </span>
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono text-neutral-300 tracking-wide">
            {story.stats.primary}
          </span>
          <span className="w-1 h-1 rounded-full bg-neutral-600 inline-block" />
          <span className="text-xs font-mono text-neutral-400 transition-transform duration-200 group-hover:text-white">
            {isOpen ? "−" : "+"}
          </span>
        </div>
      </div>

      {/* ── CARD CENTERPIECE ── */}
      <div className="relative z-10 px-8 py-10 sm:px-12 sm:py-12 flex flex-col items-center justify-center text-center flex-1">
        {/* Generous Large Client Logo in Dead Center */}
        <div className="h-16 sm:h-20 flex items-center justify-center mb-7 sm:mb-8">
          {story.logo ? (
            <img
              src={story.logo}
              alt={story.client}
              className="max-h-12 sm:max-h-16 w-auto max-w-[220px] sm:max-w-[260px] object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            />
          ) : (
            <span className="text-xl sm:text-2xl font-normal tracking-wider text-white uppercase font-sans">
              {story.client}
            </span>
          )}
        </div>

        {/* Quiet Secondary Metrics Eyebrow */}
        <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 mb-3.5">
          <span>{story.stats.secondary}</span>
          <span className="w-1 h-1 rounded-full bg-neutral-600" />
          <span>{story.stats.metric}</span>
        </div>

        {/* Headline Directly Under Logo */}
        <h3 className="text-xl sm:text-2xl lg:text-[26px] font-normal text-white tracking-tight leading-snug max-w-xl mx-auto mb-3.5">
          {story.event}
        </h3>

        {/* Minimal Restrained Teaser Copy */}
        <p className="text-xs sm:text-[13.5px] text-neutral-400 font-light leading-relaxed max-w-md mx-auto mb-6 line-clamp-2">
          {story.teaser}
        </p>

        {/* Quiet Expand Hint */}
        <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-neutral-500 group-hover:text-neutral-300 transition-colors uppercase">
          <span>{isOpen ? "Stäng uppdrag" : "Klicka för hela uppdraget"}</span>
          <span className="text-xs transition-transform duration-200">
            {isOpen ? "↑" : "↓"}
          </span>
        </div>

        {/* ── IN-BOX EXPANDED CONTENT ── */}
        {isOpen && (
          <div
            className="w-full mt-8 pt-8 border-t border-white/[0.06] text-left animate-in fade-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Full Story from hardcallsales.se */}
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 sm:p-8 mb-6">
              <span className="block text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-3 font-medium">
                BAKGRUND &amp; UPPDRAG
              </span>
              <p className="text-[14px] sm:text-[15px] text-neutral-200 leading-relaxed font-sans font-light">
                {story.fullStory}
              </p>
            </div>

            {/* Delivery Scope & Target Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 sm:p-6 rounded-2xl bg-black/40 border border-white/[0.04] mb-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-1.5">
                  OMFATTNING
                </span>
                <span className="text-xs sm:text-[13px] text-neutral-300 font-light leading-relaxed block">
                  {story.deliveryDetails.scope}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-1.5">
                  MÅLGRUPP
                </span>
                <span className="text-xs sm:text-[13px] text-neutral-300 font-light leading-relaxed block">
                  {story.deliveryDetails.target}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1.5">
                  LEVERERAT UTFALL
                </span>
                <span className="text-xs sm:text-[13px] text-white font-medium leading-relaxed block">
                  {story.deliveryDetails.outcome}
                </span>
              </div>
            </div>

            {/* Action Row */}
            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                Stäng [ × ]
              </button>
              <Link
                href="/boka-mote"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-medium text-xs tracking-wider uppercase hover:bg-neutral-200 transition-all shadow-md"
              >
                <span>Boka liknande upplägg</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        )}
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

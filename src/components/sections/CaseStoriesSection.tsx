"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, CheckCircle2, ChevronDown, ChevronUp, Sparkles, X } from "lucide-react";
import { HCS_STORIES, type CaseStory } from "@/data/caseStoriesData";
import { openCalModal, DEFAULT_CAL_LINK } from "@/components/cal/CalProvider";

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
      className={`w-full relative rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 border flex flex-col justify-between cursor-pointer select-none text-left group ${
        isOpen
          ? "bg-[#0D0D11] border-white/[0.18] shadow-[0_24px_48px_rgba(0,0,0,0.8)]"
          : "bg-[#09090C] hover:bg-[#0C0C10] border-white/[0.07] hover:border-white/[0.15] shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
      }`}
    >
      {/* ── CARD TOP (ABOVE THE LINE): EYEBROW, LOGO & PRIMARY METRIC ── */}
      <div className="px-7 pt-7 pb-6 sm:px-10 sm:pt-8 sm:pb-7 border-b border-white/[0.05]">
        {/* Top utility row: Eyebrow on left, Primary Stat (in brand color) & toggle cue on right */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-2 sm:gap-2.5 text-[10.5px] sm:text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
            <span className="text-neutral-300 font-medium">{story.industry}</span>
            <span className="w-1 h-1 rounded-full bg-neutral-600 shrink-0" />
            <span className="hidden xs:inline">{story.stats.secondary}</span>
            <span className="hidden xs:inline w-1 h-1 rounded-full bg-neutral-600 shrink-0" />
            <span className="text-neutral-400 hidden sm:inline">{story.stats.metric}</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span
              className="text-xs font-mono tracking-wide font-medium"
              style={{ color: story.accent }}
            >
              {story.stats.primary}
            </span>
            <span className="w-1 h-1 rounded-full bg-neutral-600 inline-block" />
            <span className="text-xs font-mono text-neutral-400 transition-transform duration-200 group-hover:text-white">
              {isOpen ? "−" : "+"}
            </span>
          </div>
        </div>

        {/* High-Resolution Left-Aligned Authentic Logo (Full Color) */}
        <div className="h-14 sm:h-18 flex items-center justify-start">
          {story.logo ? (
            <img
              src={story.logo}
              alt={story.client}
              className="max-h-12 sm:max-h-16 w-auto max-w-[240px] sm:max-w-[300px] object-contain object-left opacity-95 group-hover:opacity-100 transition-opacity duration-200"
            />
          ) : (
            <span className="text-2xl sm:text-3xl font-light tracking-wider text-white uppercase font-sans">
              {story.client}
            </span>
          )}
        </div>
      </div>

      {/* ── CARD BODY (LEFT-ALIGNED & QUIETER, BELOW THE LINE) ── */}
      <div className="relative z-10 px-7 py-7 sm:px-10 sm:py-8 flex flex-col justify-between flex-1">
        <div>
          {/* Smaller, More Refined Headline */}
          <h3 className="text-lg sm:text-xl font-normal text-white tracking-tight leading-snug mb-2.5">
            {story.event}
          </h3>

          {/* Smaller Left-Aligned Teaser Body */}
          <p className="text-xs sm:text-[13px] text-neutral-400 font-light leading-relaxed max-w-xl mb-4 line-clamp-2">
            {story.teaser}
          </p>

          {/* Discreet Hint */}
          <div className="flex items-center gap-1.5 text-[10.5px] font-mono tracking-wider text-neutral-500 group-hover:text-neutral-400 transition-colors uppercase pt-1">
            <span>{isOpen ? "Dölj kundberättelse" : "Klicka för att expandera uppdraget"}</span>
            <span className="text-xs">{isOpen ? "↑" : "→"}</span>
          </div>

          {/* ── IN-BOX EXPANDED CONTENT ── */}
          {isOpen && (
            <div
              className="w-full mt-7 pt-7 border-t border-white/[0.06] text-left animate-in fade-in duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Full Story from hardcallsales.se */}
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-5 sm:p-7 mb-5">
                <span className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2.5 font-medium">
                  BAKGRUND &amp; SAMARBETE
                </span>
                <p className="text-[13.5px] sm:text-[14.5px] text-neutral-200 leading-relaxed font-sans font-light">
                  {story.fullStory}
                </p>
              </div>

              {/* Delivery Scope & Target Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 sm:p-5 rounded-xl bg-black/40 border border-white/[0.04] mb-5">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                    OMFATTNING
                  </span>
                  <span className="text-xs text-neutral-300 font-light leading-relaxed block">
                    {story.deliveryDetails.scope}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">
                    MÅLGRUPP
                  </span>
                  <span className="text-xs text-neutral-300 font-light leading-relaxed block">
                    {story.deliveryDetails.target}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    LEVERERAT UTFALL
                  </span>
                  <span className="text-xs text-white font-medium leading-relaxed block">
                    {story.deliveryDetails.outcome}
                  </span>
                </div>
              </div>

              {/* Action Row */}
              <div className="flex items-center justify-between pt-1">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  Stäng [ × ]
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openCalModal();
                  }}
                  data-cal-link={DEFAULT_CAL_LINK}
                  data-cal-config='{"layout":"month_view","theme":"dark"}'
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-medium text-xs tracking-wider uppercase hover:bg-neutral-200 transition-all shadow-md cursor-pointer"
                >
                  <span>Boka liknande upplägg</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
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

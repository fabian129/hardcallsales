"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, CheckCircle2 } from "lucide-react";
import { HCS_STORIES, type CaseStory } from "@/data/caseStoriesData";

export { HCS_STORIES };

export function StoryCard({ story }: { story: typeof HCS_STORIES[0] }) {
  return (
    <div className="w-full h-[480px] sm:h-[520px] relative rounded-[28px] overflow-hidden group cursor-pointer border border-white/10 bg-[#121212] transition-all duration-300 hover:border-white/25 shadow-2xl flex flex-col justify-between">
      {/* Background Image with slow zoom */}
      <img
        src={story.image}
        alt={story.client}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-40 group-hover:opacity-60 pointer-events-none"
      />

      {/* Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent pointer-events-none" />

      {/* Top Badges Row */}
      <div className="relative z-10 p-6 sm:p-7 flex items-center justify-between gap-4">
        {/* Client Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/15 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#7851A9]" />
          <span className="text-xs sm:text-[13px] font-bold text-white tracking-wider uppercase font-sans">
            {story.client}
          </span>
          <span className="text-[11px] text-[#A8A8A8] font-normal border-l border-white/15 pl-2">
            {story.industry}
          </span>
        </div>

        {/* Quick Key Stat Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#7851A9]/20 backdrop-blur-md border border-[#7851A9]/40 text-white font-mono text-xs font-semibold">
          <TrendingUp size={13} className="text-[#B794F4]" />
          <span>{story.stats.primary}</span>
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end">
        {/* Metric Chips Row */}
        <div className="flex flex-wrap items-center gap-2 mb-3.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md text-[11px] font-medium text-white/90">
            <CheckCircle2 size={12} className="text-[#7851A9]" />
            <span>{story.stats.secondary}</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md text-[11px] font-medium text-white/90">
            <CheckCircle2 size={12} className="text-[#7851A9]" />
            <span>{story.stats.metric}</span>
          </div>
        </div>

        {/* Case Headline */}
        <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight leading-snug mb-2.5 group-hover:text-white transition-colors">
          {story.event}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-[13.5px] text-[#B0B0B0] leading-relaxed max-w-2xl mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
          {story.description}
        </p>

        {/* Read More Link */}
        <Link
          href={story.href}
          className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold text-[#B794F4] group-hover:text-white transition-colors"
        >
          <span>Läs hela kundcaset</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {HCS_STORIES.map((story, i) => (
            <StoryCard key={i} story={story} />
          ))}
        </div>

      </div>
    </section>
  );
};

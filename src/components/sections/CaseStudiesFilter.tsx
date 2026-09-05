"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Building2, 
  Layers, 
  CheckCircle2, 
  Quote, 
  TrendingUp, 
  Target, 
  Sparkles,
  ChevronRight
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { CASE_STUDIES } from "@/data/caseStudies";

type FilterCategory = "all" | "Enterprise" | "SaaS" | "Consulting";

export const CaseStudiesFilter: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const categories = [
    { id: "all" as FilterCategory, label: "Alla kundcase", count: CASE_STUDIES.length },
    { id: "Enterprise" as FilterCategory, label: "Enterprise IT & Industri", count: CASE_STUDIES.filter(c => c.category === "Enterprise").length },
    { id: "SaaS" as FilterCategory, label: "B2B SaaS & Tech", count: CASE_STUDIES.filter(c => c.category === "SaaS").length },
    { id: "Consulting" as FilterCategory, label: "Konsult & Tjänster", count: CASE_STUDIES.filter(c => c.category === "Consulting").length },
  ];

  const filteredStudies = activeFilter === "all" 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(c => c.category === activeFilter);

  return (
    <section id="case-studies" className="w-full bg-[#0A0A0A] text-white py-20 sm:py-28 border-b border-[#2B2B2B] relative">
      <Container size="wide">
        
        {/* Section Title & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <Badge variant="purple-soft" size="md" className="mb-3.5">
              <Sparkles size={14} className="text-[#7851A9] mr-1.5" />
              <span>Djupdykning i resultat</span>
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
              Verkliga siffror från verkliga partnerskap
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#A8A8A8]">
              Se hur vi kombinerat datadriven prospektering med erfarna säljare för att skapa mätbar tillväxt i olika branscher.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 self-start md:self-auto">
            {categories.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-[#7851A9] text-white shadow-[0_0_16px_rgba(120,81,169,0.4)]"
                      : "text-[#A8A8A8] hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-white/5 text-[#6E6E6E]"
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Case Studies Deep-Dive List */}
        <div className="space-y-12 sm:space-y-16">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="rounded-3xl bg-[#111111]/90 border border-[#2B2B2B] hover:border-[#7851A9]/40 transition-all duration-300 p-7 sm:p-10 lg:p-12 relative overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
            >
              {/* Top Accent Gradient Glow */}
              <div className="absolute top-0 right-0 w-[450px] h-[250px] bg-[#7851A9]/10 blur-[100px] pointer-events-none rounded-full" />

              {/* Case Study Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#9B7BC7] bg-[#7851A9]/15 px-3 py-1 rounded-full border border-[#7851A9]/30">
                      {study.badge || study.category}
                    </span>
                    <span className="text-xs text-[#A8A8A8] flex items-center gap-1.5">
                      <Building2 size={13} className="text-[#7851A9]" />
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                    {study.client}
                  </h3>
                </div>

                {/* Primary Metric Showcase */}
                <div className="lg:text-right bg-white/[0.03] border border-white/10 rounded-2xl p-4 sm:p-5 lg:min-w-[260px]">
                  <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#EDEDED] to-[#B89FE0] tracking-tight">
                    {study.metric}
                  </div>
                  <div className="text-xs text-[#A8A8A8] mt-1">
                    {study.metricLabel}
                  </div>
                </div>
              </div>

              {/* Key Stats Grid (4 Cards) */}
              {study.stats && (
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 my-8">
                  {study.stats.map((st, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between"
                    >
                      <span className="text-xs text-[#A8A8A8] mb-1">{st.label}</span>
                      <span className="text-lg sm:text-xl font-bold text-white">{st.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* 3-Column Narrative: Challenge, Solution, Outcome */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 my-8 text-sm">
                
                {/* 1. Utmaning */}
                <div className="rounded-2xl bg-white/[0.02] border border-white/5 p-6 space-y-3">
                  <div className="flex items-center gap-2 text-white font-semibold text-base">
                    <Target size={18} className="text-amber-400" />
                    <h4>Utmaningen</h4>
                  </div>
                  <p className="text-[#A8A8A8] leading-relaxed text-xs sm:text-sm">
                    {study.challenge}
                  </p>
                </div>

                {/* 2. Lösning & Metodik */}
                <div className="rounded-2xl bg-white/[0.02] border border-white/5 p-6 space-y-3">
                  <div className="flex items-center gap-2 text-white font-semibold text-base">
                    <Layers size={18} className="text-[#7851A9]" />
                    <h4>Vår lösning & metodik</h4>
                  </div>
                  <p className="text-[#A8A8A8] leading-relaxed text-xs sm:text-sm">
                    {study.solution}
                  </p>
                </div>

                {/* 3. Konkret resultat */}
                <div className="rounded-2xl bg-[#7851A9]/10 border border-[#7851A9]/30 p-6 space-y-3">
                  <div className="flex items-center gap-2 text-white font-semibold text-base">
                    <TrendingUp size={18} className="text-emerald-400" />
                    <h4>Mätbart utfall</h4>
                  </div>
                  <p className="text-[#EDEDED] leading-relaxed text-xs sm:text-sm font-medium">
                    {study.outcome}
                  </p>
                </div>

              </div>

              {/* Key Deliverables & Client Quote Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pt-8 border-t border-white/10 items-center">
                
                {/* Deliverables Checklist (Left 7 cols) */}
                {study.keyDeliverables && (
                  <div className="lg:col-span-7 space-y-3">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#A8A8A8] block mb-2">
                      Viktiga leverabler i samarbetet:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {study.keyDeliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-[#EDEDED]">
                          <CheckCircle2 size={14} className="text-[#7851A9] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quote Card (Right 5 cols) */}
                {study.quote && (
                  <div className="lg:col-span-5 p-6 rounded-2xl bg-white/[0.03] border border-white/10 relative">
                    <Quote size={24} className="text-[#7851A9]/40 absolute top-4 right-4" />
                    <blockquote className="text-xs sm:text-sm italic text-[#EDEDED] leading-relaxed mb-4">
                      ”{study.quote.text}”
                    </blockquote>
                    <div className="text-xs">
                      <div className="font-semibold text-white">{study.quote.author}</div>
                      <div className="text-[#A8A8A8]">{study.quote.role}</div>
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom CTA for this study */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#6E6E6E]">
                  Vill ni se hur liknande metodik kan appliceras på ert bolags målgrupp?
                </span>
                <Link
                  href="/boka-mote"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B89FE0] hover:text-white transition-colors group"
                >
                  <span>Boka discovery-samtal för {study.client}</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

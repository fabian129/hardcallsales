"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CalendarCheck,
  Mail,
  PhoneCall,
  Network,
  Target,
  Workflow,
  CheckCircle2,
  Sparkles,
  Layers,
  UserCheck,
  Bot,
  Zap,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SERVICES } from "@/data/services";

// Helper to get corresponding Lucide icon
const getServiceIcon = (iconName: string, size = 24) => {
  switch (iconName) {
    case "CalendarCheck":
      return <CalendarCheck size={size} />;
    case "Mail":
      return <Mail size={size} />;
    case "PhoneCall":
      return <PhoneCall size={size} />;
    case "Network":
      return <Network size={size} />;
    case "Target":
      return <Target size={size} />;
    case "Workflow":
      return <Workflow size={size} />;
    case "Bot":
      return <Bot size={size} />;
    default:
      return <Layers size={size} />;
  }
};

export const ServicesDeepDive: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredServices =
    selectedCategory === "all"
      ? SERVICES
      : SERVICES.filter((s) => s.id === selectedCategory);

  return (
    <section id="alla-tjanster" className="w-full bg-[#0A0A0A] text-white py-20 sm:py-28 border-b border-[#2B2B2B] relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#7851A9]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#7851A9]/10 blur-[150px] pointer-events-none rounded-full" />

      <Container size="wide" className="relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Badge variant="purple-soft" size="md" className="mb-4">
            <Sparkles size={13} className="text-[#7851A9] mr-1" />
            <span>Djupdykning & Leveransomfattning</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Varje del i säljmaskineriet, förklarad i detalj
          </h2>
          <p className="text-base sm:text-lg text-[#A8A8A8] font-normal leading-relaxed">
            Vi bygger skräddarsydda säljmotorer anpassade efter er idealkundprofil, er marknad och era tillväxtmål.
            Här är vad som ingår i respektive tjänst.
          </p>
        </div>

        {/* Quick Filter Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 sm:mb-16 scrollbar-none border-b border-white/10">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === "all"
                ? "bg-[#7851A9] text-white shadow-[0_0_15px_rgba(120,81,169,0.4)]"
                : "bg-white/5 text-[#A8A8A8] hover:text-white hover:bg-white/10 border border-white/10"
            }`}
          >
            Alla tjänster (6)
          </button>
          {SERVICES.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedCategory(s.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === s.id
                  ? "bg-[#7851A9] text-white shadow-[0_0_15px_rgba(120,81,169,0.4)]"
                  : "bg-white/5 text-[#A8A8A8] hover:text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              {s.number}. {s.title.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Services List - Detailed Cards */}
        <div className="space-y-12 sm:space-y-16">
          {filteredServices.map((service) => {
            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 rounded-3xl bg-[#111111] border border-[#2B2B2B] hover:border-[#7851A9]/50 transition-all duration-300 overflow-hidden shadow-xl"
              >
                {/* Top Banner with Kicker, ID & Number */}
                <div className="bg-[#161616] px-6 sm:px-10 py-5 border-b border-[#2B2B2B] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl font-mono font-bold text-[#7851A9]">
                      {service.number}
                    </span>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#A8A8A8]">
                      {service.kicker}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {service.statNumber && (
                      <span className="px-3 py-1 rounded-full bg-[#7851A9]/20 border border-[#7851A9]/40 text-[#B89FE0] text-xs font-mono font-semibold">
                        {service.statNumber} {service.statLabel}
                      </span>
                    )}
                    <span className="text-xs text-[#6E6E6E] font-mono">
                      ID: #{service.id}
                    </span>
                  </div>
                </div>

                {/* Card Main Body */}
                <div className="p-6 sm:p-10 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    
                    {/* Left Column: Title, Ingress, Full description & Methodology (7 cols) */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                      <div>
                        {/* Title & Icon */}
                        <div className="flex items-start gap-4 mb-5">
                          <div className="w-12 h-12 rounded-2xl bg-[#7851A9]/20 border border-[#7851A9]/40 flex items-center justify-center text-[#B89FE0] shrink-0 mt-1">
                            {getServiceIcon(service.icon, 22)}
                          </div>
                          <div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                              {service.title}
                            </h3>
                            <p className="text-sm sm:text-base text-[#B89FE0] font-medium mt-1">
                              {service.shortDesc}
                            </p>
                          </div>
                        </div>

                        {/* Full Description */}
                        <p className="text-sm sm:text-base text-[#A8A8A8] leading-relaxed mb-6">
                          {service.fullDesc}
                        </p>

                        {/* Methodology Section */}
                        {service.methodology && (
                          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 mb-6">
                            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white mb-2">
                              <Zap size={14} className="text-[#7851A9]" />
                              <span>Vår Metodik & Exekvering</span>
                            </div>
                            <p className="text-xs sm:text-sm text-[#A8A8A8] leading-relaxed">
                              {service.methodology}
                            </p>
                          </div>
                        )}

                        {/* Target Persona Callout */}
                        {service.targetPersona && (
                          <div className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-[#7851A9]/10 border border-[#7851A9]/30 text-xs sm:text-sm text-[#EDEDED] mb-6">
                            <UserCheck size={17} className="text-[#7851A9] shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold text-white">Primär målgrupp: </span>
                              <span className="text-[#A8A8A8]">{service.targetPersona}</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4">
                        <Button
                          href={`/boka-mote?service=${service.id}`}
                          variant="primary"
                          size="md"
                          hasArrow
                        >
                          Boka möte för {service.title.split(" ")[0]}
                        </Button>
                        <Link
                          href="#jamforelse"
                          className="text-xs sm:text-sm font-medium text-[#A8A8A8] hover:text-white transition-colors"
                        >
                          Se ROI-kalkyl & jämförelse →
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Deliverables Checklist & Tools Stack (5 cols) */}
                    <div className="lg:col-span-5 bg-[#161616] p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/10">
                          <span className="text-xs font-semibold uppercase tracking-wider text-white">
                            Konkreta Leverabler
                          </span>
                          <span className="text-[11px] text-[#7851A9] font-mono">
                            Garanterad kvalitet
                          </span>
                        </div>

                        {/* Deliverables List */}
                        <ul className="space-y-3.5 mb-8">
                          {service.deliverables?.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#EDEDED]">
                              <div className="w-5 h-5 rounded-full bg-[#7851A9]/20 flex items-center justify-center shrink-0 mt-0.5">
                                <CheckCircle2 size={13} className="text-[#7851A9]" />
                              </div>
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech & Integration Stack */}
                      {service.tools && service.tools.length > 0 && (
                        <div className="pt-4 border-t border-white/10">
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6E6E6E] block mb-2.5">
                            Verktyg & Systemkopplingar
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {service.tools.map((tool, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-[#A8A8A8]"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Anchor point for #integration if navigated directly from footer */}
        <div id="integration" className="scroll-mt-32" />

      </Container>
    </section>
  );
};

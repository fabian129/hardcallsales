"use client";

import React, { useState } from "react";
import {
  Calculator,
  Clock,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const RoiCalculator: React.FC = () => {
  // Input states
  const [teamSize, setTeamSize] = useState<number>(3);
  const [currentMeetings, setCurrentMeetings] = useState<number>(8);
  const [dealSize, setDealSize] = useState<number>(150000);
  const [closeRate, setCloseRate] = useState<number>(20);

  // Dynamic calculations
  // LinkedClient conservatively delivers ~12 extra qualified meetings per rep per month (min 15 total)
  const additionalMeetingsPerMonth = Math.max(15, Math.round(teamSize * 12));
  const newTotalMeetings = teamSize * currentMeetings + additionalMeetingsPerMonth;
  const newMonthlyPipeline = additionalMeetingsPerMonth * dealSize;
  const estimatedNewDealsPerMonth = additionalMeetingsPerMonth * (closeRate / 100);
  const estimatedAnnualNewRevenue = estimatedNewDealsPerMonth * dealSize * 12;
  const savedSdrHoursPerMonth = teamSize * 35; // 35 hrs/rep saved from manual prospecting

  // Estimated ROI multiple (benchmarked against estimated pilot/drift cost)
  const estimatedMonthlyCost = 25000 + teamSize * 5000;
  const monthlyGrossReturn = estimatedNewDealsPerMonth * dealSize;
  const roiMultiple = (monthlyGrossReturn / estimatedMonthlyCost).toFixed(1);

  // Currency formatting helper
  const formatSEK = (val: number) => {
    return new Intl.NumberFormat("sv-SE", {
      style: "currency",
      currency: "SEK",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="roi-kalkylator" className="w-full bg-[#0A0A0A] text-white py-20 sm:py-28 border-b border-[#2B2B2B] relative scroll-mt-20">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#7851A9]/15 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />

      <Container size="wide" className="relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Badge variant="purple-soft" size="md" className="mb-4">
            <Calculator size={13} className="text-[#7851A9] mr-1" />
            <span>Interaktiv ROI-Kalkylator</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Beräkna effekten av LinkedClient för ert team
          </h2>
          <p className="text-base sm:text-lg text-[#A8A8A8] font-normal leading-relaxed">
            Dra i reglagen för att simulera hur många extra kvalificerade möten, hur mycket ny pipeline och vilket ROI ni kan förvänta er.
          </p>
        </div>

        {/* Main Calculator Grid: Controls (6 cols) & Live Results (6 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Interactive Sliders (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-10 rounded-3xl bg-[#111111] border border-[#2B2B2B] shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-white/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-white">
                  Justera Parametrar
                </span>
                <span className="text-xs text-[#7851A9] font-mono">
                  Realtidssimulering
                </span>
              </div>

              {/* Slider 1: Team Size */}
              <div className="mb-7">
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-2">
                  <span className="text-[#EDEDED]">Antal säljare / Account Executives</span>
                  <span className="font-mono text-base text-[#7851A9] font-bold">
                    {teamSize} {teamSize === 1 ? "säljare" : "säljare"}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="1"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#7851A9]"
                />
                <div className="flex justify-between text-[11px] text-[#6E6E6E] font-mono mt-1">
                  <span>1 säljare</span>
                  <span>15 säljare</span>
                </div>
              </div>

              {/* Slider 2: Current Meetings per Rep */}
              <div className="mb-7">
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-2">
                  <span className="text-[#EDEDED]">Nuvarande bokade möten per säljare / mån</span>
                  <span className="font-mono text-base text-[#7851A9] font-bold">
                    {currentMeetings} möten / mån
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="20"
                  step="1"
                  value={currentMeetings}
                  onChange={(e) => setCurrentMeetings(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#7851A9]"
                />
                <div className="flex justify-between text-[11px] text-[#6E6E6E] font-mono mt-1">
                  <span>2 möten</span>
                  <span>20 möten</span>
                </div>
              </div>

              {/* Slider 3: Average Deal Size (ACV) */}
              <div className="mb-7">
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-2">
                  <span className="text-[#EDEDED]">Genomsnittligt ordervärde (ACV)</span>
                  <span className="font-mono text-base text-[#7851A9] font-bold">
                    {formatSEK(dealSize)}
                  </span>
                </div>
                <input
                  type="range"
                  min="30000"
                  max="800000"
                  step="10000"
                  value={dealSize}
                  onChange={(e) => setDealSize(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#7851A9]"
                />
                <div className="flex justify-between text-[11px] text-[#6E6E6E] font-mono mt-1">
                  <span>30 000 kr</span>
                  <span>800 000 kr</span>
                </div>
              </div>

              {/* Slider 4: Win Rate */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-2">
                  <span className="text-[#EDEDED]">Stängningsfrekvens (Win Rate på möte)</span>
                  <span className="font-mono text-base text-emerald-400 font-bold">
                    {closeRate} %
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="40"
                  step="5"
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] text-[#6E6E6E] font-mono mt-1">
                  <span>10 % (Konservativ)</span>
                  <span>40 % (Hög)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/10 text-xs text-[#A8A8A8]">
              * Beräkningen baseras på historiska utfall från 13+ IT- och SaaS-kundbolag hos Hard Call Sales.
            </div>
          </div>

          {/* Right Column: Dynamic Live Results Output (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0D0D0D] border border-[#7851A9]/40 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            {/* Top Glowing Indicator */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#7851A9]/20 blur-3xl pointer-events-none rounded-full" />

            <div>
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-white/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#B89FE0]">
                  Beräknat Resultat
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
                  ROI: {roiMultiple}x
                </span>
              </div>

              {/* Main Primary KPI Output */}
              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 mb-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#A8A8A8] mb-1">
                  Nya Kvalificerade Möten / Månad
                </div>
                <div className="text-4xl sm:text-5xl font-mono font-bold text-white tracking-tight flex items-baseline gap-2">
                  <span>+{additionalMeetingsPerMonth}</span>
                  <span className="text-sm sm:text-base font-sans text-[#7851A9] font-normal">
                    bokade möten
                  </span>
                </div>
                <div className="text-xs text-[#A8A8A8] mt-1.5">
                  Totalt i teamet: <strong className="text-white">{newTotalMeetings} möten / mån</strong> (en ökning med +{Math.round((additionalMeetingsPerMonth / (teamSize * currentMeetings)) * 100)} %)
                </div>
              </div>

              {/* Secondary Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="text-xs text-[#6E6E6E] font-medium mb-1">
                    Nytt Pipeline-värde / mån
                  </div>
                  <div className="text-xl sm:text-2xl font-mono font-bold text-white">
                    {formatSEK(newMonthlyPipeline)}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="text-xs text-[#6E6E6E] font-medium mb-1">
                    Uppskattad Nya Avtal / år
                  </div>
                  <div className="text-xl sm:text-2xl font-mono font-bold text-emerald-400">
                    {formatSEK(estimatedAnnualNewRevenue)}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 sm:col-span-2 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-xs text-[#EDEDED]">
                    <Clock size={16} className="text-[#7851A9]" />
                    <span>Sparad prospekteringstid i teamet:</span>
                  </div>
                  <span className="font-mono font-bold text-white text-sm">
                    {savedSdrHoursPerMonth} timmar / mån
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Booking CTA */}
            <div className="pt-4 border-t border-white/10">
              <Button
                href={`/boka-mote?service=linkedclient&teamSize=${teamSize}&dealSize=${dealSize}`}
                variant="primary"
                size="lg"
                hasArrow
                fullWidth
              >
                Boka demo baserat på er kalkyl
              </Button>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
};

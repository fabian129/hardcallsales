"use client";

import React, { useState } from "react";
import {
  Route,
  ChevronDown,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PILOT_STEPS } from "@/data/pilotSteps";

export const PilotTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const scrollToTimeline = () => {
    const el = document.getElementById("timeline-steps");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pilot" className="w-full bg-[#FAFAFA] text-[#0F0F0F] pt-12 pb-24 border-b border-[#E6E6E6]">
      
      {/* Top Hero Plate (Matching Pencil Frame eI0p3) */}
      <Container size="wide" className="mb-16 sm:mb-24">
        <div className="rounded-3xl lg:rounded-[36px] bg-[#0A0A0A] text-white p-8 sm:p-14 lg:p-20 relative overflow-hidden shadow-2xl border border-white/10">

          <div className="relative z-10 max-w-4xl">
            
            {/* Header Row: Label & 3 Metadata Chips */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Route size={18} className="text-[#7851A9]" />
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white">
                  Pilotmodellen
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="purple" size="sm" className="font-bold">
                  6 steg
                </Badge>
                <Badge variant="glass" size="sm">
                  3 månaders test
                </Badge>
                <Badge variant="glass" size="sm">
                  10–100 möten/mån
                </Badge>
              </div>
            </div>

            {/* Massive Display Title */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6">
              SÅ HÄR FUNGERAR EN PILOT MED OSS
            </h2>

            {/* Subhead */}
            <p className="text-base sm:text-xl text-[#A8A8A8] font-normal leading-relaxed max-w-2xl mb-10">
              Tre månaders strukturerat test, sex tydliga steg. Ni ser det faktiska resultatet och den genererade affärsnyttan innan ni binder er för ett längre samarbete.
            </p>

            {/* CTA & Scroll indicator */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                href="/boka-mote"
                variant="primary"
                size="lg"
                hasArrow
              >
                Starta en pilot
              </Button>

              <button
                onClick={scrollToTimeline}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-[#A8A8A8] hover:text-white border border-white/10 hover:border-white/20 transition-all cursor-pointer"
              >
                <span>Gå igenom alla 6 steg</span>
                <ChevronDown size={16} />
              </button>
            </div>

          </div>
        </div>
      </Container>

      {/* The 6-Step Timeline Section */}
      <Container size="wide" id="timeline-steps" className="scroll-mt-24">
        
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#7851A9] bg-[#7851A9]/10 px-3 py-1 rounded-full border border-[#7851A9]/20 mb-3 inline-block">
            Steg för steg
          </span>
          <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0F0F0F] mb-4">
            Från målgruppsanalys till verifierat affärsresultat
          </h3>
          <p className="text-sm sm:text-base text-[#6E6E6E]">
            En beprövad metodik över 3 månader utvecklad för att maximera antal bokade möten och säkra hög show rate.
          </p>
        </div>

        {/* Interactive Step Switcher Bar */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {PILOT_STEPS.map((step, idx) => (
            <button
              key={step.step}
              onClick={() => setActiveStep(idx)}
              className={`px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeStep === idx
                  ? "bg-[#7851A9] text-white shadow-md"
                  : "bg-white text-[#6E6E6E] border border-[#E6E6E6] hover:border-[#7851A9]/40 hover:text-[#0F0F0F]"
              }`}
            >
              {step.step}. {step.title.split("&")[0].trim()}
            </button>
          ))}
          {activeStep !== null && (
            <button
              onClick={() => setActiveStep(null)}
              className="text-xs text-[#7851A9] font-medium hover:underline px-2"
            >
              Visa alla
            </button>
          )}
        </div>

        {/* Timeline Container with Central Spine */}
        <div className="relative">
          
          {/* Vertical Spine Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 -translate-x-1/2 w-[2px] bg-[#E4E4E4]" />

          {/* 6 Steps List */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {PILOT_STEPS.map((step, index) => {
              const isLeft = step.layoutSide === "left";
              const isSelected = activeStep === index;
              const isDimmed = activeStep !== null && !isSelected;

              return (
                <div
                  key={step.step}
                  id={`step-${step.step}`}
                  className={`relative flex flex-col lg:flex-row items-center transition-opacity duration-300 ${
                    isDimmed ? "opacity-40 hover:opacity-100" : "opacity-100"
                  } ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                  onMouseEnter={() => {
                    if (activeStep === null) setActiveStep(index);
                  }}
                  onMouseLeave={() => {
                    if (activeStep === index) setActiveStep(null);
                  }}
                >
                  
                  {/* Step Content Card */}
                  <div className="w-full lg:w-[48%]">
                    <div
                      className={`p-6 sm:p-8 rounded-2xl bg-white border transition-all duration-300 shadow-sm ${
                        isSelected
                          ? "border-[#7851A9] shadow-lg shadow-[#7851A9]/10 -translate-y-1 ring-1 ring-[#7851A9]/20"
                          : "border-[#E6E6E6] hover:border-[#7851A9]/40"
                      }`}
                    >
                      {/* Step Header */}
                      <div className="flex items-baseline justify-between mb-4">
                        <span className="text-4xl sm:text-5xl font-bold font-mono tracking-tight text-[#7851A9]">
                          {step.step}
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#6E6E6E] bg-[#F2F2F2] px-2.5 py-1 rounded-md">
                          Fas {index + 1}
                        </span>
                      </div>

                      <h4 className="text-xl sm:text-2xl font-bold text-[#0F0F0F] tracking-tight mb-2">
                        {step.title}
                      </h4>

                      {step.subtitle && (
                        <p className="text-xs sm:text-sm text-[#7851A9] font-medium mb-5">
                          {step.subtitle}
                        </p>
                      )}

                      {/* Deliverables & Checkpoints List */}
                      <ul className="space-y-2.5 pt-3 border-t border-[#F0F0F0]">
                        {step.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-[13.5px] text-[#4A4A4A] leading-relaxed">
                            <span className="w-2.5 h-[2px] bg-[#7851A9] rounded-full mt-2 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Central Node Circle (Desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FAFAFA] border-2 border-[#E4E4E4] items-center justify-center z-10 transition-colors duration-200">
                    <div
                      className={`w-3.5 h-3.5 rounded-full transition-all duration-200 ${
                        isSelected
                          ? "bg-[#7851A9] scale-125 shadow-[0_0_10px_#7851A9]"
                          : "bg-[#7851A9]/60"
                      }`}
                    />
                  </div>

                  {/* Empty Spacer on Opposite Side */}
                  <div className="hidden lg:block w-[48%]" />

                </div>
              );
            })}
          </div>

        </div>

      </Container>
    </section>
  );
};

"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Check, Calendar } from "lucide-react";
import { openCalModal, DEFAULT_CAL_LINK } from "@/components/cal/CalProvider";

export const ContactSplitSection: React.FC = () => {
  return (
    <section id="kontakt" className="w-full bg-[#0D0D0D] py-24 sm:py-32 border-b border-[#1F1F1F] relative overflow-hidden">
      
      {/* Subtle vertical architectural grid lines matching the process section */}
      <div className="absolute inset-0 pointer-events-none max-w-[1500px] mx-auto grid grid-cols-4 border-x border-white/[0.03]">
        <div className="border-r border-white/[0.03] h-full" />
        <div className="border-r border-white/[0.03] h-full" />
        <div className="border-r border-white/[0.03] h-full" />
      </div>

      <Container size="wide" className="relative z-10">
        {/* Large White Container Box */}
        <div className="max-w-[1280px] mx-auto rounded-[36px] bg-white p-6 sm:p-8 lg:p-10 xl:p-12 shadow-2xl border border-[#EBEBEB]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch">
            
            {/* Left Side: Dark Hero Info Card */}
            <div className="lg:col-span-5 rounded-[28px] bg-[#0D0D0D] text-white p-8 sm:p-10 lg:p-12 flex flex-col justify-between shadow-xl min-h-[480px]">
              <div>
                {/* Official Hard Call Sales Brand Logo in Top-Left */}
                <div className="flex items-center gap-3 mb-8 sm:mb-10">
                  <div className="w-4 h-4 bg-white [clip-path:polygon(100%_0,0_50%,100%_100%)] shrink-0" />
                  <div className="flex flex-col leading-none">
                    <span className="font-bold tracking-widest text-xs sm:text-[13px] uppercase text-white font-sans">HARD CALL</span>
                    <span className="text-[10px] sm:text-[11px] text-[#888888] font-medium tracking-wider uppercase font-sans mt-0.5">sales</span>
                  </div>
                </div>

                {/* Main Heading */}
                <h3 className="text-3xl sm:text-4xl font-normal tracking-tight leading-[1.16] mb-5 sm:mb-6 text-white">
                  <span className="text-[#7851A9] font-medium">Boka</span> ett samtal med<br />vår mötesexpert
                </h3>

                {/* Body Paragraph */}
                <p className="text-sm sm:text-[15px] text-[#9E9E9E] font-normal leading-[1.65] mb-8 sm:mb-10">
                  Vår mötesexpert går igenom din pipeline med dig. Oavsett om ni säljer till IT-chefer, SaaS-bolag eller upphandlare bygger vi ett upplägg som passar er — och visar exakt hur en pilot skulle se ut hos er.
                </p>
              </div>

              {/* Bottom Testimonial Block: Centered text in box + author Mattias Holm / Säljchef, AVEVA centered underneath + active white line and gray dot */}
              <div className="flex flex-col items-center">
                {/* Centered AVEVA Box */}
                <div className="w-full rounded-[18px] bg-[#161616] border border-white/[0.08] p-5 sm:p-6 text-white shadow-md text-center">
                  <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-[#A8A8A8] uppercase tracking-wider mb-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
                    <span>AVEVA</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#E0E0E0] font-normal leading-relaxed text-center">
                    ”Hard Call Sales fyllde kalendern på sex veckor. Vi slapp bygga en egen SDR-funktion.”
                  </p>
                </div>

                {/* Centered Author Underneath */}
                <div className="text-center mt-3.5 sm:mt-4">
                  <span className="font-semibold text-white text-xs sm:text-sm block">Mattias Holm</span>
                  <span className="text-[#777777] text-[11px] sm:text-xs block mt-0.5">Säljchef, AVEVA</span>
                </div>

                {/* Testimonial Pagination Indicator: Active white line + gray dot */}
                <div className="flex items-center justify-center gap-2 mt-3.5 sm:mt-4">
                  <span className="w-4 h-0.5 rounded-full bg-white" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#333333]" />
                </div>
              </div>

            </div>

            {/* Right Side: Direct Cal.com Booking View (No Form) */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between rounded-[28px]">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700 text-xs font-mono uppercase tracking-wider mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7851A9]" />
                  <span>Direktbokning · 15 min</span>
                </div>

                <h4 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#111111] leading-[1.15] mb-5">
                  Välj en tid direkt i kalendern
                </h4>

                <p className="text-sm sm:text-base text-[#555555] font-light leading-relaxed mb-8 max-w-xl">
                  Ett förutsättningslöst 15-minuters strategisamtal direkt med Malin Berlin. Vi går igenom er ideala kundprofil, er nuvarande pipeline och visar hur en 3-månaders pilot fylls med kvalificerade möten.
                </p>

                {/* Meeting Highlights */}
                <div className="space-y-3.5 mb-8 sm:mb-10">
                  <div className="flex items-center gap-3 text-sm sm:text-[15px] text-neutral-800">
                    <div className="w-5 h-5 rounded-full bg-[#7851A9]/10 text-[#7851A9] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>15 min digitalt videomöte via Google Meet / Teams</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm sm:text-[15px] text-neutral-800">
                    <div className="w-5 h-5 rounded-full bg-[#7851A9]/10 text-[#7851A9] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Genomgång av era målgrupper och beslutsfattare</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm sm:text-[15px] text-neutral-800">
                    <div className="w-5 h-5 rounded-full bg-[#7851A9]/10 text-[#7851A9] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>Konkret förslag på upplägg och prognos för en 3-månaders pilot</span>
                  </div>
                </div>
              </div>

              {/* Direct Booking CTA */}
              <div className="pt-6 sm:pt-8 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => openCalModal()}
                  data-cal-link={DEFAULT_CAL_LINK}
                  data-cal-config='{"layout":"month_view","theme":"dark"}'
                  className="inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-full bg-[#0A0A0A] hover:bg-[#222222] text-white text-sm sm:text-base font-semibold tracking-wide transition-all shadow-md hover:shadow-xl cursor-pointer group"
                >
                  <Calendar className="w-4 h-4 text-[#7851A9]" />
                  <span>Boka möte här</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
                <span className="text-xs text-neutral-400 font-light">
                  Kostnadsfritt · Inga förberedelser krävs
                </span>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};

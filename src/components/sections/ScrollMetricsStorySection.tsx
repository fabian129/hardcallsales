"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";

interface MetricStep {
  number: string;
  suffix?: string;
  title: string;
  description: string;
  highlightWords: string[];
}

const METRIC_STEPS: MetricStep[] = [
  {
    number: "100M+",
    title: "100 miljoner i databasen",
    description:
      "Vi filtrerar fram exakt de beslutsfattare som matchar er ideala kundprofil — och rensar bort allt brus.",
    highlightWords: ["ideala kundprofil", "rensar bort"],
  },
  {
    number: "70 000+",
    title: "70 000 nya kontakter",
    description:
      "Samtidigt som vi bokar möten växer ert nätverk med relevanta beslutsfattare. Kontakter ni äger för alltid.",
    highlightWords: ["växer ert nätverk", "äger för alltid"],
  },
  {
    number: "Autopilot",
    title: "Pågående leadgenerering",
    description:
      "När nätverket är byggt fortsätter vi engagera. Vi värmer upp kalla kontakter och aktiverar dem när behov uppstår.",
    highlightWords: ["fortsätter vi engagera", "aktiverar dem"],
  },
];

export const ScrollMetricsStorySection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // EventPartner DarkZone-stil: Börjar ljust (#FBFBFC) med tomt innehåll, släcker och tänder när man scrollar in
  const [darkProgress, setDarkProgress] = useState(1);
  const [revealProgress, setRevealProgress] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // 1. Bakgrunden släcker i EXAKT samma takt som sektionen ovanför (100% synk):
      // rect.top === rect1.bottom vid varje enskild scroll-pixel
      const distance = windowHeight - rect.top;
      const dim = Math.min(1, Math.max(0, distance / (windowHeight * 0.22)));
      setDarkProgress(dim);

      // 2. Tändning & Blur: Startar direkt från början så att innehållet blurrar in omedelbart
      const reveal = Math.min(1, Math.max(0, distance / (windowHeight * 0.45)));
      setRevealProgress(reveal);

      // 3. Bläddring genom de 3 metriksen när sektionen är fastlåst (rect.top <= 0)
      const totalScrollable = rect.height - windowHeight;
      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);
      const index = Math.min(
        METRIC_STEPS.length - 1,
        Math.floor(progress * METRIC_STEPS.length)
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="siffrorna"
      ref={sectionRef}
      className="relative w-full h-[300vh] bg-[#FBFBFC] text-white"
    >
      {/* ── BAKGRUNDSDIMMER: Börjar helt ljus (#FBFBFC) och släcker snabbt till #050505 när man rullar in ── */}
      <div 
        className="absolute inset-0 bg-[#050505] transition-opacity duration-75 ease-out pointer-events-none z-0"
        style={{ opacity: darkProgress }}
      />

      {/* ── STICKY VIEWPORT CONTAINER (Låser fast så du inte swishar förbi) ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center z-10">

        {/* ── EXPANDED CONTAINER WITH LUXURIOUS HEADROOM BENEATH NAVBAR ── */}
        <div className="relative z-10 w-full max-w-[1760px] h-full mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 flex flex-col justify-between pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-12 lg:pb-14">
          
          <div className="flex flex-col lg:flex-row items-stretch w-full h-full">
            
            {/* ════ LEFT ZONE (~28-30%): Portrait full height, edge on white line, hair at eyebrow ════ */}
            <div className="w-full lg:w-[30%] xl:w-[28%] shrink-0 lg:border-r border-white/10 lg:pr-10 xl:pr-14 flex flex-col justify-between relative">
              
              {/* ── BACKGROUND PORTRAIT: Full section height, right edge locked to white line, tänder i svärtan ── */}
              <div className="absolute -top-32 sm:-top-36 lg:-top-44 -bottom-12 sm:-bottom-16 lg:-bottom-20 -left-28 sm:-left-36 lg:-left-56 xl:-left-72 right-0 pointer-events-none select-none z-0 overflow-hidden flex items-center justify-end">
                <div 
                  className="relative w-full h-full flex items-center justify-end translate-y-16 sm:translate-y-20 lg:translate-y-28 scale-[0.88] origin-top-right transition-all duration-500 ease-out"
                  style={{
                    opacity: revealProgress,
                    transform: `translateY(${28 + (1 - revealProgress) * 20}px) scale(0.88)`,
                  }}
                >
                  <img
                    src="/images/hero-profile-framed.jpg"
                    alt="Hard Call Sales Nätverk"
                    className="w-full h-full object-cover object-[right_top] grayscale contrast-[1.25] brightness-[0.95] opacity-90 transition-all duration-700"
                  />
                  {/* Soft organic top, bottom and outer edge fades to pure #050505 */}
                  <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#050505] via-[#050505]/40 to-transparent pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent pointer-events-none" />
                  <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Tag in top-left with matching line height (tänds mjukt) */}
              <div 
                className="pb-8 lg:pb-10 border-b border-white/10 relative z-10 transition-opacity duration-500"
                style={{ opacity: revealProgress }}
              >
                <span className="text-xs sm:text-[13px] font-mono tracking-[0.22em] text-white/50 uppercase">
                  02 / NÄTVERKET
                </span>
              </div>

              {/* Open space where the background portrait shines through cleanly */}
              <div className="hidden lg:block flex-1 relative z-10" />
            </div>

            {/* ════ RIGHT ZONE (~70-72%): Lower Positioned Headline + 3 Rows Nudged Down (Tänder i svärtan) ════ */}
            <div 
              className="w-full lg:w-[70%] xl:w-[72%] lg:pl-12 xl:pl-16 flex flex-col justify-between h-full transition-all duration-500 ease-out"
              style={{
                opacity: revealProgress,
                transform: `translateY(${(1 - revealProgress) * 24}px)`,
                filter: `blur(${(1 - revealProgress) * 5}px)`,
              }}
            >
              
              {/* Permanent Big Bold Headline (No underline, 2 clean lines) */}
              <div className="pb-8 lg:pb-10 border-b border-white/10 flex items-center">
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[52px] font-normal text-white leading-[1.18] tracking-tight max-w-5xl">
                  Vi bygger ert nätverk –
                  <span className="block mt-1 sm:mt-2">
                    samtidigt som vi bokar era möten
                  </span>
                </h2>
              </div>

              {/* Bottom Rows: 3 Metrics with certified depth-of-field blur */}
              <div className="flex-1 flex flex-col justify-around pt-6 sm:pt-8 lg:pt-10 pb-4 sm:pb-6">
                {METRIC_STEPS.map((step, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <div
                      key={step.number}
                      onClick={() => setActiveIndex(idx)}
                      className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12 lg:gap-16 xl:gap-24 cursor-pointer group select-none transition-all duration-500"
                    >
                      {/* Gigantic Number */}
                      <div className="w-[240px] sm:w-[320px] lg:w-[380px] xl:w-[440px] shrink-0">
                        <span
                          className={`inline-block whitespace-nowrap text-6xl sm:text-7xl lg:text-[104px] xl:text-[124px] font-normal tracking-[-0.04em] leading-none transition-all duration-700 ease-out ${
                            isActive
                              ? "text-white opacity-100 blur-none scale-100"
                              : "text-white opacity-15 blur-[3px] scale-[0.98] group-hover:opacity-35 group-hover:blur-[1px]"
                          }`}
                        >
                          {step.number}
                        </span>
                      </div>

                      {/* Large 3-Line Description */}
                      <div className="max-w-[280px] sm:max-w-[340px] lg:max-w-[380px]">
                        <p
                          className={`text-base sm:text-lg lg:text-[20px] font-normal leading-[1.3] transition-all duration-700 ease-out ${
                            isActive
                              ? "text-neutral-200 opacity-100 blur-none"
                              : "text-neutral-400 opacity-20 blur-[2px]"
                          }`}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}

                {/* ── CALL TO ACTION KNAPP UNDER AUTOPILOT ── */}
                <div className="pt-4 sm:pt-6 flex items-center">
                  <Button
                    href="/boka-mote"
                    variant="primary"
                    size="lg"
                    hasArrow
                    className="shadow-2xl shadow-[#7851A9]/30"
                  >
                    Boka ett möte
                  </Button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

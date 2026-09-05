"use client";

import React, { useState } from "react";
import { Mail, Globe, PhoneCall, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const METHODOLOGY_ITEMS = [
  {
    num: "01",
    tag: "E-postkampanjer",
    title: "Träffsäkra mejlsekvenser mot er exakta ICP",
    desc: "Vi sätter upp en isolerad domäninfrastruktur (SPF, DKIM, DMARC) och skriver skräddarsydd copy som når beslutsfattare utan att flaggas som spam.",
    points: ["Isolerade avsändardomäner", "A/B-testade ämnesrader", "Realtidsuppföljning av svar"],
  },
  {
    num: "02",
    tag: "LinkedIn & AI",
    title: "Nätverksbyggande & LinkedClient-agenten",
    desc: "Vi kopplar upp era profiler mot 100M+ globala beslutsfattare och värmer upp era prospekts med intelligenta touchpoints innan säljteamet ringer.",
    points: ["100M+ global databas", "Profiloptimering & dialoger", "Full CRM-synk (HubSpot/Salesforce)"],
  },
  {
    num: "03",
    tag: "Kalla samtal",
    title: "Seniora mötesbokare med 10 000+ timmar",
    desc: "När intresse visas tar våra erfarna säljare vid över telefon. Vi kvalificerar mot er ICP och bokar in mötet direkt i era säljares kalendrar.",
    points: ["Kvalificering mot BANT-kriterier", ">85 % genomsnittlig show-rate", "Möten bokade direkt i kalender"],
  },
];

export const MethodologyLightSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F5F5F5] text-[#0A0A0A] py-24 sm:py-32 border-b border-[#E5E5E5] relative">
      <Container size="wide">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
            <div>
              <Reveal delay={0.1} yOffset={20}>
                <span className="text-xs font-mono uppercase tracking-widest text-[#7851A9] font-bold block mb-3">
                  METODIK & KANALER
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#0A0A0A] leading-tight">
                  Hur vi bygger er mötespipeline
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.2} yOffset={20}>
              <p className="text-xs sm:text-sm text-[#666666] max-w-md">
                Tre integrerade discipliner som tillsammans genererar kvalitativa B2B-möten med köpredo beslutsfattare.
              </p>
            </Reveal>
          </div>

          {/* 3 Crisp White Paper Cards with 1px border - Anti AI Slop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {METHODOLOGY_ITEMS.map((item, idx) => (
              <Reveal key={idx} delay={0.15 * (idx + 1)} yOffset={25}>
                <div className="rounded-xl bg-white border border-[#E0E0E0] p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow min-h-[360px]">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#666666] bg-[#F0F0F0] px-2.5 py-1 rounded-[4px]">
                        {item.tag}
                      </span>
                      <span className="text-xs font-mono text-[#999999]">
                        {item.num}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold tracking-tight text-[#0A0A0A] mb-3 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-[#555555] leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#F0F0F0] space-y-2">
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs text-[#444444]">
                        <CheckCircle2 size={13} className="text-[#7851A9] shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};

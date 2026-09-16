"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RotateCcw, Mic, ArrowUp } from "lucide-react";

interface FeatureStep {
  id: string;
  title: string;
  agentResponse: string;
  thinkingText: string;
}

const featureSteps: FeatureStep[] = [
  {
    id: "understand",
    title: "Förstår beslutsfattaren först",
    thinkingText: "Analyserar Marinas roll, företagets tekniska stack och tidigare beröringspunkter...",
    agentResponse:
      "Full förståelse Marina! De flesta ledare vi pratar med har inte tid att utvärdera fler verktyg just nu. Anledningen till att jag kontaktar dig är att Vivante ökade sina kvalificerade säljmöten med 240% utan att byta sitt befintliga CRM.",
  },
  {
    id: "relevance",
    title: "Visar vad som faktiskt spelar roll",
    thinkingText: "Hämtar branschspecifik benchmark och ROI-data för tillverkande B2B...",
    agentResponse:
      "Vi vet att er största flaskhals är tiden era seniora säljare lägger på manuell prospektering. Vår agent sköter den inledande dialogen dygnet runt, så att ni bara kliver in när intresset redan är verifierat.",
  },
  {
    id: "forward",
    title: "Driver dialogen framåt",
    thinkingText: "Formulerar lågtröskel-inbjudan med hänsyn till invändningen...",
    agentResponse:
      "Låt oss göra så här: jag visar en 10-minuters live-genomgång anpassad för er målgrupp. Om du efter det känner att timingen är fel lovar jag att inte följa upp mer. Skulle torsdag kl 13:30 passa?",
  },
  {
    id: "shared",
    title: "Skapar gemensam förståelse",
    thinkingText: "Synkar mötesunderlag och kvalificeringsdata till CRM...",
    agentResponse:
      "Lysande! Jag har reserverat 15 minuter och synkat all historik direkt till er kalenderinbjudan. Vår seniora rådgivare ringer upp dig.",
  },
];

export const LinkedClientPlaygroundSection: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<string>("understand");
  const [isThinking, setIsThinking] = useState<boolean>(false);
  const activeStep = featureSteps.find((s) => s.id === activeStepId) || featureSteps[0];

  const handleStepClick = (id: string) => {
    if (id === activeStepId) return;
    setIsThinking(true);
    setActiveStepId(id);
    setTimeout(() => {
      setIsThinking(false);
    }, 450);
  };

  const handleReset = () => {
    setIsThinking(true);
    setActiveStepId("understand");
    setTimeout(() => {
      setIsThinking(false);
    }, 300);
  };

  return (
    <section className="w-full bg-[#000000] text-white py-20 sm:py-28 lg:py-36 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Top Header: Eyebrow + Split Title and Ingress matching Bild 2 */}
        <div className="mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-neutral-300 text-xs font-mono mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            <span>Den nya säljupplevelsen</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal tracking-tight text-white leading-[1.15]">
                Hur LinkedClient driver er mötesbokning, 24/7
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                LinkedClient kvalificerar och driver dialogen precis som er skarpaste säljare — utan att kräva manuella mötestimmar.
              </p>
            </div>
          </div>
        </div>

        {/* Main Interactive Grid matching Bild 2 layout with Bild 1 component inside */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Vertical Clickable Feature Steps matching Bild 2 */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4 sm:space-y-5">
              {featureSteps.map((step) => {
                const isActive = step.id === activeStepId;
                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => handleStepClick(step.id)}
                    className={`w-full text-left py-3.5 px-4 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                      isActive
                        ? "text-white bg-white/[0.06] border-l-2 border-[#38BDF8]"
                        : "text-neutral-500 hover:text-neutral-300 hover:bg-white/[0.02]"
                    }`}
                  >
                    <span className={`text-base sm:text-lg tracking-tight ${isActive ? "font-normal text-white" : "font-light"}`}>
                      {step.title}
                    </span>
                    <span className={`w-1.5 h-1.5 rounded-full transition-opacity ${isActive ? "bg-[#38BDF8] opacity-100" : "opacity-0 group-hover:opacity-40"}`} />
                  </button>
                );
              })}
            </div>

            {/* Bottom Footnote matching Bild 2 */}
            <div className="pt-8 border-t border-white/[0.08]">
              <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed">
                LinkedClient fångar och dokumenterar varje interaktion i ert CRM så att era säljare alltid startar samtalen med fullt försprång.
              </p>
            </div>
          </div>

          {/* Right Column: 1:1 Recreation of Bild 1 (Sales Agent Playground Window) */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-[540px] rounded-[32px] bg-[#0C0E14] border border-white/[0.12] p-6 sm:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.95)] relative overflow-hidden">
              
              {/* Subtle Ambient Light Bleed on Left Edge matching Bild 1 */}
              <div className="absolute top-1/3 left-[-30px] w-24 h-48 bg-white/[0.06] blur-2xl rounded-full pointer-events-none" />

              {/* Playground Header matching Bild 1 */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.08] relative z-10">
                <div className="flex items-center gap-3">
                  {/* Chrome Orb Avatar */}
                  <div className="relative w-8 h-8 rounded-full overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.25)] flex-shrink-0">
                    <Image
                      src="/images/agent-orb-clean.png"
                      alt="Sales Agent Orb"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white tracking-tight leading-none mb-1">
                      Sales Agent
                    </h3>
                    <p className="text-[11px] font-light text-neutral-400 leading-none">
                      Playground
                    </p>
                  </div>
                </div>

                {/* Reset Action */}
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-neutral-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/[0.06]"
                  title="Återställ konversation"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Message Stream matching Bild 1 */}
              <div className="space-y-6 mb-8 relative z-10 min-h-[290px]">
                {/* Agent Message 1 */}
                <div className="flex items-start gap-3">
                  <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0 mt-0.5 opacity-80">
                    <Image
                      src="/images/agent-orb-clean.png"
                      alt="Sales Agent Orb"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-xs sm:text-[13px] text-neutral-300 font-light leading-relaxed">
                    Hey, Marina! This is the agent from Aswork. I noticed you downloaded our prospecting guide last week.. Can you spare 10 minutes this afternoon for me to show you how the Vivante team doubled their pipeline in just 60 days?
                  </div>
                </div>

                {/* Prospect Objection Message (Right Aligned Dark Bubble) */}
                <div className="flex justify-end">
                  <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-[#161922] border border-white/[0.08] p-4 text-xs sm:text-[13px] text-neutral-200 font-light leading-relaxed shadow-lg">
                    Look, I downloaded it to read. I&apos;m not looking for a tool right now — maybe next year.
                  </div>
                </div>

                {/* Agent Response / Thinking State matching Bild 1 */}
                <div className="flex items-start gap-3 transition-all duration-300">
                  <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0 mt-0.5 opacity-80">
                    <Image
                      src="/images/agent-orb-clean.png"
                      alt="Sales Agent Orb"
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  {isThinking ? (
                    <div className="text-xs sm:text-[13px] text-neutral-400 font-light flex items-center gap-2 py-1">
                      <span>Thinking...</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                    </div>
                  ) : (
                    <div className="text-xs sm:text-[13px] text-neutral-300 font-light leading-relaxed">
                      {activeStep.agentResponse}
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Input Bar matching Bild 1 */}
              <div className="relative z-10">
                <div className="w-full rounded-full bg-[#12151D] border border-white/[0.09] px-4 py-2.5 flex items-center justify-between text-neutral-400 shadow-inner">
                  <span className="text-xs sm:text-[13px] font-light text-neutral-500">
                    Ask the agent
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="text-neutral-400 hover:text-white transition-colors p-1"
                      aria-label="Röststyrning"
                    >
                      <Mic className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      className="w-6 h-6 rounded-full bg-[#1F2430] border border-white/10 text-white flex items-center justify-center hover:bg-[#282F3E] transition-colors"
                      aria-label="Skicka meddelande"
                    >
                      <ArrowUp className="w-3.5 h-3.5 text-neutral-300" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RotateCcw, Mic, ArrowUp, Users, Send, Clock, UserCheck } from "lucide-react";

interface Scenario {
  id: string;
  tabTitle: string;
  tabSubtitle: string;
  icon: React.ReactNode;
  prospectName: string;
  prospectRole: string;
  thinkingText: string;
  agentInitialMessage: string;
  prospectReply: string;
  agentReply: string;
}

const scenarios: Scenario[] = [
  {
    id: "networking",
    tabTitle: "Nätverksbyggande",
    tabSubtitle: "500–1 000 nya relevanta kontakter / månad",
    icon: <Users className="w-4 h-4 text-[#38BDF8]" />,
    prospectName: "David Lindgren",
    prospectRole: "COO, Industriell Automation",
    thinkingText: "Identifierar gemensamma branschberöringspunkter och formulerar en mjuk kontaktförfrågan...",
    agentInitialMessage:
      "Hej David! Följer er expansion inom industriell automation med stort intresse. Jag knyter gärna kontakt här på LinkedIn för att följa er resa och utbyta erfarenheter kring komplex B2B-försäljning i Norden.",
    prospectReply:
      "Tack! Alltid kul med relevanta branschkontakter. Godkänner gärna. Ser att ni jobbar med flera bolag i vår sektor.",
    agentReply:
      "Verkligen! Många i din roll som vi pratar med märker att marknaden kräver mer proaktivitet just nu. Ska vi ta en 10-minuters digital kaffe nästa vecka och utbyta erfarenheter?",
  },
  {
    id: "cold_prospecting",
    tabTitle: "Kall Prospektering",
    tabSubtitle: "Kvalificerar intresse och bryter isen 24/7",
    icon: <Send className="w-4 h-4 text-[#38BDF8]" />,
    prospectName: "Helena Sjöberg",
    prospectRole: "Head of Sales, Enterprise B2B",
    thinkingText: "Matchar ICP-kriterier och adresserar flaskhalsen med säljares manuella researchtid...",
    agentInitialMessage:
      "Hej Helena! Såg att ni rekryterar flera seniora Account Executives. Många säljchefer vi möter ser att deras säljare lägger upp till 40% av sin tid på manuell research och outreach istället för i kundmöten. Har du 10 minuter för att se hur AVEVA frigjorde 20+ timmar i veckan per säljare?",
    prospectReply:
      "Vi har redan verktyg för lead lists och kör det mesta internt just nu.",
    agentReply:
      "Full förståelse Helena. Skillnaden är att vi inte levererar ännu en verktygslicens eller rå kontaktlista — vår AI-agent för dialogen, hanterar invändningar och lämnar över varma möten direkt i er kalender. Låter 15 minuter tisdag kl 10 rimligt för att se skillnaden?",
  },
  {
    id: "followup",
    tabTitle: "Mötesuppföljning",
    tabSubtitle: "Återaktiverar dialoger med perfekt tajming",
    icon: <Clock className="w-4 h-4 text-[#38BDF8]" />,
    prospectName: "Johan Wallin",
    prospectRole: "VD, Tillverkande Industri",
    thinkingText: "Läser tidigare mötesanteckningar och triggar uppföljning baserat på budgetcykeln...",
    agentInitialMessage:
      "Hej Johan! Vi pratades vid i november kring er pipeline inför Q1. Du nämnde då att ni behövde avvakta den nya budgeten i februari. Hur ser prioriteringarna ut nu när ni kliver in i Q2?",
    prospectReply:
      "Tjena! Budgeten är på plats nu men vi har fullt upp med lanseringen de närmsta två veckorna.",
    agentReply:
      "Grattis till budgeten Johan! Då ska vi absolut inte störa mitt i lanseringen. Jag sätter en påminnelse och skickar en kalenderinbjudan preliminärt till torsdag den 24:e när lanseringen har landat. Funkar 13:00?",
  },
  {
    id: "network_outreach",
    tabTitle: "Outreach mot Nuvarande Nätverk",
    tabSubtitle: "Aktiverar 15 000–30 000 uppbyggda kontakter",
    icon: <UserCheck className="w-4 h-4 text-[#38BDF8]" />,
    prospectName: "Marcus Berg",
    prospectRole: "Head of Partnerships, Tech & IT",
    thinkingText: "Scannar befintliga 1:a-handskontakter efter nya köpsignaler och rollförändringar...",
    agentInitialMessage:
      "Hej Marcus! Vi har varit anslutna här på LinkedIn ett tag. Jag såg att ni precis rullade ut ert nya partnererbjudande. Vi hjälpte nyligen flera bolag i ert nätverk att aktivera sina befintliga kontakter till skarpa möten. Vore det intressant med en snabb brief på hur de gjorde?",
    prospectReply:
      "Låter faktiskt relevant. Hur ser upplägget ut?",
    agentReply:
      "Vår AI scannar era befintliga LinkedIn-kontakter och identifierar köpsignaler baserat på rollbyten och engagemang. Jag har skickat över en 2-minuters översikt till din inkorg — har du tid för en 10-minuters avstämning på torsdag?",
  },
];

export const LinkedClientPlaygroundSection: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState<string>("networking");
  const [isThinking, setIsThinking] = useState<boolean>(false);
  const activeScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  const handleScenarioClick = (id: string) => {
    if (id === activeScenarioId) return;
    setIsThinking(true);
    setActiveScenarioId(id);
    setTimeout(() => {
      setIsThinking(false);
    }, 450);
  };

  const handleReset = () => {
    setIsThinking(true);
    setTimeout(() => {
      setIsThinking(false);
    }, 350);
  };

  return (
    <section id="playground" className="w-full bg-[#000000] text-white py-20 sm:py-28 lg:py-36 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Top Header: Network Growth & Tailored Touchpoints */}
        <div className="mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-neutral-300 text-xs font-mono mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            <span>Autonomt nätverksbyggande & mötesbokning</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-normal tracking-tight text-white leading-[1.14]">
                Bygg ett nätverk av 15 000–30 000 relevanta beslutsfattare
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                LinkedClient bygger ditt nätverk successivt med <strong className="text-white font-medium">500–1 000 nya relevanta kontakter i månaden</strong>. På 2–3 år har ni en egen affärstillgång på 15 000–30 000 kvalificerade B2B-relationer. Du skräddarsyr alla interaktioner och kontaktpunkter helt efter era egna affärsmål.
              </p>
            </div>
          </div>

          {/* Quick Stats Banner */}
          <div className="flex flex-wrap items-center gap-3 pt-6 mt-6 border-t border-white/[0.08] text-xs font-mono text-neutral-400">
            <span className="text-[#38BDF8] font-semibold">+500–1 000</span> nya kontakter/mån
            <span className="text-white/20">•</span>
            <span className="text-white font-semibold">15 000–30 000</span> på 2–3 år
            <span className="text-white/20">•</span>
            <span className="text-emerald-400">100% skräddarsydda kontaktpunkter</span>
          </div>
        </div>

        {/* Main Interactive Grid matching Bild 2 layout with Bild 1 component inside */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 4 Real Commercial Scenarios matching Bild 2 */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-3 sm:space-y-4">
              {scenarios.map((scenario) => {
                const isActive = scenario.id === activeScenarioId;
                return (
                  <button
                    key={scenario.id}
                    type="button"
                    onClick={() => handleScenarioClick(scenario.id)}
                    className={`w-full text-left py-4 px-5 rounded-2xl transition-all duration-300 flex flex-col gap-1 group border ${
                      isActive
                        ? "bg-white/[0.07] border-white/20 shadow-lg"
                        : "bg-white/[0.02] border-transparent hover:bg-white/[0.04] hover:border-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2.5">
                        {scenario.icon}
                        <span className={`text-base sm:text-lg tracking-tight ${isActive ? "font-medium text-white" : "font-normal text-neutral-400"}`}>
                          {scenario.tabTitle}
                        </span>
                      </div>
                      <span className={`w-2 h-2 rounded-full transition-all ${isActive ? "bg-[#38BDF8] scale-100 shadow-[0_0_8px_#38BDF8]" : "bg-neutral-600 scale-75 opacity-0 group-hover:opacity-40"}`} />
                    </div>
                    <p className={`text-xs pl-6 font-light transition-colors ${isActive ? "text-neutral-300" : "text-neutral-500"}`}>
                      {scenario.tabSubtitle}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Bottom Footnote matching Bild 2 */}
            <div className="pt-6 border-t border-white/[0.08]">
              <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed">
                Varje scenario konfigureras med era unika målgrupper, tonalitet och konverteringsmål — AI-agenten sköter dialogen, era säljare tar över när mötet är bokat.
              </p>
            </div>
          </div>

          {/* Right Column: 1:1 Recreation of Bild 1 (Sales Agent Playground Window) */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-[560px] rounded-[32px] bg-[#0C0E14] border border-white/[0.12] p-6 sm:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.95)] relative overflow-hidden">
              
              {/* Ambient Light Bleed on Left Edge matching Bild 1 */}
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
                      Playground · {activeScenario.tabTitle}
                    </p>
                  </div>
                </div>

                {/* Reset Action */}
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-neutral-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/[0.06]"
                  title="Återställ dialog"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Message Stream matching Bild 1 */}
              <div className="space-y-5 mb-8 relative z-10 min-h-[300px]">
                {/* Agent Message 1 */}
                <div className="flex items-start gap-3">
                  <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0 mt-0.5 opacity-85">
                    <Image
                      src="/images/agent-orb-clean.png"
                      alt="Sales Agent Orb"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-xs sm:text-[13px] text-neutral-300 font-light leading-relaxed bg-white/[0.03] p-3.5 rounded-2xl rounded-tl-sm border border-white/[0.05]">
                    {activeScenario.agentInitialMessage}
                  </div>
                </div>

                {/* Prospect Objection/Response Message (Right Aligned Dark Bubble) */}
                <div className="flex justify-end">
                  <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-[#161922] border border-white/[0.08] p-4 text-xs sm:text-[13px] text-neutral-200 font-light leading-relaxed shadow-lg">
                    <div className="text-[10px] font-mono text-neutral-500 mb-1">
                      {activeScenario.prospectName} · {activeScenario.prospectRole}
                    </div>
                    {activeScenario.prospectReply}
                  </div>
                </div>

                {/* Agent Response / Thinking State matching Bild 1 */}
                <div className="flex items-start gap-3 transition-all duration-300">
                  <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0 mt-0.5 opacity-85">
                    <Image
                      src="/images/agent-orb-clean.png"
                      alt="Sales Agent Orb"
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  {isThinking ? (
                    <div className="text-xs sm:text-[13px] text-neutral-400 font-light flex items-center gap-2 py-2 px-3 rounded-2xl bg-white/[0.03]">
                      <span>Thinking...</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                    </div>
                  ) : (
                    <div className="text-xs sm:text-[13px] text-neutral-300 font-light leading-relaxed bg-white/[0.03] p-3.5 rounded-2xl rounded-tl-sm border border-white/[0.05]">
                      {activeScenario.agentReply}
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

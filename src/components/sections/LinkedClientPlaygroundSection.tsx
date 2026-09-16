"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { RotateCcw, Mic, ArrowUp, Users, Send, Clock, UserCheck } from "lucide-react";

interface Scenario {
  id: string;
  tabTitle: string;
  tabSubtitle: string;
  icon: React.ReactNode;
  prospectName: string;
  prospectRole: string;
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
    agentInitialMessage:
      "Hej David! Följer er expansion inom industriell automation. Knyter gärna kontakt här på LinkedIn för att följa er resa och utbyta erfarenheter.",
    prospectReply:
      "Tack David! Godkänner gärna. Ser att ni jobbar med flera bolag i vår sektor.",
    agentReply:
      "Verkligen. Många i din roll märker att marknaden kräver mer proaktivitet just nu. Har du tid för en 10-minuters digital kaffe nästa vecka?",
  },
  {
    id: "cold_prospecting",
    tabTitle: "Kall Prospektering",
    tabSubtitle: "Kvalificerar intresse och bryter isen 24/7",
    icon: <Send className="w-4 h-4 text-[#38BDF8]" />,
    prospectName: "Helena Sjöberg",
    prospectRole: "Head of Sales, Enterprise B2B",
    agentInitialMessage:
      "Hej Helena! Såg att ni rekryterar säljare. Nyfiken på hur ni säkerställer att seniora säljare hinner ta kundmöten istället för manuell research?",
    prospectReply:
      "Vi har redan verktyg för leadlistor och kör ganska mycket själva just nu.",
    agentReply:
      "Full förståelse. Vår AI-agent kvalificerar och bokar mötet direkt i kalendern — säljarna slipper listorna. Låter 10 minuter tisdag rimligt för att se skillnaden?",
  },
  {
    id: "followup",
    tabTitle: "Mötesuppföljning",
    tabSubtitle: "Återaktiverar dialoger med perfekt tajming",
    icon: <Clock className="w-4 h-4 text-[#38BDF8]" />,
    prospectName: "Johan Wallin",
    prospectRole: "VD, Tillverkande Industri",
    agentInitialMessage:
      "Hej Johan! Vi pratades vid kring er pipeline inför budgetrundan. Hur landade prioriteringarna för Q2?",
    prospectReply:
      "Budgeten är på plats nu, men har fullt upp med lanseringen de närmsta två veckorna.",
    agentReply:
      "Grattis till budgeten Johan! Då stör jag inte under lanseringen. Jag reserverar preliminärt torsdag den 24:e när dammet lagt sig. Funkar 13:00?",
  },
  {
    id: "network_outreach",
    tabTitle: "Outreach mot Nuvarande Nätverk",
    tabSubtitle: "Aktiverar 15 000–30 000 uppbyggda kontakter",
    icon: <UserCheck className="w-4 h-4 text-[#38BDF8]" />,
    prospectName: "Marcus Berg",
    prospectRole: "Head of Partnerships, Tech",
    agentInitialMessage:
      "Hej Marcus! Såg att ni rullade ut ert nya erbjudande. Vi hjälpte nyligen flera i ditt nätverk att aktivera slumrande kontakter till skarpa möten.",
    prospectReply:
      "Låter intressant faktiskt. Hur ser upplägget ut?",
    agentReply:
      "Vår AI scannar dina kontakter efter köpsignaler och skickar träffsäker dialog. Skickade en 1-minuts video till din inkorg — har du 10 minuter på torsdag?",
  },
];

export const LinkedClientPlaygroundSection: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState<string>("networking");
  // animStage: 0: reset, 1: msg1 visible, 2: msg2 visible, 2.5: thinking, 3: msg3 visible
  const [animStage, setAnimStage] = useState<number>(3);
  const activeScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  const clearAllTimers = () => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  };

  const startSequentialAnimation = () => {
    clearAllTimers();
    setAnimStage(0);

    const t1 = setTimeout(() => setAnimStage(1), 150);
    const t2 = setTimeout(() => setAnimStage(2), 700);
    const t3 = setTimeout(() => setAnimStage(2.5), 1250);
    const t4 = setTimeout(() => setAnimStage(3), 1900);

    timersRef.current = [t1, t2, t3, t4];
  };

  const handleScenarioClick = (id: string) => {
    if (id === activeScenarioId) {
      startSequentialAnimation();
      return;
    }
    setActiveScenarioId(id);
    startSequentialAnimation();
  };

  useEffect(() => {
    return () => clearAllTimers();
  }, []);

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

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: 4 Real Commercial Scenarios */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-3 sm:space-y-4">
              {scenarios.map((scenario) => {
                const isActive = scenario.id === activeScenarioId;
                return (
                  <button
                    key={scenario.id}
                    type="button"
                    onClick={() => handleScenarioClick(scenario.id)}
                    className={`w-full text-left py-4 px-5 rounded-2xl transition-all duration-300 flex flex-col gap-1 group border cursor-pointer ${
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

            {/* Bottom Footnote */}
            <div className="pt-6 border-t border-white/[0.08]">
              <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed">
                Varje scenario konfigureras med era unika målgrupper, tonalitet och konverteringsmål — AI-agenten sköter dialogen, era säljare tar över när mötet är bokat.
              </p>
            </div>
          </div>

          {/* Right Column: 1:1 Recreation of Bild 1 with Sequential Soft Fade-in */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-[560px] h-[540px] sm:h-[560px] flex flex-col justify-between rounded-[32px] bg-[#0C0E14] border border-white/[0.12] p-6 sm:p-7 shadow-[0_30px_90px_rgba(0,0,0,0.95)] relative overflow-hidden">
              
              {/* Ambient Light Bleed on Left Edge */}
              <div className="absolute top-1/3 left-[-30px] w-24 h-48 bg-white/[0.06] blur-2xl rounded-full pointer-events-none" />

              {/* Playground Header */}
              <div className="flex items-center justify-between pb-5 mb-4 border-b border-white/[0.08] relative z-10 flex-shrink-0">
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

                {/* Replay Sequence Button */}
                <button
                  type="button"
                  onClick={startSequentialAnimation}
                  className="text-neutral-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/[0.06]"
                  title="Spela upp sekvens igen"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Message Stream: Sequential Soft Fade-in (100% Static Container with Zero Layout Shift) */}
              <div className="flex-1 min-h-0 flex flex-col justify-start space-y-3.5 relative z-10">
                
                {/* Message 1: Agent Initial Outreach */}
                <div
                  className={`flex items-start gap-3 transition-all duration-400 ease-out ${
                    animStage >= 1
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-1.5 pointer-events-none"
                  }`}
                >
                  <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0 mt-0.5 opacity-85">
                    <Image
                      src="/images/agent-orb-clean.png"
                      alt="Sales Agent Orb"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-xs sm:text-[13px] text-neutral-200 font-light leading-relaxed bg-white/[0.04] p-3.5 rounded-2xl rounded-tl-sm border border-white/[0.06] max-w-[85%]">
                    {activeScenario.agentInitialMessage}
                  </div>
                </div>

                {/* Message 2: Prospect Response (Right Aligned) */}
                <div
                  className={`flex justify-end transition-all duration-400 ease-out ${
                    animStage >= 2
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-1.5 pointer-events-none"
                  }`}
                >
                  <div className="max-w-[82%] rounded-2xl rounded-tr-sm bg-[#161922] border border-white/[0.08] p-3.5 text-xs sm:text-[13px] text-neutral-200 font-light leading-relaxed shadow-lg">
                    <div className="text-[10px] font-mono text-neutral-500 mb-1">
                      {activeScenario.prospectName} · {activeScenario.prospectRole}
                    </div>
                    {activeScenario.prospectReply}
                  </div>
                </div>

                {/* Message 3 Slot: Occupies stable height; Thinking indicator overlays smoothly */}
                <div className="relative flex items-start">
                  
                  {/* Thinking Indicator (Only visible during stage 2.5, perfectly positioned with zero layout shift) */}
                  <div
                    className={`absolute left-0 top-0 flex items-start gap-3 transition-opacity duration-200 pointer-events-none z-10 ${
                      animStage === 2.5 ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0 mt-0.5 opacity-85">
                      <Image
                        src="/images/agent-orb-clean.png"
                        alt="Sales Agent Orb"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="text-xs sm:text-[13px] text-neutral-400 font-light flex items-center gap-2 py-2 px-3 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                      <span>Thinking...</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                    </div>
                  </div>

                  {/* Message 3: Agent Follow-up / Objection Handling */}
                  <div
                    className={`flex items-start gap-3 w-full transition-all duration-400 ease-out ${
                      animStage >= 3
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-1.5 pointer-events-none"
                    }`}
                  >
                    <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0 mt-0.5 opacity-85">
                      <Image
                        src="/images/agent-orb-clean.png"
                        alt="Sales Agent Orb"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="text-xs sm:text-[13px] text-neutral-200 font-light leading-relaxed bg-white/[0.04] p-3.5 rounded-2xl rounded-tl-sm border border-white/[0.06] max-w-[85%]">
                      {activeScenario.agentReply}
                    </div>
                  </div>

                </div>

              </div>

              {/* Bottom Input Bar */}
              <div className="relative z-10 flex-shrink-0 pt-3">
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
                      onClick={startSequentialAnimation}
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

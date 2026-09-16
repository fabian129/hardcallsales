"use client";

import React, { useState } from "react";
import {
  Bot,
  User,
  CheckCircle2,
  ArrowLeft,
  Sparkles,
  Zap,
  Activity,
  Terminal,
  Search,
  RefreshCw,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface SimulationStep {
  id: number;
  label: string;
  shortTitle: string;
  signalContext: {
    targetCompany: string;
    targetPerson: string;
    role: string;
    channel: string;
    detectedTrigger: string;
    intentScore: string;
    relevance: string;
  };
  messages: {
    sender: "ai" | "prospect" | "system";
    time: string;
    content: string;
    meta?: string;
  }[];
  systemLog: string[];
  takeaway: string;
}

interface Scenario {
  id: string;
  name: string;
  category: string;
  steps: SimulationStep[];
}

const SCENARIOS: Scenario[] = [
  {
    id: "saas",
    name: "SaaS Tillväxtbolag",
    category: "B2B Cloud Software",
    steps: [
      {
        id: 1,
        label: "Fas 1: Prospektering",
        shortTitle: "Signal-mining & Analys",
        signalContext: {
          targetCompany: "CloudScale Nordic AB",
          targetPerson: "Anna Lindberg",
          role: "VP Sales / Head of Commercial",
          channel: "LinkedIn Sales Navigator & Apollo",
          detectedTrigger: "Rekryterar 4 nya Account Executives + Series A Kapitalrunda (35 MSEK)",
          intentScore: "96 % (Hög köpintention)",
          relevance: "99.2 % ICP Match",
        },
        messages: [
          {
            sender: "system",
            time: "08:30:12",
            content:
              "Signal upptäckt: CloudScale Nordic har publicerat 4 nya säljroller och stängt en Series A-finansiering. Idealkundprofil (ICP) matchad.",
          },
          {
            sender: "ai",
            time: "08:32:00",
            content:
              "[AI Engine förbereder kontakt] Analyserar tidigare uttalanden, teknikstack (HubSpot + Stripe) och identifierar beslutsfattare Anna Lindberg.",
            meta: "AI Context Prompt Generator v2.4",
          },
        ],
        systemLog: [
          "[08:30:12] LinkedIn signal: 4 nya säljrekryteringar upptäckta.",
          "[08:30:45] Datarikning: Verifierad e-post & LinkedIn-profil hämtad.",
          "[08:31:20] Promptoptimering: Skapar hypotes kring SDR-flaskhals under skalningsfas.",
          "[08:32:00] Validering genomförd: Redo för automatiserad kontakt.",
        ],
        takeaway:
          "LinkedClient söker inte slumpmässigt — agenten agerar på skarpa affärshändelser och verifierad efterfrågan.",
      },
      {
        id: 2,
        label: "Fas 2: Personaliserad Kontakt",
        shortTitle: "Skräddarsydd Outreach",
        signalContext: {
          targetCompany: "CloudScale Nordic AB",
          targetPerson: "Anna Lindberg",
          role: "VP Sales",
          channel: "LinkedIn InMail + E-post",
          detectedTrigger: "Fokus på snabb ramp-up av säljteamet i Q4",
          intentScore: "96 %",
          relevance: "99.2 %",
        },
        messages: [
          {
            sender: "ai",
            time: "09:14:02",
            content:
              "Hej Anna! Såg att ni skalar säljteamet för fullt efter er senaste runda. Ofta blir SDR-rekrytering och ramp-up en flaskhals när man vill ha möten i kalendern snabbt. Vi hjälpte nyligen Monster att boka 120+ möten mot HR-chefer & VD utan att de behövde utöka sitt interna SDR-team. Har du 15 minuter på torsdag kl 10:00 för en kort avstämning?",
            meta: "Skickad via LinkedIn InMail • Levererad",
          },
        ],
        systemLog: [
          "[09:14:02] InMail levererat via dedikerad IP & säkrad proxy.",
          "[09:14:05] Domänsäkerhet: SPF/DKIM/DMARC verifierad.",
          "[09:14:10] Övervakning aktiv: Väntar på öppning och läskvitto.",
        ],
        takeaway:
          "Inga trötta standardmallar. Varje meddelande refererar mottagarens specifika situation och nuläge.",
      },
      {
        id: 3,
        label: "Fas 3: Invändningshantering",
        shortTitle: "Intelligent Svarsdialog",
        signalContext: {
          targetCompany: "CloudScale Nordic AB",
          targetPerson: "Anna Lindberg",
          role: "VP Sales",
          channel: "LinkedIn Chatt",
          detectedTrigger: "Tidsbrist & budgetfråga",
          intentScore: "98 % (Mycket intresserad)",
          relevance: "99.5 %",
        },
        messages: [
          {
            sender: "prospect",
            time: "10:05:44",
            content:
              "Hej! Låter intressant, men vi har ganska specifika krav på vilka beslutsfattare vi träffar (endast CTO & Head of Infra på bolag med 50+ anställda). Hur säkerställer ni möteskvaliteten?",
          },
          {
            sender: "ai",
            time: "10:07:15",
            content:
              "Fullt förståeligt, Anna! Det är precis därför vi kör vår 3-månaders pilotmodell. Vi sätter exakta kvalificeringskriterier i en uppstartsworkshop, och endast möten med verifierade CTO:er på bolag 50+ räknas i leveransen. Dessutom har vi full ombokningsgaranti vid eventuella no-shows. Ska vi ta en 15-minuters genomgång på torsdag kl 10 eller fredag kl 13?",
            meta: "AI Dialog Engine • Invändningsmatris applicerad",
          },
        ],
        systemLog: [
          "[10:05:44] Svar mottaget från Anna Lindberg. Sentiment: Konstruktivt / Validerande.",
          "[10:06:00] Klassificering: Kvalificeringsfråga gällande målgrupp och garanti.",
          "[10:07:15] Svar genererat baserat på HCS Pilotvillkor & kvalitetsprotokoll.",
        ],
        takeaway:
          "LinkedClient förstår nyanser i svaren och bemöter komplexa frågor med exakta fakta och trygghet.",
      },
      {
        id: 4,
        label: "Fas 4: Bokat Möte & Synk",
        shortTitle: "Kalender & CRM-synk",
        signalContext: {
          targetCompany: "CloudScale Nordic AB",
          targetPerson: "Anna Lindberg",
          role: "VP Sales",
          channel: "Google Calendar & HubSpot CRM",
          detectedTrigger: "Möte accepterat och bekräftat",
          intentScore: "100 % (Möte bokat)",
          relevance: "100 %",
        },
        messages: [
          {
            sender: "prospect",
            time: "10:22:30",
            content:
              "Det låter tryggt. Torsdag kl 10:00 passar utmärkt. Skicka en kalenderinbjudan till anna.lindberg@cloudscalenordic.se!",
          },
          {
            sender: "system",
            time: "10:23:00",
            content:
              "Möte automatiskt bokat: Torsdag kl 10:00 (20 min Google Meet). Inbjudan skickad och bekräftad.",
          },
          {
            sender: "system",
            time: "10:23:15",
            content:
              "HubSpot CRM Synk: Ny kontakt & affärsmöjlighet skapad. Status uppdaterad till 'SQL - Möte inbokat'. Senior SDR briefad för uppföljningssamtal.",
          },
        ],
        systemLog: [
          "[10:22:30] Prospekt accepterade tid: Torsdag 10:00.",
          "[10:23:00] Kalendersynk: Google Calendar event skapat med möteslänk.",
          "[10:23:15] 2-Way CRM Sync: HubSpot Contact & Deal (CloudScale Nordic) skapad.",
          "[10:23:30] SDR Handoff: Notis skickad till säljledare inför genomförande.",
        ],
        takeaway:
          "Slutresultatet är ett kvalificerat möte direkt i era säljares kalendrar med komplett historik i ert CRM.",
      },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise IT & Säkerhet",
    category: "Cybersecurity & Infra",
    steps: [
      {
        id: 1,
        label: "Fas 1: Prospektering",
        shortTitle: "Enterprise Trigger Mining",
        signalContext: {
          targetCompany: "Nordic Industrial Tech AB",
          targetPerson: "Mikael Söderberg",
          role: "Chief Information Security Officer (CISO)",
          channel: "Databas 100M+ & Tech-stack scan",
          detectedTrigger: "NIS2-efterlevnadskrav och hybrid cloud-transformation",
          intentScore: "94 %",
          relevance: "98.8 %",
        },
        messages: [
          {
            sender: "system",
            time: "07:45:00",
            content:
              "Teknikskanning genomförd: Nordic Industrial Tech faller under NIS2-direktivet och genomför en migration av kritisk infrastruktur.",
          },
          {
            sender: "ai",
            time: "07:46:20",
            content:
              "[AI Engine] Matchar erbjudande mot NIS2-regelefterlevnad och förbereder diskret, professionell kontakt till CISO.",
          },
        ],
        systemLog: [
          "[07:45:00] Technographic filter: Identifierade legacy-komponenter & NIS2-behov.",
          "[07:46:00] CISO Mikael Söderberg identifierad som primär beslutsfattare.",
          "[07:46:20] Säkerhetsverifierad kontaktväg etablerad.",
        ],
        takeaway:
          "För enterprise-kunder är timing och regulatorisk förståelse avgörande för att få access till C-level.",
      },
      {
        id: 2,
        label: "Fas 2: Personaliserad Kontakt",
        shortTitle: "Enterprise Outreach",
        signalContext: {
          targetCompany: "Nordic Industrial Tech AB",
          targetPerson: "Mikael Söderberg",
          role: "CISO",
          channel: "Företagsmejl & LinkedIn",
          detectedTrigger: "NIS2-efterlevnad och riskminimering",
          intentScore: "94 %",
          relevance: "98.8 %",
        },
        messages: [
          {
            sender: "ai",
            time: "08:15:00",
            content:
              "Hej Mikael, med anledning av NIS2-kraven i tillverkande industri vet vi att många CISO:er ser över sin leverantörskedja och behörighetsstyrning just nu. Vi hjälpte nyligen en motsvarande industrikoncern (liknande AVEVA-strukturen) att stänga sina säkerhetsluckor. Har du tid för en 20 minuters brief nästa vecka?",
            meta: "Skickad till verifierad företagsadress • Hög prioritet",
          },
        ],
        systemLog: [
          "[08:15:00] E-post levererad till inbox. SPF & DKIM 100 % grönt.",
          "[08:15:30] Spårningspixel aktiv (GDPR-kompatibel anonymiserad klicklogg).",
        ],
        takeaway:
          "Enterprise-ton: seriös, insiktsfull och direkt kopplad till affärsrisk och regelefterlevnad.",
      },
      {
        id: 3,
        label: "Fas 3: Invändningshantering",
        shortTitle: "Mänsklig SDR Inkoppling",
        signalContext: {
          targetCompany: "Nordic Industrial Tech AB",
          targetPerson: "Mikael Söderberg",
          role: "CISO",
          channel: "E-post + Telefonsamtal",
          detectedTrigger: "Pågående upphandling / intern utvärdering",
          intentScore: "97 %",
          relevance: "99.0 %",
        },
        messages: [
          {
            sender: "prospect",
            time: "09:30:10",
            content:
              "Vi har en pågående intern utredning kring detta och pratar redan med ett par aktörer. Vad skiljer er lösning från de traditionella verktygen på marknaden?",
          },
          {
            sender: "ai",
            time: "09:32:00",
            content:
              "Det är ett klokt initiativ, Mikael. Vår styrka är att vi inte kräver någon lång integrationscykel utan kan ge er en fullständig riskanalys inom 14 dagar. Vår seniora specialist Johan ringer upp dig kort i eftermiddag för att ge två konkreta referenspunkter från liknande case.",
            meta: "Trigger: Mänsklig senior SDR tar över dialogen",
          },
        ],
        systemLog: [
          "[09:30:10] Intressesvar mottaget med jämförelsefråga.",
          "[09:32:00] SDR Handoff aktiverad. Senior teknisk säljare tilldelad samtalet.",
          "[09:40:00] Telefonsamtal genomfört av SDR med 10 000+ timmars erfarenhet.",
        ],
        takeaway:
          "När dialogen kräver djupare teknisk argumentation kliver våra erfarna säljare in och tar samtalet personligen.",
      },
      {
        id: 4,
        label: "Fas 4: Bokat Möte & Synk",
        shortTitle: "Enterprise Möte Spikat",
        signalContext: {
          targetCompany: "Nordic Industrial Tech AB",
          targetPerson: "Mikael Söderberg",
          role: "CISO",
          channel: "Microsoft Teams & Salesforce",
          detectedTrigger: "Möte spikat efter personligt samtal",
          intentScore: "100 %",
          relevance: "100 %",
        },
        messages: [
          {
            sender: "system",
            time: "11:00:00",
            content:
              "Telefonsamtal avslutat med framgång: CISO Mikael Söderberg har bokat 45 minuters strategidragning i Microsoft Teams med er Enterprise Account Executive.",
          },
          {
            sender: "system",
            time: "11:00:45",
            content:
              "Salesforce Synk: Opportunity skapad. Beräknat affärsvärde: 850 000 SEK. Mötesagenda och samtalsnoteringar bifogade.",
          },
        ],
        systemLog: [
          "[11:00:00] Teams-inbjudan accepterad för tisdag kl 14:00.",
          "[11:00:45] Salesforce CRM 2-way sync: Lead konverterad till Account + Opportunity.",
          "[11:01:00] Komplett mötesbrief distribuerad till kundens säljteam.",
        ],
        takeaway:
          "Kombinationen av AI-precision och mänsklig säljskicklighet skapar affärer värda miljonbelopp.",
      },
    ],
  },
];

export const AiOutreachSimulator: React.FC = () => {
  const [activeScenarioIdx, setActiveScenarioIdx] = useState<number>(0);
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

  const currentScenario = SCENARIOS[activeScenarioIdx];
  const currentStep = currentScenario.steps[activeStepIdx];

  const handleNextStep = () => {
    if (activeStepIdx < currentScenario.steps.length - 1) {
      setActiveStepIdx(activeStepIdx + 1);
    }
  };

  const handlePrevStep = () => {
    if (activeStepIdx > 0) {
      setActiveStepIdx(activeStepIdx - 1);
    }
  };

  const resetSimulation = () => {
    setActiveStepIdx(0);
  };

  return (
    <section id="simulator" className="w-full bg-[#0A0A0A] text-white py-20 sm:py-28 border-b border-[#2B2B2B] relative scroll-mt-20">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-[#7851A9]/15 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />

      <Container size="wide" className="relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Badge variant="purple-soft" size="md" className="mb-4">
            <Activity size={13} className="text-[#7851A9] mr-1" />
            <span>Interaktiv Simulering</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Se hur LinkedClient arbetar i realtid
          </h2>
          <p className="text-base sm:text-lg text-[#A8A8A8] font-normal leading-relaxed">
            Följ AI-agentens arbetsgång steg för steg — från detektering av köpsignal och personaliserad outreach till invändningshantering och bokat möte.
          </p>
        </div>

        {/* Top Control Bar: Scenario Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#111111] border border-[#2B2B2B] mb-8">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#A8A8A8] uppercase tracking-wider hidden sm:inline">
              Välj Branschscenario:
            </span>
            <div className="flex items-center gap-1.5">
              {SCENARIOS.map((sc, idx) => (
                <button
                  key={sc.id}
                  onClick={() => {
                    setActiveScenarioIdx(idx);
                    setActiveStepIdx(0);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    activeScenarioIdx === idx
                      ? "bg-[#7851A9] text-white shadow-sm font-semibold"
                      : "bg-white/5 text-[#A8A8A8] hover:text-white"
                  }`}
                >
                  {sc.name}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={resetSimulation}
            className="inline-flex items-center gap-1.5 text-xs text-[#A8A8A8] hover:text-white transition-colors cursor-pointer"
          >
            <RefreshCw size={13} />
            <span>Börja om från start</span>
          </button>
        </div>

        {/* 4-Step Progress Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 mb-8">
          {currentScenario.steps.map((step, idx) => {
            const isActive = activeStepIdx === idx;
            const isCompleted = activeStepIdx > idx;

            return (
              <button
                key={step.id}
                onClick={() => setActiveStepIdx(idx)}
                className={`p-3.5 sm:p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#161616] border-[#7851A9] shadow-[0_0_20px_rgba(120,81,169,0.3)] ring-1 ring-[#7851A9]"
                    : isCompleted
                    ? "bg-[#111111] border-emerald-500/40 text-[#EDEDED]"
                    : "bg-[#111111]/70 border-[#2B2B2B] text-[#6E6E6E] hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                      isActive
                        ? "text-[#B89FE0]"
                        : isCompleted
                        ? "text-emerald-400"
                        : "text-[#6E6E6E]"
                    }`}
                  >
                    Fas 0{step.id}
                  </span>
                  {isCompleted && (
                    <CheckCircle2 size={14} className="text-emerald-400" />
                  )}
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#7851A9] animate-pulse" />
                  )}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white truncate">
                  {step.shortTitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Simulation Arena: 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left Column: Context Card & Real-time Telemetry (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Target Lead Context Card */}
            <div className="p-6 rounded-3xl bg-[#111111] border border-[#2B2B2B] shadow-xl">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-white flex items-center gap-1.5">
                  <Search size={14} className="text-[#7851A9]" />
                  <span>Identifierad Målgrupp</span>
                </span>
                <span className="text-[10px] bg-white/10 text-[#EDEDED] px-2 py-0.5 rounded font-mono">
                  Signal Active
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-[#6E6E6E] block mb-0.5">Bolag & Beslutsfattare:</span>
                  <span className="font-bold text-white text-sm">
                    {currentStep.signalContext.targetPerson}
                  </span>{" "}
                  <span className="text-[#A8A8A8]">({currentStep.signalContext.role})</span>
                  <div className="text-[#B89FE0] font-medium mt-0.5">
                    {currentStep.signalContext.targetCompany}
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5">
                  <span className="text-[#6E6E6E] block mb-0.5">Upptäckt Köpsignal:</span>
                  <span className="text-[#EDEDED] font-medium">
                    {currentStep.signalContext.detectedTrigger}
                  </span>
                </div>

                <div className="pt-2 border-t border-white/5 grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-[#6E6E6E] block mb-0.5">ICP Träffsäkerhet:</span>
                    <span className="font-mono text-emerald-400 font-bold">
                      {currentStep.signalContext.relevance}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#6E6E6E] block mb-0.5">Köpintentionspoäng:</span>
                    <span className="font-mono text-[#B89FE0] font-bold">
                      {currentStep.signalContext.intentScore}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Console / Log Stream */}
            <div className="p-5 rounded-3xl bg-[#0F0F0F] border border-[#2B2B2B] font-mono text-[11px] shadow-xl">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10 text-[#A8A8A8]">
                <span className="flex items-center gap-1.5 text-xs text-white">
                  <Terminal size={13} className="text-[#7851A9]" />
                  <span>Live System Log</span>
                </span>
                <span className="text-[10px] text-emerald-400 font-semibold">
                  ● STREAMING
                </span>
              </div>

              <div className="space-y-1.5 text-[#A8A8A8] max-h-40 overflow-y-auto">
                {currentStep.systemLog.map((log, lIdx) => (
                  <div key={lIdx} className="leading-relaxed">
                    <span className="text-[#7851A9]">{log.substring(0, 10)}</span>
                    <span className="text-[#EDEDED]">{log.substring(10)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Takeaway Callout */}
            <div className="p-4 rounded-2xl bg-[#7851A9]/10 border border-[#7851A9]/30 text-xs sm:text-sm text-[#EDEDED] flex items-start gap-3">
              <Sparkles size={16} className="text-[#7851A9] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block mb-0.5">Insikt från fasen:</span>
                <span>{currentStep.takeaway}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Live Simulated Message Thread (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#111111] border border-[#2B2B2B] shadow-2xl">
            
            <div>
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#7851A9] flex items-center justify-center text-white shadow-[0_0_15px_rgba(120,81,169,0.4)]">
                    <Bot size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">LinkedClient Outreach</span>
                      <span className="text-[10px] bg-[#7851A9]/30 text-[#B89FE0] px-1.5 py-0.5 rounded font-mono">
                        Aktiv dialog
                      </span>
                    </div>
                    <span className="text-xs text-[#A8A8A8]">
                      Kanal: {currentStep.signalContext.channel}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#A8A8A8]">
                    Fas {activeStepIdx + 1} av {currentScenario.steps.length}
                  </span>
                </div>
              </div>

              {/* Message Feed */}
              <div className="space-y-4 mb-8 min-h-[260px]">
                {currentStep.messages.map((msg, mIdx) => {
                  if (msg.sender === "system") {
                    return (
                      <div
                        key={mIdx}
                        className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-[#A8A8A8] flex items-start gap-2.5"
                      >
                        <Zap size={14} className="text-[#7851A9] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] font-mono text-[#6E6E6E] block mb-0.5">
                            SYSTEMHÄNDELSE • {msg.time}
                          </span>
                          <span className="text-[#EDEDED]">{msg.content}</span>
                        </div>
                      </div>
                    );
                  }

                  if (msg.sender === "ai") {
                    return (
                      <div key={mIdx} className="flex flex-col items-start max-w-[92%]">
                        <div className="flex items-center gap-1.5 mb-1 text-[11px] text-[#A8A8A8]">
                          <Bot size={12} className="text-[#7851A9]" />
                          <span className="font-semibold text-white">LinkedClient Agent</span>
                          <span className="text-[#6E6E6E]">· {msg.time}</span>
                        </div>
                        <div className="rounded-2xl rounded-tl-sm bg-white/10 border border-white/15 p-4 text-xs sm:text-sm leading-relaxed text-[#EDEDED] shadow-sm">
                          {msg.content}
                        </div>
                        {msg.meta && (
                          <span className="text-[10px] text-[#6E6E6E] mt-1 ml-1 font-mono">
                            {msg.meta}
                          </span>
                        )}
                      </div>
                    );
                  }

                  // Prospect message
                  return (
                    <div key={mIdx} className="flex flex-col items-end ml-auto max-w-[88%]">
                      <div className="flex items-center gap-1.5 mb-1 text-[11px] text-[#A8A8A8]">
                        <span className="font-semibold text-white">
                          {currentStep.signalContext.targetPerson}
                        </span>
                        <span className="text-[#6E6E6E]">· {msg.time}</span>
                        <User size={12} className="text-[#B89FE0]" />
                      </div>
                      <div className="rounded-2xl rounded-tr-sm bg-[#7851A9] text-white p-4 text-xs sm:text-sm leading-relaxed shadow-[0_4px_20px_rgba(120,81,169,0.35)]">
                        {msg.content}
                      </div>
                      {msg.meta && (
                        <span className="text-[10px] text-[#6E6E6E] mt-1 mr-1 font-mono">
                          {msg.meta}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stepper Playback Controls */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={handlePrevStep}
                disabled={activeStepIdx === 0}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-[#A8A8A8] hover:text-white bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
              >
                <ArrowLeft size={14} />
                <span>Föregående fas</span>
              </button>

              <div className="flex items-center gap-3">
                {activeStepIdx < currentScenario.steps.length - 1 ? (
                  <Button
                    onClick={handleNextStep}
                    variant="primary"
                    size="md"
                    hasArrow
                  >
                    Kör nästa fas: Fas 0{activeStepIdx + 2}
                  </Button>
                ) : (
                  <Button
                    href="/boka-mote?service=linkedclient"
                    variant="primary"
                    size="md"
                    hasArrow
                  >
                    Boka demo med LinkedClient
                  </Button>
                )}
              </div>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
};

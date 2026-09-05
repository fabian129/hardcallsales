"use client";

import React, { useState } from "react";
import {
  Bot,
  BadgeCheck,
  CalendarCheck,
  Sparkles,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const CHAT_SCENARIOS = [
  {
    id: "saas",
    label: "SaaS Tillväxt",
    leadName: "Anna Lindberg",
    leadRole: "Head of Sales, CloudSaaS",
    prospectingTrigger: "Signal: Nyanställd säljchef & expansion till Norden",
    aiMessage:
      "Hej Anna — såg att ni skalar säljteamet i Q4. Har du 20 minuter nästa vecka för att se hur vi hjälpt liknande SaaS-bolag fylla kalendern?",
    replyMessage: "Ja, torsdag kl 10:00 funkar bra för mig.",
    meetingTime: "Torsdag 10:00 · 20 min Google Meet",
  },
  {
    id: "enterprise",
    label: "Enterprise IT",
    leadName: "Johan Berg",
    leadRole: "CTO, Nordic Enterprise Tech",
    prospectingTrigger: "Signal: Satsning på Cloud & Cybersäkerhet",
    aiMessage:
      "Hej Johan — noterade er satsning på hybrid cloud. Har du tid för en kort avstämning kring hur vi genererar 20+ möten i er sektor?",
    objectionMessage: "Vi har redan en intern säljfunktion.",
    aiResponse:
      "Helt förståeligt! Vi ersätter inte ert team, utan matar dem med 10–100 färdigbokade möten per månad så de kan fokusera på att stänga affärer.",
    replyMessage: "Låter intressant. Skicka en inbjudan till tisdag kl 14.",
    meetingTime: "Tisdag 14:00 · 30 min Teams",
  },
  {
    id: "scaleup",
    label: "B2B Tech Scaleup",
    leadName: "Maria Eklund",
    leadRole: "CRO, Nordic FinTech",
    prospectingTrigger: "Signal: Serie A-finansiering & pipeline-mål",
    aiMessage:
      "Hej Maria — grattis till rundan! Vi hjälper B2B-techbolag att skala mötesvolymen med 10–100 möten/månad utan lång uppstartstid. Öppen för 15 min intro?",
    replyMessage: "Tack! Låt oss ta en kort avstämning på fredag kl 11:00.",
    meetingTime: "Fredag 11:00 · 20 min Google Meet",
  },
];

export const LinkedClientShowcase: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState(0);
  const current = CHAT_SCENARIOS[activeScenario];

  return (
    <section className="w-full bg-[#FFFFFF] text-[#0F0F0F] border-b border-[#E6E6E6] relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[840px]">
        
        {/* Left Panel: Content & Value Proposition (Spans 6 cols on lg) */}
        <div className="lg:col-span-6 p-8 sm:p-12 lg:p-20 flex flex-col justify-center bg-[#FFFFFF]">
          <div className="max-w-xl">
            
            {/* Eyebrow with Bot Icon */}
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="partner" size="md" className="gap-2">
                <Bot size={15} className="text-[#7851A9]" />
                <span>LinkedClient</span>
              </Badge>
              <Badge variant="purple-soft" size="md">
                <Sparkles size={12} className="text-[#7851A9] mr-1" />
                <span>AI + Människa</span>
              </Badge>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F0F0F] leading-tight mb-6">
              Världens första <br />
              <span className="text-[#7851A9]">AI-Sales agent</span>
            </h2>

            {/* Swedish Description */}
            <p className="text-base sm:text-lg text-[#6E6E6E] leading-relaxed mb-6">
              AI-outreach kombinerat med cold calls i samma motor. Agenten identifierar rätt beslutsfattare och öppnar dörren med kirurgisk precision — sedan tar våra erfarna säljare över samtalet och säkrar mötet i er kalender.
            </p>

            {/* Certified Partner Tag */}
            <div className="inline-flex items-center gap-2.5 py-2 px-4 rounded-xl bg-[#F0EBF7] border border-[#E0D4ED] text-xs font-semibold text-[#53377A] mb-8">
              <BadgeCheck size={17} className="text-[#7851A9]" />
              <span>Hard Call Sales är certifierad LinkedClient Partner</span>
            </div>

            {/* Bullet Points */}
            <div className="space-y-3 mb-10 text-sm text-[#0F0F0F]">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#7851A9]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 size={13} className="text-[#7851A9]" />
                </div>
                <span>Automatiserad prospektering mot 100M+ globala beslutsfattare</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#7851A9]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 size={13} className="text-[#7851A9]" />
                </div>
                <span>Telefonavslut av säljare med 10 000+ timmars erfarenhet</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#7851A9]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 size={13} className="text-[#7851A9]" />
                </div>
                <span>Tvåvägs CRM-synkronisering med HubSpot, Salesforce & Pipedrive</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Button
                href="/linkedclient"
                variant="dark"
                size="md"
                hasArrow
                className="bg-[#0A0A0A] hover:bg-black text-white px-6 py-3"
              >
                Utforska LinkedClient
              </Button>
              <Button
                href="/boka-mote"
                variant="outline"
                size="md"
                className="border-[#D0D0D0] text-[#0F0F0F] hover:bg-[#0F0F0F] hover:text-white"
              >
                Boka live-demo
              </Button>
            </div>

          </div>
        </div>

        {/* Right Panel: Simulated Live AI Chat UI (Spans 6 cols on lg) */}
        <div className="lg:col-span-6 bg-[#0A0A0A] p-6 sm:p-10 lg:p-16 flex flex-col justify-center items-center relative overflow-hidden border-t lg:border-t-0 lg:border-l border-[#2B2B2B]">
          
          {/* Background Ambient Glow & Dot Matrix */}
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#7851A9]/20 blur-[120px] pointer-events-none rounded-full" />
          <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />

          {/* Scenario Switcher Pills */}
          <div className="relative z-10 flex items-center gap-2 mb-6 bg-white/[0.04] p-1 rounded-full border border-white/10">
            {CHAT_SCENARIOS.map((sc, idx) => (
              <button
                key={sc.id}
                onClick={() => setActiveScenario(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeScenario === idx
                    ? "bg-[#7851A9] text-white shadow-sm"
                    : "text-[#A8A8A8] hover:text-white"
                }`}
              >
                {sc.label}
              </button>
            ))}
          </div>

          {/* Simulated Chat Window Card */}
          <div className="relative z-10 w-full max-w-lg rounded-2xl bg-white/[0.05] backdrop-blur-xl border border-white/15 p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            
            {/* Window Header */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#7851A9] flex items-center justify-center text-white shadow-[0_0_15px_rgba(120,81,169,0.5)]">
                  <Bot size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white">LinkedClient Agent</span>
                    <span className="text-[10px] bg-[#7851A9]/30 text-[#B89FE0] px-1.5 py-0.5 rounded font-mono">
                      v2.4
                    </span>
                  </div>
                  <span className="text-xs text-[#A8A8A8]">
                    Konversation med {current.leadName}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>aktiv nu</span>
              </div>
            </div>

            {/* Conversation Messages */}
            <div className="space-y-3.5 mb-6">
              
              {/* Prospecting Trigger Chip */}
              {current.prospectingTrigger && (
                <div className="flex justify-center my-1">
                  <span className="text-[10.5px] font-medium text-[#B89FE0] bg-white/[0.06] border border-white/10 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <Sparkles size={11} className="text-[#9B7BC7]" />
                    <span>{current.prospectingTrigger}</span>
                  </span>
                </div>
              )}

              {/* Outgoing Message from AI Agent */}
              <div className="flex flex-col items-start max-w-[90%]">
                <div className="rounded-2xl rounded-tl-sm bg-white/10 border border-white/15 p-3.5 sm:p-4 text-xs sm:text-[13.5px] leading-relaxed text-[#EDEDED] shadow-sm">
                  {current.aiMessage}
                </div>
                <span className="text-[10px] text-[#6E6E6E] mt-1 ml-1">
                  Skickad via LinkedIn InMail • 09:42
                </span>
              </div>

              {/* Optional Objection Message */}
              {current.objectionMessage && (
                <div className="flex flex-col items-end ml-auto max-w-[85%]">
                  <div className="rounded-2xl rounded-tr-sm bg-white/[0.12] border border-white/15 text-[#EDEDED] p-3 text-xs sm:text-[13px] leading-relaxed">
                    {current.objectionMessage}
                  </div>
                  <span className="text-[10px] text-[#6E6E6E] mt-1 mr-1">
                    Svar • 09:55
                  </span>
                </div>
              )}

              {/* Optional AI Response to Objection */}
              {current.aiResponse && (
                <div className="flex flex-col items-start max-w-[90%]">
                  <div className="rounded-2xl rounded-tl-sm bg-[#7851A9]/30 border border-[#7851A9]/40 p-3.5 text-xs sm:text-[13px] leading-relaxed text-[#EDEDED]">
                    {current.aiResponse}
                  </div>
                  <span className="text-[10px] text-[#6E6E6E] mt-1 ml-1">
                    AI-Agent svar • 09:56
                  </span>
                </div>
              )}

              {/* Incoming Reply from Prospect */}
              <div className="flex flex-col items-end ml-auto max-w-[85%]">
                <div className="rounded-2xl rounded-tr-sm bg-[#7851A9] text-white p-3.5 sm:p-4 text-xs sm:text-[13.5px] leading-relaxed shadow-[0_4px_15px_rgba(120,81,169,0.3)]">
                  {current.replyMessage}
                </div>
                <span className="text-[10px] text-[#6E6E6E] mt-1 mr-1">
                  Svar mottaget • 10:15
                </span>
              </div>

              {/* Action Completed Pill */}
              <div className="pt-2">
                <div className="rounded-xl bg-white/[0.07] border border-white/15 p-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#7851A9]/30 flex items-center justify-center text-[#B89FE0]">
                      <CalendarCheck size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">
                        Möte schemalagt & bekräftat
                      </div>
                      <div className="text-[11px] text-[#A8A8A8]">
                        {current.meetingTime}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-[#B89FE0] bg-[#7851A9]/20 px-2 py-1 rounded">
                    CRM Synk
                  </span>
                </div>
              </div>

            </div>

            {/* Live Indicator Bar */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#6E6E6E]">
              <span className="flex items-center gap-1.5">
                <Zap size={12} className="text-[#7851A9]" />
                Mänsklig SDR tar över för samtal
              </span>
              <span className="font-mono text-[#A8A8A8]">Show rate 85%+</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

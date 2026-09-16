"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Globe,
  Zap,
  Bot,
  PhoneCall,
  CheckCircle2,
  Plus,
  X,
  ArrowRight,
  Sparkles,
  Calendar,
} from "lucide-react";
import { openCalModal } from "@/components/cal/CalProvider";

interface WorkflowPill {
  id: string;
  label: string;
  icon: React.ReactNode;
  tag: string;
  description: string;
}

const workflowPills: WorkflowPill[] = [
  {
    id: "prospect",
    label: "Prospektering",
    icon: <Globe className="w-3.5 h-3.5 text-neutral-400" />,
    tag: "# 100M+ Profiler",
    description:
      "Autonoma agenter identifierar och berikar verifierade beslutsfattare bland 100M+ globala B2B-profiler.",
  },
  {
    id: "multichannel",
    label: "Multikanal",
    icon: <Zap className="w-3.5 h-3.5 text-neutral-400" />,
    tag: "# Smart Sekvens",
    description:
      "Sekvenser över LinkedIn och hyper-personaliserad e-post synkroniseras med millisekunds precision.",
  },
  {
    id: "ai",
    label: "AI Dialog",
    icon: <Bot className="w-3.5 h-3.5 text-[#38BDF8]" />,
    tag: "# Kvalificerad SQL",
    description:
      "Världens första AI-säljagent för en naturlig dialog, bemöter invändningar och väcker genuint köpintresse.",
  },
  {
    id: "closing",
    label: "Bokat Möte",
    icon: <PhoneCall className="w-3.5 h-3.5 text-neutral-400" />,
    tag: "# Bokat i Kalender",
    description:
      "När intresset är väckt kliver våra seniora telefonsäljare in och stänger mötet direkt i er kalender.",
  },
];

export const LinkedClientHero: React.FC = () => {
  const [activePillId, setActivePillId] = useState<string>("ai");
  const activePill = workflowPills.find((p) => p.id === activePillId) || workflowPills[2];

  return (
    <section className="relative w-full min-h-[800px] lg:h-screen lg:max-h-[1020px] bg-[#000000] text-white overflow-hidden flex flex-col justify-center pt-24 pb-14 lg:py-20">
      {/* --- RIGHT SIDE 3D APERTURE / PORTAL VORTEX --- */}
      <div className="absolute right-[-10%] sm:right-[-6%] lg:right-[-3%] xl:right-[-1%] top-1/2 -translate-y-1/2 w-[92vw] sm:w-[75vw] lg:w-[60vw] xl:w-[55vw] h-[85vh] max-h-[960px] pointer-events-none select-none z-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/linkedclient-portal.jpg"
            alt="LinkedClient 3D Aperture Portal"
            fill
            priority
            className="object-contain object-right"
          />

          {/* Concentric Floating Ghost Tags along the ripples */}
          <div className="hidden xl:flex items-center gap-2 absolute top-[13%] right-[22%] text-neutral-400/50 text-[11px] font-mono tracking-wider pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
            <span>100M+ B2B Databas</span>
          </div>

          <div className="hidden lg:flex items-center gap-2 absolute top-[25%] left-[15%] text-neutral-400/60 text-[11px] font-mono tracking-wider pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/70" />
            <span>Multikanal AI-Sekvens</span>
          </div>

          <div className="hidden lg:flex items-center gap-2 absolute bottom-[22%] left-[16%] text-neutral-400/60 text-[11px] font-mono tracking-wider pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400/70" />
            <span>Human-in-the-Loop Avslut</span>
          </div>

          <div className="hidden xl:flex items-center gap-2 absolute bottom-[12%] right-[23%] text-neutral-400/50 text-[11px] font-mono tracking-wider pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
            <span>99.4% Deliverability</span>
          </div>
        </div>
      </div>

      {/* --- FOREGROUND CONTENT CONTAINER --- */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="max-w-2xl lg:max-w-2xl xl:max-w-3xl">
          {/* Eyebrow in Magenta-to-Cyan Gradient (1:1 with New Navigation bar:) */}
          <div className="inline-flex items-center mb-2">
            <span className="text-base sm:text-lg lg:text-xl font-medium tracking-tight bg-gradient-to-r from-[#F43F5E] via-[#D946EF] to-[#38BDF8] bg-clip-text text-transparent">
              Världens första AI-Sales agent:
            </span>
          </div>

          {/* Primary Display Headline (1:1 with Streamlining Access to Essential Features.) */}
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-normal tracking-tight text-white leading-[1.16] mb-5">
            Framtiden är äntligen här och knackar på.
          </h1>

          {/* Top Description Copy */}
          <p className="text-sm sm:text-[15px] text-neutral-400 font-light leading-relaxed mb-8 max-w-xl">
            När vi kombinerar AI-outreach med traditionella cold calls bokar vi nykundsmöten som i mycket högre grad leder till affärer. Autonom prospektering och hyper-personaliserad kontakt möter erfarna telefonsäljares avslut i en helt integrerad säljmotor.
          </p>

          {/* --- FLOATING DARK UI WINDOW (1:1 with reference) --- */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8">
            <div className="w-full sm:w-auto inline-flex flex-col bg-[#0D0F13]/95 backdrop-blur-2xl border border-white/[0.12] rounded-2xl p-3 sm:p-4 shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
              {/* Window Title Bar with Traffic Lights and Tabs */}
              <div className="flex items-center gap-3 pb-3 border-b border-white/[0.08] mb-3">
                {/* Traffic lights */}
                <div className="flex items-center gap-1.5 pr-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
                </div>

                {/* Tab 1 */}
                <button
                  type="button"
                  onClick={() => setActivePillId("prospect")}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono text-neutral-400 hover:text-white transition-colors"
                >
                  <span className="w-2 h-2 rounded-sm bg-[#38BDF8]/60 inline-block" />
                  <span>Hard Call Sales</span>
                </button>

                {/* Active Tab (Tab 2) */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#1C2028] text-white border border-white/[0.1] shadow-inner">
                  <span className="w-2 h-2 rounded-sm bg-[#38BDF8] inline-block" />
                  <span>LinkedClient v2.4</span>
                  <X className="w-3 h-3 text-neutral-400 hover:text-white cursor-pointer ml-1" />
                </div>

                {/* Plus button */}
                <button
                  type="button"
                  className="text-neutral-500 hover:text-white transition-colors p-0.5"
                  aria-label="Add tab"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>

              {/* Navigation Action Pills Dock */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {workflowPills.map((pill) => {
                  const isActive = pill.id === activePillId;
                  return (
                    <button
                      key={pill.id}
                      type="button"
                      onClick={() => setActivePillId(pill.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        isActive
                          ? "bg-[#0B1E38] border border-[#38BDF8] text-[#38BDF8] shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                          : "text-neutral-400 hover:text-white hover:bg-white/[0.04] border border-transparent"
                      }`}
                    >
                      {pill.icon}
                      <span>{pill.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Floating Status Tag to the right of the window (1:1 with # Design) */}
            <div className="flex items-center gap-2.5 text-white pl-1 sm:pl-2">
              <span className="text-[#38BDF8] font-mono text-xl font-bold">#</span>
              <span className="text-white text-lg font-normal tracking-wide">{activePill.label}</span>
            </div>
          </div>

          {/* Bottom paragraph (1:1 with reference's lower copy block) */}
          <p className="text-sm sm:text-[14px] text-neutral-400 font-light leading-relaxed max-w-xl mb-6">
            Genom att automatisera prospekteringen och den inledande kontakten kan våra erfarna mötesbokare fokusera 100% av sin tid på att kvalificera genuint intresse och stänga mötet över telefon.
          </p>

          {/* Joakim Ström Quote */}
          <blockquote className="mb-8 max-w-xl pl-3.5 border-l-2 border-[#38BDF8]/60 py-0.5 text-xs sm:text-[13px] text-neutral-300 font-light italic leading-relaxed">
            ”Vi har aldrig sett något liknande. De kunder som har flyttat över har en otroligt hög ROI.”
            <footer className="mt-1 not-italic font-mono text-[11px] text-neutral-500 uppercase tracking-wider">
              — Joakim Viking Ström, Co-Founder CFD
            </footer>
          </blockquote>

          {/* Action CTAs: Book Demo (Cal.com modal) & Certified Badge */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
            <button
              type="button"
              onClick={() => openCalModal()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-black" />
              <span>Boka en live-demo</span>
              <ArrowRight className="w-3.5 h-3.5 text-black" />
            </button>

            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-500/[0.08] border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Certified LinkedClient Partner</span>
            </div>
          </div>

          {/* Quiet micro-footnote */}
          <div className="text-[11px] text-neutral-500 font-mono flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#38BDF8]/70" />
            <span>A single click, and the magic unfolds.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

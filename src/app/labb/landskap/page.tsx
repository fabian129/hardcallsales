"use client";

// LABB — inte länkad från sajten. Visar LandscapeScene i samma layout som manifestsektionen (fas 02),
// så bakgrunden kan dömas innan den monteras som motiv i EditorialCanvasSection.
// Adress i dev: /labb/landskap · Monteringen: se MONTERING.md i samma mapp.

import React, { useState } from "react";
import { LandscapeScene } from "@/components/ui/LandscapeScene";

const VAL: Array<{ key: "tallarna" | "staden"; namn: string }> = [
  { key: "tallarna", namn: "L1 Tallarna" },
  { key: "staden", namn: "L2 Staden i molnen" },
];

export default function LandskapLabb() {
  const [plate, setPlate] = useState<"tallarna" | "staden">("tallarna");
  const [dis, setDis] = useState(true);

  return (
    <main className="relative w-full min-h-screen bg-[#FFFFFF] text-neutral-900 overflow-hidden flex flex-col justify-between border-t border-black/[0.06]">
      {/* Bakgrundsscenen — byts helt (key) när plåten byts, så GL-kontexten föds om rent. */}
      <LandscapeScene key={`${plate}-${dis ? "dis" : "tyst"}`} plate={plate} opacity={dis ? 0.55 : 0} />

      {/* HUD som i sektionen */}
      <div className="absolute inset-8 sm:inset-12 lg:inset-16 pointer-events-none select-none z-[4] flex flex-col justify-between">
        <div className="flex items-center justify-between text-[10px] font-mono text-black/30 uppercase tracking-[0.2em]">
          <span className="flex items-center gap-1.5"><span className="text-black/50">+</span> LABB // LANDSKAP</span>
          <span className="hidden sm:inline-block tracking-[0.25em] text-neutral-400">LANDSKAPET OCH DISEN · MOTORNS MOLNLAGER, LJUST</span>
          <span className="flex items-center gap-1.5">PHASE: 02/03 <span className="text-black/50">+</span></span>
        </div>
        <div className="flex items-center justify-between text-[10px] font-mono text-black/30 uppercase tracking-[0.2em]">
          <span className="text-black/40">+</span>
          <span className="text-black/40">+</span>
        </div>
      </div>

      {/* Samma textyta som sektionen, fas 02 */}
      <div className="relative z-20 w-full max-w-[1760px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 pt-20 sm:pt-28 lg:pt-32 pb-16 sm:pb-24 flex-1 flex flex-col justify-between">
        <div className="max-w-2xl xl:max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-neutral-200/80 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#7851A9] animate-pulse" />
              <span className="text-[11px] font-mono tracking-[0.2em] font-semibold text-[#7851A9] uppercase">VERKLIGHETEN</span>
            </div>
            <span className="text-xs font-mono text-neutral-400">FAS 02 AV 03</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-[62px] xl:text-[70px] font-normal text-[#0A0A0A] leading-[1.06] tracking-[-0.035em] mb-6">
            Att bygga ett internt säljteam tar sex månader och kostar miljoner.
          </h2>
          <p className="text-base sm:text-xl lg:text-2xl text-neutral-600 font-normal leading-relaxed max-w-2xl tracking-tight mb-8 sm:mb-10">
            Rekrytering, onboarding, verktygslicenser och personalomsättning. De flesta SaaS- och IT-bolag tappar fart och momentum innan deras egna SDR:er ens bokat sitt första kvalificerade möte.
          </p>
          <div className="mb-8 sm:mb-10 max-w-xl rounded-2xl bg-white/80 backdrop-blur-md border border-neutral-200/80 p-5 sm:p-6 shadow-xs">
            <blockquote className="text-base sm:text-lg lg:text-xl font-medium text-[#0A0A0A] tracking-tight leading-snug mb-2">
              ”Vi slapp anställa och bygga upp en egen säljavdelning från grunden.”
            </blockquote>
            <div className="flex items-center justify-between pt-2 border-t border-black/[0.06] mt-2">
              <cite className="text-xs font-mono uppercase tracking-wider text-neutral-500 not-italic">— Kundreferens, B2B Enterprise IT</cite>
              <span className="text-[10px] font-mono font-bold text-[#7851A9] bg-[#7851A9]/10 px-2 py-0.5 rounded">0 KR I FAST ONBOARDING</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#0A0A0A] text-white font-semibold text-sm tracking-tight shadow-md">
              Boka ett möte <span className="text-sm font-bold text-[#A881E9]">→</span>
            </span>
            <span className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/85 text-neutral-800 border border-neutral-300/80 backdrop-blur-md font-semibold text-sm tracking-tight shadow-xs">
              <span className="text-neutral-400">↓</span> Se dokumenterade case
            </span>
          </div>
        </div>

        {/* Labbets väljare — samma form som sektionens motivväljare */}
        <div className="relative z-30 pt-10 sm:pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
            Labb: plåtarna är stillor som redan finns i projektet · molnlagret väcks av första gest · reduced motion = stilla
          </div>
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-white/90 backdrop-blur-md border border-neutral-200/90 shadow-md">
            <span className="text-[10px] font-mono uppercase font-bold text-neutral-400 px-2">Plåt:</span>
            {VAL.map((v) => (
              <button
                key={v.key}
                type="button"
                onClick={() => setPlate(v.key)}
                className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  plate === v.key ? "bg-[#0A0A0A] text-white shadow-xs" : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                }`}
              >
                {v.namn}
              </button>
            ))}
            <span className="w-px h-4 bg-neutral-200 mx-1" />
            <button
              type="button"
              onClick={() => setDis((v) => !v)}
              className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                !dis ? "bg-[#0A0A0A] text-white shadow-xs" : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
              }`}
            >
              {dis ? "Dis av" : "Dis på"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

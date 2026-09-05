"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, CheckCircle2, Sparkles, Shield, Clock } from "lucide-react";
import { BookingForm } from "@/components/sections/BookingForm";

function BookingFormWithParams() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") || "";
  return <BookingForm initialService={serviceParam} />;
}

export default function BookingPage() {
  return (
    <div className="w-full min-h-screen bg-[#0A0A0A] text-white pt-28 sm:pt-36 pb-24 relative overflow-hidden select-none">
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Navigation Back Link */}
        <div className="mb-8 sm:mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400 hover:text-white uppercase transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Tillbaka till startsidan</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-[11px] font-mono tracking-widest text-neutral-300 uppercase mb-6">
            <Sparkles className="w-3 h-3 text-[#7851A9]" />
            <span>STRATEGISAMTAL · BOKA MÖTE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.05] mb-6">
            Boka ett möte med <br className="hidden sm:block" />
            <span className="text-neutral-400 font-normal">vår säljledning.</span>
          </h1>

          <p className="text-neutral-300 text-base sm:text-xl font-normal leading-relaxed max-w-2xl">
            Välj vad ni vill uppnå och lämna era uppgifter. Vi återkommer inom 24 timmar för att gå igenom er målgrupp och hur en 3-månaders pilot kan se ut för er.
          </p>

          {/* 3 Trust Signals */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 pt-8 mt-8 border-t border-white/10 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-emerald-400" />
              <span>100 % förutsättningslöst</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-neutral-400" />
              <span>Svar inom 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-neutral-400" />
              <span>Ingen bindningstid</span>
            </div>
          </div>
        </div>

        {/* Dedicated Full-Page Form Container */}
        <div className="w-full max-w-4xl mx-auto">
          <Suspense fallback={<div className="h-96 flex items-center justify-center text-neutral-500 font-mono">Laddar formulär...</div>}>
            <BookingFormWithParams />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

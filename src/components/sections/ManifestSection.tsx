import React from "react";
import { Reveal } from "@/components/ui/Reveal";

const STATS = [
  { value: "10–100", label: "möten per månad" },
  { value: "6", label: "steg i piloten" },
  { value: "3", label: "månader till utvärdering" },
  { value: "0", label: "egen SDR-funktion" },
];

export const ManifestSection: React.FC = () => {
  return (
    <section className="w-full bg-[#FAFAFA] text-[#0F0F0F] py-24 sm:py-32 border-b border-[#E6E6E6] relative overflow-hidden">
      
      {/* Subtle vertical architectural grid lines matching page */}
      <div className="absolute inset-0 pointer-events-none max-w-[1500px] mx-auto grid grid-cols-4 border-x border-black/[0.03]">
        <div className="border-r border-black/[0.03] h-full" />
        <div className="border-r border-black/[0.03] h-full" />
        <div className="border-r border-black/[0.03] h-full" />
      </div>

      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main 2-Column Split: Left = Manifest & Quote, Right = Overlapping Editorial Image Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 sm:mb-28">
          
          {/* Left Column: Expanded Manifest & Customer Proof */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-between">
            <Reveal delay={0.1} yOffset={20}>
              <div className="text-2xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-normal font-sans leading-[1.22] tracking-[-1.3px] mb-10 text-[#0F0F0F]">
                <span className="font-semibold text-[#0F0F0F]">
                  Vi bokar möten med beslutsfattare som faktiskt kan säga ja.
                </span>{" "}
                <span className="text-[#8E8E8E]">
                  Ingen egen SDR-funktion, ingen uppstartstid — bara möten i kalendern och affärer som stänger.
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.2} yOffset={20}>
              <div className="max-w-xl pl-5 border-l-2 border-black/10 py-1">
                <blockquote className="text-lg sm:text-xl font-medium text-[#0F0F0F] leading-snug tracking-tight mb-2">
                  ”Hard Call Sales har levererat över 20 MSEK i nya affärer för oss.”
                </blockquote>
                <p className="text-xs sm:text-[13px] text-[#777777]">
                  — Mattias Holm, Säljchef på AVEVA
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Prov: Berättelsen Photo Collage with floating pill tags */}
          <div className="lg:col-span-6 xl:col-span-5 relative h-[440px] sm:h-[480px] w-full flex items-center justify-center">
            <Reveal delay={0.25} yOffset={20}>
              <div className="relative w-[340px] sm:w-[420px] md:w-[480px] h-[400px] sm:h-[440px] mx-auto">
                
                {/* Photo 1 (Top Left / Background) */}
                <div className="absolute top-2 left-0 w-[190px] sm:w-[230px] h-[240px] sm:h-[280px]">
                  <div className="w-full h-full rounded-[20px] overflow-hidden shadow-lg border border-black/5 bg-[#EAEAEA]">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
                      alt="Team som lyfter luren"
                      className="w-full h-full object-cover contrast-105 brightness-100"
                    />
                  </div>
                  {/* Floating Pill Tag */}
                  <div className="absolute -top-3 left-4 bg-white/95 backdrop-blur-md border border-[#E0E0E0] shadow-md px-3.5 py-1.5 rounded-full flex items-center gap-1.5 z-20">
                    <span className="text-xs font-bold text-black leading-none">+</span>
                    <span className="text-[11px] sm:text-xs font-semibold text-[#111111] whitespace-nowrap">Team som lyfter luren</span>
                  </div>
                </div>

                {/* Photo 2 (Top Right / Background) */}
                <div className="absolute top-8 right-0 w-[180px] sm:w-[220px] h-[250px] sm:h-[290px]">
                  <div className="w-full h-full rounded-[20px] overflow-hidden shadow-lg border border-black/5 bg-[#EAEAEA]">
                    <img
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop"
                      alt="Nära er marknad"
                      className="w-full h-full object-cover contrast-105 brightness-100"
                    />
                  </div>
                  {/* Floating Pill Tag */}
                  <div className="absolute top-1/2 -right-3 bg-white/95 backdrop-blur-md border border-[#E0E0E0] shadow-md px-3.5 py-1.5 rounded-full flex items-center gap-1.5 z-20">
                    <span className="text-xs font-bold text-black leading-none">+</span>
                    <span className="text-[11px] sm:text-xs font-semibold text-[#111111] whitespace-nowrap">Nära er marknad</span>
                  </div>
                </div>

                {/* Photo 3 (Bottom Center / Foreground Overlay) */}
                <div className="absolute bottom-0 left-12 sm:left-20 w-[180px] sm:w-[220px] h-[230px] sm:h-[260px] z-10">
                  <div className="w-full h-full rounded-[20px] overflow-hidden shadow-2xl border-2 border-white bg-[#EAEAEA]">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
                      alt="Bevisad metod"
                      className="w-full h-full object-cover contrast-105 brightness-100"
                    />
                  </div>
                  {/* Floating Pill Tag */}
                  <div className="absolute -bottom-3 left-4 bg-white/95 backdrop-blur-md border border-[#E0E0E0] shadow-md px-3.5 py-1.5 rounded-full flex items-center gap-1.5 z-30">
                    <span className="text-xs font-bold text-black leading-none">+</span>
                    <span className="text-[11px] sm:text-xs font-semibold text-[#111111] whitespace-nowrap">Bevisad metod</span>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

        </div>

        {/* 4 Large Metrics Siffror (Non-wrapping, balanced baseline across full 1500px width) */}
        <Reveal delay={0.3} yOffset={20}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-14 border-t border-[#E6E6E6]">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col justify-start">
                <div className="text-4xl sm:text-5xl lg:text-[56px] font-normal text-[#0F0F0F] tracking-tight mb-2.5 font-sans whitespace-nowrap leading-none">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-[13px] text-[#777777] font-normal leading-normal">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
};

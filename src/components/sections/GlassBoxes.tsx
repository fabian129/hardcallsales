import React from "react";
import { Container } from "@/components/ui/Container";
import { Bot, Sparkles, PhoneCall, CheckCircle2 } from "lucide-react";

export const GlassBoxes: React.FC = () => {
  return (
    <section className="relative w-full bg-[#0A0A0A] text-white py-24 sm:py-32 overflow-hidden border-b border-[#222222]">
      {/* Crisp Atmospheric Monochrome Background Scrim (No Purple Glow) */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A] pointer-events-none" />

      <Container size="wide" className="relative z-10">
        
        {/* Header matching Pen Image 2 */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-16 sm:mb-20 gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#B89FE0]">
              <Bot size={18} />
            </div>
            <span className="text-base sm:text-lg font-medium tracking-tight text-white">
              LinkedClient
            </span>
          </div>

          <div className="max-w-md md:text-right">
            <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
              Världens första AI-Sales agent.
            </h3>
            <p className="text-sm text-[#8E8E8E] leading-relaxed mt-1">
              AI-outreach kombinerat med cold calls, <br className="hidden sm:inline" />
              körd av människor som ringer på riktigt.
            </p>
          </div>
        </div>

        {/* 3 Frosted Glass Cards matching Pen Image 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: AI-outreach */}
          <div className="rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/10 p-8 sm:p-9 flex flex-col justify-between min-h-[460px] hover:border-white/20 transition-all">
            <div>
              <div className="flex items-center gap-2 text-xs text-white/60 mb-10">
                <Sparkles size={14} />
                <span>01 Funktion</span>
              </div>

              {/* Minimal UI Widget */}
              <div className="space-y-2.5 mb-16 opacity-75">
                <div className="h-6 w-3/4 rounded-md bg-[#7851A9]/30" />
                <div className="h-5 w-5/6 rounded-md bg-white/10" />
                <div className="h-5 w-1/2 rounded-md bg-white/10" />
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-normal text-white tracking-tight mb-2.5">
                AI-outreach
              </h4>
              <p className="text-sm text-white/60 leading-relaxed">
                Segmentering och sekvenser som hittar rätt person innan någon lyfter luren.
              </p>
            </div>
          </div>

          {/* Card 2: Cold calls */}
          <div className="rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/10 p-8 sm:p-9 flex flex-col justify-between min-h-[460px] hover:border-white/20 transition-all">
            <div>
              <div className="flex items-center gap-2 text-xs text-white/60 mb-10">
                <PhoneCall size={14} />
                <span>02 Funktion</span>
              </div>

              {/* Minimal UI Widget */}
              <div className="space-y-2.5 mb-16 opacity-75">
                <div className="h-6 w-3/4 rounded-md bg-[#7851A9]/30" />
                <div className="h-5 w-5/6 rounded-md bg-white/10" />
                <div className="h-5 w-1/2 rounded-md bg-white/10" />
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-normal text-white tracking-tight mb-2.5">
                Cold calls
              </h4>
              <p className="text-sm text-white/60 leading-relaxed">
                Riktiga samtal från säljare som kan branschen — inte en robot i andra änden.
              </p>
            </div>
          </div>

          {/* Card 3: Certifierad partner */}
          <div className="rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/10 p-8 sm:p-9 flex flex-col justify-between min-h-[460px] hover:border-white/20 transition-all">
            <div>
              <div className="flex items-center gap-2 text-xs text-white/60 mb-10">
                <CheckCircle2 size={14} />
                <span>03 Funktion</span>
              </div>

              {/* Minimal UI Widget */}
              <div className="space-y-2.5 mb-16 opacity-75">
                <div className="h-6 w-3/4 rounded-md bg-[#7851A9]/30" />
                <div className="h-5 w-5/6 rounded-md bg-white/10" />
                <div className="h-5 w-1/2 rounded-md bg-white/10" />
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-normal text-white tracking-tight mb-2.5">
                Certifierad partner
              </h4>
              <p className="text-sm text-white/60 leading-relaxed">
                Kalender- och CRM-integrering så mötet landar där du redan jobbar.
              </p>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
};

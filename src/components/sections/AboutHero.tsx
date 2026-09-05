import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export const AboutHero: React.FC = () => {
  return (
    <section className="w-full bg-[#0A0A0A] text-white pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-[#2B2B2B] relative overflow-hidden">
      {/* Background Accent Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[380px] bg-[#7851A9]/12 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-[350px] h-[250px] bg-[#06B6D4]/5 blur-[120px] pointer-events-none rounded-full" />

      <Container size="wide" className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          
          <Badge variant="purple-soft" size="md" className="mb-4 sm:mb-6">
            <Sparkles size={14} className="text-[#7851A9] mr-1.5" />
            <span>OM HARD CALL SALES</span>
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6">
            Vi bygger framtidens B2B-försäljning
          </h1>

          <p className="text-base sm:text-lg text-[#A8A8A8] max-w-2xl leading-relaxed mb-8">
            Människorna bakom samtalen. Vi grundades för att lösa techbolagens största tillväxthinder: att snabbt, förutsägbart och transparent fylla kalendern med kvalificerade säljmöten hos rätt beslutsfattare.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <Link
              href="/boka-mote"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-[#7851A9] text-white font-semibold text-sm hover:bg-[#8F6BC1] transition-all duration-200 shadow-[0_0_24px_rgba(120,81,169,0.35)]"
            >
              <span>Boka ett introduktionsmöte</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/jobba-hos-oss"
              className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-200"
            >
              Bli en del av teamet
            </Link>
          </div>

          {/* Key Facts Pill Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full pt-8 border-t border-white/10 text-left">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-xs text-[#A8A8A8] block mb-1">Grundat</span>
              <span className="text-sm sm:text-base font-bold text-white">Stockholm & Malta</span>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-xs text-[#A8A8A8] block mb-1">Metodik</span>
              <span className="text-sm sm:text-base font-bold text-white">10 000+ timmar / säljare</span>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-xs text-[#A8A8A8] block mb-1">AI-Partner</span>
              <span className="text-sm sm:text-base font-bold text-white">Certifierad LinkedClient</span>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-xs text-[#A8A8A8] block mb-1">Mötesgaranti</span>
              <span className="text-sm sm:text-base font-bold text-white">3 månaders pilot</span>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

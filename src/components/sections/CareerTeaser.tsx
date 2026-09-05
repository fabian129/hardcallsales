import React from "react";
import Link from "next/link";
import { Briefcase, ArrowRight, Sun, DollarSign, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export const CareerTeaser: React.FC = () => {
  return (
    <section className="w-full bg-[#0A0A0A] text-white py-20 sm:py-28 border-b border-[#2B2B2B] relative overflow-hidden">
      <Container size="wide">
        <div className="rounded-3xl bg-gradient-to-br from-[#111111] via-[#161616] to-[#7851A9]/20 border border-[#7851A9]/40 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          
          {/* Ambient Lighting */}
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#7851A9]/20 blur-[120px] pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Col: Career Pitch (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="purple-soft" size="md">
                <Briefcase size={14} className="text-[#7851A9] mr-1.5" />
                <span>KARRIÄR & TALANG</span>
              </Badge>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Vill du bygga framtidens B2B-försäljning med oss?
              </h2>

              <p className="text-sm sm:text-base text-[#A8A8A8] leading-relaxed">
                Vi söker ständigt drivna B2B-säljare, mötesbokare och AI-specialister till våra kontor i Stockholm och Sliema på Malta. Vi erbjuder marknadsledande provisionsmodeller, senior coachning och 300 soldagar om året.
              </p>

              {/* 3 Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2.5">
                  <Sun size={18} className="text-amber-400 shrink-0" />
                  <span className="text-xs font-semibold text-white">Sol & Hav på Malta</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2.5">
                  <DollarSign size={18} className="text-emerald-400 shrink-0" />
                  <span className="text-xs font-semibold text-white">Provision utan tak</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2.5">
                  <Zap size={18} className="text-[#7851A9] shrink-0" />
                  <span className="text-xs font-semibold text-white">LinkedClient AI-tech</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/jobba-hos-oss"
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#7851A9] text-white font-semibold text-sm hover:bg-[#8F6BC1] transition-all shadow-[0_0_24px_rgba(120,81,169,0.35)]"
                >
                  <span>Se lediga tjänster & ansök</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/boka-mote"
                  className="inline-flex items-center h-12 px-6 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
                >
                  Boka kundmöte istället
                </Link>
              </div>
            </div>

            {/* Right Col: Culture Stat Card (5 cols) */}
            <div className="lg:col-span-5 rounded-2xl bg-black/50 border border-white/10 p-6 sm:p-8 space-y-6">
              <div className="text-xs uppercase font-mono font-semibold text-[#7851A9]">
                Kultur & Framgång
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="text-xs text-[#A8A8A8]">Säljerfarenhet i teamet</span>
                  <span className="text-sm font-bold text-white">10 000+ timmar/snitt</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="text-xs text-[#A8A8A8]">Hub-platser</span>
                  <span className="text-sm font-bold text-white">Stockholm & Malta</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="text-xs text-[#A8A8A8]">Säljverktyg</span>
                  <span className="text-sm font-bold text-white">LinkedClient + Modern Data</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#A8A8A8]">Kollektiv framgång</span>
                  <span className="text-sm font-bold text-emerald-400">98 % nöjda partners</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#7851A9]/10 border border-[#7851A9]/20 text-xs text-[#EDEDED] text-center font-medium">
                ”Vi sätter människan i centrum och AI som hävstång.”
              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};

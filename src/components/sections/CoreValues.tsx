import React from "react";
import { Target, ShieldCheck, Cpu, Users, CheckCircle2, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { CORE_VALUES } from "@/data/team";

export const CoreValues: React.FC = () => {
  const iconsMap: Record<string, React.ReactNode> = {
    Target: <Target size={24} className="text-[#7851A9]" />,
    ShieldCheck: <ShieldCheck size={24} className="text-[#7851A9]" />,
    Cpu: <Cpu size={24} className="text-[#7851A9]" />,
    Users: <Users size={24} className="text-[#7851A9]" />,
  };

  return (
    <section className="w-full bg-[#0A0A0A] text-white py-20 sm:py-28 border-b border-[#2B2B2B] relative overflow-hidden">
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[350px] bg-[#7851A9]/10 blur-[150px] pointer-events-none rounded-full" />

      <Container size="wide" className="relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <Badge variant="purple-soft" size="md" className="mb-4">
            <Award size={14} className="text-[#7851A9] mr-1.5" />
            <span>KÄRNVÄRDERINGAR</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight mb-4">
            Fyra principer som styr varje samtal och varje kampanj
          </h2>
          <p className="text-sm sm:text-base text-[#A8A8A8] max-w-2xl mx-auto">
            Vi kompromissar aldrig med kvaliteten. Vårt arbete vilar på dessa orubbliga grundpelare.
          </p>
        </div>

        {/* 4 Core Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {CORE_VALUES.map((val) => (
            <div
              key={val.id}
              className="rounded-3xl bg-[#111111]/90 border border-[#2B2B2B] hover:border-[#7851A9]/50 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between group shadow-lg relative overflow-hidden"
            >
              {/* Corner Ambient Glow */}
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#7851A9]/10 rounded-full blur-2xl group-hover:bg-[#7851A9]/20 transition-all" />

              <div>
                {/* Number & Icon Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#7851A9]/20 transition-colors">
                    {iconsMap[val.icon] || <Target size={24} className="text-[#7851A9]" />}
                  </div>
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-white/20 group-hover:text-[#7851A9]/40 transition-colors">
                    {val.number}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-[#B89FE0] transition-colors">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A8A8A8] leading-relaxed mb-6">
                  {val.description}
                </p>
              </div>

              {/* Bullet Points */}
              <div className="pt-6 border-t border-white/10 space-y-2.5">
                {val.bulletPoints.map((bp, bpIdx) => (
                  <div key={bpIdx} className="flex items-start gap-2.5 text-xs text-[#EDEDED]">
                    <CheckCircle2 size={15} className="text-[#7851A9] shrink-0 mt-0.5" />
                    <span>{bp}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

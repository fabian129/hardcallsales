import React from "react";
import Link from "next/link";
import { Users, ArrowRight, MapPin, PhoneCall, BarChart3, Briefcase } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { TEAM_ROLES } from "@/data/team";

export const TeamGrid: React.FC = () => {
  const roleIcons = [
    <Briefcase key="1" size={20} className="text-[#7851A9]" />,
    <PhoneCall key="2" size={20} className="text-[#7851A9]" />,
    <BarChart3 key="3" size={20} className="text-[#7851A9]" />,
  ];

  return (
    <section className="w-full bg-[#0A0A0A] text-white py-20 sm:py-28 border-b border-[#2B2B2B] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#7851A9]/10 blur-[150px] pointer-events-none rounded-full" />

      <Container size="wide" className="relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <Badge variant="purple-soft" size="md" className="mb-3.5">
              <Users size={14} className="text-[#7851A9] mr-1.5" />
              <span>Teamet</span>
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
              Människorna bakom samtalen
            </h2>
            <p className="mt-3 text-base text-[#A8A8A8] max-w-xl">
              Ni vet alltid vilka som ringer, vem som håller i piloten och vem som analyserar siffrorna.
            </p>
          </div>

          <Link
            href="/om"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#B89FE0] hover:text-white transition-colors group self-start md:self-auto"
          >
            <span>Läs mer om Hard Call Sales</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Frosted Glass Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {TEAM_ROLES.map((role, idx) => (
            <div
              key={role.id}
              className="rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/15 p-7 sm:p-8 flex flex-col justify-between hover:border-[#7851A9]/70 hover:-translate-y-1 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] group min-h-[360px]"
            >
              <div>
                {/* Kicker & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.08] border border-white/15 flex items-center justify-center group-hover:bg-[#7851A9] group-hover:text-white transition-all shadow-sm">
                    {roleIcons[idx]}
                  </div>
                  <span className="text-xs font-mono font-medium text-[#A8A8A8] bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                    {role.cardKicker}
                  </span>
                </div>

                {/* Role Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1.5">
                  {role.name}
                </h3>
                <span className="text-xs font-semibold text-[#B89FE0] uppercase tracking-wider block mb-4">
                  {role.roleTitle}
                </span>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A8A8A8] leading-relaxed mb-6">
                  {role.description}
                </p>
              </div>

              {/* Hub & Seniority Tag */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-[#EDEDED]">
                  <MapPin size={13} className="text-[#7851A9]" />
                  <span>{role.hub}</span>
                </div>
                <span className="text-[11px] font-medium text-[#7851A9] bg-[#7851A9]/15 border border-[#7851A9]/30 px-2 py-0.5 rounded-full">
                  Senior expertis
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dual Hub Note Banner */}
        <div className="rounded-xl bg-white/[0.02] border border-white/5 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8A8A8]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Två samverkande hubbar: Strategi & kundansvar i Stockholm • Operativt säljnav i Sliema, Malta</span>
          </div>
          <Link
            href="/om#kontor"
            className="text-xs font-semibold text-white hover:text-[#B89FE0] transition-colors"
          >
            Se våra kontor & adresser →
          </Link>
        </div>

      </Container>
    </section>
  );
};

import React from "react";
import Link from "next/link";
import { Users, MapPin, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { LEADERSHIP_TEAM } from "@/data/team";

const LinkedinIcon = ({ size = 14, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
  </svg>
);

export const LeadershipGrid: React.FC = () => {
  return (
    <section className="w-full bg-[#0A0A0A] text-white py-20 sm:py-28 border-b border-[#2B2B2B] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[350px] bg-[#7851A9]/10 blur-[150px] pointer-events-none rounded-full" />

      <Container size="wide" className="relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 gap-6">
          <div className="max-w-2xl">
            <Badge variant="purple-soft" size="md" className="mb-3.5">
              <Users size={14} className="text-[#7851A9] mr-1.5" />
              <span>LEADERSHIP & EXPERTER</span>
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
              Människorna som leder Hard Call Sales
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#A8A8A8]">
              Erfarna entreprenörer, säljchefer och AI-specialister som brinner för att bygga förutsägbara B2B-intäktsströmmar.
            </p>
          </div>

          <Link
            href="/jobba-hos-oss"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#B89FE0] hover:text-white transition-colors group self-start md:self-auto"
          >
            <span>Vill du jobba med oss? Se lediga tjänster</span>
            <ArrowUpRight size={16} className="text-[#7851A9] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* 4 Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {LEADERSHIP_TEAM.map((member) => (
            <div
              key={member.id}
              className="rounded-3xl bg-[#111111]/90 border border-[#2B2B2B] hover:border-[#7851A9]/50 transition-all duration-300 p-7 flex flex-col justify-between group shadow-xl relative overflow-hidden"
            >
              <div>
                {/* Top Hub Badge & LinkedIn */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1.5 text-xs text-[#EDEDED] bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                    <MapPin size={12} className="text-[#7851A9]" />
                    <span>{member.hub}</span>
                  </div>

                  {member.linkedinUrl && (
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-[#7851A9] hover:border-[#7851A9] flex items-center justify-center text-[#A8A8A8] hover:text-white transition-all"
                      aria-label={`${member.name} på LinkedIn`}
                    >
                      <LinkedinIcon size={14} />
                    </a>
                  )}
                </div>

                {/* Avatar Placeholder / Initial Monogram */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7851A9]/30 to-white/5 border border-[#7851A9]/40 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <span className="text-xl font-bold font-mono text-white">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold text-white tracking-tight mb-1 group-hover:text-[#B89FE0] transition-colors">
                  {member.name}
                </h3>
                <span className="text-xs font-semibold text-[#7851A9] uppercase tracking-wider block mb-4">
                  {member.roleTitle}
                </span>

                {/* Description & Bio */}
                <p className="text-xs text-[#A8A8A8] leading-relaxed mb-6">
                  {member.description}
                </p>
              </div>

              {/* Expertise Tags */}
              {member.expertise && (
                <div className="pt-4 border-t border-white/10">
                  <span className="text-[10px] uppercase font-semibold text-[#6E6E6E] block mb-2">
                    Fokusområden:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {member.expertise.map((exp, eIdx) => (
                      <span
                        key={eIdx}
                        className="text-[11px] bg-white/[0.03] border border-white/5 px-2 py-0.5 rounded-md text-[#EDEDED]"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

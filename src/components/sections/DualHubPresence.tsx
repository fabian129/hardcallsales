import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, CheckCircle2, Globe2, Sun, Building } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { HUBS } from "@/data/team";

export const DualHubPresence: React.FC = () => {
  return (
    <section id="kontor" className="w-full bg-[#0A0A0A] text-white py-20 sm:py-28 border-b border-[#2B2B2B] relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-[#7851A9]/10 blur-[150px] pointer-events-none rounded-full" />

      <Container size="wide" className="relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <Badge variant="purple-soft" size="md" className="mb-4">
            <Globe2 size={14} className="text-[#7851A9] mr-1.5" />
            <span>VÅRA KONTOR & HUBBAR</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight mb-4">
            Stockholm & Malta — Två samverkande kraftcenter
          </h2>
          <p className="text-sm sm:text-base text-[#A8A8A8]">
            Vi kombinerar strategisk närhet till Nordens tech-ekosystem med ett högpresterande operativt säljnav i Medelhavet.
          </p>
        </div>

        {/* 2 Hub Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 mb-12">
          {HUBS.map((hub) => (
            <div
              key={hub.id}
              className="rounded-3xl bg-[#111111]/90 border border-[#2B2B2B] hover:border-[#7851A9]/50 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group"
            >
              {/* Corner Ambient Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#7851A9]/10 rounded-full blur-3xl group-hover:bg-[#7851A9]/20 transition-all" />

              <div>
                {/* Hub Header */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {hub.id === "malta" ? (
                        <Sun size={20} className="text-amber-400" />
                      ) : (
                        <Building size={20} className="text-[#7851A9]" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {hub.city}
                      </h3>
                      <span className="text-xs text-[#A8A8A8]">{hub.country}</span>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-semibold text-[#9B7BC7] bg-[#7851A9]/15 border border-[#7851A9]/30 px-3 py-1 rounded-full">
                    {hub.badge}
                  </span>
                </div>

                {/* Hub Title & Description */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-[#EDEDED] mb-2">
                    {hub.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#A8A8A8] leading-relaxed">
                    {hub.description}
                  </p>
                </div>

                {/* Role Focus */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 mb-6">
                  <span className="text-[11px] font-semibold text-[#7851A9] uppercase tracking-wider block mb-1">
                    Primärt verksamhetsfokus:
                  </span>
                  <p className="text-xs text-[#EDEDED] font-medium">
                    {hub.roleFocus}
                  </p>
                </div>

                {/* Features Checklist */}
                <div className="space-y-2.5 mb-8">
                  {hub.features.map((f, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#EDEDED]">
                      <CheckCircle2 size={15} className="text-[#7851A9] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hub Contact Details */}
              <div className="pt-6 border-t border-white/10 space-y-2.5 text-xs text-[#A8A8A8]">
                <div className="flex items-center gap-2 text-[#EDEDED]">
                  <MapPin size={14} className="text-[#7851A9] shrink-0" />
                  <span>{hub.address}</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <a
                    href={`mailto:${hub.email}`}
                    className="flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <Mail size={13} className="text-[#7851A9]" />
                    <span>{hub.email}</span>
                  </a>
                  <a
                    href={`tel:${hub.phone}`}
                    className="flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <Phone size={13} className="text-[#7851A9]" />
                    <span>{hub.phone}</span>
                  </a>
                  <div className="flex items-center gap-1.5 text-[#6E6E6E]">
                    <Clock size={13} />
                    <span>{hub.operatingHours}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Global Scalability Note */}
        <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-sm">
          <div className="space-y-1">
            <h4 className="text-base font-semibold text-white">
              Vill ni besöka oss på plats i Stockholm eller på Malta?
            </h4>
            <p className="text-xs sm:text-sm text-[#A8A8A8]">
              Vi välkomnar kunder och samarbetspartners till båda våra kontor för uppstartsworkshops och strategimöten.
            </p>
          </div>
          <Link
            href="/boka-mote"
            className="h-11 px-6 rounded-full bg-[#7851A9] text-white font-semibold text-xs hover:bg-[#8F6BC1] transition-colors flex items-center justify-center shrink-0"
          >
            Boka möte med ledningen
          </Link>
        </div>

      </Container>
    </section>
  );
};

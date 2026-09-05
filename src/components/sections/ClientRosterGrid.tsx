import React from "react";
import Link from "next/link";
import { Hexagon, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { CLIENT_LOGOS } from "@/data/caseStudies";

export const ClientRosterGrid: React.FC = () => {
  return (
    <section className="w-full bg-[#0A0A0A] text-white py-20 sm:py-28 border-b border-[#2B2B2B] relative overflow-hidden">
      <Container size="wide" className="relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <Badge variant="purple-soft" size="md" className="mb-3.5">
              <span>Kundnätverk & Branscher</span>
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
              13+ kundbolag inom IT, SaaS och Industri
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#A8A8A8]">
              Vi bygger pipelines för ledande nordiska och internationella techbolag. Här är ett urval av bolag och branscher vi samarbetar med.
            </p>
          </div>

          <div className="text-xs text-[#A8A8A8] bg-white/[0.03] border border-white/10 px-4 py-2.5 rounded-xl self-start md:self-auto flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>13 aktiva B2B-kundbolag 2026</span>
          </div>
        </div>

        {/* 13+ Logo & Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 mb-12">
          {CLIENT_LOGOS.map((client) => (
            <div
              key={client.id}
              className={`rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between group ${
                client.isFeatured
                  ? "bg-gradient-to-b from-white/[0.05] to-white/[0.02] border-[#7851A9]/40 hover:border-[#7851A9] hover:shadow-[0_0_24px_rgba(120,81,169,0.2)]"
                  : "bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.04]"
              }`}
            >
              <div>
                {/* Header: Logo Icon & Category Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#7851A9]/20 transition-colors">
                    <Hexagon size={20} className="text-[#7851A9] group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                  <span className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${
                    client.category === "Enterprise"
                      ? "bg-purple-950/40 border-purple-500/30 text-purple-300"
                      : client.category === "SaaS"
                      ? "bg-blue-950/40 border-blue-500/30 text-blue-300"
                      : client.category === "Fintech"
                      ? "bg-emerald-950/40 border-emerald-500/30 text-emerald-300"
                      : "bg-amber-950/40 border-amber-500/30 text-amber-300"
                  }`}>
                    {client.category}
                  </span>
                </div>

                {/* Client Name */}
                <h3 className="text-lg font-bold text-white tracking-tight mb-1 group-hover:text-[#B89FE0] transition-colors">
                  {client.name}
                </h3>
                
                {/* Industry description */}
                <p className="text-xs text-[#A8A8A8]">
                  {client.industry || "B2B Tech & Solutions"}
                </p>
              </div>

              {/* Card Footer status */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#6E6E6E]">
                <span className="flex items-center gap-1 text-[#A8A8A8]">
                  <CheckCircle size={12} className="text-[#7851A9]" />
                  <span>Verifierad pipeline</span>
                </span>
                {client.isFeatured && (
                  <span className="text-[#7851A9] font-medium font-mono text-[10px]">Featured</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Security & Data Footprint Banner */}
        <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#7851A9]/20 border border-[#7851A9]/40 flex items-center justify-center shrink-0">
              <Shield size={22} className="text-[#7851A9]" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-white mb-1">
                100 % GDPR-kompatibel och varumärkessäker prospektering
              </h4>
              <p className="text-xs sm:text-sm text-[#A8A8A8] max-w-2xl leading-relaxed">
                Alla våra kampanjer, datakällor och samtalsrutiner följer europeiska dataskyddsförordningen (GDPR). Ni äger all data och har full spårbarhet i realtid.
              </p>
            </div>
          </div>

          <Link
            href="/boka-mote"
            className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-white text-black font-semibold text-xs hover:bg-[#EDEDED] transition-colors shrink-0"
          >
            <span>Se vad vi kan göra för er</span>
            <ArrowRight size={14} />
          </Link>
        </div>

      </Container>
    </section>
  );
};

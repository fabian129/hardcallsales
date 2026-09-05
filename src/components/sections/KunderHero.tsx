import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Users, Database } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { KEY_METRICS } from "@/data/caseStudies";

export const KunderHero: React.FC = () => {
  const metricIcons = [
    <TrendingUp key="1" size={20} className="text-[#7851A9]" />,
    <Sparkles key="2" size={20} className="text-[#7851A9]" />,
    <ShieldCheck key="3" size={20} className="text-[#7851A9]" />,
    <Database key="4" size={20} className="text-[#7851A9]" />,
  ];

  return (
    <section className="w-full bg-[#0A0A0A] text-white pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-[#2B2B2B] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#7851A9]/12 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-10 w-[400px] h-[300px] bg-[#3B82F6]/5 blur-[120px] pointer-events-none rounded-full" />

      <Container size="wide" className="relative z-10">
        
        {/* Breadcrumb & Eyebrow */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <Badge variant="purple-soft" size="md" className="mb-4 sm:mb-6">
            <Sparkles size={14} className="text-[#7851A9] mr-1.5" />
            <span>KUNDCASE & RESULTAT</span>
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6">
            Hur vi hjälper B2B-bolag att skala sin försäljning
          </h1>

          <p className="text-base sm:text-lg text-[#A8A8A8] max-w-2xl leading-relaxed mb-8">
            Vi låter resultaten tala för sig själva. Siffror före adjektiv — från enterprise-affärer på över 20 MSEK till 100+ stängda SaaS-avtal och 3.8x ROI.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/boka-mote"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-[#7851A9] text-white font-semibold text-sm hover:bg-[#8F6BC1] transition-all duration-200 shadow-[0_0_24px_rgba(120,81,169,0.35)]"
            >
              <span>Boka ett möte & testa pilot</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href="#case-studies"
              className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-200"
            >
              Utforska våra kundcase
            </a>
          </div>
        </div>

        {/* Quick Stats Bar (4 KPIs) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
          {KEY_METRICS.map((metric, idx) => (
            <div
              key={metric.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#111111]/90 backdrop-blur-md border border-[#2B2B2B] hover:border-[#7851A9]/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#7851A9]/20 transition-colors">
                  {metricIcons[idx] || <Users size={18} className="text-[#7851A9]" />}
                </div>
                <span className="text-xs font-mono text-[#6E6E6E] group-hover:text-[#9B7BC7] transition-colors">
                  0{idx + 1}
                </span>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#B89FE0] transition-all">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-[#EDEDED] mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-[#A8A8A8]">
                  {metric.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

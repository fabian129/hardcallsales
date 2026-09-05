import React from "react";
import Link from "next/link";
import { ArrowUpRight, Hexagon, Shield } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { KEY_METRICS, CLIENT_LOGOS } from "@/data/caseStudies";

export const ProofMetrics: React.FC = () => {
  return (
    <section className="w-full bg-[#0A0A0A] py-20 sm:py-24 border-b border-[#2B2B2B] relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[300px] bg-[#7851A9]/10 blur-[120px] pointer-events-none rounded-full" />

      <Container size="wide" className="relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <Badge variant="purple-soft" size="md" className="mb-3.5">
              Bevisen, inte löftena
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
              Siffror före adjektiv — bevisad pipeline för IT & SaaS
            </h2>
          </div>
          <Link
            href="/case"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#A8A8A8] hover:text-white transition-colors group self-start md:self-auto"
          >
            <span>Se alla case & referenser</span>
            <ArrowUpRight size={16} className="text-[#7851A9] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* 4-Stat Metric Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {KEY_METRICS.map((metric, index) => (
            <Card
              key={metric.id}
              variant="dark"
              padding="lg"
              radius="lg"
              className="bg-[#111111]/80 backdrop-blur-md border-[#2B2B2B] hover:border-[#7851A9]/50 flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-[#6E6E6E] group-hover:text-[#9B7BC7] transition-colors">
                  0{index + 1}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#7851A9]/40 group-hover:bg-[#7851A9] transition-colors" />
              </div>

              <div>
                <div className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-none mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#B89FE0] transition-all">
                  {metric.value}
                </div>
                <div className="text-sm font-medium text-[#EDEDED] mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-[#A8A8A8]">
                  {metric.sublabel}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Client Logo Roster */}
        <div className="rounded-2xl bg-white/[0.02] border border-white/[0.08] p-6 sm:p-8 backdrop-blur-sm">
          <div className="text-center mb-6">
            <p className="text-xs uppercase tracking-wider font-semibold text-[#A8A8A8]">
              Förtroende från ledande B2B- och techbolag
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {CLIENT_LOGOS.slice(0, 6).map((logo) => (
              <div
                key={logo.id}
                className="h-16 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#7851A9]/40 flex items-center justify-center px-4 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2 text-[#A8A8A8] group-hover:text-white transition-colors">
                  <Hexagon size={16} className="text-[#7851A9] group-hover:rotate-45 transition-transform duration-300 shrink-0" />
                  <span className="text-sm font-semibold tracking-tight">
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6E6E6E]">
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-[#7851A9]" />
              <span>100 % GDPR-kompatibel outreach & datainsamling</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[#EDEDED] font-medium">13 aktiva B2B-kundbolag</span>
              <span>•</span>
              <span className="text-[#EDEDED] font-medium">100+ stängda affärer</span>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
};

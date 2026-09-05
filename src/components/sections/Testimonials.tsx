import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { CASE_STUDIES, TESTIMONIALS } from "@/data/caseStudies";

export const Testimonials: React.FC = () => {
  return (
    <section className="w-full bg-[#0A0A0A] text-white py-20 sm:py-28 border-b border-[#2B2B2B] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-[#7851A9]/10 blur-[130px] pointer-events-none rounded-full" />

      <Container size="wide">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <Badge variant="purple-soft" size="md" className="mb-3.5">
              Kundberättelser
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
              Vad våra kunder säger när siffrorna räknas ihop
            </h2>
          </div>

          <Link
            href="/case"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#B89FE0] hover:text-white transition-colors group self-start md:self-auto"
          >
            <span>Se fler case studies</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Featured Case Study Cards (AVEVA & Meetly) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {CASE_STUDIES.map((cs) => (
            <div
              key={cs.id}
              className="rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 p-7 sm:p-9 flex flex-col justify-between hover:border-[#7851A9]/50 transition-all duration-300 group"
            >
              <div>
                {/* Card Top: Client & Metric Pill */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="text-xs font-semibold text-[#7851A9] uppercase tracking-wider block mb-1">
                      {cs.industry}
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {cs.client}
                    </h3>
                  </div>

                  <div className="text-right">
                    <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#B89FE0] tracking-tight block">
                      {cs.metric}
                    </span>
                    <span className="text-[11px] text-[#A8A8A8] block">
                      {cs.metricLabel}
                    </span>
                  </div>
                </div>

                {/* Challenge & Solution Summary */}
                <div className="space-y-3 mb-6 text-xs sm:text-sm text-[#A8A8A8] leading-relaxed">
                  <p>
                    <strong className="text-white font-medium">Utmaning:</strong> {cs.challenge}
                  </p>
                  <p>
                    <strong className="text-white font-medium">Lösning:</strong> {cs.solution}
                  </p>
                </div>
              </div>

              {/* Quote Block */}
              {cs.quote && (
                <div className="pt-6 border-t border-white/10 mt-2">
                  <blockquote className="text-sm sm:text-base font-medium text-[#EDEDED] italic mb-3">
                    ”{cs.quote.text}”
                  </blockquote>
                  <div className="text-xs text-[#6E6E6E]">
                    <span className="text-white font-medium">{cs.quote.author}</span> — {cs.quote.role}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 3 Additional Quick Testimonial Pills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors flex flex-col justify-between"
            >
              <p className="text-xs sm:text-sm text-[#EDEDED] leading-relaxed mb-4">
                ”{t.quote}”
              </p>
              <div className="text-[11px] text-[#6E6E6E] pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[#A8A8A8] font-medium">{t.author}, {t.company}</span>
                <span className="text-[#7851A9] font-semibold">{t.role}</span>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

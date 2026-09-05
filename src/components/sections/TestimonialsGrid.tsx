import React from "react";
import { Quote, Star, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { TESTIMONIALS } from "@/data/caseStudies";

export const TestimonialsGrid: React.FC = () => {
  return (
    <section className="w-full bg-[#0A0A0A] text-white py-20 sm:py-28 border-b border-[#2B2B2B] relative overflow-hidden">
      <Container size="wide" className="relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <Badge variant="purple-soft" size="md" className="mb-4">
            <Quote size={14} className="text-[#7851A9] mr-1.5" />
            <span>Kundröster</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight mb-4">
            Vad ledande säljchefer och VD:ar säger om Hard Call Sales
          </h2>
          <p className="text-sm sm:text-base text-[#A8A8A8] max-w-2xl mx-auto">
            Vårt rykte bygger på konkreta resultat, transparent samarbete och högsta möteskvalitet.
          </p>
        </div>

        {/* 6-Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl bg-[#111111]/80 backdrop-blur-md border border-[#2B2B2B] hover:border-[#7851A9]/50 transition-all duration-300 p-7 flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Top rating & category badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  {t.metricImpact && (
                    <span className="text-[11px] font-semibold text-[#9B7BC7] bg-[#7851A9]/15 border border-[#7851A9]/30 px-2.5 py-0.5 rounded-full">
                      {t.metricImpact}
                    </span>
                  )}
                </div>

                {/* Quote Text */}
                <blockquote className="text-sm sm:text-base text-[#EDEDED] leading-relaxed mb-6 italic">
                  ”{t.quote}”
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-white flex items-center gap-1.5">
                    <span>{t.author}</span>
                    <CheckCircle2 size={13} className="text-[#7851A9]" />
                  </div>
                  <div className="text-xs text-[#A8A8A8] mt-0.5">
                    {t.role}, <span className="text-[#EDEDED]">{t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

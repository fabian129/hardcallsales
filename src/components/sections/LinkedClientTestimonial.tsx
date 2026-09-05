import React from "react";
import { Quote, Sparkles, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export const LinkedClientTestimonial: React.FC = () => {
  return (
    <section className="w-full bg-[#FAFAFA] text-[#0F0F0F] py-20 sm:py-28 border-b border-[#E6E6E6] relative">
      <Container size="wide">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="partner" size="md" className="mb-4">
            <Sparkles size={13} className="text-[#7851A9] mr-1" />
            <span>Kundresultat & Verifierat Värde</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F0F0F] mb-4">
            Vad händer när AI möter erfaren säljkraft?
          </h2>
        </div>

        {/* Feature Testimonial Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-[#E6E6E6] p-8 sm:p-14 shadow-xl relative overflow-hidden">
          
          {/* Subtle purple accent edge */}
          <div className="absolute top-0 left-0 bottom-0 w-2 bg-[#7851A9]" />

          <div className="flex flex-col justify-between">
            {/* Quote Icon & Metric */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#7851A9]/10 text-[#7851A9] flex items-center justify-center">
                <Quote size={24} />
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-mono font-bold">
                  +100 nya avtal
                </span>
                <span className="px-3 py-1 rounded-full bg-[#7851A9]/10 border border-[#7851A9]/20 text-[#7851A9] text-xs font-mono font-bold">
                  2x Omsättning
                </span>
              </div>
            </div>

            {/* Quote Text */}
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#0F0F0F] leading-snug tracking-tight mb-8">
              ”Första året vi började jobba med Hard Call Sales och LinkedClient mer än dubblade vi vår omsättning.
              Att kunna skala mötesbokningen utan att anställa och lära upp ett eget SDR-team har varit helt avgörande för vår tillväxtresa.”
            </blockquote>

            {/* Author Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#F0F0F0]">
              <div>
                <div className="text-base font-bold text-[#0F0F0F]">
                  VD & Grundare
                </div>
                <div className="text-xs sm:text-sm text-[#6E6E6E]">
                  Snabbväxande SaaS-bolag i Norden (Meetly-ekosystemet)
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#7851A9]">
                <CheckCircle2 size={16} />
                <span>Verifierat kundcase</span>
              </div>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
};

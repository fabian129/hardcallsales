import React from "react";
import { Zap, ShieldCheck, TrendingUp, Clock, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

const METRICS_ITEMS = [
  {
    value: "+300 %",
    label: "Kapacitetsökning",
    sublabel: "i prospekteringsvolym",
    description:
      "Bearbeta 4x fler kvalificerade beslutsfattare i månaden utan att öka personalstyrkan eller ledningskostnaderna.",
    icon: Zap,
  },
  {
    value: "99.4 %",
    label: "Deliverability",
    sublabel: "Inbox Placement Rate",
    description:
      "Dedikerade domäner, isolerade IP-adresser och automatisk uppvärmning säkerställer att meddelanden når primära inkorgar.",
    icon: ShieldCheck,
  },
  {
    value: "3.8x",
    label: "Genomsnittlig ROI",
    sublabel: "första 12 månaderna",
    description:
      "Drastiskt sänkt kostnad per bokat möte i kombination med högre möteskvalitet skapar snabb finansiell återbetalning.",
    icon: TrendingUp,
  },
  {
    value: "24/7",
    label: "Kontinuerlig analys",
    sublabel: "och signal-mining",
    description:
      "Agenten övervakar företagsnyheter, platsannonser och teknikskiften dygnet runt för optimal timing vid kontakt.",
    icon: Clock,
  },
];

export const LinkedClientMetrics: React.FC = () => {
  return (
    <section className="w-full bg-[#0A0A0A] text-white py-20 sm:py-28 border-b border-[#2B2B2B] relative">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-[#7851A9]/15 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-dot-pattern opacity-15 pointer-events-none" />

      <Container size="wide" className="relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Badge variant="purple-soft" size="md" className="mb-4">
            <Sparkles size={13} className="text-[#7851A9] mr-1" />
            <span>Dokumenterad Prestanda</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Siffrorna bakom AI-motorn
          </h2>
          <p className="text-base sm:text-lg text-[#A8A8A8] leading-relaxed">
            LinkedClient levererar mätbar effektivitet och eliminerar de flaskhalsar som traditionellt bromsar B2B-bolags försäljning.
          </p>
        </div>

        {/* 4 Metrics Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS_ITEMS.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="rounded-3xl bg-[#111111] border border-[#2B2B2B] hover:border-[#7851A9]/60 hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#7851A9]/20 text-[#B89FE0] flex items-center justify-center mb-6">
                    <Icon size={20} />
                  </div>

                  <div className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold text-white tracking-tight mb-2">
                    {item.value}
                  </div>

                  <div className="text-sm font-bold text-white mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-xs font-mono text-[#7851A9] mb-4">
                    {item.sublabel}
                  </div>

                  <p className="text-xs sm:text-sm text-[#A8A8A8] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
};

"use client";

import React, { useState } from "react";
import { Mail, Globe, PhoneCall, X, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

interface MethodologyCard {
  id: string;
  number: string;
  tag: string;
  title: string;
  shortDesc: string;
  icon: React.ReactNode;
  modalDetails: {
    headline: string;
    description: string;
    points: string[];
  };
}

const CARDS: MethodologyCard[] = [
  {
    id: "email",
    number: "01",
    tag: "Prospektering",
    title: "E-postkampanjer",
    shortDesc: "A/B-testade mejlsekvenser med extrem domänsäkerhet och personifierade vinklar som når fram direkt till inkorgen.",
    icon: <Mail className="text-[#7851A9]" size={20} />,
    modalDetails: {
      headline: "Hur vi bygger e-postkampanjer som öppnas och svaras på",
      description:
        "Vi sätter upp dedikerad e-postinfrastruktur (separata domäner, SPF, DKIM, DMARC) så ert huvuddomäns rykte skyddas 100%. Våra copywriters skriver korta, relevanta sekvenser anpassade för er specifika bransch och ICP.",
      points: [
        "100 % GDPR-säkrad och domänisolerad setup",
        "A/B-testning av ämnesrader och pitchvinklar",
        "Realtidsuppföljning av svar och intressesignaler",
        "Automatisk vidarebefordran till telefontekniker vid intresse",
      ],
    },
  },
  {
    id: "linkedin",
    number: "02",
    tag: "Nätverk & AI",
    title: "LinkedIn & LinkedClient",
    shortDesc: "Tillgång till över 100 miljoner beslutsfattare. Vi bygger ert nätverk på autopilot och inleder meningsfulla dialoger.",
    icon: <Globe className="text-[#7851A9]" size={20} />,
    modalDetails: {
      headline: "Bygg ett C-level nätverk samtidigt som du bokar möten",
      description:
        "Med LinkedClient-integrationen värmer vi upp era prospekts med intelligenta touchpoints innan någon lyfter luren. När ett prospekt visar aktivitet kopplas er seniora mötesbokare in sömlöst.",
      points: [
        "Direkt access till 100M+ globala beslutsfattare och 444k i Sverige",
        "Profil-uppvärmning och varumärkesbyggande interaktioner",
        "Smart trigger-avkänning när en lead byter roll eller visar köpsignal",
        "Full integrering mot ert befintliga CRM (HubSpot, Salesforce etc.)",
      ],
    },
  },
  {
    id: "calls",
    number: "03",
    tag: "Säljexpertis",
    title: "B2B Kalla Samtal",
    shortDesc: "Tränade seniora säljare med i snitt över 10 000 timmars erfarenhet som ringer och kvalificerar mot er ICP och budget.",
    icon: <PhoneCall className="text-[#7851A9]" size={20} />,
    modalDetails: {
      headline: "Seniora mötesbokare som faktiskt förstår IT & SaaS",
      description:
        "Vi anlitar inga oerfarna callcenters. Våra mötesbokare har i snitt 10 000 timmars B2B-säljerfarenhet och behärskar komplexa tech-lösningar och C-level invändningshantering.",
      points: [
        "Genomsnittlig show-rate på >85 % på alla bokade möten",
        "Strikta kvalificeringskrav (BANT: Budget, Authority, Need, Timeline)",
        "Möten bokas direkt in i era Account Executives kalendrar",
        "Regelbundna avstämningar och gemensamma kalibreringsmöten",
      ],
    },
  },
];

export const MethodologyModalCards: React.FC = () => {
  const [activeModal, setActiveModal] = useState<MethodologyCard | null>(null);

  return (
    <section className="w-full bg-[#0A0A0A] text-white py-24 sm:py-32 border-b border-[#1C1C1C] relative overflow-hidden">
      <Container size="wide">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
            <div>
              <Reveal delay={0.1} yOffset={20}>
                <span className="text-xs font-mono uppercase tracking-widest text-[#7851A9] block mb-3">
                  SÅ ARBETAR VI
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-tight">
                  Tre discipliner i perfekt synk
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.2} yOffset={20}>
              <p className="text-xs sm:text-sm text-[#8E8E8E] max-w-md">
                Klicka på ett kort för att läsa mer om hur varje kanal integreras i er säljpipeline.
              </p>
            </Reveal>
          </div>

          {/* 3 Frosted Glass Cards with Hover Glow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {CARDS.map((card, idx) => (
              <Reveal key={card.id} delay={0.15 * (idx + 1)} yOffset={25}>
                <div
                  onClick={() => setActiveModal(card)}
                  className="group relative rounded-2xl bg-[#111111] hover:bg-[#141414] border border-white/[0.08] hover:border-[#7851A9]/60 p-8 sm:p-10 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[320px] shadow-lg hover:shadow-[0_0_30px_rgba(120,81,169,0.15)]"
                >
                  <div>
                    {/* Top Row: Tag & Number */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#A8A8A8] px-2.5 py-1 rounded-[4px] bg-white/[0.04] border border-white/5">
                        {card.tag}
                      </span>
                      <span className="text-sm font-mono text-[#6E6E6E] group-hover:text-[#7851A9] transition-colors">
                        {card.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-normal tracking-tight text-white mb-3 group-hover:text-white transition-colors">
                      {card.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-[#8E8E8E] leading-relaxed">
                      {card.shortDesc}
                    </p>
                  </div>

                  {/* Bottom Action Trigger */}
                  <div className="pt-6 border-t border-white/[0.05] flex items-center justify-between text-xs text-[#A8A8A8] group-hover:text-white transition-colors">
                    <span className="font-semibold uppercase tracking-wider text-[11px]">Läs mer</span>
                    <div className="w-7 h-7 rounded-full bg-white/[0.04] group-hover:bg-[#7851A9] text-white flex items-center justify-center transition-colors">
                      <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </Container>

      {/* Modal Dialog */}
      {activeModal && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-label={activeModal.modalDetails.headline}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl bg-[#111111] border border-white/15 p-8 sm:p-12 text-white shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              aria-label="Stäng modal"
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-[#A8A8A8] hover:text-white transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#7851A9] mb-3">
              <span>{activeModal.number}</span>
              <span>•</span>
              <span>{activeModal.tag}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-white mb-4">
              {activeModal.modalDetails.headline}
            </h3>

            <p className="text-sm text-[#A8A8A8] leading-relaxed mb-8">
              {activeModal.modalDetails.description}
            </p>

            {/* Feature Points */}
            <div className="space-y-3 mb-8">
              {activeModal.modalDetails.points.map((pt, pIdx) => (
                <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#EDEDED]">
                  <CheckCircle size={16} className="text-[#7851A9] shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            {/* Action CTA inside modal */}
            <div className="flex items-center justify-end gap-3 pt-6 border-t border-white/10">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setActiveModal(null)}
              >
                Stäng
              </Button>
              <Button
                href="#kontakt"
                variant="primary"
                size="sm"
                hasArrow
                onClick={() => setActiveModal(null)}
              >
                Boka ett möte
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

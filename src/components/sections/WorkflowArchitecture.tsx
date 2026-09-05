import React from "react";
import {
  Database,
  Cpu,
  Send,
  RefreshCw,
  CheckCircle2,
  Share2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

const WORKFLOW_STAGES = [
  {
    step: "01",
    title: "Data Enrichment & Signal Mining",
    kicker: "Datainsamling",
    icon: Database,
    description:
      "Motorn övervakar kontinuerligt 100M+ beslutsfattare och identifierar aktiva köpsignaler som nyckelrekryteringar, teknikskiften, kapitalrundor och expansion.",
    features: [
      "Kontinuerlig skanning av globala register",
      "Datarikning med verifierade direktnummer och e-post",
      "Klassificering mot er Idealkundprofil (ICP)",
    ],
    tech: ["Apollo.io", "Sales Navigator", "Clay", "ZoomInfo"],
  },
  {
    step: "02",
    title: "AI Prompt Engine & Personalisering",
    kicker: "Kontextuell Copy",
    icon: Cpu,
    description:
      "Vår proprietära prompt-motor analyserar varje prospekts publika profil, historik och aktuella affärssituation för att formulera unika och högintressanta meddelanden.",
    features: [
      "Individuell vinkling per kontakt — noll standardmallar",
      "Dynamisk anpassning efter mottagarens roll och bransch",
      "Inbyggd invändningsmatris för snabba relevanta svar",
    ],
    tech: ["LinkedClient LLM", "Prompt Optimizer", "Tone Engine"],
  },
  {
    step: "03",
    title: "Multi-channel Outreach",
    kicker: "Multikanal",
    icon: Send,
    description:
      "Sekvenser orkestreras sömlöst över LinkedIn och e-post vid statistiskt optimala tidpunkter. Avancerad domän- och inbox-uppvärmning säkrar 99.4 % inbox-placering.",
    features: [
      "Synkroniserade touchpoints över LinkedIn & mail",
      "Dedikerad IP-infrastruktur och SPF/DKIM/DMARC",
      "A/B-testning av ämnesrader och timing",
    ],
    tech: ["Smartlead", "Instantly", "Dedicated Proxies", "Warmup"],
  },
  {
    step: "04",
    title: "CRM Auto-Sync & Human SDR Handoff",
    kicker: "Avslut & Möte",
    icon: RefreshCw,
    description:
      "När intresse bekräftas bokas mötet direkt i era säljares kalendrar och synkas mot ert CRM. Vid behov kliver våra seniora mötesbokare in och stänger loopen per telefon.",
    features: [
      "2-vägs synkronisering med HubSpot, Salesforce m.fl.",
      "Seniora SDR:er (10 000+ timmar) säkrar show rate",
      "Komplett samtals- och mötesbrief bifogad",
    ],
    tech: ["HubSpot", "Salesforce", "Google Meet", "Teams"],
  },
];

export const WorkflowArchitecture: React.FC = () => {
  return (
    <section className="w-full bg-[#FAFAFA] text-[#0F0F0F] py-20 sm:py-28 border-b border-[#E6E6E6] relative">
      <Container size="wide">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Badge variant="partner" size="md" className="mb-4">
            <Share2 size={13} className="text-[#7851A9] mr-1" />
            <span>Teknisk Arkitektur</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F0F0F] mb-4">
            Fyra steg från marknadssignal till bokat säljmöte
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E6E] leading-relaxed">
            LinkedClient kombinerar intelligent databerikning, avancerad maskininlärning och erfarna säljares personliga avslut i ett helintegrerat flöde.
          </p>
        </div>

        {/* 4-Stage Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WORKFLOW_STAGES.map((stage) => {
            const Icon = stage.icon;

            return (
              <div
                key={stage.step}
                className="rounded-3xl bg-white border border-[#E6E6E6] hover:border-[#7851A9]/60 hover:shadow-xl transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between relative group"
              >
                <div>
                  {/* Top Bar: Step & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#7851A9]/10 text-[#7851A9] flex items-center justify-center font-bold group-hover:bg-[#7851A9] group-hover:text-white transition-colors">
                      <Icon size={22} />
                    </div>
                    <span className="text-2xl font-mono font-bold text-[#7851A9]">
                      {stage.step}
                    </span>
                  </div>

                  {/* Kicker & Title */}
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7851A9] block mb-1.5">
                    {stage.kicker}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F0F0F] tracking-tight leading-tight mb-3">
                    {stage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#6E6E6E] leading-relaxed mb-6">
                    {stage.description}
                  </p>

                  {/* Features Bullet List */}
                  <ul className="space-y-2 pt-4 border-t border-[#F0F0F0] mb-6">
                    {stage.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-[#2A2A2A]">
                        <CheckCircle2 size={13} className="text-[#7851A9] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="pt-3 border-t border-[#F0F0F0]">
                  <div className="flex flex-wrap gap-1">
                    {stage.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-[#F2F2F2] text-[10px] font-mono text-[#6E6E6E]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
};

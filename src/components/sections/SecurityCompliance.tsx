import React from "react";
import { ShieldCheck, Lock, UserCheck, ShieldAlert, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

const COMPLIANCE_PILLARS = [
  {
    title: "100 % GDPR-efterlevnad",
    kicker: "Dataskydd inom EU",
    icon: ShieldCheck,
    description:
      "All B2B-behandling sker med stöd av berättigat intresse (GDPR art. 6.1 f). Fullständiga rutiner för automatisk opt-out, radering på begäran och säker datalagring inom EU/EES.",
    bulletPoints: [
      "Inbyggd 'one-click' opt-out på alla utskick",
      "Säker datalagring på ISO 27001-certifierade servrar i Europa",
      "Fullständig transparens och registerutdrag vid förfrågan",
    ],
  },
  {
    title: "Human-in-the-Loop Validering",
    kicker: "Kvalitetskontroll",
    icon: UserCheck,
    description:
      "AI gör grovjobbet — erfarna säljstrateger håller i rodret. Alla promptmallar, målgruppsdefinitioner och känsliga dialoger övervakas och styrs av seniora medarbetare.",
    bulletPoints: [
      "Manuell granskning av ICP-listor innan kampanjstart",
      "Säljledare kontrollerar tonläge och budskap",
      "Mänskliga SDR:er tar över samtal vid minsta tveksamhet",
    ],
  },
  {
    title: "Anti-Spam & Domänsäkerhet",
    kicker: "Ryktesskydd",
    icon: ShieldAlert,
    description:
      "Vi skyddar ert primära varumärke och företagsdomän. Genom intelligenta sekundärdomäner, SPF, DKIM, DMARC och skonsam inbox-warmup säkras er leveransbarhet.",
    bulletPoints: [
      "Dedikerad sekundär domäninfrastruktur",
      "Automatiserad gradvis uppvärmning (warmup-protokoll)",
      "Realtidsövervakning av domänrykte och bounce rates",
    ],
  },
  {
    title: "Isolerade Sessioner & Dedikerade IP:er",
    kicker: "Enterprise Säkerhet",
    icon: Lock,
    description:
      "Varje kund tilldelas en isolerad miljö med dedikerade IP-adresser och kryptering i vila och transitering (TLS 1.3). Inga delade konton eller dataläckage.",
    bulletPoints: [
      "OAuth 2.0 & säkra API-tokens mot HubSpot & Salesforce",
      "Dedikerade proxies och isolerade klientinstanser",
      "SOC2-kompatibla säkerhetsrutiner och åtkomstloggar",
    ],
  },
];

export const SecurityCompliance: React.FC = () => {
  return (
    <section className="w-full bg-[#FAFAFA] text-[#0F0F0F] py-20 sm:py-28 border-b border-[#E6E6E6] relative">
      <Container size="wide">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Badge variant="partner" size="md" className="mb-4">
            <ShieldCheck size={13} className="text-[#7851A9] mr-1" />
            <span>Säkerhet & Regelefterlevnad</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F0F0F] mb-4">
            Byggd för enterprise-krav och full GDPR-compliance
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E6E] leading-relaxed">
            Vi kompromissar aldrig med datasäkerhet, domänrykte eller europeisk integritetslagstiftning.
            Här är principerna som skyddar ert varumärke.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {COMPLIANCE_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;

            return (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-[#E6E6E6] hover:border-[#7851A9]/50 hover:shadow-xl transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#7851A9]/10 text-[#7851A9] flex items-center justify-center shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7851A9] block">
                        {pillar.kicker}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#0F0F0F] tracking-tight">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#6E6E6E] leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <ul className="space-y-2.5 pt-4 border-t border-[#F0F0F0]">
                    {pillar.bulletPoints.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs text-[#2A2A2A]">
                        <CheckCircle2 size={13} className="text-[#7851A9] shrink-0 mt-0.5" />
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
};

import React from "react";
import Link from "next/link";
import {
  CalendarCheck,
  Mail,
  PhoneCall,
  Network,
  Target,
  Workflow,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

export const ServicesBento: React.FC = () => {
  return (
    <section
      id="tjanster"
      className="w-full bg-[#F2F2F2] text-[#0F0F0F] py-20 sm:py-28 lg:py-32 border-b border-[#E6E6E6] relative overflow-hidden"
    >
      <Container size="wide">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7851A9] bg-[#7851A9]/10 px-3 py-1 rounded-full border border-[#7851A9]/20">
                Våra tjänster
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#0F0F0F] leading-tight">
              Sex sätt att fylla pipelinen — <br className="hidden sm:inline" />
              utan egen SDR-funktion
            </h2>
          </div>

          <Link
            href="/tjanster"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#7851A9] hover:text-[#5A3984] transition-colors group self-start md:self-auto"
          >
            <span>Läs mer om alla 6 tjänster</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Bento Grid: 2 Rows, 3-Column Layout with Asymmetric Widths */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Row 1, Card 1: Featured Dark Card (Spans 6 cols on lg) */}
          <div className="lg:col-span-6 rounded-2xl bg-[#111111] text-white p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden border border-[#2B2B2B] shadow-lg group hover:border-[#7851A9]/60 hover:-translate-y-1 transition-all duration-300 min-h-[340px]">
            {/* Subtle purple radial glow */}
            <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-[#7851A9]/25 blur-3xl pointer-events-none rounded-full" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-xl bg-white/[0.08] border border-white/15 flex items-center justify-center text-[#B89FE0] group-hover:bg-[#7851A9] group-hover:text-white transition-all shadow-sm">
                  <CalendarCheck size={22} />
                </div>
                <span className="text-xs font-semibold py-1 px-3 rounded-full bg-white/10 text-[#EDEDED] border border-white/10">
                  01 • Huvudtjänst
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                Mötesbokning med beslutsfattare
              </h3>
              <p className="text-sm sm:text-base text-[#A8A8A8] leading-relaxed mb-4">
                Vi tar samtalet, du tar mötet. 10–100 bokade möten per månad, hos rätt beslutsfattare med budget och mandat.
              </p>
              
              <ul className="space-y-1.5 mb-6 text-xs text-[#C8C8C8]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7851A9]" />
                  <span>Seniora mötesbokare med 10 000+ timmars erfarenhet</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7851A9]" />
                  <span>Kvalificering mot era exakta ICP- och BANT-kriterier</span>
                </li>
              </ul>
            </div>

            <Link
              href="/tjanster#motesbokning"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#B89FE0] hover:text-white transition-colors pt-3 border-t border-white/10"
            >
              <span>Hur mötesbokningen fungerar</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Row 1, Card 2: Mejl- och LinkedIn-kampanjer (Spans 3 cols on lg) */}
          <div className="lg:col-span-3 rounded-2xl bg-white text-[#0F0F0F] p-6 sm:p-7 flex flex-col justify-between border border-[#E6E6E6] shadow-sm group hover:border-[#7851A9]/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 min-h-[340px]">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#F0EBF7] flex items-center justify-center text-[#7851A9] group-hover:scale-105 transition-transform">
                  <Mail size={20} />
                </div>
                <span className="text-xs font-semibold text-[#7851A9]">
                  02
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#0F0F0F] mb-2">
                Mejl- & LinkedIn-kampanjer
              </h3>
              <p className="text-xs sm:text-sm text-[#6E6E6E] leading-relaxed mb-3">
                Sekvenser som når 100+ miljoner beslutsfattare med hög precision och domänsäkerhet.
              </p>

              <div className="space-y-1 text-[11px] text-[#7A7A7A]">
                <p>• A/B-testad målgruppscopy</p>
                <p>• SPF, DKIM & DMARC-säkring</p>
              </div>
            </div>

            <Link
              href="/tjanster#kampanjer"
              className="inline-flex items-center justify-between text-xs font-semibold text-[#7851A9] pt-3 mt-3 border-t border-[#F0F0F0]"
            >
              <span>Se upplägg</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Row 1, Card 3: Telefonuppföljning (Spans 3 cols on lg) */}
          <div className="lg:col-span-3 rounded-2xl bg-white text-[#0F0F0F] p-6 sm:p-7 flex flex-col justify-between border border-[#E6E6E6] shadow-sm group hover:border-[#7851A9]/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 min-h-[340px]">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#F0EBF7] flex items-center justify-center text-[#7851A9] group-hover:scale-105 transition-transform">
                  <PhoneCall size={20} />
                </div>
                <span className="text-xs font-semibold text-[#7851A9]">
                  03
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#0F0F0F] mb-2">
                Telefonuppföljning
              </h3>
              <p className="text-xs sm:text-sm text-[#6E6E6E] leading-relaxed mb-3">
                Säljstöd som stänger loopen efter kampanjen och ringer på varma köpsignaler.
              </p>

              <div className="space-y-1 text-[11px] text-[#7A7A7A]">
                <p>• Snabb respons på klick & öppningar</p>
                <p>• Minskar lead-bortfall med upp till 60 %</p>
              </div>
            </div>

            <Link
              href="/tjanster#telefon"
              className="inline-flex items-center justify-between text-xs font-semibold text-[#7851A9] pt-3 mt-3 border-t border-[#F0F0F0]"
            >
              <span>Se upplägg</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Row 2, Card 4: Nätverksbyggande (Spans 3 cols on lg) */}
          <div className="lg:col-span-3 rounded-2xl bg-white text-[#0F0F0F] p-6 sm:p-7 flex flex-col justify-between border border-[#E6E6E6] shadow-sm group hover:border-[#7851A9]/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 min-h-[340px]">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#F0EBF7] flex items-center justify-center text-[#7851A9] group-hover:scale-105 transition-transform">
                  <Network size={20} />
                </div>
                <span className="text-xs font-semibold text-[#7851A9]">
                  04
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#0F0F0F] mb-2">
                Nätverksbyggande
              </h3>
              <p className="text-xs sm:text-sm text-[#6E6E6E] leading-relaxed mb-3">
                Prospektering och relationer före pitchen. Vårdar er målgrupp på autopilot.
              </p>

              <div className="space-y-1 text-[11px] text-[#7A7A7A]">
                <p>• Kontinuerligt inflöde av beslutsfattare</p>
                <p>• Full insyn i kontaktlistor</p>
              </div>
            </div>

            <Link
              href="/tjanster#natverk"
              className="inline-flex items-center justify-between text-xs font-semibold text-[#7851A9] pt-3 mt-3 border-t border-[#F0F0F0]"
            >
              <span>Se upplägg</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Row 2, Card 5: Featured Purple Stat Card (Spans 6 cols on lg) */}
          <div className="lg:col-span-6 rounded-2xl bg-[#7851A9] text-white p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden shadow-[0_0_30px_rgba(120,81,169,0.35)] group hover:bg-[#835cb5] hover:-translate-y-1 transition-all duration-300 min-h-[340px]">
            {/* Background Decorative Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.08] rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between mb-6">
              <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-sm">
                <Target size={22} />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full bg-white text-[#7851A9] shadow-sm">
                05 • Pilotmodellen
              </span>
            </div>

            <div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                  10–100
                </span>
                <span className="text-lg sm:text-xl font-semibold opacity-95">
                  möten per månad
                </span>
              </div>
              <p className="text-sm sm:text-base text-white/95 leading-relaxed mb-4 max-w-lg">
                Pilotmodellen: sex steg, tre månaders test. Garanterade möten, snabb start på 14 dagar och 0 kr fast kostnad i piloten. Du ser det faktiska resultatet innan du binder dig.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6 text-xs text-white/90">
                <span className="bg-white/15 px-2.5 py-1 rounded-full">✓ Snabb start (14 dagar)</span>
                <span className="bg-white/15 px-2.5 py-1 rounded-full">✓ Ingen bindningstid</span>
                <span className="bg-white/15 px-2.5 py-1 rounded-full">✓ Garanterat mötesflöde</span>
              </div>

              <Link
                href="/boka-mote"
                className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#0A0A0A] hover:bg-black py-2.5 px-5 rounded-full shadow-lg transition-all"
              >
                <span>Starta en 3-månaders pilot</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Row 2, Card 6: AI-driven segmentering (Spans 3 cols on lg) */}
          <div className="lg:col-span-3 rounded-2xl bg-white text-[#0F0F0F] p-6 sm:p-7 flex flex-col justify-between border border-[#E6E6E6] shadow-sm group hover:border-[#7851A9]/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 min-h-[340px]">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#F0EBF7] flex items-center justify-center text-[#7851A9] group-hover:scale-105 transition-transform">
                  <Workflow size={20} />
                </div>
                <span className="text-xs font-semibold text-[#7851A9]">
                  06
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#0F0F0F] mb-2">
                AI-driven segmentering
              </h3>
              <p className="text-xs sm:text-sm text-[#6E6E6E] leading-relaxed mb-3">
                Målgrupper som bygger sig själva via köpsignaler, plus full CRM-integrering.
              </p>

              <div className="space-y-1 text-[11px] text-[#7A7A7A]">
                <p>• Köpsignaler & teknikskiften</p>
                <p>• HubSpot, Salesforce, Pipedrive</p>
              </div>
            </div>

            <Link
              href="/tjanster#segmentering"
              className="inline-flex items-center justify-between text-xs font-semibold text-[#7851A9] pt-3 mt-3 border-t border-[#F0F0F0]"
            >
              <span>Se upplägg</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>

        </div>

      </Container>
    </section>
  );
};

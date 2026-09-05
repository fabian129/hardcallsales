import React from "react";
import Link from "next/link";
import { Sparkles, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const ServicesHero: React.FC = () => {
  return (
    <section className="relative w-full pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden bg-[#0A0A0A] text-white border-b border-[#2B2B2B]">
      <Container size="wide" className="relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Brödsmulor" className="flex items-center gap-2 text-xs sm:text-sm text-[#A8A8A8] mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Startsida
          </Link>
          <span className="text-[#6E6E6E]">/</span>
          <span className="text-[#B89FE0] font-medium">Tjänster</span>
        </nav>

        {/* Hero Content */}
        <div className="max-w-4xl">
          {/* Eyebrow badge */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
            <Badge variant="purple-soft" size="md">
              <Sparkles size={13} className="text-[#7851A9] mr-1" />
              <span>Våra Säljtjänster</span>
            </Badge>
            <Badge variant="glass" size="md">
              <Zap size={13} className="text-[#B89FE0] mr-1" />
              <span>End-to-End B2B Säljexekvering</span>
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6">
            Sex sätt vi fyller er pipeline med{" "}
            <span className="text-[#7851A9] drop-shadow-[0_0_25px_rgba(120,81,169,0.35)]">
              kvalificerade möten
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-[#A8A8A8] font-normal leading-relaxed mb-10 max-w-3xl">
            Från AI-driven målgruppsanalys och LinkedIn-sekvenser till kalla samtal och kalenderbokningar.
            Vi hanterar hela prospekterings- och mötesbokningskedjan så era säljare kan fokusera på att stänga affärer.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
            <Button
              href="/boka-mote"
              variant="primary"
              size="lg"
              hasArrow
            >
              Boka strategisamtal
            </Button>
            <Button
              href="#jamforelse"
              variant="secondary"
              size="lg"
            >
              Jämför In-house vs HCS
            </Button>
          </div>

          {/* Key Stat Badges Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-white/10">
            <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="text-xl sm:text-2xl font-bold font-mono text-white mb-1">
                10–100
              </div>
              <div className="text-xs text-[#A8A8A8] font-medium leading-tight">
                Möten per månad i piloten
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="text-xl sm:text-2xl font-bold font-mono text-white mb-1">
                100M+
              </div>
              <div className="text-xs text-[#A8A8A8] font-medium leading-tight">
                Beslutsfattare i global databas
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="text-xl sm:text-2xl font-bold font-mono text-white mb-1">
                10 000+
              </div>
              <div className="text-xs text-[#A8A8A8] font-medium leading-tight">
                Timmars erfarenhet per säljare
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="text-xl sm:text-2xl font-bold font-mono text-[#B89FE0] mb-1">
                0 kr
              </div>
              <div className="text-xs text-[#A8A8A8] font-medium leading-tight">
                Fast anställnings- & rekryteringsrisk
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

import React from "react";
import Link from "next/link";
import {
  Bot,
  BadgeCheck,
  Zap,
  ShieldCheck,
  TrendingUp,
  Cpu,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const LinkedClientHero: React.FC = () => {
  return (
    <section className="relative w-full pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden bg-[#0A0A0A] text-white border-b border-[#2B2B2B]">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#7851A9]/20 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-[#7851A9]/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />

      <Container size="wide" className="relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Brödsmulor" className="flex items-center gap-2 text-xs sm:text-sm text-[#A8A8A8] mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Startsida
          </Link>
          <span className="text-[#6E6E6E]">/</span>
          <span className="text-[#B89FE0] font-medium">LinkedClient AI</span>
        </nav>

        {/* Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading & Value Proposition (7 cols) */}
          <div className="lg:col-span-7">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <Badge variant="partner" size="md" className="gap-2 font-semibold">
                <Bot size={15} className="text-[#7851A9]" />
                <span>PROPRIETÄR AI-SÄLJAGENT</span>
              </Badge>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7851A9]/15 border border-[#7851A9]/30 text-xs font-semibold text-[#B89FE0]">
                <BadgeCheck size={14} className="text-[#7851A9]" />
                <span>Certifierad Partner</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.10] mb-6">
              LinkedClient — Er autonoma{" "}
              <span className="text-[#7851A9] drop-shadow-[0_0_30px_rgba(120,81,169,0.4)]">
                AI-säljagent
              </span>{" "}
              för B2B
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-[#A8A8A8] font-normal leading-relaxed mb-8 max-w-2xl">
              Världens första AI-säljagent som kombinerar autonom AI-prospektering och hyper-personaliserad kontakt med seniora säljares telefonavslut.
              Fyll kalendern dygnet runt — utan att anställa fler SDR:er.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <Button
                href="/boka-mote?service=linkedclient"
                variant="primary"
                size="lg"
                hasArrow
              >
                Boka en live-demo
              </Button>
              <Button
                href="#simulator"
                variant="secondary"
                size="lg"
              >
                Se interaktiv simulering
              </Button>
            </div>

            {/* Feature Highlights Pill Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/10 text-xs text-[#EDEDED]">
              <span className="flex items-center gap-1.5">
                <Zap size={14} className="text-[#7851A9]" />
                Multikanal (LinkedIn + E-post)
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-[#7851A9]" />
                GDPR & Human-in-the-Loop
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5">
                <TrendingUp size={14} className="text-[#7851A9]" />
                Realtids CRM-synk
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Tech Architecture Preview Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#111111] border border-[#2B2B2B] p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-semibold text-white">
                    LinkedClient Engine v2.4
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#B89FE0] bg-[#7851A9]/20 px-2 py-0.5 rounded">
                  Status: Operativ
                </span>
              </div>

              {/* Real-time Telemetry Stats */}
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="flex items-center justify-between text-xs text-[#A8A8A8] mb-1">
                    <span>Målgruppspool (Global ICP)</span>
                    <span className="font-mono text-white font-bold">100 000 000+</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#7851A9] rounded-full w-[88%]" />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="flex items-center justify-between text-xs text-[#A8A8A8] mb-1">
                    <span>Leveransgrad (Deliverability)</span>
                    <span className="font-mono text-emerald-400 font-bold">99.4 %</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 rounded-full w-[99.4%]" />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="flex items-center justify-between text-xs text-[#A8A8A8] mb-1">
                    <span>Svarskonvertering vs Traditionell</span>
                    <span className="font-mono text-[#B89FE0] font-bold">+380 %</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#7851A9] rounded-full w-[78%]" />
                  </div>
                </div>
              </div>

              {/* Bottom live event ticker */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-[#6E6E6E] font-mono">
                <span className="flex items-center gap-1">
                  <Cpu size={12} className="text-[#7851A9]" />
                  24/7 Signal Mining aktiv
                </span>
                <span className="text-[#A8A8A8]">Stockholm & Malta</span>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

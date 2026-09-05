"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, HelpCircle, ArrowRight, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FAQS } from "@/data/faq";

interface FaqAccordionProps {
  title?: string;
  subtitle?: string;
  defaultCategory?: string;
  className?: string;
  theme?: "dark" | "light";
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  title = "Vanliga frågor om våra säljtjänster & leverans",
  subtitle = "Här besvarar vi de vanligaste funderingarna kring hur en pilot fungerar, hur möten kvalificeras och vad som händer vid no-shows.",
  defaultCategory = "all",
  className = "",
  theme = "dark",
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>(defaultCategory);

  const categories = [
    { id: "all", label: "Alla frågor" },
    { id: "Pilotmodellen", label: "Pilotmodellen" },
    { id: "Tjänster", label: "Tjänster" },
    { id: "Teknik & Integration", label: "Teknik & Integration" },
    { id: "Allmänt", label: "Allmänt & Pris" },
  ];

  const filteredFaqs =
    activeCategory === "all"
      ? FAQS
      : FAQS.filter((f) => f.category === activeCategory);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const isDark = theme === "dark";

  return (
    <section
      id="faq"
      className={`w-full py-20 sm:py-28 border-b border-[#2B2B2B] scroll-mt-20 relative ${
        isDark ? "bg-[#0A0A0A] text-white" : "bg-[#FAFAFA] text-[#0F0F0F]"
      } ${className}`}
    >
      <Container size="wide">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Badge
            variant={isDark ? "purple-soft" : "partner"}
            size="md"
            className="mb-4"
          >
            <HelpCircle size={13} className="text-[#7851A9] mr-1" />
            <span>FAQ & Svar</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            {title}
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isDark ? "text-[#A8A8A8]" : "text-[#6E6E6E]"
            }`}
          >
            {subtitle}
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#7851A9] text-white shadow-[0_0_15px_rgba(120,81,169,0.35)]"
                  : isDark
                  ? "bg-white/5 text-[#A8A8A8] hover:text-white hover:bg-white/10 border border-white/10"
                  : "bg-white text-[#6E6E6E] hover:text-[#0F0F0F] hover:bg-[#F2F2F2] border border-[#E6E6E6]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion Grid */}
        <div className="space-y-4 max-w-4xl">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-200 overflow-hidden border ${
                  isDark
                    ? isOpen
                      ? "bg-[#111111] border-[#7851A9]/50 shadow-lg"
                      : "bg-[#111111]/70 border-[#2B2B2B] hover:border-white/20"
                    : isOpen
                    ? "bg-white border-[#7851A9]/50 shadow-md"
                    : "bg-white border-[#E6E6E6] hover:border-[#D0D0D0]"
                }`}
              >
                {/* Question Trigger Button */}
                <button
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#7851A9]">
                      0{idx + 1}
                    </span>
                    <span className="text-base sm:text-lg font-semibold tracking-tight">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#7851A9] text-white rotate-180"
                        : isDark
                        ? "bg-white/10 text-white"
                        : "bg-[#F2F2F2] text-[#0F0F0F]"
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div
                    className={`px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base leading-relaxed border-t ${
                      isDark
                        ? "text-[#A8A8A8] border-white/5"
                        : "text-[#6E6E6E] border-[#F2F2F2]"
                    }`}
                  >
                    <p>{faq.answer}</p>
                    {faq.category && (
                      <span className="inline-block mt-3 text-[11px] font-mono text-[#7851A9] uppercase tracking-wider">
                        Kategori: {faq.category}
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Support Card */}
        <div
          className={`mt-12 p-6 rounded-2xl max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 border ${
            isDark
              ? "bg-white/[0.02] border-white/10 text-[#A8A8A8]"
              : "bg-white border-[#E6E6E6] text-[#6E6E6E]"
          }`}
        >
          <div className="flex items-center gap-3">
            <MessageSquare size={20} className="text-[#7851A9] shrink-0" />
            <div className="text-xs sm:text-sm">
              Hittade du inte svaret du letade efter? Vi svarar direkt i vårt uppstartssamtal.
            </div>
          </div>
          <Link
            href="/boka-mote"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#7851A9] hover:underline shrink-0"
          >
            <span>Ställ en fråga i bokningen</span>
            <ArrowRight size={14} />
          </Link>
        </div>

      </Container>
    </section>
  );
};

"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  size: "sm" | "md" | "lg" | "xl";
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Elinor Lind",
    role: "Senior Mötesbokare",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    size: "sm",
  },
  {
    id: 2,
    name: "Marcus Berg",
    role: "Account Executive",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    size: "md",
  },
  {
    id: 3,
    name: "Sara Ekström",
    role: "Head of Campaign Delivery",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    size: "lg",
  },
  {
    id: 4,
    name: "Fredrik Söderqvist",
    role: "Grundare & Säljansvarig",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    size: "xl",
  },
  {
    id: 5,
    name: "Alexander Holm",
    role: "Senior B2B Specialist",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    size: "lg",
  },
  {
    id: 6,
    name: "Sofia Nilsson",
    role: "Data & Prospektering",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    size: "md",
  },
  {
    id: 7,
    name: "Viktor Dahl",
    role: "Outreach & AI Specialist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    size: "sm",
  },
];

export const TeamCirclesSection: React.FC = () => {
  const [activeMember, setActiveMember] = useState<TeamMember>(TEAM_MEMBERS[3]); // Default to center

  return (
    <section id="team" className="w-full bg-[#FFFFFF] text-[#0F0F0F] py-28 sm:py-36 border-b border-[#E6E6E6] relative overflow-hidden scroll-mt-20">
      
      {/* Subtle architectural vertical grid lines */}
      <div className="absolute inset-0 pointer-events-none max-w-7xl mx-auto grid grid-cols-6 border-x border-black/[0.03]">
        <div className="border-r border-black/[0.03] h-full" />
        <div className="border-r border-black/[0.03] h-full" />
        <div className="border-r border-black/[0.03] h-full" />
        <div className="border-r border-black/[0.03] h-full" />
        <div className="border-r border-black/[0.03] h-full" />
      </div>

      <Container size="wide" className="relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Header */}
          <Reveal delay={0.1} yOffset={20}>
            <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-bold text-[#0F0F0F] tracking-tight leading-[1.15] mb-5 font-sans">
              Människorna bakom<br />varje bokat möte
            </h2>
            <p className="text-xs sm:text-[13px] font-medium tracking-widest text-[#777777] uppercase max-w-xl mx-auto leading-relaxed mb-20 sm:mb-24 font-sans">
              VÅRT ARBETE STYRS AV EN ENKEL PRINCIP: RÄTT PERSON<br className="hidden sm:inline" /> SKA MÖTA RÄTT PERSON, VID RÄTT TILLFÄLLE.
            </p>
          </Reveal>

          {/* Symmetrical 7 Circles Row */}
          <Reveal delay={0.2} yOffset={25}>
            <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-10 mb-8 overflow-x-auto py-4 px-2">
              {TEAM_MEMBERS.map((member) => {
                const isSelected = activeMember.id === member.id;
                
                // Scale classes depending on position
                let dimClasses = "w-12 h-12 sm:w-14 sm:h-14"; // sm
                if (member.size === "md") dimClasses = "w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20";
                if (member.size === "lg") dimClasses = "w-18 h-18 sm:w-24 sm:h-24 md:w-28 md:h-28";
                if (member.size === "xl") dimClasses = "w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 shadow-2xl";

                return (
                  <button
                    key={member.id}
                    onClick={() => setActiveMember(member)}
                    onMouseEnter={() => setActiveMember(member)}
                    className={`rounded-full overflow-hidden shrink-0 transition-all duration-300 relative border cursor-pointer ${
                      isSelected
                        ? "border-[#0F0F0F] ring-4 ring-black/5 scale-105"
                        : "border-transparent opacity-85 hover:opacity-100 hover:scale-105"
                    } ${dimClasses}`}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale brightness-95 contrast-110"
                    />
                  </button>
                );
              })}
            </div>

            {/* Active Person Info under the Center */}
            <div className="flex flex-col items-center justify-center min-h-[70px]">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F0F0F] tracking-tight mb-1 font-sans">
                {activeMember.name}
              </h3>
              <p className="text-xs sm:text-[13px] font-medium tracking-widest text-[#777777] uppercase font-sans">
                {activeMember.role}
              </p>
            </div>
          </Reveal>

        </div>
      </Container>
    </section>
  );
};

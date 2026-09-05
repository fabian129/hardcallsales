import React from "react";
import { Container } from "@/components/ui/Container";
import { Hexagon, Plus } from "lucide-react";

export const LogoWall: React.FC = () => {
  return (
    <section id="logovagg" className="w-full bg-[#FAFAFA] text-[#0F0F0F] py-16 sm:py-24 border-b border-[#E6E6E6]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-3 max-w-sm">
            <p className="text-base sm:text-lg leading-snug">
              <span className="font-bold text-[#0F0F0F] text-xl sm:text-2xl mr-1.5">13</span>
              <span className="text-[#6E6E6E]">kundbolag inom IT och SaaS litar på oss för sin pipeline</span>
            </p>
          </div>

          {/* Right Grid Matrix matching Pen Screenshot */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border-t border-l border-[#E6E6E6]">
              
              {/* Row 1 - Offset with 2 empty spaces on desktop */}
              <div className="hidden md:block col-span-2 border-r border-b border-[#E6E6E6] bg-transparent" />
              <div className="h-28 flex items-center justify-center font-bold tracking-tight text-lg text-[#333333] border-r border-b border-[#E6E6E6] bg-white">
                AVEVA
              </div>
              <div className="h-28 flex items-center justify-center font-bold tracking-tight text-lg text-[#333333] border-r border-b border-[#E6E6E6] bg-white">
                Meetly
              </div>
              <div className="h-28 flex items-center justify-center font-bold tracking-tight text-lg text-[#333333] border-r border-b border-[#E6E6E6] bg-white">
                Wall to Wall
              </div>

              {/* Row 2 - 5 Logo Cells */}
              {[1, 2, 3, 4, 5].map((idx) => (
                <div key={`r2-${idx}`} className="h-28 flex items-center justify-center gap-2 text-xs text-[#A8A8A8] border-r border-b border-[#E6E6E6] bg-white">
                  <Hexagon size={16} className="text-[#C2C6C2]" />
                  <span>Kundlogotyp</span>
                </div>
              ))}

              {/* Row 3 - 3 Logo Cells + Cluster on Right */}
              {[1, 2, 3].map((idx) => (
                <div key={`r3-${idx}`} className="h-28 flex items-center justify-center gap-2 text-xs text-[#A8A8A8] border-r border-b border-[#E6E6E6] bg-white">
                  <Hexagon size={16} className="text-[#C2C6C2]" />
                  <span>Kundlogotyp</span>
                </div>
              ))}

              {/* Cluster Box on Right */}
              <div className="col-span-2 h-28 flex flex-col items-center justify-center gap-2 border-r border-b border-[#E6E6E6] bg-white px-4">
                <div className="flex items-center -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-[#D0D0D0] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Kund" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-[#C0C0C0] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Kund" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-[#B0B0B0] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80" alt="Kund" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-[#111111] flex items-center justify-center text-[#7851A9]">
                    <Plus size={14} />
                  </div>
                </div>
                <span className="text-[11px] text-[#888888] font-medium">Våra kunder & partners</span>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

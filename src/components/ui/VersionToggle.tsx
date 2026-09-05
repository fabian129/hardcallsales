"use client";

import React from "react";
import { Sparkles, Layers } from "lucide-react";

export interface VersionToggleProps {
  version: 1 | 2;
  onSelectVersion: (v: 1 | 2) => void;
}

export const VersionToggle: React.FC<VersionToggleProps> = ({ version, onSelectVersion }) => {
  return (
    <aside aria-label="Version Switcher" className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col items-center gap-1 p-1.5 rounded-l-2xl rounded-r-none bg-[#111111]/95 backdrop-blur-xl border-y border-l border-white/20 border-r-0 shadow-2xl text-xs select-none">
        <div className="flex items-center justify-center py-1 text-[10px] font-mono uppercase text-[#A8A8A8]" title="Välj vy">
          <Layers size={13} className="text-[#7851A9]" />
        </div>

        <button
          onClick={() => onSelectVersion(1)}
          className={`w-9 h-8 rounded-xl flex items-center justify-center text-[11px] font-bold transition-all cursor-pointer ${
            version === 1
              ? "bg-white text-black shadow-sm"
              : "text-[#A8A8A8] hover:text-white hover:bg-white/10"
          }`}
          title="V1: Editorial layout"
        >
          V1
        </button>

        <button
          onClick={() => onSelectVersion(2)}
          className={`w-9 h-8 rounded-xl flex items-center justify-center text-[11px] font-bold transition-all cursor-pointer ${
            version === 2
              ? "bg-[#7851A9] text-white shadow-sm"
              : "text-[#A8A8A8] hover:text-white hover:bg-white/10"
          }`}
          title="V2: Centrerad layout"
        >
          V2
        </button>
      </div>
    </aside>
  );
};

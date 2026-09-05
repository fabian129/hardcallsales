"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowRight, Phone, Mail } from "lucide-react";
import { MAIN_NAV_ITEMS, PRIMARY_CTA, COMPANY_INFO } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-between bg-[#0A0A0A]/95 backdrop-blur-2xl border-b border-white/10 animate-in fade-in duration-200">
      {/* Top Bar with Brand and Close Button */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#7851A9] flex items-center justify-center font-bold text-white text-base shadow-sm">
            H
          </div>
          <span className="font-semibold text-lg tracking-tight text-white">
            Hard Call <span className="text-[#7851A9]">Sales</span>
          </span>
        </Link>
        <button
          onClick={onClose}
          aria-label="Stäng meny"
          className="w-10 h-10 rounded-full flex items-center justify-center text-[#A8A8A8] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#6E6E6E] mb-2">
          Navigering
        </p>
        <Link
          href="/"
          onClick={onClose}
          className={cn(
            "flex items-center justify-between py-3.5 px-4 rounded-xl text-lg font-medium transition-colors",
            pathname === "/"
              ? "bg-[#7851A9]/15 text-white border border-[#7851A9]/30"
              : "text-[#EDEDED] hover:bg-white/5 hover:text-white"
          )}
        >
          <span>Startsida</span>
          <ArrowRight size={16} className="text-[#6E6E6E]" />
        </Link>
        {MAIN_NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center justify-between py-3.5 px-4 rounded-xl text-lg font-medium transition-colors",
                isActive
                  ? "bg-[#7851A9]/15 text-white border border-[#7851A9]/30"
                  : "text-[#EDEDED] hover:bg-white/5 hover:text-white"
              )}
            >
              <div className="flex items-center gap-2.5">
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-[10px] uppercase font-bold py-0.5 px-2 bg-[#7851A9] text-white rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>
              <ArrowRight
                size={16}
                className={isActive ? "text-[#7851A9]" : "text-[#6E6E6E]"}
              />
            </Link>
          );
        })}
      </div>

      {/* Mobile CTA and Quick Contacts */}
      <div className="p-6 border-t border-white/10 bg-[#111111]/80 flex flex-col gap-4">
        <Button
          href={PRIMARY_CTA.href}
          size="lg"
          variant="primary"
          hasArrow
          fullWidth
          onClick={onClose}
        >
          {PRIMARY_CTA.label}
        </Button>

        <div className="flex items-center justify-around pt-2 text-xs text-[#A8A8A8]">
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone size={13} className="text-[#7851A9]" />
            <span>{COMPANY_INFO.phone}</span>
          </a>
          <span className="text-[#2B2B2B]">|</span>
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail size={13} className="text-[#7851A9]" />
            <span>{COMPANY_INFO.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

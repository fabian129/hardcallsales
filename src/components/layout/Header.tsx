"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { MAIN_NAV_ITEMS, PRIMARY_CTA } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
          isScrolled || pathname === "/ledning"
            ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3.5 sm:py-4"
            : "bg-transparent border-b border-transparent py-5 sm:py-6"
        )}
      >
        <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-16 flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7851A9] rounded-lg shrink-0"
          >
            {/* Authentic Globe + Headset Symbol */}
            <img
              src="/images/logo/hcs-symbol.png"
              alt="Hard Call Sales"
              className="w-[32px] h-[32px] object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity"
            />
            {/* Authentic Wordmark */}
            <img
              src="/images/logo/hcs-wordmark.png"
              alt="Hard Call Sales Group"
              className="h-[19px] w-auto object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity hidden sm:block"
            />
          </Link>

          {/* Desktop Minimalist Navigation with vertical dividers */}
          <nav
            aria-label="Huvudnavigering"
            className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-semibold uppercase tracking-wider text-[#A8A8A8]"
          >
            <Link
              href="/"
              className={cn(
                "transition-colors duration-200",
                pathname === "/" ? "text-white" : "hover:text-white"
              )}
            >
              Start
            </Link>

            <span className="text-white/15 select-none font-normal">|</span>

            <Link
              href="/linkedclient"
              className={cn(
                "transition-colors duration-200 flex items-center gap-1.5",
                pathname === "/linkedclient" ? "text-white" : "hover:text-white"
              )}
            >
              <span>LinkedClient</span>
              <span className="text-[9px] uppercase font-bold py-0.5 px-1.5 bg-[#7851A9] text-white rounded-[4px] leading-tight">
                AI
              </span>
            </Link>

            <span className="text-white/15 select-none font-normal">|</span>

            <Link
              href="/case"
              className={cn(
                "transition-colors duration-200",
                pathname === "/case" || pathname?.startsWith("/case/") ? "text-white" : "hover:text-white"
              )}
            >
              Case
            </Link>

            <span className="text-white/15 select-none font-normal">|</span>

            <Link
              href="/ledning"
              className={cn(
                "transition-colors duration-200",
                pathname === "/ledning" || pathname?.startsWith("/ledning/") ? "text-white" : "hover:text-white"
              )}
            >
              Ledning
            </Link>

            <span className="text-white/15 select-none font-normal">|</span>

            <Link
              href="/jobba-hos-oss"
              className={cn(
                "transition-colors duration-200",
                pathname === "/jobba-hos-oss" ? "text-white" : "hover:text-white"
              )}
            >
              Jobba hos oss
            </Link>
          </nav>

          {/* Desktop CTAs & Mobile Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="hidden sm:inline-flex items-center gap-2">
              <Button
                href="/linkedclient"
                variant="outline"
                size="sm"
                className="hidden md:inline-flex"
              >
                LinkedClient
              </Button>
              <Button
                href={PRIMARY_CTA.href}
                variant="primary"
                size="sm"
                hasArrow
              >
                {PRIMARY_CTA.label}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Öppna navigationsmeny"
              className="lg:hidden w-9 h-9 rounded-[6px] flex items-center justify-center text-[#EDEDED] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};

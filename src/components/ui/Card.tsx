import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "dark" | "glass" | "paper" | "purple" | "subtle";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  radius?: "sm" | "md" | "lg" | "xl";
  hoverEffect?: boolean;
  glow?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = "dark",
  padding = "md",
  radius = "md",
  hoverEffect = true,
  glow = false,
  className = "",
  children,
  ...props
}) => {
  const baseStyles = "relative overflow-hidden transition-all duration-300";

  const variantStyles = {
    dark: "bg-[#111111] border border-[#2B2B2B] text-white",
    glass:
      "bg-white/[0.04] backdrop-blur-xl border border-white/10 text-white shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]",
    paper: "bg-white border border-[#E6E6E6] text-[#0F0F0F] shadow-sm",
    purple:
      "bg-[#7851A9] border border-[#8F6BC1]/40 text-white shadow-[0_0_30px_rgba(120,81,169,0.3)]",
    subtle: "bg-[#1A1A1A] border border-[#2B2B2B] text-white",
  };

  const paddingStyles = {
    none: "p-0",
    sm: "p-4 sm:p-5",
    md: "p-6 sm:p-7",
    lg: "p-8 sm:p-10",
    xl: "p-10 sm:p-14",
  };

  const radiusStyles = {
    sm: "rounded-xl",
    md: "rounded-2xl",
    lg: "rounded-3xl",
    xl: "rounded-[32px]",
  };

  const hoverStyles = hoverEffect
    ? variant === "paper"
      ? "hover:border-[#7851A9]/40 hover:shadow-md hover:-translate-y-1"
      : variant === "purple"
      ? "hover:bg-[#835cb5] hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(120,81,169,0.5)]"
      : "hover:border-[#7851A9]/60 hover:bg-[#161616] hover:-translate-y-1 hover:shadow-[0_12px_30px_-10px_rgba(120,81,169,0.25)]"
    : "";

  const glowStyles = glow ? "glow-purple" : "";

  return (
    <div
      className={cn(
        baseStyles,
        variantStyles[variant],
        paddingStyles[padding],
        radiusStyles[radius],
        hoverStyles,
        glowStyles,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

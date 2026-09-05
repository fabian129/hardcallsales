import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "purple" | "purple-soft" | "partner" | "glass" | "dark" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  dot?: boolean;
  pulseDot?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "glass",
  size = "md",
  icon,
  dot = false,
  pulseDot = false,
  className = "",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center font-medium tracking-tight rounded-full transition-colors select-none";

  const sizeStyles = {
    sm: "text-[11px] py-1 px-2.5 gap-1.5",
    md: "text-xs py-1.5 px-3.5 gap-2",
    lg: "text-sm py-2 px-4 gap-2.5",
  };

  const variantStyles = {
    purple: "bg-[#7851A9] text-white shadow-sm",
    "purple-soft":
      "bg-[#7851A9]/15 text-[#B89FE0] border border-[#7851A9]/30",
    partner:
      "bg-[#F0EBF7] text-[#53377A] border border-[#E0D4ED] font-semibold",
    glass:
      "bg-white/[0.08] backdrop-blur-md text-[#EDEDED] border border-white/20",
    dark: "bg-[#1A1A1A] text-[#A8A8A8] border border-[#2B2B2B]",
    outline: "bg-transparent text-white border border-[#2B2B2B]",
  };

  return (
    <span
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full",
            pulseDot ? "animate-pulse" : "",
            variant === "partner"
              ? "bg-[#53377A]"
              : variant === "purple"
              ? "bg-white"
              : "bg-[#9B7BC7]"
          )}
        />
      )}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { openCalModal, DEFAULT_CAL_LINK } from "@/components/cal/CalProvider";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "paper" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  calLink?: string;
  useCalModal?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  hasArrow?: boolean;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  calLink,
  useCalModal,
  icon,
  iconPosition = "right",
  hasArrow = false,
  fullWidth = false,
  className = "",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold tracking-wider uppercase text-xs transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group select-none";

  const sizeStyles = {
    sm: "text-[11px] py-1.5 px-3.5 gap-2 btn-chamfer-sm",
    md: hasArrow ? "text-xs py-2 pl-4 pr-2.5 gap-2.5 btn-chamfer" : "text-xs py-2.5 px-5 gap-2 btn-chamfer",
    lg: hasArrow ? "text-xs py-3 pl-6 pr-3 gap-3 btn-chamfer-lg" : "text-sm py-3.5 px-7 gap-2.5 btn-chamfer-lg",
  };

  const variantStyles = {
    primary:
      "bg-[#7851A9] text-white hover:bg-[#684196] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] active:scale-[0.98]",
    secondary:
      "bg-white text-[#0A0A0A] hover:bg-[#EDEDED] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)] active:scale-[0.98]",
    outline:
      "bg-white/[0.04] text-white hover:bg-white/[0.08] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.45)] active:scale-[0.98]",
    ghost:
      "bg-transparent text-[#A8A8A8] hover:text-white hover:bg-white/5 active:scale-[0.98]",
    paper:
      "bg-[#FAFAFA] text-[#0A0A0A] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.12)] hover:bg-white active:scale-[0.98]",
    dark:
      "bg-[#111111] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)] active:scale-[0.98]",
  };

  const arrowChipStyles = {
    sm: "w-5 h-5",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const arrowIconSizes = {
    sm: 12,
    md: 15,
    lg: 18,
  };

  const combinedClassName = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    fullWidth ? "w-full" : "",
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="inline-flex shrink-0">{icon}</span>}
      <span className="font-semibold">{children}</span>
      {icon && iconPosition === "right" && <span className="inline-flex shrink-0">{icon}</span>}
      {hasArrow && (
        <span
          className={cn(
            "rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:translate-x-0.5",
            arrowChipStyles[size],
            variant === "primary"
              ? "bg-[#0A0A0A] text-white"
              : variant === "paper"
              ? "bg-[#7851A9] text-white"
              : "bg-[#7851A9] text-white"
          )}
        >
          <ArrowRight size={arrowIconSizes[size]} strokeWidth={2.5} />
        </span>
      )}
    </>
  );

  const isCalTrigger = useCalModal || !!calLink || href === "/boka-mote";
  const activeCalLink = calLink || DEFAULT_CAL_LINK;

  const handleCalClick = (e: React.MouseEvent<HTMLElement>) => {
    if (props.onClick) {
      props.onClick(e as unknown as React.MouseEvent<HTMLButtonElement>);
    }
    if (isCalTrigger && !isExternal) {
      e.preventDefault();
      openCalModal(activeCalLink);
    }
  };

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={combinedClassName}
        onClick={isCalTrigger ? handleCalClick : props.onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        data-cal-link={isCalTrigger ? activeCalLink : undefined}
        data-cal-config={isCalTrigger ? '{"layout":"month_view","theme":"dark"}' : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={combinedClassName}
      onClick={isCalTrigger ? handleCalClick : props.onClick}
      data-cal-link={isCalTrigger ? activeCalLink : undefined}
      data-cal-config={isCalTrigger ? '{"layout":"month_view","theme":"dark"}' : undefined}
      {...props}
    >
      {content}
    </button>
  );
};

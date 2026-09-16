"use client";

import React from "react";
import { openCalModal, DEFAULT_CAL_LINK } from "./CalProvider";

interface CalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  calLink?: string;
  children: React.ReactNode;
  className?: string;
}

export function CalButton({
  calLink = DEFAULT_CAL_LINK,
  children,
  className = "",
  onClick,
  ...rest
}: CalButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
    if (!e.defaultPrevented) {
      e.preventDefault();
      openCalModal(calLink);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      data-cal-link={calLink}
      data-cal-config='{"layout":"month_view","theme":"dark"}'
      className={className}
      {...rest}
    >
      {children}
    </button>
  );
}

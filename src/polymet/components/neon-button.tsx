"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface NeonButtonProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline";
  href?: string;
  disabled?: boolean;
}

export default function NeonButton({
  children,
  className,
  glowColor = "pink",
  onClick,
  size = "md",
  variant = "solid",
  href,
  disabled = false,
}: NeonButtonProps) {
  const glowColorMap = {
    pink: "shadow-pink-500/50 hover:shadow-pink-500/70 border-pink-500 hover:bg-pink-500/20",
    blue: "shadow-blue-500/50 hover:shadow-blue-500/70 border-blue-500 hover:bg-blue-500/20",
    purple:
      "shadow-purple-500/50 hover:shadow-purple-500/70 border-purple-500 hover:bg-purple-500/20",
    cyan: "shadow-cyan-500/50 hover:shadow-cyan-500/70 border-cyan-500 hover:bg-cyan-500/20",
    green:
      "shadow-green-500/50 hover:shadow-green-500/70 border-green-500 hover:bg-green-500/20",
  };

  const textColorMap = {
    pink: "text-pink-500",
    blue: "text-blue-500",
    purple: "text-purple-500",
    cyan: "text-cyan-500",
    green: "text-green-500",
  };

  const sizeMap = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const glow =
    glowColorMap[glowColor as keyof typeof glowColorMap] || glowColorMap.pink;
  const textColor =
    textColorMap[glowColor as keyof typeof textColorMap] || textColorMap.pink;
  const buttonSize = sizeMap[size];

  const buttonClasses = cn(
    "relative font-bold tracking-wider uppercase transition-all duration-300",
    "border-2 rounded-md shadow-lg",
    buttonSize,
    variant === "solid"
      ? `bg-${glowColor}-500 text-black hover:bg-${glowColor}-600`
      : `bg-transparent ${textColor} ${glow}`,
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    `focus:ring-${glowColor}-500`,
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  if (href && !disabled) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {children}
    </button>
  );
}

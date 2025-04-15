"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CyberCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  hoverEffect?: boolean;
  variant?: "solid" | "glass" | "outline";
}

export default function CyberCard({
  children,
  className,
  glowColor = "pink",
  hoverEffect = true,
  variant = "solid",
}: CyberCardProps) {
  const glowColorMap = {
    pink: "shadow-pink-500/30 border-pink-500/50",
    blue: "shadow-blue-500/30 border-blue-500/50",
    purple: "shadow-purple-500/30 border-purple-500/50",
    cyan: "shadow-cyan-500/30 border-cyan-500/50",
    green: "shadow-green-500/30 border-green-500/50",
  };

  const hoverGlowMap = {
    pink: "hover:shadow-pink-500/50 hover:border-pink-500/80",
    blue: "hover:shadow-blue-500/50 hover:border-blue-500/80",
    purple: "hover:shadow-purple-500/50 hover:border-purple-500/80",
    cyan: "hover:shadow-cyan-500/50 hover:border-cyan-500/80",
    green: "hover:shadow-green-500/50 hover:border-green-500/80",
  };

  const bgMap = {
    pink: "bg-pink-950/40",
    blue: "bg-blue-950/40",
    purple: "bg-purple-950/40",
    cyan: "bg-cyan-950/40",
    green: "bg-green-950/40",
  };

  const glow =
    glowColorMap[glowColor as keyof typeof glowColorMap] || glowColorMap.pink;
  const hoverGlow = hoverEffect
    ? hoverGlowMap[glowColor as keyof typeof hoverGlowMap] || hoverGlowMap.pink
    : "";
  const bg =
    variant === "solid"
      ? bgMap[glowColor as keyof typeof bgMap] || bgMap.pink
      : "";

  const variantClasses = {
    solid: `${bg} border-2 shadow-lg ${glow}`,
    glass: "bg-white/10 backdrop-blur-md border shadow-lg border-white/20",
    outline: `bg-transparent border-2 shadow-lg ${glow}`,
  };

  return (
    <div
      className={cn(
        "rounded-lg p-6 transition-all duration-300",
        variantClasses[variant],
        hoverEffect && `transform hover:-translate-y-1 ${hoverGlow}`,
        className
      )}
    >
      {children}
    </div>
  );
}

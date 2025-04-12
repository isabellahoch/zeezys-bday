"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlowingTextProps {
  text: string;
  className?: string;
  glowColor?: string;
  textColor?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
  animate?: boolean;
}

export default function GlowingText({
  text,
  className,
  glowColor = "pink",
  textColor = "white",
  size = "4xl",
  animate = true,
}: GlowingTextProps) {
  const glowColorMap = {
    pink: "shadow-pink-500",
    blue: "shadow-blue-500",
    purple: "shadow-purple-500",
    cyan: "shadow-cyan-500",
    green: "shadow-green-500",
  };

  const textColorMap = {
    white: "text-white",
    pink: "text-pink-500",
    blue: "text-blue-500",
    purple: "text-purple-500",
    cyan: "text-cyan-500",
    green: "text-green-500",
  };

  const sizeMap = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
  };

  const glow =
    glowColorMap[glowColor as keyof typeof glowColorMap] || glowColorMap.pink;
  const color =
    textColorMap[textColor as keyof typeof textColorMap] || textColorMap.white;
  const fontSize = sizeMap[size];

  return (
    <h1
      className={cn(
        "font-bold tracking-tighter",
        fontSize,
        color,
        glow,
        animate && "animate-pulse",
        "text-shadow-lg",
        className
      )}
    >
      {text}
    </h1>
  );
}

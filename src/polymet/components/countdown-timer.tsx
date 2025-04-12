"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CountdownTimerProps {
  targetDate: Date | string;
  className?: string;
  glowColor?: string;
  onComplete?: () => void;
  title?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({
  targetDate,
  className,
  glowColor = "pink",
  onComplete,
  title = "NFT DROP COUNTDOWN",
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const glowColorMap = {
    pink: "text-pink-500 shadow-pink-500/50",
    blue: "text-blue-500 shadow-blue-500/50",
    purple: "text-purple-500 shadow-purple-500/50",
    cyan: "text-cyan-500 shadow-cyan-500/50",
    green: "text-green-500 shadow-green-500/50",
  };

  const borderColorMap = {
    pink: "border-pink-500/30",
    blue: "border-blue-500/30",
    purple: "border-purple-500/30",
    cyan: "border-cyan-500/30",
    green: "border-green-500/30",
  };

  const glow =
    glowColorMap[glowColor as keyof typeof glowColorMap] || glowColorMap.pink;
  const borderColor =
    borderColorMap[glowColor as keyof typeof borderColorMap] ||
    borderColorMap.pink;

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        if (onComplete) onComplete();
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num.toString();
  };

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <h3 className={cn("text-xl font-bold mb-4 tracking-widest", glow)}>
        {title}
      </h3>
      <div className="flex gap-4 sm:gap-6">
        {[
          { value: timeLeft.days, label: "DAYS" },
          { value: timeLeft.hours, label: "HOURS" },
          { value: timeLeft.minutes, label: "MINS" },
          { value: timeLeft.seconds, label: "SECS" },
        ].map((item, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col items-center p-2 sm:p-4 rounded-lg border-2 bg-black/50",
              "min-w-[60px] sm:min-w-[80px]",
              borderColor
            )}
          >
            <span
              className={cn("text-2xl sm:text-4xl font-mono font-bold", glow)}
            >
              {formatNumber(item.value)}
            </span>
            <span className="text-xs sm:text-sm text-gray-400 mt-1">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

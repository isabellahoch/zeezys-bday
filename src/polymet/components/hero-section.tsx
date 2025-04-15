"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import GlowingText from "@/polymet/components/glowing-text";
import NeonButton from "@/polymet/components/neon-button";
import AnimatedBackground from "@/polymet/components/animated-background";

interface HeroSectionProps {
  className?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export default function HeroSection({
  className,
  title = "$ZEEZYS",
  subtitle = "THE FUTURE OF CRYPTO",
  description = "A revolutionary cryptocurrency with exclusive NFT drops and futuristic vision. Join the cyberpunk financial revolution.",
  ctaText = "TRADE NOW",
  ctaLink = "https://pump.fun/coin/D7wYsczJEPfVEdbVTRFpED1CkGxPrDD3gATfGPx6pump",
  secondaryCtaText = "LEARN MORE",
  secondaryCtaLink = "#about",
}: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const { width, height, left, top } =
        heroRef.current.getBoundingClientRect();

      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      const elements = heroRef.current.querySelectorAll(".parallax");
      elements.forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-speed") || "0");
        const rotateSpeed = parseFloat(el.getAttribute("data-rotate") || "0");

        const htmlEl = el as HTMLElement;
        htmlEl.style.transform = `translate(${-x * speed * 50}px, ${-y * speed * 50}px) rotate(${rotateSpeed * (x + y)}deg)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className={cn(
        "relative min-h-screen flex items-center justify-center overflow-hidden bg-black",
        className
      )}
    >
      <AnimatedBackground />

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-pink-500/20 blur-3xl parallax"
          data-speed="0.5"
        ></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl parallax"
          data-speed="0.7"
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full bg-blue-500/20 blur-3xl parallax"
          data-speed="0.3"
        ></div>
      </div>

      {/* Cyberpunk Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="mb-4 parallax" data-speed="0.2">
            <GlowingText
              text={subtitle}
              size="xl"
              glowColor="pink"
              className="tracking-widest"
            />
          </div>

          <div className="mb-6 parallax" data-speed="0.1" data-rotate="2">
            <GlowingText
              text={title}
              size="6xl"
              glowColor="pink"
              className="font-black"
            />
          </div>

          <p
            className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto parallax"
            data-speed="0.15"
          >
            {description}
          </p>

          <div
            className="flex flex-wrap gap-4 justify-center parallax"
            data-speed="0.2"
          >
            <NeonButton href={ctaLink} size="lg" glowColor="pink">
              {ctaText}
            </NeonButton>
            <NeonButton
              href={secondaryCtaLink}
              size="lg"
              variant="outline"
              glowColor="pink"
            >
              {secondaryCtaText}
            </NeonButton>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "TOTAL SUPPLY", value: "1,000,000,000" },
              { label: "PRESALE PRICE", value: "$0.0001" },
              { label: "NFT COLLECTION", value: "10,000" },
              { label: "LAUNCH DATE", value: "APRIL 15" },
            ].map((stat, index) => (
              <div
                key={index}
                className="parallax"
                data-speed={0.1 + index * 0.05}
              >
                <div className="text-2xl font-bold text-pink-500 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}

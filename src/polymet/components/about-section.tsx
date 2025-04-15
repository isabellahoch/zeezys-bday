import React from "react";
import { cn } from "@/lib/utils";
import CyberCard from "@/polymet/components/cyber-card";
import GlowingText from "@/polymet/components/glowing-text";

import zPoster from "@/assets/z_poster.png";
import zGrindset from "@/assets/z_grindset.png";

interface AboutSectionProps {
  className?: string;
}

export default function AboutSection({ className }: AboutSectionProps) {
  const features = [
    {
      title: "NEXT-GEN BLOCKCHAIN",
      description:
        "Built on cutting-edge technology for lightning-fast transactions and minimal fees.",
      icon: (
        <svg
          className="w-10 h-10 text-pink-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "EXCLUSIVE NFT ACCESS",
      description:
        "Token holders get priority access to limited edition cyberpunk NFT drops.",
      icon: (
        <svg
          className="w-10 h-10 text-pink-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
          />
        </svg>
      ),
    },
    {
      title: "COMMUNITY GOVERNANCE",
      description:
        "Decentralized decision-making puts the power in the hands of our community.",
      icon: (
        <svg
          className="w-10 h-10 text-pink-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "DEFLATIONARY TOKENOMICS",
      description:
        "Strategic burn mechanisms ensure increasing scarcity and long-term value growth.",
      icon: (
        <svg
          className="w-10 h-10 text-pink-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="about"
      className={cn("py-20 bg-black relative overflow-hidden", className)}
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <GlowingText
            text="ABOUT $ZEEZYS"
            size="4xl"
            glowColor="pink"
            className="mb-4"
          />

          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            $ZEEZYS is more than just a cryptocurrency - it's a digital
            revolution combining cutting-edge blockchain technology with
            exclusive NFT access and a vibrant community-driven ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <CyberCard
                key={index}
                glowColor={index % 2 === 0 ? "pink" : "purple"}
                variant={index % 3 === 0 ? "solid" : "outline"}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </CyberCard>
            ))}
          </div>

          {/* Right Column - Image and Description */}
          <div className="flex flex-col gap-6 justify-center items-center">
            <CyberCard
              glowColor="pink"
              variant="glass"
              className="overflow-hidden"
            >
              <div className="flex flex-row gap-4">
                <img
                  src={zPoster}
                  alt="$ZEEZYS Cryptocurrency"
                  className="w-64 h-full object-cover rounded-md mb-4"
              />
              <img
                src={zGrindset}
                alt="$ZEEZYS Cryptocurrency"
                  className="w-64 h-full object-cover rounded-md mb-4"
                />
              </div>
            </CyberCard>
            <CyberCard
              glowColor="pink"
              variant="glass"
              className="overflow-hidden"
            >

              <h3 className="text-xl font-bold text-pink-500 mb-2">
                THE CYBERPUNK FINANCIAL REVOLUTION
              </h3>
              <p className="text-gray-300">
                In a world dominated by traditional financial systems, $ZEEZYS
                emerges as a beacon of innovation. Our vision is to create a
                decentralized ecosystem where art, technology, and finance
                converge to empower users worldwide.
              </p>
            </CyberCard>
          </div>
        </div>
      </div>
    </section>
  );
}

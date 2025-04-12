"use client";

import React from "react";
import { cn } from "@/lib/utils";
import GlowingText from "@/polymet/components/glowing-text";
import CyberCard from "@/polymet/components/cyber-card";
import NFTShowcase from "@/polymet/components/nft-showcase";
import CountdownTimer from "@/polymet/components/countdown-timer";
import NeonButton from "@/polymet/components/neon-button";

interface NFTSectionProps {
  className?: string;
}

export default function NFTSection({ className }: NFTSectionProps) {
  // Set target date to 30 days from now
  const dropDate = new Date();
  dropDate.setDate(dropDate.getDate() + 30);

  const mockNFTs = [
    {
      id: "1",
      name: "Cyber Punk Zeezys #001",
      image: "https://picsum.photos/seed/nft1/800/800",
      rarity: "mythic" as const,
      description:
        "The rarest NFT in the collection. This legendary piece features futuristic cyberpunk aesthetics with neon pink accents and holographic elements.",
    },
    {
      id: "2",
      name: "Neon Rider Zeezys #042",
      image: "https://picsum.photos/seed/nft2/800/800",
      rarity: "legendary" as const,
      description:
        "A legendary NFT featuring a sleek neon design with animated elements. Owners get exclusive access to special community events.",
    },
    {
      id: "3",
      name: "Digital Dreamer Zeezys #107",
      image: "https://picsum.photos/seed/nft3/800/800",
      rarity: "rare" as const,
      description:
        "A rare NFT with vibrant colors and digital artifacts. This piece represents the fusion of art and technology in the digital age.",
    },
    {
      id: "4",
      name: "Glitch Art Zeezys #256",
      image: "https://picsum.photos/seed/nft4/800/800",
      rarity: "uncommon" as const,
      description:
        "An uncommon NFT featuring glitch art aesthetics. The distorted visuals create a unique visual experience that changes with each viewing.",
    },
    {
      id: "5",
      name: "Virtual Reality Zeezys #389",
      image: "https://picsum.photos/seed/nft5/800/800",
      rarity: "common" as const,
      description:
        "A common NFT inspired by virtual reality landscapes. Despite its common rarity, it features intricate details and vibrant colors.",
    },
  ];

  const nftFeatures = [
    {
      title: "EXCLUSIVE UTILITY",
      description:
        "Each NFT provides unique benefits within the $ZEEZYS ecosystem, including staking bonuses and governance rights.",
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "ANIMATED ELEMENTS",
      description:
        "Our NFTs feature dynamic animated elements that evolve over time, creating a living digital art piece.",
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
            d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
          />
        </svg>
      ),
    },
    {
      title: "RARITY TIERS",
      description:
        "Five distinct rarity tiers, each with increasing scarcity and enhanced visual elements.",
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
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      title: "COMMUNITY REWARDS",
      description:
        "NFT holders receive a share of transaction fees and exclusive airdrops from future collections.",
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
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="nft" className={cn("py-20 bg-black relative", className)}>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-pink-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <GlowingText
            text="EXCLUSIVE NFT COLLECTION"
            size="4xl"
            glowColor="pink"
            className="mb-4"
          />

          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Our limited edition cyberpunk-themed NFT collection is dropping
            soon. Each piece is a unique digital masterpiece with exclusive
            utility in the $ZEEZYS ecosystem.
          </p>
        </div>

        <div className="mb-16">
          <NFTShowcase
            nfts={mockNFTs}
            title="ZEEZYS CYBERPUNK COLLECTION"
            subtitle="10,000 unique digital collectibles with utility"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-1">
            <CyberCard
              glowColor="pink"
              className="h-full flex flex-col justify-center items-center"
            >
              <CountdownTimer
                targetDate={dropDate}
                glowColor="pink"
                title="NFT DROP COUNTDOWN"
              />

              <div className="mt-8 w-full">
                <NeonButton glowColor="pink" className="w-full">
                  JOIN WHITELIST
                </NeonButton>
              </div>
            </CyberCard>
          </div>

          <div className="md:col-span-2">
            <CyberCard glowColor="purple" variant="glass">
              <h3 className="text-xl font-bold text-purple-500 mb-6">
                NFT COLLECTION DETAILS
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {nftFeatures.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h4 className="text-white font-bold mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-pink-500/10 rounded-md border border-pink-500/30">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-pink-500/20 rounded-full">
                    <svg
                      className="w-6 h-6 text-pink-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">
                      TOKEN HOLDERS ADVANTAGE
                    </h4>
                    <p className="text-gray-400 text-sm">
                      $ZEEZYS token holders receive priority access and a 20%
                      discount on the NFT mint price.
                    </p>
                  </div>
                </div>
              </div>
            </CyberCard>
          </div>
        </div>

        <div className="text-center">
          <GlowingText
            text="RARITY DISTRIBUTION"
            size="2xl"
            glowColor="pink"
            className="mb-8"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { tier: "COMMON", percentage: "60%", color: "gray" },
              { tier: "UNCOMMON", percentage: "25%", color: "green" },
              { tier: "RARE", percentage: "10%", color: "blue" },
              { tier: "LEGENDARY", percentage: "4%", color: "purple" },
              { tier: "MYTHIC", percentage: "1%", color: "pink" },
            ].map((rarity, index) => (
              <CyberCard
                key={index}
                glowColor={
                  rarity.color as "pink" | "blue" | "purple" | "cyan" | "green"
                }
                className="text-center"
              >
                <h4 className={`text-${rarity.color}-400 font-bold mb-1`}>
                  {rarity.tier}
                </h4>
                <p className="text-2xl font-bold text-white">
                  {rarity.percentage}
                </p>
              </CyberCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

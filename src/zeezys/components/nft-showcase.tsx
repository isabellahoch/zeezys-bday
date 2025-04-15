"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import CyberCard from "@/zeezys/components/cyber-card";

interface NFT {
  id: string;
  name: string;
  image: string;
  rarity: "common" | "uncommon" | "rare" | "legendary" | "mythic";
  description: string;
}

interface NFTShowcaseProps {
  nfts: NFT[];
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function NFTShowcase({
  nfts,
  className,
  title = "UPCOMING NFT COLLECTION",
  subtitle = "Exclusive digital collectibles dropping soon",
}: NFTShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const rarityColorMap = {
    common: "text-gray-400",
    uncommon: "text-green-400",
    rare: "text-blue-400",
    legendary: "text-purple-400",
    mythic: "text-pink-400",
  };

  const rarityBorderMap = {
    common: "border-gray-400",
    uncommon: "border-green-400",
    rare: "border-blue-400",
    legendary: "border-purple-400",
    mythic: "border-pink-400",
  };

  const rarityGlowMap = {
    common: "",
    uncommon: "shadow-green-400/30",
    rare: "shadow-blue-400/30",
    legendary: "shadow-purple-400/30",
    mythic: "shadow-pink-400/30",
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % nfts.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + nfts.length) % nfts.length);
  };

  const activeNFT = nfts[activeIndex];

  return (
    <div className={cn("w-full max-w-4xl mx-auto", className)}>
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          {title}
        </h2>
        <p className="text-gray-400">{subtitle}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Main NFT Display */}
        <div className="w-full md:w-1/2">
          <CyberCard
            glowColor={
              activeNFT.rarity === "mythic"
                ? "pink"
                : activeNFT.rarity === "legendary"
                  ? "purple"
                  : activeNFT.rarity === "rare"
                    ? "blue"
                    : activeNFT.rarity === "uncommon"
                      ? "green"
                      : "pink"
            }
            className="relative overflow-hidden aspect-square"
          >
            <img
              src={activeNFT.image}
              alt={activeNFT.name}
              className="w-full h-full object-cover rounded-md transform transition-transform duration-700 hover:scale-110"
            />

            <div className="absolute top-4 right-4">
              <span
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-bold uppercase",
                  "border",
                  rarityColorMap[activeNFT.rarity],
                  rarityBorderMap[activeNFT.rarity],
                  rarityGlowMap[activeNFT.rarity]
                )}
              >
                {activeNFT.rarity}
              </span>
            </div>
          </CyberCard>
        </div>

        {/* NFT Info */}
        <div className="w-full md:w-1/2">
          <CyberCard variant="glass" className="h-full">
            <h3 className="text-2xl font-bold text-pink-500 mb-4">
              {activeNFT.name}
            </h3>
            <p className="text-gray-300 mb-6">{activeNFT.description}</p>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={handlePrev}
                className="px-4 py-2 border border-pink-500/50 rounded-md text-pink-500 hover:bg-pink-500/20 transition-colors"
              >
                Previous
              </button>
              <span className="text-gray-400">
                {activeIndex + 1} / {nfts.length}
              </span>
              <button
                onClick={handleNext}
                className="px-4 py-2 border border-pink-500/50 rounded-md text-pink-500 hover:bg-pink-500/20 transition-colors"
              >
                Next
              </button>
            </div>
          </CyberCard>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {nfts.map((nft, index) => (
          <div
            key={nft.id}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "cursor-pointer rounded-md overflow-hidden border-2 transition-all",
              index === activeIndex
                ? cn(
                    "border-pink-500 shadow-lg shadow-pink-500/30",
                    rarityBorderMap[nft.rarity]
                  )
                : "border-gray-700 opacity-60 hover:opacity-100"
            )}
          >
            <img
              src={nft.image}
              alt={nft.name}
              className="w-full h-full object-cover aspect-square"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

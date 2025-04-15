"use client";

import React from "react";
import { cn } from "@/lib/utils";
import CyberCard from "@/zeezys/components/cyber-card";
import GlowingText from "@/zeezys/components/glowing-text";
import { ChartContainer } from "@/components/ui/chart";
import { Cell, Pie, PieChart } from "recharts";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

interface TokenomicsProps {
  className?: string;
}

export default function TokenomicsSection({ className }: TokenomicsProps) {
  const tokenDistribution = [
    { name: "Presale", value: 30, color: "hsl(var(--chart-1))" },
    { name: "Liquidity", value: 25, color: "hsl(var(--chart-2))" },
    { name: "NFT Rewards", value: 20, color: "hsl(var(--chart-3))" },
    { name: "Team", value: 10, color: "hsl(var(--chart-4))" },
    { name: "Marketing", value: 10, color: "hsl(var(--chart-5))" },
    { name: "Development", value: 5, color: "#9333ea" },
  ];

  const tokenDetails = [
    { label: "Token Name", value: "$ZEEZYS" },
    { label: "Token Type", value: "ERC-20" },
    { label: "Total Supply", value: "1,000,000,000" },
    { label: "Initial Price", value: "$0.0001" },
    { label: "Presale Start", value: "Coming Soon" },
    { label: "Listing Price", value: "$0.0002" },
  ];

  const tokenFeatures = [
    {
      title: "2% BURN",
      description:
        "2% of every transaction is permanently burned, reducing supply over time",
      color: "pink",
    },
    {
      title: "3% LIQUIDITY",
      description:
        "3% of transactions are added to the liquidity pool to ensure stability",
      color: "blue",
    },
    {
      title: "2% REWARDS",
      description:
        "2% is redistributed to all holders, rewarding long-term investors",
      color: "purple",
    },
  ];

  return (
    <section
      id="tokenomics"
      className={cn("py-20 bg-black relative", className)}
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-grid-pattern opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-grid-pattern opacity-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <GlowingText
            text="TOKENOMICS"
            size="4xl"
            glowColor="pink"
            className="mb-4"
          />

          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Our tokenomics are designed for long-term sustainability, community
            rewards, and increasing scarcity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Distribution Chart */}
          <CyberCard glowColor="pink" className="lg:col-span-1">
            <h3 className="text-xl font-bold text-pink-500 mb-4 text-center">
              TOKEN DISTRIBUTION
            </h3>
            <ChartContainer
              config={{}}
              className="aspect-[none] h-[300px] mx-auto"
            >
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent />} />
                <Pie
                  data={tokenDistribution}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={40}
                  paddingAngle={2}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  labelLine={false}
                >
                  {tokenDistribution.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      stroke="rgba(0, 0, 0, 0.3)"
                      strokeWidth={1}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ChartContainer>
          </CyberCard>

          {/* Token Details */}
          <CyberCard
            glowColor="purple"
            variant="glass"
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-bold text-purple-500 mb-4 text-center">
              TOKEN DETAILS
            </h3>
            <div className="space-y-4">
              {tokenDetails.map((detail, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-purple-500/20 pb-2"
                >
                  <span className="text-gray-400">{detail.label}</span>
                  <span className="text-white font-bold">{detail.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-pink-500/10 rounded-md border border-pink-500/30">
              <h4 className="text-pink-500 font-bold mb-2">PRESALE BONUS</h4>
              <p className="text-gray-300">
                Early investors receive a 20% bonus on all purchases during the
                presale phase.
              </p>
            </div>
          </CyberCard>

          {/* Transaction Features */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <h3 className="text-xl font-bold text-pink-500 mb-2 text-center">
              TRANSACTION FEATURES
            </h3>

            {tokenFeatures.map((feature, index) => (
              <CyberCard
                key={index}
                glowColor={
                  feature.color as "pink" | "blue" | "purple" | "cyan" | "green"
                }
                variant="outline"
              >
                <h4 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-400">{feature.description}</p>
              </CyberCard>
            ))}

            <CyberCard glowColor="cyan" className="mt-auto">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-cyan-400">TOTAL TAX</h4>
                  <p className="text-gray-400">Per transaction</p>
                </div>
                <div className="text-3xl font-bold text-white">7%</div>
              </div>
            </CyberCard>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <CyberCard glowColor="pink" variant="solid">
            <h3 className="text-xl font-bold text-pink-500 mb-4">
              DEFLATIONARY MECHANISM
            </h3>
            <p className="text-gray-300 mb-4">
              $ZEEZYS implements a strategic burn mechanism that continuously
              reduces the total supply, creating scarcity and potentially
              increasing value over time.
            </p>
            <div className="bg-black/30 p-4 rounded-md border border-pink-500/30">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Initial Supply</span>
                <span className="text-white">1,000,000,000</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Burn Rate</span>
                <span className="text-white">2% per transaction</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Projected Supply (Year 1)</span>
                <span className="text-white">~850,000,000</span>
              </div>
            </div>
          </CyberCard>

          <CyberCard glowColor="purple" variant="outline">
            <h3 className="text-xl font-bold text-purple-500 mb-4">
              NFT INTEGRATION
            </h3>
            <p className="text-gray-300 mb-4">
              $ZEEZYS token holders gain exclusive access to our upcoming NFT
              collections, with staking rewards and special privileges.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/30 p-3 rounded-md border border-purple-500/30">
                <h4 className="text-white font-bold mb-1">NFT Staking</h4>
                <p className="text-gray-400 text-sm">
                  Earn passive income by staking your NFTs
                </p>
              </div>
              <div className="bg-black/30 p-3 rounded-md border border-purple-500/30">
                <h4 className="text-white font-bold mb-1">Exclusive Access</h4>
                <p className="text-gray-400 text-sm">
                  Priority minting for token holders
                </p>
              </div>
              <div className="bg-black/30 p-3 rounded-md border border-purple-500/30">
                <h4 className="text-white font-bold mb-1">Governance</h4>
                <p className="text-gray-400 text-sm">
                  Vote on future NFT collections
                </p>
              </div>
              <div className="bg-black/30 p-3 rounded-md border border-purple-500/30">
                <h4 className="text-white font-bold mb-1">Royalties</h4>
                <p className="text-gray-400 text-sm">
                  Share in secondary market sales
                </p>
              </div>
            </div>
          </CyberCard>
        </div>
      </div>
    </section>
  );
}

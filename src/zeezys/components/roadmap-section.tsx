"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import GlowingText from "@/zeezys/components/glowing-text";
import CyberCard from "@/zeezys/components/cyber-card";

interface RoadmapItem {
  phase: string;
  title: string;
  description: string;
  tasks: string[];
  status: "completed" | "in-progress" | "upcoming";
  date: string;
}

interface RoadmapSectionProps {
  className?: string;
}

export default function RoadmapSection({ className }: RoadmapSectionProps) {
  const [activePhase, setActivePhase] = useState<string>("1");

  const roadmapItems: RoadmapItem[] = [
    {
      phase: "1",
      title: "PROJECT LAUNCH",
      description: "Initial development and community building phase",
      tasks: [
        "Website and social media launch",
        "Community building initiatives",
        "Whitepaper release",
        "Smart contract development and audit",
        "Marketing partnerships",
      ],

      status: "completed",
      date: "Q1 2025",
    },
    {
      phase: "2",
      title: "TOKEN PRESALE",
      description: "Initial token offering and exchange listings",
      tasks: [
        "Private sale for early investors",
        "Public presale launch",
        "Initial DEX offering",
        "CEX listings",
        "Liquidity pool establishment",
      ],

      status: "in-progress",
      date: "Q2 2025",
    },
    {
      phase: "3",
      title: "NFT COLLECTION",
      description: "Launch of the exclusive cyberpunk NFT collection",
      tasks: [
        "NFT artwork development",
        "Smart contract implementation",
        "Whitelist registration",
        "NFT presale for token holders",
        "Public mint phase",
      ],

      status: "upcoming",
      date: "Q3 2025",
    },
    {
      phase: "4",
      title: "ECOSYSTEM EXPANSION",
      description: "Building additional utility and partnerships",
      tasks: [
        "NFT staking platform",
        "Governance system implementation",
        "Strategic partnerships",
        "Cross-chain integration",
        "Community DAO establishment",
      ],

      status: "upcoming",
      date: "Q4 2025",
    },
    {
      phase: "5",
      title: "METAVERSE INTEGRATION",
      description: "Expanding into virtual worlds and gaming",
      tasks: [
        "Metaverse land acquisition",
        "Virtual gallery for NFT display",
        "Play-to-earn game development",
        "Virtual events and conferences",
        "AR/VR experiences",
      ],

      status: "upcoming",
      date: "Q1 2026",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500";
      case "in-progress":
        return "bg-blue-500";
      case "upcoming":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "COMPLETED";
      case "in-progress":
        return "IN PROGRESS";
      case "upcoming":
        return "UPCOMING";
      default:
        return "UPCOMING";
    }
  };

  const activeItem =
    roadmapItems.find((item) => item.phase === activePhase) || roadmapItems[0];

  return (
    <section id="roadmap" className={cn("py-20 bg-black relative", className)}>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-0 w-64 h-64 rounded-full bg-pink-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <GlowingText
            text="ROADMAP"
            size="4xl"
            glowColor="pink"
            className="mb-4"
          />

          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Our strategic plan for development and growth. We're building a
            comprehensive ecosystem with a clear vision for the future.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-4">
          <div className="flex space-x-2">
            {roadmapItems.map((item, index) => (
              <button
                key={item.phase}
                onClick={() => setActivePhase(item.phase)}
                className={cn(
                  "relative px-6 py-3 min-w-[100px] border-2 rounded-md transition-all duration-300",
                  activePhase === item.phase
                    ? "border-pink-500 bg-pink-500/20 text-white"
                    : "border-gray-700 hover:border-pink-500/50 text-gray-400 hover:text-white"
                )}
              >
                <div className="text-sm font-bold">PHASE {item.phase}</div>
                <div
                  className={cn(
                    "absolute -top-1 -right-1 w-3 h-3 rounded-full",
                    getStatusColor(item.status)
                  )}
                ></div>
              </button>
            ))}
          </div>
        </div>

        {/* Active Phase Content */}
        <CyberCard
          glowColor={
            activeItem.status === "completed"
              ? "green"
              : activeItem.status === "in-progress"
                ? "blue"
                : "pink"
          }
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-6">
            {/* Phase Info */}
            <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-gray-700 pb-4 md:pb-0 md:pr-6">
              <div className="text-sm text-gray-400 mb-1">
                {activeItem.date}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                PHASE {activeItem.phase}
              </h3>
              <h4 className="text-xl font-bold text-pink-500 mb-3">
                {activeItem.title}
              </h4>
              <p className="text-gray-300 mb-4">{activeItem.description}</p>

              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    "w-3 h-3 rounded-full",
                    getStatusColor(activeItem.status)
                  )}
                ></div>
                <span className="text-sm font-bold">
                  {getStatusText(activeItem.status)}
                </span>
              </div>
            </div>

            {/* Tasks */}
            <div className="w-full md:w-2/3">
              <h4 className="text-lg font-bold text-white mb-4">MILESTONES</h4>
              <ul className="space-y-4">
                {activeItem.tasks.map((task, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div
                      className={cn(
                        "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                        activeItem.status === "completed"
                          ? "bg-green-500/20 text-green-500"
                          : activeItem.status === "in-progress" && index < 2
                            ? "bg-blue-500/20 text-blue-500"
                            : "bg-gray-800 text-gray-500"
                      )}
                    >
                      {activeItem.status === "completed" ||
                      (activeItem.status === "in-progress" && index < 2) ? (
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <span className="text-xs">{index + 1}</span>
                      )}
                    </div>
                    <span
                      className={cn(
                        "text-base",
                        activeItem.status === "completed" ||
                          (activeItem.status === "in-progress" && index < 2)
                          ? "text-white"
                          : "text-gray-400"
                      )}
                    >
                      {task}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CyberCard>

        {/* Timeline Visualization */}
        <div className="mt-16 relative">
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-800 transform -translate-y-1/2"></div>
          <div className="relative flex justify-between max-w-5xl mx-auto">
            {roadmapItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <button
                  onClick={() => setActivePhase(item.phase)}
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center z-10 transition-all duration-300",
                    activePhase === item.phase
                      ? "bg-pink-500 text-white"
                      : item.status === "completed"
                        ? "bg-green-500 text-white"
                        : item.status === "in-progress"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-700 text-gray-400"
                  )}
                >
                  {item.phase}
                </button>
                <div
                  className={cn(
                    "mt-2 text-xs font-bold",
                    activePhase === item.phase
                      ? "text-pink-500"
                      : "text-gray-500"
                  )}
                >
                  {item.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

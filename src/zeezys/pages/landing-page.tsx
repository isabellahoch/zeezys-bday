import React from "react";
import Navbar from "@/zeezys/components/navbar";
import HeroSection from "@/zeezys/components/hero-section";
import AboutSection from "@/zeezys/components/about-section";
import TokenomicsSection from "@/zeezys/components/tokenomics-section";
import NFTSection from "@/zeezys/components/nft-section";
import RoadmapSection from "@/zeezys/components/roadmap-section";
import Footer from "@/zeezys/components/footer";

export default function LandingPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TokenomicsSection />
      <NFTSection />
      <RoadmapSection />
      <Footer />
    </div>
  );
}

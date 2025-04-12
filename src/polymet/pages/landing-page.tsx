import React from "react";
import Navbar from "@/polymet/components/navbar";
import HeroSection from "@/polymet/components/hero-section";
import AboutSection from "@/polymet/components/about-section";
import TokenomicsSection from "@/polymet/components/tokenomics-section";
import NFTSection from "@/polymet/components/nft-section";
import RoadmapSection from "@/polymet/components/roadmap-section";
import Footer from "@/polymet/components/footer";

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

"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import NeonButton from "@/zeezys/components/neon-button";
import { MenuIcon, XIcon } from "lucide-react";

import zLogo from "@/assets/z_coin_logo.png";

interface NavbarProps {
  className?: string;
  logo?: string;
  logoText?: string;
}

export default function Navbar({
  className,
  logo = zLogo,
  logoText = "$ZEEZYS",
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "ABOUT", href: "#about" },
    { name: "TOKENOMICS", href: "#tokenomics" },
    { name: "NFT COLLECTION", href: "#nft" },
    { name: "ROADMAP", href: "#roadmap" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-black/80 backdrop-blur-lg shadow-lg shadow-pink-500/10"
          : "bg-transparent",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Zeezys Logo"
              className="w-10 h-10 rounded-full border border-pink-500/50"
            />

            <span className="text-xl font-bold text-white">{logoText}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-pink-500 transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden md:block">
            <NeonButton glowColor="pink" size="sm" onClick={() => {
              window.open("https://metamask.io/", "_blank")
            }}>
              CONNECT WALLET
            </NeonButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg z-40 transition-all duration-300 flex flex-col",
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          )}
        >
          <div className="container mx-auto px-4 py-20">
            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-pink-500 transition-colors text-xl font-medium py-2 border-b border-gray-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              <div className="mt-6">
                <NeonButton glowColor="pink" className="w-full" onClick={() => { window.open("https://metamask.io/", "_blank") }}>
                  CONNECT WALLET
                </NeonButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

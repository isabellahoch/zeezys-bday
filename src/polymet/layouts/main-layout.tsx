import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return <div className="min-h-screen bg-black text-white">{children}</div>;
}

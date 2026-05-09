import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MouseTracker from "@/components/MouseTracker";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Visibility Pro — Digital Growth, Engineered for Results.",
  description: "Visibility Pro is an ultra-premium, Silicon Valley level AI-powered software house. We specialize in Next-Gen Web Development, Search Engine Optimization (SEO), PPC campaigns, and High-Conversion Sales funnels.",
  keywords: ["Software House", "AI Agency", "Web Development", "SEO", "PPC", "Social Media", "Local Visibility", "Next.js 15", "Visibility Pro"],
  authors: [{ name: "Visibility Pro" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased scroll-smooth">
      <body className="min-h-full bg-dark-bg text-foreground overflow-x-hidden selection:bg-cyber-violet selection:text-white">
        {/* Kinetic film grain overlay */}
        <div className="noise-overlay" />
        
        {/* Mouse follow global spotlight */}
        <MouseTracker />

        {/* Lenis Smooth Scroll wrapper */}
        <SmoothScroll>
          <div className="relative flex min-h-screen flex-col bg-mesh-glow">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}

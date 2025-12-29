"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export function HeroSection() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine which image to use based on theme
  const heroImage = mounted && (resolvedTheme === "dark" || theme === "dark")
    ? "/lightanime.jpg"
    : "/darkanime.jpg";

  return (
    <section className="relative w-full pt-4 md:pt-6 lg:pt-8 pb-20 md:pb-32 lg:pb-40 overflow-hidden">
      {/* Background Pattern Layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Blueprint Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Thin Geometric Lines - Horizontal */}
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(to bottom, currentColor 0.5px, transparent 0.5px)',
            backgroundSize: '100% 80px',
          }}
        />
        
        {/* Thin Geometric Lines - Vertical */}
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(to right, currentColor 0.5px, transparent 0.5px)',
            backgroundSize: '80px 100%',
          }}
        />
        
        {/* Golden Ratio Spiral Overlay */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-[0.02] dark:opacity-[0.03]"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M 500,500 m -400,0 a 400,400 0 1,1 800,0 a 400,400 0 1,1 -800,0 m 247,0 a 153,153 0 1,1 -306,0 a 153,153 0 1,1 306,0 m -95,0 a 58,58 0 1,1 -116,0 a 58,58 0 1,1 116,0"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border text-sm mb-4">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Welcome to the future</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Plan. Build. Ship.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              QuariX We provide professional and highquality website AI agents, Chatbots, iOS, and Android application design development services based on your ideas.
            </p>
            <div className="text-base md:text-lg text-muted-foreground font-medium">
              Responsive Design - Optimized for all devices
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-start items-start pt-4">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/signup">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
            {mounted && (
              <Image
                src={heroImage}
                alt="Hero"
                fill
                className="object-cover object-top rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


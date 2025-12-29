"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const playClickSound = () => {
    const audio = new Audio("/audio/ui-sounds/click.wav");
    audio.volume = 0.5; // Set volume to 50%
    audio.play().catch((error) => {
      // Handle any errors (e.g., user hasn't interacted with page yet)
      console.log("Could not play sound:", error);
    });
  };

  const handleToggle = () => {
    playClickSound();
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
        <Sun className="h-5 w-5" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      className="h-9 w-9 rounded-full relative"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}


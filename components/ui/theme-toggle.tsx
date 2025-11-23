"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const THEME_STORAGE_KEY = "clns-theme";

type ThemeMode = "light" | "dark";

const getPreferredTheme = (): ThemeMode => {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
  if (stored === "light" || stored === "dark") return stored;
  return "light";
};

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [mode, setMode] = useState<ThemeMode>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const initialMode = getPreferredTheme();
    setMode(initialMode);
    
    // Apply initial theme
    const root = document.documentElement;
    if (initialMode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    root.dataset.theme = initialMode;
  }, []);

  useEffect(() => {
    if (!mounted || typeof document === "undefined") return;
    const root = document.documentElement;
    if (mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    root.dataset.theme = mode;
    window.localStorage.setItem(THEME_STORAGE_KEY, mode);
  }, [mode, mounted]);

  const isDark = mode === "dark";

  const toggleMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      type="button"
      onClick={toggleMode}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={cn(
        "relative inline-flex h-9 w-20 items-center rounded-full border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400",
        isDark
          ? "border-cyan-500/40 bg-[#0a1426]"
          : "border-blue-200 bg-white",
        className
      )}
    >
      <span className="absolute left-2 flex h-5 w-5 items-center justify-center text-blue-500 dark:text-cyan-200">
        <Sun className="h-4 w-4" />
      </span>
      <span className="absolute right-2 flex h-5 w-5 items-center justify-center text-slate-400 dark:text-slate-400">
        <Moon className="h-4 w-4" />
      </span>

      <span
        className={cn(
          "absolute top-1 left-1 flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300",
          isDark
            ? "translate-x-9 bg-cyan-500/20 text-cyan-100"
            : "translate-x-0 bg-blue-500 text-white"
        )}
        style={{
          transform: isDark ? "translateX(44px)" : "translateX(0px)",
        }}
      >
        {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </span>
    </button>
  );
}


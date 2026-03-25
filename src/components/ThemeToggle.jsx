import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="fixed top-4 right-4 md:top-5 md:right-5 z-50
        h-10 w-10 md:h-11 md:w-11 rounded-full
        flex items-center justify-center
        bg-[hsl(var(--card))] border border-[hsl(var(--border))]
        shadow-[0_4px_20px_hsla(0,0%,0%,0.08)]
        hover:shadow-[0_6px_28px_hsla(0,0%,0%,0.14)]
        hover:scale-105 active:scale-95
        transition-all duration-300 ease-out
        focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2"
    >
      <Sun
        className="h-[1.1rem] w-[1.1rem] text-[hsl(var(--foreground))]
          rotate-0 scale-100 transition-all duration-300
          dark:-rotate-90 dark:scale-0 absolute"
      />
      <Moon
        className="h-[1.1rem] w-[1.1rem] text-[hsl(var(--foreground))]
          rotate-90 scale-0 transition-all duration-300
          dark:rotate-0 dark:scale-100 absolute"
      />
    </button>
  );
}
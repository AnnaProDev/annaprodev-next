"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";


export const ThemeToggle = () => {
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="inline-flex size-12 items-center justify-center rounded-full border-2 border-line bg-card"
        >
            <Moon className="dark:hidden" />          {/* видна в светлой теме */}
            <Sun className="hidden dark:block" />     {/* видна в тёмной теме */}
        </button>
    );
};
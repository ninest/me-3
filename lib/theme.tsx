import { createContext, ReactNode, useEffect, useState } from "react";

export const themes = ["light", "dark"] as const;
export type Theme = typeof themes[number];

const statusBarColor: Record<Theme, string> = {
  light: "#ff0000",
  dark: "#0000ff",
};

const getTheme = (): Theme => {
  return (window.localStorage.getItem("theme") as Theme) || "light";
};

export const useTheme = () => {
  const [currentTheme, _setCurrentTheme] = useState<Theme | null>(null);

  useEffect(() => {
    _setCurrentTheme(getTheme());
  }, []);

  const setTheme = (theme: Theme) => {
    _setCurrentTheme(theme);
    window.localStorage.setItem("theme", theme);
    document.body.dataset.theme = theme;
  };

  const setStatusBarColor = (color: string) => {
    document
      ?.querySelector("meta[name=theme-color]")
      ?.setAttribute("content", color);
  };

  const isLightTheme = currentTheme == "light";
  const isDarkTheme = currentTheme == "dark";

  return {
    currentTheme,
    setTheme,

    isLightTheme,
    isDarkTheme,
  };
};

export const ThemeContext = createContext(null as any);
export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useTheme();
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

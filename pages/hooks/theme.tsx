import { useTheme } from "next-themes";

const useColorTheme = () => {
  const { theme, setTheme } = useTheme();

  const setLightTheme = () => setTheme("light");
  const setDarkTheme = () => setTheme("dark");

  const isLightTheme = theme === "light";
  const isDarkTheme = theme === "dark";

  return {
    setLightTheme,
    setDarkTheme,
    isLightTheme,
    isDarkTheme,
  };
};

export default useColorTheme;

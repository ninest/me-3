import { useTheme } from "next-themes";

const useColorTheme = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const setLightTheme = () => setTheme("light");
  const setDarkTheme = () => setTheme("dark");

  const isLightTheme = resolvedTheme === "light";
  const isDarkTheme = resolvedTheme === "dark";

  return {
    setLightTheme,
    setDarkTheme,
    isLightTheme,
    isDarkTheme,
  };
};

export default useColorTheme;
